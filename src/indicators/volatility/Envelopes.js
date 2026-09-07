/**
 * Envelopes.js - Volatility Channels & Statistical Bands
 * Implements Bollinger Bands, Average True Range (ATR), and Keltner Channels.
 */

class Envelopes {
  static bollingerBands(prices, period = 20, multiplier = 2.0) {
    const MovingAverages = require('../trend/MovingAverages');
    const middleBand = MovingAverages.sma(prices, period);
    const upperBand = [];
    const lowerBand = [];
    const bandwidth = [];

    for (let i = 0; i < middleBand.length; i++) {
      const idx = i + period - 1;
      let variance = 0;
      for (let j = 0; j < period; j++) {
        variance += Math.pow(prices[idx - j] - middleBand[i], 2);
      }
      const stdDev = Math.sqrt(variance / period);
      const upper = middleBand[i] + multiplier * stdDev;
      const lower = middleBand[i] - multiplier * stdDev;
      upperBand.push(upper);
      lowerBand.push(lower);
      bandwidth.push(middleBand[i] === 0 ? 0 : (upper - lower) / middleBand[i]);
    }

    return { middleBand, upperBand, lowerBand, bandwidth };
  }

  static atr(highs, lows, closes, period = 14) {
    if (!highs || highs.length <= period) return [];
    const trueRanges = [];
    for (let i = 1; i < highs.length; i++) {
      const tr = Math.max(
        highs[i] - lows[i],
        Math.abs(highs[i] - closes[i - 1]),
        Math.abs(lows[i] - closes[i - 1])
      );
      trueRanges.push(tr);
    }

    let currentAtr = trueRanges.slice(0, period).reduce((a, b) => a + b, 0) / period;
    const results = [currentAtr];

    for (let i = period; i < trueRanges.length; i++) {
      currentAtr = (currentAtr * (period - 1) + trueRanges[i]) / period;
      results.push(currentAtr);
    }
    return results;
  }
}

module.exports = Envelopes;
