/**
 * AlgorithmicExecutionEngine.js - Institutional TWAP, VWAP & POV Order Slicing Engine
 * Part of ApexQuant Institutional Quantitative Suite
 */

class AlgorithmicExecutionEngine {
  /**
   * Time-Weighted Average Price (TWAP) Order Schedule Slicer
   * Dissects a large parent order into N uniform time-sliced child orders with optional randomized jitter.
   */
  static generateTWAPSchedule(parentOrder) {
    const { totalQuantity, durationMinutes, sliceIntervalSeconds, side, symbol, randomizeVariance = 0.15 } = parentOrder;
    const totalDurationSec = durationMinutes * 60;
    const numSlices = Math.max(1, Math.floor(totalDurationSec / sliceIntervalSeconds));
    const baseQuantityPerSlice = Math.floor(totalQuantity / numSlices);
    let remaining = totalQuantity;

    const schedule = [];
    for (let i = 0; i < numSlices; i++) {
      const isLast = (i === numSlices - 1);
      let sliceQty = baseQuantityPerSlice;

      if (!isLast && randomizeVariance > 0) {
        const jitterPct = (Math.random() * 2 - 1) * randomizeVariance;
        sliceQty = Math.max(1, Math.floor(baseQuantityPerSlice * (1 + jitterPct)));
      }

      if (isLast || sliceQty > remaining) {
        sliceQty = remaining;
      }

      const timestampSec = i * sliceIntervalSeconds;
      schedule.push({
        sliceIndex: i + 1,
        symbol,
        side,
        quantity: sliceQty,
        scheduledOffsetSec: timestampSec,
        status: 'SCHEDULED'
      });

      remaining -= sliceQty;
      if (remaining <= 0) break;
    }

    return {
      strategy: 'TWAP',
      symbol,
      side,
      totalQuantity,
      totalSlices: schedule.length,
      schedule
    };
  }

  /**
   * Volume-Weighted Average Price (VWAP) Order Slicer
   * Weights child orders according to historical U-shaped intraday volume profile.
   */
  static generateVWAPSchedule(parentOrder, intradayVolumeProfile = null) {
    const { totalQuantity, symbol, side, intervals = 10 } = parentOrder;

    // Default institutional intraday U-curve if none provided (heavy open/close, lighter midday)
    const profile = intradayVolumeProfile || [
      0.18, 0.12, 0.08, 0.06, 0.05, 0.05, 0.06, 0.09, 0.13, 0.18
    ];

    const sumProfile = profile.reduce((a, b) => a + b, 0);
    const normalizedProfile = profile.map(p => p / sumProfile);

    let remaining = totalQuantity;
    const schedule = [];

    for (let i = 0; i < normalizedProfile.length; i++) {
      const isLast = (i === normalizedProfile.length - 1);
      let sliceQty = Math.round(totalQuantity * normalizedProfile[i]);

      if (isLast || sliceQty > remaining) {
        sliceQty = remaining;
      }

      schedule.push({
        sliceIndex: i + 1,
        symbol,
        side,
        quantity: sliceQty,
        weight: Number(normalizedProfile[i].toFixed(4)),
        status: 'SCHEDULED'
      });

      remaining -= sliceQty;
      if (remaining <= 0) break;
    }

    return {
      strategy: 'VWAP',
      symbol,
      side,
      totalQuantity,
      slices: schedule
    };
  }

  /**
   * Percentage of Volume (POV) Dynamic Execution Slicer
   */
  static calculatePOVChildOrder(targetParticipationRate = 0.10, currentMarketVolume = 5000, unexecutedParentQty = 20000) {
    const desiredChildQty = Math.round(currentMarketVolume * targetParticipationRate);
    const finalChildQty = Math.min(desiredChildQty, unexecutedParentQty);

    return {
      strategy: 'POV',
      participationRate: targetParticipationRate,
      marketVolume: currentMarketVolume,
      childQuantity: Math.max(1, finalChildQty),
      remainingParentQuantity: unexecutedParentQty - finalChildQty
    };
  }
}

module.exports = AlgorithmicExecutionEngine;
