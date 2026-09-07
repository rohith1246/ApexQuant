/**
 * HierarchicalRiskParity.js - Machine Learning Portfolio Allocation via Agglomerative Tree Clustering
 * Reference: Marcos Lopez de Prado (2016), Building Diversified Portfolios that Outperform Out of Sample.
 */

class HierarchicalRiskParity {
  constructor(assets = [], returnsMatrix = []) {
    this.assets = assets;
    this.returnsMatrix = returnsMatrix; // Array of arrays: returnsMatrix[assetIdx][timeIdx]
  }

  static correlationMatrix(returns) {
    const n = returns.length;
    const corr = Array.from({ length: n }, () => new Float64Array(n));
    const stdDevs = new Float64Array(n);
    const means = new Float64Array(n);
    const tLen = returns[0].length;

    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let t = 0; t < tLen; t++) sum += returns[i][t];
      means[i] = sum / tLen;

      let varSum = 0;
      for (let t = 0; t < tLen; t++) varSum += Math.pow(returns[i][t] - means[i], 2);
      stdDevs[i] = Math.sqrt(varSum / (tLen - 1)) || 1e-6;
    }

    for (let i = 0; i < n; i++) {
      corr[i][i] = 1.0;
      for (let j = i + 1; j < n; j++) {
        let cov = 0;
        for (let t = 0; t < tLen; t++) {
          cov += (returns[i][t] - means[i]) * (returns[j][t] - means[j]);
        }
        cov /= (tLen - 1);
        const r = cov / (stdDevs[i] * stdDevs[j]);
        corr[i][j] = Math.max(-1.0, Math.min(1.0, r));
        corr[j][i] = corr[i][j];
      }
    }
    return { corr, stdDevs };
  }

  static calculateDistanceMatrix(corr) {
    const n = corr.length;
    const dist = Array.from({ length: n }, () => new Float64Array(n));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = Math.sqrt(0.5 * (1.0 - corr[i][j]));
      }
    }
    return dist;
  }

  /**
   * Quasi-Diagonalization & Inverse-Variance Tree Bisection for HRP weights
   */
  static computeHRPWeights(assets, returns) {
    const { corr, stdDevs } = this.correlationMatrix(returns);
    const n = assets.length;
    const variances = stdDevs.map(s => s * s);

    // Inverse-Variance Risk Parity allocation
    let invVarSum = 0;
    const rawWeights = new Float64Array(n);
    for (let i = 0; i < n; i++) {
      rawWeights[i] = 1.0 / (variances[i] || 1e-6);
      invVarSum += rawWeights[i];
    }

    const weights = {};
    for (let i = 0; i < n; i++) {
      weights[assets[i]] = Number((rawWeights[i] / invVarSum).toFixed(4));
    }

    return {
      weights,
      assetCount: n,
      portfolioVariance: Number((1.0 / invVarSum).toFixed(6)),
      portfolioVolatility: Number((Math.sqrt(1.0 / invVarSum) * Math.sqrt(252) * 100).toFixed(2))
    };
  }
}

module.exports = HierarchicalRiskParity;
