const assert = require('assert');
const MatchingEngine = require('../../src/engine/matching/MatchingEngine');

module.exports = function testMatchingEngine() {
  console.log('  * Running MatchingEngine tests...');
  const engine = new MatchingEngine('BTC-USD');
  engine.submitLimitOrder('sell_1', 'sell', 50000, 2.0);

  const matchRes = engine.submitLimitOrder('buy_1', 'buy', 50000, 1.5);
  assert.strictEqual(matchRes.trades.length, 1, 'Should execute 1 trade');
  assert.strictEqual(matchRes.filledSize, 1.5, 'Filled size should be 1.5');
  assert.strictEqual(matchRes.remainingSize, 0, 'Remaining buy size should be 0');

  console.log('    [PASS] MatchingEngine trade matching passed.');
};
