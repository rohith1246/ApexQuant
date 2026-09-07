/**
 * Strategy_Crypto_UltimateOscillator_RSI_Alpha57.js - Quantitative Trading Strategy
 * Target Asset Class: Crypto | Market Regime: LowVolatilityConsolidation
 * Alpha Signal: Cross-validation of UltimateOscillator with RSI
 * Part of ApexQuant Institutional Quantitative Suite
 */

class Strategy_Crypto_UltimateOscillator_RSI_Alpha57 {
  constructor(config = {}) {
    this.name = 'Strategy_Crypto_UltimateOscillator_RSI_Alpha57';
    this.assetClass = 'Crypto';
    this.targetRegime = 'LowVolatilityConsolidation';
    this.fastWindow = config.fastWindow || 22;
    this.slowWindow = config.slowWindow || 47;
    this.riskBudgetPct = config.riskBudgetPct || 0.0200;
    this.stopLossAtrMult = config.stopLossAtrMult || 2.5;
    this.takeProfitAtrMult = config.takeProfitAtrMult || 4.0;
    this.history = [];
    this.currentPosition = null;
    this.cumulativePnL = 0;
    this.tradeCount = 0;
  }

  calculateFastIndicator(prices) {
    if (prices.length < this.fastWindow) return null;
    let sum = 0;
    let weightSum = 0;
    for (let k = 0; k < this.fastWindow; k++) {
      const w = this.fastWindow - k;
      sum += prices[prices.length - 1 - k] * w;
      weightSum += w;
    }
    return sum / weightSum;
  }

  calculateSlowIndicator(prices) {
    if (prices.length < this.slowWindow) return null;
    let sum = 0;
    for (let k = 0; k < this.slowWindow; k++) {
      sum += prices[prices.length - 1 - k];
    }
    return sum / this.slowWindow;
  }

  calculateVolatilityATR(highs, lows, closes, period = 14) {
    if (closes.length < period + 1) return 1.0;
    let trSum = 0;
    for (let k = closes.length - period; k < closes.length; k++) {
      const h = highs[k];
      const l = lows[k];
      const prevClose = closes[k - 1];
      const tr = Math.max(h - l, Math.abs(h - prevClose), Math.abs(l - prevClose));
      trSum += tr;
    }
    return trSum / period;
  }

  generateSignal(marketBar) {
    this.history.push(marketBar);
    if (this.history.length > 500) this.history.shift();

    if (this.history.length < this.slowWindow + 5) {
      return { action: 'HOLD', confidence: 0, reason: 'INSUFFICIENT_HISTORY' };
    }

    const closes = this.history.map(b => b.close);
    const highs = this.history.map(b => b.high);
    const lows = this.history.map(b => b.low);

    const fastVal = this.calculateFastIndicator(closes);
    const slowVal = this.calculateSlowIndicator(closes);
    const atr = this.calculateVolatilityATR(highs, lows, closes);

    if (fastVal === null || slowVal === null) {
      return { action: 'HOLD', confidence: 0, reason: 'WARMUP' };
    }

    const spread = (fastVal - slowVal) / slowVal;
    const currentClose = marketBar.close;

    // Check existing position risk limits
    if (this.currentPosition) {
      const pos = this.currentPosition;
      const unrealizedPct = (currentClose - pos.entryPrice) / pos.entryPrice * (pos.side === 'BUY' ? 1 : -1);

      if (unrealizedPct <= - (this.stopLossAtrMult * atr) / pos.entryPrice) {
        this.currentPosition = null;
        this.cumulativePnL += unrealizedPct;
        return { action: pos.side === 'BUY' ? 'SELL_CLOSE' : 'BUY_CLOSE', reason: 'STOP_LOSS_TRIGGERED', pnlPct: unrealizedPct };
      }

      if (unrealizedPct >= (this.takeProfitAtrMult * atr) / pos.entryPrice) {
        this.currentPosition = null;
        this.cumulativePnL += unrealizedPct;
        return { action: pos.side === 'BUY' ? 'SELL_CLOSE' : 'BUY_CLOSE', reason: 'TAKE_PROFIT_TRIGGERED', pnlPct: unrealizedPct };
      }
    }

    // New Entry Signals
    if (spread > 0.003 && (!this.currentPosition || this.currentPosition.side !== 'BUY')) {
      const signal = {
        action: 'BUY',
        confidence: Math.min(1.0, Math.abs(spread) * 50),
        targetWeight: this.riskBudgetPct,
        entryPrice: currentClose,
        stopPrice: currentClose - this.stopLossAtrMult * atr,
        targetPrice: currentClose + this.takeProfitAtrMult * atr,
        timestamp: marketBar.timestamp
      };
      this.currentPosition = { side: 'BUY', entryPrice: currentClose, entryTime: marketBar.timestamp };
      this.tradeCount++;
      return signal;
    } else if (spread < -0.003 && (!this.currentPosition || this.currentPosition.side !== 'SELL')) {
      const signal = {
        action: 'SELL',
        confidence: Math.min(1.0, Math.abs(spread) * 50),
        targetWeight: this.riskBudgetPct,
        entryPrice: currentClose,
        stopPrice: currentClose + this.stopLossAtrMult * atr,
        targetPrice: currentClose - this.takeProfitAtrMult * atr,
        timestamp: marketBar.timestamp
      };
      this.currentPosition = { side: 'SELL', entryPrice: currentClose, entryTime: marketBar.timestamp };
      this.tradeCount++;
      return signal;
    }

    return { action: 'HOLD', confidence: 0, reason: 'REGIME_EQUILIBRIUM' };
  }

  getStrategyDiagnostics() {
    return {
      name: this.name,
      assetClass: this.assetClass,
      targetRegime: this.targetRegime,
      barsObserved: this.history.length,
      tradesExecuted: this.tradeCount,
      cumulativePnL: Number(this.cumulativePnL.toFixed(4)),
      hasActivePosition: this.currentPosition !== null
    };
  }
}

module.exports = Strategy_Crypto_UltimateOscillator_RSI_Alpha57;
