/**
 * EventDrivenBacktester.js - Quantitative Portfolio Backtesting & Performance Attribution Engine
 * Part of ApexQuant Institutional Quantitative Suite
 */

class EventDrivenBacktester {
  constructor(initialCapital = 1000000, commissionBps = 5, slippageBps = 3) {
    this.initialCapital = initialCapital;
    this.cash = initialCapital;
    this.commissionRate = commissionBps / 10000;
    this.slippageRate = slippageBps / 10000;

    this.positions = new Map(); // symbol -> { quantity, avgEntryPrice }
    this.equityCurve = [];
    this.tradeLog = [];
  }

  executeSignal(bar, signal) {
    // signal: { action: 'BUY'/'SELL', symbol: 'AAPL', targetWeight: 0.20 }
    const { symbol, close, timestamp } = bar;
    const portfolioValue = this.getPortfolioValue(close);
    const targetCapital = portfolioValue * (signal.targetWeight || 0);

    const currentPos = this.positions.get(symbol) || { quantity: 0, avgEntryPrice: 0 };
    const currentHoldingValue = currentPos.quantity * close;
    const diffValue = targetCapital - currentHoldingValue;

    if (Math.abs(diffValue) < 100) return null; // Ignore immaterial churn

    const isBuy = diffValue > 0;
    const executionPrice = isBuy
      ? close * (1 + this.slippageRate)
      : close * (1 - this.slippageRate);

    const targetDeltaQty = Math.floor(Math.abs(diffValue) / executionPrice);
    if (targetDeltaQty <= 0) return null;

    const notional = targetDeltaQty * executionPrice;
    const fee = notional * this.commissionRate;

    if (isBuy) {
      const totalCost = notional + fee;
      if (totalCost > this.cash) return null; // Insufficient capital

      this.cash -= totalCost;
      const newQty = currentPos.quantity + targetDeltaQty;
      const newAvgPrice = (currentPos.quantity * currentPos.avgEntryPrice + notional) / newQty;
      this.positions.set(symbol, { quantity: newQty, avgEntryPrice: newAvgPrice });
    } else {
      const actualQty = Math.min(targetDeltaQty, currentPos.quantity);
      if (actualQty <= 0) return null;

      const grossProceeds = actualQty * executionPrice;
      this.cash += (grossProceeds - fee);
      const remainingQty = currentPos.quantity - actualQty;
      if (remainingQty === 0) {
        this.positions.delete(symbol);
      } else {
        this.positions.set(symbol, { quantity: remainingQty, avgEntryPrice: currentPos.avgEntryPrice });
      }
    }

    const trade = {
      timestamp: timestamp || Date.now(),
      symbol,
      side: isBuy ? 'BUY' : 'SELL',
      quantity: targetDeltaQty,
      price: Number(executionPrice.toFixed(4)),
      fee: Number(fee.toFixed(2)),
      portfolioEquity: Number(this.getPortfolioValue(close).toFixed(2))
    };

    this.tradeLog.push(trade);
    return trade;
  }

  getPortfolioValue(currentPrice) {
    let equity = this.cash;
    for (const [_, pos] of this.positions) {
      equity += pos.quantity * currentPrice;
    }
    return equity;
  }

  recordBar(timestamp, currentPrice) {
    const equity = this.getPortfolioValue(currentPrice);
    this.equityCurve.push({ timestamp, equity });
  }

  calculatePerformanceMetrics() {
    if (this.equityCurve.length < 2) return null;

    const returns = [];
    let maxEquity = this.initialCapital;
    let maxDrawdownPct = 0;

    for (let i = 1; i < this.equityCurve.length; i++) {
      const prev = this.equityCurve[i - 1].equity;
      const curr = this.equityCurve[i].equity;
      const r = (curr - prev) / prev;
      returns.push(r);

      if (curr > maxEquity) maxEquity = curr;
      const dd = (maxEquity - curr) / maxEquity;
      if (dd > maxDrawdownPct) maxDrawdownPct = dd;
    }

    const finalEquity = this.equityCurve[this.equityCurve.length - 1].equity;
    const totalReturnPct = ((finalEquity - this.initialCapital) / this.initialCapital) * 100;

    const meanReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
    const variance = returns.reduce((sum, r) => sum + Math.pow(r - meanReturn, 2), 0) / returns.length;
    const stdDev = Math.sqrt(variance) || 0.0001;

    // Annualized Sharpe Ratio (assuming daily bars, 252 trading days)
    const annualizedSharpe = (meanReturn / stdDev) * Math.sqrt(252);

    // Sortino Ratio (Downside deviation only)
    const downsideDiffs = returns.filter(r => r < 0);
    const downsideVar = downsideDiffs.reduce((sum, r) => sum + Math.pow(r, 2), 0) / (downsideDiffs.length || 1);
    const downsideStdDev = Math.sqrt(downsideVar) || 0.0001;
    const annualizedSortino = (meanReturn / downsideStdDev) * Math.sqrt(252);

    return {
      initialCapital: this.initialCapital,
      finalEquity: Number(finalEquity.toFixed(2)),
      totalReturnPct: Number(totalReturnPct.toFixed(2)),
      maxDrawdownPct: Number((maxDrawdownPct * 100).toFixed(2)),
      sharpeRatio: Number(annualizedSharpe.toFixed(3)),
      sortinoRatio: Number(annualizedSortino.toFixed(3)),
      totalTradesExecuted: this.tradeLog.length
    };
  }
}

module.exports = EventDrivenBacktester;
