const assert = require('assert');
const BlackScholesGreeks = require('../../src/quant/models/BlackScholesGreeks');
const CrankNicolsonFiniteDifference = require('../../src/quant/pde/CrankNicolsonFiniteDifference');
const ValueAtRiskEngine = require('../../src/quant/risk/ValueAtRiskEngine');
const MovingAverages = require('../../src/indicators/trend/MovingAverages');
const GeometricBrownianMotion = require('../../src/market/generator/GeometricBrownianMotion');
const MatchingEngine = require('../../src/engine/matching/MatchingEngine');
const FixMessage = require('../../src/protocol/fix/FixMessage');
const FixEngine = require('../../src/protocol/fix/FixEngine');
const SABRModel = require('../../src/quant/volatility/SABRModel');
const HierarchicalRiskParity = require('../../src/quant/portfolio/HierarchicalRiskParity');
const ComprehensiveIndicatorSuite = require('../../src/indicators/composite/ComprehensiveIndicatorSuite');
const AlgorithmicExecutionEngine = require('../../src/quant/execution/AlgorithmicExecutionEngine');
const EventDrivenBacktester = require('../../src/quant/backtest/EventDrivenBacktester');
const OrderFlowImbalance = require('../../src/quant/microstructure/OrderFlowImbalance');
const MatrixLinearAlgebra = require('../../src/quant/linalg/MatrixLinearAlgebra');
const FixedIncomeYieldCurve = require('../../src/quant/bonds/FixedIncomeYieldCurve');
const ExoticOptionsPricer = require('../../src/quant/derivatives/ExoticOptionsPricer');
const QuasiMonteCarloEngine = require('../../src/quant/montecarlo/QuasiMonteCarloEngine');

// 1. Black-Scholes Formula Verification
const bsResult = BlackScholesGreeks.calculate(100, 100, 1.0, 0.05, 0.20, 'CALL');
assert.ok(bsResult.price > 10.40 && bsResult.price < 10.50, `BS Call price failed: ${bsResult.price}`);
assert.ok(bsResult.delta > 0.60 && bsResult.delta < 0.65, `BS Delta failed: ${bsResult.delta}`);

// 2. Finite Difference PDE Solver Verification
const pdeSolver = new CrankNicolsonFiniteDifference({ sNodes: 80, tNodes: 40 });
const pdePrice = pdeSolver.solve(100, 100, 1.0, 0.05, 0.20, false, true);
assert.ok(pdePrice > 5.50 && pdePrice < 7.00, `PDE American put price failed: ${pdePrice}`);

// 3. Value at Risk Verification
const varResult = ValueAtRiskEngine.calculateParametricVaR(1000000, 0.0005, 0.015, 0.99, 1);
assert.ok(varResult.varAmount > 30000, `VaR amount failed: ${varResult.varAmount}`);

// 4. Trend & Moving Averages
const prices = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const sma = MovingAverages.sma(prices, 5);
assert.strictEqual(sma[0], 12);
assert.strictEqual(sma[sma.length - 1], 18);

// 5. Stochastic Market Simulator
const gbm = new GeometricBrownianMotion();
const path = gbm.simulatePath(150, 0.08, 0.25, 50);
assert.strictEqual(path.length, 51);
assert.ok(path[50].price > 0);

// 6. Matching Engine Order Processing
const engine = new MatchingEngine();
engine.processOrder({ id: 'ORD_1', symbol: 'NVDA', side: 'SELL', price: 130.00, quantity: 100, type: 'LIMIT' });
const match = engine.processOrder({ id: 'ORD_2', symbol: 'NVDA', side: 'BUY', price: 130.00, quantity: 40, type: 'LIMIT' });
assert.strictEqual(match.fills.length, 1);
assert.strictEqual(match.fills[0].quantity, 40);

// 7. FIX 4.4 Protocol Encoder & State Machine
const fixSession = new FixEngine('APEX_CLIENT', 'EXCHANGE');
const orderMsg = fixSession.createNewOrderSingle({ symbol: 'NVDA', side: 'BUY', quantity: 100, price: 130.50 });
const rawFix = orderMsg.encode();
assert.ok(rawFix.startsWith('8=FIX.4.4'));
assert.ok(rawFix.includes('55=NVDA'));
assert.ok(rawFix.includes('10='));
const parsedFix = FixMessage.parse(rawFix, String.fromCharCode(1));
assert.strictEqual(parsedFix.getField(55), 'NVDA');

// 8. SABR Implied Volatility Model
const sabr = new SABRModel(0.20, 0.5, -0.25, 0.35);
const atmVol = sabr.impliedVolatility(100, 100, 0.5);
assert.ok(atmVol > 0.01 && atmVol < 0.50, `SABR ATM vol failed: ${atmVol}`);
const smile = sabr.generateSmile(100, 0.5, 0.8, 1.2, 5);
assert.strictEqual(smile.length, 5);

// 9. Hierarchical Risk Parity (HRP) Allocation
const dummyReturns = [
  [0.01, -0.02, 0.015, -0.005, 0.02, -0.01],
  [0.005, -0.01, 0.01, -0.002, 0.015, -0.008],
  [0.02, -0.03, 0.025, -0.01, 0.03, -0.015]
];
const hrpRes = HierarchicalRiskParity.computeHRPWeights(['NVDA', 'AAPL', 'MSFT'], dummyReturns);
assert.ok(hrpRes.weights.NVDA > 0 && hrpRes.weights.AAPL > 0);

// 10. Comprehensive Indicators (VWAP & CCI)
const highs = [102, 104, 103, 105, 106, 108, 107];
const lows = [99, 101, 100, 102, 103, 105, 104];
const closes = [101, 103, 102, 104, 105, 107, 106];
const volumes = [1000, 1500, 1200, 2000, 1800, 2500, 2200];
const vwap = ComprehensiveIndicatorSuite.vwap(highs, lows, closes, volumes);
assert.strictEqual(vwap.length, closes.length);

// 11. Algorithmic Execution Slicer (TWAP & VWAP)
const twap = AlgorithmicExecutionEngine.generateTWAPSchedule({
  symbol: 'NVDA',
  side: 'BUY',
  totalQuantity: 10000,
  durationMinutes: 30,
  sliceIntervalSeconds: 60
});
assert.strictEqual(twap.totalSlices, 30);
const pov = AlgorithmicExecutionEngine.calculatePOVChildOrder(0.15, 2000, 5000);
assert.strictEqual(pov.childQuantity, 300);

// 12. Event-Driven Backtester
const backtester = new EventDrivenBacktester(500000);
backtester.recordBar(1000, 100);
backtester.executeSignal({ symbol: 'AAPL', close: 100, timestamp: 1000 }, { action: 'BUY', targetWeight: 0.5 });
backtester.recordBar(2000, 110);
const perf = backtester.calculatePerformanceMetrics();
assert.ok(perf.finalEquity > 500000);
assert.strictEqual(perf.totalTradesExecuted, 1);

// 13. Microstructure OFI & Kyle's Lambda
const ofi = OrderFlowImbalance.calculateOFI(
  { bidPrice: 100, bidSize: 50, askPrice: 101, askSize: 40 },
  { bidPrice: 100, bidSize: 70, askPrice: 101, askSize: 30 }
);
assert.strictEqual(ofi.ofi, 30);

// 14. Matrix Linear Algebra (Cholesky & Jacobi Eigenvalues)
const symMat = [
  [4, 12, -16],
  [12, 37, -43],
  [-16, -43, 98]
];
const chol = MatrixLinearAlgebra.cholesky(symMat);
assert.ok(chol[0][0] > 0);
const eigen = MatrixLinearAlgebra.jacobiEigenvalues(symMat);
assert.strictEqual(eigen.eigenvalues.length, 3);

// 15. Fixed Income Yield Curve (Nelson-Siegel & Duration)
const rate = FixedIncomeYieldCurve.nelsonSiegelRate(5.0, 0.04, -0.02, 0.01, 2.0);
assert.ok(rate > 0.02 && rate < 0.06);
const duration = FixedIncomeYieldCurve.calculateDuration(1000, 0.05, 5, 2, 0.04);
assert.ok(duration.macaulayDuration > 3.5 && duration.macaulayDuration < 5.0);

// 16. Exotic Options (Asian Option)
const asianPrice = ExoticOptionsPricer.priceAsianOption(100, 100, 1.0, 0.05, 0.20, 'CALL', 500, 20);
assert.ok(asianPrice > 3.0 && asianPrice < 12.0);

// 17. Quasi-Monte Carlo (Halton Set & InvNormalCDF)
const haltonSet = QuasiMonteCarloEngine.generateHaltonSet(10, 3);
assert.strictEqual(haltonSet.length, 10);
assert.strictEqual(haltonSet[0].length, 3);
const normZ = QuasiMonteCarloEngine.invNormalCDF(0.975);
assert.ok(Math.abs(normZ - 1.96) < 0.02);

console.log('✅ All 17 ApexQuant Core Algorithmic & Protocol Test Suites Passed Successfully!');
