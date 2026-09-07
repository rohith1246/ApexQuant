const assert = require('assert');
const FIXParser = require('../../server/protocol/FIXParser');

module.exports = function testFIX() {
  console.log('  * Running FIXParser protocol tests...');
  const rawFix = '8=FIX.4.4\x019=45\x0135=D\x0111=ORD123\x0155=AAPL\x0154=1\x0138=100\x0144=150.25\x0110=128\x01';
  const parsed = FIXParser.parse(rawFix);

  assert.strictEqual(parsed.msgType, 'D');
  assert.strictEqual(parsed.clOrdID, 'ORD123');
  assert.strictEqual(parsed.symbol, 'AAPL');
  assert.strictEqual(parsed.side, 'buy');
  assert.strictEqual(parsed.orderQty, 100);
  assert.strictEqual(parsed.price, 150.25);

  console.log('    [PASS] FIX Protocol Parser passed.');
};
