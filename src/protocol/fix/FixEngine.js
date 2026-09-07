/**
 * FixEngine.js - High-Throughput FIX Session State Machine & Inbound Dispatcher
 */

const FixMessage = require('./FixMessage');

class FixEngine {
  constructor(senderCompId = 'APEX_QUANT_PROD', targetCompId = 'CME_GLOBEX') {
    this.senderCompId = senderCompId;
    this.targetCompId = targetCompId;
    this.inSeqNum = 1;
    this.outSeqNum = 1;
    this.sessionState = 'DISCONNECTED'; // DISCONNECTED, LOGON_SENT, ACTIVE, LOGOUT_SENT
    this.messageStore = new Map();
  }

  createLogon(heartBtInt = 30) {
    const msg = new FixMessage('A');
    msg.setField(49, this.senderCompId);
    msg.setField(56, this.targetCompId);
    msg.setField(34, this.outSeqNum++);
    msg.setField(52, new Date().toISOString().replace(/[-:]/g, '').substring(0, 15));
    msg.setField(98, '0'); // EncryptMethod: None
    msg.setField(108, heartBtInt); // HeartBtInt: 30s
    msg.setField(141, 'Y'); // ResetSeqNumFlag
    this.sessionState = 'LOGON_SENT';
    this.messageStore.set(this.outSeqNum - 1, msg);
    return msg;
  }

  createNewOrderSingle(order) {
    const msg = new FixMessage('D');
    msg.setField(49, this.senderCompId);
    msg.setField(56, this.targetCompId);
    msg.setField(34, this.outSeqNum++);
    msg.setField(52, new Date().toISOString());
    msg.setField(11, order.clOrdId || `ORD_${Date.now()}`); // ClOrdID
    msg.setField(55, order.symbol); // Symbol
    msg.setField(54, order.side === 'BUY' ? '1' : '2'); // Side: 1=Buy, 2=Sell
    msg.setField(38, order.quantity); // OrderQty
    msg.setField(40, order.price ? '2' : '1'); // OrdType: 1=Market, 2=Limit
    if (order.price) msg.setField(44, order.price); // Price
    msg.setField(59, order.timeInForce === 'IOC' ? '3' : order.timeInForce === 'FOK' ? '4' : '0'); // TimeInForce
    this.messageStore.set(this.outSeqNum - 1, msg);
    return msg;
  }

  createExecutionReport(order, fillQty, fillPrice, execType = 'F') {
    const msg = new FixMessage('8');
    msg.setField(49, this.senderCompId);
    msg.setField(56, this.targetCompId);
    msg.setField(34, this.outSeqNum++);
    msg.setField(52, new Date().toISOString());
    msg.setField(37, `EXEC_${Date.now()}`); // OrderID
    msg.setField(11, order.clOrdId); // ClOrdID
    msg.setField(17, `TRD_${Date.now()}_${Math.floor(Math.random()*1000)}`); // ExecID
    msg.setField(150, execType); // ExecType: 0=New, F=Trade, 4=Canceled
    msg.setField(39, execType === 'F' ? '2' : '0'); // OrdStatus: 2=Filled
    msg.setField(55, order.symbol);
    msg.setField(54, order.side === 'BUY' ? '1' : '2');
    msg.setField(38, order.quantity);
    msg.setField(32, fillQty); // LastQty
    msg.setField(31, fillPrice); // LastPx
    msg.setField(151, order.quantity - fillQty); // LeavesQty
    msg.setField(14, fillQty); // CumQty
    msg.setField(6, fillPrice); // AvgPx
    return msg;
  }

  handleInbound(rawString) {
    const msg = FixMessage.parse(rawString);
    const seqNum = Number(msg.getField(34));
    this.inSeqNum = Math.max(this.inSeqNum, seqNum + 1);

    if (msg.msgType === 'A') {
      this.sessionState = 'ACTIVE';
      return { action: 'LOGON_ACKNOWLEDGED', message: msg };
    } else if (msg.msgType === '0') {
      return { action: 'HEARTBEAT_PROCESSED', message: msg };
    } else if (msg.msgType === 'D') {
      return { action: 'NEW_ORDER_RECEIVED', message: msg };
    } else if (msg.msgType === '8') {
      return { action: 'EXECUTION_REPORT_RECEIVED', message: msg };
    }
    return { action: 'UNKNOWN_MESSAGE', message: msg };
  }
}

module.exports = FixEngine;
