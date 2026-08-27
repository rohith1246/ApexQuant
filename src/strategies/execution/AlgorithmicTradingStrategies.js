/**
 * AlgorithmicTradingStrategies.js - Master Catalog of 350+ Quantitative Alpha Models
 */
module.exports = [
  {
    "strategyId": "STRAT_0001",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_1",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 21,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 2550000
    }
  },
  {
    "strategyId": "STRAT_0002",
    "name": "Alpha_TWAP_Execution_Engine_2",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 22,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 2600000
    }
  },
  {
    "strategyId": "STRAT_0003",
    "name": "Alpha_VWAP_Execution_Engine_3",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 23,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 2650000
    }
  },
  {
    "strategyId": "STRAT_0004",
    "name": "Alpha_Mean_Reversion_Engine_4",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 24,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 2700000
    }
  },
  {
    "strategyId": "STRAT_0005",
    "name": "Alpha_Trend_Following_Engine_5",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 25,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 2750000
    }
  },
  {
    "strategyId": "STRAT_0006",
    "name": "Alpha_Pairs_Trading_Engine_6",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 26,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 2800000
    }
  },
  {
    "strategyId": "STRAT_0007",
    "name": "Alpha_Statistical_Arbitrage_Engine_7",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 27,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 2850000
    }
  },
  {
    "strategyId": "STRAT_0008",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_8",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 28,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 2900000
    }
  },
  {
    "strategyId": "STRAT_0009",
    "name": "Alpha_TWAP_Execution_Engine_9",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 29,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 2950000
    }
  },
  {
    "strategyId": "STRAT_0010",
    "name": "Alpha_VWAP_Execution_Engine_10",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 30,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 3000000
    }
  },
  {
    "strategyId": "STRAT_0011",
    "name": "Alpha_Mean_Reversion_Engine_11",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 31,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 3050000
    }
  },
  {
    "strategyId": "STRAT_0012",
    "name": "Alpha_Trend_Following_Engine_12",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 32,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 3100000
    }
  },
  {
    "strategyId": "STRAT_0013",
    "name": "Alpha_Pairs_Trading_Engine_13",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 33,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 3150000
    }
  },
  {
    "strategyId": "STRAT_0014",
    "name": "Alpha_Statistical_Arbitrage_Engine_14",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 34,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 3200000
    }
  },
  {
    "strategyId": "STRAT_0015",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_15",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 35,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 3250000
    }
  },
  {
    "strategyId": "STRAT_0016",
    "name": "Alpha_TWAP_Execution_Engine_16",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 36,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 3300000
    }
  },
  {
    "strategyId": "STRAT_0017",
    "name": "Alpha_VWAP_Execution_Engine_17",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 37,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 3350000
    }
  },
  {
    "strategyId": "STRAT_0018",
    "name": "Alpha_Mean_Reversion_Engine_18",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 38,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 3400000
    }
  },
  {
    "strategyId": "STRAT_0019",
    "name": "Alpha_Trend_Following_Engine_19",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 39,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 3450000
    }
  },
  {
    "strategyId": "STRAT_0020",
    "name": "Alpha_Pairs_Trading_Engine_20",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 40,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 3500000
    }
  },
  {
    "strategyId": "STRAT_0021",
    "name": "Alpha_Statistical_Arbitrage_Engine_21",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 41,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 3550000
    }
  },
  {
    "strategyId": "STRAT_0022",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_22",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 42,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 3600000
    }
  },
  {
    "strategyId": "STRAT_0023",
    "name": "Alpha_TWAP_Execution_Engine_23",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 43,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 3650000
    }
  },
  {
    "strategyId": "STRAT_0024",
    "name": "Alpha_VWAP_Execution_Engine_24",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 44,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 3700000
    }
  },
  {
    "strategyId": "STRAT_0025",
    "name": "Alpha_Mean_Reversion_Engine_25",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 45,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 3750000
    }
  },
  {
    "strategyId": "STRAT_0026",
    "name": "Alpha_Trend_Following_Engine_26",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 46,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 3800000
    }
  },
  {
    "strategyId": "STRAT_0027",
    "name": "Alpha_Pairs_Trading_Engine_27",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 47,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 3850000
    }
  },
  {
    "strategyId": "STRAT_0028",
    "name": "Alpha_Statistical_Arbitrage_Engine_28",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 48,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 3900000
    }
  },
  {
    "strategyId": "STRAT_0029",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_29",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 49,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 3950000
    }
  },
  {
    "strategyId": "STRAT_0030",
    "name": "Alpha_TWAP_Execution_Engine_30",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 50,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 4000000
    }
  },
  {
    "strategyId": "STRAT_0031",
    "name": "Alpha_VWAP_Execution_Engine_31",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 51,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 4050000
    }
  },
  {
    "strategyId": "STRAT_0032",
    "name": "Alpha_Mean_Reversion_Engine_32",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 52,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 4100000
    }
  },
  {
    "strategyId": "STRAT_0033",
    "name": "Alpha_Trend_Following_Engine_33",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 53,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 4150000
    }
  },
  {
    "strategyId": "STRAT_0034",
    "name": "Alpha_Pairs_Trading_Engine_34",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 54,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 4200000
    }
  },
  {
    "strategyId": "STRAT_0035",
    "name": "Alpha_Statistical_Arbitrage_Engine_35",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 55,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 4250000
    }
  },
  {
    "strategyId": "STRAT_0036",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_36",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 56,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 4300000
    }
  },
  {
    "strategyId": "STRAT_0037",
    "name": "Alpha_TWAP_Execution_Engine_37",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 57,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 4350000
    }
  },
  {
    "strategyId": "STRAT_0038",
    "name": "Alpha_VWAP_Execution_Engine_38",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 58,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 4400000
    }
  },
  {
    "strategyId": "STRAT_0039",
    "name": "Alpha_Mean_Reversion_Engine_39",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 59,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 4450000
    }
  },
  {
    "strategyId": "STRAT_0040",
    "name": "Alpha_Trend_Following_Engine_40",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 60,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 4500000
    }
  },
  {
    "strategyId": "STRAT_0041",
    "name": "Alpha_Pairs_Trading_Engine_41",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 61,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 4550000
    }
  },
  {
    "strategyId": "STRAT_0042",
    "name": "Alpha_Statistical_Arbitrage_Engine_42",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 62,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 4600000
    }
  },
  {
    "strategyId": "STRAT_0043",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_43",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 63,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 4650000
    }
  },
  {
    "strategyId": "STRAT_0044",
    "name": "Alpha_TWAP_Execution_Engine_44",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 64,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 4700000
    }
  },
  {
    "strategyId": "STRAT_0045",
    "name": "Alpha_VWAP_Execution_Engine_45",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 65,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 4750000
    }
  },
  {
    "strategyId": "STRAT_0046",
    "name": "Alpha_Mean_Reversion_Engine_46",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 66,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 4800000
    }
  },
  {
    "strategyId": "STRAT_0047",
    "name": "Alpha_Trend_Following_Engine_47",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 67,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 4850000
    }
  },
  {
    "strategyId": "STRAT_0048",
    "name": "Alpha_Pairs_Trading_Engine_48",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 68,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 4900000
    }
  },
  {
    "strategyId": "STRAT_0049",
    "name": "Alpha_Statistical_Arbitrage_Engine_49",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 69,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 4950000
    }
  },
  {
    "strategyId": "STRAT_0050",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_50",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 20,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 5000000
    }
  },
  {
    "strategyId": "STRAT_0051",
    "name": "Alpha_TWAP_Execution_Engine_51",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 21,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 5050000
    }
  },
  {
    "strategyId": "STRAT_0052",
    "name": "Alpha_VWAP_Execution_Engine_52",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 22,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 5100000
    }
  },
  {
    "strategyId": "STRAT_0053",
    "name": "Alpha_Mean_Reversion_Engine_53",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 23,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 5150000
    }
  },
  {
    "strategyId": "STRAT_0054",
    "name": "Alpha_Trend_Following_Engine_54",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 24,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 5200000
    }
  },
  {
    "strategyId": "STRAT_0055",
    "name": "Alpha_Pairs_Trading_Engine_55",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 25,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 5250000
    }
  },
  {
    "strategyId": "STRAT_0056",
    "name": "Alpha_Statistical_Arbitrage_Engine_56",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 26,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 5300000
    }
  },
  {
    "strategyId": "STRAT_0057",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_57",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 27,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 5350000
    }
  },
  {
    "strategyId": "STRAT_0058",
    "name": "Alpha_TWAP_Execution_Engine_58",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 28,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 5400000
    }
  },
  {
    "strategyId": "STRAT_0059",
    "name": "Alpha_VWAP_Execution_Engine_59",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 29,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 5450000
    }
  },
  {
    "strategyId": "STRAT_0060",
    "name": "Alpha_Mean_Reversion_Engine_60",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 30,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 5500000
    }
  },
  {
    "strategyId": "STRAT_0061",
    "name": "Alpha_Trend_Following_Engine_61",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 31,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 5550000
    }
  },
  {
    "strategyId": "STRAT_0062",
    "name": "Alpha_Pairs_Trading_Engine_62",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 32,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 5600000
    }
  },
  {
    "strategyId": "STRAT_0063",
    "name": "Alpha_Statistical_Arbitrage_Engine_63",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 33,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 5650000
    }
  },
  {
    "strategyId": "STRAT_0064",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_64",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 34,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 5700000
    }
  },
  {
    "strategyId": "STRAT_0065",
    "name": "Alpha_TWAP_Execution_Engine_65",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 35,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 5750000
    }
  },
  {
    "strategyId": "STRAT_0066",
    "name": "Alpha_VWAP_Execution_Engine_66",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 36,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 5800000
    }
  },
  {
    "strategyId": "STRAT_0067",
    "name": "Alpha_Mean_Reversion_Engine_67",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 37,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 5850000
    }
  },
  {
    "strategyId": "STRAT_0068",
    "name": "Alpha_Trend_Following_Engine_68",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 38,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 5900000
    }
  },
  {
    "strategyId": "STRAT_0069",
    "name": "Alpha_Pairs_Trading_Engine_69",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 39,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 5950000
    }
  },
  {
    "strategyId": "STRAT_0070",
    "name": "Alpha_Statistical_Arbitrage_Engine_70",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 40,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 6000000
    }
  },
  {
    "strategyId": "STRAT_0071",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_71",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 41,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 6050000
    }
  },
  {
    "strategyId": "STRAT_0072",
    "name": "Alpha_TWAP_Execution_Engine_72",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 42,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 6100000
    }
  },
  {
    "strategyId": "STRAT_0073",
    "name": "Alpha_VWAP_Execution_Engine_73",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 43,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 6150000
    }
  },
  {
    "strategyId": "STRAT_0074",
    "name": "Alpha_Mean_Reversion_Engine_74",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 44,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 6200000
    }
  },
  {
    "strategyId": "STRAT_0075",
    "name": "Alpha_Trend_Following_Engine_75",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 45,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 6250000
    }
  },
  {
    "strategyId": "STRAT_0076",
    "name": "Alpha_Pairs_Trading_Engine_76",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 46,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 6300000
    }
  },
  {
    "strategyId": "STRAT_0077",
    "name": "Alpha_Statistical_Arbitrage_Engine_77",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 47,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 6350000
    }
  },
  {
    "strategyId": "STRAT_0078",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_78",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 48,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 6400000
    }
  },
  {
    "strategyId": "STRAT_0079",
    "name": "Alpha_TWAP_Execution_Engine_79",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 49,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 6450000
    }
  },
  {
    "strategyId": "STRAT_0080",
    "name": "Alpha_VWAP_Execution_Engine_80",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 50,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 6500000
    }
  },
  {
    "strategyId": "STRAT_0081",
    "name": "Alpha_Mean_Reversion_Engine_81",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 51,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 6550000
    }
  },
  {
    "strategyId": "STRAT_0082",
    "name": "Alpha_Trend_Following_Engine_82",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 52,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 6600000
    }
  },
  {
    "strategyId": "STRAT_0083",
    "name": "Alpha_Pairs_Trading_Engine_83",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 53,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 6650000
    }
  },
  {
    "strategyId": "STRAT_0084",
    "name": "Alpha_Statistical_Arbitrage_Engine_84",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 54,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 6700000
    }
  },
  {
    "strategyId": "STRAT_0085",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_85",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 55,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 6750000
    }
  },
  {
    "strategyId": "STRAT_0086",
    "name": "Alpha_TWAP_Execution_Engine_86",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 56,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 6800000
    }
  },
  {
    "strategyId": "STRAT_0087",
    "name": "Alpha_VWAP_Execution_Engine_87",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 57,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 6850000
    }
  },
  {
    "strategyId": "STRAT_0088",
    "name": "Alpha_Mean_Reversion_Engine_88",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 58,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 6900000
    }
  },
  {
    "strategyId": "STRAT_0089",
    "name": "Alpha_Trend_Following_Engine_89",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 59,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 6950000
    }
  },
  {
    "strategyId": "STRAT_0090",
    "name": "Alpha_Pairs_Trading_Engine_90",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 60,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 7000000
    }
  },
  {
    "strategyId": "STRAT_0091",
    "name": "Alpha_Statistical_Arbitrage_Engine_91",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 61,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 7050000
    }
  },
  {
    "strategyId": "STRAT_0092",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_92",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 62,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 7100000
    }
  },
  {
    "strategyId": "STRAT_0093",
    "name": "Alpha_TWAP_Execution_Engine_93",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 63,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 7150000
    }
  },
  {
    "strategyId": "STRAT_0094",
    "name": "Alpha_VWAP_Execution_Engine_94",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 64,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 7200000
    }
  },
  {
    "strategyId": "STRAT_0095",
    "name": "Alpha_Mean_Reversion_Engine_95",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 65,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 7250000
    }
  },
  {
    "strategyId": "STRAT_0096",
    "name": "Alpha_Trend_Following_Engine_96",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 66,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 7300000
    }
  },
  {
    "strategyId": "STRAT_0097",
    "name": "Alpha_Pairs_Trading_Engine_97",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 67,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 7350000
    }
  },
  {
    "strategyId": "STRAT_0098",
    "name": "Alpha_Statistical_Arbitrage_Engine_98",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 68,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 7400000
    }
  },
  {
    "strategyId": "STRAT_0099",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_99",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 69,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 7450000
    }
  },
  {
    "strategyId": "STRAT_0100",
    "name": "Alpha_TWAP_Execution_Engine_100",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 20,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 7500000
    }
  },
  {
    "strategyId": "STRAT_0101",
    "name": "Alpha_VWAP_Execution_Engine_101",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 21,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 7550000
    }
  },
  {
    "strategyId": "STRAT_0102",
    "name": "Alpha_Mean_Reversion_Engine_102",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 22,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 7600000
    }
  },
  {
    "strategyId": "STRAT_0103",
    "name": "Alpha_Trend_Following_Engine_103",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 23,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 7650000
    }
  },
  {
    "strategyId": "STRAT_0104",
    "name": "Alpha_Pairs_Trading_Engine_104",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 24,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 7700000
    }
  },
  {
    "strategyId": "STRAT_0105",
    "name": "Alpha_Statistical_Arbitrage_Engine_105",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 25,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 7750000
    }
  },
  {
    "strategyId": "STRAT_0106",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_106",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 26,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 7800000
    }
  },
  {
    "strategyId": "STRAT_0107",
    "name": "Alpha_TWAP_Execution_Engine_107",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 27,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 7850000
    }
  },
  {
    "strategyId": "STRAT_0108",
    "name": "Alpha_VWAP_Execution_Engine_108",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 28,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 7900000
    }
  },
  {
    "strategyId": "STRAT_0109",
    "name": "Alpha_Mean_Reversion_Engine_109",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 29,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 7950000
    }
  },
  {
    "strategyId": "STRAT_0110",
    "name": "Alpha_Trend_Following_Engine_110",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 30,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 8000000
    }
  },
  {
    "strategyId": "STRAT_0111",
    "name": "Alpha_Pairs_Trading_Engine_111",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 31,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 8050000
    }
  },
  {
    "strategyId": "STRAT_0112",
    "name": "Alpha_Statistical_Arbitrage_Engine_112",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 32,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 8100000
    }
  },
  {
    "strategyId": "STRAT_0113",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_113",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 33,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 8150000
    }
  },
  {
    "strategyId": "STRAT_0114",
    "name": "Alpha_TWAP_Execution_Engine_114",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 34,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 8200000
    }
  },
  {
    "strategyId": "STRAT_0115",
    "name": "Alpha_VWAP_Execution_Engine_115",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 35,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 8250000
    }
  },
  {
    "strategyId": "STRAT_0116",
    "name": "Alpha_Mean_Reversion_Engine_116",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 36,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 8300000
    }
  },
  {
    "strategyId": "STRAT_0117",
    "name": "Alpha_Trend_Following_Engine_117",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 37,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 8350000
    }
  },
  {
    "strategyId": "STRAT_0118",
    "name": "Alpha_Pairs_Trading_Engine_118",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 38,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 8400000
    }
  },
  {
    "strategyId": "STRAT_0119",
    "name": "Alpha_Statistical_Arbitrage_Engine_119",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 39,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 8450000
    }
  },
  {
    "strategyId": "STRAT_0120",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_120",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 40,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 8500000
    }
  },
  {
    "strategyId": "STRAT_0121",
    "name": "Alpha_TWAP_Execution_Engine_121",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 41,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 8550000
    }
  },
  {
    "strategyId": "STRAT_0122",
    "name": "Alpha_VWAP_Execution_Engine_122",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 42,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 8600000
    }
  },
  {
    "strategyId": "STRAT_0123",
    "name": "Alpha_Mean_Reversion_Engine_123",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 43,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 8650000
    }
  },
  {
    "strategyId": "STRAT_0124",
    "name": "Alpha_Trend_Following_Engine_124",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 44,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 8700000
    }
  },
  {
    "strategyId": "STRAT_0125",
    "name": "Alpha_Pairs_Trading_Engine_125",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 45,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 8750000
    }
  },
  {
    "strategyId": "STRAT_0126",
    "name": "Alpha_Statistical_Arbitrage_Engine_126",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 46,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 8800000
    }
  },
  {
    "strategyId": "STRAT_0127",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_127",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 47,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 8850000
    }
  },
  {
    "strategyId": "STRAT_0128",
    "name": "Alpha_TWAP_Execution_Engine_128",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 48,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 8900000
    }
  },
  {
    "strategyId": "STRAT_0129",
    "name": "Alpha_VWAP_Execution_Engine_129",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 49,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 8950000
    }
  },
  {
    "strategyId": "STRAT_0130",
    "name": "Alpha_Mean_Reversion_Engine_130",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 50,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 9000000
    }
  },
  {
    "strategyId": "STRAT_0131",
    "name": "Alpha_Trend_Following_Engine_131",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 51,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 9050000
    }
  },
  {
    "strategyId": "STRAT_0132",
    "name": "Alpha_Pairs_Trading_Engine_132",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 52,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 9100000
    }
  },
  {
    "strategyId": "STRAT_0133",
    "name": "Alpha_Statistical_Arbitrage_Engine_133",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 53,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 9150000
    }
  },
  {
    "strategyId": "STRAT_0134",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_134",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 54,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 9200000
    }
  },
  {
    "strategyId": "STRAT_0135",
    "name": "Alpha_TWAP_Execution_Engine_135",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 55,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 9250000
    }
  },
  {
    "strategyId": "STRAT_0136",
    "name": "Alpha_VWAP_Execution_Engine_136",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 56,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 9300000
    }
  },
  {
    "strategyId": "STRAT_0137",
    "name": "Alpha_Mean_Reversion_Engine_137",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 57,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 9350000
    }
  },
  {
    "strategyId": "STRAT_0138",
    "name": "Alpha_Trend_Following_Engine_138",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 58,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 9400000
    }
  },
  {
    "strategyId": "STRAT_0139",
    "name": "Alpha_Pairs_Trading_Engine_139",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 59,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 9450000
    }
  },
  {
    "strategyId": "STRAT_0140",
    "name": "Alpha_Statistical_Arbitrage_Engine_140",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 60,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 9500000
    }
  },
  {
    "strategyId": "STRAT_0141",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_141",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 61,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 9550000
    }
  },
  {
    "strategyId": "STRAT_0142",
    "name": "Alpha_TWAP_Execution_Engine_142",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 62,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 9600000
    }
  },
  {
    "strategyId": "STRAT_0143",
    "name": "Alpha_VWAP_Execution_Engine_143",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 63,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 9650000
    }
  },
  {
    "strategyId": "STRAT_0144",
    "name": "Alpha_Mean_Reversion_Engine_144",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 64,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 9700000
    }
  },
  {
    "strategyId": "STRAT_0145",
    "name": "Alpha_Trend_Following_Engine_145",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 65,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 9750000
    }
  },
  {
    "strategyId": "STRAT_0146",
    "name": "Alpha_Pairs_Trading_Engine_146",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 66,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 9800000
    }
  },
  {
    "strategyId": "STRAT_0147",
    "name": "Alpha_Statistical_Arbitrage_Engine_147",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 67,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 9850000
    }
  },
  {
    "strategyId": "STRAT_0148",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_148",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 68,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 9900000
    }
  },
  {
    "strategyId": "STRAT_0149",
    "name": "Alpha_TWAP_Execution_Engine_149",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 69,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 9950000
    }
  },
  {
    "strategyId": "STRAT_0150",
    "name": "Alpha_VWAP_Execution_Engine_150",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 20,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 10000000
    }
  },
  {
    "strategyId": "STRAT_0151",
    "name": "Alpha_Mean_Reversion_Engine_151",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 21,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 10050000
    }
  },
  {
    "strategyId": "STRAT_0152",
    "name": "Alpha_Trend_Following_Engine_152",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 22,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 10100000
    }
  },
  {
    "strategyId": "STRAT_0153",
    "name": "Alpha_Pairs_Trading_Engine_153",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 23,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 10150000
    }
  },
  {
    "strategyId": "STRAT_0154",
    "name": "Alpha_Statistical_Arbitrage_Engine_154",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 24,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 10200000
    }
  },
  {
    "strategyId": "STRAT_0155",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_155",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 25,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 10250000
    }
  },
  {
    "strategyId": "STRAT_0156",
    "name": "Alpha_TWAP_Execution_Engine_156",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 26,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 10300000
    }
  },
  {
    "strategyId": "STRAT_0157",
    "name": "Alpha_VWAP_Execution_Engine_157",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 27,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 10350000
    }
  },
  {
    "strategyId": "STRAT_0158",
    "name": "Alpha_Mean_Reversion_Engine_158",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 28,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 10400000
    }
  },
  {
    "strategyId": "STRAT_0159",
    "name": "Alpha_Trend_Following_Engine_159",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 29,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 10450000
    }
  },
  {
    "strategyId": "STRAT_0160",
    "name": "Alpha_Pairs_Trading_Engine_160",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 30,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 10500000
    }
  },
  {
    "strategyId": "STRAT_0161",
    "name": "Alpha_Statistical_Arbitrage_Engine_161",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 31,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 10550000
    }
  },
  {
    "strategyId": "STRAT_0162",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_162",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 32,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 10600000
    }
  },
  {
    "strategyId": "STRAT_0163",
    "name": "Alpha_TWAP_Execution_Engine_163",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 33,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 10650000
    }
  },
  {
    "strategyId": "STRAT_0164",
    "name": "Alpha_VWAP_Execution_Engine_164",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 34,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 10700000
    }
  },
  {
    "strategyId": "STRAT_0165",
    "name": "Alpha_Mean_Reversion_Engine_165",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 35,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 10750000
    }
  },
  {
    "strategyId": "STRAT_0166",
    "name": "Alpha_Trend_Following_Engine_166",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 36,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 10800000
    }
  },
  {
    "strategyId": "STRAT_0167",
    "name": "Alpha_Pairs_Trading_Engine_167",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 37,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 10850000
    }
  },
  {
    "strategyId": "STRAT_0168",
    "name": "Alpha_Statistical_Arbitrage_Engine_168",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 38,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 10900000
    }
  },
  {
    "strategyId": "STRAT_0169",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_169",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 39,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 10950000
    }
  },
  {
    "strategyId": "STRAT_0170",
    "name": "Alpha_TWAP_Execution_Engine_170",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 40,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 11000000
    }
  },
  {
    "strategyId": "STRAT_0171",
    "name": "Alpha_VWAP_Execution_Engine_171",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 41,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 11050000
    }
  },
  {
    "strategyId": "STRAT_0172",
    "name": "Alpha_Mean_Reversion_Engine_172",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 42,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 11100000
    }
  },
  {
    "strategyId": "STRAT_0173",
    "name": "Alpha_Trend_Following_Engine_173",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 43,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 11150000
    }
  },
  {
    "strategyId": "STRAT_0174",
    "name": "Alpha_Pairs_Trading_Engine_174",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 44,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 11200000
    }
  },
  {
    "strategyId": "STRAT_0175",
    "name": "Alpha_Statistical_Arbitrage_Engine_175",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 45,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 11250000
    }
  },
  {
    "strategyId": "STRAT_0176",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_176",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 46,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 11300000
    }
  },
  {
    "strategyId": "STRAT_0177",
    "name": "Alpha_TWAP_Execution_Engine_177",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 47,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 11350000
    }
  },
  {
    "strategyId": "STRAT_0178",
    "name": "Alpha_VWAP_Execution_Engine_178",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 48,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 11400000
    }
  },
  {
    "strategyId": "STRAT_0179",
    "name": "Alpha_Mean_Reversion_Engine_179",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 49,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 11450000
    }
  },
  {
    "strategyId": "STRAT_0180",
    "name": "Alpha_Trend_Following_Engine_180",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 50,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 11500000
    }
  },
  {
    "strategyId": "STRAT_0181",
    "name": "Alpha_Pairs_Trading_Engine_181",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 51,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 11550000
    }
  },
  {
    "strategyId": "STRAT_0182",
    "name": "Alpha_Statistical_Arbitrage_Engine_182",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 52,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 11600000
    }
  },
  {
    "strategyId": "STRAT_0183",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_183",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 53,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 11650000
    }
  },
  {
    "strategyId": "STRAT_0184",
    "name": "Alpha_TWAP_Execution_Engine_184",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 54,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 11700000
    }
  },
  {
    "strategyId": "STRAT_0185",
    "name": "Alpha_VWAP_Execution_Engine_185",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 55,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 11750000
    }
  },
  {
    "strategyId": "STRAT_0186",
    "name": "Alpha_Mean_Reversion_Engine_186",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 56,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 11800000
    }
  },
  {
    "strategyId": "STRAT_0187",
    "name": "Alpha_Trend_Following_Engine_187",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 57,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 11850000
    }
  },
  {
    "strategyId": "STRAT_0188",
    "name": "Alpha_Pairs_Trading_Engine_188",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 58,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 11900000
    }
  },
  {
    "strategyId": "STRAT_0189",
    "name": "Alpha_Statistical_Arbitrage_Engine_189",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 59,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 11950000
    }
  },
  {
    "strategyId": "STRAT_0190",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_190",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 60,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 12000000
    }
  },
  {
    "strategyId": "STRAT_0191",
    "name": "Alpha_TWAP_Execution_Engine_191",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 61,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 12050000
    }
  },
  {
    "strategyId": "STRAT_0192",
    "name": "Alpha_VWAP_Execution_Engine_192",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 62,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 12100000
    }
  },
  {
    "strategyId": "STRAT_0193",
    "name": "Alpha_Mean_Reversion_Engine_193",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 63,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 12150000
    }
  },
  {
    "strategyId": "STRAT_0194",
    "name": "Alpha_Trend_Following_Engine_194",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 64,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 12200000
    }
  },
  {
    "strategyId": "STRAT_0195",
    "name": "Alpha_Pairs_Trading_Engine_195",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 65,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 12250000
    }
  },
  {
    "strategyId": "STRAT_0196",
    "name": "Alpha_Statistical_Arbitrage_Engine_196",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 66,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 12300000
    }
  },
  {
    "strategyId": "STRAT_0197",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_197",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 67,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 12350000
    }
  },
  {
    "strategyId": "STRAT_0198",
    "name": "Alpha_TWAP_Execution_Engine_198",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 68,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 12400000
    }
  },
  {
    "strategyId": "STRAT_0199",
    "name": "Alpha_VWAP_Execution_Engine_199",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 69,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 12450000
    }
  },
  {
    "strategyId": "STRAT_0200",
    "name": "Alpha_Mean_Reversion_Engine_200",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 20,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 12500000
    }
  },
  {
    "strategyId": "STRAT_0201",
    "name": "Alpha_Trend_Following_Engine_201",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 21,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 12550000
    }
  },
  {
    "strategyId": "STRAT_0202",
    "name": "Alpha_Pairs_Trading_Engine_202",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 22,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 12600000
    }
  },
  {
    "strategyId": "STRAT_0203",
    "name": "Alpha_Statistical_Arbitrage_Engine_203",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 23,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 12650000
    }
  },
  {
    "strategyId": "STRAT_0204",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_204",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 24,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 12700000
    }
  },
  {
    "strategyId": "STRAT_0205",
    "name": "Alpha_TWAP_Execution_Engine_205",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 25,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 12750000
    }
  },
  {
    "strategyId": "STRAT_0206",
    "name": "Alpha_VWAP_Execution_Engine_206",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 26,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 12800000
    }
  },
  {
    "strategyId": "STRAT_0207",
    "name": "Alpha_Mean_Reversion_Engine_207",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 27,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 12850000
    }
  },
  {
    "strategyId": "STRAT_0208",
    "name": "Alpha_Trend_Following_Engine_208",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 28,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 12900000
    }
  },
  {
    "strategyId": "STRAT_0209",
    "name": "Alpha_Pairs_Trading_Engine_209",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 29,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 12950000
    }
  },
  {
    "strategyId": "STRAT_0210",
    "name": "Alpha_Statistical_Arbitrage_Engine_210",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 30,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 13000000
    }
  },
  {
    "strategyId": "STRAT_0211",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_211",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 31,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 13050000
    }
  },
  {
    "strategyId": "STRAT_0212",
    "name": "Alpha_TWAP_Execution_Engine_212",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 32,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 13100000
    }
  },
  {
    "strategyId": "STRAT_0213",
    "name": "Alpha_VWAP_Execution_Engine_213",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 33,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 13150000
    }
  },
  {
    "strategyId": "STRAT_0214",
    "name": "Alpha_Mean_Reversion_Engine_214",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 34,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 13200000
    }
  },
  {
    "strategyId": "STRAT_0215",
    "name": "Alpha_Trend_Following_Engine_215",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 35,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 13250000
    }
  },
  {
    "strategyId": "STRAT_0216",
    "name": "Alpha_Pairs_Trading_Engine_216",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 36,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 13300000
    }
  },
  {
    "strategyId": "STRAT_0217",
    "name": "Alpha_Statistical_Arbitrage_Engine_217",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 37,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 13350000
    }
  },
  {
    "strategyId": "STRAT_0218",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_218",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 38,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 13400000
    }
  },
  {
    "strategyId": "STRAT_0219",
    "name": "Alpha_TWAP_Execution_Engine_219",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 39,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 13450000
    }
  },
  {
    "strategyId": "STRAT_0220",
    "name": "Alpha_VWAP_Execution_Engine_220",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 40,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 13500000
    }
  },
  {
    "strategyId": "STRAT_0221",
    "name": "Alpha_Mean_Reversion_Engine_221",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 41,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 13550000
    }
  },
  {
    "strategyId": "STRAT_0222",
    "name": "Alpha_Trend_Following_Engine_222",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 42,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 13600000
    }
  },
  {
    "strategyId": "STRAT_0223",
    "name": "Alpha_Pairs_Trading_Engine_223",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 43,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 13650000
    }
  },
  {
    "strategyId": "STRAT_0224",
    "name": "Alpha_Statistical_Arbitrage_Engine_224",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 44,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 13700000
    }
  },
  {
    "strategyId": "STRAT_0225",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_225",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 45,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 13750000
    }
  },
  {
    "strategyId": "STRAT_0226",
    "name": "Alpha_TWAP_Execution_Engine_226",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 46,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 13800000
    }
  },
  {
    "strategyId": "STRAT_0227",
    "name": "Alpha_VWAP_Execution_Engine_227",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 47,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 13850000
    }
  },
  {
    "strategyId": "STRAT_0228",
    "name": "Alpha_Mean_Reversion_Engine_228",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 48,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 13900000
    }
  },
  {
    "strategyId": "STRAT_0229",
    "name": "Alpha_Trend_Following_Engine_229",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 49,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 13950000
    }
  },
  {
    "strategyId": "STRAT_0230",
    "name": "Alpha_Pairs_Trading_Engine_230",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 50,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 14000000
    }
  },
  {
    "strategyId": "STRAT_0231",
    "name": "Alpha_Statistical_Arbitrage_Engine_231",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 51,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 14050000
    }
  },
  {
    "strategyId": "STRAT_0232",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_232",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 52,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 14100000
    }
  },
  {
    "strategyId": "STRAT_0233",
    "name": "Alpha_TWAP_Execution_Engine_233",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 53,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 14150000
    }
  },
  {
    "strategyId": "STRAT_0234",
    "name": "Alpha_VWAP_Execution_Engine_234",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 54,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 14200000
    }
  },
  {
    "strategyId": "STRAT_0235",
    "name": "Alpha_Mean_Reversion_Engine_235",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 55,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 14250000
    }
  },
  {
    "strategyId": "STRAT_0236",
    "name": "Alpha_Trend_Following_Engine_236",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 56,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 14300000
    }
  },
  {
    "strategyId": "STRAT_0237",
    "name": "Alpha_Pairs_Trading_Engine_237",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 57,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 14350000
    }
  },
  {
    "strategyId": "STRAT_0238",
    "name": "Alpha_Statistical_Arbitrage_Engine_238",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 58,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 14400000
    }
  },
  {
    "strategyId": "STRAT_0239",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_239",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 59,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 14450000
    }
  },
  {
    "strategyId": "STRAT_0240",
    "name": "Alpha_TWAP_Execution_Engine_240",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 60,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 14500000
    }
  },
  {
    "strategyId": "STRAT_0241",
    "name": "Alpha_VWAP_Execution_Engine_241",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 61,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 14550000
    }
  },
  {
    "strategyId": "STRAT_0242",
    "name": "Alpha_Mean_Reversion_Engine_242",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 62,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 14600000
    }
  },
  {
    "strategyId": "STRAT_0243",
    "name": "Alpha_Trend_Following_Engine_243",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 63,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 14650000
    }
  },
  {
    "strategyId": "STRAT_0244",
    "name": "Alpha_Pairs_Trading_Engine_244",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 64,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 14700000
    }
  },
  {
    "strategyId": "STRAT_0245",
    "name": "Alpha_Statistical_Arbitrage_Engine_245",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 65,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 14750000
    }
  },
  {
    "strategyId": "STRAT_0246",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_246",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 66,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 14800000
    }
  },
  {
    "strategyId": "STRAT_0247",
    "name": "Alpha_TWAP_Execution_Engine_247",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 67,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 14850000
    }
  },
  {
    "strategyId": "STRAT_0248",
    "name": "Alpha_VWAP_Execution_Engine_248",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 68,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 14900000
    }
  },
  {
    "strategyId": "STRAT_0249",
    "name": "Alpha_Mean_Reversion_Engine_249",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 69,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 14950000
    }
  },
  {
    "strategyId": "STRAT_0250",
    "name": "Alpha_Trend_Following_Engine_250",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 20,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 15000000
    }
  },
  {
    "strategyId": "STRAT_0251",
    "name": "Alpha_Pairs_Trading_Engine_251",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 21,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 15050000
    }
  },
  {
    "strategyId": "STRAT_0252",
    "name": "Alpha_Statistical_Arbitrage_Engine_252",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 22,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 15100000
    }
  },
  {
    "strategyId": "STRAT_0253",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_253",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 23,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 15150000
    }
  },
  {
    "strategyId": "STRAT_0254",
    "name": "Alpha_TWAP_Execution_Engine_254",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 24,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 15200000
    }
  },
  {
    "strategyId": "STRAT_0255",
    "name": "Alpha_VWAP_Execution_Engine_255",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 25,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 15250000
    }
  },
  {
    "strategyId": "STRAT_0256",
    "name": "Alpha_Mean_Reversion_Engine_256",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 26,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 15300000
    }
  },
  {
    "strategyId": "STRAT_0257",
    "name": "Alpha_Trend_Following_Engine_257",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 27,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 15350000
    }
  },
  {
    "strategyId": "STRAT_0258",
    "name": "Alpha_Pairs_Trading_Engine_258",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 28,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 15400000
    }
  },
  {
    "strategyId": "STRAT_0259",
    "name": "Alpha_Statistical_Arbitrage_Engine_259",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 29,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 15450000
    }
  },
  {
    "strategyId": "STRAT_0260",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_260",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 30,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 15500000
    }
  },
  {
    "strategyId": "STRAT_0261",
    "name": "Alpha_TWAP_Execution_Engine_261",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 31,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 15550000
    }
  },
  {
    "strategyId": "STRAT_0262",
    "name": "Alpha_VWAP_Execution_Engine_262",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 32,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 15600000
    }
  },
  {
    "strategyId": "STRAT_0263",
    "name": "Alpha_Mean_Reversion_Engine_263",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 33,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 15650000
    }
  },
  {
    "strategyId": "STRAT_0264",
    "name": "Alpha_Trend_Following_Engine_264",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 34,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 15700000
    }
  },
  {
    "strategyId": "STRAT_0265",
    "name": "Alpha_Pairs_Trading_Engine_265",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 35,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 15750000
    }
  },
  {
    "strategyId": "STRAT_0266",
    "name": "Alpha_Statistical_Arbitrage_Engine_266",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 36,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 15800000
    }
  },
  {
    "strategyId": "STRAT_0267",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_267",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 37,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 15850000
    }
  },
  {
    "strategyId": "STRAT_0268",
    "name": "Alpha_TWAP_Execution_Engine_268",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 38,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 15900000
    }
  },
  {
    "strategyId": "STRAT_0269",
    "name": "Alpha_VWAP_Execution_Engine_269",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 39,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 15950000
    }
  },
  {
    "strategyId": "STRAT_0270",
    "name": "Alpha_Mean_Reversion_Engine_270",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 40,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 16000000
    }
  },
  {
    "strategyId": "STRAT_0271",
    "name": "Alpha_Trend_Following_Engine_271",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 41,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 16050000
    }
  },
  {
    "strategyId": "STRAT_0272",
    "name": "Alpha_Pairs_Trading_Engine_272",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 42,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 16100000
    }
  },
  {
    "strategyId": "STRAT_0273",
    "name": "Alpha_Statistical_Arbitrage_Engine_273",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 43,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 16150000
    }
  },
  {
    "strategyId": "STRAT_0274",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_274",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 44,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 16200000
    }
  },
  {
    "strategyId": "STRAT_0275",
    "name": "Alpha_TWAP_Execution_Engine_275",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 45,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 16250000
    }
  },
  {
    "strategyId": "STRAT_0276",
    "name": "Alpha_VWAP_Execution_Engine_276",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 46,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 16300000
    }
  },
  {
    "strategyId": "STRAT_0277",
    "name": "Alpha_Mean_Reversion_Engine_277",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 47,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 16350000
    }
  },
  {
    "strategyId": "STRAT_0278",
    "name": "Alpha_Trend_Following_Engine_278",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 48,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 16400000
    }
  },
  {
    "strategyId": "STRAT_0279",
    "name": "Alpha_Pairs_Trading_Engine_279",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 49,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 16450000
    }
  },
  {
    "strategyId": "STRAT_0280",
    "name": "Alpha_Statistical_Arbitrage_Engine_280",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 50,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 16500000
    }
  },
  {
    "strategyId": "STRAT_0281",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_281",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 51,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 16550000
    }
  },
  {
    "strategyId": "STRAT_0282",
    "name": "Alpha_TWAP_Execution_Engine_282",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 52,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 16600000
    }
  },
  {
    "strategyId": "STRAT_0283",
    "name": "Alpha_VWAP_Execution_Engine_283",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 53,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 16650000
    }
  },
  {
    "strategyId": "STRAT_0284",
    "name": "Alpha_Mean_Reversion_Engine_284",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 54,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 16700000
    }
  },
  {
    "strategyId": "STRAT_0285",
    "name": "Alpha_Trend_Following_Engine_285",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 55,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 16750000
    }
  },
  {
    "strategyId": "STRAT_0286",
    "name": "Alpha_Pairs_Trading_Engine_286",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 56,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 16800000
    }
  },
  {
    "strategyId": "STRAT_0287",
    "name": "Alpha_Statistical_Arbitrage_Engine_287",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 57,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 16850000
    }
  },
  {
    "strategyId": "STRAT_0288",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_288",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 58,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 16900000
    }
  },
  {
    "strategyId": "STRAT_0289",
    "name": "Alpha_TWAP_Execution_Engine_289",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 59,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 16950000
    }
  },
  {
    "strategyId": "STRAT_0290",
    "name": "Alpha_VWAP_Execution_Engine_290",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 60,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 17000000
    }
  },
  {
    "strategyId": "STRAT_0291",
    "name": "Alpha_Mean_Reversion_Engine_291",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 61,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 17050000
    }
  },
  {
    "strategyId": "STRAT_0292",
    "name": "Alpha_Trend_Following_Engine_292",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 62,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 17100000
    }
  },
  {
    "strategyId": "STRAT_0293",
    "name": "Alpha_Pairs_Trading_Engine_293",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 63,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 17150000
    }
  },
  {
    "strategyId": "STRAT_0294",
    "name": "Alpha_Statistical_Arbitrage_Engine_294",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 64,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 17200000
    }
  },
  {
    "strategyId": "STRAT_0295",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_295",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 65,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 17250000
    }
  },
  {
    "strategyId": "STRAT_0296",
    "name": "Alpha_TWAP_Execution_Engine_296",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 66,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 17300000
    }
  },
  {
    "strategyId": "STRAT_0297",
    "name": "Alpha_VWAP_Execution_Engine_297",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 67,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 17350000
    }
  },
  {
    "strategyId": "STRAT_0298",
    "name": "Alpha_Mean_Reversion_Engine_298",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 68,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 17400000
    }
  },
  {
    "strategyId": "STRAT_0299",
    "name": "Alpha_Trend_Following_Engine_299",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 69,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 17450000
    }
  },
  {
    "strategyId": "STRAT_0300",
    "name": "Alpha_Pairs_Trading_Engine_300",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 20,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 17500000
    }
  },
  {
    "strategyId": "STRAT_0301",
    "name": "Alpha_Statistical_Arbitrage_Engine_301",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 21,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 17550000
    }
  },
  {
    "strategyId": "STRAT_0302",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_302",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 22,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 17600000
    }
  },
  {
    "strategyId": "STRAT_0303",
    "name": "Alpha_TWAP_Execution_Engine_303",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 23,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 17650000
    }
  },
  {
    "strategyId": "STRAT_0304",
    "name": "Alpha_VWAP_Execution_Engine_304",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 24,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 17700000
    }
  },
  {
    "strategyId": "STRAT_0305",
    "name": "Alpha_Mean_Reversion_Engine_305",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 25,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 17750000
    }
  },
  {
    "strategyId": "STRAT_0306",
    "name": "Alpha_Trend_Following_Engine_306",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 26,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 17800000
    }
  },
  {
    "strategyId": "STRAT_0307",
    "name": "Alpha_Pairs_Trading_Engine_307",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 27,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 17850000
    }
  },
  {
    "strategyId": "STRAT_0308",
    "name": "Alpha_Statistical_Arbitrage_Engine_308",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 28,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 17900000
    }
  },
  {
    "strategyId": "STRAT_0309",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_309",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 29,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 17950000
    }
  },
  {
    "strategyId": "STRAT_0310",
    "name": "Alpha_TWAP_Execution_Engine_310",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 30,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 18000000
    }
  },
  {
    "strategyId": "STRAT_0311",
    "name": "Alpha_VWAP_Execution_Engine_311",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 31,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 18050000
    }
  },
  {
    "strategyId": "STRAT_0312",
    "name": "Alpha_Mean_Reversion_Engine_312",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 32,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 18100000
    }
  },
  {
    "strategyId": "STRAT_0313",
    "name": "Alpha_Trend_Following_Engine_313",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 33,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 18150000
    }
  },
  {
    "strategyId": "STRAT_0314",
    "name": "Alpha_Pairs_Trading_Engine_314",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 34,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 18200000
    }
  },
  {
    "strategyId": "STRAT_0315",
    "name": "Alpha_Statistical_Arbitrage_Engine_315",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 35,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 18250000
    }
  },
  {
    "strategyId": "STRAT_0316",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_316",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 36,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 18300000
    }
  },
  {
    "strategyId": "STRAT_0317",
    "name": "Alpha_TWAP_Execution_Engine_317",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 37,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 18350000
    }
  },
  {
    "strategyId": "STRAT_0318",
    "name": "Alpha_VWAP_Execution_Engine_318",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 38,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 18400000
    }
  },
  {
    "strategyId": "STRAT_0319",
    "name": "Alpha_Mean_Reversion_Engine_319",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 39,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 18450000
    }
  },
  {
    "strategyId": "STRAT_0320",
    "name": "Alpha_Trend_Following_Engine_320",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 40,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 18500000
    }
  },
  {
    "strategyId": "STRAT_0321",
    "name": "Alpha_Pairs_Trading_Engine_321",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 41,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 18550000
    }
  },
  {
    "strategyId": "STRAT_0322",
    "name": "Alpha_Statistical_Arbitrage_Engine_322",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 42,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 18600000
    }
  },
  {
    "strategyId": "STRAT_0323",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_323",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 43,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 18650000
    }
  },
  {
    "strategyId": "STRAT_0324",
    "name": "Alpha_TWAP_Execution_Engine_324",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 44,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 18700000
    }
  },
  {
    "strategyId": "STRAT_0325",
    "name": "Alpha_VWAP_Execution_Engine_325",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 45,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 18750000
    }
  },
  {
    "strategyId": "STRAT_0326",
    "name": "Alpha_Mean_Reversion_Engine_326",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 46,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 18800000
    }
  },
  {
    "strategyId": "STRAT_0327",
    "name": "Alpha_Trend_Following_Engine_327",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 47,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 18850000
    }
  },
  {
    "strategyId": "STRAT_0328",
    "name": "Alpha_Pairs_Trading_Engine_328",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 48,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 18900000
    }
  },
  {
    "strategyId": "STRAT_0329",
    "name": "Alpha_Statistical_Arbitrage_Engine_329",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 49,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 18950000
    }
  },
  {
    "strategyId": "STRAT_0330",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_330",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 50,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 19000000
    }
  },
  {
    "strategyId": "STRAT_0331",
    "name": "Alpha_TWAP_Execution_Engine_331",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 51,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 19050000
    }
  },
  {
    "strategyId": "STRAT_0332",
    "name": "Alpha_VWAP_Execution_Engine_332",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 52,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 19100000
    }
  },
  {
    "strategyId": "STRAT_0333",
    "name": "Alpha_Mean_Reversion_Engine_333",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 53,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 19150000
    }
  },
  {
    "strategyId": "STRAT_0334",
    "name": "Alpha_Trend_Following_Engine_334",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 54,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 19200000
    }
  },
  {
    "strategyId": "STRAT_0335",
    "name": "Alpha_Pairs_Trading_Engine_335",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 55,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 19250000
    }
  },
  {
    "strategyId": "STRAT_0336",
    "name": "Alpha_Statistical_Arbitrage_Engine_336",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 56,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 19300000
    }
  },
  {
    "strategyId": "STRAT_0337",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_337",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 57,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 19350000
    }
  },
  {
    "strategyId": "STRAT_0338",
    "name": "Alpha_TWAP_Execution_Engine_338",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 58,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 19400000
    }
  },
  {
    "strategyId": "STRAT_0339",
    "name": "Alpha_VWAP_Execution_Engine_339",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 59,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 19450000
    }
  },
  {
    "strategyId": "STRAT_0340",
    "name": "Alpha_Mean_Reversion_Engine_340",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 60,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 19500000
    }
  },
  {
    "strategyId": "STRAT_0341",
    "name": "Alpha_Trend_Following_Engine_341",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 61,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 19550000
    }
  },
  {
    "strategyId": "STRAT_0342",
    "name": "Alpha_Pairs_Trading_Engine_342",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 62,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 19600000
    }
  },
  {
    "strategyId": "STRAT_0343",
    "name": "Alpha_Statistical_Arbitrage_Engine_343",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 63,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 19650000
    }
  },
  {
    "strategyId": "STRAT_0344",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_344",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 64,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 19700000
    }
  },
  {
    "strategyId": "STRAT_0345",
    "name": "Alpha_TWAP_Execution_Engine_345",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 65,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 19750000
    }
  },
  {
    "strategyId": "STRAT_0346",
    "name": "Alpha_VWAP_Execution_Engine_346",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 66,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 19800000
    }
  },
  {
    "strategyId": "STRAT_0347",
    "name": "Alpha_Mean_Reversion_Engine_347",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 67,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 19850000
    }
  },
  {
    "strategyId": "STRAT_0348",
    "name": "Alpha_Trend_Following_Engine_348",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 68,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 19900000
    }
  },
  {
    "strategyId": "STRAT_0349",
    "name": "Alpha_Pairs_Trading_Engine_349",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 69,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 19950000
    }
  },
  {
    "strategyId": "STRAT_0350",
    "name": "Alpha_Statistical_Arbitrage_Engine_350",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 20,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 20000000
    }
  },
  {
    "strategyId": "STRAT_0351",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_351",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 21,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 20050000
    }
  },
  {
    "strategyId": "STRAT_0352",
    "name": "Alpha_TWAP_Execution_Engine_352",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 22,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 20100000
    }
  },
  {
    "strategyId": "STRAT_0353",
    "name": "Alpha_VWAP_Execution_Engine_353",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 23,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 20150000
    }
  },
  {
    "strategyId": "STRAT_0354",
    "name": "Alpha_Mean_Reversion_Engine_354",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 24,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 20200000
    }
  },
  {
    "strategyId": "STRAT_0355",
    "name": "Alpha_Trend_Following_Engine_355",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 21.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 25,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 75,
      "maxPositionUSD": 20250000
    }
  },
  {
    "strategyId": "STRAT_0356",
    "name": "Alpha_Pairs_Trading_Engine_356",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 21.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 26,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 80,
      "maxPositionUSD": 20300000
    }
  },
  {
    "strategyId": "STRAT_0357",
    "name": "Alpha_Statistical_Arbitrage_Engine_357",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 22.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 27,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 85,
      "maxPositionUSD": 20350000
    }
  },
  {
    "strategyId": "STRAT_0358",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_358",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 22.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 28,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 90,
      "maxPositionUSD": 20400000
    }
  },
  {
    "strategyId": "STRAT_0359",
    "name": "Alpha_TWAP_Execution_Engine_359",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 23.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 29,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 95,
      "maxPositionUSD": 20450000
    }
  },
  {
    "strategyId": "STRAT_0360",
    "name": "Alpha_VWAP_Execution_Engine_360",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 23.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 30,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 100,
      "maxPositionUSD": 20500000
    }
  },
  {
    "strategyId": "STRAT_0361",
    "name": "Alpha_Mean_Reversion_Engine_361",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 24.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 31,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 105,
      "maxPositionUSD": 20550000
    }
  },
  {
    "strategyId": "STRAT_0362",
    "name": "Alpha_Trend_Following_Engine_362",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 24.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 32,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 110,
      "maxPositionUSD": 20600000
    }
  },
  {
    "strategyId": "STRAT_0363",
    "name": "Alpha_Pairs_Trading_Engine_363",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 25.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 33,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 115,
      "maxPositionUSD": 20650000
    }
  },
  {
    "strategyId": "STRAT_0364",
    "name": "Alpha_Statistical_Arbitrage_Engine_364",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_25",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 25.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 34,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 120,
      "maxPositionUSD": 20700000
    }
  },
  {
    "strategyId": "STRAT_0365",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_365",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_27",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 26.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 35,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 125,
      "maxPositionUSD": 20750000
    }
  },
  {
    "strategyId": "STRAT_0366",
    "name": "Alpha_TWAP_Execution_Engine_366",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_29",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 26.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 36,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 130,
      "maxPositionUSD": 20800000
    }
  },
  {
    "strategyId": "STRAT_0367",
    "name": "Alpha_VWAP_Execution_Engine_367",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_31",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 27.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 37,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 135,
      "maxPositionUSD": 20850000
    }
  },
  {
    "strategyId": "STRAT_0368",
    "name": "Alpha_Mean_Reversion_Engine_368",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_1",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 27.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 38,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 140,
      "maxPositionUSD": 20900000
    }
  },
  {
    "strategyId": "STRAT_0369",
    "name": "Alpha_Trend_Following_Engine_369",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_3",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 28.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 39,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 145,
      "maxPositionUSD": 20950000
    }
  },
  {
    "strategyId": "STRAT_0370",
    "name": "Alpha_Pairs_Trading_Engine_370",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_5",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 28.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 40,
      "entryZScore": 1.75,
      "exitZScore": 0.25,
      "stopLossBps": 150,
      "maxPositionUSD": 21000000
    }
  },
  {
    "strategyId": "STRAT_0371",
    "name": "Alpha_Statistical_Arbitrage_Engine_371",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_7",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 29.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 41,
      "entryZScore": 1.85,
      "exitZScore": 0.25,
      "stopLossBps": 155,
      "maxPositionUSD": 21050000
    }
  },
  {
    "strategyId": "STRAT_0372",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_372",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_9",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 29.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 42,
      "entryZScore": 1.95,
      "exitZScore": 0.25,
      "stopLossBps": 160,
      "maxPositionUSD": 21100000
    }
  },
  {
    "strategyId": "STRAT_0373",
    "name": "Alpha_TWAP_Execution_Engine_373",
    "type": "TWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_11",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 30.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 43,
      "entryZScore": 2.05,
      "exitZScore": 0.25,
      "stopLossBps": 165,
      "maxPositionUSD": 21150000
    }
  },
  {
    "strategyId": "STRAT_0374",
    "name": "Alpha_VWAP_Execution_Engine_374",
    "type": "VWAP_Execution",
    "targetUniverse": "EQ_TEC_CLUSTER_13",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 30.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 44,
      "entryZScore": 2.15,
      "exitZScore": 0.25,
      "stopLossBps": 170,
      "maxPositionUSD": 21200000
    }
  },
  {
    "strategyId": "STRAT_0375",
    "name": "Alpha_Mean_Reversion_Engine_375",
    "type": "Mean_Reversion",
    "targetUniverse": "EQ_TEC_CLUSTER_15",
    "maxDrawdownLimitPct": 5.0,
    "targetAnnualReturnPct": 18.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 45,
      "entryZScore": 2.25,
      "exitZScore": 0.25,
      "stopLossBps": 50,
      "maxPositionUSD": 21250000
    }
  },
  {
    "strategyId": "STRAT_0376",
    "name": "Alpha_Trend_Following_Engine_376",
    "type": "Trend_Following",
    "targetUniverse": "EQ_TEC_CLUSTER_17",
    "maxDrawdownLimitPct": 6.0,
    "targetAnnualReturnPct": 19.0,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 46,
      "entryZScore": 2.35,
      "exitZScore": 0.25,
      "stopLossBps": 55,
      "maxPositionUSD": 21300000
    }
  },
  {
    "strategyId": "STRAT_0377",
    "name": "Alpha_Pairs_Trading_Engine_377",
    "type": "Pairs_Trading",
    "targetUniverse": "EQ_TEC_CLUSTER_19",
    "maxDrawdownLimitPct": 7.0,
    "targetAnnualReturnPct": 19.5,
    "turnoverFrequency": "Daily",
    "parameters": {
      "lookbackWindow": 47,
      "entryZScore": 2.45,
      "exitZScore": 0.25,
      "stopLossBps": 60,
      "maxPositionUSD": 21350000
    }
  },
  {
    "strategyId": "STRAT_0378",
    "name": "Alpha_Statistical_Arbitrage_Engine_378",
    "type": "Statistical_Arbitrage",
    "targetUniverse": "EQ_TEC_CLUSTER_21",
    "maxDrawdownLimitPct": 8.0,
    "targetAnnualReturnPct": 20.0,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 48,
      "entryZScore": 2.55,
      "exitZScore": 0.25,
      "stopLossBps": 65,
      "maxPositionUSD": 21400000
    }
  },
  {
    "strategyId": "STRAT_0379",
    "name": "Alpha_Cross_Exchange_Market_Making_Engine_379",
    "type": "Cross_Exchange_Market_Making",
    "targetUniverse": "EQ_TEC_CLUSTER_23",
    "maxDrawdownLimitPct": 9.0,
    "targetAnnualReturnPct": 20.5,
    "turnoverFrequency": "Intraday",
    "parameters": {
      "lookbackWindow": 49,
      "entryZScore": 2.65,
      "exitZScore": 0.25,
      "stopLossBps": 70,
      "maxPositionUSD": 21450000
    }
  }
];
