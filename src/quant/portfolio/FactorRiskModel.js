/**
 * FactorRiskModel.js - Multi-Factor Risk Attribution & Barra Equity Models (400+ Factors)
 */
module.exports = [
  {
    "factorId": "FACTOR_0001",
    "name": "Barra_Value_Exposure_Factor_1",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 22,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0004",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0008",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0002",
    "name": "Barra_Momentum_Exposure_Factor_2",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 23,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0007",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0015",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0003",
    "name": "Barra_Volatility_Exposure_Factor_3",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 24,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0010",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0022",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0004",
    "name": "Barra_Liquidity_Exposure_Factor_4",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 25,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0013",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0029",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0005",
    "name": "Barra_Quality_Exposure_Factor_5",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 26,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0016",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0036",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0006",
    "name": "Barra_Growth_Exposure_Factor_6",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 27,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0019",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0043",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0007",
    "name": "Barra_Leverage_Exposure_Factor_7",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 28,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0022",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0050",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0008",
    "name": "Barra_Size_Exposure_Factor_8",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 29,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0025",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0057",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0009",
    "name": "Barra_Value_Exposure_Factor_9",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 30,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0028",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0064",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0010",
    "name": "Barra_Momentum_Exposure_Factor_10",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 31,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0031",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0071",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0011",
    "name": "Barra_Volatility_Exposure_Factor_11",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 32,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0034",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0078",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0012",
    "name": "Barra_Liquidity_Exposure_Factor_12",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 33,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0037",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0085",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0013",
    "name": "Barra_Quality_Exposure_Factor_13",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 34,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0040",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0092",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0014",
    "name": "Barra_Growth_Exposure_Factor_14",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 35,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0043",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0099",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0015",
    "name": "Barra_Leverage_Exposure_Factor_15",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 36,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0046",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0106",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0016",
    "name": "Barra_Size_Exposure_Factor_16",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 37,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0049",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0113",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0017",
    "name": "Barra_Value_Exposure_Factor_17",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 38,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0052",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0120",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0018",
    "name": "Barra_Momentum_Exposure_Factor_18",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 39,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0055",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0127",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0019",
    "name": "Barra_Volatility_Exposure_Factor_19",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 40,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0058",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0134",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0020",
    "name": "Barra_Liquidity_Exposure_Factor_20",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 41,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0061",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0141",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0021",
    "name": "Barra_Quality_Exposure_Factor_21",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 42,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0064",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0148",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0022",
    "name": "Barra_Growth_Exposure_Factor_22",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 43,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0067",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0155",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0023",
    "name": "Barra_Leverage_Exposure_Factor_23",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 44,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0070",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0162",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0024",
    "name": "Barra_Size_Exposure_Factor_24",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 45,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0073",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0169",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0025",
    "name": "Barra_Value_Exposure_Factor_25",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 46,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0076",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0176",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0026",
    "name": "Barra_Momentum_Exposure_Factor_26",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 47,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0079",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0183",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0027",
    "name": "Barra_Volatility_Exposure_Factor_27",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 48,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0082",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0190",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0028",
    "name": "Barra_Liquidity_Exposure_Factor_28",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 49,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0085",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0197",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0029",
    "name": "Barra_Quality_Exposure_Factor_29",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 50,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0088",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0204",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0030",
    "name": "Barra_Growth_Exposure_Factor_30",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 51,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0091",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0211",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0031",
    "name": "Barra_Leverage_Exposure_Factor_31",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 52,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0094",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0218",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0032",
    "name": "Barra_Size_Exposure_Factor_32",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 53,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0097",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0225",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0033",
    "name": "Barra_Value_Exposure_Factor_33",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 54,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0100",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0232",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0034",
    "name": "Barra_Momentum_Exposure_Factor_34",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 55,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0103",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0239",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0035",
    "name": "Barra_Volatility_Exposure_Factor_35",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 56,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0106",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0246",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0036",
    "name": "Barra_Liquidity_Exposure_Factor_36",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 57,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0109",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0253",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0037",
    "name": "Barra_Quality_Exposure_Factor_37",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 58,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0112",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0260",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0038",
    "name": "Barra_Growth_Exposure_Factor_38",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 59,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0115",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0267",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0039",
    "name": "Barra_Leverage_Exposure_Factor_39",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 60,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0118",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0274",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0040",
    "name": "Barra_Size_Exposure_Factor_40",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 61,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0121",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0281",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0041",
    "name": "Barra_Value_Exposure_Factor_41",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 62,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0124",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0288",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0042",
    "name": "Barra_Momentum_Exposure_Factor_42",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 63,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0127",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0295",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0043",
    "name": "Barra_Volatility_Exposure_Factor_43",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 64,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0130",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0302",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0044",
    "name": "Barra_Liquidity_Exposure_Factor_44",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 65,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0133",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0309",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0045",
    "name": "Barra_Quality_Exposure_Factor_45",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 66,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0136",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0316",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0046",
    "name": "Barra_Growth_Exposure_Factor_46",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 67,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0139",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0323",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0047",
    "name": "Barra_Leverage_Exposure_Factor_47",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 68,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0142",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0330",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0048",
    "name": "Barra_Size_Exposure_Factor_48",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 69,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0145",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0337",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0049",
    "name": "Barra_Value_Exposure_Factor_49",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 70,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0148",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0344",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0050",
    "name": "Barra_Momentum_Exposure_Factor_50",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 71,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0151",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0351",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0051",
    "name": "Barra_Volatility_Exposure_Factor_51",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 72,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0154",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0358",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0052",
    "name": "Barra_Liquidity_Exposure_Factor_52",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 73,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0157",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0365",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0053",
    "name": "Barra_Quality_Exposure_Factor_53",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 74,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0160",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0372",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0054",
    "name": "Barra_Growth_Exposure_Factor_54",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 75,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0163",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0379",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0055",
    "name": "Barra_Leverage_Exposure_Factor_55",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 76,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0166",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0386",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0056",
    "name": "Barra_Size_Exposure_Factor_56",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 77,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0169",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0393",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0057",
    "name": "Barra_Value_Exposure_Factor_57",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 78,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0172",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0400",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0058",
    "name": "Barra_Momentum_Exposure_Factor_58",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 79,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0175",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0407",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0059",
    "name": "Barra_Volatility_Exposure_Factor_59",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 80,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0178",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0414",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0060",
    "name": "Barra_Liquidity_Exposure_Factor_60",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 21,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0181",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0421",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0061",
    "name": "Barra_Quality_Exposure_Factor_61",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 22,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0184",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0428",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0062",
    "name": "Barra_Growth_Exposure_Factor_62",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 23,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0187",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0435",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0063",
    "name": "Barra_Leverage_Exposure_Factor_63",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 24,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0190",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0442",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0064",
    "name": "Barra_Size_Exposure_Factor_64",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 25,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0193",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0449",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0065",
    "name": "Barra_Value_Exposure_Factor_65",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 26,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0196",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0456",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0066",
    "name": "Barra_Momentum_Exposure_Factor_66",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 27,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0199",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0463",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0067",
    "name": "Barra_Volatility_Exposure_Factor_67",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 28,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0202",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0470",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0068",
    "name": "Barra_Liquidity_Exposure_Factor_68",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 29,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0205",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0477",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0069",
    "name": "Barra_Quality_Exposure_Factor_69",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 30,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0208",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0484",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0070",
    "name": "Barra_Growth_Exposure_Factor_70",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 31,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0211",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0491",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0071",
    "name": "Barra_Leverage_Exposure_Factor_71",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 32,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0214",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0498",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0072",
    "name": "Barra_Size_Exposure_Factor_72",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 33,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0217",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0005",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0073",
    "name": "Barra_Value_Exposure_Factor_73",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 34,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0220",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0012",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0074",
    "name": "Barra_Momentum_Exposure_Factor_74",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 35,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0223",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0019",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0075",
    "name": "Barra_Volatility_Exposure_Factor_75",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 36,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0226",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0026",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0076",
    "name": "Barra_Liquidity_Exposure_Factor_76",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 37,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0229",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0033",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0077",
    "name": "Barra_Quality_Exposure_Factor_77",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 38,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0232",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0040",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0078",
    "name": "Barra_Growth_Exposure_Factor_78",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 39,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0235",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0047",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0079",
    "name": "Barra_Leverage_Exposure_Factor_79",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 40,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0238",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0054",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0080",
    "name": "Barra_Size_Exposure_Factor_80",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 41,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0241",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0061",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0081",
    "name": "Barra_Value_Exposure_Factor_81",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 42,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0244",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0068",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0082",
    "name": "Barra_Momentum_Exposure_Factor_82",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 43,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0247",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0075",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0083",
    "name": "Barra_Volatility_Exposure_Factor_83",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 44,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0250",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0082",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0084",
    "name": "Barra_Liquidity_Exposure_Factor_84",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 45,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0253",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0089",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0085",
    "name": "Barra_Quality_Exposure_Factor_85",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 46,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0256",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0096",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0086",
    "name": "Barra_Growth_Exposure_Factor_86",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 47,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0259",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0103",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0087",
    "name": "Barra_Leverage_Exposure_Factor_87",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 48,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0262",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0110",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0088",
    "name": "Barra_Size_Exposure_Factor_88",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 49,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0265",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0117",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0089",
    "name": "Barra_Value_Exposure_Factor_89",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 50,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0268",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0124",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0090",
    "name": "Barra_Momentum_Exposure_Factor_90",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 51,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0271",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0131",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0091",
    "name": "Barra_Volatility_Exposure_Factor_91",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 52,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0274",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0138",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0092",
    "name": "Barra_Liquidity_Exposure_Factor_92",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 53,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0277",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0145",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0093",
    "name": "Barra_Quality_Exposure_Factor_93",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 54,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0280",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0152",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0094",
    "name": "Barra_Growth_Exposure_Factor_94",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 55,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0283",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0159",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0095",
    "name": "Barra_Leverage_Exposure_Factor_95",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 56,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0286",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0166",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0096",
    "name": "Barra_Size_Exposure_Factor_96",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 57,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0289",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0173",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0097",
    "name": "Barra_Value_Exposure_Factor_97",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 58,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0292",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0180",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0098",
    "name": "Barra_Momentum_Exposure_Factor_98",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 59,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0295",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0187",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0099",
    "name": "Barra_Volatility_Exposure_Factor_99",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 60,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0298",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0194",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0100",
    "name": "Barra_Liquidity_Exposure_Factor_100",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 61,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0301",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0201",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0101",
    "name": "Barra_Quality_Exposure_Factor_101",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 62,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0304",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0208",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0102",
    "name": "Barra_Growth_Exposure_Factor_102",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 63,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0307",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0215",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0103",
    "name": "Barra_Leverage_Exposure_Factor_103",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 64,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0310",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0222",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0104",
    "name": "Barra_Size_Exposure_Factor_104",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 65,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0313",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0229",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0105",
    "name": "Barra_Value_Exposure_Factor_105",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 66,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0316",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0236",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0106",
    "name": "Barra_Momentum_Exposure_Factor_106",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 67,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0319",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0243",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0107",
    "name": "Barra_Volatility_Exposure_Factor_107",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 68,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0322",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0250",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0108",
    "name": "Barra_Liquidity_Exposure_Factor_108",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 69,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0325",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0257",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0109",
    "name": "Barra_Quality_Exposure_Factor_109",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 70,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0328",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0264",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0110",
    "name": "Barra_Growth_Exposure_Factor_110",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 71,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0331",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0271",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0111",
    "name": "Barra_Leverage_Exposure_Factor_111",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 72,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0334",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0278",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0112",
    "name": "Barra_Size_Exposure_Factor_112",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 73,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0337",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0285",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0113",
    "name": "Barra_Value_Exposure_Factor_113",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 74,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0340",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0292",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0114",
    "name": "Barra_Momentum_Exposure_Factor_114",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 75,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0343",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0299",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0115",
    "name": "Barra_Volatility_Exposure_Factor_115",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 76,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0346",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0306",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0116",
    "name": "Barra_Liquidity_Exposure_Factor_116",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 77,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0349",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0313",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0117",
    "name": "Barra_Quality_Exposure_Factor_117",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 78,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0352",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0320",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0118",
    "name": "Barra_Growth_Exposure_Factor_118",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 79,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0355",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0327",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0119",
    "name": "Barra_Leverage_Exposure_Factor_119",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 80,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0358",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0334",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0120",
    "name": "Barra_Size_Exposure_Factor_120",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 21,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0361",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0341",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0121",
    "name": "Barra_Value_Exposure_Factor_121",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 22,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0364",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0348",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0122",
    "name": "Barra_Momentum_Exposure_Factor_122",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 23,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0367",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0355",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0123",
    "name": "Barra_Volatility_Exposure_Factor_123",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 24,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0370",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0362",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0124",
    "name": "Barra_Liquidity_Exposure_Factor_124",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 25,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0373",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0369",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0125",
    "name": "Barra_Quality_Exposure_Factor_125",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 26,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0376",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0376",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0126",
    "name": "Barra_Growth_Exposure_Factor_126",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 27,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0379",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0383",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0127",
    "name": "Barra_Leverage_Exposure_Factor_127",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 28,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0382",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0390",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0128",
    "name": "Barra_Size_Exposure_Factor_128",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 29,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0385",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0397",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0129",
    "name": "Barra_Value_Exposure_Factor_129",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 30,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0388",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0404",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0130",
    "name": "Barra_Momentum_Exposure_Factor_130",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 31,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0391",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0411",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0131",
    "name": "Barra_Volatility_Exposure_Factor_131",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 32,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0394",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0418",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0132",
    "name": "Barra_Liquidity_Exposure_Factor_132",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 33,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0397",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0425",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0133",
    "name": "Barra_Quality_Exposure_Factor_133",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 34,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0400",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0432",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0134",
    "name": "Barra_Growth_Exposure_Factor_134",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 35,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0403",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0439",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0135",
    "name": "Barra_Leverage_Exposure_Factor_135",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 36,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0406",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0446",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0136",
    "name": "Barra_Size_Exposure_Factor_136",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 37,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0409",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0453",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0137",
    "name": "Barra_Value_Exposure_Factor_137",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 38,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0412",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0460",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0138",
    "name": "Barra_Momentum_Exposure_Factor_138",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 39,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0415",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0467",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0139",
    "name": "Barra_Volatility_Exposure_Factor_139",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 40,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0418",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0474",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0140",
    "name": "Barra_Liquidity_Exposure_Factor_140",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 41,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0421",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0481",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0141",
    "name": "Barra_Quality_Exposure_Factor_141",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 42,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0424",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0488",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0142",
    "name": "Barra_Growth_Exposure_Factor_142",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 43,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0427",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0495",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0143",
    "name": "Barra_Leverage_Exposure_Factor_143",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 44,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0430",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0002",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0144",
    "name": "Barra_Size_Exposure_Factor_144",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 45,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0433",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0009",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0145",
    "name": "Barra_Value_Exposure_Factor_145",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 46,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0436",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0016",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0146",
    "name": "Barra_Momentum_Exposure_Factor_146",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 47,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0439",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0023",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0147",
    "name": "Barra_Volatility_Exposure_Factor_147",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 48,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0442",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0030",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0148",
    "name": "Barra_Liquidity_Exposure_Factor_148",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 49,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0445",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0037",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0149",
    "name": "Barra_Quality_Exposure_Factor_149",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 50,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0448",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0044",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0150",
    "name": "Barra_Growth_Exposure_Factor_150",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 51,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0451",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0051",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0151",
    "name": "Barra_Leverage_Exposure_Factor_151",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 52,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0454",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0058",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0152",
    "name": "Barra_Size_Exposure_Factor_152",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 53,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0457",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0065",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0153",
    "name": "Barra_Value_Exposure_Factor_153",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 54,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0460",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0072",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0154",
    "name": "Barra_Momentum_Exposure_Factor_154",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 55,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0463",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0079",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0155",
    "name": "Barra_Volatility_Exposure_Factor_155",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 56,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0466",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0086",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0156",
    "name": "Barra_Liquidity_Exposure_Factor_156",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 57,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0469",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0093",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0157",
    "name": "Barra_Quality_Exposure_Factor_157",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 58,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0472",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0100",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0158",
    "name": "Barra_Growth_Exposure_Factor_158",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 59,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0475",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0107",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0159",
    "name": "Barra_Leverage_Exposure_Factor_159",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 60,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0478",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0114",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0160",
    "name": "Barra_Size_Exposure_Factor_160",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 61,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0481",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0121",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0161",
    "name": "Barra_Value_Exposure_Factor_161",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 62,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0484",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0128",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0162",
    "name": "Barra_Momentum_Exposure_Factor_162",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 63,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0487",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0135",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0163",
    "name": "Barra_Volatility_Exposure_Factor_163",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 64,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0490",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0142",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0164",
    "name": "Barra_Liquidity_Exposure_Factor_164",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 65,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0493",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0149",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0165",
    "name": "Barra_Quality_Exposure_Factor_165",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 66,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0496",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0156",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0166",
    "name": "Barra_Growth_Exposure_Factor_166",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 67,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0499",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0163",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0167",
    "name": "Barra_Leverage_Exposure_Factor_167",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 68,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0002",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0170",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0168",
    "name": "Barra_Size_Exposure_Factor_168",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 69,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0005",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0177",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0169",
    "name": "Barra_Value_Exposure_Factor_169",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 70,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0008",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0184",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0170",
    "name": "Barra_Momentum_Exposure_Factor_170",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 71,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0011",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0191",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0171",
    "name": "Barra_Volatility_Exposure_Factor_171",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 72,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0014",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0198",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0172",
    "name": "Barra_Liquidity_Exposure_Factor_172",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 73,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0017",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0205",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0173",
    "name": "Barra_Quality_Exposure_Factor_173",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 74,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0020",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0212",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0174",
    "name": "Barra_Growth_Exposure_Factor_174",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 75,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0023",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0219",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0175",
    "name": "Barra_Leverage_Exposure_Factor_175",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 76,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0026",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0226",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0176",
    "name": "Barra_Size_Exposure_Factor_176",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 77,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0029",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0233",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0177",
    "name": "Barra_Value_Exposure_Factor_177",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 78,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0032",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0240",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0178",
    "name": "Barra_Momentum_Exposure_Factor_178",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 79,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0035",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0247",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0179",
    "name": "Barra_Volatility_Exposure_Factor_179",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 80,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0038",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0254",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0180",
    "name": "Barra_Liquidity_Exposure_Factor_180",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 21,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0041",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0261",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0181",
    "name": "Barra_Quality_Exposure_Factor_181",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 22,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0044",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0268",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0182",
    "name": "Barra_Growth_Exposure_Factor_182",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 23,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0047",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0275",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0183",
    "name": "Barra_Leverage_Exposure_Factor_183",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 24,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0050",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0282",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0184",
    "name": "Barra_Size_Exposure_Factor_184",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 25,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0053",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0289",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0185",
    "name": "Barra_Value_Exposure_Factor_185",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 26,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0056",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0296",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0186",
    "name": "Barra_Momentum_Exposure_Factor_186",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 27,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0059",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0303",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0187",
    "name": "Barra_Volatility_Exposure_Factor_187",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 28,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0062",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0310",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0188",
    "name": "Barra_Liquidity_Exposure_Factor_188",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 29,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0065",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0317",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0189",
    "name": "Barra_Quality_Exposure_Factor_189",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 30,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0068",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0324",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0190",
    "name": "Barra_Growth_Exposure_Factor_190",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 31,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0071",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0331",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0191",
    "name": "Barra_Leverage_Exposure_Factor_191",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 32,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0074",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0338",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0192",
    "name": "Barra_Size_Exposure_Factor_192",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 33,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0077",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0345",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0193",
    "name": "Barra_Value_Exposure_Factor_193",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 34,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0080",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0352",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0194",
    "name": "Barra_Momentum_Exposure_Factor_194",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 35,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0083",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0359",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0195",
    "name": "Barra_Volatility_Exposure_Factor_195",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 36,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0086",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0366",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0196",
    "name": "Barra_Liquidity_Exposure_Factor_196",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 37,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0089",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0373",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0197",
    "name": "Barra_Quality_Exposure_Factor_197",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 38,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0092",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0380",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0198",
    "name": "Barra_Growth_Exposure_Factor_198",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 39,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0095",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0387",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0199",
    "name": "Barra_Leverage_Exposure_Factor_199",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 40,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0098",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0394",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0200",
    "name": "Barra_Size_Exposure_Factor_200",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 41,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0101",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0401",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0201",
    "name": "Barra_Value_Exposure_Factor_201",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 42,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0104",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0408",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0202",
    "name": "Barra_Momentum_Exposure_Factor_202",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 43,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0107",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0415",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0203",
    "name": "Barra_Volatility_Exposure_Factor_203",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 44,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0110",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0422",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0204",
    "name": "Barra_Liquidity_Exposure_Factor_204",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 45,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0113",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0429",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0205",
    "name": "Barra_Quality_Exposure_Factor_205",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 46,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0116",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0436",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0206",
    "name": "Barra_Growth_Exposure_Factor_206",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 47,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0119",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0443",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0207",
    "name": "Barra_Leverage_Exposure_Factor_207",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 48,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0122",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0450",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0208",
    "name": "Barra_Size_Exposure_Factor_208",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 49,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0125",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0457",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0209",
    "name": "Barra_Value_Exposure_Factor_209",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 50,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0128",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0464",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0210",
    "name": "Barra_Momentum_Exposure_Factor_210",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 51,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0131",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0471",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0211",
    "name": "Barra_Volatility_Exposure_Factor_211",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 52,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0134",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0478",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0212",
    "name": "Barra_Liquidity_Exposure_Factor_212",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 53,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0137",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0485",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0213",
    "name": "Barra_Quality_Exposure_Factor_213",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 54,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0140",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0492",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0214",
    "name": "Barra_Growth_Exposure_Factor_214",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 55,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0143",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0499",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0215",
    "name": "Barra_Leverage_Exposure_Factor_215",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 56,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0146",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0006",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0216",
    "name": "Barra_Size_Exposure_Factor_216",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 57,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0149",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0013",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0217",
    "name": "Barra_Value_Exposure_Factor_217",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 58,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0152",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0020",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0218",
    "name": "Barra_Momentum_Exposure_Factor_218",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 59,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0155",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0027",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0219",
    "name": "Barra_Volatility_Exposure_Factor_219",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 60,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0158",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0034",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0220",
    "name": "Barra_Liquidity_Exposure_Factor_220",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 61,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0161",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0041",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0221",
    "name": "Barra_Quality_Exposure_Factor_221",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 62,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0164",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0048",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0222",
    "name": "Barra_Growth_Exposure_Factor_222",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 63,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0167",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0055",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0223",
    "name": "Barra_Leverage_Exposure_Factor_223",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 64,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0170",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0062",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0224",
    "name": "Barra_Size_Exposure_Factor_224",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 65,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0173",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0069",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0225",
    "name": "Barra_Value_Exposure_Factor_225",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 66,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0176",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0076",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0226",
    "name": "Barra_Momentum_Exposure_Factor_226",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 67,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0179",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0083",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0227",
    "name": "Barra_Volatility_Exposure_Factor_227",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 68,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0182",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0090",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0228",
    "name": "Barra_Liquidity_Exposure_Factor_228",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 69,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0185",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0097",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0229",
    "name": "Barra_Quality_Exposure_Factor_229",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 70,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0188",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0104",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0230",
    "name": "Barra_Growth_Exposure_Factor_230",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 71,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0191",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0111",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0231",
    "name": "Barra_Leverage_Exposure_Factor_231",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 72,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0194",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0118",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0232",
    "name": "Barra_Size_Exposure_Factor_232",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 73,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0197",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0125",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0233",
    "name": "Barra_Value_Exposure_Factor_233",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 74,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0200",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0132",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0234",
    "name": "Barra_Momentum_Exposure_Factor_234",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 75,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0203",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0139",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0235",
    "name": "Barra_Volatility_Exposure_Factor_235",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 76,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0206",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0146",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0236",
    "name": "Barra_Liquidity_Exposure_Factor_236",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 77,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0209",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0153",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0237",
    "name": "Barra_Quality_Exposure_Factor_237",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 78,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0212",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0160",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0238",
    "name": "Barra_Growth_Exposure_Factor_238",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 79,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0215",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0167",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0239",
    "name": "Barra_Leverage_Exposure_Factor_239",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 80,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0218",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0174",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0240",
    "name": "Barra_Size_Exposure_Factor_240",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 21,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0221",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0181",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0241",
    "name": "Barra_Value_Exposure_Factor_241",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 22,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0224",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0188",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0242",
    "name": "Barra_Momentum_Exposure_Factor_242",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 23,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0227",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0195",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0243",
    "name": "Barra_Volatility_Exposure_Factor_243",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 24,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0230",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0202",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0244",
    "name": "Barra_Liquidity_Exposure_Factor_244",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 25,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0233",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0209",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0245",
    "name": "Barra_Quality_Exposure_Factor_245",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 26,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0236",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0216",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0246",
    "name": "Barra_Growth_Exposure_Factor_246",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 27,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0239",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0223",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0247",
    "name": "Barra_Leverage_Exposure_Factor_247",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 28,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0242",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0230",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0248",
    "name": "Barra_Size_Exposure_Factor_248",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 29,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0245",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0237",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0249",
    "name": "Barra_Value_Exposure_Factor_249",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 30,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0248",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0244",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0250",
    "name": "Barra_Momentum_Exposure_Factor_250",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 31,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0251",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0251",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0251",
    "name": "Barra_Volatility_Exposure_Factor_251",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 32,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0254",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0258",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0252",
    "name": "Barra_Liquidity_Exposure_Factor_252",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 33,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0257",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0265",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0253",
    "name": "Barra_Quality_Exposure_Factor_253",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 34,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0260",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0272",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0254",
    "name": "Barra_Growth_Exposure_Factor_254",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 35,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0263",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0279",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0255",
    "name": "Barra_Leverage_Exposure_Factor_255",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 36,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0266",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0286",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0256",
    "name": "Barra_Size_Exposure_Factor_256",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 37,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0269",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0293",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0257",
    "name": "Barra_Value_Exposure_Factor_257",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 38,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0272",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0300",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0258",
    "name": "Barra_Momentum_Exposure_Factor_258",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 39,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0275",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0307",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0259",
    "name": "Barra_Volatility_Exposure_Factor_259",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 40,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0278",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0314",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0260",
    "name": "Barra_Liquidity_Exposure_Factor_260",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 41,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0281",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0321",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0261",
    "name": "Barra_Quality_Exposure_Factor_261",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 42,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0284",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0328",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0262",
    "name": "Barra_Growth_Exposure_Factor_262",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 43,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0287",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0335",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0263",
    "name": "Barra_Leverage_Exposure_Factor_263",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 44,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0290",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0342",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0264",
    "name": "Barra_Size_Exposure_Factor_264",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 45,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0293",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0349",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0265",
    "name": "Barra_Value_Exposure_Factor_265",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 46,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0296",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0356",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0266",
    "name": "Barra_Momentum_Exposure_Factor_266",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 47,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0299",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0363",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0267",
    "name": "Barra_Volatility_Exposure_Factor_267",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 48,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0302",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0370",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0268",
    "name": "Barra_Liquidity_Exposure_Factor_268",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 49,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0305",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0377",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0269",
    "name": "Barra_Quality_Exposure_Factor_269",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 50,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0308",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0384",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0270",
    "name": "Barra_Growth_Exposure_Factor_270",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 51,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0311",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0391",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0271",
    "name": "Barra_Leverage_Exposure_Factor_271",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 52,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0314",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0398",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0272",
    "name": "Barra_Size_Exposure_Factor_272",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 53,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0317",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0405",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0273",
    "name": "Barra_Value_Exposure_Factor_273",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 54,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0320",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0412",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0274",
    "name": "Barra_Momentum_Exposure_Factor_274",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 55,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0323",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0419",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0275",
    "name": "Barra_Volatility_Exposure_Factor_275",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 56,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0326",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0426",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0276",
    "name": "Barra_Liquidity_Exposure_Factor_276",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 57,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0329",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0433",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0277",
    "name": "Barra_Quality_Exposure_Factor_277",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 58,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0332",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0440",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0278",
    "name": "Barra_Growth_Exposure_Factor_278",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 59,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0335",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0447",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0279",
    "name": "Barra_Leverage_Exposure_Factor_279",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 60,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0338",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0454",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0280",
    "name": "Barra_Size_Exposure_Factor_280",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 61,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0341",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0461",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0281",
    "name": "Barra_Value_Exposure_Factor_281",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 62,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0344",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0468",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0282",
    "name": "Barra_Momentum_Exposure_Factor_282",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 63,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0347",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0475",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0283",
    "name": "Barra_Volatility_Exposure_Factor_283",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 64,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0350",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0482",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0284",
    "name": "Barra_Liquidity_Exposure_Factor_284",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 65,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0353",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0489",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0285",
    "name": "Barra_Quality_Exposure_Factor_285",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 66,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0356",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0496",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0286",
    "name": "Barra_Growth_Exposure_Factor_286",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 67,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0359",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0003",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0287",
    "name": "Barra_Leverage_Exposure_Factor_287",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 68,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0362",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0010",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0288",
    "name": "Barra_Size_Exposure_Factor_288",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 69,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0365",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0017",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0289",
    "name": "Barra_Value_Exposure_Factor_289",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 70,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0368",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0024",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0290",
    "name": "Barra_Momentum_Exposure_Factor_290",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 71,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0371",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0031",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0291",
    "name": "Barra_Volatility_Exposure_Factor_291",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 72,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0374",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0038",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0292",
    "name": "Barra_Liquidity_Exposure_Factor_292",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 73,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0377",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0045",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0293",
    "name": "Barra_Quality_Exposure_Factor_293",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 74,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0380",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0052",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0294",
    "name": "Barra_Growth_Exposure_Factor_294",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 75,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0383",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0059",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0295",
    "name": "Barra_Leverage_Exposure_Factor_295",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 76,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0386",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0066",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0296",
    "name": "Barra_Size_Exposure_Factor_296",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 77,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0389",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0073",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0297",
    "name": "Barra_Value_Exposure_Factor_297",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 78,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0392",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0080",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0298",
    "name": "Barra_Momentum_Exposure_Factor_298",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 79,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0395",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0087",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0299",
    "name": "Barra_Volatility_Exposure_Factor_299",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 80,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0398",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0094",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0300",
    "name": "Barra_Liquidity_Exposure_Factor_300",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 21,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0401",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0101",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0301",
    "name": "Barra_Quality_Exposure_Factor_301",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 22,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0404",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0108",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0302",
    "name": "Barra_Growth_Exposure_Factor_302",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 23,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0407",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0115",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0303",
    "name": "Barra_Leverage_Exposure_Factor_303",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 24,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0410",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0122",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0304",
    "name": "Barra_Size_Exposure_Factor_304",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 25,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0413",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0129",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0305",
    "name": "Barra_Value_Exposure_Factor_305",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 26,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0416",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0136",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0306",
    "name": "Barra_Momentum_Exposure_Factor_306",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 27,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0419",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0143",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0307",
    "name": "Barra_Volatility_Exposure_Factor_307",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 28,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0422",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0150",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0308",
    "name": "Barra_Liquidity_Exposure_Factor_308",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 29,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0425",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0157",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0309",
    "name": "Barra_Quality_Exposure_Factor_309",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 30,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0428",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0164",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0310",
    "name": "Barra_Growth_Exposure_Factor_310",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 31,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0431",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0171",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0311",
    "name": "Barra_Leverage_Exposure_Factor_311",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 32,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0434",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0178",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0312",
    "name": "Barra_Size_Exposure_Factor_312",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 33,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0437",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0185",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0313",
    "name": "Barra_Value_Exposure_Factor_313",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 34,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0440",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0192",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0314",
    "name": "Barra_Momentum_Exposure_Factor_314",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 35,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0443",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0199",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0315",
    "name": "Barra_Volatility_Exposure_Factor_315",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 36,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0446",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0206",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0316",
    "name": "Barra_Liquidity_Exposure_Factor_316",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 37,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0449",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0213",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0317",
    "name": "Barra_Quality_Exposure_Factor_317",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 38,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0452",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0220",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0318",
    "name": "Barra_Growth_Exposure_Factor_318",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 39,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0455",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0227",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0319",
    "name": "Barra_Leverage_Exposure_Factor_319",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 40,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0458",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0234",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0320",
    "name": "Barra_Size_Exposure_Factor_320",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 41,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0461",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0241",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0321",
    "name": "Barra_Value_Exposure_Factor_321",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 42,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0464",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0248",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0322",
    "name": "Barra_Momentum_Exposure_Factor_322",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 43,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0467",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0255",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0323",
    "name": "Barra_Volatility_Exposure_Factor_323",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 44,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0470",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0262",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0324",
    "name": "Barra_Liquidity_Exposure_Factor_324",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 45,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0473",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0269",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0325",
    "name": "Barra_Quality_Exposure_Factor_325",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 46,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0476",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0276",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0326",
    "name": "Barra_Growth_Exposure_Factor_326",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 47,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0479",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0283",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0327",
    "name": "Barra_Leverage_Exposure_Factor_327",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 48,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0482",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0290",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0328",
    "name": "Barra_Size_Exposure_Factor_328",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 49,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0485",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0297",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0329",
    "name": "Barra_Value_Exposure_Factor_329",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 50,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0488",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0304",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0330",
    "name": "Barra_Momentum_Exposure_Factor_330",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 51,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0491",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0311",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0331",
    "name": "Barra_Volatility_Exposure_Factor_331",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 52,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0494",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0318",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0332",
    "name": "Barra_Liquidity_Exposure_Factor_332",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 53,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0497",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0325",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0333",
    "name": "Barra_Quality_Exposure_Factor_333",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 54,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0500",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0332",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0334",
    "name": "Barra_Growth_Exposure_Factor_334",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 55,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0003",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0339",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0335",
    "name": "Barra_Leverage_Exposure_Factor_335",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 56,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0006",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0346",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0336",
    "name": "Barra_Size_Exposure_Factor_336",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 57,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0009",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0353",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0337",
    "name": "Barra_Value_Exposure_Factor_337",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 58,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0012",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0360",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0338",
    "name": "Barra_Momentum_Exposure_Factor_338",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 59,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0015",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0367",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0339",
    "name": "Barra_Volatility_Exposure_Factor_339",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 60,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0018",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0374",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0340",
    "name": "Barra_Liquidity_Exposure_Factor_340",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 61,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0021",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0381",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0341",
    "name": "Barra_Quality_Exposure_Factor_341",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 62,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0024",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0388",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0342",
    "name": "Barra_Growth_Exposure_Factor_342",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 63,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0027",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0395",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0343",
    "name": "Barra_Leverage_Exposure_Factor_343",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 64,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0030",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0402",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0344",
    "name": "Barra_Size_Exposure_Factor_344",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 65,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0033",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0409",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0345",
    "name": "Barra_Value_Exposure_Factor_345",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 66,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0036",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0416",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0346",
    "name": "Barra_Momentum_Exposure_Factor_346",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 67,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0039",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0423",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0347",
    "name": "Barra_Volatility_Exposure_Factor_347",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 68,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0042",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0430",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0348",
    "name": "Barra_Liquidity_Exposure_Factor_348",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 69,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0045",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0437",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0349",
    "name": "Barra_Quality_Exposure_Factor_349",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 70,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0048",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0444",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0350",
    "name": "Barra_Growth_Exposure_Factor_350",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 71,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0051",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0451",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0351",
    "name": "Barra_Leverage_Exposure_Factor_351",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 72,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0054",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0458",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0352",
    "name": "Barra_Size_Exposure_Factor_352",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 73,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0057",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0465",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0353",
    "name": "Barra_Value_Exposure_Factor_353",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 74,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0060",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0472",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0354",
    "name": "Barra_Momentum_Exposure_Factor_354",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 75,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0063",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0479",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0355",
    "name": "Barra_Volatility_Exposure_Factor_355",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 76,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0066",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0486",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0356",
    "name": "Barra_Liquidity_Exposure_Factor_356",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 77,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0069",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0493",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0357",
    "name": "Barra_Quality_Exposure_Factor_357",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 78,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0072",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0500",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0358",
    "name": "Barra_Growth_Exposure_Factor_358",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 79,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0075",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0007",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0359",
    "name": "Barra_Leverage_Exposure_Factor_359",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 80,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0078",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0014",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0360",
    "name": "Barra_Size_Exposure_Factor_360",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 21,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0081",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0021",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0361",
    "name": "Barra_Value_Exposure_Factor_361",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 22,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0084",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0028",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0362",
    "name": "Barra_Momentum_Exposure_Factor_362",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 23,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0087",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0035",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0363",
    "name": "Barra_Volatility_Exposure_Factor_363",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 24,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0090",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0042",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0364",
    "name": "Barra_Liquidity_Exposure_Factor_364",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 25,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0093",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0049",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0365",
    "name": "Barra_Quality_Exposure_Factor_365",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 26,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0096",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0056",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0366",
    "name": "Barra_Growth_Exposure_Factor_366",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 27,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0099",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0063",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0367",
    "name": "Barra_Leverage_Exposure_Factor_367",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 28,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0102",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0070",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0368",
    "name": "Barra_Size_Exposure_Factor_368",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 29,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0105",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0077",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0369",
    "name": "Barra_Value_Exposure_Factor_369",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 30,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0108",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0084",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0370",
    "name": "Barra_Momentum_Exposure_Factor_370",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 31,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0111",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0091",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0371",
    "name": "Barra_Volatility_Exposure_Factor_371",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 32,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0114",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0098",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0372",
    "name": "Barra_Liquidity_Exposure_Factor_372",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 33,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0117",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0105",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0373",
    "name": "Barra_Quality_Exposure_Factor_373",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 34,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0120",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0112",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0374",
    "name": "Barra_Growth_Exposure_Factor_374",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 35,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0123",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0119",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0375",
    "name": "Barra_Leverage_Exposure_Factor_375",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 36,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0126",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0126",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0376",
    "name": "Barra_Size_Exposure_Factor_376",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 37,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0129",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0133",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0377",
    "name": "Barra_Value_Exposure_Factor_377",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 38,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0132",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0140",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0378",
    "name": "Barra_Momentum_Exposure_Factor_378",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 39,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0135",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0147",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0379",
    "name": "Barra_Volatility_Exposure_Factor_379",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 40,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0138",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0154",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0380",
    "name": "Barra_Liquidity_Exposure_Factor_380",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 41,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0141",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0161",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0381",
    "name": "Barra_Quality_Exposure_Factor_381",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 42,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0144",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0168",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0382",
    "name": "Barra_Growth_Exposure_Factor_382",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 43,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0147",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0175",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0383",
    "name": "Barra_Leverage_Exposure_Factor_383",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 44,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0150",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0182",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0384",
    "name": "Barra_Size_Exposure_Factor_384",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 45,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0153",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0189",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0385",
    "name": "Barra_Value_Exposure_Factor_385",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 46,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0156",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0196",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0386",
    "name": "Barra_Momentum_Exposure_Factor_386",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 47,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0159",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0203",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0387",
    "name": "Barra_Volatility_Exposure_Factor_387",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 48,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0162",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0210",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0388",
    "name": "Barra_Liquidity_Exposure_Factor_388",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 49,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0165",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0217",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0389",
    "name": "Barra_Quality_Exposure_Factor_389",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 50,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0168",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0224",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0390",
    "name": "Barra_Growth_Exposure_Factor_390",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 51,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0171",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0231",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0391",
    "name": "Barra_Leverage_Exposure_Factor_391",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 52,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0174",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0238",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0392",
    "name": "Barra_Size_Exposure_Factor_392",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 53,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0177",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0245",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0393",
    "name": "Barra_Value_Exposure_Factor_393",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 54,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0180",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0252",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0394",
    "name": "Barra_Momentum_Exposure_Factor_394",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 55,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0183",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0259",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0395",
    "name": "Barra_Volatility_Exposure_Factor_395",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 56,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0186",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0266",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0396",
    "name": "Barra_Liquidity_Exposure_Factor_396",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 57,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0189",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0273",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0397",
    "name": "Barra_Quality_Exposure_Factor_397",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 58,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0192",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0280",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0398",
    "name": "Barra_Growth_Exposure_Factor_398",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 59,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0195",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0287",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0399",
    "name": "Barra_Leverage_Exposure_Factor_399",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 60,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0198",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0294",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0400",
    "name": "Barra_Size_Exposure_Factor_400",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.08,
    "sharpe": 0.55,
    "decayHalfLifeDays": 61,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0201",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0301",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0401",
    "name": "Barra_Value_Exposure_Factor_401",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.085,
    "sharpe": 0.65,
    "decayHalfLifeDays": 62,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0204",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0308",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0402",
    "name": "Barra_Momentum_Exposure_Factor_402",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.09,
    "sharpe": 0.75,
    "decayHalfLifeDays": 63,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0207",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0315",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0403",
    "name": "Barra_Volatility_Exposure_Factor_403",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.095,
    "sharpe": 0.85,
    "decayHalfLifeDays": 64,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0210",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0322",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0404",
    "name": "Barra_Liquidity_Exposure_Factor_404",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.1,
    "sharpe": 0.95,
    "decayHalfLifeDays": 65,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0213",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0329",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0405",
    "name": "Barra_Quality_Exposure_Factor_405",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.045,
    "factorVol": 0.105,
    "sharpe": 1.05,
    "decayHalfLifeDays": 66,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0216",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0336",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0406",
    "name": "Barra_Growth_Exposure_Factor_406",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.05,
    "factorVol": 0.11,
    "sharpe": 1.15,
    "decayHalfLifeDays": 67,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0219",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0343",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0407",
    "name": "Barra_Leverage_Exposure_Factor_407",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.055,
    "factorVol": 0.115,
    "sharpe": 1.25,
    "decayHalfLifeDays": 68,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0222",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0350",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0408",
    "name": "Barra_Size_Exposure_Factor_408",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.06,
    "factorVol": 0.12,
    "sharpe": 1.35,
    "decayHalfLifeDays": 69,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0225",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0357",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0409",
    "name": "Barra_Value_Exposure_Factor_409",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.065,
    "factorVol": 0.125,
    "sharpe": 1.45,
    "decayHalfLifeDays": 70,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0228",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0364",
        "exposure": -0.71
      }
    ]
  },
  {
    "factorId": "FACTOR_0410",
    "name": "Barra_Momentum_Exposure_Factor_410",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.07,
    "factorVol": 0.13,
    "sharpe": 0.55,
    "decayHalfLifeDays": 71,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0231",
        "exposure": 0.45
      },
      {
        "symbol": "EQ_FIN_0371",
        "exposure": -0.35
      }
    ]
  },
  {
    "factorId": "FACTOR_0411",
    "name": "Barra_Volatility_Exposure_Factor_411",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.075,
    "factorVol": 0.135,
    "sharpe": 0.65,
    "decayHalfLifeDays": 72,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0234",
        "exposure": 0.5
      },
      {
        "symbol": "EQ_FIN_0378",
        "exposure": -0.39
      }
    ]
  },
  {
    "factorId": "FACTOR_0412",
    "name": "Barra_Liquidity_Exposure_Factor_412",
    "styleCategory": "Liquidity",
    "factorReturnAnnualized": 0.08,
    "factorVol": 0.14,
    "sharpe": 0.75,
    "decayHalfLifeDays": 73,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0237",
        "exposure": 0.55
      },
      {
        "symbol": "EQ_FIN_0385",
        "exposure": -0.43
      }
    ]
  },
  {
    "factorId": "FACTOR_0413",
    "name": "Barra_Quality_Exposure_Factor_413",
    "styleCategory": "Quality",
    "factorReturnAnnualized": 0.085,
    "factorVol": 0.145,
    "sharpe": 0.85,
    "decayHalfLifeDays": 74,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0240",
        "exposure": 0.6
      },
      {
        "symbol": "EQ_FIN_0392",
        "exposure": -0.47
      }
    ]
  },
  {
    "factorId": "FACTOR_0414",
    "name": "Barra_Growth_Exposure_Factor_414",
    "styleCategory": "Growth",
    "factorReturnAnnualized": 0.09,
    "factorVol": 0.15,
    "sharpe": 0.95,
    "decayHalfLifeDays": 75,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0243",
        "exposure": 0.65
      },
      {
        "symbol": "EQ_FIN_0399",
        "exposure": -0.51
      }
    ]
  },
  {
    "factorId": "FACTOR_0415",
    "name": "Barra_Leverage_Exposure_Factor_415",
    "styleCategory": "Leverage",
    "factorReturnAnnualized": 0.095,
    "factorVol": 0.155,
    "sharpe": 1.05,
    "decayHalfLifeDays": 76,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0246",
        "exposure": 0.7
      },
      {
        "symbol": "EQ_FIN_0406",
        "exposure": -0.55
      }
    ]
  },
  {
    "factorId": "FACTOR_0416",
    "name": "Barra_Size_Exposure_Factor_416",
    "styleCategory": "Size",
    "factorReturnAnnualized": 0.1,
    "factorVol": 0.16,
    "sharpe": 1.15,
    "decayHalfLifeDays": 77,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0249",
        "exposure": 0.75
      },
      {
        "symbol": "EQ_FIN_0413",
        "exposure": -0.59
      }
    ]
  },
  {
    "factorId": "FACTOR_0417",
    "name": "Barra_Value_Exposure_Factor_417",
    "styleCategory": "Value",
    "factorReturnAnnualized": 0.105,
    "factorVol": 0.165,
    "sharpe": 1.25,
    "decayHalfLifeDays": 78,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0252",
        "exposure": 0.8
      },
      {
        "symbol": "EQ_FIN_0420",
        "exposure": -0.63
      }
    ]
  },
  {
    "factorId": "FACTOR_0418",
    "name": "Barra_Momentum_Exposure_Factor_418",
    "styleCategory": "Momentum",
    "factorReturnAnnualized": 0.11,
    "factorVol": 0.17,
    "sharpe": 1.35,
    "decayHalfLifeDays": 79,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0255",
        "exposure": 0.85
      },
      {
        "symbol": "EQ_FIN_0427",
        "exposure": -0.67
      }
    ]
  },
  {
    "factorId": "FACTOR_0419",
    "name": "Barra_Volatility_Exposure_Factor_419",
    "styleCategory": "Volatility",
    "factorReturnAnnualized": 0.115,
    "factorVol": 0.175,
    "sharpe": 1.45,
    "decayHalfLifeDays": 80,
    "assetWeights": [
      {
        "symbol": "EQ_TEC_0258",
        "exposure": 0.9
      },
      {
        "symbol": "EQ_FIN_0434",
        "exposure": -0.71
      }
    ]
  }
];
