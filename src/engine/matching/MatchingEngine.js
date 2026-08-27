/**
 * MatchingEngine.js - Ultra Low Latency Deterministic Trade Matching
 * Part of ApexQuant Institutional Engine
 */

const LimitOrderBook = require('../orderbook/LimitOrderBook');

class MatchingEngine {
  constructor(symbol = 'BTC-USD') {
    this.symbol = symbol;
    this.orderBook = new LimitOrderBook(symbol);
    this.trades = [];
    this.makerFeeRate = 0.0002; // 2 bps
    this.takerFeeRate = 0.0005; // 5 bps
  }

  submitLimitOrder(orderId, side, price, size) {
    const trades = [];
    let remainingSize = Number(size);

    if (side === 'buy') {
      while (remainingSize > 0) {
        const bestAsk = this.orderBook.getBestAsk();
        if (bestAsk === null || bestAsk > price) break;

        const level = this.orderBook.asks.get(bestAsk);
        while (level.head && remainingSize > 0) {
          const restingOrder = level.head;
          const matchVolume = Math.min(remainingSize, restingOrder.size - restingOrder.filledSize);

          restingOrder.filledSize += matchVolume;
          remainingSize -= matchVolume;
          level.totalVolume -= matchVolume;

          const trade = {
            tradeId: `trade_${Date.now()}_${trades.length + 1}`,
            symbol: this.symbol,
            price: restingOrder.price,
            size: matchVolume,
            buyerOrderId: orderId,
            sellerOrderId: restingOrder.orderId,
            timestamp: Date.now(),
            makerFee: matchVolume * restingOrder.price * this.makerFeeRate,
            takerFee: matchVolume * restingOrder.price * this.takerFeeRate
          };

          trades.push(trade);
          this.trades.push(trade);
          this.orderBook.lastTradePrice = restingOrder.price;

          if (restingOrder.filledSize >= restingOrder.size) {
            this.orderBook.cancelOrder(restingOrder.orderId);
          }
        }
      }
    } else {
      // Sell Order
      while (remainingSize > 0) {
        const bestBid = this.orderBook.getBestBid();
        if (bestBid === null || bestBid < price) break;

        const level = this.orderBook.bids.get(bestBid);
        while (level.head && remainingSize > 0) {
          const restingOrder = level.head;
          const matchVolume = Math.min(remainingSize, restingOrder.size - restingOrder.filledSize);

          restingOrder.filledSize += matchVolume;
          remainingSize -= matchVolume;
          level.totalVolume -= matchVolume;

          const trade = {
            tradeId: `trade_${Date.now()}_${trades.length + 1}`,
            symbol: this.symbol,
            price: restingOrder.price,
            size: matchVolume,
            buyerOrderId: restingOrder.orderId,
            sellerOrderId: orderId,
            timestamp: Date.now(),
            makerFee: matchVolume * restingOrder.price * this.makerFeeRate,
            takerFee: matchVolume * restingOrder.price * this.takerFeeRate
          };

          trades.push(trade);
          this.trades.push(trade);
          this.orderBook.lastTradePrice = restingOrder.price;

          if (restingOrder.filledSize >= restingOrder.size) {
            this.orderBook.cancelOrder(restingOrder.orderId);
          }
        }
      }
    }

    if (remainingSize > 0) {
      this.orderBook.addOrder(orderId, side, price, remainingSize);
    }

    return {
      orderId,
      remainingSize,
      filledSize: size - remainingSize,
      trades
    };
  }
}

module.exports = MatchingEngine;
