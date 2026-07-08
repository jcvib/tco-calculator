// Equinix Pricing — March/April 2026
// Source: equinix_pricing_20260401.json
// Convertit le JSON brut en module ES avec export const
//
// Structure: EQUINIX_PRICING.services
//   .ports.data[]          → { metro, ibx, bandwidth, monthly_price, nrc_price, currency, port_type }
//   .fabric_cloud_sp.data[] → { metro, bandwidth, term, price, currency, type: "cloud_sp" }
//   .cloud_router.data[]   → { metro, package, term, price, currency }
//   .fabric_connections.data[] → hors scope MVP
//
// ⚠️  Devises mixtes : EUR/GBP/HKD/AUD/SGD/JPY/BRL/ZAR/USD selon le metro
// ⚠️  Toujours utiliser toDisplay(price, entry.currency)
// ⚠️  VC fabric_cloud_sp : term=1 et term=12 uniquement dans ce dataset

import rawData from './equinix_pricing_20260403.json'

export const EQUINIX_PRICING = rawData
