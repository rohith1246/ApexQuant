/**
 * CrankNicolsonFiniteDifference.js - Numerical PDE Solver for American & Exotic Derivatives
 * Solves the Black-Scholes parabolic PDE using the implicit-explicit Crank-Nicolson scheme.
 */

class CrankNicolsonFiniteDifference {
  constructor(gridConfig = {}) {
    this.sNodes = gridConfig.sNodes || 100;
    this.tNodes = gridConfig.tNodes || 50;
  }

  solve(S0, K, T, r, sigma, isCall = false, isAmerican = true, sMaxFactor = 3.0) {
    const sMax = S0 * sMaxFactor;
    const dS = sMax / this.sNodes;
    const dt = T / this.tNodes;

    // Grid vectors
    const S = new Float64Array(this.sNodes + 1);
    for (let i = 0; i <= this.sNodes; i++) S[i] = i * dS;

    // Terminal payoff boundary
    let V = new Float64Array(this.sNodes + 1);
    for (let i = 0; i <= this.sNodes; i++) {
      V[i] = isCall ? Math.max(0, S[i] - K) : Math.max(0, K - S[i]);
    }

    // Tridiagonal coefficient vectors
    const alpha = new Float64Array(this.sNodes + 1);
    const beta = new Float64Array(this.sNodes + 1);
    const gamma = new Float64Array(this.sNodes + 1);

    for (let i = 1; i < this.sNodes; i++) {
      const sig2_i2 = sigma * sigma * i * i;
      const r_i = r * i;
      alpha[i] = 0.25 * dt * (sig2_i2 - r_i);
      beta[i] = -0.5 * dt * (sig2_i2 + r);
      gamma[i] = 0.25 * dt * (sig2_i2 + r_i);
    }

    // Time-stepping backward in time
    const a = new Float64Array(this.sNodes + 1);
    const b = new Float64Array(this.sNodes + 1);
    const c = new Float64Array(this.sNodes + 1);
    const d = new Float64Array(this.sNodes + 1);

    for (let n = this.tNodes - 1; n >= 0; n--) {
      for (let i = 1; i < this.sNodes; i++) {
        a[i] = -alpha[i];
        b[i] = 1 - beta[i];
        c[i] = -gamma[i];
        d[i] = alpha[i] * V[i - 1] + (1 + beta[i]) * V[i] + gamma[i] * V[i + 1];
      }

      // Boundary conditions at S=0 and S=sMax
      d[1] -= a[1] * (isCall ? 0 : K * Math.exp(-r * (T - n * dt)));
      d[this.sNodes - 1] -= c[this.sNodes - 1] * (isCall ? (sMax - K * Math.exp(-r * (T - n * dt))) : 0);

      // Thomas Algorithm for Tridiagonal Matrix Solve
      const cPrime = new Float64Array(this.sNodes + 1);
      const dPrime = new Float64Array(this.sNodes + 1);
      cPrime[1] = c[1] / b[1];
      dPrime[1] = d[1] / b[1];

      for (let i = 2; i < this.sNodes; i++) {
        const m = 1.0 / (b[i] - a[i] * cPrime[i - 1]);
        cPrime[i] = c[i] * m;
        dPrime[i] = (d[i] - a[i] * dPrime[i - 1]) * m;
      }

      V[this.sNodes - 1] = dPrime[this.sNodes - 1];
      for (let i = this.sNodes - 2; i >= 1; i--) {
        V[i] = dPrime[i] - cPrime[i] * V[i + 1];
      }

      // American early exercise constraint
      if (isAmerican) {
        for (let i = 1; i < this.sNodes; i++) {
          const intrinsic = isCall ? Math.max(0, S[i] - K) : Math.max(0, K - S[i]);
          V[i] = Math.max(V[i], intrinsic);
        }
      }
    }

    // Linear interpolation for S0
    const idx = Math.floor(S0 / dS);
    const weight = (S0 - S[idx]) / dS;
    const interpolatedPrice = V[idx] * (1 - weight) + V[idx + 1] * weight;

    return Number(interpolatedPrice.toFixed(4));
  }
}

module.exports = CrankNicolsonFiniteDifference;
