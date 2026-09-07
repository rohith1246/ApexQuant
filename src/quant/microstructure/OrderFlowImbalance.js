/**
 * OrderFlowImbalance.js - High-Frequency Market Microstructure & Illiquidity Analytics
 * Part of ApexQuant Institutional Quantitative Suite
 */

class OrderFlowImbalance {
  /**
   * Calculates Level 1 Order Flow Imbalance (OFI)
   * OFI_t = I(P_b,t >= P_b,t-1) * q_b,t - I(P_b,t <= P_b,t-1) * q_b,t-1 
   *       - I(P_a,t <= P_a,t-1) * q_a,t + I(P_a,t >= P_a,t-1) * q_a,t-1
   */
  static calculateOFI(prevBook, currBook) {
    let bidFlow = 0;
    if (currBook.bidPrice > prevBook.bidPrice) {
      bidFlow = currBook.bidSize;
    } else if (currBook.bidPrice === prevBook.bidPrice) {
      bidFlow = currBook.bidSize - prevBook.bidSize;
    } else {
      bidFlow = -prevBook.bidSize;
    }

    let askFlow = 0;
    if (currBook.askPrice < prevBook.askPrice) {
      askFlow = currBook.askSize;
    } else if (currBook.askPrice === prevBook.askPrice) {
      askFlow = currBook.askSize - prevBook.askSize;
    } else {
      askFlow = -prevBook.askSize;
    }

    const ofi = bidFlow - askFlow;
    return {
      ofi,
      bidFlow,
      askFlow,
      imbalanceRatio: Number(((bidFlow - askFlow) / Math.max(1, Math.abs(bidFlow) + Math.abs(askFlow))).toFixed(4))
    };
  }

  /**
   * Kyle's Lambda Price Impact Estimator
   * Lambda = Cov(Delta P, Q) / Var(Q)
   */
  static estimateKylesLambda(priceDeltas, netOrderVolumes) {
    if (priceDeltas.length !== netOrderVolumes.length || priceDeltas.length < 2) {
      return 0;
    }

    const n = priceDeltas.length;
    const meanP = priceDeltas.reduce((a, b) => a + b, 0) / n;
    const meanQ = netOrderVolumes.reduce((a, b) => a + b, 0) / n;

    let cov = 0;
    let varQ = 0;

    for (let i = 0; i < n; i++) {
      const pDiff = priceDeltas[i] - meanP;
      const qDiff = netOrderVolumes[i] - meanQ;
      cov += pDiff * qDiff;
      varQ += qDiff * qDiff;
    }

    return varQ === 0 ? 0 : Number((cov / varQ).toFixed(8));
  }

  /**
   * Amihud Illiquidity Measure
   * ILLIQ = (1 / D) * sum ( |R_d| / (P_d * V_d) )
   */
  static calculateAmihudIlliquidity(dailyBars) {
    if (dailyBars.length === 0) return 0;

    let total = 0;
    for (const bar of dailyBars) {
      const absReturn = Math.abs(bar.close - bar.open) / bar.open;
      const dollarVolume = bar.close * bar.volume;
      if (dollarVolume > 0) {
        total += (absReturn / dollarVolume);
      }
    }

    return Number(((total / dailyBars.length) * 1e6).toFixed(6)); // Scaled by 10^6
  }
}

module.exports = OrderFlowImbalance;
