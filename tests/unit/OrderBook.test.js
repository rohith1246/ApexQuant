const assert = require('assert');
const LimitOrderBook = require('../../src/engine/orderbook/LimitOrderBook');

module.exports = function testOrderBook() {
  console.log('  * Running LimitOrderBook tests...');
  const book = new LimitOrderBook('AAPL');
  book.addOrder('o1', 'buy', 150.00, 100);
  book.addOrder('o2', 'buy', 150.50, 200);
  book.addOrder('o3', 'sell', 151.00, 150);

  assert.strictEqual(book.getBestBid(), 150.50, 'Best bid should be 150.50');
  assert.strictEqual(book.getBestAsk(), 151.00, 'Best ask should be 151.00');
  assert.strictEqual(book.getSpread(), 0.50, 'Spread should be 0.50');

  book.cancelOrder('o2');
  assert.strictEqual(book.getBestBid(), 150.00, 'Best bid after cancel should be 150.00');

  console.log('    [PASS] LimitOrderBook L2/L3 tests passed.');
};
