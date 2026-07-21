// Equinix Pricing — July 2026
// Source: equinix_pricing_20260721.json
// Convertit le JSON brut en module ES avec export const
//
// Structure: EQUINIX_PRICING.services
//   .ports.data[]          → { metro, ibx, bandwidth, monthly_price, nrc_price, currency, port_type }
//   .fabric_cloud_sp.data[] → { metro, bandwidth, term, price, currency, type: "cloud_sp" }
//   .cloud_router.data[]   → { metro, package, term, price, currency }
//   .fabric_connections.data[] → hors scope MVP
//
// ⚠️  Devises mixtes : EUR/GBP/HKD/AUD/SGD/JPY/BRL/ZAR selon le metro
// ⚠️  Toujours utiliser toDisplay(price, entry.currency)
// ⚠️  VC fabric_cloud_sp : term=1 et term=12 uniquement dans ce dataset
//
// ⚠️  Écart de prix notable vs avril 2026 (confirmé normal par Jean-Charles — Equinix
// cherche à casser les prix de Megaport, bien implanté en APAC) : fabric_connections
// Singapour↔Sydney 40G (-59/-61% selon la durée d'engagement) et network_edge Sydney
// core 2/4 @ 5G (-59/-61%). Catalogue network_edge aussi changé : 8 SKU Amsterdam
// disparus, 2 nouveaux à Washington DC.

import rawData from './equinix_pricing_20260721.json'

export const EQUINIX_PRICING = rawData
