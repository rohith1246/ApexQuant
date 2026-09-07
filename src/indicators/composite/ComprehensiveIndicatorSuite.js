/**
 * ComprehensiveIndicatorSuite.js - Institutional Quantitative Indicators
 * Pure mathematical algorithmic implementations without duplication.
 */

class ComprehensiveIndicatorSuite {
  // 1. Double Exponential Moving Average (DEMA)
  static dema(data, period) {
    const MovingAverages = require('../trend/MovingAverages');
    const ema1 = MovingAverages.ema(data, period);
    const ema2 = MovingAverages.ema(ema1, period);
    const offset = ema1.length - ema2.length;
    const res = [];
    for (let i = 0; i < ema2.length; i++) {
      res.push(2 * ema1[i + offset] - ema2[i]);
    }
    return res;
  }

  // 2. Triple Exponential Moving Average (TEMA)
  static tema(data, period) {
    const MovingAverages = require('../trend/MovingAverages');
    const ema1 = MovingAverages.ema(data, period);
    const ema2 = MovingAverages.ema(ema1, period);
    const ema3 = MovingAverages.ema(ema2, period);
    const off1 = ema1.length - ema3.length;
    const off2 = ema2.length - ema3.length;
    const res = [];
    for (let i = 0; i < ema3.length; i++) {
      res.push(3 * ema1[i + off1] - 3 * ema2[i + off2] + ema3[i]);
    }
    return res;
  }

  // 3. Commodity Channel Index (CCI)
  static cci(highs, lows, closes, period = 20) {
    const tp = [];
    for (let i = 0; i < closes.length; i++) tp.push((highs[i] + lows[i] + closes[i]) / 3);
    const MovingAverages = require('../trend/MovingAverages');
    const smaTp = MovingAverages.sma(tp, period);
    const res = [];

    for (let i = 0; i < smaTp.length; i++) {
      const idx = i + period - 1;
      let mad = 0;
      for (let j = 0; j < period; j++) {
        mad += Math.abs(tp[idx - j] - smaTp[i]);
      }
      mad /= period;
      res.push(mad === 0 ? 0 : (tp[idx] - smaTp[i]) / (0.015 * mad));
    }
    return res;
  }

  // 4. Chaikin Money Flow (CMF)
  static cmf(highs, lows, closes, volumes, period = 20) {
    const mfv = [];
    for (let i = 0; i < closes.length; i++) {
      const range = highs[i] - lows[i];
      const mfm = range === 0 ? 0 : ((closes[i] - lows[i]) - (highs[i] - closes[i])) / range;
      mfv.push(mfm * volumes[i]);
    }

    const res = [];
    for (let i = period - 1; i < closes.length; i++) {
      let sumMfv = 0, sumVol = 0;
      for (let j = 0; j < period; j++) {
        sumMfv += mfv[i - j];
        sumVol += volumes[i - j];
      }
      res.push(sumVol === 0 ? 0 : sumMfv / sumVol);
    }
    return res;
  }

  // 5. Volume Weighted Average Price (VWAP)
  static vwap(highs, lows, closes, volumes) {
    let cumPv = 0;
    let cumVol = 0;
    const res = [];

    for (let i = 0; i < closes.length; i++) {
      const typicalPrice = (highs[i] + lows[i] + closes[i]) / 3;
      cumPv += typicalPrice * volumes[i];
      cumVol += volumes[i];
      res.push(cumVol === 0 ? typicalPrice : Number((cumPv / cumVol).toFixed(2)));
    }
    return res;
  }

  // 6. Order Flow Toxicity (VPIN - Volume Synchronized Probability of Toxicity)
  static vpin(tradePrices, tradeVolumes, bucketSize = 10000, nBuckets = 50) {
    let currentBucketVol = 0;
    let currentBuyVol = 0;
    let currentSellVol = 0;
    const bucketImbalances = [];

    for (let i = 1; i < tradePrices.length; i++) {
      const priceDiff = tradePrices[i] - tradePrices[i - 1];
      const vol = tradeVolumes[i];

      // Tick rule for signed trade classification
      if (priceDiff >= 0) currentBuyVol += vol;
      else currentSellVol += vol;
      currentBucketVol += vol;

      if (currentBucketVol >= bucketSize) {
        const imbalance = Math.abs(currentBuyVol - currentSellVol);
        bucketImbalances.push(imbalance);
        currentBucketVol = 0;
        currentBuyVol = 0;
        currentSellVol = 0;
      }
    }

    if (bucketImbalances.length < nBuckets) return 0.5;
    const recentBuckets = bucketImbalances.slice(-nBuckets);
    const sumImbalance = recentBuckets.reduce((a, b) => a + b, 0);
    return Number((sumImbalance / (nBuckets * bucketSize)).toFixed(4));
  }
}

module.exports = ComprehensiveIndicatorSuite;
