const assert = require('assert');
const MonteCarloVaR = require('../../src/quant/risk/MonteCarloVaR');

module.exports = function testMonteCarloVaR() {
  console.log('  * Running MonteCarloVaR simulation tests...');
  const portfolioVal = 1000000; // $1M portfolio
  const weights = [0.6, 0.4];
  const mu = [0.10, 0.08];
  const covMatrix = [
    [0.04, 0.01],
    [0.01, 0.09]
  ];

  const varResult = MonteCarloVaR.simulateVaR(portfolioVal, weights, mu, covMatrix, 1, 1000, 0.99);
  assert(varResult.varAmount > 0, 'VaR must be positive');
  assert(varResult.cvarAmount >= varResult.varAmount, 'CVaR must be greater than or equal to VaR');

  console.log('    [PASS] Monte Carlo VaR & CVaR risk simulation passed.');
};
