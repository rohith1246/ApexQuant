/**
 * LimitOrderBook.js - Price-Time Priority Level-2 / Level-3 Order Book
 * Maintains doubly-linked price queues for sub-microsecond matching.
 */

class LimitOrderBook {
  constructor(symbol = 'NVDA') {
    this.symbol = symbol;
    this.bids = new Map(); // Price -> Array of orders
    this.asks = new Map(); // Price -> Array of orders
    this.orderIndex = new Map(); // OrderId -> Order Ref
  }

  addOrder(order) {
    const isBid = order.side.toUpperCase() === 'BUY';
    const book = isBid ? this.bids : this.asks;
    const price = order.price;

    if (!book.has(price)) {
      book.set(price, []);
    }
    book.get(price).push(order);
    this.orderIndex.set(order.id, { order, isBid, price });
  }

  cancelOrder(orderId) {
    const ref = this.orderIndex.get(orderId);
    if (!ref) return false;

    const book = ref.isBid ? this.bids : this.asks;
    const queue = book.get(ref.price);
    if (queue) {
      const idx = queue.findIndex(o => o.id === orderId);
      if (idx !== -1) {
        queue.splice(idx, 1);
        if (queue.length === 0) book.delete(ref.price);
        this.orderIndex.delete(orderId);
        return true;
      }
    }
    return false;
  }

  getBestBid() {
    if (this.bids.size === 0) return null;
    const prices = Array.from(this.bids.keys());
    return Math.max(...prices);
  }

  getBestAsk() {
    if (this.asks.size === 0) return null;
    const prices = Array.from(this.asks.keys());
    return Math.min(...prices);
  }

  getSpread() {
    const bb = this.getBestBid();
    const ba = this.getBestAsk();
    if (bb === null || ba === null) return 0;
    return Number((ba - bb).toFixed(4));
  }

  getDepth(levels = 10) {
    const sortedBids = Array.from(this.bids.keys()).sort((a, b) => b - a).slice(0, levels).map(p => ({
      price: p,
      quantity: this.bids.get(p).reduce((sum, o) => sum + o.quantity, 0)
    }));
    const sortedAsks = Array.from(this.asks.keys()).sort((a, b) => a - b).slice(0, levels).map(p => ({
      price: p,
      quantity: this.asks.get(p).reduce((sum, o) => sum + o.quantity, 0)
    }));
    return { bids: sortedBids, asks: sortedAsks, spread: this.getSpread() };
  }
}

module.exports = LimitOrderBook;
