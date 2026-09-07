/**
 * MatchingEngine.js - Ultra-Low Latency FIFO / Pro-Rata Matching Engine
 */

const LimitOrderBook = require('./LimitOrderBook');

class MatchingEngine {
  constructor() {
    this.books = new Map();
    this.tradeHistory = [];
  }

  getBook(symbol) {
    if (!this.books.has(symbol)) {
      this.books.set(symbol, new LimitOrderBook(symbol));
    }
    return this.books.get(symbol);
  }

  processOrder(incomingOrder) {
    const book = this.getBook(incomingOrder.symbol);
    const fills = [];
    const isBuy = incomingOrder.side.toUpperCase() === 'BUY';
    const oppositeBook = isBuy ? book.asks : book.bids;

    let remainingQty = incomingOrder.quantity;

    // Cross the book
    const sortedOppositePrices = Array.from(oppositeBook.keys()).sort((a, b) => isBuy ? a - b : b - a);

    for (const price of sortedOppositePrices) {
      if (remainingQty <= 0) break;
      if (isBuy && price > incomingOrder.price) break; // Price limit check
      if (!isBuy && price < incomingOrder.price) break;

      const queue = oppositeBook.get(price);
      while (queue.length > 0 && remainingQty > 0) {
        const makerOrder = queue[0];
        const matchQty = Math.min(remainingQty, makerOrder.quantity);

        fills.push({
          takerOrderId: incomingOrder.id,
          makerOrderId: makerOrder.id,
          symbol: incomingOrder.symbol,
          price,
          quantity: matchQty,
          timestamp: Date.now()
        });

        remainingQty -= matchQty;
        makerOrder.quantity -= matchQty;

        if (makerOrder.quantity <= 0) {
          queue.shift();
          book.orderIndex.delete(makerOrder.id);
        }
      }

      if (queue.length === 0) oppositeBook.delete(price);
    }

    // Place remaining quantity in book if not IOC/FOK
    if (remainingQty > 0 && incomingOrder.type !== 'IOC' && incomingOrder.type !== 'FOK') {
      incomingOrder.quantity = remainingQty;
      book.addOrder(incomingOrder);
    }

    this.tradeHistory.push(...fills);
    return { fills, remainingQuantity: remainingQty, status: remainingQty === 0 ? 'FILLED' : fills.length > 0 ? 'PARTIAL' : 'RESTING' };
  }
}

module.exports = MatchingEngine;
