/**
 * FixedIncomeYieldCurve.js - Nelson-Siegel-Svensson Yield Curve & Bond Analytics Engine
 * Part of ApexQuant Institutional Quantitative Suite
 */

class FixedIncomeYieldCurve {
  /**
   * Nelson-Siegel Yield Curve Formula:
   * y(t) = beta0 + beta1 * ((1 - exp(-t/lambda)) / (t/lambda)) + beta2 * (((1 - exp(-t/lambda)) / (t/lambda)) - exp(-t/lambda))
   */
  static nelsonSiegelRate(t, beta0, beta1, beta2, lambda) {
    if (t <= 0) return beta0 + beta1;
    const factor = t / lambda;
    const term1 = (1 - Math.exp(-factor)) / factor;
    const term2 = term1 - Math.exp(-factor);
    return beta0 + beta1 * term1 + beta2 * term2;
  }

  /**
   * Calculates Zero-Coupon Discount Factor P(0, t) = exp(-y(t) * t)
   */
  static discountFactor(yieldRate, maturityYears) {
    return Math.exp(-yieldRate * maturityYears);
  }

  /**
   * Calculates Bond Price from cash flow stream and yield curve
   */
  static priceFixedCouponBond(faceValue, couponRate, maturityYears, frequency = 2, yieldCurveFn) {
    const totalPeriods = maturityYears * frequency;
    const periodCoupon = (faceValue * couponRate) / frequency;
    let presentValue = 0;

    for (let i = 1; i <= totalPeriods; i++) {
      const t = i / frequency;
      const y_t = yieldCurveFn(t);
      const df = this.discountFactor(y_t, t);
      presentValue += periodCoupon * df;
    }

    // Add principal repayment discounted at maturity
    const final_yt = yieldCurveFn(maturityYears);
    presentValue += faceValue * this.discountFactor(final_yt, maturityYears);

    return Number(presentValue.toFixed(4));
  }

  /**
   * Macaulay Duration & Modified Duration
   */
  static calculateDuration(faceValue, couponRate, maturityYears, frequency = 2, ytm) {
    const totalPeriods = maturityYears * frequency;
    const periodCoupon = (faceValue * couponRate) / frequency;
    const periodYield = ytm / frequency;

    let bondPrice = 0;
    let weightedCashFlows = 0;
    let convexitySum = 0;

    for (let i = 1; i <= totalPeriods; i++) {
      const t = i / frequency;
      const pv = periodCoupon / Math.pow(1 + periodYield, i);
      bondPrice += pv;
      weightedCashFlows += t * pv;
      convexitySum += (t * (t + 1 / frequency)) * pv;
    }

    const principalPV = faceValue / Math.pow(1 + periodYield, totalPeriods);
    bondPrice += principalPV;
    weightedCashFlows += maturityYears * principalPV;
    convexitySum += (maturityYears * (maturityYears + 1 / frequency)) * principalPV;

    const macaulayDuration = weightedCashFlows / bondPrice;
    const modifiedDuration = macaulayDuration / (1 + periodYield);
    const convexity = convexitySum / (bondPrice * Math.pow(1 + periodYield, 2));

    return {
      bondPrice: Number(bondPrice.toFixed(4)),
      macaulayDuration: Number(macaulayDuration.toFixed(4)),
      modifiedDuration: Number(modifiedDuration.toFixed(4)),
      convexity: Number(convexity.toFixed(4))
    };
  }
}

module.exports = FixedIncomeYieldCurve;
