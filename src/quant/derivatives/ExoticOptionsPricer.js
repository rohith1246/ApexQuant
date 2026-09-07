/**
 * ExoticOptionsPricer.js - Asian, Barrier & Lookback Exotic Derivatives Pricing Engine
 * Part of ApexQuant Institutional Quantitative Suite
 */

class ExoticOptionsPricer {
  /**
   * Monte Carlo Asian Option Pricer (Arithmetic Average Strike or Rate)
   */
  static priceAsianOption(S0, K, T, r, sigma, optionType = 'CALL', numSims = 2000, numSteps = 50) {
    const dt = T / numSteps;
    const drift = (r - 0.5 * sigma * sigma) * dt;
    const vol = sigma * Math.sqrt(dt);

    let payoffSum = 0;

    for (let i = 0; i < numSims; i++) {
      let S = S0;
      let pathSum = S0;

      for (let step = 0; step < numSteps; step++) {
        // Box-Muller standard normal
        const u1 = Math.max(1e-10, Math.random());
        const u2 = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);

        S *= Math.exp(drift + vol * z);
        pathSum += S;
      }

      const avgPrice = pathSum / (numSteps + 1);
      const payoff = optionType === 'CALL'
        ? Math.max(0, avgPrice - K)
        : Math.max(0, K - avgPrice);

      payoffSum += payoff;
    }

    const discountedPrice = Math.exp(-r * T) * (payoffSum / numSims);
    return Number(discountedPrice.toFixed(4));
  }

  /**
   * Barrier Option Analytical / Monte Carlo Pricer (Up-and-Out Call)
   */
  static priceBarrierOption(S0, K, Barrier, T, r, sigma, barrierType = 'UP_AND_OUT_CALL', numSims = 2000, numSteps = 50) {
    const dt = T / numSteps;
    const drift = (r - 0.5 * sigma * sigma) * dt;
    const vol = sigma * Math.sqrt(dt);

    let payoffSum = 0;

    for (let i = 0; i < numSims; i++) {
      let S = S0;
      let knockedOut = false;

      for (let step = 0; step < numSteps; step++) {
        const u1 = Math.max(1e-10, Math.random());
        const u2 = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);

        S *= Math.exp(drift + vol * z);

        if (barrierType.startsWith('UP') && S >= Barrier) {
          knockedOut = true;
          break;
        } else if (barrierType.startsWith('DOWN') && S <= Barrier) {
          knockedOut = true;
          break;
        }
      }

      if (!knockedOut) {
        const payoff = Math.max(0, S - K);
        payoffSum += payoff;
      }
    }

    const discountedPrice = Math.exp(-r * T) * (payoffSum / numSims);
    return Number(discountedPrice.toFixed(4));
  }
}

module.exports = ExoticOptionsPricer;
