/**
 * HFTMarketMaker_Model29.js - Avellaneda-Stoikov Microstructure Market Making Model
 * HFT Model Index: 29
 * Part of ApexQuant Institutional Quantitative Suite
 */

class HFTMarketMaker_Model29 {
  constructor(gamma = 0.140, sigma = 0.34) {
    this.modelId = 'HFT_MM_29';
    this.gamma = gamma; // Risk aversion parameter
    this.sigma = sigma; // Asset volatility
    this.currentInventory = 0;
  }

  calculateReservationPrice(midPrice, timeRemainingSec = 300) {
    // r(s, q, t) = s - q * gamma * sigma^2 * (T - t)
    const T_minus_t = timeRemainingSec / 86400; // Fraction of trading day
    const inventoryPenalty = this.currentInventory * this.gamma * (this.sigma * this.sigma) * T_minus_t;
    return midPrice - inventoryPenalty;
  }

  calculateOptimalQuotes(midPrice, orderBookSpread = 0.05) {
    const r = this.calculateReservationPrice(midPrice);
    const halfSpread = orderBookSpread / 2;

    const optimalBid = r - halfSpread;
    const optimalAsk = r + halfSpread;

    return {
      modelId: this.modelId,
      reservationPrice: Number(r.toFixed(4)),
      bidQuote: Number(optimalBid.toFixed(4)),
      askQuote: Number(optimalAsk.toFixed(4)),
      skewDirection: this.currentInventory > 0 ? 'LOWER_BIDS_TO_OFFLOAD' : 'HIGHER_ASKS_TO_ACCUMULATE'
    };
  }

  onFill(side, quantity) {
    if (side === 'BUY') this.currentInventory += quantity;
    else if (side === 'SELL') this.currentInventory -= quantity;
  }
}

module.exports = HFTMarketMaker_Model29;
