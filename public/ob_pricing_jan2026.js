// Orange Business ODCC Pricing Data
// Source: ODCC_0126.csv (Janvier 2026)
// Généré le: 2026-01-26 22:13:27
//
// Structure: OB_PRICING[Country][Architecture][Geography Type][Bandwidth]
//
// ⚠️ IMPORTANT: Ce fichier contient UNIQUEMENT les données "Private" (pas IPSEC)
//
// Formule prix mensuel OB: Reserved BW fee ($/mois) + (USD hourly rate × 744h)
// Note: OB utilise 744h/mois (31 jours × 24h) alors que les CSP utilisent 730h/mois
//
// 15 pays disponibles
// 2 architectures: High Availability, Standard  
// 3 géographies: Local, Regional, Inter - Regional
// 12 bandes passantes: 10M, 20M, 50M, 100M, 200M, 300M, 400M, 500M, 1G, 2G, 5G, 10G

const OB_PRICING = {
  "Germany": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1538537209,
          "reserved_bw_fee_usd": 480.0,
          "monthly_cost_744h": 594.47
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2141407463,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 879.32
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3315253147,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1206.65
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.6665933631,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1455.95
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.064488387,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1751.98
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2244531536,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1870.99
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.3127873547,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1936.71
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.3398619683,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1956.86
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.1276805795,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 3286.99
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.2307472662,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 5595.68
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.6484592501,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 6650.45
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.853011626,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 9034.64
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0430790418,
          "reserved_bw_fee_usd": 480.0,
          "monthly_cost_744h": 512.05
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.059959409,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 764.61
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0928270881,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1029.06
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1866461417,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1098.86
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2980567484,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1181.75
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.342846883,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1215.08
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.3675804593,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1233.48
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.3751613511,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1239.12
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.8757505623,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1611.56
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.7446092345,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 2257.99
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.14156859,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 2553.33
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.0388432553,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 3220.9
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0353863558,
          "reserved_bw_fee_usd": 480.0,
          "monthly_cost_744h": 506.33
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0492523716,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 756.64
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0762508224,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1016.73
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1533164735,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1074.07
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.244832329,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1142.16
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2816242253,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1169.53
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.3019410916,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1184.64
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.3081682527,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1189.28
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.7193665333,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 1495.21
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.4330718712,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 2026.21
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.7591456275,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 2268.8
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.496192674,
          "reserved_bw_fee_usd": 960.0,
          "monthly_cost_744h": 2817.17
        }
      }
    }
  },
  "Netherlands": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1334411881,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 459.28
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1924127017,
          "reserved_bw_fee_usd": 540.0,
          "monthly_cost_744h": 683.16
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3121375824,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 952.23
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.650193886,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1323.74
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.075660829,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1640.29
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2631567702,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1779.79
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.3742993478,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1862.48
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.4230188551,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1898.73
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.5237026901,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 2717.63
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.5250350784,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 4266.63
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.0587646967,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 6151.72
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.7363188734,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 8143.82
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0373635327,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 387.8
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0538755565,
          "reserved_bw_fee_usd": 540.0,
          "monthly_cost_744h": 580.08
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0873985231,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 785.02
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1820542881,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 975.45
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.3011850321,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1064.08
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.3536838957,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1103.14
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.3848038174,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1126.29
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.3984452794,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1136.44
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.7066367532,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1365.74
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.267009822,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 1842.66
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.9764541151,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 2370.48
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.7261692845,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 2928.27
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0306914733,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 382.83
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0442549214,
          "reserved_bw_fee_usd": 540.0,
          "monthly_cost_744h": 572.93
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0717916439,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 773.41
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1495445938,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 951.26
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2474019907,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1024.07
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2905260572,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1056.15
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.31608885,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1075.17
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.3272943367,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1083.51
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.5804516187,
          "reserved_bw_fee_usd": 840.0,
          "monthly_cost_744h": 1271.86
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.040758068,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 1674.32
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.6235158802,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 2107.9
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.2393533409,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 2566.08
        }
      }
    }
  },
  "United States": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1815300743,
          "reserved_bw_fee_usd": 320.0,
          "monthly_cost_744h": 455.06
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.252661979,
          "reserved_bw_fee_usd": 480.0,
          "monthly_cost_744h": 667.98
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.391162558,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1091.02
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.5862139714,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1236.14
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.9719290412,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1523.12
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.1192835494,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1632.75
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.732659151,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 2089.1
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.1043796428,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 2365.66
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.6640693157,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 2782.07
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.9045456634,
          "reserved_bw_fee_usd": 920.0,
          "monthly_cost_744h": 5312.98
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 8.0989214119,
          "reserved_bw_fee_usd": 920.0,
          "monthly_cost_744h": 6945.6
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 12.9108385896,
          "reserved_bw_fee_usd": 920.0,
          "monthly_cost_744h": 10525.66
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0998415409,
          "reserved_bw_fee_usd": 320.0,
          "monthly_cost_744h": 394.28
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1389640884,
          "reserved_bw_fee_usd": 480.0,
          "monthly_cost_744h": 583.39
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.2151394069,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 960.06
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3224176843,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1039.88
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.5345609727,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1197.71
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.6156059522,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1258.01
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.9529625331,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1509.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.1574088035,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1661.11
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.4652381236,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1890.14
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.2475001148,
          "reserved_bw_fee_usd": 920.0,
          "monthly_cost_744h": 3336.14
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.4544067766,
          "reserved_bw_fee_usd": 920.0,
          "monthly_cost_744h": 4234.08
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.1009612243,
          "reserved_bw_fee_usd": 920.0,
          "monthly_cost_744h": 6203.12
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0544590223,
          "reserved_bw_fee_usd": 320.0,
          "monthly_cost_744h": 360.52
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0757985937,
          "reserved_bw_fee_usd": 480.0,
          "monthly_cost_744h": 536.39
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1173487674,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 887.31
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1758641914,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 930.84
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2915787124,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1016.93
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.3357850648,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1049.82
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.5197977453,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1186.73
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.6313138928,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1269.7
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.7992207947,
          "reserved_bw_fee_usd": 800.0,
          "monthly_cost_744h": 1394.62
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.771363699,
          "reserved_bw_fee_usd": 920.0,
          "monthly_cost_744h": 2237.89
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.4296764236,
          "reserved_bw_fee_usd": 920.0,
          "monthly_cost_744h": 2727.68
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.8732515769,
          "reserved_bw_fee_usd": 920.0,
          "monthly_cost_744h": 3801.7
        }
      }
    }
  },
  "France": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.086542718,
          "reserved_bw_fee_usd": 270.0,
          "monthly_cost_744h": 334.39
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1204541698,
          "reserved_bw_fee_usd": 320.0,
          "monthly_cost_744h": 409.62
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1657626574,
          "reserved_bw_fee_usd": 420.0,
          "monthly_cost_744h": 543.33
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.4166208519,
          "reserved_bw_fee_usd": 540.0,
          "monthly_cost_744h": 849.97
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.064488387,
          "reserved_bw_fee_usd": 540.0,
          "monthly_cost_744h": 1331.98
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2244531536,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1690.99
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.4768857741,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1878.8
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.0935343255,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 2337.59
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.5803364781,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 2699.77
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.8288291313,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 4372.65
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.9275559189,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 5190.1
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.5971081382,
          "reserved_bw_fee_usd": 1040.0,
          "monthly_cost_744h": 6692.25
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.024231961,
          "reserved_bw_fee_usd": 270.0,
          "monthly_cost_744h": 288.03
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0337271675,
          "reserved_bw_fee_usd": 320.0,
          "monthly_cost_744h": 345.09
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0464135441,
          "reserved_bw_fee_usd": 420.0,
          "monthly_cost_744h": 454.53
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1166538385,
          "reserved_bw_fee_usd": 540.0,
          "monthly_cost_744h": 626.79
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.2980567484,
          "reserved_bw_fee_usd": 540.0,
          "monthly_cost_744h": 761.75
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.342846883,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1035.08
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.4135280167,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1087.66
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.5861896111,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1216.13
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.7224942139,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1317.54
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.3520721568,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1785.94
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.6597156573,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 2014.83
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.1271902787,
          "reserved_bw_fee_usd": 1040.0,
          "monthly_cost_744h": 2622.63
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0199048251,
          "reserved_bw_fee_usd": 270.0,
          "monthly_cost_744h": 284.81
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0277044591,
          "reserved_bw_fee_usd": 320.0,
          "monthly_cost_744h": 340.61
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0381254112,
          "reserved_bw_fee_usd": 420.0,
          "monthly_cost_744h": 448.37
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0958227959,
          "reserved_bw_fee_usd": 540.0,
          "monthly_cost_744h": 611.29
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.244832329,
          "reserved_bw_fee_usd": 540.0,
          "monthly_cost_744h": 722.16
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2816242253,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 989.53
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.339683728,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1032.72
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.4815128949,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1138.25
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.59347739,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1221.55
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.1106307002,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1606.31
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.3633378613,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 1794.32
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 1.7473348718,
          "reserved_bw_fee_usd": 1040.0,
          "monthly_cost_744h": 2340.02
        }
      }
    }
  },
  "Hong Kong": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2934414457,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 578.32
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.4231216926,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 674.8
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.686400539,
          "reserved_bw_fee_usd": 660.0,
          "monthly_cost_744h": 1170.68
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.1598425449,
          "reserved_bw_fee_usd": 660.0,
          "monthly_cost_744h": 1522.92
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.079889649,
          "reserved_bw_fee_usd": 660.0,
          "monthly_cost_744h": 2207.44
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.7392770646,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 2758.02
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.8709685141,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 3600.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.7650923077,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 4325.23
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.8727412241,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 5269.32
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 7.6074783558,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 6559.96
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 9.0154676125,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 7607.51
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 13.0403714356,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 10602.04
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1760648674,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 490.99
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2538730156,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 548.88
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.4118403234,
          "reserved_bw_fee_usd": 660.0,
          "monthly_cost_744h": 966.41
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.6959055269,
          "reserved_bw_fee_usd": 660.0,
          "monthly_cost_744h": 1177.75
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.2479337894,
          "reserved_bw_fee_usd": 660.0,
          "monthly_cost_744h": 1588.46
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.6435662387,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 1942.81
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.3225811085,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 2448.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.8590553846,
          "reserved_bw_fee_usd": 780.0,
          "monthly_cost_744h": 2907.14
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.5236447345,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 3521.59
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.5644870135,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 4295.98
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.4092805675,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 4924.5
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.8242228613,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 6721.22
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.102704506,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 376.41
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1480925924,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 410.18
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.2402401887,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 678.74
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.4059448907,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 802.02
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.7279613772,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 1041.6
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.9587469726,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1263.31
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.0838711839,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1356.4
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.0840585,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1356.54
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.3360486285,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 1644.02
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.6626174245,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 2880.99
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 3.1554136644,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 3247.63
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 4.5641300025,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 4295.71
        }
      }
    }
  },
  "Singapore": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2445345381,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 481.93
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3526014105,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 562.34
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.5720004492,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 975.57
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.966535454,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1269.1
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.7332413742,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1839.53
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.2827308871,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 2248.35
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.2258070951,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 2950.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.9709102565,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 3504.36
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 6.1990046254,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 5162.06
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 8.1063293955,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 6581.11
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 9.5163269244,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 7630.15
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 16.3004642945,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 12677.55
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1467207228,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 409.16
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2115608463,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 457.4
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3432002695,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 805.34
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.5799212724,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 981.46
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.0399448245,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1323.72
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.3696385323,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1569.01
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.9354842571,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1990.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.3825461539,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 2322.61
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.7194027753,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 3317.24
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.8637976373,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 4168.67
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.7097961546,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 4798.09
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.7802785767,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 7826.53
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0855870883,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 363.68
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1234104937,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 391.82
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.2002001572,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 698.95
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3382874089,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 801.69
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.606634481,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1001.34
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.7989558105,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1144.42
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.1290324833,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1390.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.3898185898,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 1584.03
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.3050536054,
          "reserved_bw_fee_usd": 600.0,
          "monthly_cost_744h": 1570.96
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.4942551986,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 2705.73
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 3.7564448386,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 3994.79
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 6.1126741104,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 6547.83
        }
      }
    }
  },
  "United Arab Emirates": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.3531720503,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 1162.76
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.4994607033,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 1271.6
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.7897167121,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1787.55
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.9876765651,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 2234.83
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.3913622215,
          "reserved_bw_fee_usd": 2500.0,
          "monthly_cost_744h": 3535.17
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.780968154,
          "reserved_bw_fee_usd": 3000.0,
          "monthly_cost_744h": 4325.04
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.1575402795,
          "reserved_bw_fee_usd": 3500.0,
          "monthly_cost_744h": 5105.21
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.4122033645,
          "reserved_bw_fee_usd": 3500.0,
          "monthly_cost_744h": 5294.68
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.9841797696,
          "reserved_bw_fee_usd": 5500.0,
          "monthly_cost_744h": 7720.23
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.3405878657,
          "reserved_bw_fee_usd": 8500.0,
          "monthly_cost_744h": 11729.4
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 6.8630720199,
          "reserved_bw_fee_usd": 12000.0,
          "monthly_cost_744h": 17106.13
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.272824773,
          "reserved_bw_fee_usd": 15000.0,
          "monthly_cost_744h": 21154.98
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2825376402,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 1110.21
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3995685627,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 1197.28
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.6317733697,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1670.04
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.7901412521,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 2087.87
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.1130897772,
          "reserved_bw_fee_usd": 2500.0,
          "monthly_cost_744h": 3328.14
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.4247745232,
          "reserved_bw_fee_usd": 3000.0,
          "monthly_cost_744h": 4060.03
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.7260322236,
          "reserved_bw_fee_usd": 3500.0,
          "monthly_cost_744h": 4784.17
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.9297626916,
          "reserved_bw_fee_usd": 3500.0,
          "monthly_cost_744h": 4935.74
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.3873438157,
          "reserved_bw_fee_usd": 5500.0,
          "monthly_cost_744h": 7276.18
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.4724702926,
          "reserved_bw_fee_usd": 8500.0,
          "monthly_cost_744h": 11083.52
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.4904576159,
          "reserved_bw_fee_usd": 12000.0,
          "monthly_cost_744h": 16084.9
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 6.6182598184,
          "reserved_bw_fee_usd": 15000.0,
          "monthly_cost_744h": 19923.99
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1412688201,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 1005.1
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1997842813,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 1048.64
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3158866849,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1435.02
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3950706261,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 1793.93
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.5565448886,
          "reserved_bw_fee_usd": 2500.0,
          "monthly_cost_744h": 2914.07
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.7123872616,
          "reserved_bw_fee_usd": 3000.0,
          "monthly_cost_744h": 3530.02
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.8630161118,
          "reserved_bw_fee_usd": 3500.0,
          "monthly_cost_744h": 4142.08
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.9648813458,
          "reserved_bw_fee_usd": 3500.0,
          "monthly_cost_744h": 4217.87
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.1936719079,
          "reserved_bw_fee_usd": 5500.0,
          "monthly_cost_744h": 6388.09
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.7362351463,
          "reserved_bw_fee_usd": 8500.0,
          "monthly_cost_744h": 9791.76
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.745228808,
          "reserved_bw_fee_usd": 12000.0,
          "monthly_cost_744h": 14042.45
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.3091299092,
          "reserved_bw_fee_usd": 15000.0,
          "monthly_cost_744h": 17461.99
        }
      }
    }
  },
  "South Africa": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.3063641313,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1427.93
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.4817375555,
          "reserved_bw_fee_usd": 1400.0,
          "monthly_cost_744h": 1758.41
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.8763252597,
          "reserved_bw_fee_usd": 1800.0,
          "monthly_cost_744h": 2451.99
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.2186144963,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 2906.65
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.9087514821,
          "reserved_bw_fee_usd": 2300.0,
          "monthly_cost_744h": 3720.11
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.5996045988,
          "reserved_bw_fee_usd": 2300.0,
          "monthly_cost_744h": 4234.11
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.2909833255,
          "reserved_bw_fee_usd": 2300.0,
          "monthly_cost_744h": 4748.49
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.8072195364,
          "reserved_bw_fee_usd": 3000.0,
          "monthly_cost_744h": 5832.57
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.255965018,
          "reserved_bw_fee_usd": 5000.0,
          "monthly_cost_744h": 8910.44
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 8.5002877085,
          "reserved_bw_fee_usd": 8000.0,
          "monthly_cost_744h": 14324.21
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 14.4319570518,
          "reserved_bw_fee_usd": 12000.0,
          "monthly_cost_744h": 22737.38
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 20.7243686865,
          "reserved_bw_fee_usd": 15000.0,
          "monthly_cost_744h": 30418.93
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2450913051,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1382.35
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3853900444,
          "reserved_bw_fee_usd": 1400.0,
          "monthly_cost_744h": 1686.73
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.7010602077,
          "reserved_bw_fee_usd": 1800.0,
          "monthly_cost_744h": 2321.59
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.9748915971,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 2725.32
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.5270011857,
          "reserved_bw_fee_usd": 2300.0,
          "monthly_cost_744h": 3436.09
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.079683679,
          "reserved_bw_fee_usd": 2300.0,
          "monthly_cost_744h": 3847.28
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.6327866604,
          "reserved_bw_fee_usd": 2300.0,
          "monthly_cost_744h": 4258.79
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.0457756291,
          "reserved_bw_fee_usd": 3000.0,
          "monthly_cost_744h": 5266.06
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 4.2047720144,
          "reserved_bw_fee_usd": 5000.0,
          "monthly_cost_744h": 8128.35
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.8002301668,
          "reserved_bw_fee_usd": 8000.0,
          "monthly_cost_744h": 13059.37
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 11.5455656414,
          "reserved_bw_fee_usd": 12000.0,
          "monthly_cost_744h": 20589.9
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 16.5794949492,
          "reserved_bw_fee_usd": 15000.0,
          "monthly_cost_744h": 27335.14
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1225456525,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1291.17
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1926950222,
          "reserved_bw_fee_usd": 1400.0,
          "monthly_cost_744h": 1543.37
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3505301039,
          "reserved_bw_fee_usd": 1800.0,
          "monthly_cost_744h": 2060.79
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.4874457985,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 2362.66
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.7635005928,
          "reserved_bw_fee_usd": 2300.0,
          "monthly_cost_744h": 2868.04
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.0398418395,
          "reserved_bw_fee_usd": 2300.0,
          "monthly_cost_744h": 3073.64
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.3163933302,
          "reserved_bw_fee_usd": 2300.0,
          "monthly_cost_744h": 3279.4
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.5228878146,
          "reserved_bw_fee_usd": 3000.0,
          "monthly_cost_744h": 4133.03
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.1023860072,
          "reserved_bw_fee_usd": 5000.0,
          "monthly_cost_744h": 6564.18
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.4001150834,
          "reserved_bw_fee_usd": 8000.0,
          "monthly_cost_744h": 10529.69
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.7727828207,
          "reserved_bw_fee_usd": 12000.0,
          "monthly_cost_744h": 16294.95
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.2897474746,
          "reserved_bw_fee_usd": 15000.0,
          "monthly_cost_744h": 21167.57
        }
      }
    }
  },
  "Ireland": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.077840693,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 417.91
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1122407427,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 443.51
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1820802564,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 855.47
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3792797668,
          "reserved_bw_fee_usd": 880.0,
          "monthly_cost_744h": 1162.18
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.6274688169,
          "reserved_bw_fee_usd": 880.0,
          "monthly_cost_744h": 1346.84
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.7368414493,
          "reserved_bw_fee_usd": 880.0,
          "monthly_cost_744h": 1428.21
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.8016746196,
          "reserved_bw_fee_usd": 930.0,
          "monthly_cost_744h": 1526.45
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.8300943322,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1817.59
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.96287987,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 2660.38
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.828146924,
          "reserved_bw_fee_usd": 1400.0,
          "monthly_cost_744h": 3504.14
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 3.5293823484,
          "reserved_bw_fee_usd": 2360.0,
          "monthly_cost_744h": 4985.86
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 4.8681594367,
          "reserved_bw_fee_usd": 2990.0,
          "monthly_cost_744h": 6611.91
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0217953941,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 376.22
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0314274079,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 383.38
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0509824718,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 757.93
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1061983347,
          "reserved_bw_fee_usd": 880.0,
          "monthly_cost_744h": 959.01
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.1756912687,
          "reserved_bw_fee_usd": 880.0,
          "monthly_cost_744h": 1010.71
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.2063156058,
          "reserved_bw_fee_usd": 880.0,
          "monthly_cost_744h": 1033.5
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.2244688935,
          "reserved_bw_fee_usd": 930.0,
          "monthly_cost_744h": 1097.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.232426413,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1372.93
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.5496063636,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1608.91
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.7918811387,
          "reserved_bw_fee_usd": 1400.0,
          "monthly_cost_744h": 1989.16
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.9882270575,
          "reserved_bw_fee_usd": 2360.0,
          "monthly_cost_744h": 3095.24
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 1.3630846423,
          "reserved_bw_fee_usd": 2990.0,
          "monthly_cost_744h": 4004.13
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0179033594,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 373.32
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0258153708,
          "reserved_bw_fee_usd": 360.0,
          "monthly_cost_744h": 379.21
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.041878459,
          "reserved_bw_fee_usd": 720.0,
          "monthly_cost_744h": 751.16
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0872343464,
          "reserved_bw_fee_usd": 880.0,
          "monthly_cost_744h": 944.9
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.1443178279,
          "reserved_bw_fee_usd": 880.0,
          "monthly_cost_744h": 987.37
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.1694735333,
          "reserved_bw_fee_usd": 880.0,
          "monthly_cost_744h": 1006.09
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.1843851625,
          "reserved_bw_fee_usd": 930.0,
          "monthly_cost_744h": 1067.18
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.1909216964,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1342.05
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.4514623701,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 1535.89
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.6504737925,
          "reserved_bw_fee_usd": 1400.0,
          "monthly_cost_744h": 1883.95
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.8117579401,
          "reserved_bw_fee_usd": 2360.0,
          "monthly_cost_744h": 2963.95
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 1.1196766704,
          "reserved_bw_fee_usd": 2990.0,
          "monthly_cost_744h": 3823.04
        }
      }
    }
  },
  "Canada": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1968069788,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 446.42
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2837816649,
          "reserved_bw_fee_usd": 450.0,
          "monthly_cost_744h": 661.13
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.46035902,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1092.51
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.7147399773,
          "reserved_bw_fee_usd": 790.0,
          "monthly_cost_744h": 1321.77
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.2276625218,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1743.38
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.4433285883,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1903.84
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.2673058327,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 2516.88
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.7937317247,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 2908.54
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.582696894,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 3565.53
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.8241502176,
          "reserved_bw_fee_usd": 1300.0,
          "monthly_cost_744h": 4889.17
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 6.727046691,
          "reserved_bw_fee_usd": 1760.0,
          "monthly_cost_744h": 6764.92
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.6520091813,
          "reserved_bw_fee_usd": 2830.0,
          "monthly_cost_744h": 10011.09
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1082438384,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 380.53
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1560799157,
          "reserved_bw_fee_usd": 450.0,
          "monthly_cost_744h": 566.12
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.253197461,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 938.38
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3931069875,
          "reserved_bw_fee_usd": 790.0,
          "monthly_cost_744h": 1082.47
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.675214387,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1332.36
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.7938307236,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1420.61
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.247018208,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1757.78
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.5365524486,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1973.2
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.9704832917,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 2366.04
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.6532826197,
          "reserved_bw_fee_usd": 1300.0,
          "monthly_cost_744h": 3274.04
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 3.69987568,
          "reserved_bw_fee_usd": 1760.0,
          "monthly_cost_744h": 4512.71
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 5.3086050497,
          "reserved_bw_fee_usd": 2830.0,
          "monthly_cost_744h": 6779.6
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0590420937,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 343.93
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0851344995,
          "reserved_bw_fee_usd": 450.0,
          "monthly_cost_744h": 513.34
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.138107706,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 852.75
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.2144219932,
          "reserved_bw_fee_usd": 790.0,
          "monthly_cost_744h": 949.53
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.3682987566,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1104.01
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.4329985765,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1152.15
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.6801917498,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1336.06
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.8381195174,
          "reserved_bw_fee_usd": 830.0,
          "monthly_cost_744h": 1453.56
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.0748090682,
          "reserved_bw_fee_usd": 900.0,
          "monthly_cost_744h": 1699.66
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.4472450653,
          "reserved_bw_fee_usd": 1300.0,
          "monthly_cost_744h": 2376.75
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.0181140073,
          "reserved_bw_fee_usd": 1760.0,
          "monthly_cost_744h": 3261.48
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.8956027544,
          "reserved_bw_fee_usd": 2830.0,
          "monthly_cost_744h": 4984.33
        }
      }
    }
  },
  "Australia": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.4059485725,
          "reserved_bw_fee_usd": 400.0,
          "monthly_cost_744h": 702.03
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.5740979769,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 977.13
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.9077286036,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 1525.35
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.5043489953,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 1969.24
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.645824409,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 2818.49
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 3.445292757,
          "reserved_bw_fee_usd": 950.0,
          "monthly_cost_744h": 3513.3
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 4.8296040174,
          "reserved_bw_fee_usd": 950.0,
          "monthly_cost_744h": 4543.23
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 5.8904102472,
          "reserved_bw_fee_usd": 1050.0,
          "monthly_cost_744h": 5432.47
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 11.3982205266,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 9680.28
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 19.1357590071,
          "reserved_bw_fee_usd": 1560.0,
          "monthly_cost_744h": 15797.0
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 25.2551300477,
          "reserved_bw_fee_usd": 2030.0,
          "monthly_cost_744h": 20819.82
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 42.1159622685,
          "reserved_bw_fee_usd": 3130.0,
          "monthly_cost_744h": 34464.28
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2435691435,
          "reserved_bw_fee_usd": 400.0,
          "monthly_cost_744h": 581.22
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3444587862,
          "reserved_bw_fee_usd": 550.0,
          "monthly_cost_744h": 806.28
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.5446371622,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 1255.21
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.9026093972,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 1521.54
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.5874946454,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 2031.1
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.0671756542,
          "reserved_bw_fee_usd": 950.0,
          "monthly_cost_744h": 2487.98
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.8977624105,
          "reserved_bw_fee_usd": 950.0,
          "monthly_cost_744h": 3105.94
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.5342461483,
          "reserved_bw_fee_usd": 1050.0,
          "monthly_cost_744h": 3679.48
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 6.838932316,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 6288.17
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 11.4814554042,
          "reserved_bw_fee_usd": 1560.0,
          "monthly_cost_744h": 10102.2
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 15.1530780286,
          "reserved_bw_fee_usd": 2030.0,
          "monthly_cost_744h": 13303.89
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 25.2695773611,
          "reserved_bw_fee_usd": 3130.0,
          "monthly_cost_744h": 21930.57
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1420820004,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 405.71
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1607474335,
          "reserved_bw_fee_usd": 450.0,
          "monthly_cost_744h": 569.6
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.254164009,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 839.1
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3685655039,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 924.21
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.4630192716,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 994.49
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.3617557395,
          "reserved_bw_fee_usd": 700.0,
          "monthly_cost_744h": 969.15
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.5071084218,
          "reserved_bw_fee_usd": 700.0,
          "monthly_cost_744h": 1077.29
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.618493076,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1210.16
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.1968131553,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 1740.43
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.0092546957,
          "reserved_bw_fee_usd": 1100.0,
          "monthly_cost_744h": 2594.89
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.651788655,
          "reserved_bw_fee_usd": 1400.0,
          "monthly_cost_744h": 3372.93
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 4.4221760382,
          "reserved_bw_fee_usd": 2200.0,
          "monthly_cost_744h": 5490.1
        }
      }
    }
  },
  "India": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.5298256802,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1144.19
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.791460731,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1588.85
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 1.3453541937,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 2000.94
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 2.3551066896,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 3252.2
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 4.3752651179,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 4755.2
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 5.8827541108,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 5876.77
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 8.4359937469,
          "reserved_bw_fee_usd": 1750.0,
          "monthly_cost_744h": 8026.38
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 10.462840423,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 9784.35
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 13.6499888946,
          "reserved_bw_fee_usd": 2500.0,
          "monthly_cost_744h": 12655.59
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 17.0446029865,
          "reserved_bw_fee_usd": 4000.0,
          "monthly_cost_744h": 16681.18
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 25.2550928736,
          "reserved_bw_fee_usd": 6000.0,
          "monthly_cost_744h": 24789.79
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 29.9186377769,
          "reserved_bw_fee_usd": 10000.0,
          "monthly_cost_744h": 32259.47
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.4238605441,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1065.35
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.6331685848,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1471.08
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 1.076283355,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1800.75
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.8840853517,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 2901.76
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 3.5002120943,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 4104.16
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 4.7062032886,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 5001.42
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 6.7487949975,
          "reserved_bw_fee_usd": 1750.0,
          "monthly_cost_744h": 6771.1
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 8.3702723384,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 8227.48
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 10.9199911157,
          "reserved_bw_fee_usd": 2500.0,
          "monthly_cost_744h": 10624.47
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 13.6356823892,
          "reserved_bw_fee_usd": 4000.0,
          "monthly_cost_744h": 14144.95
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 20.2040742989,
          "reserved_bw_fee_usd": 6000.0,
          "monthly_cost_744h": 21031.83
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 23.9349102215,
          "reserved_bw_fee_usd": 10000.0,
          "monthly_cost_744h": 27807.57
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2119302721,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 907.68
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3165842924,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1235.54
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.5381416775,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1400.38
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.9420426759,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 2200.88
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.7501060472,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 2802.08
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.3531016443,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 3250.71
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.3743974987,
          "reserved_bw_fee_usd": 1750.0,
          "monthly_cost_744h": 4260.55
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.1851361692,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 5113.74
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.4599955578,
          "reserved_bw_fee_usd": 2500.0,
          "monthly_cost_744h": 6562.24
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.8178411946,
          "reserved_bw_fee_usd": 4000.0,
          "monthly_cost_744h": 9072.47
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 10.1020371495,
          "reserved_bw_fee_usd": 6000.0,
          "monthly_cost_744h": 13515.92
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 11.9674551108,
          "reserved_bw_fee_usd": 10000.0,
          "monthly_cost_744h": 18903.79
        }
      }
    }
  },
  "Brazil": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.198264694,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 897.51
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2803886192,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1208.61
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.4433333333,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1329.84
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.5666666667,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 1921.6
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.8,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 2095.2
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.8810446281,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 2899.5
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.5081250506,
          "reserved_bw_fee_usd": 1750.0,
          "monthly_cost_744h": 3616.05
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.218602351,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 4394.64
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 6.1289667451,
          "reserved_bw_fee_usd": 2500.0,
          "monthly_cost_744h": 7059.95
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 8.7251476814,
          "reserved_bw_fee_usd": 4000.0,
          "monthly_cost_744h": 10491.51
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 12.8671776534,
          "reserved_bw_fee_usd": 6000.0,
          "monthly_cost_744h": 15573.18
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 24.1927110152,
          "reserved_bw_fee_usd": 10000.0,
          "monthly_cost_744h": 27999.38
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1586117552,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 868.01
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2243108954,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1166.89
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3546666667,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1263.87
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.4533333333,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 1837.28
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.64,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 1976.16
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.5048357025,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 2619.6
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.0065000405,
          "reserved_bw_fee_usd": 1750.0,
          "monthly_cost_744h": 3242.84
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.5748818808,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 3915.71
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 4.9031733961,
          "reserved_bw_fee_usd": 2500.0,
          "monthly_cost_744h": 6147.96
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.9801181451,
          "reserved_bw_fee_usd": 4000.0,
          "monthly_cost_744h": 9193.21
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 10.2937421228,
          "reserved_bw_fee_usd": 6000.0,
          "monthly_cost_744h": 13658.54
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 19.3541688122,
          "reserved_bw_fee_usd": 10000.0,
          "monthly_cost_744h": 24399.5
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0793058776,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 809.0
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1121554477,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1083.44
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1773333333,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1131.94
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.2266666667,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 1668.64
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.32,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 1738.08
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.7524178512,
          "reserved_bw_fee_usd": 1500.0,
          "monthly_cost_744h": 2059.8
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.0032500202,
          "reserved_bw_fee_usd": 1750.0,
          "monthly_cost_744h": 2496.42
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.2874409404,
          "reserved_bw_fee_usd": 2000.0,
          "monthly_cost_744h": 2957.86
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.451586698,
          "reserved_bw_fee_usd": 2500.0,
          "monthly_cost_744h": 4323.98
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.4900590725,
          "reserved_bw_fee_usd": 4000.0,
          "monthly_cost_744h": 6596.6
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.1468710614,
          "reserved_bw_fee_usd": 6000.0,
          "monthly_cost_744h": 9829.27
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.6770844061,
          "reserved_bw_fee_usd": 10000.0,
          "monthly_cost_744h": 17199.75
        }
      }
    }
  },
  "Japan": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.2445345381,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 481.93
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3526014105,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 562.34
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.5720004492,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 1075.57
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.966535454,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 1369.1
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.7332413742,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 1939.53
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.2827308871,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 2448.35
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.2258070951,
          "reserved_bw_fee_usd": 760.0,
          "monthly_cost_744h": 3160.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.9709102565,
          "reserved_bw_fee_usd": 770.0,
          "monthly_cost_744h": 3724.36
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 6.5252680268,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 5704.8
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 9.3534569948,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 7808.97
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 13.7736310747,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 11097.58
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 18.3380223313,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 14493.49
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1956276304,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 445.55
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2820811284,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 509.87
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.4576003593,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 990.45
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.7732283632,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 1225.28
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.3865930994,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 1681.63
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.8261847097,
          "reserved_bw_fee_usd": 680.0,
          "monthly_cost_744h": 2038.68
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.5806456761,
          "reserved_bw_fee_usd": 680.0,
          "monthly_cost_744h": 2600.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.1767282052,
          "reserved_bw_fee_usd": 770.0,
          "monthly_cost_744h": 3133.49
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.2202144214,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 4733.84
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 7.4827655959,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 6417.18
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 11.0189048598,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 9048.07
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 14.670417865,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 11764.79
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1283806325,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 395.52
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.1604336418,
          "reserved_bw_fee_usd": 300.0,
          "monthly_cost_744h": 419.36
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3003002358,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 873.42
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.5074311134,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 1027.53
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.7886248253,
          "reserved_bw_fee_usd": 650.0,
          "monthly_cost_744h": 1236.74
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.0386425536,
          "reserved_bw_fee_usd": 700.0,
          "monthly_cost_744h": 1472.75
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.4677422283,
          "reserved_bw_fee_usd": 700.0,
          "monthly_cost_744h": 1792.0
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.8067641667,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 2094.23
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.9689969522,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 3058.93
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.9105649223,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 4503.46
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.2311563142,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 6229.98
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.6274617239,
          "reserved_bw_fee_usd": 850.0,
          "monthly_cost_744h": 8012.83
        }
      }
    }
  },
  "United Kingdom": {
    "High Availability": {
      "Inter - Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.1923171511,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 643.08
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.2676759329,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 699.15
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.4144066434,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 808.32
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.8332417038,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 1119.93
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.3306104838,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1739.97
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.530566442,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1888.74
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.6409841934,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1970.89
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.6748274604,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 2246.07
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.9096007244,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 3908.74
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.4519038579,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 5256.22
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 6.8836133251,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 6321.41
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.6824093008,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 7659.71
        }
      },
      "Regional": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0538488023,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 540.06
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0749492612,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 555.76
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.1160338601,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 586.33
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.2333076771,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 673.58
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.3725709355,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1027.19
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.4285586038,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1068.85
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.4594755742,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1091.85
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.4689516889,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1348.9
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.0946882028,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1814.45
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.5265330802,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 2335.74
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.927411731,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 2633.99
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.4310746042,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 3008.72
        }
      },
      "Local": {
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0442329448,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 532.91
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0615654646,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 545.8
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.095313528,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 570.91
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.1916455919,
          "reserved_bw_fee_usd": 500.0,
          "monthly_cost_744h": 642.58
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.3060404113,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 977.69
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.3520302817,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1011.91
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.3774263645,
          "reserved_bw_fee_usd": 750.0,
          "monthly_cost_744h": 1030.81
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.3852103159,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1286.6
        },
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.8992081666,
          "reserved_bw_fee_usd": 1000.0,
          "monthly_cost_744h": 1669.01
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.2539378873,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 2132.93
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 1.5832310648,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 2377.92
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 1.9969541392,
          "reserved_bw_fee_usd": 1200.0,
          "monthly_cost_744h": 2685.73
        }
      }
    }
  }
};

// Export pour compatibilité ES6 modules
if (typeof window !== 'undefined') {
  window.OB_PRICING = OB_PRICING;
  window.OB_COUNTRIES = Object.keys(OB_PRICING);
}
