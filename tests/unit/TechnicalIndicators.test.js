const assert = require('assert');
const TechnicalIndicators = require('../../src/indicators/TechnicalIndicators');

module.exports = function testIndicators() {
  console.log('  * Running TechnicalIndicators tests...');
  const prices = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  const sma = TechnicalIndicators.SMA(prices, 5);
  assert.strictEqual(sma[4], 12, 'SMA(5) at index 4 should be 12');

  const bb = TechnicalIndicators.BollingerBands(prices, 5, 2);
  assert(bb.upper[4] > bb.middle[4], 'Upper Bollinger band must exceed middle band');

  console.log('    [PASS] TechnicalIndicators calculation passed.');
};
