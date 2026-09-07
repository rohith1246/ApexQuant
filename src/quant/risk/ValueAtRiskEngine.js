/**
 * ValueAtRiskEngine.js - Institutional Portfolio Risk & Stress Testing Engine
 * Calculates Parametric VaR, Historical Simulation VaR, Cornish-Fisher Expansion, and CVaR (Expected Shortfall).
 */

class ValueAtRiskEngine {
  static calculateParametricVaR(portfolioValue, meanReturn, stdDev, confidenceLevel = 0.99, horizonDays = 1) {
    const zScores = { 0.90: 1.282, 0.95: 1.645, 0.99: 2.326, 0.999: 3.090 };
    const z = zScores[confidenceLevel] || 2.326;
    const horizonFactor = Math.sqrt(horizonDays);
    const varPct = -(meanReturn * horizonDays - z * stdDev * horizonFactor);
    const varAmount = portfolioValue * varPct;
    return {
      varPercentage: Number((varPct * 100).toFixed(2)),
      varAmount: Number(varAmount.toFixed(2)),
      confidenceLevel,
      horizonDays
    };
  }

  static calculateHistoricalVaR(returns, portfolioValue, confidenceLevel = 0.99) {
    if (!returns || returns.length === 0) return { varAmount: 0, cvarAmount: 0 };
    const sorted = [...returns].sort((a, b) => a - b);
    const cutoffIndex = Math.floor((1 - confidenceLevel) * sorted.length);
    const varReturn = sorted[cutoffIndex];

    // Expected Shortfall (CVaR) - average of tail losses beyond VaR
    const tailReturns = sorted.slice(0, cutoffIndex + 1);
    const avgTailLoss = tailReturns.reduce((a, b) => a + b, 0) / tailReturns.length;

    return {
      varReturnPct: Number((Math.abs(varReturn) * 100).toFixed(2)),
      varAmount: Number((portfolioValue * Math.abs(varReturn)).toFixed(2)),
      cvarAmount: Number((portfolioValue * Math.abs(avgTailLoss)).toFixed(2)),
      sampleSize: returns.length
    };
  }

  static cornishFisherVaR(portfolioValue, mean, stdDev, skewness, kurtosis, confidenceLevel = 0.99) {
    const zScores = { 0.90: 1.282, 0.95: 1.645, 0.99: 2.326 };
    const z = zScores[confidenceLevel] || 2.326;
    const excessKurtosis = kurtosis - 3.0;

    // Cornish-Fisher polynomial quantile expansion
    const zCf = z +
      (1 / 6) * (z * z - 1) * skewness +
      (1 / 24) * (Math.pow(z, 3) - 3 * z) * excessKurtosis -
      (1 / 36) * (2 * Math.pow(z, 3) - 5 * z) * (skewness * skewness);

    const cfVarPct = -(mean - zCf * stdDev);
    return {
      cfVarAmount: Number((portfolioValue * cfVarPct).toFixed(2)),
      adjustedZScore: Number(zCf.toFixed(4))
    };
  }
}

module.exports = ValueAtRiskEngine;
