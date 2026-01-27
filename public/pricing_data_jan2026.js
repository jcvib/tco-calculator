// Cloud Pricing Data - AWS & Azure
// Source: cloud_pricing_20260126_183930.json
// Generated: 2026-01-27

const CLOUD_PRICING_DATA = 
{
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
      "Prix rÃ©cupÃ©rÃ©s via API officielle",
      "DerniÃ¨re mise Ã  jour: 26 January 2026",
      "Validation automatique effectuÃ©e"
    ]
  },
  "providers": {
    "aws": {
      "name": "Amazon Web Services",
      "code": "aws",
      "connectivity": {
        "direct_connect": {
          "description": "AWS Direct Connect",
          "high_availability_circuits": 2,
          "available_bandwidths": [
            "50M",
            "100M",
            "200M",
            "300M",
            "400M",
            "500M",
            "1G",
            "2G",
            "5G",
            "10G",
            "25G",
            "50G",
            "100G",
            "400G"
          ],
          "port_costs": {
            "unit": "USD_per_hour",
            "note": "Default price applies to most regions. Regional variations listed when different (e.g. Japan -5%).",
            "pricing": [
              {
                "bandwidth": "50M",
                "bandwidth_mbps": 50,
                "cost_per_hour_default": 0.03
              },
              {
                "bandwidth": "100M",
                "bandwidth_mbps": 100,
                "cost_per_hour_default": 0.06,
                "regional_variations": {
                  "ap-northeast-1": 0.057,
                  "unknown": 0.057
                }
              },
              {
                "bandwidth": "200M",
                "bandwidth_mbps": 200,
                "cost_per_hour_default": 0.08,
                "regional_variations": {
                  "ap-northeast-1": 0.076,
                  "unknown": 0.076
                }
              },
              {
                "bandwidth": "300M",
                "bandwidth_mbps": 300,
                "cost_per_hour_default": 0.12,
                "regional_variations": {
                  "ap-northeast-1": 0.114,
                  "unknown": 0.114
                }
              },
              {
                "bandwidth": "400M",
                "bandwidth_mbps": 400,
                "cost_per_hour_default": 0.16,
                "regional_variations": {
                  "ap-northeast-1": 0.152,
                  "unknown": 0.152
                }
              },
              {
                "bandwidth": "500M",
                "bandwidth_mbps": 500,
                "cost_per_hour_default": 0.2,
                "regional_variations": {
                  "ap-northeast-1": 0.19,
                  "unknown": 0.19
                }
              },
              {
                "bandwidth": "1G",
                "bandwidth_mbps": 1000,
                "cost_per_hour_default": 0.33,
                "regional_variations": {
                  "eu-central-1": 0.3,
                  "me-south-1": 0.3,
                  "us-east-2": 0.3,
                  "unknown": 0.3,
                  "ap-northeast-1": 0.3,
                  "ap-south-1": 0.3,
                  "eu-west-2": 0.3,
                  "ap-southeast-1": 0.3,
                  "us-east-1": 0.3,
                  "eu-west-1": 0.3,
                  "eu-west-3": 0.3,
                  "ap-northeast-2": 0.3,
                  "sa-east-1": 0.3,
                  "eu-north-1": 0.3,
                  "ap-southeast-2": 0.3,
                  "us-west-2": 0.3,
                  "us-west-1": 0.3,
                  "af-south-1": 0.3
                }
              },
              {
                "bandwidth": "2G",
                "bandwidth_mbps": 2000,
                "cost_per_hour_default": 0.66,
                "regional_variations": {
                  "ap-northeast-1": 0.627,
                  "unknown": 0.627
                }
              },
              {
                "bandwidth": "5G",
                "bandwidth_mbps": 5000,
                "cost_per_hour_default": 1.65,
                "regional_variations": {
                  "unknown": 1.568,
                  "ap-northeast-1": 1.568
                }
              },
              {
                "bandwidth": "10G",
                "bandwidth_mbps": 10000,
                "cost_per_hour_default": 2.25,
                "regional_variations": {
                  "eu-central-1": 2.48,
                  "eu-west-1": 2.48,
                  "eu-west-3": 2.48,
                  "us-west-2": 2.48,
                  "eu-west-2": 2.48,
                  "ap-northeast-1": 2.142,
                  "us-east-2": 2.48,
                  "unknown": 2.48,
                  "us-east-1": 2.48,
                  "me-south-1": 2.48,
                  "us-west-1": 2.48,
                  "sa-east-1": 2.48,
                  "ap-south-1": 2.48,
                  "ap-northeast-2": 2.48,
                  "ap-southeast-1": 2.48,
                  "ap-southeast-2": 2.48,
                  "eu-north-1": 2.48,
                  "af-south-1": 2.48
                }
              },
              {
                "bandwidth": "25G",
                "bandwidth_mbps": 25000,
                "cost_per_hour_default": 6.2
              },
              {
                "bandwidth": "50G",
                "bandwidth_mbps": 50000,
                "cost_per_hour_default": 12.4
              },
              {
                "bandwidth": "100G",
                "bandwidth_mbps": 100000,
                "cost_per_hour_default": 22.5
              },
              {
                "bandwidth": "400G",
                "bandwidth_mbps": 400000,
                "cost_per_hour_default": 85.0
              }
            ]
          },
          "private_egress": {
            "unit": "USD_per_GB",
            "note": "Price per region for exiting via Direct Connect at closest location (IntraRegion Outbound). Varies by region: US/EU/CA=$0.02, APAC=$0.041+, LATAM/ME=$0.09-$0.11",
            "by_region": {
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
            }
          }
        }
      },
      "egress_internet": {
        "unit": "USD_per_GB",
        "volume_unit": "GiB",
        "free_tier_gb": 100,
        "regions": {
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
            "region_name": "South America (SÃ£o Paulo)",
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
      "regions": {
        "us-east-1": {
          "code": "us-east-1",
          "name": "US East (N. Virginia)",
          "location": "Virginia",
          "country": "United States",
          "continent": "North America"
        },
        "us-east-2": {
          "code": "us-east-2",
          "name": "US East (Ohio)",
          "location": "Ohio",
          "country": "United States",
          "continent": "North America"
        },
        "us-west-1": {
          "code": "us-west-1",
          "name": "US West (N. California)",
          "location": "California",
          "country": "United States",
          "continent": "North America"
        },
        "us-west-2": {
          "code": "us-west-2",
          "name": "US West (Oregon)",
          "location": "Oregon",
          "country": "United States",
          "continent": "North America"
        },
        "ca-central-1": {
          "code": "ca-central-1",
          "name": "Canada (Central)",
          "location": "Montreal",
          "country": "Canada",
          "continent": "North America"
        },
        "eu-west-1": {
          "code": "eu-west-1",
          "name": "Europe (Ireland)",
          "location": "Dublin",
          "country": "Ireland",
          "continent": "Europe"
        },
        "eu-west-2": {
          "code": "eu-west-2",
          "name": "Europe (London)",
          "location": "London",
          "country": "United Kingdom",
          "continent": "Europe"
        },
        "eu-west-3": {
          "code": "eu-west-3",
          "name": "Europe (Paris)",
          "location": "Paris",
          "country": "France",
          "continent": "Europe"
        },
        "eu-central-1": {
          "code": "eu-central-1",
          "name": "Europe (Frankfurt)",
          "location": "Frankfurt",
          "country": "Germany",
          "continent": "Europe"
        },
        "eu-north-1": {
          "code": "eu-north-1",
          "name": "Europe (Stockholm)",
          "location": "Stockholm",
          "country": "Sweden",
          "continent": "Europe"
        },
        "ap-southeast-1": {
          "code": "ap-southeast-1",
          "name": "Asia Pacific (Singapore)",
          "location": "Singapore",
          "country": "Singapore",
          "continent": "Asia"
        },
        "ap-southeast-2": {
          "code": "ap-southeast-2",
          "name": "Asia Pacific (Sydney)",
          "location": "Sydney",
          "country": "Australia",
          "continent": "Oceania"
        },
        "ap-northeast-1": {
          "code": "ap-northeast-1",
          "name": "Asia Pacific (Tokyo)",
          "location": "Tokyo",
          "country": "Japan",
          "continent": "Asia"
        },
        "ap-northeast-2": {
          "code": "ap-northeast-2",
          "name": "Asia Pacific (Seoul)",
          "location": "Seoul",
          "country": "South Korea",
          "continent": "Asia"
        },
        "ap-south-1": {
          "code": "ap-south-1",
          "name": "Asia Pacific (Mumbai)",
          "location": "Mumbai",
          "country": "India",
          "continent": "Asia"
        },
        "sa-east-1": {
          "code": "sa-east-1",
          "name": "South America (SÃ£o Paulo)",
          "location": "SÃ£o Paulo",
          "country": "Brazil",
          "continent": "South America"
        },
        "me-south-1": {
          "code": "me-south-1",
          "name": "Middle East (Bahrain)",
          "location": "Bahrain",
          "country": "Bahrain",
          "continent": "Middle East"
        },
        "af-south-1": {
          "code": "af-south-1",
          "name": "Africa (Cape Town)",
          "location": "Cape Town",
          "country": "South Africa",
          "continent": "Africa"
        }
      }
    },
    "azure": {
      "name": "Microsoft Azure",
      "code": "azure",
      "connectivity": {
        "expressroute": {
          "description": "Azure ExpressRoute",
          "high_availability_circuits": 1,
          "available_bandwidths": [
            "50M",
            "100M",
            "200M",
            "500M",
            "1G",
            "2G",
            "5G",
            "10G"
          ],
          "port_costs": {
            "unit": "USD_per_month",
            "note": "ExpressRoute circuit costs by tier (Standard/Premium/Local), plan (Metered=egress charged separately, Unlimited=egress included), bandwidth, and zone. NO AVERAGING - each price is exact.",
            "tiers": {
              "standard": {
                "metered": [
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
                "unlimited": [
                  {
                    "bandwidth": "50M",
                    "bandwidth_mbps": 50,
                    "costs_by_zone": {
                      "Zone 4": 741.0,
                      "Zone 2": 610.0,
                      "Zone 1": 300.0,
                      "US Gov Zone 1": 375.0,
                      "Zone 3": 872.0
                    }
                  },
                  {
                    "bandwidth": "100M",
                    "bandwidth_mbps": 100,
                    "costs_by_zone": {
                      "Zone 1": 575.0,
                      "Zone 2": 1230.0,
                      "Zone 3": 1300.0,
                      "US Gov Zone 1": 720.0,
                      "Zone 4": 1265.0
                    }
                  },
                  {
                    "bandwidth": "200M",
                    "bandwidth_mbps": 200,
                    "costs_by_zone": {
                      "Zone 4": 2760.0,
                      "Zone 3": 3220.0,
                      "Zone 2": 2300.0,
                      "US Gov Zone 1": 1440.0,
                      "Zone 1": 1150.0
                    }
                  },
                  {
                    "bandwidth": "500M",
                    "bandwidth_mbps": 500,
                    "costs_by_zone": {
                      "Zone 4": 5200.0,
                      "Zone 2": 5200.0,
                      "US Gov Zone 1": 3440.0,
                      "Zone 3": 5200.0,
                      "Zone 1": 2750.0
                    }
                  },
                  {
                    "bandwidth": "1G",
                    "bandwidth_mbps": 1000,
                    "costs_by_zone": {
                      "Zone 4": 8700.0,
                      "Zone 2": 8700.0,
                      "Zone 3": 8700.0,
                      "Zone 1": 5700.0,
                      "US Gov Zone 1": 7125.0
                    }
                  },
                  {
                    "bandwidth": "2G",
                    "bandwidth_mbps": 2000,
                    "costs_by_zone": {
                      "Zone 3": 17400.0,
                      "Zone 4": 17400.0,
                      "US Gov Zone 1": 14250.0,
                      "Zone 1": 11400.0,
                      "Zone 2": 17400.0
                    }
                  },
                  {
                    "bandwidth": "5G",
                    "bandwidth_mbps": 5000,
                    "costs_by_zone": {
                      "US Gov Zone 1": 32065.0,
                      "Zone 3": 41000.0,
                      "Zone 4": 41000.0,
                      "Zone 2": 41000.0,
                      "Zone 1": 25650.0
                    }
                  },
                  {
                    "bandwidth": "10G",
                    "bandwidth_mbps": 10000,
                    "costs_by_zone": {
                      "Zone 4": 82000.0,
                      "Zone 3": 82000.0,
                      "Zone 1": 51300.0,
                      "Zone 2": 82000.0,
                      "US Gov Zone 1": 64125.0
                    }
                  }
                ]
              },
              "premium": {
                "metered": [
                  {
                    "bandwidth": "50M",
                    "bandwidth_mbps": 50,
                    "costs_by_zone": {
                      "Zone 2": 155.0,
                      "Zone 1": 130.0,
                      "Zone 3": 155.0,
                      "US Gov Zone 1": 164.0,
                      "Zone 4": 155.0
                    }
                  },
                  {
                    "bandwidth": "100M",
                    "bandwidth_mbps": 100,
                    "costs_by_zone": {
                      "Zone 3": 275.0,
                      "Zone 1": 200.0,
                      "Zone 4": 275.0,
                      "US Gov Zone 1": 265.0,
                      "Zone 2": 275.0
                    }
                  },
                  {
                    "bandwidth": "200M",
                    "bandwidth_mbps": 200,
                    "costs_by_zone": {
                      "US Gov Zone 1": 365.0,
                      "Zone 1": 295.0,
                      "Zone 4": 445.0,
                      "Zone 3": 445.0,
                      "Zone 2": 445.0
                    }
                  },
                  {
                    "bandwidth": "500M",
                    "bandwidth_mbps": 500,
                    "costs_by_zone": {
                      "Zone 2": 1090.0,
                      "Zone 1": 690.0,
                      "Zone 3": 1090.0,
                      "Zone 4": 1090.0,
                      "US Gov Zone 1": 865.0
                    }
                  },
                  {
                    "bandwidth": "1G",
                    "bandwidth_mbps": 1000,
                    "costs_by_zone": {
                      "Zone 3": 1886.0,
                      "US Gov Zone 1": 1480.0,
                      "Zone 2": 1886.0,
                      "Zone 1": 1186.0,
                      "Zone 4": 1886.0
                    }
                  },
                  {
                    "bandwidth": "2G",
                    "bandwidth_mbps": 2000,
                    "costs_by_zone": {
                      "Zone 1": 2372.0,
                      "Zone 4": 3122.0,
                      "Zone 3": 3122.0,
                      "US Gov Zone 1": 2965.0,
                      "Zone 2": 3122.0
                    }
                  },
                  {
                    "bandwidth": "5G",
                    "bandwidth_mbps": 5000,
                    "costs_by_zone": {
                      "Zone 4": 5180.0,
                      "US Gov Zone 1": 6475.0,
                      "Zone 3": 5180.0,
                      "Zone 2": 5180.0,
                      "Zone 1": 5180.0
                    }
                  },
                  {
                    "bandwidth": "10G",
                    "bandwidth_mbps": 10000,
                    "costs_by_zone": {
                      "Zone 1": 6400.0,
                      "Zone 3": 6400.0,
                      "Zone 4": 6400.0,
                      "Zone 2": 6400.0,
                      "US Gov Zone 1": 8000.0
                    }
                  }
                ],
                "unlimited": [
                  {
                    "bandwidth": "50M",
                    "bandwidth_mbps": 50,
                    "costs_by_zone": {
                      "Zone 3": 972.0,
                      "Zone 4": 841.0,
                      "US Gov Zone 1": 469.0,
                      "Zone 2": 710.0,
                      "Zone 1": 375.0
                    }
                  },
                  {
                    "bandwidth": "100M",
                    "bandwidth_mbps": 100,
                    "costs_by_zone": {
                      "Zone 4": 1440.0,
                      "Zone 1": 675.0,
                      "US Gov Zone 1": 845.0,
                      "Zone 2": 1405.0,
                      "Zone 3": 1475.0
                    }
                  },
                  {
                    "bandwidth": "200M",
                    "bandwidth_mbps": 200,
                    "costs_by_zone": {
                      "US Gov Zone 1": 1625.0,
                      "Zone 2": 2600.0,
                      "Zone 4": 3060.0,
                      "Zone 3": 3520.0,
                      "Zone 1": 1300.0
                    }
                  },
                  {
                    "bandwidth": "500M",
                    "bandwidth_mbps": 500,
                    "costs_by_zone": {
                      "Zone 4": 6000.0,
                      "Zone 1": 3150.0,
                      "Zone 3": 6000.0,
                      "US Gov Zone 1": 3940.0,
                      "Zone 2": 6000.0
                    }
                  },
                  {
                    "bandwidth": "1G",
                    "bandwidth_mbps": 1000,
                    "costs_by_zone": {
                      "Zone 4": 10150.0,
                      "Zone 2": 10150.0,
                      "Zone 1": 6450.0,
                      "US Gov Zone 1": 8060.0,
                      "Zone 3": 10150.0
                    }
                  },
                  {
                    "bandwidth": "2G",
                    "bandwidth_mbps": 2000,
                    "costs_by_zone": {
                      "Zone 3": 19650.0,
                      "US Gov Zone 1": 16125.0,
                      "Zone 2": 19650.0,
                      "Zone 1": 12900.0,
                      "Zone 4": 19650.0
                    }
                  },
                  {
                    "bandwidth": "5G",
                    "bandwidth_mbps": 5000,
                    "costs_by_zone": {
                      "Zone 1": 28650.0,
                      "Zone 3": 44000.0,
                      "US Gov Zone 1": 35815.0,
                      "Zone 2": 44000.0,
                      "Zone 4": 44000.0
                    }
                  },
                  {
                    "bandwidth": "10G",
                    "bandwidth_mbps": 10000,
                    "costs_by_zone": {
                      "Zone 3": 85000.0,
                      "US Gov Zone 1": 67875.0,
                      "Zone 4": 85000.0,
                      "Zone 2": 85000.0,
                      "Zone 1": 54300.0
                    }
                  }
                ]
              },
              "local": {
                "unlimited": [
                  {
                    "bandwidth": "1G",
                    "bandwidth_mbps": 1000,
                    "costs_by_zone": {
                      "Zone 2": 1600.0,
                      "US Gov Zone 1": 1500.0,
                      "Zone 3": 2000.0,
                      "Zone 1": 1200.0
                    }
                  },
                  {
                    "bandwidth": "2G",
                    "bandwidth_mbps": 2000,
                    "costs_by_zone": {
                      "Zone 2": 2500.0,
                      "Zone 1": 2200.0,
                      "US Gov Zone 1": 2750.0,
                      "Zone 3": 2900.0
                    }
                  },
                  {
                    "bandwidth": "5G",
                    "bandwidth_mbps": 5000,
                    "costs_by_zone": {
                      "Zone 2": 3900.0,
                      "US Gov Zone 1": 4500.0,
                      "Zone 3": 4300.0,
                      "Zone 1": 3600.0
                    }
                  },
                  {
                    "bandwidth": "10G",
                    "bandwidth_mbps": 10000,
                    "costs_by_zone": {
                      "US Gov Zone 1": 6875.0,
                      "Zone 3": 7000.0,
                      "Zone 1": 5500.0,
                      "Zone 2": 6000.0
                    }
                  }
                ]
              }
            }
          },
          "private_egress": {
            "unit": "USD_per_GB",
            "note": "Data transfer out price per zone. Price is INDEPENDENT of circuit bandwidth (50M same as 10G).",
            "by_zone": {
              "Zone 3": 0.14,
              "Zone 4": 0.1,
              "US Gov Zone 1": 0.03,
              "Zone 1": 0.025,
              "Zone 2": 0.05
            }
          },
          "gateway": {
            "type": "ErGw Scale Gateway",
            "cost_per_scale_unit_per_hour": 0.21,
            "scale_unit_gbps": 1,
            "rounding": "ceil",
            "note": "1 Scale Unit = 1 Gbps, arrondi Ã  l'entier supÃ©rieur"
          }
        }
      },
      "egress_internet": {
        "unit": "USD_per_GB",
        "volume_unit": "GB",
        "free_tier_gb": 100,
        "peering_modes": {
          "internet": {
            "description": "Standard Internet Peering",
            "regions": {
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
          },
          "mgn": {
            "description": "Microsoft Global Network Peering",
            "regions": {
              "uaecentral": {
                "region_name": "Uaecentral",
                "region_code": "uaecentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.181
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.175
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.17
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.16
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
                    "max_gb": 0.0,
                    "rate": 0.025
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.113
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.109
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.103
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.062
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.062
                  }
                ]
              },
              "italynorth": {
                "region_name": "Italynorth",
                "region_code": "italynorth",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
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
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.012
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.1044
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.0996
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.084
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.06
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.06
                  }
                ]
              },
              "westus": {
                "region_name": "Westus",
                "region_code": "westus",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "canadacentral": {
                "region_name": "Canadacentral",
                "region_code": "canadacentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "northeurope": {
                "region_name": "Northeurope",
                "region_code": "northeurope",
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
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "switzerlandnorth": {
                "region_name": "Switzerlandnorth",
                "region_code": "switzerlandnorth",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "jioindiacentral": {
                "region_name": "Jioindiacentral",
                "region_code": "jioindiacentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "germanynorth": {
                "region_name": "Germanynorth",
                "region_code": "germanynorth",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "eastus2": {
                "region_name": "Eastus2",
                "region_code": "eastus2",
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
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "switzerlandwest": {
                "region_name": "Switzerlandwest",
                "region_code": "switzerlandwest",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "australiaeast": {
                "region_name": "Australiaeast",
                "region_code": "australiaeast",
                "zone": "Zone 4",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
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
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.012
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.1044
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.0996
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.084
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.06
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.06
                  }
                ]
              },
              "ukwest": {
                "region_name": "Ukwest",
                "region_code": "ukwest",
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
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "israelcentral": {
                "region_name": "Israelcentral",
                "region_code": "israelcentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
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
                    "max_gb": 0.0,
                    "rate": 0.113
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": null,
                    "rate": 0.025
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
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "norwayeast": {
                "region_name": "Norwayeast",
                "region_code": "norwayeast",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "centralus": {
                "region_name": "Centralus",
                "region_code": "centralus",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "francecentral": {
                "region_name": "Francecentral",
                "region_code": "francecentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "japanwest": {
                "region_name": "Japanwest",
                "region_code": "japanwest",
                "zone": "Zone 2",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "westeurope": {
                "region_name": "Westeurope",
                "region_code": "westeurope",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
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
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "germanywestcentral": {
                "region_name": "Germanywestcentral",
                "region_code": "germanywestcentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "australiacentral2": {
                "region_name": "Australiacentral2",
                "region_code": "australiacentral2",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "japaneast": {
                "region_name": "Japaneast",
                "region_code": "japaneast",
                "zone": "Zone 2",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
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
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
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
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "southafricawest": {
                "region_name": "Southafricawest",
                "region_code": "southafricawest",
                "zone": "Zone 3",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.181
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.175
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.17
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.16
                  }
                ]
              },
              "australiacentral": {
                "region_name": "Australiacentral",
                "region_code": "australiacentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "southafricanorth": {
                "region_name": "Southafricanorth",
                "region_code": "southafricanorth",
                "zone": "Zone 3",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.181
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.175
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.17
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.16
                  }
                ]
              },
              "swedensouth": {
                "region_name": "Swedensouth",
                "region_code": "swedensouth",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "westcentralus": {
                "region_name": "Westcentralus",
                "region_code": "westcentralus",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "jioindiawest": {
                "region_name": "Jioindiawest",
                "region_code": "jioindiawest",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "southindia": {
                "region_name": "Southindia",
                "region_code": "southindia",
                "zone": "Zone 4",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "swedencentral": {
                "region_name": "Swedencentral",
                "region_code": "swedencentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "westus3": {
                "region_name": "Westus3",
                "region_code": "westus3",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "qatarcentral": {
                "region_name": "Qatarcentral",
                "region_code": "qatarcentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "mexicocentral": {
                "region_name": "Mexicocentral",
                "region_code": "mexicocentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "malaysiawest": {
                "region_name": "Malaysiawest",
                "region_code": "malaysiawest",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.072
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "uaenorth": {
                "region_name": "Uaenorth",
                "region_code": "uaenorth",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.181
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.175
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.17
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.16
                  }
                ]
              },
              "uksouth": {
                "region_name": "Uksouth",
                "region_code": "uksouth",
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
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "eastasia": {
                "region_name": "Eastasia",
                "region_code": "eastasia",
                "zone": "Zone 2",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "spaincentral": {
                "region_name": "Spaincentral",
                "region_code": "spaincentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "newzealandnorth": {
                "region_name": "Newzealandnorth",
                "region_code": "newzealandnorth",
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
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "francesouth": {
                "region_name": "Francesouth",
                "region_code": "francesouth",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "indonesiacentral": {
                "region_name": "Indonesiacentral",
                "region_code": "indonesiacentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.072
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "southeastasia": {
                "region_name": "Southeastasia",
                "region_code": "southeastasia",
                "zone": "Zone 2",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
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
                    "max_gb": 0.0,
                    "rate": 0.113
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": null,
                    "rate": 0.025
                  }
                ]
              },
              "brazilsouth": {
                "region_name": "Brazilsouth",
                "region_code": "brazilsouth",
                "zone": "Zone 3",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.181
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.175
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.17
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.16
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.16
                  }
                ]
              },
              "eastus": {
                "region_name": "Eastus",
                "region_code": "eastus",
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
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "Global": {
                "region_name": "Global",
                "region_code": "Global",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "norwaywest": {
                "region_name": "Norwaywest",
                "region_code": "norwaywest",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "canadaeast": {
                "region_name": "Canadaeast",
                "region_code": "canadaeast",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "centralindia": {
                "region_name": "Centralindia",
                "region_code": "centralindia",
                "zone": "Zone 4",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "westindia": {
                "region_name": "Westindia",
                "region_code": "westindia",
                "zone": "Zone 4",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
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
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "koreasouth": {
                "region_name": "Koreasouth",
                "region_code": "koreasouth",
                "zone": "Zone 2",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "australiasoutheast": {
                "region_name": "Australiasoutheast",
                "region_code": "australiasoutheast",
                "zone": "Zone 4",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "chilecentral": {
                "region_name": "Chilecentral",
                "region_code": "chilecentral",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "koreacentral": {
                "region_name": "Koreacentral",
                "region_code": "koreacentral",
                "zone": "Zone 2",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.12
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.085
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.082
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.08
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.08
                  }
                ]
              },
              "southcentralus": {
                "region_name": "Southcentralus",
                "region_code": "southcentralus",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "northcentralus": {
                "region_name": "Northcentralus",
                "region_code": "northcentralus",
                "zone": "Zone 1",
                "tiers": [
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.02
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              },
              "attnewyork1": {
                "region_name": "Attnewyork1",
                "region_code": "attnewyork1",
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
                    "rate": 0.01
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 0.0,
                    "rate": 0.09
                  },
                  {
                    "min_gb": 0.0,
                    "max_gb": 100.0,
                    "rate": 0.01
                  },
                  {
                    "min_gb": 100.0,
                    "max_gb": 10335.0,
                    "rate": 0.087
                  },
                  {
                    "min_gb": 10335.0,
                    "max_gb": 51295.0,
                    "rate": 0.083
                  },
                  {
                    "min_gb": 51295.0,
                    "max_gb": 153695.0,
                    "rate": 0.07
                  },
                  {
                    "min_gb": 153695.0,
                    "max_gb": 512095.0,
                    "rate": 0.05
                  },
                  {
                    "min_gb": 512095.0,
                    "max_gb": null,
                    "rate": 0.05
                  }
                ]
              }
            }
          }
        }
      },
      "regions": {
        "australiasoutheast": {
          "code": "australiasoutheast",
          "name": "Australiasoutheast",
          "zone": "Zone 4"
        },
        "brazilsouth": {
          "code": "brazilsouth",
          "name": "Brazilsouth",
          "zone": "Zone 3"
        },
        "japaneast": {
          "code": "japaneast",
          "name": "Japaneast",
          "zone": "Zone 2"
        },
        "eastus2": {
          "code": "eastus2",
          "name": "Eastus2",
          "zone": "Zone 1"
        },
        "koreasouth": {
          "code": "koreasouth",
          "name": "Koreasouth",
          "zone": "Zone 2"
        },
        "belgiumcentral": {
          "code": "belgiumcentral",
          "name": "Belgiumcentral",
          "zone": "Zone 1"
        },
        "switzerlandnorth": {
          "code": "switzerlandnorth",
          "name": "Switzerlandnorth",
          "zone": "Zone 1"
        },
        "westcentralus": {
          "code": "westcentralus",
          "name": "Westcentralus",
          "zone": "Zone 1"
        },
        "mexicocentral": {
          "code": "mexicocentral",
          "name": "Mexicocentral",
          "zone": "Zone 1"
        },
        "eastasia": {
          "code": "eastasia",
          "name": "Eastasia",
          "zone": "Zone 2"
        },
        "australiacentral": {
          "code": "australiacentral",
          "name": "Australiacentral",
          "zone": "Zone 1"
        },
        "Asia": {
          "code": "Asia",
          "name": "Asia",
          "zone": "Zone 1"
        },
        "westus": {
          "code": "westus",
          "name": "Westus",
          "zone": "Zone 1"
        },
        "uaenorth": {
          "code": "uaenorth",
          "name": "Uaenorth",
          "zone": "Zone 1"
        },
        "italynorth": {
          "code": "italynorth",
          "name": "Italynorth",
          "zone": "Zone 1"
        },
        "francecentral": {
          "code": "francecentral",
          "name": "Francecentral",
          "zone": "Zone 1"
        },
        "chilecentral": {
          "code": "chilecentral",
          "name": "Chilecentral",
          "zone": "Zone 1"
        },
        "austriaeast": {
          "code": "austriaeast",
          "name": "Austriaeast",
          "zone": "Zone 1"
        },
        "swedensouth": {
          "code": "swedensouth",
          "name": "Swedensouth",
          "zone": "Zone 1"
        },
        "francesouth": {
          "code": "francesouth",
          "name": "Francesouth",
          "zone": "Zone 1"
        },
        "usgovarizona": {
          "code": "usgovarizona",
          "name": "Usgovarizona",
          "zone": "Zone 1"
        },
        "indonesiacentral": {
          "code": "indonesiacentral",
          "name": "Indonesiacentral",
          "zone": "Zone 1"
        },
        "India": {
          "code": "India",
          "name": "India",
          "zone": "Zone 1"
        },
        "switzerlandwest": {
          "code": "switzerlandwest",
          "name": "Switzerlandwest",
          "zone": "Zone 1"
        },
        "attdallas1": {
          "code": "attdallas1",
          "name": "Attdallas1",
          "zone": "Zone 1"
        },
        "US Gov Zone 1": {
          "code": "US Gov Zone 1",
          "name": "Us Gov Zone 1",
          "zone": "Zone 1"
        },
        "South America": {
          "code": "South America",
          "name": "South America",
          "zone": "Zone 1"
        },
        "canadacentral": {
          "code": "canadacentral",
          "name": "Canadacentral",
          "zone": "Zone 1"
        },
        "israelnorthwest": {
          "code": "israelnorthwest",
          "name": "Israelnorthwest",
          "zone": "Zone 1"
        },
        "sgxsingapore1": {
          "code": "sgxsingapore1",
          "name": "Sgxsingapore1",
          "zone": "Zone 1"
        },
        "norwayeast": {
          "code": "norwayeast",
          "name": "Norwayeast",
          "zone": "Zone 1"
        },
        "Europe": {
          "code": "Europe",
          "name": "Europe",
          "zone": "Zone 1"
        },
        "eastus": {
          "code": "eastus",
          "name": "Eastus",
          "zone": "Zone 1"
        },
        "attdetroit1": {
          "code": "attdetroit1",
          "name": "Attdetroit1",
          "zone": "Zone 1"
        },
        "westus2": {
          "code": "westus2",
          "name": "Westus2",
          "zone": "Zone 1"
        },
        "northcentralus": {
          "code": "northcentralus",
          "name": "Northcentralus",
          "zone": "Zone 1"
        },
        "southcentralus": {
          "code": "southcentralus",
          "name": "Southcentralus",
          "zone": "Zone 1"
        },
        "westeurope": {
          "code": "westeurope",
          "name": "Westeurope",
          "zone": "Zone 1"
        },
        "uksouth": {
          "code": "uksouth",
          "name": "Uksouth",
          "zone": "Zone 1"
        },
        "swedencentral": {
          "code": "swedencentral",
          "name": "Swedencentral",
          "zone": "Zone 1"
        },
        "malaysiawest": {
          "code": "malaysiawest",
          "name": "Malaysiawest",
          "zone": "Zone 1"
        },
        "japanwest": {
          "code": "japanwest",
          "name": "Japanwest",
          "zone": "Zone 2"
        },
        "koreacentral": {
          "code": "koreacentral",
          "name": "Koreacentral",
          "zone": "Zone 2"
        },
        "westindia": {
          "code": "westindia",
          "name": "Westindia",
          "zone": "Zone 4"
        },
        "newzealandnorth": {
          "code": "newzealandnorth",
          "name": "Newzealandnorth",
          "zone": "Zone 1"
        },
        "attnewyork1": {
          "code": "attnewyork1",
          "name": "Attnewyork1",
          "zone": "Zone 1"
        },
        "spaincentral": {
          "code": "spaincentral",
          "name": "Spaincentral",
          "zone": "Zone 1"
        },
        "North America": {
          "code": "North America",
          "name": "North America",
          "zone": "Zone 1"
        },
        "centralindia": {
          "code": "centralindia",
          "name": "Centralindia",
          "zone": "Zone 4"
        },
        "attatlanta1": {
          "code": "attatlanta1",
          "name": "Attatlanta1",
          "zone": "Zone 1"
        },
        "norwaywest": {
          "code": "norwaywest",
          "name": "Norwaywest",
          "zone": "Zone 1"
        },
        "germanynorth": {
          "code": "germanynorth",
          "name": "Germanynorth",
          "zone": "Zone 1"
        },
        "usgovvirginia": {
          "code": "usgovvirginia",
          "name": "Usgovvirginia",
          "zone": "Zone 1"
        },
        "qatarcentral": {
          "code": "qatarcentral",
          "name": "Qatarcentral",
          "zone": "Zone 1"
        },
        "germanywestcentral": {
          "code": "germanywestcentral",
          "name": "Germanywestcentral",
          "zone": "Zone 1"
        },
        "Intercontinental": {
          "code": "Intercontinental",
          "name": "Intercontinental",
          "zone": "Zone 1"
        },
        "australiacentral2": {
          "code": "australiacentral2",
          "name": "Australiacentral2",
          "zone": "Zone 1"
        },
        "ukwest": {
          "code": "ukwest",
          "name": "Ukwest",
          "zone": "Zone 1"
        },
        "uaecentral": {
          "code": "uaecentral",
          "name": "Uaecentral",
          "zone": "Zone 1"
        },
        "jioindiacentral": {
          "code": "jioindiacentral",
          "name": "Jioindiacentral",
          "zone": "Zone 1"
        },
        "australiaeast": {
          "code": "australiaeast",
          "name": "Australiaeast",
          "zone": "Zone 4"
        },
        "southeastasia": {
          "code": "southeastasia",
          "name": "Southeastasia",
          "zone": "Zone 2"
        },
        "jioindiawest": {
          "code": "jioindiawest",
          "name": "Jioindiawest",
          "zone": "Zone 1"
        },
        "northeurope": {
          "code": "northeurope",
          "name": "Northeurope",
          "zone": "Zone 1"
        },
        "westus3": {
          "code": "westus3",
          "name": "Westus3",
          "zone": "Zone 1"
        },
        "southafricanorth": {
          "code": "southafricanorth",
          "name": "Southafricanorth",
          "zone": "Zone 3"
        },
        "southindia": {
          "code": "southindia",
          "name": "Southindia",
          "zone": "Zone 4"
        },
        "Oceania": {
          "code": "Oceania",
          "name": "Oceania",
          "zone": "Zone 1"
        },
        "canadaeast": {
          "code": "canadaeast",
          "name": "Canadaeast",
          "zone": "Zone 1"
        },
        "usgovtexas": {
          "code": "usgovtexas",
          "name": "Usgovtexas",
          "zone": "Zone 1"
        },
        "israelcentral": {
          "code": "israelcentral",
          "name": "Israelcentral",
          "zone": "Zone 1"
        },
        "centralus": {
          "code": "centralus",
          "name": "Centralus",
          "zone": "Zone 1"
        },
        "southafricawest": {
          "code": "southafricawest",
          "name": "Southafricawest",
          "zone": "Zone 3"
        },
        "denmarkeast": {
          "code": "denmarkeast",
          "name": "Denmarkeast",
          "zone": "Zone 1"
        },
        "Middle East And Africa": {
          "code": "Middle East And Africa",
          "name": "Middle East And Africa",
          "zone": "Zone 1"
        },
        "polandcentral": {
          "code": "polandcentral",
          "name": "Polandcentral",
          "zone": "Zone 1"
        }
      }
    }
  }
};

// Export pour window
if (typeof window !== 'undefined') {
  window.CLOUD_PRICING_DATA = CLOUD_PRICING_DATA;
}
