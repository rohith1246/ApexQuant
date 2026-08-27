/**
 * FIXParser.js - Financial Information eXchange Protocol (FIX 4.4 / 5.0) Engine
 * Part of ApexQuant Institutional Engine
 */

class FIXParser {
  static parse(messageStr, delimiter = '\x01') {
    const fields = new Map();
    const parts = messageStr.split(delimiter);

    for (const part of parts) {
      if (!part) continue;
      const eqIdx = part.indexOf('=');
      if (eqIdx !== -1) {
        const tag = parseInt(part.substring(0, eqIdx), 10);
        const value = part.substring(eqIdx + 1);
        fields.set(tag, value);
      }
    }

    return {
      msgType: fields.get(35), // Tag 35: MsgType (D=NewOrderSingle, 8=ExecutionReport, etc.)
      clOrdID: fields.get(11), // Tag 11: ClOrdID
      symbol: fields.get(55),  // Tag 55: Symbol
      side: fields.get(54) === '1' ? 'buy' : fields.get(54) === '2' ? 'sell' : fields.get(54), // Tag 54: Side
      orderQty: parseFloat(fields.get(38) || '0'), // Tag 38: OrderQty
      price: parseFloat(fields.get(44) || '0'),    // Tag 44: Price
      rawFields: fields
    };
  }

  static serialize(fields, delimiter = '\x01') {
    let body = '';
    for (const [tag, val] of Object.entries(fields)) {
      if (tag !== '8' && tag !== '9' && tag !== '10') {
        body += `${tag}=${val}${delimiter}`;
      }
    }

    const length = body.length;
    let header = `8=FIX.4.4${delimiter}9=${length}${delimiter}`;
    const fullMsgWithoutChecksum = header + body;

    let checksum = 0;
    for (let i = 0; i < fullMsgWithoutChecksum.length; i++) {
      checksum = (checksum + fullMsgWithoutChecksum.charCodeAt(i)) % 256;
    }
    const checksumStr = checksum.toString().padStart(3, '0');

    return fullMsgWithoutChecksum + `10=${checksumStr}${delimiter}`;
  }
}

module.exports = FIXParser;
