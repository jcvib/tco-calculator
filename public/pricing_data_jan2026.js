// Cloud Pricing Data - AWS & Azure
// Source: cloud_pricing_20260126_183930.json
// Généré le: 2026-01-26 19:01:14
//
// Version: 2026.Q01
// Date originale: 2026-01-26T18:39:55Z
//
// Structure simplifiée pour v5.3-beta :
// - AWS port costs avec variations Japan (-5%)
// - AWS private egress par région
// - Azure ExpressRoute Standard Metered
// - Azure regions mapping vers zones
// - Azure private egress par zone

const CLOUD_PRICING_DATA = {
  "metadata": {
    "version": "2026.Q01",
    "generated_at": "2026-01-26T18:39:55Z",
    "generated_by": "CSP Price Collector v4.0 (AWS Lambda)",
    "sources": {
      "aws": "https://pricing.us-east-1.amazonaws.com/",
      "azure": "https://prices.azure.com/api/retail/prices"
    },
    "currency": "USD",
    "notes": [
      "Prix r\u00c3\u00a9cup\u00c3\u00a9r\u00c3\u00a9s via API officielle",
      "Derni\u00c3\u00a8re mise \u00c3\u00a0 jour: 26 January 2026",
      "Validation automatique effectu\u00c3\u00a9e"
    ]
  },
  "aws": {
    "name": "Amazon Web Services",
    "code": "aws",
    "port_costs": [
      {
        "bandwidth": "50M",
        "bandwidth_mbps": 50,
        "cost_per_hour_default": 0.03,
        "cost_per_hour_japan": 0.03
      },
      {
        "bandwidth": "100M",
        "bandwidth_mbps": 100,
        "cost_per_hour_default": 0.06,
        "cost_per_hour_japan": 0.057
      },
      {
        "bandwidth": "200M",
        "bandwidth_mbps": 200,
        "cost_per_hour_default": 0.08,
        "cost_per_hour_japan": 0.076
      },
      {
        "bandwidth": "300M",
        "bandwidth_mbps": 300,
        "cost_per_hour_default": 0.12,
        "cost_per_hour_japan": 0.114
      },
      {
        "bandwidth": "400M",
        "bandwidth_mbps": 400,
        "cost_per_hour_default": 0.16,
        "cost_per_hour_japan": 0.152
      },
      {
        "bandwidth": "500M",
        "bandwidth_mbps": 500,
        "cost_per_hour_default": 0.2,
        "cost_per_hour_japan": 0.19
      },
      {
        "bandwidth": "1G",
        "bandwidth_mbps": 1000,
        "cost_per_hour_default": 0.33,
        "cost_per_hour_japan": 0.3
      },
      {
        "bandwidth": "2G",
        "bandwidth_mbps": 2000,
        "cost_per_hour_default": 0.66,
        "cost_per_hour_japan": 0.627
      },
      {
        "bandwidth": "5G",
        "bandwidth_mbps": 5000,
        "cost_per_hour_default": 1.65,
        "cost_per_hour_japan": 1.568
      },
      {
        "bandwidth": "10G",
        "bandwidth_mbps": 10000,
        "cost_per_hour_default": 2.25,
        "cost_per_hour_japan": 2.142
      },
      {
        "bandwidth": "25G",
        "bandwidth_mbps": 25000,
        "cost_per_hour_default": 6.2,
        "cost_per_hour_japan": 6.2
      },
      {
        "bandwidth": "50G",
        "bandwidth_mbps": 50000,
        "cost_per_hour_default": 12.4,
        "cost_per_hour_japan": 12.4
      },
      {
        "bandwidth": "100G",
        "bandwidth_mbps": 100000,
        "cost_per_hour_default": 22.5,
        "cost_per_hour_japan": 22.5
      },
      {
        "bandwidth": "400G",
        "bandwidth_mbps": 400000,
        "cost_per_hour_default": 85.0,
        "cost_per_hour_japan": 85.0
      }
    ],
    "private_egress": {
      "us-west-2": 0.02,
      "unknown": 0.02,
      "eu-west-2": 0.02,
      "us-west-1": 0.02,
      "ap-southeast-2": 0.042,
      "ap-southeast-1": 0.041,
      "ap-northeast-1": 0.041,
      "us-east-1": 0.02,
      "ap-south-1": 0.045,
      "eu-central-1": 0.02,
      "me-south-1": 0.09,
      "eu-west-3": 0.02,
      "us-east-2": 0.02,
      "eu-west-1": 0.02,
      "sa-east-1": 0.11,
      "ap-northeast-2": 0.041,
      "eu-north-1": 0.02
    },
    "egress_regions": {
      "us-east-1": {
        "region_name": "US East (N. Virginia)",
        "region_code": "us-east-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "us-east-2": {
        "region_name": "US East (Ohio)",
        "region_code": "us-east-2",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "us-west-1": {
        "region_name": "US West (N. California)",
        "region_code": "us-west-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "us-west-2": {
        "region_name": "US West (Oregon)",
        "region_code": "us-west-2",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "ca-central-1": {
        "region_name": "Canada (Central)",
        "region_code": "ca-central-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "ca-west-1": {
        "region_name": "ca-west-1",
        "region_code": "ca-west-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "eu-west-1": {
        "region_name": "Europe (Ireland)",
        "region_code": "eu-west-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "eu-west-2": {
        "region_name": "Europe (London)",
        "region_code": "eu-west-2",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "eu-west-3": {
        "region_name": "Europe (Paris)",
        "region_code": "eu-west-3",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "eu-central-1": {
        "region_name": "Europe (Frankfurt)",
        "region_code": "eu-central-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "eu-central-2": {
        "region_name": "eu-central-2",
        "region_code": "eu-central-2",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "eu-north-1": {
        "region_name": "Europe (Stockholm)",
        "region_code": "eu-north-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "eu-south-1": {
        "region_name": "eu-south-1",
        "region_code": "eu-south-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "eu-south-2": {
        "region_name": "eu-south-2",
        "region_code": "eu-south-2",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      },
      "ap-southeast-1": {
        "region_name": "Asia Pacific (Singapore)",
        "region_code": "ap-southeast-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.12
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.082
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.08
          }
        ]
      },
      "ap-southeast-2": {
        "region_name": "Asia Pacific (Sydney)",
        "region_code": "ap-southeast-2",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.114
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.098
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.094
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.092
          }
        ]
      },
      "ap-southeast-3": {
        "region_name": "ap-southeast-3",
        "region_code": "ap-southeast-3",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.132
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.1
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.095
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.09
          }
        ]
      },
      "ap-southeast-4": {
        "region_name": "ap-southeast-4",
        "region_code": "ap-southeast-4",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.114
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.098
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.094
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.092
          }
        ]
      },
      "ap-southeast-5": {
        "region_name": "ap-southeast-5",
        "region_code": "ap-southeast-5",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.108
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.0765
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.0738
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.072
          }
        ]
      },
      "ap-southeast-7": {
        "region_name": "ap-southeast-7",
        "region_code": "ap-southeast-7",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.108
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.0765
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.0738
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.072
          }
        ]
      },
      "ap-northeast-1": {
        "region_name": "Asia Pacific (Tokyo)",
        "region_code": "ap-northeast-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.114
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.089
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.086
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.084
          }
        ]
      },
      "ap-northeast-2": {
        "region_name": "Asia Pacific (Seoul)",
        "region_code": "ap-northeast-2",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.126
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.122
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.117
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.108
          }
        ]
      },
      "ap-northeast-3": {
        "region_name": "ap-northeast-3",
        "region_code": "ap-northeast-3",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.114
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.089
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.086
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.084
          }
        ]
      },
      "ap-south-1": {
        "region_name": "Asia Pacific (Mumbai)",
        "region_code": "ap-south-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.1093
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.082
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.08
          }
        ]
      },
      "ap-south-2": {
        "region_name": "ap-south-2",
        "region_code": "ap-south-2",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.1093
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.082
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.08
          }
        ]
      },
      "ap-east-1": {
        "region_name": "ap-east-1",
        "region_code": "ap-east-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.12
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.082
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.08
          }
        ]
      },
      "me-south-1": {
        "region_name": "Middle East (Bahrain)",
        "region_code": "me-south-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.117
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.1105
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.091
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.065
          }
        ]
      },
      "me-central-1": {
        "region_name": "me-central-1",
        "region_code": "me-central-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.11
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.077
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.055
          }
        ]
      },
      "sa-east-1": {
        "region_name": "South America (S\u00c3\u00a3o Paulo)",
        "region_code": "sa-east-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.15
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.138
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.126
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.114
          }
        ]
      },
      "af-south-1": {
        "region_name": "Africa (Cape Town)",
        "region_code": "af-south-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.154
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.147
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.126
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.112
          }
        ]
      },
      "il-central-1": {
        "region_name": "il-central-1",
        "region_code": "il-central-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.11
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.077
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.055
          }
        ]
      },
      "mx-central-1": {
        "region_name": "mx-central-1",
        "region_code": "mx-central-1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10240.0,
            "rate": 0.09
          },
          {
            "min_gb": 10240.0,
            "max_gb": 51200.0,
            "rate": 0.085
          },
          {
            "min_gb": 51200.0,
            "max_gb": 153600.0,
            "rate": 0.07
          },
          {
            "min_gb": 153600.0,
            "max_gb": Infinity,
            "rate": 0.05
          }
        ]
      }
    }
  },
  "azure": {
    "name": "Microsoft Azure",
    "code": "azure",
    "port_costs_standard_metered": [
      {
        "bandwidth": "50M",
        "bandwidth_mbps": 50,
        "costs_by_zone": {
          "Zone 1": 55.0,
          "Zone 2": 55.0,
          "Zone 3": 55.0,
          "US Gov Zone 1": 70.0,
          "Zone 4": 55.0
        }
      },
      {
        "bandwidth": "100M",
        "bandwidth_mbps": 100,
        "costs_by_zone": {
          "Zone 3": 100.0,
          "Zone 1": 110.0,
          "Zone 2": 100.0,
          "US Gov Zone 1": 140.0,
          "Zone 4": 100.0
        }
      },
      {
        "bandwidth": "200M",
        "bandwidth_mbps": 200,
        "costs_by_zone": {
          "Zone 3": 145.0,
          "US Gov Zone 1": 180.0,
          "Zone 2": 145.0,
          "Zone 4": 145.0,
          "Zone 1": 145.0
        }
      },
      {
        "bandwidth": "500M",
        "bandwidth_mbps": 500,
        "costs_by_zone": {
          "Zone 3": 290.0,
          "US Gov Zone 1": 365.0,
          "Zone 1": 290.0,
          "Zone 4": 290.0,
          "Zone 2": 290.0
        }
      },
      {
        "bandwidth": "1G",
        "bandwidth_mbps": 1000,
        "costs_by_zone": {
          "US Gov Zone 1": 545.0,
          "Zone 3": 436.0,
          "Zone 1": 436.0,
          "Zone 4": 436.0,
          "Zone 2": 436.0
        }
      },
      {
        "bandwidth": "2G",
        "bandwidth_mbps": 2000,
        "costs_by_zone": {
          "US Gov Zone 1": 1090.0,
          "Zone 1": 872.0,
          "Zone 4": 872.0,
          "Zone 3": 872.0,
          "Zone 2": 872.0
        }
      },
      {
        "bandwidth": "5G",
        "bandwidth_mbps": 5000,
        "costs_by_zone": {
          "Zone 3": 2180.0,
          "US Gov Zone 1": 2725.0,
          "Zone 1": 2180.0,
          "Zone 4": 2180.0,
          "Zone 2": 2180.0
        }
      },
      {
        "bandwidth": "10G",
        "bandwidth_mbps": 10000,
        "costs_by_zone": {
          "Zone 2": 3400.0,
          "US Gov Zone 1": 4250.0,
          "Zone 1": 3400.0,
          "Zone 4": 3400.0,
          "Zone 3": 3400.0
        }
      }
    ],
    "private_egress": {
      "Zone 3": 0.14,
      "Zone 4": 0.1,
      "US Gov Zone 1": 0.03,
      "Zone 1": 0.025,
      "Zone 2": 0.05
    },
    "ergw_config": {
      "type": "ErGw Scale Gateway",
      "cost_per_scale_unit_per_hour": 0.21,
      "scale_unit_gbps": 1,
      "rounding": "ceil"
    },
    "regions_to_zones": {
      "australiasoutheast": {
        "name": "Australiasoutheast",
        "zone": "Zone 4"
      },
      "brazilsouth": {
        "name": "Brazilsouth",
        "zone": "Zone 3"
      },
      "japaneast": {
        "name": "Japaneast",
        "zone": "Zone 2"
      },
      "eastus2": {
        "name": "Eastus2",
        "zone": "Zone 1"
      },
      "koreasouth": {
        "name": "Koreasouth",
        "zone": "Zone 2"
      },
      "belgiumcentral": {
        "name": "Belgiumcentral",
        "zone": "Zone 1"
      },
      "switzerlandnorth": {
        "name": "Switzerlandnorth",
        "zone": "Zone 1"
      },
      "westcentralus": {
        "name": "Westcentralus",
        "zone": "Zone 1"
      },
      "mexicocentral": {
        "name": "Mexicocentral",
        "zone": "Zone 1"
      },
      "eastasia": {
        "name": "Eastasia",
        "zone": "Zone 2"
      },
      "australiacentral": {
        "name": "Australiacentral",
        "zone": "Zone 1"
      },
      "Asia": {
        "name": "Asia",
        "zone": "Zone 1"
      },
      "westus": {
        "name": "Westus",
        "zone": "Zone 1"
      },
      "uaenorth": {
        "name": "Uaenorth",
        "zone": "Zone 1"
      },
      "italynorth": {
        "name": "Italynorth",
        "zone": "Zone 1"
      },
      "francecentral": {
        "name": "Francecentral",
        "zone": "Zone 1"
      },
      "chilecentral": {
        "name": "Chilecentral",
        "zone": "Zone 1"
      },
      "austriaeast": {
        "name": "Austriaeast",
        "zone": "Zone 1"
      },
      "swedensouth": {
        "name": "Swedensouth",
        "zone": "Zone 1"
      },
      "francesouth": {
        "name": "Francesouth",
        "zone": "Zone 1"
      },
      "usgovarizona": {
        "name": "Usgovarizona",
        "zone": "Zone 1"
      },
      "indonesiacentral": {
        "name": "Indonesiacentral",
        "zone": "Zone 1"
      },
      "India": {
        "name": "India",
        "zone": "Zone 1"
      },
      "switzerlandwest": {
        "name": "Switzerlandwest",
        "zone": "Zone 1"
      },
      "attdallas1": {
        "name": "Attdallas1",
        "zone": "Zone 1"
      },
      "US Gov Zone 1": {
        "name": "Us Gov Zone 1",
        "zone": "Zone 1"
      },
      "South America": {
        "name": "South America",
        "zone": "Zone 1"
      },
      "canadacentral": {
        "name": "Canadacentral",
        "zone": "Zone 1"
      },
      "israelnorthwest": {
        "name": "Israelnorthwest",
        "zone": "Zone 1"
      },
      "sgxsingapore1": {
        "name": "Sgxsingapore1",
        "zone": "Zone 1"
      },
      "norwayeast": {
        "name": "Norwayeast",
        "zone": "Zone 1"
      },
      "Europe": {
        "name": "Europe",
        "zone": "Zone 1"
      },
      "eastus": {
        "name": "Eastus",
        "zone": "Zone 1"
      },
      "attdetroit1": {
        "name": "Attdetroit1",
        "zone": "Zone 1"
      },
      "westus2": {
        "name": "Westus2",
        "zone": "Zone 1"
      },
      "northcentralus": {
        "name": "Northcentralus",
        "zone": "Zone 1"
      },
      "southcentralus": {
        "name": "Southcentralus",
        "zone": "Zone 1"
      },
      "westeurope": {
        "name": "Westeurope",
        "zone": "Zone 1"
      },
      "uksouth": {
        "name": "Uksouth",
        "zone": "Zone 1"
      },
      "swedencentral": {
        "name": "Swedencentral",
        "zone": "Zone 1"
      },
      "malaysiawest": {
        "name": "Malaysiawest",
        "zone": "Zone 1"
      },
      "japanwest": {
        "name": "Japanwest",
        "zone": "Zone 2"
      },
      "koreacentral": {
        "name": "Koreacentral",
        "zone": "Zone 2"
      },
      "westindia": {
        "name": "Westindia",
        "zone": "Zone 4"
      },
      "newzealandnorth": {
        "name": "Newzealandnorth",
        "zone": "Zone 1"
      },
      "attnewyork1": {
        "name": "Attnewyork1",
        "zone": "Zone 1"
      },
      "spaincentral": {
        "name": "Spaincentral",
        "zone": "Zone 1"
      },
      "North America": {
        "name": "North America",
        "zone": "Zone 1"
      },
      "centralindia": {
        "name": "Centralindia",
        "zone": "Zone 4"
      },
      "attatlanta1": {
        "name": "Attatlanta1",
        "zone": "Zone 1"
      },
      "norwaywest": {
        "name": "Norwaywest",
        "zone": "Zone 1"
      },
      "germanynorth": {
        "name": "Germanynorth",
        "zone": "Zone 1"
      },
      "usgovvirginia": {
        "name": "Usgovvirginia",
        "zone": "Zone 1"
      },
      "qatarcentral": {
        "name": "Qatarcentral",
        "zone": "Zone 1"
      },
      "germanywestcentral": {
        "name": "Germanywestcentral",
        "zone": "Zone 1"
      },
      "Intercontinental": {
        "name": "Intercontinental",
        "zone": "Zone 1"
      },
      "australiacentral2": {
        "name": "Australiacentral2",
        "zone": "Zone 1"
      },
      "ukwest": {
        "name": "Ukwest",
        "zone": "Zone 1"
      },
      "uaecentral": {
        "name": "Uaecentral",
        "zone": "Zone 1"
      },
      "jioindiacentral": {
        "name": "Jioindiacentral",
        "zone": "Zone 1"
      },
      "australiaeast": {
        "name": "Australiaeast",
        "zone": "Zone 4"
      },
      "southeastasia": {
        "name": "Southeastasia",
        "zone": "Zone 2"
      },
      "jioindiawest": {
        "name": "Jioindiawest",
        "zone": "Zone 1"
      },
      "northeurope": {
        "name": "Northeurope",
        "zone": "Zone 1"
      },
      "westus3": {
        "name": "Westus3",
        "zone": "Zone 1"
      },
      "southafricanorth": {
        "name": "Southafricanorth",
        "zone": "Zone 3"
      },
      "southindia": {
        "name": "Southindia",
        "zone": "Zone 4"
      },
      "Oceania": {
        "name": "Oceania",
        "zone": "Zone 1"
      },
      "canadaeast": {
        "name": "Canadaeast",
        "zone": "Zone 1"
      },
      "usgovtexas": {
        "name": "Usgovtexas",
        "zone": "Zone 1"
      },
      "israelcentral": {
        "name": "Israelcentral",
        "zone": "Zone 1"
      },
      "centralus": {
        "name": "Centralus",
        "zone": "Zone 1"
      },
      "southafricawest": {
        "name": "Southafricawest",
        "zone": "Zone 3"
      },
      "denmarkeast": {
        "name": "Denmarkeast",
        "zone": "Zone 1"
      },
      "Middle East And Africa": {
        "name": "Middle East And Africa",
        "zone": "Zone 1"
      },
      "polandcentral": {
        "name": "Polandcentral",
        "zone": "Zone 1"
      }
    },
    "egress_regions": {
      "switzerlandnorth": {
        "region_name": "Switzerlandnorth",
        "region_code": "switzerlandnorth",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "australiasoutheast": {
        "region_name": "Australiasoutheast",
        "region_code": "australiasoutheast",
        "zone": "Zone 4",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "attdetroit1": {
        "region_name": "Attdetroit1",
        "region_code": "attdetroit1",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "Oceania": {
        "region_name": "Oceania",
        "region_code": "Oceania",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.08
          }
        ]
      },
      "sgxsingapore1": {
        "region_name": "Sgxsingapore1",
        "region_code": "sgxsingapore1",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.08
          },
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.08
          },
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.132
          },
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.08
          },
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.08
          },
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.08
          },
          {
            "min_gb": 0.0,
            "max_gb": 5.0,
            "rate": 0.08
          },
          {
            "min_gb": 5.0,
            "max_gb": 10000.0,
            "rate": 0.0305
          },
          {
            "min_gb": 10000.0,
            "max_gb": 50000.0,
            "rate": 0.09
          },
          {
            "min_gb": 50000.0,
            "max_gb": 150000.0,
            "rate": 0.084
          },
          {
            "min_gb": 150000.0,
            "max_gb": null,
            "rate": 0.072
          }
        ]
      },
      "Europe": {
        "region_name": "Europe",
        "region_code": "Europe",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.02
          },
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "attnewyork1": {
        "region_name": "Attnewyork1",
        "region_code": "attnewyork1",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "Intercontinental": {
        "region_name": "Intercontinental",
        "region_code": "Intercontinental",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 5.0,
            "max_gb": 5.0,
            "rate": 0.08
          },
          {
            "min_gb": 5.0,
            "max_gb": 5.0,
            "rate": 0.16
          },
          {
            "min_gb": 5.0,
            "max_gb": 5.0,
            "rate": 0.08
          },
          {
            "min_gb": 5.0,
            "max_gb": 5.0,
            "rate": 0.08
          },
          {
            "min_gb": 5.0,
            "max_gb": null,
            "rate": 0.05
          }
        ]
      },
      "attdallas1": {
        "region_name": "Attdallas1",
        "region_code": "attdallas1",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.096
          },
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.02
          },
          {
            "min_gb": 0.0,
            "max_gb": 10000.0,
            "rate": 0.048
          },
          {
            "min_gb": 10000.0,
            "max_gb": 50000.0,
            "rate": 0.078
          },
          {
            "min_gb": 50000.0,
            "max_gb": 150000.0,
            "rate": 0.072
          },
          {
            "min_gb": 150000.0,
            "max_gb": null,
            "rate": 0.048
          }
        ]
      },
      "westeurope": {
        "region_name": "Westeurope",
        "region_code": "westeurope",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "polandcentral": {
        "region_name": "Polandcentral",
        "region_code": "polandcentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "francesouth": {
        "region_name": "Francesouth",
        "region_code": "francesouth",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "southeastasia": {
        "region_name": "Southeastasia",
        "region_code": "southeastasia",
        "zone": "Zone 2",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "canadaeast": {
        "region_name": "Canadaeast",
        "region_code": "canadaeast",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "Middle East And Africa": {
        "region_name": "Middle East And Africa",
        "region_code": "Middle East And Africa",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.08
          },
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.08
          }
        ]
      },
      "swedensouth": {
        "region_name": "Swedensouth",
        "region_code": "swedensouth",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "germanywestcentral": {
        "region_name": "Germanywestcentral",
        "region_code": "germanywestcentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "eastus2": {
        "region_name": "Eastus2",
        "region_code": "eastus2",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "uaecentral": {
        "region_name": "Uaecentral",
        "region_code": "uaecentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.12
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.085
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.08
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.075
          }
        ]
      },
      "denmarkeast": {
        "region_name": "Denmarkeast",
        "region_code": "denmarkeast",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10000.0,
            "rate": 0.08
          },
          {
            "min_gb": 10000.0,
            "max_gb": 50000.0,
            "rate": 0.065
          },
          {
            "min_gb": 50000.0,
            "max_gb": 150000.0,
            "rate": 0.06
          },
          {
            "min_gb": 150000.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "India": {
        "region_name": "India",
        "region_code": "India",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "westus3": {
        "region_name": "Westus3",
        "region_code": "westus3",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "southindia": {
        "region_name": "Southindia",
        "region_code": "southindia",
        "zone": "Zone 4",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "jioindiacentral": {
        "region_name": "Jioindiacentral",
        "region_code": "jioindiacentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "eastasia": {
        "region_name": "Eastasia",
        "region_code": "eastasia",
        "zone": "Zone 2",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "belgiumcentral": {
        "region_name": "Belgiumcentral",
        "region_code": "belgiumcentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 10000.0,
            "rate": 0.08
          },
          {
            "min_gb": 10000.0,
            "max_gb": 50000.0,
            "rate": 0.065
          },
          {
            "min_gb": 50000.0,
            "max_gb": 150000.0,
            "rate": 0.06
          },
          {
            "min_gb": 150000.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "canadacentral": {
        "region_name": "Canadacentral",
        "region_code": "canadacentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "germanynorth": {
        "region_name": "Germanynorth",
        "region_code": "germanynorth",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "australiacentral2": {
        "region_name": "Australiacentral2",
        "region_code": "australiacentral2",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "japaneast": {
        "region_name": "Japaneast",
        "region_code": "japaneast",
        "zone": "Zone 2",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "northeurope": {
        "region_name": "Northeurope",
        "region_code": "northeurope",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "usgovtexas": {
        "region_name": "Usgovtexas",
        "region_code": "usgovtexas",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.106
          }
        ]
      },
      "Global": {
        "region_name": "Global",
        "region_code": "Global",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "centralus": {
        "region_name": "Centralus",
        "region_code": "centralus",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "South America": {
        "region_name": "South America",
        "region_code": "South America",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.16
          },
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.08
          }
        ]
      },
      "ukwest": {
        "region_name": "Ukwest",
        "region_code": "ukwest",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "austriaeast": {
        "region_name": "Austriaeast",
        "region_code": "austriaeast",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.08
          }
        ]
      },
      "indonesiacentral": {
        "region_name": "Indonesiacentral",
        "region_code": "indonesiacentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "japanwest": {
        "region_name": "Japanwest",
        "region_code": "japanwest",
        "zone": "Zone 2",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "attatlanta1": {
        "region_name": "Attatlanta1",
        "region_code": "attatlanta1",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.02
          },
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.048
          },
          {
            "min_gb": 0.0,
            "max_gb": 10000.0,
            "rate": 0.096
          },
          {
            "min_gb": 10000.0,
            "max_gb": 50000.0,
            "rate": 0.078
          },
          {
            "min_gb": 50000.0,
            "max_gb": 150000.0,
            "rate": 0.072
          },
          {
            "min_gb": 150000.0,
            "max_gb": null,
            "rate": 0.048
          }
        ]
      },
      "centralindia": {
        "region_name": "Centralindia",
        "region_code": "centralindia",
        "zone": "Zone 4",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "uksouth": {
        "region_name": "Uksouth",
        "region_code": "uksouth",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "norwaywest": {
        "region_name": "Norwaywest",
        "region_code": "norwaywest",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "italynorth": {
        "region_name": "Italynorth",
        "region_code": "italynorth",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "malaysiawest": {
        "region_name": "Malaysiawest",
        "region_code": "malaysiawest",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "Asia": {
        "region_name": "Asia",
        "region_code": "Asia",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.08
          },
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "francecentral": {
        "region_name": "Francecentral",
        "region_code": "francecentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "israelcentral": {
        "region_name": "Israelcentral",
        "region_code": "israelcentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "switzerlandwest": {
        "region_name": "Switzerlandwest",
        "region_code": "switzerlandwest",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "newzealandnorth": {
        "region_name": "Newzealandnorth",
        "region_code": "newzealandnorth",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.1155
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.07875
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.0735
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.063
          }
        ]
      },
      "chilecentral": {
        "region_name": "Chilecentral",
        "region_code": "chilecentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "northcentralus": {
        "region_name": "Northcentralus",
        "region_code": "northcentralus",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "swedencentral": {
        "region_name": "Swedencentral",
        "region_code": "swedencentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "mexicocentral": {
        "region_name": "Mexicocentral",
        "region_code": "mexicocentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "qatarcentral": {
        "region_name": "Qatarcentral",
        "region_code": "qatarcentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "brazilsouth": {
        "region_name": "Brazilsouth",
        "region_code": "brazilsouth",
        "zone": "Zone 3",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.12
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.085
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.08
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.075
          }
        ]
      },
      "North America": {
        "region_name": "North America",
        "region_code": "North America",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": 0.0,
            "rate": 0.04
          },
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.02
          }
        ]
      },
      "australiacentral": {
        "region_name": "Australiacentral",
        "region_code": "australiacentral",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "koreacentral": {
        "region_name": "Koreacentral",
        "region_code": "koreacentral",
        "zone": "Zone 2",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "israelnorthwest": {
        "region_name": "Israelnorthwest",
        "region_code": "israelnorthwest",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.08
          }
        ]
      },
      "westus2": {
        "region_name": "Westus2",
        "region_code": "westus2",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "eastus": {
        "region_name": "Eastus",
        "region_code": "eastus",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "usgovarizona": {
        "region_name": "Usgovarizona",
        "region_code": "usgovarizona",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.106
          }
        ]
      },
      "norwayeast": {
        "region_name": "Norwayeast",
        "region_code": "norwayeast",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "westcentralus": {
        "region_name": "Westcentralus",
        "region_code": "westcentralus",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "uaenorth": {
        "region_name": "Uaenorth",
        "region_code": "uaenorth",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.12
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.085
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.08
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.075
          }
        ]
      },
      "australiaeast": {
        "region_name": "Australiaeast",
        "region_code": "australiaeast",
        "zone": "Zone 4",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "usgovvirginia": {
        "region_name": "Usgovvirginia",
        "region_code": "usgovvirginia",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 0.0,
            "max_gb": null,
            "rate": 0.106
          }
        ]
      },
      "westus": {
        "region_name": "Westus",
        "region_code": "westus",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "jioindiawest": {
        "region_name": "Jioindiawest",
        "region_code": "jioindiawest",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "southcentralus": {
        "region_name": "Southcentralus",
        "region_code": "southcentralus",
        "zone": "Zone 1",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.08
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.065
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.06
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.04
          }
        ]
      },
      "southafricanorth": {
        "region_name": "Southafricanorth",
        "region_code": "southafricanorth",
        "zone": "Zone 3",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.12
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.085
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.08
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.075
          }
        ]
      },
      "westindia": {
        "region_name": "Westindia",
        "region_code": "westindia",
        "zone": "Zone 4",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "koreasouth": {
        "region_name": "Koreasouth",
        "region_code": "koreasouth",
        "zone": "Zone 2",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.11
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.075
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.07
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.06
          }
        ]
      },
      "southafricawest": {
        "region_name": "Southafricawest",
        "region_code": "southafricawest",
        "zone": "Zone 3",
        "tiers": [
          {
            "min_gb": 100.0,
            "max_gb": 10100.0,
            "rate": 0.12
          },
          {
            "min_gb": 10100.0,
            "max_gb": 50100.0,
            "rate": 0.085
          },
          {
            "min_gb": 50100.0,
            "max_gb": 150100.0,
            "rate": 0.08
          },
          {
            "min_gb": 150100.0,
            "max_gb": null,
            "rate": 0.075
          }
        ]
      }
    }
  }
};

// Export pour compatibilité ES6 modules
if (typeof window !== 'undefined') {
  window.CLOUD_PRICING_DATA = CLOUD_PRICING_DATA;
}
