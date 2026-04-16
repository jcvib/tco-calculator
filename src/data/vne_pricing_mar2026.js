// Orange Business VNE Pricing Data
// Source: VNEpricing1_3.xlsx
// Généré le: 2026-03-31 15:54:48
//
// Structure VNE_PRICING :
//   .hosting[Country][Config]["1 month"|"12 months"|"24 months"|"36 months"]
//   .internet[Country][BW]["1 month"|"12 months"|"24 months"|"36 months"]
//   .mpls[Country][BW]["1 month"|"12 months"|"24 months"|"36 months"]
//   .ip_address.proposed_per_unit / .list_price_row / .list_price_china
//
// Prix total VNE = Hosting + Internet + MPLS + IP Address (1 unité)
//
// 24 pays (Hosting), 26 pays (Internet/MPLS)
// Périodes de commitment : 1 mois, 12 mois, 24 mois, 36 mois

export const VNE_PRICING = {
  "hosting": {
    "Australia": {
      "1vCPU_2GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 210.84,
        "36 months": 188.25
      },
      "1vCPU_4GB_64GB": {
        "1 month": 259.65,
        "12 months": 238.88,
        "24 months": 218.11,
        "36 months": 194.74
      },
      "2vCPU_4GB_64GB": {
        "1 month": 527.96,
        "12 months": 485.72,
        "24 months": 443.48,
        "36 months": 395.97
      },
      "2vCPU_8GB_64GB": {
        "1 month": 588.54,
        "12 months": 541.46,
        "24 months": 494.37,
        "36 months": 441.41
      },
      "4vCPU_4GB_64GB": {
        "1 month": 718.37,
        "12 months": 660.9,
        "24 months": 603.43,
        "36 months": 538.77
      },
      "4vCPU_8GB_64GB": {
        "1 month": 787.61,
        "12 months": 724.6,
        "24 months": 661.59,
        "36 months": 590.7
      },
      "4vCPU_16GB_64GB": {
        "1 month": 848.19,
        "12 months": 780.34,
        "24 months": 712.48,
        "36 months": 636.14
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1315.56,
        "12 months": 1210.32,
        "24 months": 1105.07,
        "36 months": 986.67
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1402.11,
        "12 months": 1289.94,
        "24 months": 1177.77,
        "36 months": 1051.58
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2432.06,
        "12 months": 2237.49,
        "24 months": 2042.93,
        "36 months": 1824.04
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2596.5,
        "12 months": 2388.78,
        "24 months": 2181.06,
        "36 months": 1947.38
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2752.29,
        "12 months": 2532.11,
        "24 months": 2311.93,
        "36 months": 2064.22
      }
    },
    "Brazil": {
      "1vCPU_2GB_64GB": {
        "1 month": 311.58,
        "12 months": 286.65,
        "24 months": 261.73,
        "36 months": 233.69
      },
      "1vCPU_4GB_64GB": {
        "1 month": 328.89,
        "12 months": 302.58,
        "24 months": 276.27,
        "36 months": 246.67
      },
      "2vCPU_4GB_64GB": {
        "1 month": 649.13,
        "12 months": 597.2,
        "24 months": 545.27,
        "36 months": 486.84
      },
      "2vCPU_8GB_64GB": {
        "1 month": 735.68,
        "12 months": 676.82,
        "24 months": 617.97,
        "36 months": 551.76
      },
      "4vCPU_4GB_64GB": {
        "1 month": 891.47,
        "12 months": 820.15,
        "24 months": 748.83,
        "36 months": 668.6
      },
      "4vCPU_8GB_64GB": {
        "1 month": 978.02,
        "12 months": 899.77,
        "24 months": 821.53,
        "36 months": 733.51
      },
      "4vCPU_16GB_64GB": {
        "1 month": 1047.26,
        "12 months": 963.48,
        "24 months": 879.7,
        "36 months": 785.44
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1635.8,
        "12 months": 1504.93,
        "24 months": 1374.07,
        "36 months": 1226.85
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1731,
        "12 months": 1592.52,
        "24 months": 1454.04,
        "36 months": 1298.25
      },
      "16vCPU_16GB_64GB": {
        "1 month": 3011.94,
        "12 months": 2770.99,
        "24 months": 2530.03,
        "36 months": 2258.96
      },
      "16vCPU_32GB_64GB": {
        "1 month": 3219.66,
        "12 months": 2962.09,
        "24 months": 2704.52,
        "36 months": 2414.75
      },
      "16vCPU_64GB_64GB": {
        "1 month": 3410.07,
        "12 months": 3137.27,
        "24 months": 2864.46,
        "36 months": 2557.56
      }
    },
    "Canada": {
      "1vCPU_2GB_64GB": {
        "1 month": 268.31,
        "12 months": 246.84,
        "24 months": 225.38,
        "36 months": 201.23
      },
      "1vCPU_4GB_64GB": {
        "1 month": 276.96,
        "12 months": 254.8,
        "24 months": 232.65,
        "36 months": 207.72
      },
      "2vCPU_4GB_64GB": {
        "1 month": 553.92,
        "12 months": 509.61,
        "24 months": 465.29,
        "36 months": 415.44
      },
      "2vCPU_8GB_64GB": {
        "1 month": 623.16,
        "12 months": 573.31,
        "24 months": 523.46,
        "36 months": 467.37
      },
      "4vCPU_4GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 632.51,
        "36 months": 564.74
      },
      "4vCPU_8GB_64GB": {
        "1 month": 830.88,
        "12 months": 764.41,
        "24 months": 697.94,
        "36 months": 623.16
      },
      "4vCPU_16GB_64GB": {
        "1 month": 882.81,
        "12 months": 812.19,
        "24 months": 741.56,
        "36 months": 662.11
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1384.8,
        "12 months": 1274.02,
        "24 months": 1163.23,
        "36 months": 1038.6
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1462.7,
        "12 months": 1345.68,
        "24 months": 1228.67,
        "36 months": 1097.02
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2553.23,
        "12 months": 2348.97,
        "24 months": 2144.71,
        "36 months": 1914.92
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2726.33,
        "12 months": 2508.22,
        "24 months": 2290.12,
        "36 months": 2044.75
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2882.12,
        "12 months": 2651.55,
        "24 months": 2420.98,
        "36 months": 2161.59
      }
    },
    "Switzerland": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 203.57,
        "36 months": 181.76
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 210.84,
        "36 months": 188.25
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 421.67,
        "36 months": 376.49
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 472.56,
        "36 months": 421.93
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 574.35,
        "36 months": 512.81
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 632.51,
        "36 months": 564.74
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 676.13,
        "36 months": 603.69
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1054.18,
        "36 months": 941.23
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1119.61,
        "36 months": 999.65
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 1948.42,
        "36 months": 1739.66
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2079.28,
        "36 months": 1856.5
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2202.87,
        "36 months": 1966.85
      }
    },
    "Germany": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 203.57,
        "36 months": 181.76
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 210.84,
        "36 months": 188.25
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 421.67,
        "36 months": 376.49
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 472.56,
        "36 months": 421.93
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 574.35,
        "36 months": 512.81
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 632.51,
        "36 months": 564.74
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 676.13,
        "36 months": 603.69
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1054.18,
        "36 months": 941.23
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1119.61,
        "36 months": 999.65
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 1948.42,
        "36 months": 1739.66
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2079.28,
        "36 months": 1856.5
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2202.87,
        "36 months": 1966.85
      }
    },
    "France": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 203.57,
        "36 months": 181.76
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 210.84,
        "36 months": 188.25
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 421.67,
        "36 months": 376.49
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 472.56,
        "36 months": 421.93
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 574.35,
        "36 months": 512.81
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 632.51,
        "36 months": 564.74
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 676.13,
        "36 months": 603.69
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1054.18,
        "36 months": 941.23
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1119.61,
        "36 months": 999.65
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 1948.42,
        "36 months": 1739.66
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2079.28,
        "36 months": 1856.5
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2202.87,
        "36 months": 1966.85
      }
    },
    "United Kingdom": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 203.57,
        "36 months": 181.76
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 210.84,
        "36 months": 188.25
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 421.67,
        "36 months": 376.49
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 472.56,
        "36 months": 421.93
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 574.35,
        "36 months": 512.81
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 632.51,
        "36 months": 564.74
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 676.13,
        "36 months": 603.69
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1054.18,
        "36 months": 941.23
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1119.61,
        "36 months": 999.65
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 1948.42,
        "36 months": 1739.66
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2079.28,
        "36 months": 1856.5
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2202.87,
        "36 months": 1966.85
      }
    },
    "India": {
      "1vCPU_2GB_64GB": {
        "1 month": 294.27,
        "12 months": 270.73,
        "24 months": 247.19,
        "36 months": 220.7
      },
      "1vCPU_4GB_64GB": {
        "1 month": 302.93,
        "12 months": 278.69,
        "24 months": 254.46,
        "36 months": 227.19
      },
      "2vCPU_4GB_64GB": {
        "1 month": 605.85,
        "12 months": 557.38,
        "24 months": 508.91,
        "36 months": 454.39
      },
      "2vCPU_8GB_64GB": {
        "1 month": 675.09,
        "12 months": 621.08,
        "24 months": 567.08,
        "36 months": 506.32
      },
      "4vCPU_4GB_64GB": {
        "1 month": 822.23,
        "12 months": 756.45,
        "24 months": 690.67,
        "36 months": 616.67
      },
      "4vCPU_8GB_64GB": {
        "1 month": 900.12,
        "12 months": 828.11,
        "24 months": 756.1,
        "36 months": 675.09
      },
      "4vCPU_16GB_64GB": {
        "1 month": 969.36,
        "12 months": 891.81,
        "24 months": 814.26,
        "36 months": 727.02
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1505.97,
        "12 months": 1385.49,
        "24 months": 1265.02,
        "36 months": 1129.48
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1601.18,
        "12 months": 1473.08,
        "24 months": 1344.99,
        "36 months": 1200.88
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2786.91,
        "12 months": 2563.96,
        "24 months": 2341.01,
        "36 months": 2090.19
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2968.67,
        "12 months": 2731.18,
        "24 months": 2493.68,
        "36 months": 2226.5
      },
      "16vCPU_64GB_64GB": {
        "1 month": 3150.42,
        "12 months": 2898.39,
        "24 months": 2646.36,
        "36 months": 2362.82
      }
    },
    "Japan": {
      "1vCPU_2GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 210.84,
        "36 months": 188.25
      },
      "1vCPU_4GB_64GB": {
        "1 month": 259.65,
        "12 months": 238.88,
        "24 months": 218.11,
        "36 months": 194.74
      },
      "2vCPU_4GB_64GB": {
        "1 month": 527.96,
        "12 months": 485.72,
        "24 months": 443.48,
        "36 months": 395.97
      },
      "2vCPU_8GB_64GB": {
        "1 month": 588.54,
        "12 months": 541.46,
        "24 months": 494.37,
        "36 months": 441.41
      },
      "4vCPU_4GB_64GB": {
        "1 month": 718.37,
        "12 months": 660.9,
        "24 months": 603.43,
        "36 months": 538.77
      },
      "4vCPU_8GB_64GB": {
        "1 month": 787.61,
        "12 months": 724.6,
        "24 months": 661.59,
        "36 months": 590.7
      },
      "4vCPU_16GB_64GB": {
        "1 month": 848.19,
        "12 months": 780.34,
        "24 months": 712.48,
        "36 months": 636.14
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1315.56,
        "12 months": 1210.32,
        "24 months": 1105.07,
        "36 months": 986.67
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1402.11,
        "12 months": 1289.94,
        "24 months": 1177.77,
        "36 months": 1051.58
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2432.06,
        "12 months": 2237.49,
        "24 months": 2042.93,
        "36 months": 1824.04
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2596.5,
        "12 months": 2388.78,
        "24 months": 2181.06,
        "36 months": 1947.38
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2752.29,
        "12 months": 2532.11,
        "24 months": 2311.93,
        "36 months": 2064.22
      }
    },
    "Netherlands": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 203.57,
        "36 months": 181.76
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 210.84,
        "36 months": 188.25
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 421.67,
        "36 months": 376.49
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 472.56,
        "36 months": 421.93
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 574.35,
        "36 months": 512.81
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 632.51,
        "36 months": 564.74
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 676.13,
        "36 months": 603.69
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1054.18,
        "36 months": 941.23
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1119.61,
        "36 months": 999.65
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 1948.42,
        "36 months": 1739.66
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2079.28,
        "36 months": 1856.5
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2202.87,
        "36 months": 1966.85
      }
    },
    "Singapore": {
      "1vCPU_2GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 210.84,
        "36 months": 188.25
      },
      "1vCPU_4GB_64GB": {
        "1 month": 259.65,
        "12 months": 238.88,
        "24 months": 218.11,
        "36 months": 194.74
      },
      "2vCPU_4GB_64GB": {
        "1 month": 527.96,
        "12 months": 485.72,
        "24 months": 443.48,
        "36 months": 395.97
      },
      "2vCPU_8GB_64GB": {
        "1 month": 588.54,
        "12 months": 541.46,
        "24 months": 494.37,
        "36 months": 441.41
      },
      "4vCPU_4GB_64GB": {
        "1 month": 718.37,
        "12 months": 660.9,
        "24 months": 603.43,
        "36 months": 538.77
      },
      "4vCPU_8GB_64GB": {
        "1 month": 787.61,
        "12 months": 724.6,
        "24 months": 661.59,
        "36 months": 590.7
      },
      "4vCPU_16GB_64GB": {
        "1 month": 848.19,
        "12 months": 780.34,
        "24 months": 712.48,
        "36 months": 636.14
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1315.56,
        "12 months": 1210.32,
        "24 months": 1105.07,
        "36 months": 986.67
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1402.11,
        "12 months": 1289.94,
        "24 months": 1177.77,
        "36 months": 1051.58
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2432.06,
        "12 months": 2237.49,
        "24 months": 2042.93,
        "36 months": 1824.04
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2596.5,
        "12 months": 2388.78,
        "24 months": 2181.06,
        "36 months": 1947.38
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2752.29,
        "12 months": 2532.11,
        "24 months": 2311.93,
        "36 months": 2064.22
      }
    },
    "United States": {
      "1vCPU_2GB_64GB": {
        "1 month": 268.31,
        "12 months": 246.84,
        "24 months": 225.38,
        "36 months": 201.23
      },
      "1vCPU_4GB_64GB": {
        "1 month": 276.96,
        "12 months": 254.8,
        "24 months": 232.65,
        "36 months": 207.72
      },
      "2vCPU_4GB_64GB": {
        "1 month": 553.92,
        "12 months": 509.61,
        "24 months": 465.29,
        "36 months": 415.44
      },
      "2vCPU_8GB_64GB": {
        "1 month": 623.16,
        "12 months": 573.31,
        "24 months": 523.46,
        "36 months": 467.37
      },
      "4vCPU_4GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 632.51,
        "36 months": 564.74
      },
      "4vCPU_8GB_64GB": {
        "1 month": 830.88,
        "12 months": 764.41,
        "24 months": 697.94,
        "36 months": 623.16
      },
      "4vCPU_16GB_64GB": {
        "1 month": 882.81,
        "12 months": 812.19,
        "24 months": 741.56,
        "36 months": 662.11
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1384.8,
        "12 months": 1274.02,
        "24 months": 1163.23,
        "36 months": 1038.6
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1462.7,
        "12 months": 1345.68,
        "24 months": 1228.67,
        "36 months": 1097.02
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2553.23,
        "12 months": 2348.97,
        "24 months": 2144.71,
        "36 months": 1914.92
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2726.33,
        "12 months": 2508.22,
        "24 months": 2290.12,
        "36 months": 2044.75
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2882.12,
        "12 months": 2651.55,
        "24 months": 2420.98,
        "36 months": 2161.59
      }
    },
    "South Africa": {
      "1vCPU_2GB_64GB": {
        "1 month": 268.31,
        "12 months": 246.84,
        "24 months": 225.38,
        "36 months": 201.23
      },
      "1vCPU_4GB_64GB": {
        "1 month": 276.96,
        "12 months": 254.8,
        "24 months": 232.65,
        "36 months": 207.72
      },
      "2vCPU_4GB_64GB": {
        "1 month": 553.92,
        "12 months": 509.61,
        "24 months": 465.29,
        "36 months": 415.44
      },
      "2vCPU_8GB_64GB": {
        "1 month": 623.16,
        "12 months": 573.31,
        "24 months": 523.46,
        "36 months": 467.37
      },
      "4vCPU_4GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 632.51,
        "36 months": 564.74
      },
      "4vCPU_8GB_64GB": {
        "1 month": 830.88,
        "12 months": 764.41,
        "24 months": 697.94,
        "36 months": 623.16
      },
      "4vCPU_16GB_64GB": {
        "1 month": 882.81,
        "12 months": 812.19,
        "24 months": 741.56,
        "36 months": 662.11
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1384.8,
        "12 months": 1274.02,
        "24 months": 1163.23,
        "36 months": 1038.6
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1462.7,
        "12 months": 1345.68,
        "24 months": 1228.67,
        "36 months": 1097.02
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2553.23,
        "12 months": 2348.97,
        "24 months": 2144.71,
        "36 months": 1914.92
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2726.33,
        "12 months": 2508.22,
        "24 months": 2290.12,
        "36 months": 2044.75
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2882.12,
        "12 months": 2651.55,
        "24 months": 2420.98,
        "36 months": 2161.59
      }
    },
    "Hong Kong": {
      "1vCPU_2GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 210.84,
        "36 months": 188.25
      },
      "1vCPU_4GB_64GB": {
        "1 month": 259.65,
        "12 months": 238.88,
        "24 months": 218.11,
        "36 months": 194.74
      },
      "2vCPU_4GB_64GB": {
        "1 month": 527.96,
        "12 months": 485.72,
        "24 months": 443.48,
        "36 months": 395.97
      },
      "2vCPU_8GB_64GB": {
        "1 month": 588.54,
        "12 months": 541.46,
        "24 months": 494.37,
        "36 months": 441.41
      },
      "4vCPU_4GB_64GB": {
        "1 month": 718.37,
        "12 months": 660.9,
        "24 months": 603.43,
        "36 months": 538.77
      },
      "4vCPU_8GB_64GB": {
        "1 month": 787.61,
        "12 months": 724.6,
        "24 months": 661.59,
        "36 months": 590.7
      },
      "4vCPU_16GB_64GB": {
        "1 month": 848.19,
        "12 months": 780.34,
        "24 months": 712.48,
        "36 months": 636.14
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1315.56,
        "12 months": 1210.32,
        "24 months": 1105.07,
        "36 months": 986.67
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1402.11,
        "12 months": 1289.94,
        "24 months": 1177.77,
        "36 months": 1051.58
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2432.06,
        "12 months": 2237.49,
        "24 months": 2042.93,
        "36 months": 1824.04
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2596.5,
        "12 months": 2388.78,
        "24 months": 2181.06,
        "36 months": 1947.38
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2752.29,
        "12 months": 2532.11,
        "24 months": 2311.93,
        "36 months": 2064.22
      }
    },
    "South Korea": {
      "1vCPU_2GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "1vCPU_4GB_64GB": {
        "1 month": 259.65,
        "12 months": 238.88,
        "24 months": 237.07,
        "36 months": 231.83
      },
      "2vCPU_4GB_64GB": {
        "1 month": 527.96,
        "12 months": 485.72,
        "24 months": 482.05,
        "36 months": 471.39
      },
      "2vCPU_8GB_64GB": {
        "1 month": 588.54,
        "12 months": 541.46,
        "24 months": 537.36,
        "36 months": 525.48
      },
      "4vCPU_4GB_64GB": {
        "1 month": 718.37,
        "12 months": 660.9,
        "24 months": 655.9,
        "36 months": 641.4
      },
      "4vCPU_8GB_64GB": {
        "1 month": 787.61,
        "12 months": 724.6,
        "24 months": 719.12,
        "36 months": 703.22
      },
      "4vCPU_16GB_64GB": {
        "1 month": 848.19,
        "12 months": 780.34,
        "24 months": 774.44,
        "36 months": 757.31
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1315.56,
        "12 months": 1210.32,
        "24 months": 1201.17,
        "36 months": 1174.61
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1402.11,
        "12 months": 1289.94,
        "24 months": 1280.19,
        "36 months": 1251.89
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2432.06,
        "12 months": 2237.49,
        "24 months": 2220.57,
        "36 months": 2171.48
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2596.5,
        "12 months": 2388.78,
        "24 months": 2370.72,
        "36 months": 2318.31
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2752.29,
        "12 months": 2532.11,
        "24 months": 2512.96,
        "36 months": 2457.4
      }
    },
    "Taiwan": {
      "1vCPU_2GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "1vCPU_4GB_64GB": {
        "1 month": 259.65,
        "12 months": 238.88,
        "24 months": 237.07,
        "36 months": 231.83
      },
      "2vCPU_4GB_64GB": {
        "1 month": 527.96,
        "12 months": 485.72,
        "24 months": 482.05,
        "36 months": 471.39
      },
      "2vCPU_8GB_64GB": {
        "1 month": 588.54,
        "12 months": 541.46,
        "24 months": 537.36,
        "36 months": 525.48
      },
      "4vCPU_4GB_64GB": {
        "1 month": 718.37,
        "12 months": 660.9,
        "24 months": 655.9,
        "36 months": 641.4
      },
      "4vCPU_8GB_64GB": {
        "1 month": 787.61,
        "12 months": 724.6,
        "24 months": 719.12,
        "36 months": 703.22
      },
      "4vCPU_16GB_64GB": {
        "1 month": 848.19,
        "12 months": 780.34,
        "24 months": 774.44,
        "36 months": 757.31
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1315.56,
        "12 months": 1210.32,
        "24 months": 1201.17,
        "36 months": 1174.61
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1402.11,
        "12 months": 1289.94,
        "24 months": 1280.19,
        "36 months": 1251.89
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2432.06,
        "12 months": 2237.49,
        "24 months": 2220.57,
        "36 months": 2171.48
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2596.5,
        "12 months": 2388.78,
        "24 months": 2370.72,
        "36 months": 2318.31
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2752.29,
        "12 months": 2532.11,
        "24 months": 2512.96,
        "36 months": 2457.4
      }
    },
    "Ireland": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 221.27,
        "36 months": 216.38
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 458.34,
        "36 months": 448.21
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 513.66,
        "36 months": 502.3
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 624.29,
        "36 months": 610.49
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 687.51,
        "36 months": 672.31
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 734.92,
        "36 months": 718.68
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1145.85,
        "36 months": 1120.51
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1216.97,
        "36 months": 1190.06
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 2117.84,
        "36 months": 2071.02
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2260.09,
        "36 months": 2210.12
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2394.43,
        "36 months": 2341.49
      }
    },
    "Italy": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 221.27,
        "36 months": 216.38
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 458.34,
        "36 months": 448.21
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 513.66,
        "36 months": 502.3
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 624.29,
        "36 months": 610.49
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 687.51,
        "36 months": 672.31
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 734.92,
        "36 months": 718.68
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1145.85,
        "36 months": 1120.51
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1216.97,
        "36 months": 1190.06
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 2117.84,
        "36 months": 2071.02
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2260.09,
        "36 months": 2210.12
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2394.43,
        "36 months": 2341.49
      }
    },
    "Spain": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 221.27,
        "36 months": 216.38
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 458.34,
        "36 months": 448.21
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 513.66,
        "36 months": 502.3
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 624.29,
        "36 months": 610.49
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 687.51,
        "36 months": 672.31
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 734.92,
        "36 months": 718.68
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1145.85,
        "36 months": 1120.51
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1216.97,
        "36 months": 1190.06
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 2117.84,
        "36 months": 2071.02
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2260.09,
        "36 months": 2210.12
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2394.43,
        "36 months": 2341.49
      }
    },
    "Norway": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 221.27,
        "36 months": 216.38
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 458.34,
        "36 months": 448.21
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 513.66,
        "36 months": 502.3
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 624.29,
        "36 months": 610.49
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 687.51,
        "36 months": 672.31
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 734.92,
        "36 months": 718.68
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1145.85,
        "36 months": 1120.51
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1216.97,
        "36 months": 1190.06
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 2117.84,
        "36 months": 2071.02
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2260.09,
        "36 months": 2210.12
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2394.43,
        "36 months": 2341.49
      }
    },
    "Austria": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 221.27,
        "36 months": 216.38
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 458.34,
        "36 months": 448.21
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 513.66,
        "36 months": 502.3
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 624.29,
        "36 months": 610.49
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 687.51,
        "36 months": 672.31
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 734.92,
        "36 months": 718.68
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1145.85,
        "36 months": 1120.51
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1216.97,
        "36 months": 1190.06
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 2117.84,
        "36 months": 2071.02
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2260.09,
        "36 months": 2210.12
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2394.43,
        "36 months": 2341.49
      }
    },
    "Poland": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 221.27,
        "36 months": 216.38
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 458.34,
        "36 months": 448.21
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 513.66,
        "36 months": 502.3
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 624.29,
        "36 months": 610.49
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 687.51,
        "36 months": 672.31
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 734.92,
        "36 months": 718.68
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1145.85,
        "36 months": 1120.51
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1216.97,
        "36 months": 1190.06
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 2117.84,
        "36 months": 2071.02
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2260.09,
        "36 months": 2210.12
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2394.43,
        "36 months": 2341.49
      }
    },
    "Bahrain": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 221.27,
        "36 months": 216.38
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 458.34,
        "36 months": 448.21
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 513.66,
        "36 months": 502.3
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 624.29,
        "36 months": 610.49
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 687.51,
        "36 months": 672.31
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 734.92,
        "36 months": 718.68
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1145.85,
        "36 months": 1120.51
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1216.97,
        "36 months": 1190.06
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 2117.84,
        "36 months": 2071.02
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2260.09,
        "36 months": 2210.12
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2394.43,
        "36 months": 2341.49
      }
    },
    "United Arab Emirates": {
      "1vCPU_2GB_64GB": {
        "1 month": 242.34,
        "12 months": 222.95,
        "24 months": 221.27,
        "36 months": 216.38
      },
      "1vCPU_4GB_64GB": {
        "1 month": 251,
        "12 months": 230.92,
        "24 months": 229.17,
        "36 months": 224.1
      },
      "2vCPU_4GB_64GB": {
        "1 month": 501.99,
        "12 months": 461.83,
        "24 months": 458.34,
        "36 months": 448.21
      },
      "2vCPU_8GB_64GB": {
        "1 month": 562.58,
        "12 months": 517.57,
        "24 months": 513.66,
        "36 months": 502.3
      },
      "4vCPU_4GB_64GB": {
        "1 month": 683.75,
        "12 months": 629.05,
        "24 months": 624.29,
        "36 months": 610.49
      },
      "4vCPU_8GB_64GB": {
        "1 month": 752.99,
        "12 months": 692.75,
        "24 months": 687.51,
        "36 months": 672.31
      },
      "4vCPU_16GB_64GB": {
        "1 month": 804.92,
        "12 months": 740.52,
        "24 months": 734.92,
        "36 months": 718.68
      },
      "8vCPU_16GB_64GB": {
        "1 month": 1254.98,
        "12 months": 1154.58,
        "24 months": 1145.85,
        "36 months": 1120.51
      },
      "8vCPU_32GB_64GB": {
        "1 month": 1332.87,
        "12 months": 1226.24,
        "24 months": 1216.97,
        "36 months": 1190.06
      },
      "16vCPU_16GB_64GB": {
        "1 month": 2319.54,
        "12 months": 2133.98,
        "24 months": 2117.84,
        "36 months": 2071.02
      },
      "16vCPU_32GB_64GB": {
        "1 month": 2475.33,
        "12 months": 2277.31,
        "24 months": 2260.09,
        "36 months": 2210.12
      },
      "16vCPU_64GB_64GB": {
        "1 month": 2622.47,
        "12 months": 2412.67,
        "24 months": 2394.43,
        "36 months": 2341.49
      }
    }
  },
  "internet": {
    "Australia": {
      "10M": {
        "1 month": 55.68,
        "12 months": 50.76,
        "24 months": 46.34,
        "36 months": 55.16920546996711
      },
      "20M": {
        "1 month": 80.29,
        "12 months": 73.18,
        "24 months": 66.82,
        "36 months": 59.661156309503205
      },
      "50M": {
        "1 month": 130.25,
        "12 months": 118.72,
        "24 months": 108.4,
        "36 months": 96.78466332006231
      },
      "100M": {
        "1 month": 187.82,
        "12 months": 171.19,
        "24 months": 156.3,
        "36 months": 139.55718798684438
      },
      "200M": {
        "1 month": 270.82,
        "12 months": 246.84,
        "24 months": 225.38,
        "36 months": 201.23063441232472
      },
      "300M": {
        "1 month": 335.47,
        "12 months": 305.77,
        "24 months": 279.18,
        "36 months": 249.2708153020599
      },
      "400M": {
        "1 month": 390.5,
        "12 months": 355.93,
        "24 months": 324.98,
        "36 months": 290.16087502163754
      },
      "500M": {
        "1 month": 439.8,
        "12 months": 400.44,
        "24 months": 365.62,
        "36 months": 326.44376406439324
      },
      "1G": {
        "1 month": 631.38,
        "12 months": 580.53,
        "24 months": 530.05,
        "36 months": 473.2549333564134
      },
      "2G": {
        "1 month": 716.27,
        "12 months": 658.58,
        "24 months": 601.31,
        "36 months": 536.8871170157522
      },
      "5G": {
        "1 month": 846.26,
        "12 months": 778.1,
        "24 months": 710.44,
        "36 months": 634.3192833650684
      },
      "10G": {
        "1 month": 960.04,
        "12 months": 882.72,
        "24 months": 805.96,
        "36 months": 719.6079279903064
      }
    },
    "Brazil": {
      "10M": {
        "1 month": 92.44,
        "12 months": 85.91,
        "24 months": 78.44,
        "36 months": 70.03418729444348
      },
      "20M": {
        "1 month": 130.73,
        "12 months": 121.49,
        "24 months": 110.93,
        "36 months": 99.04362125670764
      },
      "50M": {
        "1 month": 206.7,
        "12 months": 192.1,
        "24 months": 175.39,
        "36 months": 156.60160983209278
      },
      "100M": {
        "1 month": 292.32,
        "12 months": 271.67,
        "24 months": 248.05,
        "36 months": 221.46875540938203
      },
      "200M": {
        "1 month": 413.41,
        "12 months": 384.2,
        "24 months": 350.79,
        "36 months": 313.20321966418555
      },
      "300M": {
        "1 month": 506.32,
        "12 months": 470.54,
        "24 months": 429.63,
        "36 months": 383.5944261727541
      },
      "400M": {
        "1 month": 584.65,
        "12 months": 543.33,
        "24 months": 496.09,
        "36 months": 442.9358880041544
      },
      "500M": {
        "1 month": 652.4,
        "12 months": 607.47,
        "24 months": 554.64,
        "36 months": 495.21810628353813
      },
      "1G": {
        "1 month": 875.3,
        "12 months": 865.82,
        "24 months": 790.53,
        "36 months": 705.8286091396918
      },
      "2G": {
        "1 month": 1163,
        "12 months": 1150.4,
        "24 months": 1050.36,
        "36 months": 937.8245629219318
      },
      "5G": {
        "1 month": 1693.31,
        "12 months": 1674.96,
        "24 months": 1529.31,
        "36 months": 1365.4540635277826
      },
      "10G": {
        "1 month": 2249.88,
        "12 months": 2225.49,
        "24 months": 2031.97,
        "36 months": 1814.2596719750734
      }
    },
    "Canada": {
      "10M": {
        "1 month": 48.15,
        "12 months": 45.47,
        "24 months": 41.51,
        "36 months": 37.06670849922105
      },
      "20M": {
        "1 month": 67.02,
        "12 months": 63.28,
        "24 months": 57.78,
        "36 months": 51.59089925566904
      },
      "50M": {
        "1 month": 103.76,
        "12 months": 97.98,
        "24 months": 89.46,
        "36 months": 79.8716894581963
      },
      "100M": {
        "1 month": 144.41,
        "12 months": 136.37,
        "24 months": 124.51,
        "36 months": 111.16929202007962
      },
      "200M": {
        "1 month": 201,
        "12 months": 189.8,
        "24 months": 173.3,
        "36 months": 154.73050458715596
      },
      "300M": {
        "1 month": 243.89,
        "12 months": 230.3,
        "24 months": 210.27,
        "36 months": 187.74504500605855
      },
      "400M": {
        "1 month": 279.77,
        "12 months": 264.18,
        "24 months": 241.2,
        "36 months": 215.36048121862558
      },
      "500M": {
        "1 month": 310.58,
        "12 months": 293.85,
        "24 months": 268.29,
        "36 months": 239.54853297559288
      },
      "1G": {
        "1 month": 440.15,
        "12 months": 409.78,
        "24 months": 374.14,
        "36 months": 334.0580102129133
      },
      "2G": {
        "1 month": 493.14,
        "12 months": 459.11,
        "24 months": 419.19,
        "36 months": 374.2746018694824
      },
      "5G": {
        "1 month": 573.1,
        "12 months": 533.55,
        "24 months": 487.16,
        "36 months": 579.9506664358664
      },
      "10G": {
        "1 month": 713.44,
        "12 months": 733.81,
        "24 months": 733.81,
        "36 months": 733.8129652068548
      }
    },
    "Switzerland": {
      "10M": {
        "1 month": 55.68,
        "12 months": 50.76,
        "24 months": 46.34,
        "36 months": 41.37690410247533
      },
      "20M": {
        "1 month": 80.29,
        "12 months": 73.18,
        "24 months": 66.82,
        "36 months": 59.661156309503205
      },
      "50M": {
        "1 month": 130.25,
        "12 months": 118.72,
        "24 months": 108.4,
        "36 months": 96.78466332006231
      },
      "100M": {
        "1 month": 187.82,
        "12 months": 171.19,
        "24 months": 156.3,
        "36 months": 139.55718798684438
      },
      "200M": {
        "1 month": 270.82,
        "12 months": 246.84,
        "24 months": 225.38,
        "36 months": 201.23063441232472
      },
      "300M": {
        "1 month": 335.47,
        "12 months": 305.77,
        "24 months": 279.18,
        "36 months": 249.2708153020599
      },
      "400M": {
        "1 month": 390.5,
        "12 months": 355.93,
        "24 months": 324.98,
        "36 months": 290.16087502163754
      },
      "500M": {
        "1 month": 439.8,
        "12 months": 400.44,
        "24 months": 365.62,
        "36 months": 326.44376406439324
      },
      "1G": {
        "1 month": 631.38,
        "12 months": 580.53,
        "24 months": 530.05,
        "36 months": 473.2549333564134
      },
      "2G": {
        "1 month": 716.27,
        "12 months": 658.58,
        "24 months": 601.31,
        "36 months": 536.8871170157522
      },
      "5G": {
        "1 month": 846.26,
        "12 months": 778.1,
        "24 months": 710.44,
        "36 months": 634.3192833650684
      },
      "10G": {
        "1 month": 960.04,
        "12 months": 882.72,
        "24 months": 805.96,
        "36 months": 719.6079279903064
      }
    },
    "Germany": {
      "10M": {
        "1 month": 48.15,
        "12 months": 45.47,
        "24 months": 41.51,
        "36 months": 37.06670849922105
      },
      "20M": {
        "1 month": 67.02,
        "12 months": 63.28,
        "24 months": 57.78,
        "36 months": 51.59089925566904
      },
      "50M": {
        "1 month": 103.76,
        "12 months": 97.98,
        "24 months": 89.46,
        "36 months": 79.8716894581963
      },
      "100M": {
        "1 month": 144.41,
        "12 months": 136.37,
        "24 months": 124.51,
        "36 months": 111.16929202007962
      },
      "200M": {
        "1 month": 201,
        "12 months": 189.8,
        "24 months": 173.3,
        "36 months": 154.73050458715596
      },
      "300M": {
        "1 month": 243.89,
        "12 months": 230.3,
        "24 months": 210.27,
        "36 months": 187.74504500605855
      },
      "400M": {
        "1 month": 279.77,
        "12 months": 264.18,
        "24 months": 241.2,
        "36 months": 215.36048121862558
      },
      "500M": {
        "1 month": 310.58,
        "12 months": 293.85,
        "24 months": 268.29,
        "36 months": 239.54853297559288
      },
      "1G": {
        "1 month": 440.15,
        "12 months": 409.78,
        "24 months": 374.14,
        "36 months": 334.0580102129133
      },
      "2G": {
        "1 month": 493.14,
        "12 months": 459.11,
        "24 months": 419.19,
        "36 months": 374.2746018694824
      },
      "5G": {
        "1 month": 573.1,
        "12 months": 533.55,
        "24 months": 487.16,
        "36 months": 434.9629998268998
      },
      "10G": {
        "1 month": 642.09,
        "12 months": 597.79,
        "24 months": 545.81,
        "36 months": 487.3279816513762
      }
    },
    "France": {
      "10M": {
        "1 month": 104.4516692911724,
        "12 months": 106.14,
        "24 months": 106.14,
        "36 months": 106.14220608859746
      },
      "20M": {
        "1 month": 104.90079120294834,
        "12 months": 106.6,
        "24 months": 106.6,
        "36 months": 106.59859698059688
      },
      "50M": {
        "1 month": 106.31231721138715,
        "12 months": 108.03,
        "24 months": 108.03,
        "36 months": 108.03296835545235
      },
      "100M": {
        "1 month": 108.4937664971562,
        "12 months": 110.25,
        "24 months": 110.25,
        "36 months": 110.24972411659259
      },
      "200M": {
        "1 month": 138.39864322473574,
        "12 months": 140.64,
        "24 months": 140.64,
        "36 months": 140.63860741748505
      },
      "300M": {
        "1 month": 140.1309705987286,
        "12 months": 142.4,
        "24 months": 142.4,
        "36 months": 142.39897228662562
      },
      "400M": {
        "1 month": 141.86329797272168,
        "12 months": 144.16,
        "24 months": 144.16,
        "36 months": 144.15933715576642
      },
      "500M": {
        "1 month": 143.59562534671477,
        "12 months": 145.92,
        "24 months": 145.92,
        "36 months": 145.9197020249072
      },
      "1G": {
        "1 month": 152.19310194356882,
        "12 months": 154.66,
        "24 months": 154.66,
        "36 months": 154.65632767175364
      },
      "2G": {
        "1 month": 388.0624820377004,
        "12 months": 394.34,
        "24 months": 394.34,
        "36 months": 394.34322326507186
      },
      "5G": {
        "1 month": 431.3171994932659,
        "12 months": 438.3,
        "24 months": 438.3,
        "36 months": 438.29801274454167
      },
      "10G": {
        "1 month": 510.0052404710933,
        "12 months": 518.26,
        "24 months": 518.26,
        "36 months": 518.2596095180116
      }
    },
    "United Kingdom": {
      "10M": {
        "1 month": 48.15,
        "12 months": 45.47,
        "24 months": 41.51,
        "36 months": 37.06670849922105
      },
      "20M": {
        "1 month": 67.02,
        "12 months": 63.28,
        "24 months": 57.78,
        "36 months": 51.59089925566904
      },
      "50M": {
        "1 month": 103.76,
        "12 months": 97.98,
        "24 months": 89.46,
        "36 months": 79.8716894581963
      },
      "100M": {
        "1 month": 144.41,
        "12 months": 136.37,
        "24 months": 124.51,
        "36 months": 111.16929202007962
      },
      "200M": {
        "1 month": 201,
        "12 months": 189.8,
        "24 months": 173.3,
        "36 months": 154.73050458715596
      },
      "300M": {
        "1 month": 243.89,
        "12 months": 230.3,
        "24 months": 210.27,
        "36 months": 187.74504500605855
      },
      "400M": {
        "1 month": 279.77,
        "12 months": 264.18,
        "24 months": 241.2,
        "36 months": 215.36048121862558
      },
      "500M": {
        "1 month": 310.58,
        "12 months": 293.85,
        "24 months": 268.29,
        "36 months": 239.54853297559288
      },
      "1G": {
        "1 month": 440.15,
        "12 months": 409.78,
        "24 months": 374.14,
        "36 months": 334.0580102129133
      },
      "2G": {
        "1 month": 493.14,
        "12 months": 459.11,
        "24 months": 419.19,
        "36 months": 374.2746018694824
      },
      "5G": {
        "1 month": 573.1,
        "12 months": 533.55,
        "24 months": 487.16,
        "36 months": 434.9629998268998
      },
      "10G": {
        "1 month": 642.09,
        "12 months": 597.79,
        "24 months": 545.81,
        "36 months": 487.3279816513762
      }
    },
    "India": {
      "10M": {
        "1 month": 120.65,
        "12 months": 106.15,
        "24 months": 96.92,
        "36 months": 115.3799549939415
      },
      "20M": {
        "1 month": 180.23,
        "12 months": 158.57,
        "24 months": 144.78,
        "36 months": 129.26692054699672
      },
      "50M": {
        "1 month": 306.36,
        "12 months": 269.54,
        "24 months": 246.1,
        "36 months": 219.7323437770469
      },
      "100M": {
        "1 month": 457.64,
        "12 months": 402.64,
        "24 months": 367.63,
        "36 months": 328.2402198372858
      },
      "200M": {
        "1 month": 683.63,
        "12 months": 601.47,
        "24 months": 549.17,
        "36 months": 490.33018867924534
      },
      "300M": {
        "1 month": 864.53,
        "12 months": 760.63,
        "24 months": 694.48,
        "36 months": 620.0758395360914
      },
      "400M": {
        "1 month": 1021.22,
        "12 months": 898.49,
        "24 months": 820.36,
        "36 months": 732.4606196988057
      },
      "500M": {
        "1 month": 1158.82,
        "12 months": 1022.4,
        "24 months": 933.5,
        "36 months": 833.480829150078
      },
      "1G": {
        "1 month": 1612.65,
        "12 months": 1539.77,
        "24 months": 1405.87,
        "36 months": 1255.245477756621
      },
      "2G": {
        "1 month": 2219.81,
        "12 months": 2119.48,
        "24 months": 1935.18,
        "36 months": 1727.8399255669033
      },
      "5G": {
        "1 month": 3386.61,
        "12 months": 3233.56,
        "24 months": 2952.38,
        "36 months": 2636.052990306387
      },
      "10G": {
        "1 month": 4661.66,
        "12 months": 4450.98,
        "24 months": 4063.94,
        "36 months": 3628.514475506318
      }
    },
    "Japan": {
      "10M": {
        "1 month": 92.44,
        "12 months": 85.91,
        "24 months": 78.44,
        "36 months": 70.03418729444348
      },
      "20M": {
        "1 month": 130.73,
        "12 months": 121.49,
        "24 months": 110.93,
        "36 months": 99.04362125670764
      },
      "50M": {
        "1 month": 206.7,
        "12 months": 192.1,
        "24 months": 175.39,
        "36 months": 156.60160983209278
      },
      "100M": {
        "1 month": 292.32,
        "12 months": 271.67,
        "24 months": 248.05,
        "36 months": 221.46875540938203
      },
      "200M": {
        "1 month": 413.41,
        "12 months": 384.2,
        "24 months": 350.79,
        "36 months": 313.20321966418555
      },
      "300M": {
        "1 month": 506.32,
        "12 months": 470.54,
        "24 months": 429.63,
        "36 months": 383.5944261727541
      },
      "400M": {
        "1 month": 584.65,
        "12 months": 543.33,
        "24 months": 496.09,
        "36 months": 442.9358880041544
      },
      "500M": {
        "1 month": 652.4,
        "12 months": 607.47,
        "24 months": 554.64,
        "36 months": 495.21810628353813
      },
      "1G": {
        "1 month": 875.3,
        "12 months": 865.82,
        "24 months": 790.53,
        "36 months": 705.8286091396918
      },
      "2G": {
        "1 month": 1163,
        "12 months": 1150.4,
        "24 months": 1050.36,
        "36 months": 937.8245629219318
      },
      "5G": {
        "1 month": 1693.31,
        "12 months": 1674.96,
        "24 months": 1529.31,
        "36 months": 1365.4540635277826
      },
      "10G": {
        "1 month": 2249.88,
        "12 months": 2225.49,
        "24 months": 2031.97,
        "36 months": 1814.2596719750734
      }
    },
    "Netherlands": {
      "10M": {
        "1 month": 48.15,
        "12 months": 45.47,
        "24 months": 41.51,
        "36 months": 37.06670849922105
      },
      "20M": {
        "1 month": 67.02,
        "12 months": 63.28,
        "24 months": 57.78,
        "36 months": 51.59089925566904
      },
      "50M": {
        "1 month": 103.76,
        "12 months": 97.98,
        "24 months": 89.46,
        "36 months": 79.8716894581963
      },
      "100M": {
        "1 month": 144.41,
        "12 months": 136.37,
        "24 months": 124.51,
        "36 months": 111.16929202007962
      },
      "200M": {
        "1 month": 201,
        "12 months": 189.8,
        "24 months": 173.3,
        "36 months": 154.73050458715596
      },
      "300M": {
        "1 month": 243.89,
        "12 months": 230.3,
        "24 months": 210.27,
        "36 months": 187.74504500605855
      },
      "400M": {
        "1 month": 279.77,
        "12 months": 264.18,
        "24 months": 241.2,
        "36 months": 215.36048121862558
      },
      "500M": {
        "1 month": 310.58,
        "12 months": 293.85,
        "24 months": 268.29,
        "36 months": 239.54853297559288
      },
      "1G": {
        "1 month": 440.15,
        "12 months": 409.78,
        "24 months": 374.14,
        "36 months": 334.0580102129133
      },
      "2G": {
        "1 month": 493.14,
        "12 months": 459.11,
        "24 months": 419.19,
        "36 months": 374.2746018694824
      },
      "5G": {
        "1 month": 573.1,
        "12 months": 533.55,
        "24 months": 487.16,
        "36 months": 434.9629998268998
      },
      "10G": {
        "1 month": 642.09,
        "12 months": 597.79,
        "24 months": 545.81,
        "36 months": 487.3279816513762
      }
    },
    "Singapore": {
      "10M": {
        "1 month": 55.68,
        "12 months": 50.76,
        "24 months": 46.34,
        "36 months": 55.16920546996711
      },
      "20M": {
        "1 month": 80.29,
        "12 months": 73.18,
        "24 months": 66.82,
        "36 months": 59.661156309503205
      },
      "50M": {
        "1 month": 130.25,
        "12 months": 118.72,
        "24 months": 108.4,
        "36 months": 96.78466332006231
      },
      "100M": {
        "1 month": 187.82,
        "12 months": 171.19,
        "24 months": 156.3,
        "36 months": 139.55718798684438
      },
      "200M": {
        "1 month": 270.82,
        "12 months": 246.84,
        "24 months": 225.38,
        "36 months": 201.23063441232472
      },
      "300M": {
        "1 month": 335.47,
        "12 months": 305.77,
        "24 months": 279.18,
        "36 months": 249.2708153020599
      },
      "400M": {
        "1 month": 390.5,
        "12 months": 355.93,
        "24 months": 324.98,
        "36 months": 290.16087502163754
      },
      "500M": {
        "1 month": 439.8,
        "12 months": 400.44,
        "24 months": 365.62,
        "36 months": 326.44376406439324
      },
      "1G": {
        "1 month": 631.38,
        "12 months": 580.53,
        "24 months": 530.05,
        "36 months": 473.2549333564134
      },
      "2G": {
        "1 month": 716.27,
        "12 months": 658.58,
        "24 months": 601.31,
        "36 months": 536.8871170157522
      },
      "5G": {
        "1 month": 846.26,
        "12 months": 778.1,
        "24 months": 710.44,
        "36 months": 634.3192833650684
      },
      "10G": {
        "1 month": 960.04,
        "12 months": 882.72,
        "24 months": 805.96,
        "36 months": 719.6079279903064
      }
    },
    "United States": {
      "10M": {
        "1 month": 48.15,
        "12 months": 45.47,
        "24 months": 41.51,
        "36 months": 37.06670849922105
      },
      "20M": {
        "1 month": 67.02,
        "12 months": 63.28,
        "24 months": 57.78,
        "36 months": 51.59089925566904
      },
      "50M": {
        "1 month": 103.76,
        "12 months": 97.98,
        "24 months": 89.46,
        "36 months": 79.8716894581963
      },
      "100M": {
        "1 month": 144.41,
        "12 months": 136.37,
        "24 months": 124.51,
        "36 months": 111.16929202007962
      },
      "200M": {
        "1 month": 201,
        "12 months": 189.8,
        "24 months": 173.3,
        "36 months": 154.73050458715596
      },
      "300M": {
        "1 month": 243.89,
        "12 months": 230.3,
        "24 months": 210.27,
        "36 months": 187.74504500605855
      },
      "400M": {
        "1 month": 279.77,
        "12 months": 264.18,
        "24 months": 241.2,
        "36 months": 215.36048121862558
      },
      "500M": {
        "1 month": 310.58,
        "12 months": 293.85,
        "24 months": 268.29,
        "36 months": 239.54853297559288
      },
      "1G": {
        "1 month": 440.15,
        "12 months": 409.78,
        "24 months": 374.14,
        "36 months": 334.0580102129133
      },
      "2G": {
        "1 month": 493.14,
        "12 months": 459.11,
        "24 months": 419.19,
        "36 months": 374.2746018694824
      },
      "5G": {
        "1 month": 573.1,
        "12 months": 533.55,
        "24 months": 487.16,
        "36 months": 579.9506664358664
      },
      "10G": {
        "1 month": 713.44,
        "12 months": 733.81,
        "24 months": 733.81,
        "36 months": 733.8129652068548
      }
    },
    "South Africa": {
      "10M": {
        "1 month": 174.34,
        "12 months": 162.03,
        "24 months": 176.11,
        "36 months": 176.1143326986325
      },
      "20M": {
        "1 month": 246.56,
        "12 months": 229.14,
        "24 months": 209.21,
        "36 months": 186.79732127401766
      },
      "50M": {
        "1 month": 389.85,
        "12 months": 362.3,
        "24 months": 330.79,
        "36 months": 295.35225895793667
      },
      "100M": {
        "1 month": 551.32,
        "12 months": 512.37,
        "24 months": 467.81,
        "36 months": 417.69138393629913
      },
      "200M": {
        "1 month": 779.69,
        "12 months": 724.6,
        "24 months": 661.59,
        "36 months": 590.7045179158733
      },
      "300M": {
        "1 month": 954.92,
        "12 months": 887.45,
        "24 months": 810.28,
        "36 months": 723.4621126882464
      },
      "400M": {
        "1 month": 1102.65,
        "12 months": 1024.74,
        "24 months": 935.63,
        "36 months": 835.3827678725983
      },
      "500M": {
        "1 month": 1232.8,
        "12 months": 1145.69,
        "24 months": 1046.06,
        "36 months": 933.9866063700885
      },
      "1G": {
        "1 month": 1764.24,
        "12 months": 1639.58,
        "24 months": 1497.01,
        "36 months": 1336.6117794703132
      },
      "2G": {
        "1 month": 2495.01,
        "12 months": 2318.71,
        "24 months": 2117.08,
        "36 months": 1890.2544573307946
      },
      "5G": {
        "1 month": 3944.95,
        "12 months": 3666.21,
        "24 months": 3347.41,
        "36 months": 2988.755517569673
      },
      "10G": {
        "1 month": 5579.01,
        "12 months": 5184.8,
        "24 months": 4733.95,
        "36 months": 4226.737493508742
      }
    },
    "Hong Kong": {
      "10M": {
        "1 month": 48.15,
        "12 months": 45.47,
        "24 months": 49.42,
        "36 months": 49.4222779989614
      },
      "20M": {
        "1 month": 67.02,
        "12 months": 63.28,
        "24 months": 57.78,
        "36 months": 51.59089925566904
      },
      "50M": {
        "1 month": 103.76,
        "12 months": 97.98,
        "24 months": 89.46,
        "36 months": 79.8716894581963
      },
      "100M": {
        "1 month": 144.41,
        "12 months": 136.37,
        "24 months": 124.51,
        "36 months": 111.16929202007962
      },
      "200M": {
        "1 month": 201,
        "12 months": 189.8,
        "24 months": 173.3,
        "36 months": 154.73050458715596
      },
      "300M": {
        "1 month": 243.89,
        "12 months": 230.3,
        "24 months": 210.27,
        "36 months": 187.74504500605855
      },
      "400M": {
        "1 month": 279.77,
        "12 months": 264.18,
        "24 months": 241.2,
        "36 months": 215.36048121862558
      },
      "500M": {
        "1 month": 310.58,
        "12 months": 293.85,
        "24 months": 268.29,
        "36 months": 239.54853297559288
      },
      "1G": {
        "1 month": 440.15,
        "12 months": 409.78,
        "24 months": 374.14,
        "36 months": 334.0580102129133
      },
      "2G": {
        "1 month": 493.14,
        "12 months": 459.11,
        "24 months": 419.19,
        "36 months": 374.2746018694824
      },
      "5G": {
        "1 month": 573.1,
        "12 months": 533.55,
        "24 months": 487.16,
        "36 months": 579.9506664358664
      },
      "10G": {
        "1 month": 713.44,
        "12 months": 722.69,
        "24 months": 722.69,
        "36 months": 722.6934395014714
      }
    },
    "Chile": {
      "10M": {
        "1 month": 92.44,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 130.73,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 206.7,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 292.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 413.41,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 506.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 584.65,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 652.4,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 875.3,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 1163,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 1693.31,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 2249.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "South Korea": {
      "10M": {
        "1 month": 92.44,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 130.73,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 206.7,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 292.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 413.41,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 506.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 584.65,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 652.4,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 875.3,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 1163,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 1693.31,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 2249.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Taiwan": {
      "10M": {
        "1 month": 92.44,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 130.73,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 206.7,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 292.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 413.41,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 506.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 584.65,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 652.4,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 875.3,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 1163,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 1693.31,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 2249.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Ireland": {
      "10M": {
        "1 month": 55.68,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 80.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 130.25,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 187.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 270.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 335.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 390.5,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 439.8,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 501.09,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 568.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 671.63,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 761.94,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Italy": {
      "10M": {
        "1 month": 55.68,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 80.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 130.25,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 187.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 270.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 335.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 390.5,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 439.8,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 501.09,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 568.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 671.63,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 761.94,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Spain": {
      "10M": {
        "1 month": 55.68,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 80.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 130.25,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 187.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 270.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 335.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 390.5,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 439.8,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 501.09,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 568.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 671.63,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 761.94,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Norway": {
      "10M": {
        "1 month": 48.15,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 67.02,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 103.76,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 144.41,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 201,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 243.89,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 279.77,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 310.58,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 349.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 391.38,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 454.84,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 509.6,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Austria": {
      "10M": {
        "1 month": 55.68,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 80.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 130.25,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 187.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 270.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 335.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 390.5,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 439.8,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 501.09,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 568.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 671.63,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 761.94,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Poland": {
      "10M": {
        "1 month": 55.68,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 80.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 130.25,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 187.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 270.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 335.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 390.5,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 439.8,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 501.09,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 568.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 671.63,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 761.94,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Bahrain": {
      "10M": {
        "1 month": 302.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 475.62,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 865.2,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 1360.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 2139.25,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 2787.72,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 3363.83,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 3891.49,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 6214.62,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 9772.08,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 17776.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 27952.11,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Nigeria": {
      "10M": {
        "1 month": 174.34,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 246.56,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 389.85,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 551.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 779.69,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 954.92,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 1102.65,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 1232.8,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 1764.24,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 2495.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 3944.95,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 5579.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "United Arab Emirates": {
      "10M": {
        "1 month": 302.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 475.62,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 865.2,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 1360.47,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 2139.25,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 2787.72,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 3363.83,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 3891.49,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 6214.62,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 9772.08,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 17776.32,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 27952.11,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    }
  },
  "mpls": {
    "Australia": {
      "10M": {
        "1 month": 222.74,
        "12 months": 203.02267612947898,
        "24 months": 185.3685303790895,
        "36 months": 220.67682187986844
      },
      "20M": {
        "1 month": 321.17,
        "12 months": 292.73740695862904,
        "24 months": 267.28198026657435,
        "36 months": 238.64462523801282
      },
      "50M": {
        "1 month": 521.01,
        "12 months": 474.89008135710577,
        "24 months": 433.59529167387916,
        "36 months": 387.13865328024923
      },
      "100M": {
        "1 month": 751.26,
        "12 months": 684.7606023887831,
        "24 months": 625.2162021810628,
        "36 months": 558.2287519473775
      },
      "200M": {
        "1 month": 1083.27,
        "12 months": 987.3716461831402,
        "24 months": 901.5132421672147,
        "36 months": 804.9225376492989
      },
      "300M": {
        "1 month": 1341.88,
        "12 months": 1223.0888004154406,
        "24 months": 1116.7332525532283,
        "36 months": 997.0832612082396
      },
      "400M": {
        "1 month": 1562,
        "12 months": 1423.7226934395014,
        "24 months": 1299.920720096936,
        "36 months": 1160.6435000865501
      },
      "500M": {
        "1 month": 1759.21,
        "12 months": 1601.7507356759565,
        "24 months": 1462.468063008482,
        "36 months": 1305.775056257573
      },
      "1G": {
        "1 month": 2525.52,
        "12 months": 2322.1042063354685,
        "24 months": 2120.182101436732,
        "36 months": 1893.0197334256536
      },
      "2G": {
        "1 month": 2865.09,
        "12 months": 2634.3261208239574,
        "24 months": 2405.2542842305697,
        "36 months": 2147.548468063009
      },
      "5G": {
        "1 month": 3385.03,
        "12 months": 3112.393283711269,
        "24 months": 2841.7503894755064,
        "36 months": 2537.2771334602735
      },
      "10G": {
        "1 month": 3840.17,
        "12 months": 3530.8762333391032,
        "24 months": 3223.8435173965727,
        "36 months": 2878.4317119612256
      }
    },
    "Brazil": {
      "10M": {
        "1 month": 369.76,
        "12 months": 343.63441232473605,
        "24 months": 313.7531590791068,
        "36 months": 280.13674917777394
      },
      "20M": {
        "1 month": 522.92,
        "12 months": 485.9740349662455,
        "24 months": 443.71542323005025,
        "36 months": 396.17448502683055
      },
      "50M": {
        "1 month": 826.81,
        "12 months": 768.3918989094686,
        "24 months": 701.5752120477757,
        "36 months": 626.4064393283711
      },
      "100M": {
        "1 month": 1169.29,
        "12 months": 1086.6733598753679,
        "24 months": 992.1800242340315,
        "36 months": 885.8750216375281
      },
      "200M": {
        "1 month": 1653.63,
        "12 months": 1536.7837978189373,
        "24 months": 1403.1504240955514,
        "36 months": 1252.8128786567422
      },
      "300M": {
        "1 month": 2025.27,
        "12 months": 1882.1699844209802,
        "24 months": 1718.5030292539382,
        "36 months": 1534.3777046910163
      },
      "400M": {
        "1 month": 2338.58,
        "12 months": 2173.3387571403846,
        "24 months": 1984.3527782586118,
        "36 months": 1771.7435520166175
      },
      "500M": {
        "1 month": 2609.6,
        "12 months": 2429.8701748312274,
        "24 months": 2218.577116150251,
        "36 months": 1980.8724251341525
      },
      "1G": {
        "1 month": 3501.21,
        "12 months": 3463.2657088454216,
        "24 months": 3162.1121689458196,
        "36 months": 2823.3144365587673
      },
      "2G": {
        "1 month": 4652.01,
        "12 months": 4601.592522070279,
        "24 months": 4201.454041890254,
        "36 months": 3751.2982516877273
      },
      "5G": {
        "1 month": 6773.24,
        "12 months": 6699.827938376321,
        "24 months": 6117.234204604467,
        "36 months": 5461.816254111131
      },
      "10G": {
        "1 month": 8999.5,
        "12 months": 8901.967457157694,
        "24 months": 8127.883330448329,
        "36 months": 7257.038687900294
      }
    },
    "Canada": {
      "10M": {
        "1 month": 192.61,
        "12 months": 181.87398303617795,
        "24 months": 166.0588540765103,
        "36 months": 148.2668339968842
      },
      "20M": {
        "1 month": 268.08,
        "12 months": 253.13934568114942,
        "24 months": 231.12722866539727,
        "36 months": 206.36359702267615
      },
      "50M": {
        "1 month": 415.03,
        "12 months": 391.90375627488316,
        "24 months": 357.8251687727194,
        "36 months": 319.4867578327852
      },
      "100M": {
        "1 month": 577.66,
        "12 months": 545.4706595118574,
        "24 months": 498.03842824995667,
        "36 months": 444.6771680803185
      },
      "200M": {
        "1 month": 804.01,
        "12 months": 759.2110091743119,
        "24 months": 693.1926605504588,
        "36 months": 618.9220183486239
      },
      "300M": {
        "1 month": 975.57,
        "12 months": 921.2023541630606,
        "24 months": 841.0978016271421,
        "36 months": 750.9801800242342
      },
      "400M": {
        "1 month": 1119.06,
        "12 months": 1056.7020945127229,
        "24 months": 964.8149558594424,
        "36 months": 861.4419248745023
      },
      "500M": {
        "1 month": 1242.31,
        "12 months": 1175.3848018002425,
        "24 months": 1073.177427730656,
        "36 months": 958.1941319023715
      },
      "1G": {
        "1 month": 1760.59,
        "12 months": 1639.1113034446948,
        "24 months": 1496.5798857538516,
        "36 months": 1336.2320408516532
      },
      "2G": {
        "1 month": 1972.54,
        "12 months": 1836.4407131729272,
        "24 months": 1676.7502163752813,
        "36 months": 1497.0984074779296
      },
      "5G": {
        "1 month": 2292.39,
        "12 months": 2134.2184524839886,
        "24 months": 1948.6342392245112,
        "36 months": 2319.8026657434657
      },
      "10G": {
        "1 month": 2853.74,
        "12 months": 2935.251860827419,
        "24 months": 2935.251860827419,
        "36 months": 2935.251860827419
      }
    },
    "Switzerland": {
      "10M": {
        "1 month": 222.74,
        "12 months": 203.02267612947898,
        "24 months": 185.3685303790895,
        "36 months": 165.50761640990132
      },
      "20M": {
        "1 month": 321.17,
        "12 months": 292.73740695862904,
        "24 months": 267.28198026657435,
        "36 months": 238.64462523801282
      },
      "50M": {
        "1 month": 521.01,
        "12 months": 474.89008135710577,
        "24 months": 433.59529167387916,
        "36 months": 387.13865328024923
      },
      "100M": {
        "1 month": 751.26,
        "12 months": 684.7606023887831,
        "24 months": 625.2162021810628,
        "36 months": 558.2287519473775
      },
      "200M": {
        "1 month": 1083.27,
        "12 months": 987.3716461831402,
        "24 months": 901.5132421672147,
        "36 months": 804.9225376492989
      },
      "300M": {
        "1 month": 1341.88,
        "12 months": 1223.0888004154406,
        "24 months": 1116.7332525532283,
        "36 months": 997.0832612082396
      },
      "400M": {
        "1 month": 1562,
        "12 months": 1423.7226934395014,
        "24 months": 1299.920720096936,
        "36 months": 1160.6435000865501
      },
      "500M": {
        "1 month": 1759.21,
        "12 months": 1601.7507356759565,
        "24 months": 1462.468063008482,
        "36 months": 1305.775056257573
      },
      "1G": {
        "1 month": 2525.52,
        "12 months": 2322.1042063354685,
        "24 months": 2120.182101436732,
        "36 months": 1893.0197334256536
      },
      "2G": {
        "1 month": 2865.09,
        "12 months": 2634.3261208239574,
        "24 months": 2405.2542842305697,
        "36 months": 2147.548468063009
      },
      "5G": {
        "1 month": 3385.03,
        "12 months": 3112.393283711269,
        "24 months": 2841.7503894755064,
        "36 months": 2537.2771334602735
      },
      "10G": {
        "1 month": 3840.17,
        "12 months": 3530.8762333391032,
        "24 months": 3223.8435173965727,
        "36 months": 2878.4317119612256
      }
    },
    "Germany": {
      "10M": {
        "1 month": 192.61,
        "12 months": 181.87398303617795,
        "24 months": 166.0588540765103,
        "36 months": 148.2668339968842
      },
      "20M": {
        "1 month": 268.08,
        "12 months": 253.13934568114942,
        "24 months": 231.12722866539727,
        "36 months": 206.36359702267615
      },
      "50M": {
        "1 month": 415.03,
        "12 months": 391.90375627488316,
        "24 months": 357.8251687727194,
        "36 months": 319.4867578327852
      },
      "100M": {
        "1 month": 577.66,
        "12 months": 545.4706595118574,
        "24 months": 498.03842824995667,
        "36 months": 444.6771680803185
      },
      "200M": {
        "1 month": 804.01,
        "12 months": 759.2110091743119,
        "24 months": 693.1926605504588,
        "36 months": 618.9220183486239
      },
      "300M": {
        "1 month": 975.57,
        "12 months": 921.2023541630606,
        "24 months": 841.0978016271421,
        "36 months": 750.9801800242342
      },
      "400M": {
        "1 month": 1119.06,
        "12 months": 1056.7020945127229,
        "24 months": 964.8149558594424,
        "36 months": 861.4419248745023
      },
      "500M": {
        "1 month": 1242.31,
        "12 months": 1175.3848018002425,
        "24 months": 1073.177427730656,
        "36 months": 958.1941319023715
      },
      "1G": {
        "1 month": 1760.59,
        "12 months": 1639.1113034446948,
        "24 months": 1496.5798857538516,
        "36 months": 1336.2320408516532
      },
      "2G": {
        "1 month": 1972.54,
        "12 months": 1836.4407131729272,
        "24 months": 1676.7502163752813,
        "36 months": 1497.0984074779296
      },
      "5G": {
        "1 month": 2292.39,
        "12 months": 2134.2184524839886,
        "24 months": 1948.6342392245112,
        "36 months": 1739.8519993075993
      },
      "10G": {
        "1 month": 2568.37,
        "12 months": 2391.1559633027528,
        "24 months": 2183.2293577981654,
        "36 months": 1949.3119266055048
      }
    },
    "France": {
      "10M": {
        "1 month": 109.22,
        "12 months": 109.22,
        "24 months": 109.22,
        "36 months": 109.22
      },
      "20M": {
        "1 month": 109.47,
        "12 months": 109.47,
        "24 months": 109.47,
        "36 months": 109.47
      },
      "50M": {
        "1 month": 110.18,
        "12 months": 110.18,
        "24 months": 110.18,
        "36 months": 110.18
      },
      "100M": {
        "1 month": 136.43,
        "12 months": 136.43,
        "24 months": 136.43,
        "36 months": 136.43
      },
      "200M": {
        "1 month": 172.78,
        "12 months": 172.78,
        "24 months": 172.78,
        "36 months": 172.78
      },
      "300M": {
        "1 month": 173.5,
        "12 months": 173.5,
        "24 months": 173.5,
        "36 months": 173.5
      },
      "400M": {
        "1 month": 173.58,
        "12 months": 173.58,
        "24 months": 173.58,
        "36 months": 173.58
      },
      "500M": {
        "1 month": 173.74,
        "12 months": 173.74,
        "24 months": 173.74,
        "36 months": 173.74
      },
      "1G": {
        "1 month": 211.31,
        "12 months": 211.31,
        "24 months": 211.31,
        "36 months": 211.31
      },
      "2G": {
        "1 month": 541.03,
        "12 months": 541.03,
        "24 months": 541.03,
        "36 months": 541.03
      },
      "5G": {
        "1 month": 544.96,
        "12 months": 544.96,
        "24 months": 544.96,
        "36 months": 544.96
      },
      "10G": {
        "1 month": 552.07,
        "12 months": 552.07,
        "24 months": 552.07,
        "36 months": 552.07
      }
    },
    "United Kingdom": {
      "10M": {
        "1 month": 192.61,
        "12 months": 181.87398303617795,
        "24 months": 166.0588540765103,
        "36 months": 148.2668339968842
      },
      "20M": {
        "1 month": 268.08,
        "12 months": 253.13934568114942,
        "24 months": 231.12722866539727,
        "36 months": 206.36359702267615
      },
      "50M": {
        "1 month": 415.03,
        "12 months": 391.90375627488316,
        "24 months": 357.8251687727194,
        "36 months": 319.4867578327852
      },
      "100M": {
        "1 month": 577.66,
        "12 months": 545.4706595118574,
        "24 months": 498.03842824995667,
        "36 months": 444.6771680803185
      },
      "200M": {
        "1 month": 804.01,
        "12 months": 759.2110091743119,
        "24 months": 693.1926605504588,
        "36 months": 618.9220183486239
      },
      "300M": {
        "1 month": 975.57,
        "12 months": 921.2023541630606,
        "24 months": 841.0978016271421,
        "36 months": 750.9801800242342
      },
      "400M": {
        "1 month": 1119.06,
        "12 months": 1056.7020945127229,
        "24 months": 964.8149558594424,
        "36 months": 861.4419248745023
      },
      "500M": {
        "1 month": 1242.31,
        "12 months": 1175.3848018002425,
        "24 months": 1073.177427730656,
        "36 months": 958.1941319023715
      },
      "1G": {
        "1 month": 1760.59,
        "12 months": 1639.1113034446948,
        "24 months": 1496.5798857538516,
        "36 months": 1336.2320408516532
      },
      "2G": {
        "1 month": 1972.54,
        "12 months": 1836.4407131729272,
        "24 months": 1676.7502163752813,
        "36 months": 1497.0984074779296
      },
      "5G": {
        "1 month": 2292.39,
        "12 months": 2134.2184524839886,
        "24 months": 1948.6342392245112,
        "36 months": 1739.8519993075993
      },
      "10G": {
        "1 month": 2568.37,
        "12 months": 2391.1559633027528,
        "24 months": 2183.2293577981654,
        "36 months": 1949.3119266055048
      }
    },
    "India": {
      "10M": {
        "1 month": 482.6,
        "12 months": 424.5982343777047,
        "24 months": 387.6766487796434,
        "36 months": 461.519819975766
      },
      "20M": {
        "1 month": 720.91,
        "12 months": 634.2696901505972,
        "24 months": 579.1158040505452,
        "36 months": 517.0676821879869
      },
      "50M": {
        "1 month": 1225.43,
        "12 months": 1078.153366799377,
        "24 months": 984.4009001211701,
        "36 months": 878.9293751081876
      },
      "100M": {
        "1 month": 1830.56,
        "12 months": 1610.5653453349491,
        "24 months": 1470.5161848710404,
        "36 months": 1312.9608793491432
      },
      "200M": {
        "1 month": 2734.52,
        "12 months": 2405.8867924528304,
        "24 months": 2196.679245283019,
        "36 months": 1961.3207547169814
      },
      "300M": {
        "1 month": 3458.11,
        "12 months": 3042.5054526570884,
        "24 months": 2777.939761121689,
        "36 months": 2480.3033581443656
      },
      "400M": {
        "1 month": 4084.86,
        "12 months": 3593.94010732214,
        "24 months": 3281.423576250649,
        "36 months": 2929.8424787952226
      },
      "500M": {
        "1 month": 4635.29,
        "12 months": 4089.612601696383,
        "24 months": 3733.994114592349,
        "36 months": 3333.923316600312
      },
      "1G": {
        "1 month": 6450.6,
        "12 months": 6159.071144192488,
        "24 months": 5623.499740349663,
        "36 months": 5020.981911026484
      },
      "2G": {
        "1 month": 8879.23,
        "12 months": 8477.934568114939,
        "24 months": 7740.722866539726,
        "36 months": 6911.359702267613
      },
      "5G": {
        "1 month": 13546.45,
        "12 months": 12934.23333910334,
        "24 months": 11809.517396572615,
        "36 months": 10544.211961225548
      },
      "10G": {
        "1 month": 18646.63,
        "12 months": 17803.911026484337,
        "24 months": 16255.744850268304,
        "36 months": 14514.057902025272
      }
    },
    "Japan": {
      "10M": {
        "1 month": 369.76,
        "12 months": 343.63441232473605,
        "24 months": 313.7531590791068,
        "36 months": 280.13674917777394
      },
      "20M": {
        "1 month": 522.92,
        "12 months": 485.9740349662455,
        "24 months": 443.71542323005025,
        "36 months": 396.17448502683055
      },
      "50M": {
        "1 month": 826.81,
        "12 months": 768.3918989094686,
        "24 months": 701.5752120477757,
        "36 months": 626.4064393283711
      },
      "100M": {
        "1 month": 1169.29,
        "12 months": 1086.6733598753679,
        "24 months": 992.1800242340315,
        "36 months": 885.8750216375281
      },
      "200M": {
        "1 month": 1653.63,
        "12 months": 1536.7837978189373,
        "24 months": 1403.1504240955514,
        "36 months": 1252.8128786567422
      },
      "300M": {
        "1 month": 2025.27,
        "12 months": 1882.1699844209802,
        "24 months": 1718.5030292539382,
        "36 months": 1534.3777046910163
      },
      "400M": {
        "1 month": 2338.58,
        "12 months": 2173.3387571403846,
        "24 months": 1984.3527782586118,
        "36 months": 1771.7435520166175
      },
      "500M": {
        "1 month": 2609.6,
        "12 months": 2429.8701748312274,
        "24 months": 2218.577116150251,
        "36 months": 1980.8724251341525
      },
      "1G": {
        "1 month": 3501.21,
        "12 months": 3463.2657088454216,
        "24 months": 3162.1121689458196,
        "36 months": 2823.3144365587673
      },
      "2G": {
        "1 month": 4652.01,
        "12 months": 4601.592522070279,
        "24 months": 4201.454041890254,
        "36 months": 3751.2982516877273
      },
      "5G": {
        "1 month": 6773.24,
        "12 months": 6699.827938376321,
        "24 months": 6117.234204604467,
        "36 months": 5461.816254111131
      },
      "10G": {
        "1 month": 8999.5,
        "12 months": 8901.967457157694,
        "24 months": 8127.883330448329,
        "36 months": 7257.038687900294
      }
    },
    "Netherlands": {
      "10M": {
        "1 month": 192.61,
        "12 months": 181.87398303617795,
        "24 months": 166.0588540765103,
        "36 months": 148.2668339968842
      },
      "20M": {
        "1 month": 268.08,
        "12 months": 253.13934568114942,
        "24 months": 231.12722866539727,
        "36 months": 206.36359702267615
      },
      "50M": {
        "1 month": 415.03,
        "12 months": 391.90375627488316,
        "24 months": 357.8251687727194,
        "36 months": 319.4867578327852
      },
      "100M": {
        "1 month": 577.66,
        "12 months": 545.4706595118574,
        "24 months": 498.03842824995667,
        "36 months": 444.6771680803185
      },
      "200M": {
        "1 month": 804.01,
        "12 months": 759.2110091743119,
        "24 months": 693.1926605504588,
        "36 months": 618.9220183486239
      },
      "300M": {
        "1 month": 975.57,
        "12 months": 921.2023541630606,
        "24 months": 841.0978016271421,
        "36 months": 750.9801800242342
      },
      "400M": {
        "1 month": 1119.06,
        "12 months": 1056.7020945127229,
        "24 months": 964.8149558594424,
        "36 months": 861.4419248745023
      },
      "500M": {
        "1 month": 1242.31,
        "12 months": 1175.3848018002425,
        "24 months": 1073.177427730656,
        "36 months": 958.1941319023715
      },
      "1G": {
        "1 month": 1760.59,
        "12 months": 1639.1113034446948,
        "24 months": 1496.5798857538516,
        "36 months": 1336.2320408516532
      },
      "2G": {
        "1 month": 1972.54,
        "12 months": 1836.4407131729272,
        "24 months": 1676.7502163752813,
        "36 months": 1497.0984074779296
      },
      "5G": {
        "1 month": 2292.39,
        "12 months": 2134.2184524839886,
        "24 months": 1948.6342392245112,
        "36 months": 1739.8519993075993
      },
      "10G": {
        "1 month": 2568.37,
        "12 months": 2391.1559633027528,
        "24 months": 2183.2293577981654,
        "36 months": 1949.3119266055048
      }
    },
    "Singapore": {
      "10M": {
        "1 month": 222.74,
        "12 months": 203.02267612947898,
        "24 months": 185.3685303790895,
        "36 months": 220.67682187986844
      },
      "20M": {
        "1 month": 321.17,
        "12 months": 292.73740695862904,
        "24 months": 267.28198026657435,
        "36 months": 238.64462523801282
      },
      "50M": {
        "1 month": 521.01,
        "12 months": 474.89008135710577,
        "24 months": 433.59529167387916,
        "36 months": 387.13865328024923
      },
      "100M": {
        "1 month": 751.26,
        "12 months": 684.7606023887831,
        "24 months": 625.2162021810628,
        "36 months": 558.2287519473775
      },
      "200M": {
        "1 month": 1083.27,
        "12 months": 987.3716461831402,
        "24 months": 901.5132421672147,
        "36 months": 804.9225376492989
      },
      "300M": {
        "1 month": 1341.88,
        "12 months": 1223.0888004154406,
        "24 months": 1116.7332525532283,
        "36 months": 997.0832612082396
      },
      "400M": {
        "1 month": 1562,
        "12 months": 1423.7226934395014,
        "24 months": 1299.920720096936,
        "36 months": 1160.6435000865501
      },
      "500M": {
        "1 month": 1759.21,
        "12 months": 1601.7507356759565,
        "24 months": 1462.468063008482,
        "36 months": 1305.775056257573
      },
      "1G": {
        "1 month": 2525.52,
        "12 months": 2322.1042063354685,
        "24 months": 2120.182101436732,
        "36 months": 1893.0197334256536
      },
      "2G": {
        "1 month": 2865.09,
        "12 months": 2634.3261208239574,
        "24 months": 2405.2542842305697,
        "36 months": 2147.548468063009
      },
      "5G": {
        "1 month": 3385.03,
        "12 months": 3112.393283711269,
        "24 months": 2841.7503894755064,
        "36 months": 2537.2771334602735
      },
      "10G": {
        "1 month": 3840.17,
        "12 months": 3530.8762333391032,
        "24 months": 3223.8435173965727,
        "36 months": 2878.4317119612256
      }
    },
    "United States": {
      "10M": {
        "1 month": 192.61,
        "12 months": 181.87398303617795,
        "24 months": 166.0588540765103,
        "36 months": 148.2668339968842
      },
      "20M": {
        "1 month": 268.08,
        "12 months": 253.13934568114942,
        "24 months": 231.12722866539727,
        "36 months": 206.36359702267615
      },
      "50M": {
        "1 month": 415.03,
        "12 months": 391.90375627488316,
        "24 months": 357.8251687727194,
        "36 months": 319.4867578327852
      },
      "100M": {
        "1 month": 577.66,
        "12 months": 545.4706595118574,
        "24 months": 498.03842824995667,
        "36 months": 444.6771680803185
      },
      "200M": {
        "1 month": 804.01,
        "12 months": 759.2110091743119,
        "24 months": 693.1926605504588,
        "36 months": 618.9220183486239
      },
      "300M": {
        "1 month": 975.57,
        "12 months": 921.2023541630606,
        "24 months": 841.0978016271421,
        "36 months": 750.9801800242342
      },
      "400M": {
        "1 month": 1119.06,
        "12 months": 1056.7020945127229,
        "24 months": 964.8149558594424,
        "36 months": 861.4419248745023
      },
      "500M": {
        "1 month": 1242.31,
        "12 months": 1175.3848018002425,
        "24 months": 1073.177427730656,
        "36 months": 958.1941319023715
      },
      "1G": {
        "1 month": 1760.59,
        "12 months": 1639.1113034446948,
        "24 months": 1496.5798857538516,
        "36 months": 1336.2320408516532
      },
      "2G": {
        "1 month": 1972.54,
        "12 months": 1836.4407131729272,
        "24 months": 1676.7502163752813,
        "36 months": 1497.0984074779296
      },
      "5G": {
        "1 month": 2292.39,
        "12 months": 2134.2184524839886,
        "24 months": 1948.6342392245112,
        "36 months": 2319.8026657434657
      },
      "10G": {
        "1 month": 2853.74,
        "12 months": 2935.251860827419,
        "24 months": 2935.251860827419,
        "36 months": 2935.251860827419
      }
    },
    "South Africa": {
      "10M": {
        "1 month": 697.38,
        "12 months": 648.1007443309677,
        "24 months": 704.45733079453,
        "36 months": 704.45733079453
      },
      "20M": {
        "1 month": 986.24,
        "12 months": 916.5521897178467,
        "24 months": 836.851999307599,
        "36 months": 747.1892850960706
      },
      "50M": {
        "1 month": 1559.38,
        "12 months": 1449.1950839536091,
        "24 months": 1323.1781201315562,
        "36 months": 1181.4090358317467
      },
      "100M": {
        "1 month": 2205.3,
        "12 months": 2049.4723905141077,
        "24 months": 1871.25740003462,
        "36 months": 1670.7655357451965
      },
      "200M": {
        "1 month": 3118.76,
        "12 months": 2898.3901679072183,
        "24 months": 2646.3562402631123,
        "36 months": 2362.8180716634934
      },
      "300M": {
        "1 month": 3819.69,
        "12 months": 3549.787432923663,
        "24 months": 3241.110264843344,
        "36 months": 2893.8484507529856
      },
      "400M": {
        "1 month": 4410.59,
        "12 months": 4098.944781028215,
        "24 months": 3742.51480006924,
        "36 months": 3341.531071490393
      },
      "500M": {
        "1 month": 4931.19,
        "12 months": 4582.7609485892335,
        "24 months": 4184.259996537995,
        "36 months": 3735.946425480354
      },
      "1G": {
        "1 month": 7056.95,
        "12 months": 6558.308464601004,
        "24 months": 5988.020772027003,
        "36 months": 5346.447117881253
      },
      "2G": {
        "1 month": 9980.03,
        "12 months": 9274.848537303098,
        "24 months": 8468.33996884196,
        "36 months": 7561.017829323178
      },
      "5G": {
        "1 month": 15779.82,
        "12 months": 14664.827072875196,
        "24 months": 13389.624718712135,
        "36 months": 11955.022070278692
      },
      "10G": {
        "1 month": 22316.04,
        "12 months": 20739.19196814956,
        "24 months": 18935.78397091916,
        "36 months": 16906.949974034967
      }
    },
    "Hong Kong": {
      "10M": {
        "1 month": 192.61,
        "12 months": 181.87398303617795,
        "24 months": 197.6891119958456,
        "36 months": 197.6891119958456
      },
      "20M": {
        "1 month": 268.08,
        "12 months": 253.13934568114942,
        "24 months": 231.12722866539727,
        "36 months": 206.36359702267615
      },
      "50M": {
        "1 month": 415.03,
        "12 months": 391.90375627488316,
        "24 months": 357.8251687727194,
        "36 months": 319.4867578327852
      },
      "100M": {
        "1 month": 577.66,
        "12 months": 545.4706595118574,
        "24 months": 498.03842824995667,
        "36 months": 444.6771680803185
      },
      "200M": {
        "1 month": 804.01,
        "12 months": 759.2110091743119,
        "24 months": 693.1926605504588,
        "36 months": 618.9220183486239
      },
      "300M": {
        "1 month": 975.57,
        "12 months": 921.2023541630606,
        "24 months": 841.0978016271421,
        "36 months": 750.9801800242342
      },
      "400M": {
        "1 month": 1119.06,
        "12 months": 1056.7020945127229,
        "24 months": 964.8149558594424,
        "36 months": 861.4419248745023
      },
      "500M": {
        "1 month": 1242.31,
        "12 months": 1175.3848018002425,
        "24 months": 1073.177427730656,
        "36 months": 958.1941319023715
      },
      "1G": {
        "1 month": 1760.59,
        "12 months": 1639.1113034446948,
        "24 months": 1496.5798857538516,
        "36 months": 1336.2320408516532
      },
      "2G": {
        "1 month": 1972.54,
        "12 months": 1836.4407131729272,
        "24 months": 1676.7502163752813,
        "36 months": 1497.0984074779296
      },
      "5G": {
        "1 month": 2292.39,
        "12 months": 2134.2184524839886,
        "24 months": 1948.6342392245112,
        "36 months": 2319.8026657434657
      },
      "10G": {
        "1 month": 2853.74,
        "12 months": 2890.7737580058856,
        "24 months": 2890.7737580058856,
        "36 months": 2890.7737580058856
      }
    },
    "Chile": {
      "10M": {
        "1 month": 369.76,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 522.92,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 826.81,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 1169.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 1653.63,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 2025.27,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 2338.58,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 2609.6,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 3501.21,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 4652.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 6773.24,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 8999.5,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "South Korea": {
      "10M": {
        "1 month": 369.76,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 522.92,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 826.81,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 1169.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 1653.63,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 2025.27,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 2338.58,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 2609.6,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 3501.21,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 4652.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 6773.24,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 8999.5,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Taiwan": {
      "10M": {
        "1 month": 369.76,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 522.92,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 826.81,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 1169.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 1653.63,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 2025.27,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 2338.58,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 2609.6,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 3501.21,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 4652.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 6773.24,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 8999.5,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Ireland": {
      "10M": {
        "1 month": 222.74,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 321.17,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 521.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 751.26,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 1083.27,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 1341.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 1562,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 1759.21,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 2004.38,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 2273.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 2686.53,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 3047.75,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Italy": {
      "10M": {
        "1 month": 222.74,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 321.17,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 521.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 751.26,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 1083.27,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 1341.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 1562,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 1759.21,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 2004.38,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 2273.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 2686.53,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 3047.75,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Spain": {
      "10M": {
        "1 month": 222.74,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 321.17,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 521.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 751.26,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 1083.27,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 1341.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 1562,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 1759.21,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 2004.38,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 2273.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 2686.53,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 3047.75,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Norway": {
      "10M": {
        "1 month": 192.61,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 268.08,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 415.03,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 577.66,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 804.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 975.57,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 1119.06,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 1242.31,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 1397.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 1565.51,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 1819.36,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 2038.39,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Austria": {
      "10M": {
        "1 month": 222.74,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 321.17,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 521.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 751.26,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 1083.27,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 1341.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 1562,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 1759.21,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 2004.38,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 2273.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 2686.53,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 3047.75,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Poland": {
      "10M": {
        "1 month": 222.74,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 321.17,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 521.01,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 751.26,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 1083.27,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 1341.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 1562,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 1759.21,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 2004.38,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 2273.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 2686.53,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 3047.75,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Bahrain": {
      "10M": {
        "1 month": 1209.9,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 1902.48,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 3460.8,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 5441.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 8556.99,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 11150.87,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 13455.31,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 15565.97,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 24858.48,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 39088.33,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 71105.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 111808.42,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "Nigeria": {
      "10M": {
        "1 month": 697.38,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 986.24,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 1559.38,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 2205.3,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 3118.76,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 3819.69,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 4410.59,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 4931.19,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 7056.95,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 9980.03,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 15779.82,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 22316.04,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    },
    "United Arab Emirates": {
      "10M": {
        "1 month": 1209.9,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "20M": {
        "1 month": 1902.48,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "50M": {
        "1 month": 3460.8,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "100M": {
        "1 month": 5441.88,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "200M": {
        "1 month": 8556.99,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "300M": {
        "1 month": 11150.87,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "400M": {
        "1 month": 13455.31,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "500M": {
        "1 month": 15565.97,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "1G": {
        "1 month": 24858.48,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "2G": {
        "1 month": 39088.33,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "5G": {
        "1 month": 71105.29,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      },
      "10G": {
        "1 month": 111808.42,
        "12 months": 0,
        "24 months": 0,
        "36 months": 0
      }
    }
  },
  "ip_address": {
    "proposed_per_unit": 1,
    "list_price_row": 6,
    "list_price_china": 34.58
  }
};

// Expose globalement pour usage dans le heatmap tool
if (typeof window !== 'undefined') {
  window.VNE_PRICING = VNE_PRICING;
  window.VNE_COUNTRIES = Object.keys(VNE_PRICING.hosting);
}
