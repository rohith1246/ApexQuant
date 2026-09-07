/**
 * FixMessage.js - FIX Protocol Tag-Value Message Builder & Field Parser
 * Implements Financial Information eXchange (FIX) 4.2/4.4/5.0 standards.
 */

class FixMessage {
  constructor(msgType = 'D', beginString = 'FIX.4.4') {
    this.beginString = beginString;
    this.msgType = msgType;
    this.fields = new Map();
    this.repeatingGroups = new Map();
    this.SOH = String.fromCharCode(1); // Standard SOH delimiter \x01
  }

  setField(tag, value) {
    this.fields.set(Number(tag), String(value));
    return this;
  }

  getField(tag) {
    return this.fields.get(Number(tag)) || null;
  }

  calculateBodyLength() {
    let len = 0;
    // Body length includes all tags after Tag 9 (BodyLength) up to Tag 10 (CheckSum)
    len += `35=${this.msgType}${this.SOH}`.length;
    for (const [tag, val] of this.fields) {
      if (tag !== 8 && tag !== 9 && tag !== 10 && tag !== 35) {
        len += `${tag}=${val}${this.SOH}`.length;
      }
    }
    return len;
  }

  calculateChecksum(msgString) {
    let sum = 0;
    for (let i = 0; i < msgString.length; i++) {
      sum += msgString.charCodeAt(i);
    }
    const check = sum % 256;
    return String(check).padStart(3, '0');
  }

  encode() {
    let body = `35=${this.msgType}${this.SOH}`;
    for (const [tag, val] of this.fields) {
      if (tag !== 8 && tag !== 9 && tag !== 10 && tag !== 35) {
        body += `${tag}=${val}${this.SOH}`;
      }
    }

    const bodyLength = body.length;
    let header = `8=${this.beginString}${this.SOH}9=${bodyLength}${this.SOH}`;
    const rawWithoutChecksum = header + body;
    const checksum = this.calculateChecksum(rawWithoutChecksum);
    return `${rawWithoutChecksum}10=${checksum}${this.SOH}`;
  }

  static parse(rawString, delimiter = null) {
    const delim = delimiter || (rawString.includes(String.fromCharCode(1)) ? String.fromCharCode(1) : '|');
    const parts = rawString.split(delim).filter(p => p.trim().length > 0);
    const msg = new FixMessage();

    for (const part of parts) {
      const eqIdx = part.indexOf('=');
      if (eqIdx !== -1) {
        const tag = Number(part.substring(0, eqIdx));
        const val = part.substring(eqIdx + 1);
        if (tag === 8) msg.beginString = val;
        else if (tag === 35) msg.msgType = val;
        else msg.setField(tag, val);
      }
    }
    return msg;
  }
}

module.exports = FixMessage;
