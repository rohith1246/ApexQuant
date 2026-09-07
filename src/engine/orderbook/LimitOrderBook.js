/**
 * LimitOrderBook.js - High-Throughput Level-2/3 Limit Order Book (LOB)
 * Part of ApexQuant Institutional Engine
 */

class OrderNode {
  constructor(orderId, side, price, size, timestamp = Date.now()) {
    this.orderId = orderId;
    this.side = side; // 'buy' or 'sell'
    this.price = Number(price);
    this.size = Number(size);
    this.filledSize = 0;
    this.timestamp = timestamp;
    this.next = null;
    this.prev = null;
  }
}

class PriceLevel {
  constructor(price) {
    this.price = Number(price);
    this.totalVolume = 0;
    this.orderCount = 0;
    this.head = null;
    this.tail = null;
  }

  append(order) {
    if (!this.head) {
      this.head = order;
      this.tail = order;
    } else {
      this.tail.next = order;
      order.prev = this.tail;
      this.tail = order;
    }
    this.totalVolume += (order.size - order.filledSize);
    this.orderCount++;
  }

  remove(order) {
    if (order.prev) order.prev.next = order.next;
    if (order.next) order.next.prev = order.prev;
    if (this.head === order) this.head = order.next;
    if (this.tail === order) this.tail = order.prev;

    order.prev = null;
    order.next = null;
    this.totalVolume -= (order.size - order.filledSize);
    this.orderCount--;
  }
}

class LimitOrderBook {
  constructor(symbol = 'BTC-USD') {
    this.symbol = symbol;
    this.bids = new Map(); // price -> PriceLevel (sorted desc)
    this.asks = new Map(); // price -> PriceLevel (sorted asc)
    this.orders = new Map(); // orderId -> { orderNode, priceLevel }
    this.lastTradePrice = 0;
    this.sequenceNumber = 0;
  }

  addOrder(orderId, side, price, size) {
    if (this.orders.has(orderId)) {
      throw new Error(`Order ${orderId} already exists`);
    }

    const order = new OrderNode(orderId, side, price, size);
    const book = side === 'buy' ? this.bids : this.asks;

    if (!book.has(price)) {
      book.set(price, new PriceLevel(price));
    }

    const level = book.get(price);
    level.append(order);
    this.orders.set(orderId, { order, level });
    this.sequenceNumber++;

    return order;
  }

  cancelOrder(orderId) {
    const record = this.orders.get(orderId);
    if (!record) return false;

    const { order, level } = record;
    level.remove(order);

    if (level.orderCount === 0) {
      const book = order.side === 'buy' ? this.bids : this.asks;
      book.delete(level.price);
    }

    this.orders.delete(orderId);
    this.sequenceNumber++;
    return true;
  }

  getBestBid() {
    let best = -Infinity;
    for (const price of this.bids.keys()) {
      if (price > best) best = price;
    }
    return best === -Infinity ? null : best;
  }

  getBestAsk() {
    let best = Infinity;
    for (const price of this.asks.keys()) {
      if (price < best) best = price;
    }
    return best === Infinity ? null : best;
  }

  getSpread() {
    const bid = this.getBestBid();
    const ask = this.getBestAsk();
    if (bid !== null && ask !== null) {
      return ask - bid;
    }
    return null;
  }

  getDepth(levels = 10) {
    const sortedBids = Array.from(this.bids.keys()).sort((a, b) => b - a).slice(0, levels);
    const sortedAsks = Array.from(this.asks.keys()).sort((a, b) => a - b).slice(0, levels);

    return {
      bids: sortedBids.map(p => ({ price: p, volume: this.bids.get(p).totalVolume })),
      asks: sortedAsks.map(p => ({ price: p, volume: this.asks.get(p).totalVolume })),
      bestBid: this.getBestBid(),
      bestAsk: this.getBestAsk(),
      spread: this.getSpread()
    };
  }
}

module.exports = LimitOrderBook;
