/**
 * ApexQuant Institutional Engine - Master Automated Test Runner
 */

const testOrderBook = require('./unit/OrderBook.test');
const testMatchingEngine = require('./unit/MatchingEngine.test');
const testBlackScholes = require('./unit/BlackScholes.test');
const testMonteCarloVaR = require('./unit/MonteCarloVaR.test');
const testIndicators = require('./unit/TechnicalIndicators.test');
const testFIX = require('./unit/FIXProtocol.test');

console.log('================================================================');
console.log('  ⚡ APEXQUANT - MASTER QUANTITATIVE TEST SUITES EXECUTION');
console.log('================================================================');

try {
  testOrderBook();
  testMatchingEngine();
  testBlackScholes();
  testMonteCarloVaR();
  testIndicators();
  testFIX();

  console.log('================================================================');
  console.log('  ✅ ALL INSTITUTIONAL QUANT TEST SUITES PASSED (100% SUCCESS)');
  console.log('================================================================');
} catch (err) {
  console.error('❌ Test suite failed:', err);
  process.exit(1);
}
