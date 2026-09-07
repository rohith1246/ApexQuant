/**
 * EnterpriseRiskModel_Tier4.js - Quantitative Enterprise Risk Matrix & Stress Testing Engine
 * Part of ApexQuant Institutional Quantitative Suite
 */

class EnterpriseRiskModel_Tier4 {
  constructor(portfolioId = 'PORT_4') {
    this.portfolioId = portfolioId;
    this.confidenceLevel = 0.99;
    this.decayFactorLambda = 0.98;
    this.stressScenarios = [
      { name: '2008_Lehman_Crisis', equityShock: -0.22, volSpike: 2.8, rateShiftBps: -150 },
      { name: '2020_Pandemic_Liquidity_Freeze', equityShock: -0.34, volSpike: 3.5, rateShiftBps: -100 },
      { name: '1987_Black_Monday', equityShock: -0.20, volSpike: 4.0, rateShiftBps: 0 },
      { name: '2022_Inflationary_Rate_Hike', equityShock: -0.18, volSpike: 1.6, rateShiftBps: 350 }
    ];
  }

  calculateEWMAVariance(returns) {
    if (returns.length < 2) return 0.0004;
    let variance = 0;
    let weightSum = 0;
    const mean = returns.reduce((a, b) => a + b, 0) / returns.length;

    for (let t = 0; t < returns.length; t++) {
      const weight = Math.pow(this.decayFactorLambda, returns.length - 1 - t);
      const diff = returns[t] - mean;
      variance += weight * diff * diff;
      weightSum += weight;
    }
    return variance / weightSum;
  }

  calculateExpectedShortfall(returns, portfolioNotional) {
    if (returns.length < 10) return portfolioNotional * 0.02;
    const sorted = [...returns].sort((a, b) => a - b);
    const cutoffIndex = Math.floor((1 - this.confidenceLevel) * sorted.length);
    const tailLosses = sorted.slice(0, Math.max(1, cutoffIndex));
    const avgTailLoss = tailLosses.reduce((a, b) => a + b, 0) / tailLosses.length;

    return Math.abs(avgTailLoss * portfolioNotional);
  }

  runStressTest(portfolioNotional, weights = {}) {
    return this.stressScenarios.map(sc => {
      const estimatedPnl = portfolioNotional * sc.equityShock;
      const marginCallRisk = Math.abs(estimatedPnl) > portfolioNotional * 0.25;
      return {
        scenario: sc.name,
        equityShockPct: sc.equityShock * 100,
        rateShiftBps: sc.rateShiftBps,
        projectedPnL: Number(estimatedPnl.toFixed(2)),
        marginCallTriggered: marginCallRisk,
        recommendedLiquidityReserve: Number((Math.abs(estimatedPnl) * 1.25).toFixed(2))
      };
    });
  }
}

module.exports = EnterpriseRiskModel_Tier4;
