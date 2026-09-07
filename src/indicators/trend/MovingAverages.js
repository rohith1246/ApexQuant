/**
 * MovingAverages.js - Institutional Trend & Smoothing Filters
 * Real implementations of SMA, EMA, WMA, Hull MA, and Kaufman Adaptive MA.
 */

class MovingAverages {
  static sma(data, period) {
    if (!data || data.length < period) return [];
    const results = [];
    let sum = 0;
    for (let i = 0; i < period; i++) sum += data[i];
    results.push(sum / period);

    for (let i = period; i < data.length; i++) {
      sum += data[i] - data[i - period];
      results.push(sum / period);
    }
    return results;
  }

  static ema(data, period, smoothing = 2) {
    if (!data || data.length < period) return [];
    const k = smoothing / (period + 1);
    const results = [];
    
    // Seed with SMA
    let sum = 0;
    for (let i = 0; i < period; i++) sum += data[i];
    let prevEma = sum / period;
    results.push(prevEma);

    for (let i = period; i < data.length; i++) {
      const currentEma = data[i] * k + prevEma * (1 - k);
      results.push(currentEma);
      prevEma = currentEma;
    }
    return results;
  }

  static wma(data, period) {
    if (!data || data.length < period) return [];
    const denominator = (period * (period + 1)) / 2;
    const results = [];

    for (let i = period - 1; i < data.length; i++) {
      let weightedSum = 0;
      for (let j = 0; j < period; j++) {
        weightedSum += data[i - period + 1 + j] * (j + 1);
      }
      results.push(weightedSum / denominator);
    }
    return results;
  }

  static hullMA(data, period) {
    const halfPeriod = Math.floor(period / 2);
    const sqrtPeriod = Math.floor(Math.sqrt(period));

    const wmaHalf = this.wma(data, halfPeriod);
    const wmaFull = this.wma(data, period);
    const minLen = Math.min(wmaHalf.length, wmaFull.length);

    const diff = [];
    const offset = wmaHalf.length - minLen;
    for (let i = 0; i < minLen; i++) {
      diff.push(2 * wmaHalf[i + offset] - wmaFull[i]);
    }

    return this.wma(diff, sqrtPeriod);
  }

  static kama(data, period = 10, fastPeriod = 2, slowPeriod = 30) {
    if (!data || data.length < period + 1) return [];
    const fastSC = 2 / (fastPeriod + 1);
    const slowSC = 2 / (slowPeriod + 1);
    const results = [];

    let prevKama = data[period - 1];
    results.push(prevKama);

    for (let i = period; i < data.length; i++) {
      const change = Math.abs(data[i] - data[i - period]);
      let volatility = 0;
      for (let j = 0; j < period; j++) {
        volatility += Math.abs(data[i - j] - data[i - j - 1]);
      }

      const er = volatility === 0 ? 0 : change / volatility;
      const sc = Math.pow(er * (fastSC - slowSC) + slowSC, 2);
      const currentKama = prevKama + sc * (data[i] - prevKama);
      results.push(currentKama);
      prevKama = currentKama;
    }
    return results;
  }
}

module.exports = MovingAverages;
