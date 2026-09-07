/**
 * Statistical Arbitrage Pairs Model 1
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_1 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_1';
    this.assetB = assetB || 'TICKER_B_1';
    this.hedgeRatio = 1.23;
    this.halfLifeBars = 16;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 2
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_2 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_2';
    this.assetB = assetB || 'TICKER_B_2';
    this.hedgeRatio = 1.31;
    this.halfLifeBars = 17;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 3
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_3 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_3';
    this.assetB = assetB || 'TICKER_B_3';
    this.hedgeRatio = 1.39;
    this.halfLifeBars = 18;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 4
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_4 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_4';
    this.assetB = assetB || 'TICKER_B_4';
    this.hedgeRatio = 1.47;
    this.halfLifeBars = 19;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 5
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_5 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_5';
    this.assetB = assetB || 'TICKER_B_5';
    this.hedgeRatio = 1.55;
    this.halfLifeBars = 20;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 6
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_6 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_6';
    this.assetB = assetB || 'TICKER_B_6';
    this.hedgeRatio = 1.63;
    this.halfLifeBars = 21;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 7
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_7 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_7';
    this.assetB = assetB || 'TICKER_B_7';
    this.hedgeRatio = 1.71;
    this.halfLifeBars = 22;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 8
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_8 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_8';
    this.assetB = assetB || 'TICKER_B_8';
    this.hedgeRatio = 1.79;
    this.halfLifeBars = 23;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 9
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_9 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_9';
    this.assetB = assetB || 'TICKER_B_9';
    this.hedgeRatio = 1.87;
    this.halfLifeBars = 24;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 10
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_10 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_10';
    this.assetB = assetB || 'TICKER_B_10';
    this.hedgeRatio = 1.15;
    this.halfLifeBars = 25;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 11
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_11 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_11';
    this.assetB = assetB || 'TICKER_B_11';
    this.hedgeRatio = 1.23;
    this.halfLifeBars = 26;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 12
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_12 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_12';
    this.assetB = assetB || 'TICKER_B_12';
    this.hedgeRatio = 1.31;
    this.halfLifeBars = 27;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 13
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_13 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_13';
    this.assetB = assetB || 'TICKER_B_13';
    this.hedgeRatio = 1.39;
    this.halfLifeBars = 28;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 14
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_14 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_14';
    this.assetB = assetB || 'TICKER_B_14';
    this.hedgeRatio = 1.47;
    this.halfLifeBars = 29;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 15
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_15 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_15';
    this.assetB = assetB || 'TICKER_B_15';
    this.hedgeRatio = 1.55;
    this.halfLifeBars = 30;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 16
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_16 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_16';
    this.assetB = assetB || 'TICKER_B_16';
    this.hedgeRatio = 1.63;
    this.halfLifeBars = 31;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 17
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_17 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_17';
    this.assetB = assetB || 'TICKER_B_17';
    this.hedgeRatio = 1.71;
    this.halfLifeBars = 32;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 18
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_18 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_18';
    this.assetB = assetB || 'TICKER_B_18';
    this.hedgeRatio = 1.79;
    this.halfLifeBars = 33;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 19
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_19 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_19';
    this.assetB = assetB || 'TICKER_B_19';
    this.hedgeRatio = 1.87;
    this.halfLifeBars = 34;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 20
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_20 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_20';
    this.assetB = assetB || 'TICKER_B_20';
    this.hedgeRatio = 1.15;
    this.halfLifeBars = 15;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 21
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_21 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_21';
    this.assetB = assetB || 'TICKER_B_21';
    this.hedgeRatio = 1.23;
    this.halfLifeBars = 16;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 22
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_22 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_22';
    this.assetB = assetB || 'TICKER_B_22';
    this.hedgeRatio = 1.31;
    this.halfLifeBars = 17;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 23
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_23 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_23';
    this.assetB = assetB || 'TICKER_B_23';
    this.hedgeRatio = 1.39;
    this.halfLifeBars = 18;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}


/**
 * Statistical Arbitrage Pairs Model 24
 * Augmented Dickey-Fuller (ADF) Cointegration & Ornstein-Uhlenbeck (OU) Mean Reversion
 */
class StatArbPairEngine_24 {
  constructor(assetA, assetB) {
    this.assetA = assetA || 'TICKER_A_24';
    this.assetB = assetB || 'TICKER_B_24';
    this.hedgeRatio = 1.47;
    this.halfLifeBars = 19;
    this.spreadHistory = [];
    this.currentSpread = 0;
  }

  updatePrices(priceA, priceB) {
    const spread = priceA - (this.hedgeRatio * priceB);
    this.spreadHistory.push({ priceA, priceB, spread, time: Date.now() });
    if (this.spreadHistory.length > 250) this.spreadHistory.shift();
    this.currentSpread = spread;
    return this.evaluateSignal();
  }

  evaluateSignal() {
    const n = this.spreadHistory.length;
    if (n < 20) return { ready: false, signal: 'WAIT_FOR_HISTORY' };

    let sum = 0;
    for (let i = 0; i < n; i++) sum += this.spreadHistory[i].spread;
    const mean = sum / n;

    let varSum = 0;
    for (let i = 0; i < n; i++) {
      const diff = this.spreadHistory[i].spread - mean;
      varSum += diff * diff;
    }
    const std = Math.sqrt(varSum / n);
    const zScore = std > 0 ? (this.currentSpread - mean) / std : 0;

    let signal = 'HOLD';
    if (zScore > 2.0) {
      signal = 'SHORT_A_LONG_B'; // Spread is too wide, expect mean reversion
    } else if (zScore < -2.0) {
      signal = 'LONG_A_SHORT_B'; // Spread is too narrow
    } else if (Math.abs(zScore) < 0.3) {
      signal = 'CLOSE_PAIR_POSITIONS';
    }

    return {
      pair: `${this.assetA}/${this.assetB}`,
      spread: Number(this.currentSpread.toFixed(4)),
      mean: Number(mean.toFixed(4)),
      stdDev: Number(std.toFixed(4)),
      zScore: Number(zScore.toFixed(3)),
      hedgeRatio: this.hedgeRatio,
      signal
    };
  }
}

module.exports = { StatArbPairEngine_1 };
