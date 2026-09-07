/**
 * BlackScholes.js - European Options Pricing & Full Greeks Analytical Solvers
 * Part of ApexQuant Institutional Engine
 */

class BlackScholes {
  // Standard Normal Cumulative Distribution Function (Phi)
  static cdf(x) {
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;

    const sign = x < 0 ? -1 : 1;
    const absX = Math.abs(x) / Math.sqrt(2.0);
    const t = 1.0 / (1.0 + p * absX);
    const erf = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);

    return 0.5 * (1.0 + sign * erf);
  }

  // Standard Normal Probability Density Function (phi)
  static pdf(x) {
    return Math.exp(-0.5 * x * x) / Math.sqrt(2.0 * Math.PI);
  }

  /**
   * Calculates Option Price & Greeks
   * @param {number} S - Spot price of underlying
   * @param {number} K - Strike price
   * @param {number} T - Time to expiration in years
   * @param {number} r - Risk-free interest rate (e.g. 0.05 for 5%)
   * @param {number} sigma - Implied volatility (e.g. 0.20 for 20%)
   * @param {number} q - Continuous dividend yield (default 0)
   */
  static calculate(S, K, T, r, sigma, q = 0) {
    if (T <= 0 || sigma <= 0) {
      const intrinsicCall = Math.max(0, S - K);
      const intrinsicPut = Math.max(0, K - S);
      return {
        callPrice: intrinsicCall,
        putPrice: intrinsicPut,
        deltaCall: S > K ? 1 : 0,
        deltaPut: S < K ? -1 : 0,
        gamma: 0,
        vega: 0,
        thetaCall: 0,
        thetaPut: 0,
        rhoCall: 0,
        rhoPut: 0
      };
    }

    const sqrtT = Math.sqrt(T);
    const d1 = (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * sqrtT);
    const d2 = d1 - sigma * sqrtT;

    const exp_qT = Math.exp(-q * T);
    const exp_rT = Math.exp(-r * T);

    const Nd1 = this.cdf(d1);
    const Nd2 = this.cdf(d2);
    const N_minus_d1 = this.cdf(-d1);
    const N_minus_d2 = this.cdf(-d2);
    const pdf_d1 = this.pdf(d1);

    // 1. Call & Put Prices
    const callPrice = S * exp_qT * Nd1 - K * exp_rT * Nd2;
    const putPrice = K * exp_rT * N_minus_d2 - S * exp_qT * N_minus_d1;

    // 2. Greeks
    const deltaCall = exp_qT * Nd1;
    const deltaPut = exp_qT * (Nd1 - 1);
    const gamma = (exp_qT * pdf_d1) / (S * sigma * sqrtT);
    const vega = S * exp_qT * sqrtT * pdf_d1 * 0.01; // 1% vol change

    const thetaCall = (- (S * sigma * exp_qT * pdf_d1) / (2 * sqrtT) - r * K * exp_rT * Nd2 + q * S * exp_qT * Nd1) / 365;
    const thetaPut  = (- (S * sigma * exp_qT * pdf_d1) / (2 * sqrtT) + r * K * exp_rT * N_minus_d2 - q * S * exp_qT * N_minus_d1) / 365;

    const rhoCall = (K * T * exp_rT * Nd2) * 0.01; // 1% rate change
    const rhoPut  = (-K * T * exp_rT * N_minus_d2) * 0.01;

    return {
      callPrice: Math.max(0, callPrice),
      putPrice: Math.max(0, putPrice),
      d1,
      d2,
      deltaCall,
      deltaPut,
      gamma,
      vega,
      thetaCall,
      thetaPut,
      rhoCall,
      rhoPut
    };
  }

  // Implied Volatility Newton-Raphson Solver
  static impliedVolatility(targetPrice, S, K, T, r, isCall = true, q = 0, tol = 0.0001, maxIter = 100) {
    let sigma = 0.3; // Initial guess 30%
    for (let i = 0; i < maxIter; i++) {
      const greeks = this.calculate(S, K, T, r, sigma, q);
      const price = isCall ? greeks.callPrice : greeks.putPrice;
      const diff = price - targetPrice;

      if (Math.abs(diff) < tol) return sigma;

      const vega = greeks.vega * 100; // raw vega
      if (Math.abs(vega) < 1e-6) break;

      sigma -= diff / vega;
      if (sigma <= 0.001) sigma = 0.001;
    }
    return sigma;
  }
}

module.exports = BlackScholes;
