// Orange Business VPNaaS Pricing Data
// Source: VPNaaS_pricing_0326.csv
// Généré le: 2026-04-03 12:54:19
//
// Structure: VPNAAS_PRICING[CountryName][Footprint][City][Bandwidth]
//
// Footprints: Global, Regional, Local
// Formule prix mensuel: Hourly rate (USD) × 744h (31j × 24h)
// Note: Local footprint = inclus dans le service OB (tarif 0)
//
// 27 pays disponibles
// 126 points de présence (pays × villes)
// 3 footprints: Global, Regional, Local
// 12 bandes passantes: 10M, 20M, 50M, 100M, 200M, 300M, 400M, 500M, 1G, 2G, 5G, 10G

export const VPNAAS_PRICING = {
  "South Africa": {
    "Global": {
      "Cape Town": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 6.67464,
          "monthly_cost_744h": 4965.93,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 22.67786,
          "monthly_cost_744h": 16872.33,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.16085,
          "monthly_cost_744h": 119.67,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.6084,
          "monthly_cost_744h": 1196.65,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.83549,
          "monthly_cost_744h": 5085.6,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.68883,
          "monthly_cost_744h": 1256.49,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 3.37753,
          "monthly_cost_744h": 2512.88,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.45796,
          "monthly_cost_744h": 2572.72,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 15.03811,
          "monthly_cost_744h": 11188.35,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.61881,
          "monthly_cost_744h": 2692.39,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        }
      },
      "Johannesburg": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 6.67464,
          "monthly_cost_744h": 4965.93,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 22.67786,
          "monthly_cost_744h": 16872.33,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.16085,
          "monthly_cost_744h": 119.67,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.6084,
          "monthly_cost_744h": 1196.65,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.83549,
          "monthly_cost_744h": 5085.6,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.68883,
          "monthly_cost_744h": 1256.49,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 3.37753,
          "monthly_cost_744h": 2512.88,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.45796,
          "monthly_cost_744h": 2572.72,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 15.03811,
          "monthly_cost_744h": 11188.35,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.61881,
          "monthly_cost_744h": 2692.39,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        }
      }
    },
    "Local": {
      "Cape Town": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        }
      },
      "Johannesburg": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        }
      }
    },
    "Regional": {
      "Cape Town": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 5.06636,
          "monthly_cost_744h": 3769.37,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08043,
          "monthly_cost_744h": 59.84,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.18167,
          "monthly_cost_744h": 3111.16,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        }
      },
      "Johannesburg": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 5.06636,
          "monthly_cost_744h": 3769.37,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08043,
          "monthly_cost_744h": 59.84,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.18167,
          "monthly_cost_744h": 3111.16,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Africa",
          "iso_code": "ZAF"
        }
      }
    }
  },
  "Nigeria": {
    "Global": {
      "Lagos": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 7.72006,
          "monthly_cost_744h": 5743.72,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 31.92589,
          "monthly_cost_744h": 23752.86,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 2.81467,
          "monthly_cost_744h": 2094.11,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 9.40889,
          "monthly_cost_744h": 7000.21,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.8951,
          "monthly_cost_744h": 2153.95,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 4.10137,
          "monthly_cost_744h": 3051.42,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 4.18167,
          "monthly_cost_744h": 3111.16,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 19.78276,
          "monthly_cost_744h": 14718.37,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        }
      }
    },
    "Local": {
      "Lagos": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        }
      }
    },
    "Regional": {
      "Lagos": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.46837,
          "monthly_cost_744h": 4068.47,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 21.55201,
          "monthly_cost_744h": 16034.7,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.92999,
          "monthly_cost_744h": 1435.91,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.81467,
          "monthly_cost_744h": 2094.11,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.9754,
          "monthly_cost_744h": 2213.7,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 13.51013,
          "monthly_cost_744h": 10051.54,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.05583,
          "monthly_cost_744h": 2273.54,
          "vpn_region": "Africa",
          "iso_code": "NGA"
        }
      }
    }
  },
  "India": {
    "Global": {
      "Chennai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 11.49972,
          "monthly_cost_744h": 8555.79,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 41.73679,
          "monthly_cost_744h": 31052.17,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 3.05583,
          "monthly_cost_744h": 2273.54,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 15.68151,
          "monthly_cost_744h": 11667.04,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 6.35306,
          "monthly_cost_744h": 4726.68,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 26.13582,
          "monthly_cost_744h": 19445.05,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 6.51379,
          "monthly_cost_744h": 4846.26,
          "vpn_region": "APAC",
          "iso_code": "IND"
        }
      },
      "Mumbai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 11.49972,
          "monthly_cost_744h": 8555.79,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 41.73679,
          "monthly_cost_744h": 31052.17,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 3.05583,
          "monthly_cost_744h": 2273.54,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 15.68151,
          "monthly_cost_744h": 11667.04,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 6.35306,
          "monthly_cost_744h": 4726.68,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 26.13582,
          "monthly_cost_744h": 19445.05,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 6.51379,
          "monthly_cost_744h": 4846.26,
          "vpn_region": "APAC",
          "iso_code": "IND"
        }
      }
    },
    "Local": {
      "Chennai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        }
      },
      "Mumbai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "IND"
        }
      }
    },
    "Regional": {
      "Chennai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 8.52432,
          "monthly_cost_744h": 6342.09,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 29.0308,
          "monthly_cost_744h": 21598.92,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 2.17126,
          "monthly_cost_744h": 1615.42,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 13.18855,
          "monthly_cost_744h": 9812.28,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.25169,
          "monthly_cost_744h": 1675.26,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 4.42295,
          "monthly_cost_744h": 3290.67,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 18.73734,
          "monthly_cost_744h": 13940.58,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.5838,
          "monthly_cost_744h": 3410.35,
          "vpn_region": "APAC",
          "iso_code": "IND"
        }
      },
      "Mumbai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 8.52432,
          "monthly_cost_744h": 6342.09,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 29.0308,
          "monthly_cost_744h": 21598.92,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 2.17126,
          "monthly_cost_744h": 1615.42,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 13.18855,
          "monthly_cost_744h": 9812.28,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.25169,
          "monthly_cost_744h": 1675.26,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 4.42295,
          "monthly_cost_744h": 3290.67,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 18.73734,
          "monthly_cost_744h": 13940.58,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "APAC",
          "iso_code": "IND"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.5838,
          "monthly_cost_744h": 3410.35,
          "vpn_region": "APAC",
          "iso_code": "IND"
        }
      }
    }
  },
  "Hong Kong": {
    "Global": {
      "Hong Kong": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.69924,
          "monthly_cost_744h": 2752.23,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 12.54514,
          "monthly_cost_744h": 9333.58,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.13667,
          "monthly_cost_744h": 101.68,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.51379,
          "monthly_cost_744h": 4846.26,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.22519,
          "monthly_cost_744h": 167.54,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.84956,
          "monthly_cost_744h": 1376.07,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 8.60474,
          "monthly_cost_744h": 6401.93,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.25169,
          "monthly_cost_744h": 1675.26,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        }
      }
    },
    "Local": {
      "Hong Kong": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        }
      }
    },
    "Regional": {
      "Hong Kong": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.81467,
          "monthly_cost_744h": 2094.11,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.31805,
          "monthly_cost_744h": 5444.63,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12058,
          "monthly_cost_744h": 89.71,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.77966,
          "monthly_cost_744h": 2812.07,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.18492,
          "monthly_cost_744h": 137.58,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.20627,
          "monthly_cost_744h": 897.46,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.74466,
          "monthly_cost_744h": 3530.03,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.68883,
          "monthly_cost_744h": 1256.49,
          "vpn_region": "APAC",
          "iso_code": "HKG"
        }
      }
    }
  },
  "Australia": {
    "Global": {
      "Melbourne": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 6.27263,
          "monthly_cost_744h": 4666.84,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 22.35616,
          "monthly_cost_744h": 16632.98,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.16884,
          "monthly_cost_744h": 125.62,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.80414,
          "monthly_cost_744h": 598.28,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 10.4543,
          "monthly_cost_744h": 7778.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.28143,
          "monthly_cost_744h": 209.38,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.17126,
          "monthly_cost_744h": 1615.42,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.8951,
          "monthly_cost_744h": 2153.95,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 16.72693,
          "monthly_cost_744h": 12444.84,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        }
      },
      "Sydney": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 6.27263,
          "monthly_cost_744h": 4666.84,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 22.35616,
          "monthly_cost_744h": 16632.98,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.16884,
          "monthly_cost_744h": 125.62,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.80414,
          "monthly_cost_744h": 598.28,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 10.4543,
          "monthly_cost_744h": 7778.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.28143,
          "monthly_cost_744h": 209.38,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.17126,
          "monthly_cost_744h": 1615.42,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.8951,
          "monthly_cost_744h": 2153.95,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 16.72693,
          "monthly_cost_744h": 12444.84,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        }
      }
    },
    "Local": {
      "Melbourne": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        }
      },
      "Sydney": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        }
      }
    },
    "Regional": {
      "Melbourne": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 12.94727,
          "monthly_cost_744h": 9632.77,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12058,
          "monthly_cost_744h": 89.71,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.35306,
          "monthly_cost_744h": 4726.68,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 9.73059,
          "monthly_cost_744h": 7239.56,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        }
      },
      "Sydney": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 12.94727,
          "monthly_cost_744h": 9632.77,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12058,
          "monthly_cost_744h": 89.71,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.35306,
          "monthly_cost_744h": 4726.68,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 9.73059,
          "monthly_cost_744h": 7239.56,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "APAC",
          "iso_code": "AUS"
        }
      }
    }
  },
  "Japan": {
    "Global": {
      "Osaka": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.13626,
          "monthly_cost_744h": 2333.38,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 15.52066,
          "monthly_cost_744h": 11547.37,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08841,
          "monthly_cost_744h": 65.78,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.5488,
          "monthly_cost_744h": 4128.31,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.80414,
          "monthly_cost_744h": 598.28,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 12.78642,
          "monthly_cost_744h": 9513.1,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.84956,
          "monthly_cost_744h": 1376.07,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        }
      },
      "Tokyo": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.13626,
          "monthly_cost_744h": 2333.38,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 15.52066,
          "monthly_cost_744h": 11547.37,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08841,
          "monthly_cost_744h": 65.78,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.5488,
          "monthly_cost_744h": 4128.31,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.80414,
          "monthly_cost_744h": 598.28,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 12.78642,
          "monthly_cost_744h": 9513.1,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.84956,
          "monthly_cost_744h": 1376.07,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        }
      }
    },
    "Local": {
      "Osaka": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        }
      },
      "Tokyo": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        }
      }
    },
    "Regional": {
      "Osaka": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.9754,
          "monthly_cost_744h": 2213.7,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 13.67099,
          "monthly_cost_744h": 10171.22,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08841,
          "monthly_cost_744h": 65.78,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.22721,
          "monthly_cost_744h": 3889.04,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.80414,
          "monthly_cost_744h": 598.28,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.96134,
          "monthly_cost_744h": 5923.24,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        }
      },
      "Tokyo": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.9754,
          "monthly_cost_744h": 2213.7,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 13.67099,
          "monthly_cost_744h": 10171.22,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08841,
          "monthly_cost_744h": 65.78,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.22721,
          "monthly_cost_744h": 3889.04,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.80414,
          "monthly_cost_744h": 598.28,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.96134,
          "monthly_cost_744h": 5923.24,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "APAC",
          "iso_code": "JPN"
        }
      }
    }
  },
  "South Korea": {
    "Global": {
      "Seoul": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.46837,
          "monthly_cost_744h": 4068.47,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 16.72693,
          "monthly_cost_744h": 12444.84,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.16085,
          "monthly_cost_744h": 119.67,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.14678,
          "monthly_cost_744h": 3829.2,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.8951,
          "monthly_cost_744h": 2153.95,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.05583,
          "monthly_cost_744h": 2273.54,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 11.66057,
          "monthly_cost_744h": 8675.46,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.13626,
          "monthly_cost_744h": 2333.38,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        }
      }
    },
    "Local": {
      "Seoul": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        }
      }
    },
    "Regional": {
      "Seoul": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.41254,
          "monthly_cost_744h": 1794.93,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.86009,
          "monthly_cost_744h": 2871.91,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08043,
          "monthly_cost_744h": 59.84,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 3.29711,
          "monthly_cost_744h": 2453.05,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "APAC",
          "iso_code": "KOR"
        }
      }
    }
  },
  "Singapore": {
    "Global": {
      "Singapore": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 15.44024,
          "monthly_cost_744h": 11487.54,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.35306,
          "monthly_cost_744h": 4726.68,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.16884,
          "monthly_cost_744h": 125.62,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.68883,
          "monthly_cost_744h": 1256.49,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 8.92633,
          "monthly_cost_744h": 6641.19,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.09084,
          "monthly_cost_744h": 1555.58,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        }
      }
    },
    "Local": {
      "Singapore": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        }
      }
    },
    "Regional": {
      "Singapore": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.8951,
          "monthly_cost_744h": 2153.95,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.00676,
          "monthly_cost_744h": 6701.03,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.02094,
          "monthly_cost_744h": 2991.58,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.16884,
          "monthly_cost_744h": 125.62,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.80414,
          "monthly_cost_744h": 598.28,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.20627,
          "monthly_cost_744h": 897.46,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.90551,
          "monthly_cost_744h": 3649.7,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.68883,
          "monthly_cost_744h": 1256.49,
          "vpn_region": "APAC",
          "iso_code": "SGP"
        }
      }
    }
  },
  "China": {
    "Global": {
      "Guangzhou": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.06636,
          "monthly_cost_744h": 3769.37,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 14.31439,
          "monthly_cost_744h": 10649.91,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.20627,
          "monthly_cost_744h": 897.46,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.06636,
          "monthly_cost_744h": 3769.37,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.57339,
          "monthly_cost_744h": 1914.6,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 10.77601,
          "monthly_cost_744h": 8017.35,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.81467,
          "monthly_cost_744h": 2094.11,
          "vpn_region": "China",
          "iso_code": "CHN"
        }
      },
      "Shanghai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.06636,
          "monthly_cost_744h": 3769.37,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 14.31439,
          "monthly_cost_744h": 10649.91,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.20627,
          "monthly_cost_744h": 897.46,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 5.06636,
          "monthly_cost_744h": 3769.37,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.57339,
          "monthly_cost_744h": 1914.6,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 10.77601,
          "monthly_cost_744h": 8017.35,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.81467,
          "monthly_cost_744h": 2094.11,
          "vpn_region": "China",
          "iso_code": "CHN"
        }
      }
    },
    "Local": {
      "Guangzhou": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        }
      },
      "Shanghai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "China",
          "iso_code": "CHN"
        }
      }
    },
    "Regional": {
      "Guangzhou": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.69924,
          "monthly_cost_744h": 2752.23,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.81101,
          "monthly_cost_744h": 7299.39,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.16085,
          "monthly_cost_744h": 119.67,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.84956,
          "monthly_cost_744h": 1376.07,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.92999,
          "monthly_cost_744h": 1435.91,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.4789,
          "monthly_cost_744h": 5564.3,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "China",
          "iso_code": "CHN"
        }
      },
      "Shanghai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.69924,
          "monthly_cost_744h": 2752.23,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.81101,
          "monthly_cost_744h": 7299.39,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.16085,
          "monthly_cost_744h": 119.67,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.84956,
          "monthly_cost_744h": 1376.07,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.92999,
          "monthly_cost_744h": 1435.91,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.4789,
          "monthly_cost_744h": 5564.3,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "China",
          "iso_code": "CHN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "China",
          "iso_code": "CHN"
        }
      }
    }
  },
  "Netherlands": {
    "Global": {
      "Amsterdam": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        }
      }
    },
    "Local": {
      "Amsterdam": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        }
      }
    },
    "Regional": {
      "Amsterdam": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "NLD"
        }
      }
    }
  },
  "Slovakia": {
    "Global": {
      "Bratislava": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        }
      }
    },
    "Local": {
      "Bratislava": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        }
      }
    },
    "Regional": {
      "Bratislava": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "SVK"
        }
      }
    }
  },
  "Ireland": {
    "Global": {
      "Dublin": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.04176,
          "monthly_cost_744h": 5983.07,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.5838,
          "monthly_cost_744h": 3410.35,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.22519,
          "monthly_cost_744h": 167.54,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.68883,
          "monthly_cost_744h": 1256.49,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.6084,
          "monthly_cost_744h": 1196.65,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        }
      }
    },
    "Local": {
      "Dublin": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        }
      }
    },
    "Regional": {
      "Dublin": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "IRL"
        }
      }
    }
  },
  "Germany": {
    "Global": {
      "Frankfurt": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        }
      }
    },
    "Local": {
      "Frankfurt": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        }
      }
    },
    "Regional": {
      "Frankfurt": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "DEU"
        }
      }
    }
  },
  "United Kingdom": {
    "Global": {
      "London": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.04176,
          "monthly_cost_744h": 5983.07,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.5838,
          "monthly_cost_744h": 3410.35,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.22519,
          "monthly_cost_744h": 167.54,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.68883,
          "monthly_cost_744h": 1256.49,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.6084,
          "monthly_cost_744h": 1196.65,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        }
      }
    },
    "Local": {
      "London": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        }
      }
    },
    "Regional": {
      "London": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "GBR"
        }
      }
    }
  },
  "Spain": {
    "Global": {
      "Madrid": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        }
      }
    },
    "Local": {
      "Madrid": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        }
      }
    },
    "Regional": {
      "Madrid": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "ESP"
        }
      }
    }
  },
  "Italy": {
    "Global": {
      "Milan": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        }
      }
    },
    "Local": {
      "Milan": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        }
      }
    },
    "Regional": {
      "Milan": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "ITA"
        }
      }
    }
  },
  "Norway": {
    "Global": {
      "Oslo": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        }
      }
    },
    "Local": {
      "Oslo": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        }
      }
    },
    "Regional": {
      "Oslo": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "NOR"
        }
      }
    }
  },
  "Austria": {
    "Global": {
      "Vienna": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        }
      }
    },
    "Local": {
      "Vienna": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        }
      }
    },
    "Regional": {
      "Vienna": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "AUT"
        }
      }
    }
  },
  "Poland": {
    "Global": {
      "Warsaw": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Europe",
          "iso_code": "POL"
        }
      }
    },
    "Local": {
      "Warsaw": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "POL"
        }
      }
    },
    "Regional": {
      "Warsaw": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "POL"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "POL"
        }
      }
    }
  },
  "Switzerland": {
    "Global": {
      "Zurich": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        }
      }
    },
    "Local": {
      "Zurich": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        }
      }
    },
    "Regional": {
      "Zurich": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Europe",
          "iso_code": "CHE"
        }
      }
    }
  },
  "France": {
    "Global": {
      "Aubervilliers": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "France",
          "iso_code": "FRA"
        }
      },
      "Paris": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "France",
          "iso_code": "FRA"
        }
      },
      "Val de Reuil": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 3.21668,
          "monthly_cost_744h": 2393.21,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 10.05217,
          "monthly_cost_744h": 7478.81,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.23318,
          "monthly_cost_744h": 173.49,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "France",
          "iso_code": "FRA"
        }
      }
    },
    "Local": {
      "Aubervilliers": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        }
      },
      "Paris": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        }
      },
      "Val de Reuil": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "France",
          "iso_code": "FRA"
        }
      }
    },
    "Regional": {
      "Aubervilliers": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "France",
          "iso_code": "FRA"
        }
      },
      "Paris": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "France",
          "iso_code": "FRA"
        }
      },
      "Val de Reuil": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.10449,
          "monthly_cost_744h": 77.74,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.01041,
          "monthly_cost_744h": 1495.75,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "France",
          "iso_code": "FRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "France",
          "iso_code": "FRA"
        }
      }
    }
  },
  "Bahrain": {
    "Global": {
      "Bahrain": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 11.49972,
          "monthly_cost_744h": 8555.79,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 59.50914,
          "monthly_cost_744h": 44274.8,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 4.2621,
          "monthly_cost_744h": 3171.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 14.79683,
          "monthly_cost_744h": 11008.84,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 6.35306,
          "monthly_cost_744h": 4726.68,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 6.51379,
          "monthly_cost_744h": 4846.26,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 33.37344,
          "monthly_cost_744h": 24829.84,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 6.59422,
          "monthly_cost_744h": 4906.1,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        }
      }
    },
    "Local": {
      "Bahrain": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        }
      }
    },
    "Regional": {
      "Bahrain": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 7.55933,
          "monthly_cost_744h": 5624.14,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 45.59688,
          "monthly_cost_744h": 33924.08,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 9.32846,
          "monthly_cost_744h": 6940.37,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.65382,
          "monthly_cost_744h": 1974.44,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 4.10137,
          "monthly_cost_744h": 3051.42,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 4.18167,
          "monthly_cost_744h": 3111.16,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 23.40157,
          "monthly_cost_744h": 17410.77,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "Middle East",
          "iso_code": "BHR"
        }
      }
    }
  },
  "United Arab Emirates": {
    "Global": {
      "Dubai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 8.52432,
          "monthly_cost_744h": 6342.09,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 25.97497,
          "monthly_cost_744h": 19325.38,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 14.23397,
          "monthly_cost_744h": 10590.07,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.9754,
          "monthly_cost_744h": 2213.7,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 4.2621,
          "monthly_cost_744h": 3171.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 4.42295,
          "monthly_cost_744h": 3290.67,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 21.47159,
          "monthly_cost_744h": 15974.86,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.50338,
          "monthly_cost_744h": 3350.51,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        }
      }
    },
    "Local": {
      "Dubai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        }
      }
    },
    "Regional": {
      "Dubai": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 7.39847,
          "monthly_cost_744h": 5504.46,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 23.07987,
          "monthly_cost_744h": 17171.42,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.36712,
          "monthly_cost_744h": 1017.14,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 8.7656,
          "monthly_cost_744h": 6521.61,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.17126,
          "monthly_cost_744h": 1615.42,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 4.02094,
          "monthly_cost_744h": 2991.58,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 4.10137,
          "monthly_cost_744h": 3051.42,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 13.67099,
          "monthly_cost_744h": 10171.22,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.80414,
          "monthly_cost_744h": 598.28,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.18167,
          "monthly_cost_744h": 3111.16,
          "vpn_region": "Middle East",
          "iso_code": "ARE"
        }
      }
    }
  },
  "United States": {
    "Global": {
      "Ashburn": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.63963,
          "monthly_cost_744h": 5683.88,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12868,
          "monthly_cost_744h": 95.74,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Atlanta": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.63963,
          "monthly_cost_744h": 5683.88,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12868,
          "monthly_cost_744h": 95.74,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Chicago": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.63963,
          "monthly_cost_744h": 5683.88,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12868,
          "monthly_cost_744h": 95.74,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Dallas": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.63963,
          "monthly_cost_744h": 5683.88,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12868,
          "monthly_cost_744h": 95.74,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Miami": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.63963,
          "monthly_cost_744h": 5683.88,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12868,
          "monthly_cost_744h": 95.74,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "New York": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.63963,
          "monthly_cost_744h": 5683.88,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12868,
          "monthly_cost_744h": 95.74,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "San José": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.63963,
          "monthly_cost_744h": 5683.88,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12868,
          "monthly_cost_744h": 95.74,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Seattle": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.33211,
          "monthly_cost_744h": 1735.09,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 7.63963,
          "monthly_cost_744h": 5683.88,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.12868,
          "monthly_cost_744h": 95.74,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.19302,
          "monthly_cost_744h": 143.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.2867,
          "monthly_cost_744h": 957.3,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      }
    },
    "Local": {
      "Ashburn": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Atlanta": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Chicago": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Dallas": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Miami": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "New York": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "San José": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Seattle": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      }
    },
    "Regional": {
      "Ashburn": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.77966,
          "monthly_cost_744h": 2812.07,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.09651,
          "monthly_cost_744h": 71.8,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.13667,
          "monthly_cost_744h": 101.68,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Atlanta": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.77966,
          "monthly_cost_744h": 2812.07,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.09651,
          "monthly_cost_744h": 71.8,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.13667,
          "monthly_cost_744h": 101.68,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Chicago": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.77966,
          "monthly_cost_744h": 2812.07,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.09651,
          "monthly_cost_744h": 71.8,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.13667,
          "monthly_cost_744h": 101.68,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Dallas": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.77966,
          "monthly_cost_744h": 2812.07,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.09651,
          "monthly_cost_744h": 71.8,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.13667,
          "monthly_cost_744h": 101.68,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Miami": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.77966,
          "monthly_cost_744h": 2812.07,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.09651,
          "monthly_cost_744h": 71.8,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.13667,
          "monthly_cost_744h": 101.68,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "New York": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.77966,
          "monthly_cost_744h": 2812.07,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.09651,
          "monthly_cost_744h": 71.8,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.13667,
          "monthly_cost_744h": 101.68,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "San José": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.77966,
          "monthly_cost_744h": 2812.07,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.09651,
          "monthly_cost_744h": 71.8,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.13667,
          "monthly_cost_744h": 101.68,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      },
      "Seattle": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.77966,
          "monthly_cost_744h": 2812.07,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.09651,
          "monthly_cost_744h": 71.8,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.13667,
          "monthly_cost_744h": 101.68,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "USA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.72372,
          "monthly_cost_744h": 538.45,
          "vpn_region": "NAM",
          "iso_code": "USA"
        }
      }
    }
  },
  "Canada": {
    "Global": {
      "Toronto": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 2.49297,
          "monthly_cost_744h": 1854.77,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.8459,
          "monthly_cost_744h": 6581.35,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08841,
          "monthly_cost_744h": 65.78,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.40213,
          "monthly_cost_744h": 299.18,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 3.69924,
          "monthly_cost_744h": 2752.23,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.14477,
          "monthly_cost_744h": 107.71,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.20627,
          "monthly_cost_744h": 897.46,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 5.5488,
          "monthly_cost_744h": 4128.31,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        }
      }
    },
    "Local": {
      "Toronto": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        }
      }
    },
    "Regional": {
      "Toronto": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 3.61881,
          "monthly_cost_744h": 2692.39,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08043,
          "monthly_cost_744h": 59.84,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.44755,
          "monthly_cost_744h": 1076.98,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.12058,
          "monthly_cost_744h": 89.71,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.8951,
          "monthly_cost_744h": 2153.95,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.64329,
          "monthly_cost_744h": 478.61,
          "vpn_region": "NAM",
          "iso_code": "CAN"
        }
      }
    }
  },
  "Brazil": {
    "Global": {
      "Rio de Janeiro": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.7656,
          "monthly_cost_744h": 6521.61,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.6084,
          "monthly_cost_744h": 1196.65,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.68883,
          "monthly_cost_744h": 1256.49,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 3.29711,
          "monthly_cost_744h": 2453.05,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.45796,
          "monthly_cost_744h": 2572.72,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 8.52432,
          "monthly_cost_744h": 6342.09,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        }
      },
      "São Paulo": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 4.82508,
          "monthly_cost_744h": 3589.86,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 8.7656,
          "monthly_cost_744h": 6521.61,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.6084,
          "monthly_cost_744h": 1196.65,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 7.23762,
          "monthly_cost_744h": 5384.79,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.68883,
          "monthly_cost_744h": 1256.49,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 3.29711,
          "monthly_cost_744h": 2453.05,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.45796,
          "monthly_cost_744h": 2572.72,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 8.52432,
          "monthly_cost_744h": 6342.09,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        }
      }
    },
    "Local": {
      "Rio de Janeiro": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        }
      },
      "São Paulo": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        }
      }
    },
    "Regional": {
      "Rio de Janeiro": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.92999,
          "monthly_cost_744h": 1435.91,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.73424,
          "monthly_cost_744h": 2034.27,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08043,
          "monthly_cost_744h": 59.84,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.41254,
          "monthly_cost_744h": 1794.93,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        }
      },
      "São Paulo": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 1.92999,
          "monthly_cost_744h": 1435.91,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 2.73424,
          "monthly_cost_744h": 2034.27,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.08043,
          "monthly_cost_744h": 59.84,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.48256,
          "monthly_cost_744h": 359.02,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 1.52797,
          "monthly_cost_744h": 1136.81,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.56298,
          "monthly_cost_744h": 418.86,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 1.04542,
          "monthly_cost_744h": 777.79,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 2.41254,
          "monthly_cost_744h": 1794.93,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "SAM",
          "iso_code": "BRA"
        }
      }
    }
  },
  "Chile": {
    "Global": {
      "Santiago de Chile": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 6.43348,
          "monthly_cost_744h": 4786.51,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 11.58015,
          "monthly_cost_744h": 8615.63,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.3217,
          "monthly_cost_744h": 239.34,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 2.09084,
          "monthly_cost_744h": 1555.58,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 9.56974,
          "monthly_cost_744h": 7119.89,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 2.25169,
          "monthly_cost_744h": 1675.26,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 4.34253,
          "monthly_cost_744h": 3230.84,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 4.50338,
          "monthly_cost_744h": 3350.51,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 11.17802,
          "monthly_cost_744h": 8316.45,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 1.12584,
          "monthly_cost_744h": 837.62,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 4.66423,
          "monthly_cost_744h": 3470.19,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        }
      }
    },
    "Local": {
      "Santiago de Chile": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 0.0,
          "monthly_cost_744h": 0.0,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        }
      }
    },
    "Regional": {
      "Santiago de Chile": {
        "1G": {
          "bandwidth_mbps": 1000,
          "hourly_rate_usd": 5.14678,
          "monthly_cost_744h": 3829.2,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "10G": {
          "bandwidth_mbps": 10000,
          "hourly_rate_usd": 9.08718,
          "monthly_cost_744h": 6760.86,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "10M": {
          "bandwidth_mbps": 10,
          "hourly_rate_usd": 0.24128,
          "monthly_cost_744h": 179.51,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "100M": {
          "bandwidth_mbps": 100,
          "hourly_rate_usd": 1.76913,
          "monthly_cost_744h": 1316.23,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "2G": {
          "bandwidth_mbps": 2000,
          "hourly_rate_usd": 6.51379,
          "monthly_cost_744h": 4846.26,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "20M": {
          "bandwidth_mbps": 20,
          "hourly_rate_usd": 0.88457,
          "monthly_cost_744h": 658.12,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "200M": {
          "bandwidth_mbps": 200,
          "hourly_rate_usd": 1.84956,
          "monthly_cost_744h": 1376.07,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "300M": {
          "bandwidth_mbps": 300,
          "hourly_rate_usd": 2.81467,
          "monthly_cost_744h": 2094.11,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "400M": {
          "bandwidth_mbps": 400,
          "hourly_rate_usd": 3.53839,
          "monthly_cost_744h": 2632.56,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "5G": {
          "bandwidth_mbps": 5000,
          "hourly_rate_usd": 7.88091,
          "monthly_cost_744h": 5863.4,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "50M": {
          "bandwidth_mbps": 50,
          "hourly_rate_usd": 0.96499,
          "monthly_cost_744h": 717.95,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        },
        "500M": {
          "bandwidth_mbps": 500,
          "hourly_rate_usd": 3.69924,
          "monthly_cost_744h": 2752.23,
          "vpn_region": "SAM",
          "iso_code": "CHL"
        }
      }
    }
  }
};

// Expose globalement pour usage dans le heatmap tool
if (typeof window !== 'undefined') {
  window.VPNAAS_PRICING = VPNAAS_PRICING;
  window.VPNAAS_COUNTRIES = Object.keys(VPNAAS_PRICING);
}
