// Orange Business ODCC Pricing Data
// Source: ODCCpricingMar26.csv
// Généré le: 2026-03-31 15:54:48
//
// Structure: OB_PRICING[Country][Architecture][Geography Type][Bandwidth]
//
// ⚠️  IMPORTANT: Ce fichier contient UNIQUEMENT les données "Private" (pas IPSEC)
//
// Formule prix mensuel OB: Reserved BW fee ($/mois) + (USD hourly rate × 744h)
// Note: OB utilise 744h/mois (31 jours × 24h) alors que les CSP utilisent 730h/mois
//
// 15 pays disponibles
// 1 architectures: High Availability
// 3 géographies: Inter - Regional, Local, Regional
// 12 bandes passantes: 10M, 20M, 50M, 100M, 200M, 300M, 400M, 500M, 1G, 2G, 5G, 10G

export const OB_PRICING = {
  "Germany": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1332,
          "reserved_bw_fee_usd": 415.44,
          "monthly_cost_744h": 514.54
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1853,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 761.02
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.2869,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1044.33
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.5769,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1260.09
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.9213,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1516.33
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.0598,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1619.37
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.1362,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1676.21
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.1597,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1693.7
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.707,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 2844.89
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.3927,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 4843.05
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 6.6198,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 5756.01
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.3933,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 7819.5
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0373,
          "reserved_bw_fee_usd": 415.44,
          "monthly_cost_744h": 443.19
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0519,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 661.77
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0803,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 890.62
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1615,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 951.04
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.258,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1022.83
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2967,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1051.62
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.3181,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1067.55
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.3247,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1072.46
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.758,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1394.83
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.51,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1954.32
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.8535,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 2209.88
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.6301,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 2787.67
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0306,
          "reserved_bw_fee_usd": 415.44,
          "monthly_cost_744h": 438.21
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0426,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 654.85
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.066,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 879.98
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1327,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 929.61
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2119,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 988.53
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2437,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1012.19
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.2613,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1025.29
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.2667,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1029.3
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.6226,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1294.09
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.2403,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1753.66
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.5225,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 1963.62
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.1605,
          "reserved_bw_fee_usd": 830.88,
          "monthly_cost_744h": 2438.29
        }
      }
    }
  },
  "Netherlands": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1155,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 397.51
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1665,
          "reserved_bw_fee_usd": 467.37,
          "monthly_cost_744h": 591.25
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.2702,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 824.19
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.5627,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 1145.67
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.931,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 1419.68
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.0933,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 1540.44
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.1895,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 1612.01
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.2316,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 1643.33
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.1843,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 2352.14
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.9164,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 3692.75
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 6.1094,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 5324.34
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.4268,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 7048.49
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0323,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 335.61
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0466,
          "reserved_bw_fee_usd": 467.37,
          "monthly_cost_744h": 502.04
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0756,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 679.41
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1576,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 844.27
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2607,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 920.98
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.3061,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 954.76
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.333,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 974.77
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.3449,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 983.63
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.6116,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 1182.05
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.0966,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 1594.82
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.7106,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 2051.64
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.3595,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 2534.42
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0266,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 331.37
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0383,
          "reserved_bw_fee_usd": 467.37,
          "monthly_cost_744h": 495.87
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0621,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 669.36
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1294,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 823.29
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2141,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 886.31
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2515,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 914.14
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.2736,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 930.58
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.2833,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 937.8
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.5024,
          "reserved_bw_fee_usd": 727.02,
          "monthly_cost_744h": 1100.81
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.9008,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 1449.15
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.4052,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 1824.42
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 1.9382,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 2220.97
        }
      }
    }
  },
  "United States": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1571,
          "reserved_bw_fee_usd": 276.96,
          "monthly_cost_744h": 393.84
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2187,
          "reserved_bw_fee_usd": 415.44,
          "monthly_cost_744h": 578.15
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3386,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 944.32
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.5074,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1069.91
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.8412,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1318.25
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.9687,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1413.11
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.4996,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1808.1
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.8213,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 2047.45
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.3058,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 2407.92
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.1104,
          "reserved_bw_fee_usd": 796.26,
          "monthly_cost_744h": 4598.4
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.0096,
          "reserved_bw_fee_usd": 796.26,
          "monthly_cost_744h": 6011.4
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 11.1743,
          "reserved_bw_fee_usd": 796.26,
          "monthly_cost_744h": 9109.94
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0864,
          "reserved_bw_fee_usd": 276.96,
          "monthly_cost_744h": 341.24
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1203,
          "reserved_bw_fee_usd": 415.44,
          "monthly_cost_744h": 504.94
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1862,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 830.93
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.2791,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 900.05
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.4627,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1036.65
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.5328,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1088.8
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.8248,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1306.05
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.0017,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1437.66
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.2682,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1635.94
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.8107,
          "reserved_bw_fee_usd": 796.26,
          "monthly_cost_744h": 2887.42
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 3.8553,
          "reserved_bw_fee_usd": 796.26,
          "monthly_cost_744h": 3664.6
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 6.1459,
          "reserved_bw_fee_usd": 796.26,
          "monthly_cost_744h": 5368.81
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0471,
          "reserved_bw_fee_usd": 276.96,
          "monthly_cost_744h": 312.0
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0656,
          "reserved_bw_fee_usd": 415.44,
          "monthly_cost_744h": 464.25
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1016,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 767.99
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1522,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 805.64
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2524,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 880.19
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2906,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 908.61
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.4499,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1027.13
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.5464,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1098.92
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.6917,
          "reserved_bw_fee_usd": 692.4,
          "monthly_cost_744h": 1207.02
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.5331,
          "reserved_bw_fee_usd": 796.26,
          "monthly_cost_744h": 1936.89
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.1029,
          "reserved_bw_fee_usd": 796.26,
          "monthly_cost_744h": 2360.82
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.3523,
          "reserved_bw_fee_usd": 796.26,
          "monthly_cost_744h": 3290.37
        }
      }
    }
  },
  "France": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0749,
          "reserved_bw_fee_usd": 233.69,
          "monthly_cost_744h": 289.42
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1043,
          "reserved_bw_fee_usd": 276.96,
          "monthly_cost_744h": 354.56
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1435,
          "reserved_bw_fee_usd": 363.51,
          "monthly_cost_744h": 470.27
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3606,
          "reserved_bw_fee_usd": 467.37,
          "monthly_cost_744h": 735.66
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.9213,
          "reserved_bw_fee_usd": 467.37,
          "monthly_cost_744h": 1152.82
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.0598,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 1463.58
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2782,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 1626.07
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.812,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 2023.22
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.2333,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 2336.67
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.1794,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 3784.56
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.1303,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 4492.03
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 6.5753,
          "reserved_bw_fee_usd": 900.12,
          "monthly_cost_744h": 5792.14
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.021,
          "reserved_bw_fee_usd": 233.69,
          "monthly_cost_744h": 249.31
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0292,
          "reserved_bw_fee_usd": 276.96,
          "monthly_cost_744h": 298.68
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0402,
          "reserved_bw_fee_usd": 363.51,
          "monthly_cost_744h": 393.42
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.101,
          "reserved_bw_fee_usd": 467.37,
          "monthly_cost_744h": 542.51
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.258,
          "reserved_bw_fee_usd": 467.37,
          "monthly_cost_744h": 659.32
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2967,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 895.83
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.3579,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 941.37
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.5073,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 1052.52
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.6253,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 1140.31
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.1702,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 1545.72
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.4365,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 1743.85
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 1.8411,
          "reserved_bw_fee_usd": 900.12,
          "monthly_cost_744h": 2269.9
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0172,
          "reserved_bw_fee_usd": 233.69,
          "monthly_cost_744h": 246.49
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.024,
          "reserved_bw_fee_usd": 276.96,
          "monthly_cost_744h": 294.82
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.033,
          "reserved_bw_fee_usd": 363.51,
          "monthly_cost_744h": 388.06
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0829,
          "reserved_bw_fee_usd": 467.37,
          "monthly_cost_744h": 529.05
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2119,
          "reserved_bw_fee_usd": 467.37,
          "monthly_cost_744h": 625.02
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2437,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 856.4
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.294,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 893.83
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.4167,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 985.11
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.5137,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 1057.28
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.9613,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 1390.3
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.18,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 1553.01
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 1.5123,
          "reserved_bw_fee_usd": 900.12,
          "monthly_cost_744h": 2025.27
        }
      }
    }
  },
  "Hong Kong": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.254,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 500.56
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3662,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 584.03
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.5941,
          "reserved_bw_fee_usd": 571.23,
          "monthly_cost_744h": 1013.24
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.0038,
          "reserved_bw_fee_usd": 571.23,
          "monthly_cost_744h": 1318.06
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.8001,
          "reserved_bw_fee_usd": 571.23,
          "monthly_cost_744h": 1910.5
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.3708,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 2387.04
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.3503,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 3115.78
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.1242,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 3743.49
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.0829,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 4560.63
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.5843,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 5677.67
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.8029,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 6584.31
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 11.2865,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 9176.11
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1524,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 424.97
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2197,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 475.04
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3564,
          "reserved_bw_fee_usd": 571.23,
          "monthly_cost_744h": 836.39
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.6023,
          "reserved_bw_fee_usd": 571.23,
          "monthly_cost_744h": 1019.34
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.0801,
          "reserved_bw_fee_usd": 571.23,
          "monthly_cost_744h": 1374.82
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.4225,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 1681.5
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.0102,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 2118.75
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.4745,
          "reserved_bw_fee_usd": 675.09,
          "monthly_cost_744h": 2516.12
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.0497,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 3047.93
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.9506,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 3718.2
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.6817,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 4262.13
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 6.7719,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 5817.24
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0889,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 325.79
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1282,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 355.03
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.2079,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 587.43
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3513,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 694.12
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.6301,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 901.54
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.8298,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1093.4
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.9381,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1173.98
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.9383,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1174.13
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.1564,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 1422.94
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.3045,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 2493.5
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.731,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 2810.81
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.9503,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 3717.97
        }
      }
    }
  },
  "Singapore": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2116,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 417.08
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3052,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 486.72
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.4951,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 844.38
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.8365,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1098.39
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.5001,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1592.1
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.9757,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1945.95
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.7919,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 2553.2
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.4368,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 3033.01
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.3652,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 4467.74
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 7.016,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 5695.93
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 8.2364,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 6603.91
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 14.1081,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 10972.46
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.127,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 354.14
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1831,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 395.88
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.297,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 697.0
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.5019,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 849.44
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.9001,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1145.7
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.1854,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1357.97
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.6752,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1722.38
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.0621,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 2010.23
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.2191,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 2871.04
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.2096,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 3607.97
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.9418,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 4152.73
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.4648,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 6773.84
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0741,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 314.78
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1068,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 339.11
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1733,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 604.97
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.2928,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 693.87
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.525,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 866.63
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.6915,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 990.51
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.9772,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1203.07
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.2029,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 1370.99
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.1295,
          "reserved_bw_fee_usd": 519.3,
          "monthly_cost_744h": 1359.65
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.1588,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 2341.83
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 3.2512,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 3457.49
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 5.2905,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 5667.13
        }
      }
    }
  },
  "United Arab Emirates": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.3057,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 1006.39
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.4323,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 1100.58
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.6835,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1547.12
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.8548,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1934.22
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.2042,
          "reserved_bw_fee_usd": 2163.75,
          "monthly_cost_744h": 3059.67
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.5414,
          "reserved_bw_fee_usd": 2596.5,
          "monthly_cost_744h": 3743.3
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.8674,
          "reserved_bw_fee_usd": 3029.25,
          "monthly_cost_744h": 4418.6
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.0878,
          "reserved_bw_fee_usd": 3029.25,
          "monthly_cost_744h": 4582.57
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.5828,
          "reserved_bw_fee_usd": 4760.26,
          "monthly_cost_744h": 6681.86
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.7568,
          "reserved_bw_fee_usd": 7356.76,
          "monthly_cost_744h": 10151.82
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.94,
          "reserved_bw_fee_usd": 10386.01,
          "monthly_cost_744h": 14805.37
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.1601,
          "reserved_bw_fee_usd": 12982.52,
          "monthly_cost_744h": 18309.63
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2445,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 960.86
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3458,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 1036.23
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.5468,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1445.42
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.6839,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1807.07
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.9634,
          "reserved_bw_fee_usd": 2163.75,
          "monthly_cost_744h": 2880.52
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2331,
          "reserved_bw_fee_usd": 2596.5,
          "monthly_cost_744h": 3513.93
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.4939,
          "reserved_bw_fee_usd": 3029.25,
          "monthly_cost_744h": 4140.71
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.6702,
          "reserved_bw_fee_usd": 3029.25,
          "monthly_cost_744h": 4271.88
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.0662,
          "reserved_bw_fee_usd": 4760.26,
          "monthly_cost_744h": 6297.51
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.0054,
          "reserved_bw_fee_usd": 7356.76,
          "monthly_cost_744h": 9592.78
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.752,
          "reserved_bw_fee_usd": 10386.01,
          "monthly_cost_744h": 13921.5
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 5.7281,
          "reserved_bw_fee_usd": 12982.52,
          "monthly_cost_744h": 17244.23
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1223,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 869.94
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1729,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 907.59
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.2734,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1242.01
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3419,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1552.62
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.4817,
          "reserved_bw_fee_usd": 2163.75,
          "monthly_cost_744h": 2522.13
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.6166,
          "reserved_bw_fee_usd": 2596.5,
          "monthly_cost_744h": 3055.25
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.7469,
          "reserved_bw_fee_usd": 3029.25,
          "monthly_cost_744h": 3584.94
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.8351,
          "reserved_bw_fee_usd": 3029.25,
          "monthly_cost_744h": 3650.56
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.0331,
          "reserved_bw_fee_usd": 4760.26,
          "monthly_cost_744h": 5528.89
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.5027,
          "reserved_bw_fee_usd": 7356.76,
          "monthly_cost_744h": 8474.77
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.376,
          "reserved_bw_fee_usd": 10386.01,
          "monthly_cost_744h": 12153.75
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.8641,
          "reserved_bw_fee_usd": 12982.52,
          "monthly_cost_744h": 15113.41
        }
      }
    }
  },
  "South Africa": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2652,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1235.91
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.4169,
          "reserved_bw_fee_usd": 1211.7,
          "monthly_cost_744h": 1521.87
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.7585,
          "reserved_bw_fee_usd": 1557.9,
          "monthly_cost_744h": 2122.22
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.0547,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 2515.7
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.652,
          "reserved_bw_fee_usd": 1990.65,
          "monthly_cost_744h": 3219.74
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.25,
          "reserved_bw_fee_usd": 1990.65,
          "monthly_cost_744h": 3664.65
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.8483,
          "reserved_bw_fee_usd": 1990.65,
          "monthly_cost_744h": 4109.79
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.2952,
          "reserved_bw_fee_usd": 2596.5,
          "monthly_cost_744h": 5048.13
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 4.549,
          "reserved_bw_fee_usd": 4327.51,
          "monthly_cost_744h": 7711.97
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 7.357,
          "reserved_bw_fee_usd": 6924.01,
          "monthly_cost_744h": 12397.62
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 12.4909,
          "reserved_bw_fee_usd": 10386.01,
          "monthly_cost_744h": 19679.24
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 17.937,
          "reserved_bw_fee_usd": 12982.52,
          "monthly_cost_744h": 26327.65
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2121,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1196.4
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3336,
          "reserved_bw_fee_usd": 1211.7,
          "monthly_cost_744h": 1459.9
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.6068,
          "reserved_bw_fee_usd": 1557.9,
          "monthly_cost_744h": 2009.36
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.8438,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 2358.79
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.3216,
          "reserved_bw_fee_usd": 1990.65,
          "monthly_cost_744h": 2973.92
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.8,
          "reserved_bw_fee_usd": 1990.65,
          "monthly_cost_744h": 3329.85
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.2787,
          "reserved_bw_fee_usd": 1990.65,
          "monthly_cost_744h": 3686.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.6361,
          "reserved_bw_fee_usd": 2596.5,
          "monthly_cost_744h": 4557.76
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.6392,
          "reserved_bw_fee_usd": 4327.51,
          "monthly_cost_744h": 7035.07
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.8856,
          "reserved_bw_fee_usd": 6924.01,
          "monthly_cost_744h": 11302.9
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 9.9927,
          "reserved_bw_fee_usd": 10386.01,
          "monthly_cost_744h": 17820.58
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 14.3496,
          "reserved_bw_fee_usd": 12982.52,
          "monthly_cost_744h": 23658.62
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1061,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1117.54
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1668,
          "reserved_bw_fee_usd": 1211.7,
          "monthly_cost_744h": 1335.8
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3034,
          "reserved_bw_fee_usd": 1557.9,
          "monthly_cost_744h": 1783.63
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.4219,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 2044.89
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.6608,
          "reserved_bw_fee_usd": 1990.65,
          "monthly_cost_744h": 2482.29
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.9,
          "reserved_bw_fee_usd": 1990.65,
          "monthly_cost_744h": 2660.25
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.1393,
          "reserved_bw_fee_usd": 1990.65,
          "monthly_cost_744h": 2838.29
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.3181,
          "reserved_bw_fee_usd": 2596.5,
          "monthly_cost_744h": 3577.17
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.8196,
          "reserved_bw_fee_usd": 4327.51,
          "monthly_cost_744h": 5681.29
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.9428,
          "reserved_bw_fee_usd": 6924.01,
          "monthly_cost_744h": 9113.45
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.9964,
          "reserved_bw_fee_usd": 10386.01,
          "monthly_cost_744h": 14103.33
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.1748,
          "reserved_bw_fee_usd": 12982.52,
          "monthly_cost_744h": 18320.57
        }
      }
    }
  },
  "Ireland": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0674,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 361.73
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0971,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 383.82
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1576,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 740.41
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3283,
          "reserved_bw_fee_usd": 761.64,
          "monthly_cost_744h": 1005.9
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.5431,
          "reserved_bw_fee_usd": 761.64,
          "monthly_cost_744h": 1165.71
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.6377,
          "reserved_bw_fee_usd": 761.64,
          "monthly_cost_744h": 1236.09
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.6939,
          "reserved_bw_fee_usd": 804.92,
          "monthly_cost_744h": 1321.18
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.7184,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1573.09
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.6989,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 2302.58
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.4478,
          "reserved_bw_fee_usd": 1211.7,
          "monthly_cost_744h": 3032.86
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 3.0547,
          "reserved_bw_fee_usd": 2042.58,
          "monthly_cost_744h": 4315.28
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 4.2134,
          "reserved_bw_fee_usd": 2587.85,
          "monthly_cost_744h": 5722.62
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0189,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 325.64
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0272,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 331.82
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0441,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 655.97
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0919,
          "reserved_bw_fee_usd": 761.64,
          "monthly_cost_744h": 830.01
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.1521,
          "reserved_bw_fee_usd": 761.64,
          "monthly_cost_744h": 874.8
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.1786,
          "reserved_bw_fee_usd": 761.64,
          "monthly_cost_744h": 894.52
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.1943,
          "reserved_bw_fee_usd": 804.92,
          "monthly_cost_744h": 949.48
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.2012,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1188.29
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.4757,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1392.52
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.6854,
          "reserved_bw_fee_usd": 1211.7,
          "monthly_cost_744h": 1721.64
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.8553,
          "reserved_bw_fee_usd": 2042.58,
          "monthly_cost_744h": 2678.92
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 1.1798,
          "reserved_bw_fee_usd": 2587.85,
          "monthly_cost_744h": 3465.62
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0155,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 323.11
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0223,
          "reserved_bw_fee_usd": 311.58,
          "monthly_cost_744h": 328.17
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0362,
          "reserved_bw_fee_usd": 623.16,
          "monthly_cost_744h": 650.09
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0755,
          "reserved_bw_fee_usd": 761.64,
          "monthly_cost_744h": 817.81
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.1249,
          "reserved_bw_fee_usd": 761.64,
          "monthly_cost_744h": 854.57
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.1467,
          "reserved_bw_fee_usd": 761.64,
          "monthly_cost_744h": 870.78
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.1596,
          "reserved_bw_fee_usd": 804.92,
          "monthly_cost_744h": 923.66
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.1652,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1161.51
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.3907,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1329.28
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.563,
          "reserved_bw_fee_usd": 1211.7,
          "monthly_cost_744h": 1630.57
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.7026,
          "reserved_bw_fee_usd": 2042.58,
          "monthly_cost_744h": 2565.31
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.9691,
          "reserved_bw_fee_usd": 2587.85,
          "monthly_cost_744h": 3308.86
        }
      }
    }
  },
  "Canada": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1703,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 386.35
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2456,
          "reserved_bw_fee_usd": 389.48,
          "monthly_cost_744h": 572.21
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3984,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 945.54
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.6186,
          "reserved_bw_fee_usd": 683.75,
          "monthly_cost_744h": 1143.99
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.0625,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 1508.87
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2492,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 1647.77
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.9624,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 2178.4
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.418,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 2517.36
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.1008,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 3085.95
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.1753,
          "reserved_bw_fee_usd": 1125.15,
          "monthly_cost_744h": 4231.57
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.8223,
          "reserved_bw_fee_usd": 1523.28,
          "monthly_cost_744h": 5855.07
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.3538,
          "reserved_bw_fee_usd": 2449.37,
          "monthly_cost_744h": 8664.6
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0937,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 329.36
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1351,
          "reserved_bw_fee_usd": 389.48,
          "monthly_cost_744h": 489.99
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.2191,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 812.14
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3402,
          "reserved_bw_fee_usd": 683.75,
          "monthly_cost_744h": 936.86
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.5844,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 1153.16
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.6871,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 1229.57
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.0793,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 1521.37
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.3299,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 1707.82
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.7055,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 2047.84
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.2964,
          "reserved_bw_fee_usd": 1125.15,
          "monthly_cost_744h": 2833.67
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 3.2022,
          "reserved_bw_fee_usd": 1523.28,
          "monthly_cost_744h": 3905.72
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 4.5946,
          "reserved_bw_fee_usd": 2449.37,
          "monthly_cost_744h": 5867.75
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0511,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 297.67
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0737,
          "reserved_bw_fee_usd": 389.48,
          "monthly_cost_744h": 444.31
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1195,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 738.04
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1856,
          "reserved_bw_fee_usd": 683.75,
          "monthly_cost_744h": 821.84
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.3188,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 955.56
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.3748,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 997.22
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.5887,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 1156.36
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.7254,
          "reserved_bw_fee_usd": 718.37,
          "monthly_cost_744h": 1258.07
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.9302,
          "reserved_bw_fee_usd": 778.95,
          "monthly_cost_744h": 1471.02
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.2526,
          "reserved_bw_fee_usd": 1125.15,
          "monthly_cost_744h": 2057.08
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.7467,
          "reserved_bw_fee_usd": 1523.28,
          "monthly_cost_744h": 2822.82
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.5061,
          "reserved_bw_fee_usd": 2449.37,
          "monthly_cost_744h": 4313.91
        }
      }
    }
  },
  "Australia": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.3513,
          "reserved_bw_fee_usd": 346.2,
          "monthly_cost_744h": 607.57
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.4969,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 845.72
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.7856,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 1320.17
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.302,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 1704.37
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.29,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 2439.44
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.9819,
          "reserved_bw_fee_usd": 822.23,
          "monthly_cost_744h": 3040.76
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 4.18,
          "reserved_bw_fee_usd": 822.23,
          "monthly_cost_744h": 3932.15
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 5.0982,
          "reserved_bw_fee_usd": 908.78,
          "monthly_cost_744h": 4701.84
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 9.8652,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 8378.31
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 16.562,
          "reserved_bw_fee_usd": 1350.18,
          "monthly_cost_744h": 13672.31
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 21.8583,
          "reserved_bw_fee_usd": 1756.97,
          "monthly_cost_744h": 18019.55
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 36.4514,
          "reserved_bw_fee_usd": 2709.02,
          "monthly_cost_744h": 29828.86
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2108,
          "reserved_bw_fee_usd": 346.2,
          "monthly_cost_744h": 503.04
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2981,
          "reserved_bw_fee_usd": 476.03,
          "monthly_cost_744h": 697.82
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.4714,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 1086.4
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.7812,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 1316.89
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.374,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 1757.94
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.7891,
          "reserved_bw_fee_usd": 822.23,
          "monthly_cost_744h": 2153.32
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.508,
          "reserved_bw_fee_usd": 822.23,
          "monthly_cost_744h": 2688.18
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.0589,
          "reserved_bw_fee_usd": 908.78,
          "monthly_cost_744h": 3184.6
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.9191,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 5442.41
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 9.9372,
          "reserved_bw_fee_usd": 1350.18,
          "monthly_cost_744h": 8743.46
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 13.115,
          "reserved_bw_fee_usd": 1756.97,
          "monthly_cost_744h": 11514.53
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 21.8708,
          "reserved_bw_fee_usd": 2709.02,
          "monthly_cost_744h": 18980.9
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.123,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 351.16
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1391,
          "reserved_bw_fee_usd": 389.48,
          "monthly_cost_744h": 492.97
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.22,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 726.26
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.319,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 799.92
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.4007,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 860.7
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.3131,
          "reserved_bw_fee_usd": 605.85,
          "monthly_cost_744h": 838.8
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.4389,
          "reserved_bw_fee_usd": 605.85,
          "monthly_cost_744h": 932.39
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.5353,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 1047.39
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.0358,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 1506.32
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.739,
          "reserved_bw_fee_usd": 952.05,
          "monthly_cost_744h": 2245.87
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.2951,
          "reserved_bw_fee_usd": 1211.7,
          "monthly_cost_744h": 2919.25
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.8274,
          "reserved_bw_fee_usd": 1904.1,
          "monthly_cost_744h": 4751.69
        }
      }
    }
  },
  "India": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.4586,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 990.33
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.685,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1375.14
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 1.1644,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1731.81
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 2.0383,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 2814.75
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 3.7868,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 4115.63
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 5.0915,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 5086.33
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 7.3014,
          "reserved_bw_fee_usd": 1514.63,
          "monthly_cost_744h": 6946.87
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 9.0556,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 8468.37
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 11.8141,
          "reserved_bw_fee_usd": 2163.75,
          "monthly_cost_744h": 10953.44
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 14.7521,
          "reserved_bw_fee_usd": 3462.0,
          "monthly_cost_744h": 14437.56
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 21.8583,
          "reserved_bw_fee_usd": 5193.01,
          "monthly_cost_744h": 21455.59
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 25.8946,
          "reserved_bw_fee_usd": 8655.01,
          "monthly_cost_744h": 27920.59
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.3669,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 922.1
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.548,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1273.21
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.9315,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1558.54
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.6307,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 2511.49
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 3.0294,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 3552.12
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 4.0732,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 4328.71
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 5.8411,
          "reserved_bw_fee_usd": 1514.63,
          "monthly_cost_744h": 5860.41
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 7.2445,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 7120.91
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 9.4513,
          "reserved_bw_fee_usd": 2163.75,
          "monthly_cost_744h": 9195.52
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 11.8017,
          "reserved_bw_fee_usd": 3462.0,
          "monthly_cost_744h": 12242.46
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 17.4866,
          "reserved_bw_fee_usd": 5193.01,
          "monthly_cost_744h": 18203.04
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 20.7157,
          "reserved_bw_fee_usd": 8655.01,
          "monthly_cost_744h": 24067.49
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1834,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 785.58
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.274,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1069.36
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.4658,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1212.06
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.8153,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1904.83
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.5147,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 2425.19
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.0366,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 2813.48
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.9205,
          "reserved_bw_fee_usd": 1514.63,
          "monthly_cost_744h": 3687.48
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.6222,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 4425.92
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 4.7256,
          "reserved_bw_fee_usd": 2163.75,
          "monthly_cost_744h": 5679.6
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.9008,
          "reserved_bw_fee_usd": 3462.0,
          "monthly_cost_744h": 7852.2
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 8.7433,
          "reserved_bw_fee_usd": 5193.01,
          "monthly_cost_744h": 11698.03
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.3578,
          "reserved_bw_fee_usd": 8655.01,
          "monthly_cost_744h": 16361.21
        }
      }
    }
  },
  "Brazil": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1716,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 776.8
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2427,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1046.07
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3837,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1150.97
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.4905,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1663.18
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.6924,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1813.4
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.628,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 2509.48
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.1708,
          "reserved_bw_fee_usd": 1514.63,
          "monthly_cost_744h": 3129.71
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.7857,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 3803.56
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.3046,
          "reserved_bw_fee_usd": 2163.75,
          "monthly_cost_744h": 6110.37
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 7.5516,
          "reserved_bw_fee_usd": 3462.0,
          "monthly_cost_744h": 9080.39
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 11.1366,
          "reserved_bw_fee_usd": 5193.01,
          "monthly_cost_744h": 13478.64
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 20.9388,
          "reserved_bw_fee_usd": 8655.01,
          "monthly_cost_744h": 24233.48
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1373,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 751.28
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1941,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1009.91
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.307,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1093.91
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3924,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1590.2
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.5539,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1710.35
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.3024,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 2267.24
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.7366,
          "reserved_bw_fee_usd": 1514.63,
          "monthly_cost_744h": 2806.66
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.2286,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 3389.08
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 4.2437,
          "reserved_bw_fee_usd": 2163.75,
          "monthly_cost_744h": 5321.06
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.0413,
          "reserved_bw_fee_usd": 3462.0,
          "monthly_cost_744h": 7956.73
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 8.9092,
          "reserved_bw_fee_usd": 5193.01,
          "monthly_cost_744h": 11821.45
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 16.7511,
          "reserved_bw_fee_usd": 8655.01,
          "monthly_cost_744h": 21117.83
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0686,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 700.17
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0971,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 937.74
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1535,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 979.7
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1962,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1444.22
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.277,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1504.34
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.6512,
          "reserved_bw_fee_usd": 1298.25,
          "monthly_cost_744h": 1782.74
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.8683,
          "reserved_bw_fee_usd": 1514.63,
          "monthly_cost_744h": 2160.65
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.1143,
          "reserved_bw_fee_usd": 1731.0,
          "monthly_cost_744h": 2560.04
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.1219,
          "reserved_bw_fee_usd": 2163.75,
          "monthly_cost_744h": 3742.44
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.0207,
          "reserved_bw_fee_usd": 3462.0,
          "monthly_cost_744h": 5709.4
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.4546,
          "reserved_bw_fee_usd": 5193.01,
          "monthly_cost_744h": 8507.23
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.3755,
          "reserved_bw_fee_usd": 8655.01,
          "monthly_cost_744h": 14886.38
        }
      }
    }
  },
  "Japan": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2116,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 417.08
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3052,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 486.72
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.4951,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 930.93
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.8365,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 1184.94
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.5001,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 1678.65
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.9757,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 2119.05
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.7919,
          "reserved_bw_fee_usd": 657.78,
          "monthly_cost_744h": 2734.95
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.4368,
          "reserved_bw_fee_usd": 666.44,
          "monthly_cost_744h": 3223.42
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.6476,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 4937.49
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 8.0954,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 6758.66
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 11.9211,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 9604.98
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 15.8716,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 12544.15
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1693,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 385.61
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2441,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 441.26
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3961,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 857.28
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.6692,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 1060.46
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.2001,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 1455.45
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.5806,
          "reserved_bw_fee_usd": 588.54,
          "monthly_cost_744h": 1764.51
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.2336,
          "reserved_bw_fee_usd": 588.54,
          "monthly_cost_744h": 2250.34
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.7495,
          "reserved_bw_fee_usd": 666.44,
          "monthly_cost_744h": 2712.07
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 4.5181,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 4097.15
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.4763,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 5554.05
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 9.5369,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 7831.13
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 12.6973,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 10182.47
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1111,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 342.31
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1389,
          "reserved_bw_fee_usd": 259.65,
          "monthly_cost_744h": 362.99
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.2599,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 755.95
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.4392,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 889.34
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.6826,
          "reserved_bw_fee_usd": 562.58,
          "monthly_cost_744h": 1070.43
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.8989,
          "reserved_bw_fee_usd": 605.85,
          "monthly_cost_744h": 1274.63
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2703,
          "reserved_bw_fee_usd": 605.85,
          "monthly_cost_744h": 1550.95
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.5638,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 1812.6
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.5697,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 2647.54
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.2501,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 3897.75
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 6.2586,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 5392.08
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.3326,
          "reserved_bw_fee_usd": 735.68,
          "monthly_cost_744h": 6935.13
        }
      }
    }
  },
  "United Kingdom": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1665,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 556.63
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2317,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 605.13
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3587,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 699.62
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.7212,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 969.32
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.1516,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 1505.92
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.3247,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 1634.71
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.4203,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 1705.83
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.4496,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1944.0
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.3838,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 3383.05
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.7186,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 4549.24
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.9578,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 5471.2
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.5146,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 6629.46
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0466,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 467.42
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0649,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 481.04
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1004,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 507.45
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.2019,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 582.96
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.3225,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 889.07
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.3709,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 925.08
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.3977,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 945.02
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.4059,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1167.49
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.9475,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1570.44
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.3212,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 2021.57
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.6682,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 2279.74
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.1041,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 2604.05
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0383,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 461.25
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0533,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 472.41
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0825,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 494.13
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1659,
          "reserved_bw_fee_usd": 432.75,
          "monthly_cost_744h": 556.18
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2649,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 846.22
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.3047,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 875.83
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.3267,
          "reserved_bw_fee_usd": 649.13,
          "monthly_cost_744h": 892.19
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.3334,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1113.55
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.7783,
          "reserved_bw_fee_usd": 865.5,
          "monthly_cost_744h": 1444.56
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.0853,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 1846.06
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.3703,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 2058.1
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 1.7284,
          "reserved_bw_fee_usd": 1038.6,
          "monthly_cost_744h": 2324.53
        }
      }
    }
  }
};

// Expose globalement pour usage dans le heatmap tool
if (typeof window !== 'undefined') {
  window.OB_PRICING = OB_PRICING;
  window.OB_COUNTRIES = Object.keys(OB_PRICING);
}
