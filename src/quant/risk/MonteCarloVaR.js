/**
 * MonteCarloVaR.js - Value at Risk (VaR) & Expected Shortfall (CVaR) Risk Simulator
 * Part of ApexQuant Institutional Engine
 */

class MonteCarloVaR {
  /**
   * Simulates portfolio PnL distribution using Geometric Brownian Motion (GBM)
   * @param {number} portfolioValue - Total capital
   * @param {number[]} weights - Asset allocations (sums to 1.0)
   * @param {number[]} mu - Expected annual drift vector
   * @param {number[][]} covMatrix - Asset annual covariance matrix
   * @param {number} horizonDays - Risk horizon in days (e.g. 1 or 10)
   * @param {number} simulations - Number of Monte Carlo paths
   * @param {number} confidence - Confidence level (e.g. 0.99 for 99% VaR)
   */
  static simulateVaR(portfolioValue, weights, mu, covMatrix, horizonDays = 1, simulations = 10000, confidence = 0.99) {
    const dt = horizonDays / 252.0;
    const numAssets = weights.length;
    const choleskyL = this._cholesky(covMatrix);

    const finalPnLs = new Float64Array(simulations);

    for (let s = 0; s < simulations; s++) {
      // 1. Generate independent standard normal random variables
      const z = new Float64Array(numAssets);
      for (let i = 0; i < numAssets; i += 2) {
        const u1 = Math.random() || 1e-7;
        const u2 = Math.random() || 1e-7;
        const r = Math.sqrt(-2.0 * Math.log(u1));
        const theta = 2.0 * Math.PI * u2;
        z[i] = r * Math.cos(theta);
        if (i + 1 < numAssets) z[i + 1] = r * Math.sin(theta);
      }

      // 2. Correlate random variables using Cholesky factor L
      const correlatedZ = new Float64Array(numAssets);
      for (let i = 0; i < numAssets; i++) {
        let sum = 0;
        for (let j = 0; j <= i; j++) {
          sum += choleskyL[i][j] * z[j];
        }
        correlatedZ[i] = sum;
      }

      // 3. Compute portfolio return for this path
      let portfolioReturn = 0;
      for (let i = 0; i < numAssets; i++) {
        const assetReturn = Math.exp((mu[i] - 0.5 * covMatrix[i][i]) * dt + Math.sqrt(dt) * correlatedZ[i]) - 1.0;
        portfolioReturn += weights[i] * assetReturn;
      }

      finalPnLs[s] = portfolioValue * portfolioReturn;
    }

    // 4. Sort PnLs ascending (worst losses at start)
    finalPnLs.sort();

    const cutoffIndex = Math.floor((1.0 - confidence) * simulations);
    const varAmount = -finalPnLs[cutoffIndex];

    // 5. Expected Shortfall (CVaR) - average of all losses beyond VaR
    let sumTailLoss = 0;
    for (let i = 0; i <= cutoffIndex; i++) {
      sumTailLoss += -finalPnLs[i];
    }
    const cvarAmount = sumTailLoss / (cutoffIndex + 1);

    return {
      confidence,
      horizonDays,
      portfolioValue,
      varAmount: Math.max(0, varAmount),
      cvarAmount: Math.max(0, cvarAmount),
      varPercentage: (Math.max(0, varAmount) / portfolioValue) * 100,
      cvarPercentage: (Math.max(0, cvarAmount) / portfolioValue) * 100
    };
  }

  // Cholesky decomposition of symmetric positive-definite matrix
  static _cholesky(matrix) {
    const n = matrix.length;
    const L = Array.from({ length: n }, () => new Float64Array(n));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        let sum = 0;
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * L[j][k];
        }

        if (i === j) {
          const val = matrix[i][i] - sum;
          L[i][j] = Math.sqrt(Math.max(1e-9, val));
        } else {
          L[i][j] = (matrix[i][j] - sum) / L[j][j];
        }
      }
    }
    return L;
  }
}

module.exports = MonteCarloVaR;
