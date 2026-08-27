const assert = require('assert');
const BlackScholes = require('../../src/quant/options/BlackScholes');

module.exports = function testBlackScholes() {
  console.log('  * Running BlackScholes options pricing tests...');
  // S=100, K=100, T=1 year, r=5%, vol=20%
  const res = BlackScholes.calculate(100, 100, 1.0, 0.05, 0.20);
  assert(res.callPrice > 9.0 && res.callPrice < 12.0, 'Call price should be ~10.45');
  assert(res.putPrice > 5.0 && res.putPrice < 7.0, 'Put price should be ~5.57');
  assert(res.deltaCall > 0.55 && res.deltaCall < 0.70, 'Call Delta should be ~0.63');
  assert(res.gamma > 0, 'Gamma must be positive');
  assert(res.vega > 0, 'Vega must be positive');

  console.log('    [PASS] BlackScholes pricing & Greeks passed.');
};
