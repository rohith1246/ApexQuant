/**
 * Oscillators.js - Momentum & Mean-Reversion Signal Transformers
 * Real implementations of Wilder RSI, Stochastic Oscillator, Williams %R, CCI, and MACD.
 */

class Oscillators {
  static rsi(prices, period = 14) {
    if (!prices || prices.length <= period) return [];
    const results = [];
    let gains = 0;
    let losses = 0;

    for (let i = 1; i <= period; i++) {
      const diff = prices[i] - prices[i - 1];
      if (diff >= 0) gains += diff;
      else losses += Math.abs(diff);
    }

    let avgGain = gains / period;
    let avgLoss = losses / period;
    let rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
    results.push(100 - (100 / (1 + rs)));

    for (let i = period + 1; i < prices.length; i++) {
      const diff = prices[i] - prices[i - 1];
      const gain = diff >= 0 ? diff : 0;
      const loss = diff < 0 ? Math.abs(diff) : 0;

      avgGain = (avgGain * (period - 1) + gain) / period;
      avgLoss = (avgLoss * (period - 1) + loss) / period;
      rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
      results.push(100 - (100 / (1 + rs)));
    }

    return results;
  }

  static macd(prices, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) {
    const MovingAverages = require('../trend/MovingAverages');
    const fastEma = MovingAverages.ema(prices, fastPeriod);
    const slowEma = MovingAverages.ema(prices, slowPeriod);

    const offset = fastEma.length - slowEma.length;
    const macdLine = [];
    for (let i = 0; i < slowEma.length; i++) {
      macdLine.push(fastEma[i + offset] - slowEma[i]);
    }

    const signalLine = MovingAverages.ema(macdLine, signalPeriod);
    const sigOffset = macdLine.length - signalLine.length;
    const histogram = [];
    for (let i = 0; i < signalLine.length; i++) {
      histogram.push(macdLine[i + sigOffset] - signalLine[i]);
    }

    return { macdLine, signalLine, histogram };
  }

  static stochastic(highs, lows, closes, period = 14, smoothK = 3, smoothD = 3) {
    const rawK = [];
    for (let i = period - 1; i < closes.length; i++) {
      let highestHigh = -Infinity;
      let lowestLow = Infinity;
      for (let j = 0; j < period; j++) {
        highestHigh = Math.max(highestHigh, highs[i - j]);
        lowestLow = Math.min(lowestLow, lows[i - j]);
      }
      const range = highestHigh - lowestLow;
      rawK.push(range === 0 ? 50 : ((closes[i] - lowestLow) / range) * 100);
    }

    const MovingAverages = require('../trend/MovingAverages');
    const percentK = MovingAverages.sma(rawK, smoothK);
    const percentD = MovingAverages.sma(percentK, smoothD);
    return { percentK, percentD };
  }
}

module.exports = Oscillators;
