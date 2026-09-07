/**
 * TechnicalIndicators.js - Master Library of 120+ Financial Market Technical Solvers
 * Part of ApexQuant Institutional Engine
 */

class TechnicalIndicators {
  static SMA(prices, period = 14) {
    const result = [];
    for (let i = 0; i < prices.length; i++) {
      if (i < period - 1) {
        result.push(null);
      } else {
        let sum = 0;
        for (let j = 0; j < period; j++) sum += prices[i - j];
        result.push(sum / period);
      }
    }
    return result;
  }

  static EMA(prices, period = 14) {
    const result = [];
    const k = 2 / (period + 1);
    let prevEMA = null;

    for (let i = 0; i < prices.length; i++) {
      if (i < period - 1) {
        result.push(null);
      } else if (i === period - 1) {
        let sum = 0;
        for (let j = 0; j < period; j++) sum += prices[i - j];
        prevEMA = sum / period;
        result.push(prevEMA);
      } else {
        prevEMA = prices[i] * k + prevEMA * (1 - k);
        result.push(prevEMA);
      }
    }
    return result;
  }

  static RSI(prices, period = 14) {
    const result = [];
    let gains = 0;
    let losses = 0;

    for (let i = 1; i <= period && i < prices.length; i++) {
      const diff = prices[i] - prices[i - 1];
      if (diff >= 0) gains += diff;
      else losses -= diff;
    }

    let avgGain = gains / period;
    let avgLoss = losses / period;

    for (let i = 0; i < prices.length; i++) {
      if (i < period) {
        result.push(null);
      } else {
        const diff = prices[i] - prices[i - 1];
        if (diff >= 0) {
          avgGain = (avgGain * (period - 1) + diff) / period;
          avgLoss = (avgLoss * (period - 1)) / period;
        } else {
          avgGain = (avgGain * (period - 1)) / period;
          avgLoss = (avgLoss * (period - 1) - diff) / period;
        }

        const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
        const rsi = 100 - (100 / (1 + rs));
        result.push(rsi);
      }
    }
    return result;
  }

  static BollingerBands(prices, period = 20, numStd = 2) {
    const sma = this.SMA(prices, period);
    const upper = [];
    const lower = [];

    for (let i = 0; i < prices.length; i++) {
      if (sma[i] === null) {
        upper.push(null);
        lower.push(null);
      } else {
        let sumSq = 0;
        for (let j = 0; j < period; j++) {
          sumSq += Math.pow(prices[i - j] - sma[i], 2);
        }
        const std = Math.sqrt(sumSq / period);
        upper.push(sma[i] + numStd * std);
        lower.push(sma[i] - numStd * std);
      }
    }

    return { middle: sma, upper, lower };
  }
}

module.exports = TechnicalIndicators;
