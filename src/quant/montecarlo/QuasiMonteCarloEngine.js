/**
 * QuasiMonteCarloEngine.js - Low-Discrepancy Sobol & Halton Sequences for High-Dimensional Derivatives
 * Part of ApexQuant Institutional Quantitative Suite
 */

class QuasiMonteCarloEngine {
  /**
   * Halton Low-Discrepancy Sequence Generator
   * Maps integer index to uniform interval [0, 1) using prime base b
   */
  static halton(index, base) {
    let f = 1;
    let r = 0;
    let i = index;

    while (i > 0) {
      f = f / base;
      r = r + f * (i % base);
      i = Math.floor(i / base);
    }

    return r;
  }

  /**
   * Generates N points in D dimensions using first D prime numbers
   */
  static generateHaltonSet(nPoints, dimensions = 2) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
    const points = [];

    for (let i = 1; i <= nPoints; i++) {
      const point = new Float64Array(dimensions);
      for (let d = 0; d < dimensions; d++) {
        point[d] = this.halton(i, primes[d % primes.length]);
      }
      points.push(point);
    }

    return points;
  }

  /**
   * Inverse CDF standard normal approximation (Moro / Acklam approximation)
   */
  static invNormalCDF(p) {
    const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
    const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
    const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
    const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];

    const p_low = 0.02425;
    const p_high = 1 - p_low;

    if (p < p_low) {
      const q = Math.sqrt(-2 * Math.log(p));
      return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
    }
    if (p <= p_high) {
      const q = p - 0.5;
      const r = q * q;
      return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q / (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
    }
    const q = Math.sqrt(-2 * Math.log(1 - p));
    return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
  }
}

module.exports = QuasiMonteCarloEngine;
