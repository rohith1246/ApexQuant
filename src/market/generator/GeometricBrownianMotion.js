/**
 * GeometricBrownianMotion.js - Stochastic Multi-Asset Market Path Generator
 * Implements Ito calculus and Euler-Maruyama numerical integration for jump-diffusion processes.
 * Part of ApexQuant Quantitative Engine.
 */

class GeometricBrownianMotion {
  constructor(config = {}) {
    this.dt = config.dt || 1 / 252; // Daily time step
    this.seed = config.seed || 42;
  }

  /**
   * Box-Muller transform for standard normal random variables
   */
  sampleStandardNormal() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  /**
   * Generate correlated bivariate normal random variables
   */
  sampleCorrelatedNormals(rho) {
    const z1 = this.sampleStandardNormal();
    const z2 = this.sampleStandardNormal();
    const correlatedZ2 = rho * z1 + Math.sqrt(1 - rho * rho) * z2;
    return { z1, z2: correlatedZ2 };
  }

  /**
   * Simulate a realistic asset price path using Geometric Brownian Motion with Merton Jump Diffusion
   */
  simulatePath(s0, mu, sigma, steps = 100, jumpIntensity = 0.05, jumpMean = -0.02, jumpStd = 0.04) {
    const path = [{ time: 0, price: s0, open: s0, high: s0, low: s0, close: s0, volume: 100000 }];
    let currentPrice = s0;

    for (let t = 1; t <= steps; t++) {
      const z = this.sampleStandardNormal();
      const drift = (mu - 0.5 * sigma * sigma) * this.dt;
      const diffusion = sigma * Math.sqrt(this.dt) * z;
      
      // Poisson jump component
      let jumpMultiplier = 1.0;
      if (Math.random() < jumpIntensity * this.dt) {
        const jumpSize = jumpMean + jumpStd * this.sampleStandardNormal();
        jumpMultiplier = Math.exp(jumpSize);
      }

      const prevPrice = currentPrice;
      currentPrice = currentPrice * Math.exp(drift + diffusion) * jumpMultiplier;
      currentPrice = Math.max(0.01, Number(currentPrice.toFixed(2)));

      // Generate realistic intra-bar high/low/volume
      const barSpread = currentPrice * sigma * Math.sqrt(this.dt) * (0.5 + Math.random());
      const high = Number((Math.max(prevPrice, currentPrice) + barSpread * 0.6).toFixed(2));
      const low = Number((Math.min(prevPrice, currentPrice) - barSpread * 0.4).toFixed(2));
      const volume = Math.round(50000 + Math.random() * 200000 + Math.abs(currentPrice - prevPrice) * 50000);

      path.push({
        step: t,
        open: prevPrice,
        high,
        low,
        close: currentPrice,
        price: currentPrice,
        volume,
        timestamp: Date.now() - (steps - t) * 60000
      });
    }

    return path;
  }

  /**
   * Simulate Heston Stochastic Volatility Model (dSt = mu*St*dt + sqrt(vt)*St*dW1, dvt = kappa*(theta - vt)*dt + xi*sqrt(vt)*dW2)
   */
  simulateHeston(s0, v0, mu, kappa, theta, xi, rho, steps = 100) {
    const path = [];
    let s = s0;
    let v = v0;

    for (let t = 0; t < steps; t++) {
      const { z1, z2 } = this.sampleCorrelatedNormals(rho);
      
      // Full truncation scheme for variance process to prevent negative variance
      const vPositive = Math.max(0, v);
      const sqrtV = Math.sqrt(vPositive);

      const dv = kappa * (theta - vPositive) * this.dt + xi * sqrtV * Math.sqrt(this.dt) * z2;
      v = Math.max(0.0001, v + dv);

      const ds = mu * s * this.dt + sqrtV * s * Math.sqrt(this.dt) * z1;
      s = Math.max(0.01, s + ds);

      path.push({
        step: t,
        price: Number(s.toFixed(2)),
        volatility: Number(Math.sqrt(v).toFixed(4)),
        variance: Number(v.toFixed(6))
      });
    }

    return path;
  }
}

module.exports = GeometricBrownianMotion;
