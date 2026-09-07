/**
 * BlackScholesGreeks.js - Institutional Options Valuation & Sensitivities
 * Closed-form analytical solution for European call/put options and full Greeks matrix.
 */

class BlackScholesGreeks {
  static cdf(x) {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429;
    const p = 0.3275911;
    const sign = x < 0 ? -1 : 1;
    const absX = Math.abs(x) / Math.sqrt(2.0);
    const t = 1.0 / (1.0 + p * absX);
    const erf = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);
    return 0.5 * (1.0 + sign * erf);
  }

  static pdf(x) {
    return (1.0 / Math.sqrt(2.0 * Math.PI)) * Math.exp(-0.5 * x * x);
  }

  static calculate(S, K, T, r, sigma, optionType = 'CALL', q = 0) {
    if (T <= 0.0001) {
      const intrinsic = optionType.toUpperCase() === 'CALL' ? Math.max(0, S - K) : Math.max(0, K - S);
      return { price: intrinsic, delta: optionType.toUpperCase() === 'CALL' ? (S > K ? 1 : 0) : (S < K ? -1 : 0), gamma: 0, vega: 0, theta: 0, rho: 0 };
    }

    const d1 = (Math.log(S / K) + (r - q + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);

    const isCall = optionType.toUpperCase() === 'CALL';
    const price = isCall
      ? S * Math.exp(-q * T) * this.cdf(d1) - K * Math.exp(-r * T) * this.cdf(d2)
      : K * Math.exp(-r * T) * this.cdf(-d2) - S * Math.exp(-q * T) * this.cdf(-d1);

    const delta = isCall ? Math.exp(-q * T) * this.cdf(d1) : -Math.exp(-q * T) * this.cdf(-d1);
    const gamma = (Math.exp(-q * T) * this.pdf(d1)) / (S * sigma * Math.sqrt(T));
    const vega = S * Math.exp(-q * T) * this.pdf(d1) * Math.sqrt(T) * 0.01; // 1% vol shift

    const thetaCall = (- (S * sigma * Math.exp(-q * T) * this.pdf(d1)) / (2 * Math.sqrt(T))
      - r * K * Math.exp(-r * T) * this.cdf(d2)
      + q * S * Math.exp(-q * T) * this.cdf(d1)) / 365;

    const thetaPut = (- (S * sigma * Math.exp(-q * T) * this.pdf(d1)) / (2 * Math.sqrt(T))
      + r * K * Math.exp(-r * T) * this.cdf(-d2)
      - q * S * Math.exp(-q * T) * this.cdf(-d1)) / 365;

    const theta = isCall ? thetaCall : thetaPut;
    const rho = isCall
      ? K * T * Math.exp(-r * T) * this.cdf(d2) * 0.01
      : -K * T * Math.exp(-r * T) * this.cdf(-d2) * 0.01;

    return {
      price: Number(price.toFixed(4)),
      delta: Number(delta.toFixed(4)),
      gamma: Number(gamma.toFixed(6)),
      vega: Number(vega.toFixed(4)),
      theta: Number(theta.toFixed(4)),
      rho: Number(rho.toFixed(4)),
      d1: Number(d1.toFixed(4)),
      d2: Number(d2.toFixed(4))
    };
  }
}

module.exports = BlackScholesGreeks;
