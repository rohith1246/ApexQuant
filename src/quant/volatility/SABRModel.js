/**
 * SABRModel.js - Stochastic Alpha Beta Rho (SABR) Volatility Surface Model
 * Asymptotic Implied Volatility Formula (Hagan et al. 2002)
 */

class SABRModel {
  constructor(alpha = 0.25, beta = 0.5, rho = -0.3, nu = 0.4) {
    this.alpha = alpha; // Initial volatility
    this.beta = beta;   // CEV elasticity parameter (0 <= beta <= 1)
    this.rho = rho;     // Correlation between asset and volatility (-1 <= rho <= 1)
    this.nu = nu;       // Volatility of volatility
  }

  /**
   * Compute SABR Black-76 Implied Volatility for forward F and strike K at maturity T
   */
  impliedVolatility(F, K, T) {
    if (T <= 0.0001) return this.alpha;
    const { alpha, beta, rho, nu } = this;

    // At-the-money case (F == K)
    if (Math.abs(F - K) < 1e-6) {
      const fMid = F;
      const term1 = alpha / Math.pow(fMid, 1 - beta);
      const term2 = 1 + (
        ((1 - beta) * (1 - beta) / 24) * (alpha * alpha / Math.pow(fMid, 2 - 2 * beta)) +
        (rho * beta * nu * alpha / (4 * Math.pow(fMid, 1 - beta))) +
        ((2 - 3 * rho * rho) / 24) * nu * nu
      ) * T;
      return Number((term1 * term2).toFixed(6));
    }

    // General out-of-the-money / in-the-money case
    const fK = F * K;
    const logFK = Math.log(F / K);
    const fMid = Math.sqrt(fK);

    const z = (nu / alpha) * Math.pow(fMid, 1 - beta) * logFK;
    const xZ = Math.log((Math.sqrt(1 - 2 * rho * z + z * z) + z - rho) / (1 - rho));

    const denominator1 = Math.pow(fMid, 1 - beta) * (
      1 + ((1 - beta) * (1 - beta) / 24) * Math.pow(logFK, 2) +
      (Math.pow(1 - beta, 4) / 1920) * Math.pow(logFK, 4)
    );

    const numerator = alpha * (z / (xZ || 1));
    const term2 = 1 + (
      ((1 - beta) * (1 - beta) / 24) * (alpha * alpha / Math.pow(fMid, 2 - 2 * beta)) +
      (rho * beta * nu * alpha / (4 * Math.pow(fMid, 1 - beta))) +
      ((2 - 3 * rho * rho) / 24) * nu * nu
    ) * T;

    const sigma = (numerator / denominator1) * term2;
    return Number(Math.max(0.001, sigma).toFixed(6));
  }

  /**
   * Generate complete volatility smile curve across strikes
   */
  generateSmile(F, T, strikeMinPct = 0.7, strikeMaxPct = 1.3, numStrikes = 25) {
    const curve = [];
    const step = (strikeMaxPct - strikeMinPct) / (numStrikes - 1);

    for (let i = 0; i < numStrikes; i++) {
      const strikePct = strikeMinPct + i * step;
      const strike = Number((F * strikePct).toFixed(2));
      const iv = this.impliedVolatility(F, strike, T);
      curve.push({
        strike,
        moneyness: Number(strikePct.toFixed(4)),
        impliedVol: Number((iv * 100).toFixed(2)),
        rawVol: iv
      });
    }
    return curve;
  }
}

module.exports = SABRModel;
