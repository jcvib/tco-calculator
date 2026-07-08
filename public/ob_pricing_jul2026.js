// Orange Business ODCC Pricing Data
// Source: ODCCpricingJul26.csv
// Généré le: 2026-07-07T09:28:45.535Z
//
// Structure Private : OB_PRICING_PRIVATE[Country][Bandwidth] -> { hourly_rate_eur, monthly_cost_744h, status: {csp: 'active'|'unavailable'} }
// Structure Public  : OB_PRICING_PUBLIC[Country][Architecture][Bandwidth] -> idem (Architecture: 'Standard' | 'High Availability')
//
// Prix en EUR, PAYG pur (plus de frais de réservation). monthly_cost_744h = hourly_rate_eur * 744h.
// 15 pays disponibles.

const OB_PRICING_PRIVATE = {
  "Australia": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1568,
      "monthly_cost_744h": 116.66,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.1612,
      "monthly_cost_744h": 119.93,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.2146,
      "monthly_cost_744h": 159.66,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.232,
      "monthly_cost_744h": 172.61,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.2562,
      "monthly_cost_744h": 190.61,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.3045,
      "monthly_cost_744h": 226.55,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.3612,
      "monthly_cost_744h": 268.73,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.4275,
      "monthly_cost_744h": 318.06,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.4618,
      "monthly_cost_744h": 343.58,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.5116,
      "monthly_cost_744h": 380.63,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.5609,
      "monthly_cost_744h": 417.31,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.7479,
      "monthly_cost_744h": 556.44,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 1.053,
      "monthly_cost_744h": 783.43,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.3624,
      "monthly_cost_744h": 1013.63,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 1.9246,
      "monthly_cost_744h": 1431.9,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "Brazil": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1944,
      "monthly_cost_744h": 144.63,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.3009,
      "monthly_cost_744h": 223.87,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.3878,
      "monthly_cost_744h": 288.52,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.406,
      "monthly_cost_744h": 302.06,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.4241,
      "monthly_cost_744h": 315.53,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.4244,
      "monthly_cost_744h": 315.75,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.6095,
      "monthly_cost_744h": 453.47,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.6249,
      "monthly_cost_744h": 464.93,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.7435,
      "monthly_cost_744h": 553.16,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.9181,
      "monthly_cost_744h": 683.07,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 1.0338,
      "monthly_cost_744h": 769.15,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 1.3918,
      "monthly_cost_744h": 1035.5,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 1.9264,
      "monthly_cost_744h": 1433.24,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 2.7084,
      "monthly_cost_744h": 2015.05,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 4.1263,
      "monthly_cost_744h": 3069.97,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "Canada": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1481,
      "monthly_cost_744h": 110.19,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.1694,
      "monthly_cost_744h": 126.03,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.2292,
      "monthly_cost_744h": 170.52,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.264,
      "monthly_cost_744h": 196.42,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.2897,
      "monthly_cost_744h": 215.54,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.3406,
      "monthly_cost_744h": 253.41,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.4051,
      "monthly_cost_744h": 301.39,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.4932,
      "monthly_cost_744h": 366.94,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.5444,
      "monthly_cost_744h": 405.03,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.6116,
      "monthly_cost_744h": 455.03,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.6616,
      "monthly_cost_744h": 492.23,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.8109,
      "monthly_cost_744h": 603.31,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 1.0635,
      "monthly_cost_744h": 791.24,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.2749,
      "monthly_cost_744h": 948.53,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 1.7308,
      "monthly_cost_744h": 1287.72,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "France": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1718,
      "monthly_cost_744h": 127.82,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "active",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.1855,
      "monthly_cost_744h": 138.01,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.2002,
      "monthly_cost_744h": 148.95,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.2067,
      "monthly_cost_744h": 153.78,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "active",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.2133,
      "monthly_cost_744h": 158.7,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "active",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.2412,
      "monthly_cost_744h": 179.45,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.3207,
      "monthly_cost_744h": 238.6,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.3884,
      "monthly_cost_744h": 288.97,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.494,
      "monthly_cost_744h": 367.54,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.5099,
      "monthly_cost_744h": 379.37,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.5717,
      "monthly_cost_744h": 425.34,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.6589,
      "monthly_cost_744h": 490.22,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 0.9518,
      "monthly_cost_744h": 708.14,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.1714,
      "monthly_cost_744h": 871.52,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "active",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 1.3178,
      "monthly_cost_744h": 980.44,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "active"
      }
    }
  },
  "Germany": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1839,
      "monthly_cost_744h": 136.82,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.2482,
      "monthly_cost_744h": 184.66,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.3348,
      "monthly_cost_744h": 249.09,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.3348,
      "monthly_cost_744h": 249.09,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.3348,
      "monthly_cost_744h": 249.09,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.4487,
      "monthly_cost_744h": 333.83,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.522,
      "monthly_cost_744h": 388.37,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.6144,
      "monthly_cost_744h": 457.11,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.6144,
      "monthly_cost_744h": 457.11,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.6144,
      "monthly_cost_744h": 457.11,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.6144,
      "monthly_cost_744h": 457.11,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.6999,
      "monthly_cost_744h": 520.73,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 0.9426,
      "monthly_cost_744h": 701.29,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.1312,
      "monthly_cost_744h": 841.61,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 1.2726,
      "monthly_cost_744h": 946.81,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "active"
      }
    }
  },
  "Hong Kong": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1629,
      "monthly_cost_744h": 121.2,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.1927,
      "monthly_cost_744h": 143.37,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.2298,
      "monthly_cost_744h": 170.97,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.2825,
      "monthly_cost_744h": 210.18,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.3086,
      "monthly_cost_744h": 229.6,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.3341,
      "monthly_cost_744h": 248.57,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.41,
      "monthly_cost_744h": 305.04,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.521,
      "monthly_cost_744h": 387.62,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.6081,
      "monthly_cost_744h": 452.43,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.6626,
      "monthly_cost_744h": 492.97,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.6949,
      "monthly_cost_744h": 517.01,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.8628,
      "monthly_cost_744h": 641.92,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 1.0758,
      "monthly_cost_744h": 800.4,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.3241,
      "monthly_cost_744h": 985.13,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 1.4896,
      "monthly_cost_744h": 1108.26,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "India": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 1.1749,
      "monthly_cost_744h": 874.13,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 1.5379,
      "monthly_cost_744h": 1144.2,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 1.6646,
      "monthly_cost_744h": 1238.46,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 1.741,
      "monthly_cost_744h": 1295.3,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 1.8545,
      "monthly_cost_744h": 1379.75,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 2.0177,
      "monthly_cost_744h": 1501.17,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 2.3119,
      "monthly_cost_744h": 1720.05,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 2.4176,
      "monthly_cost_744h": 1798.69,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 2.5385,
      "monthly_cost_744h": 1888.64,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 2.7077,
      "monthly_cost_744h": 2014.53,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 2.75,
      "monthly_cost_744h": 2046,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 3.7526,
      "monthly_cost_744h": 2791.93,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 5.1193,
      "monthly_cost_744h": 3808.76,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 5.9691,
      "monthly_cost_744h": 4441.01,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 6.3794,
      "monthly_cost_744h": 4746.27,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "Ireland": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.2083,
      "monthly_cost_744h": 154.98,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.223,
      "monthly_cost_744h": 165.91,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.2387,
      "monthly_cost_744h": 177.59,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.2387,
      "monthly_cost_744h": 177.59,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.2387,
      "monthly_cost_744h": 177.59,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.3993,
      "monthly_cost_744h": 297.08,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.4998,
      "monthly_cost_744h": 371.85,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.4998,
      "monthly_cost_744h": 371.85,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.4998,
      "monthly_cost_744h": 371.85,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.4998,
      "monthly_cost_744h": 371.85,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.5994,
      "monthly_cost_744h": 445.95,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.6858,
      "monthly_cost_744h": 510.24,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 0.9255,
      "monthly_cost_744h": 688.57,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.1391,
      "monthly_cost_744h": 847.49,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 1.3421,
      "monthly_cost_744h": 998.52,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "Japan": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1439,
      "monthly_cost_744h": 107.06,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.1886,
      "monthly_cost_744h": 140.32,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.2185,
      "monthly_cost_744h": 162.56,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.2726,
      "monthly_cost_744h": 202.81,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.3021,
      "monthly_cost_744h": 224.76,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.3505,
      "monthly_cost_744h": 260.77,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.4211,
      "monthly_cost_744h": 313.3,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.5119,
      "monthly_cost_744h": 380.85,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.591,
      "monthly_cost_744h": 439.7,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.6767,
      "monthly_cost_744h": 503.46,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.754,
      "monthly_cost_744h": 560.98,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 1.0057,
      "monthly_cost_744h": 748.24,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 1.3516,
      "monthly_cost_744h": 1005.59,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.6645,
      "monthly_cost_744h": 1238.39,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 2.0241,
      "monthly_cost_744h": 1505.93,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "Netherlands": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1668,
      "monthly_cost_744h": 124.1,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.2229,
      "monthly_cost_744h": 165.84,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.2979,
      "monthly_cost_744h": 221.64,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.2979,
      "monthly_cost_744h": 221.64,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.2979,
      "monthly_cost_744h": 221.64,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.401,
      "monthly_cost_744h": 298.34,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.4984,
      "monthly_cost_744h": 370.81,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.5569,
      "monthly_cost_744h": 414.33,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.5569,
      "monthly_cost_744h": 414.33,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.5569,
      "monthly_cost_744h": 414.33,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.5569,
      "monthly_cost_744h": 414.33,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.6363,
      "monthly_cost_744h": 473.41,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 0.9191,
      "monthly_cost_744h": 683.81,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.1312,
      "monthly_cost_744h": 841.61,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 1.2726,
      "monthly_cost_744h": 946.81,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "Singapore": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1334,
      "monthly_cost_744h": 99.25,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.1773,
      "monthly_cost_744h": 131.91,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.1996,
      "monthly_cost_744h": 148.5,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.2483,
      "monthly_cost_744h": 184.74,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.2743,
      "monthly_cost_744h": 204.08,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.3161,
      "monthly_cost_744h": 235.18,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.3722,
      "monthly_cost_744h": 276.92,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.4664,
      "monthly_cost_744h": 347,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.4895,
      "monthly_cost_744h": 364.19,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.6552,
      "monthly_cost_744h": 487.47,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.7204,
      "monthly_cost_744h": 535.98,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.8281,
      "monthly_cost_744h": 616.11,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 1.079,
      "monthly_cost_744h": 802.78,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.296,
      "monthly_cost_744h": 964.22,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 2.016,
      "monthly_cost_744h": 1499.9,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "South Africa": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 1.0977,
      "monthly_cost_744h": 816.69,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 1.9193,
      "monthly_cost_744h": 1427.96,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 2.3635,
      "monthly_cost_744h": 1758.44,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 2.4855,
      "monthly_cost_744h": 1849.21,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 2.834,
      "monthly_cost_744h": 2108.5,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 3.2957,
      "monthly_cost_744h": 2452,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 3.9068,
      "monthly_cost_744h": 2906.66,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 5.0001,
      "monthly_cost_744h": 3720.07,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 5.691,
      "monthly_cost_744h": 4234.1,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 6.3824,
      "monthly_cost_744h": 4748.51,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 7.8395,
      "monthly_cost_744h": 5832.59,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 11.9764,
      "monthly_cost_744h": 8910.44,
      "status": {
        "AWS": "unavailable",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 19.253,
      "monthly_cost_744h": 14324.23,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 30.561,
      "monthly_cost_744h": 22737.38,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 40.8857,
      "monthly_cost_744h": 30418.96,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "United Arab Emirates": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.9218,
      "monthly_cost_744h": 685.82,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 1.5628,
      "monthly_cost_744h": 1162.72,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 1.7091,
      "monthly_cost_744h": 1271.57,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 2.0828,
      "monthly_cost_744h": 1549.6,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 2.3741,
      "monthly_cost_744h": 1766.33,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 2.4026,
      "monthly_cost_744h": 1787.53,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 3.0038,
      "monthly_cost_744h": 2234.83,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 4.7516,
      "monthly_cost_744h": 3535.19,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 5.8132,
      "monthly_cost_744h": 4325.02,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 6.8618,
      "monthly_cost_744h": 5105.18,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 7.1165,
      "monthly_cost_744h": 5294.68,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 10.3767,
      "monthly_cost_744h": 7720.26,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 15.7653,
      "monthly_cost_744h": 11729.38,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 22.9921,
      "monthly_cost_744h": 17106.12,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 28.4341,
      "monthly_cost_744h": 21154.97,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "United Kingdom": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.2397,
      "monthly_cost_744h": 178.34,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.2758,
      "monthly_cost_744h": 205.2,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.3173,
      "monthly_cost_744h": 236.07,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.3312,
      "monthly_cost_744h": 246.41,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.3457,
      "monthly_cost_744h": 257.2,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.3555,
      "monthly_cost_744h": 264.49,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.4127,
      "monthly_cost_744h": 307.05,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.5708,
      "monthly_cost_744h": 424.68,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.608,
      "monthly_cost_744h": 452.35,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.6347,
      "monthly_cost_744h": 472.22,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.7384,
      "monthly_cost_744h": 549.37,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.9359,
      "monthly_cost_744h": 696.31,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 1.1655,
      "monthly_cost_744h": 867.13,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.1655,
      "monthly_cost_744h": 867.13,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 1.2726,
      "monthly_cost_744h": 946.81,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  },
  "United States": {
    "5M": {
      "bandwidth_mbps": 5,
      "hourly_rate_eur": 0.1961,
      "monthly_cost_744h": 145.9,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "10M": {
      "bandwidth_mbps": 10,
      "hourly_rate_eur": 0.2016,
      "monthly_cost_744h": 149.99,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "20M": {
      "bandwidth_mbps": 20,
      "hourly_rate_eur": 0.2696,
      "monthly_cost_744h": 200.58,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "unavailable"
      }
    },
    "30M": {
      "bandwidth_mbps": 30,
      "hourly_rate_eur": 0.3164,
      "monthly_cost_744h": 235.4,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "40M": {
      "bandwidth_mbps": 40,
      "hourly_rate_eur": 0.3417,
      "monthly_cost_744h": 254.22,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    },
    "50M": {
      "bandwidth_mbps": 50,
      "hourly_rate_eur": 0.395,
      "monthly_cost_744h": 293.88,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "100M": {
      "bandwidth_mbps": 100,
      "hourly_rate_eur": 0.4598,
      "monthly_cost_744h": 342.09,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "200M": {
      "bandwidth_mbps": 200,
      "hourly_rate_eur": 0.5482,
      "monthly_cost_744h": 407.86,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "300M": {
      "bandwidth_mbps": 300,
      "hourly_rate_eur": 0.6054,
      "monthly_cost_744h": 450.42,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "400M": {
      "bandwidth_mbps": 400,
      "hourly_rate_eur": 0.6714,
      "monthly_cost_744h": 499.52,
      "status": {
        "AWS": "active",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "500M": {
      "bandwidth_mbps": 500,
      "hourly_rate_eur": 0.7212,
      "monthly_cost_744h": 536.57,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "1G": {
      "bandwidth_mbps": 1000,
      "hourly_rate_eur": 0.7259,
      "monthly_cost_744h": 540.07,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "2G": {
      "bandwidth_mbps": 2000,
      "hourly_rate_eur": 1.1454,
      "monthly_cost_744h": 852.18,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "5G": {
      "bandwidth_mbps": 5000,
      "hourly_rate_eur": 1.2335,
      "monthly_cost_744h": 917.72,
      "status": {
        "AWS": "active",
        "Azure": "active",
        "Cloud Avenue": "unavailable",
        "Equinix": "active",
        "Google Cloud Platform": "active"
      }
    },
    "10G": {
      "bandwidth_mbps": 10000,
      "hourly_rate_eur": 1.2335,
      "monthly_cost_744h": 917.72,
      "status": {
        "AWS": "unavailable",
        "Azure": "unavailable",
        "Cloud Avenue": "unavailable",
        "Equinix": "unavailable",
        "Google Cloud Platform": "unavailable"
      }
    }
  }
};

const OB_PRICING_PUBLIC = {
  "Australia": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1507,
        "monthly_cost_744h": 112.12,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1563,
        "monthly_cost_744h": 116.29,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.2092,
        "monthly_cost_744h": 155.64,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2235,
        "monthly_cost_744h": 166.28,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.238,
        "monthly_cost_744h": 177.07,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.296,
        "monthly_cost_744h": 220.22,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.315,
        "monthly_cost_744h": 234.36,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3444,
        "monthly_cost_744h": 256.23,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3444,
        "monthly_cost_744h": 256.23,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3481,
        "monthly_cost_744h": 258.99,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.3771,
        "monthly_cost_744h": 280.56,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.5468,
        "monthly_cost_744h": 406.82,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1424,
        "monthly_cost_744h": 105.95,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1441,
        "monthly_cost_744h": 107.21,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.1876,
        "monthly_cost_744h": 139.57,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.1943,
        "monthly_cost_744h": 144.56,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2042,
        "monthly_cost_744h": 151.92,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.2399,
        "monthly_cost_744h": 178.49,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.2672,
        "monthly_cost_744h": 198.8,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.2672,
        "monthly_cost_744h": 198.8,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.2672,
        "monthly_cost_744h": 198.8,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.2672,
        "monthly_cost_744h": 198.8,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.3044,
        "monthly_cost_744h": 226.47,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.3952,
        "monthly_cost_744h": 294.03,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "Brazil": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1938,
        "monthly_cost_744h": 144.19,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.2563,
        "monthly_cost_744h": 190.69,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.3328,
        "monthly_cost_744h": 247.6,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.3354,
        "monthly_cost_744h": 249.54,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.3412,
        "monthly_cost_744h": 253.85,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.3469,
        "monthly_cost_744h": 258.09,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.4784,
        "monthly_cost_744h": 355.93,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.5207,
        "monthly_cost_744h": 387.4,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.6163,
        "monthly_cost_744h": 458.53,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.7092,
        "monthly_cost_744h": 527.64,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.8154,
        "monthly_cost_744h": 606.66,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 1.2071,
        "monthly_cost_744h": 898.08,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1604,
        "monthly_cost_744h": 119.34,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.2098,
        "monthly_cost_744h": 156.09,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.2688,
        "monthly_cost_744h": 199.99,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2805,
        "monthly_cost_744h": 208.69,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2905,
        "monthly_cost_744h": 216.13,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.3005,
        "monthly_cost_744h": 223.57,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.4067,
        "monthly_cost_744h": 302.58,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.4484,
        "monthly_cost_744h": 333.61,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.5305,
        "monthly_cost_744h": 394.69,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.6162,
        "monthly_cost_744h": 458.45,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.7025,
        "monthly_cost_744h": 522.66,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.9673,
        "monthly_cost_744h": 719.67,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "Canada": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1371,
        "monthly_cost_744h": 102,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1574,
        "monthly_cost_744h": 117.11,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.197,
        "monthly_cost_744h": 146.57,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2344,
        "monthly_cost_744h": 174.39,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2564,
        "monthly_cost_744h": 190.76,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.2977,
        "monthly_cost_744h": 221.49,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.3529,
        "monthly_cost_744h": 262.56,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.4477,
        "monthly_cost_744h": 333.09,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.4572,
        "monthly_cost_744h": 340.16,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.5565,
        "monthly_cost_744h": 414.04,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.6015,
        "monthly_cost_744h": 447.52,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.6133,
        "monthly_cost_744h": 456.3,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1342,
        "monthly_cost_744h": 99.84,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1462,
        "monthly_cost_744h": 108.77,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.1854,
        "monthly_cost_744h": 137.94,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2103,
        "monthly_cost_744h": 156.46,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.226,
        "monthly_cost_744h": 168.14,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.2758,
        "monthly_cost_744h": 205.2,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.3076,
        "monthly_cost_744h": 228.85,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.334,
        "monthly_cost_744h": 248.5,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3394,
        "monthly_cost_744h": 252.51,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.4042,
        "monthly_cost_744h": 300.72,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.4406,
        "monthly_cost_744h": 327.81,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.487,
        "monthly_cost_744h": 362.33,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "France": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1112,
        "monthly_cost_744h": 82.73,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1316,
        "monthly_cost_744h": 97.91,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.1557,
        "monthly_cost_744h": 115.84,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.1611,
        "monthly_cost_744h": 119.86,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.1667,
        "monthly_cost_744h": 124.02,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.1733,
        "monthly_cost_744h": 128.94,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.2382,
        "monthly_cost_744h": 177.22,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.2891,
        "monthly_cost_744h": 215.09,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3556,
        "monthly_cost_744h": 264.57,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3679,
        "monthly_cost_744h": 273.72,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.4145,
        "monthly_cost_744h": 308.39,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.4942,
        "monthly_cost_744h": 367.68,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.0793,
        "monthly_cost_744h": 59,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.0994,
        "monthly_cost_744h": 73.95,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.1246,
        "monthly_cost_744h": 92.7,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.1288,
        "monthly_cost_744h": 95.83,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.1331,
        "monthly_cost_744h": 99.03,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.1437,
        "monthly_cost_744h": 106.91,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.1811,
        "monthly_cost_744h": 134.74,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.2224,
        "monthly_cost_744h": 165.47,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.2887,
        "monthly_cost_744h": 214.79,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.2985,
        "monthly_cost_744h": 222.08,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.3357,
        "monthly_cost_744h": 249.76,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.3411,
        "monthly_cost_744h": 253.78,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "Germany": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1777,
        "monthly_cost_744h": 132.21,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.2305,
        "monthly_cost_744h": 171.49,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.2989,
        "monthly_cost_744h": 222.38,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2989,
        "monthly_cost_744h": 222.38,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2989,
        "monthly_cost_744h": 222.38,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.4048,
        "monthly_cost_744h": 301.17,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.4762,
        "monthly_cost_744h": 354.29,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.4762,
        "monthly_cost_744h": 354.29,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.4762,
        "monthly_cost_744h": 354.29,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.4762,
        "monthly_cost_744h": 354.29,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.4762,
        "monthly_cost_744h": 354.29,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.5363,
        "monthly_cost_744h": 399.01,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1576,
        "monthly_cost_744h": 117.25,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.2092,
        "monthly_cost_744h": 155.64,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.2777,
        "monthly_cost_744h": 206.61,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2777,
        "monthly_cost_744h": 206.61,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2777,
        "monthly_cost_744h": 206.61,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.3737,
        "monthly_cost_744h": 278.03,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.3737,
        "monthly_cost_744h": 278.03,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3737,
        "monthly_cost_744h": 278.03,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3737,
        "monthly_cost_744h": 278.03,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3737,
        "monthly_cost_744h": 278.03,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.3737,
        "monthly_cost_744h": 278.03,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.4291,
        "monthly_cost_744h": 319.25,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "Hong Kong": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1479,
        "monthly_cost_744h": 110.04,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.179,
        "monthly_cost_744h": 133.18,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.179,
        "monthly_cost_744h": 133.18,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2365,
        "monthly_cost_744h": 175.96,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.255,
        "monthly_cost_744h": 189.72,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.3257,
        "monthly_cost_744h": 242.32,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.3257,
        "monthly_cost_744h": 242.32,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.394,
        "monthly_cost_744h": 293.14,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.4552,
        "monthly_cost_744h": 338.67,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.4719,
        "monthly_cost_744h": 351.09,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.4719,
        "monthly_cost_744h": 351.09,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.5586,
        "monthly_cost_744h": 415.6,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1137,
        "monthly_cost_744h": 84.59,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1375,
        "monthly_cost_744h": 102.3,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.1417,
        "monthly_cost_744h": 105.42,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.1835,
        "monthly_cost_744h": 136.52,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.1981,
        "monthly_cost_744h": 147.39,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.235,
        "monthly_cost_744h": 174.84,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.2598,
        "monthly_cost_744h": 193.29,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3152,
        "monthly_cost_744h": 234.51,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3675,
        "monthly_cost_744h": 273.42,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3807,
        "monthly_cost_744h": 283.24,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.3807,
        "monthly_cost_744h": 283.24,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.4138,
        "monthly_cost_744h": 307.87,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "India": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.6989,
        "monthly_cost_744h": 519.98,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.9779,
        "monthly_cost_744h": 727.56,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 1.2484,
        "monthly_cost_744h": 928.81,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 1.4268,
        "monthly_cost_744h": 1061.54,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 1.6306,
        "monthly_cost_744h": 1213.17,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 1.6646,
        "monthly_cost_744h": 1238.46,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 2.0807,
        "monthly_cost_744h": 1548.04,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 2.5385,
        "monthly_cost_744h": 1888.64,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 2.6654,
        "monthly_cost_744h": 1983.06,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 3.0462,
        "monthly_cost_744h": 2266.37,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 3.3,
        "monthly_cost_744h": 2455.2,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 4.7846,
        "monthly_cost_744h": 3559.74,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.5629,
        "monthly_cost_744h": 418.8,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.652,
        "monthly_cost_744h": 485.09,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.8323,
        "monthly_cost_744h": 619.23,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.9512,
        "monthly_cost_744h": 707.69,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 1.0871,
        "monthly_cost_744h": 808.8,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 1.1097,
        "monthly_cost_744h": 825.62,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 1.3871,
        "monthly_cost_744h": 1032,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 1.6923,
        "monthly_cost_744h": 1259.07,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 1.7769,
        "monthly_cost_744h": 1322.01,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 2.0308,
        "monthly_cost_744h": 1510.92,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 2.2,
        "monthly_cost_744h": 1636.8,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 3.1897,
        "monthly_cost_744h": 2373.14,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "Ireland": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1765,
        "monthly_cost_744h": 131.32,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1765,
        "monthly_cost_744h": 131.32,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.1765,
        "monthly_cost_744h": 131.32,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.1765,
        "monthly_cost_744h": 131.32,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.1765,
        "monthly_cost_744h": 131.32,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.306,
        "monthly_cost_744h": 227.66,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.3815,
        "monthly_cost_744h": 283.84,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3825,
        "monthly_cost_744h": 284.58,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3825,
        "monthly_cost_744h": 284.58,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3825,
        "monthly_cost_744h": 284.58,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.4495,
        "monthly_cost_744h": 334.43,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.5144,
        "monthly_cost_744h": 382.71,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.129,
        "monthly_cost_744h": 95.98,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.129,
        "monthly_cost_744h": 95.98,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.129,
        "monthly_cost_744h": 95.98,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.129,
        "monthly_cost_744h": 95.98,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.129,
        "monthly_cost_744h": 95.98,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.25,
        "monthly_cost_744h": 186,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.3004,
        "monthly_cost_744h": 223.5,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3015,
        "monthly_cost_744h": 224.32,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3015,
        "monthly_cost_744h": 224.32,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3015,
        "monthly_cost_744h": 224.32,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.3513,
        "monthly_cost_744h": 261.37,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.4037,
        "monthly_cost_744h": 300.35,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "Japan": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1318,
        "monthly_cost_744h": 98.06,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1733,
        "monthly_cost_744h": 128.94,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.2024,
        "monthly_cost_744h": 150.59,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.245,
        "monthly_cost_744h": 182.28,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2706,
        "monthly_cost_744h": 201.33,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.3106,
        "monthly_cost_744h": 231.09,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.375,
        "monthly_cost_744h": 279,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.4576,
        "monthly_cost_744h": 340.45,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.4902,
        "monthly_cost_744h": 364.71,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.6017,
        "monthly_cost_744h": 447.66,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.6598,
        "monthly_cost_744h": 490.89,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.8777,
        "monthly_cost_744h": 653.01,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1167,
        "monthly_cost_744h": 86.82,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.16,
        "monthly_cost_744h": 119.04,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.16,
        "monthly_cost_744h": 119.04,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2054,
        "monthly_cost_744h": 152.82,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2249,
        "monthly_cost_744h": 167.33,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.2847,
        "monthly_cost_744h": 211.82,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.2867,
        "monthly_cost_744h": 213.3,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3265,
        "monthly_cost_744h": 242.92,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3799,
        "monthly_cost_744h": 282.65,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.4556,
        "monthly_cost_744h": 338.97,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.5103,
        "monthly_cost_744h": 379.66,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.7228,
        "monthly_cost_744h": 537.76,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "Netherlands": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1183,
        "monthly_cost_744h": 88.02,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1781,
        "monthly_cost_744h": 132.51,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.2682,
        "monthly_cost_744h": 199.54,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2682,
        "monthly_cost_744h": 199.54,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2682,
        "monthly_cost_744h": 199.54,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.3422,
        "monthly_cost_744h": 254.6,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.4206,
        "monthly_cost_744h": 312.93,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.4206,
        "monthly_cost_744h": 312.93,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.4206,
        "monthly_cost_744h": 312.93,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.4206,
        "monthly_cost_744h": 312.93,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.4206,
        "monthly_cost_744h": 312.93,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.4772,
        "monthly_cost_744h": 355.04,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.0957,
        "monthly_cost_744h": 71.2,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1339,
        "monthly_cost_744h": 99.62,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.1874,
        "monthly_cost_744h": 139.43,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.1874,
        "monthly_cost_744h": 139.43,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.1874,
        "monthly_cost_744h": 139.43,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.2599,
        "monthly_cost_744h": 193.37,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.2983,
        "monthly_cost_744h": 221.94,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3139,
        "monthly_cost_744h": 233.54,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3155,
        "monthly_cost_744h": 234.73,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3155,
        "monthly_cost_744h": 234.73,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.3155,
        "monthly_cost_744h": 234.73,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.3615,
        "monthly_cost_744h": 268.96,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "Singapore": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1147,
        "monthly_cost_744h": 85.34,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.155,
        "monthly_cost_744h": 115.32,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.155,
        "monthly_cost_744h": 115.32,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.1981,
        "monthly_cost_744h": 147.39,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2162,
        "monthly_cost_744h": 160.85,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.2446,
        "monthly_cost_744h": 181.98,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.2743,
        "monthly_cost_744h": 204.08,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3375,
        "monthly_cost_744h": 251.1,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3797,
        "monthly_cost_744h": 282.5,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.4608,
        "monthly_cost_744h": 342.84,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.5215,
        "monthly_cost_744h": 388,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.5468,
        "monthly_cost_744h": 406.82,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.0891,
        "monthly_cost_744h": 66.29,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1175,
        "monthly_cost_744h": 87.42,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.1221,
        "monthly_cost_744h": 90.84,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.1544,
        "monthly_cost_744h": 114.87,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.1687,
        "monthly_cost_744h": 125.51,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.1918,
        "monthly_cost_744h": 142.7,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.2158,
        "monthly_cost_744h": 160.56,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.2665,
        "monthly_cost_744h": 198.28,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3004,
        "monthly_cost_744h": 223.5,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3654,
        "monthly_cost_744h": 271.86,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.4139,
        "monthly_cost_744h": 307.94,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.4139,
        "monthly_cost_744h": 307.94,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "South Africa": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 1.044,
        "monthly_cost_744h": 776.74,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 1.4395,
        "monthly_cost_744h": 1070.99,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 1.7726,
        "monthly_cost_744h": 1318.81,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 2.0246,
        "monthly_cost_744h": 1506.3,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 2.2518,
        "monthly_cost_744h": 1675.34,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 2.539,
        "monthly_cost_744h": 1889.02,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 2.9301,
        "monthly_cost_744h": 2179.99,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 3.7837,
        "monthly_cost_744h": 2815.07,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 4.3019,
        "monthly_cost_744h": 3200.61,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 4.8204,
        "monthly_cost_744h": 3586.38,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 5.8796,
        "monthly_cost_744h": 4374.42,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 8.9823,
        "monthly_cost_744h": 6682.83,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.8247,
        "monthly_cost_744h": 613.58,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 1.1247,
        "monthly_cost_744h": 836.78,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 1.4315,
        "monthly_cost_744h": 1065.04,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 1.6078,
        "monthly_cost_744h": 1196.2,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 1.7897,
        "monthly_cost_744h": 1331.54,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 2.0043,
        "monthly_cost_744h": 1491.2,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 2.3441,
        "monthly_cost_744h": 1744.01,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 3.027,
        "monthly_cost_744h": 2252.09,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 3.4415,
        "monthly_cost_744h": 2560.48,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 3.8563,
        "monthly_cost_744h": 2869.09,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 4.7037,
        "monthly_cost_744h": 3499.55,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 7.1858,
        "monthly_cost_744h": 5346.24,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "United Arab Emirates": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.7539,
        "monthly_cost_744h": 560.9,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 1.2057,
        "monthly_cost_744h": 897.04,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 1.3155,
        "monthly_cost_744h": 978.73,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 1.6183,
        "monthly_cost_744h": 1204.02,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 1.7102,
        "monthly_cost_744h": 1272.39,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 1.802,
        "monthly_cost_744h": 1340.69,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 2.2865,
        "monthly_cost_744h": 1701.16,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 3.5973,
        "monthly_cost_744h": 2676.39,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 4.3599,
        "monthly_cost_744h": 3243.77,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 5.18,
        "monthly_cost_744h": 3853.92,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 5.371,
        "monthly_cost_744h": 3996.02,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 7.8161,
        "monthly_cost_744h": 5815.18,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.5918,
        "monthly_cost_744h": 440.3,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.9512,
        "monthly_cost_744h": 707.69,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 1.0389,
        "monthly_cost_744h": 772.94,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 1.2768,
        "monthly_cost_744h": 949.94,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 1.3458,
        "monthly_cost_744h": 1001.28,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 1.4147,
        "monthly_cost_744h": 1052.54,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 1.8023,
        "monthly_cost_744h": 1340.91,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 2.8509,
        "monthly_cost_744h": 2121.07,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 3.4879,
        "monthly_cost_744h": 2595,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 4.1171,
        "monthly_cost_744h": 3063.12,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 4.2699,
        "monthly_cost_744h": 3176.81,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 6.226,
        "monthly_cost_744h": 4632.14,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "United Kingdom": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.2328,
        "monthly_cost_744h": 173.2,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.2525,
        "monthly_cost_744h": 187.86,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.2738,
        "monthly_cost_744h": 203.71,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2738,
        "monthly_cost_744h": 203.71,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2738,
        "monthly_cost_744h": 203.71,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.2738,
        "monthly_cost_744h": 203.71,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.3074,
        "monthly_cost_744h": 228.71,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.4175,
        "monthly_cost_744h": 310.62,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.4238,
        "monthly_cost_744h": 315.31,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.4239,
        "monthly_cost_744h": 315.38,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.5064,
        "monthly_cost_744h": 376.76,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.6884,
        "monthly_cost_744h": 512.17,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.2113,
        "monthly_cost_744h": 157.21,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.2113,
        "monthly_cost_744h": 157.21,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.2113,
        "monthly_cost_744h": 157.21,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2113,
        "monthly_cost_744h": 157.21,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2113,
        "monthly_cost_744h": 157.21,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.2113,
        "monthly_cost_744h": 157.21,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.2358,
        "monthly_cost_744h": 175.44,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3388,
        "monthly_cost_744h": 252.07,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.3437,
        "monthly_cost_744h": 255.71,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3437,
        "monthly_cost_744h": 255.71,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.4051,
        "monthly_cost_744h": 301.39,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.5507,
        "monthly_cost_744h": 409.72,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  },
  "United States": {
    "High Availability": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1844,
        "monthly_cost_744h": 137.19,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1855,
        "monthly_cost_744h": 138.01,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.251,
        "monthly_cost_744h": 186.74,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2772,
        "monthly_cost_744h": 206.24,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.296,
        "monthly_cost_744h": 220.22,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.3618,
        "monthly_cost_744h": 269.18,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.4251,
        "monthly_cost_744h": 316.27,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.4287,
        "monthly_cost_744h": 318.95,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.4321,
        "monthly_cost_744h": 321.48,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.4996,
        "monthly_cost_744h": 371.7,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.5354,
        "monthly_cost_744h": 398.34,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.5641,
        "monthly_cost_744h": 419.69,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    },
    "Standard": {
      "5M": {
        "bandwidth_mbps": 5,
        "hourly_rate_eur": 0.1141,
        "monthly_cost_744h": 84.89,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "10M": {
        "bandwidth_mbps": 10,
        "hourly_rate_eur": 0.1557,
        "monthly_cost_744h": 115.84,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "20M": {
        "bandwidth_mbps": 20,
        "hourly_rate_eur": 0.2126,
        "monthly_cost_744h": 158.17,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "30M": {
        "bandwidth_mbps": 30,
        "hourly_rate_eur": 0.2324,
        "monthly_cost_744h": 172.91,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "40M": {
        "bandwidth_mbps": 40,
        "hourly_rate_eur": 0.2464,
        "monthly_cost_744h": 183.32,
        "status": {
          "AWS": "unavailable",
          "Azure": "unavailable",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "50M": {
        "bandwidth_mbps": 50,
        "hourly_rate_eur": 0.3302,
        "monthly_cost_744h": 245.67,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "100M": {
        "bandwidth_mbps": 100,
        "hourly_rate_eur": 0.3302,
        "monthly_cost_744h": 245.67,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "200M": {
        "bandwidth_mbps": 200,
        "hourly_rate_eur": 0.3339,
        "monthly_cost_744h": 248.42,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "300M": {
        "bandwidth_mbps": 300,
        "hourly_rate_eur": 0.337,
        "monthly_cost_744h": 250.73,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "400M": {
        "bandwidth_mbps": 400,
        "hourly_rate_eur": 0.3912,
        "monthly_cost_744h": 291.05,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "500M": {
        "bandwidth_mbps": 500,
        "hourly_rate_eur": 0.42,
        "monthly_cost_744h": 312.48,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      },
      "1G": {
        "bandwidth_mbps": 1000,
        "hourly_rate_eur": 0.4434,
        "monthly_cost_744h": 329.89,
        "status": {
          "AWS": "active",
          "Azure": "active",
          "Cato": "unavailable",
          "Google Cloud Platform": "unavailable",
          "Palo Alto": "unavailable",
          "Zscaler": "unavailable"
        }
      }
    }
  }
};

const OB_COUNTRIES = [
  "Australia",
  "Brazil",
  "Canada",
  "France",
  "Germany",
  "Hong Kong",
  "India",
  "Ireland",
  "Japan",
  "Netherlands",
  "Singapore",
  "South Africa",
  "United Arab Emirates",
  "United Kingdom",
  "United States"
];

if (typeof window !== 'undefined') {
  window.OB_PRICING_PRIVATE = OB_PRICING_PRIVATE;
  window.OB_PRICING_PUBLIC = OB_PRICING_PUBLIC;
  window.OB_COUNTRIES = OB_COUNTRIES;
}
