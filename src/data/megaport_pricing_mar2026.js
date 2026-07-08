// Megaport Pricing — March/April 2026
// Source: megaport_pricing_20260401.json
// Convertit le JSON brut en module ES avec export const
//
// Structure: MEGAPORT_PRICING.pricing[country][loc_id]
//   → loc_name, metro
//   → port[speed_string][term_int]       → { monthlyRate, monthlyRackRate, currency }
//   → vxc_aws[speed_string].terms[term_int]  → { monthlyRate }
//   → vxc_azure[speed_string].terms[term_int] → { monthlyRate }
//
// ⚠️  Terms sont des entiers : 1, 12, 24, 36
// ⚠️  Speeds sont des strings : "500", "1000"
// ⚠️  MCR non inclus dans ce dataset — géré via fallback dans pricingEngine

import rawData from './megaport_pricing_20260403.json'

export const MEGAPORT_PRICING = rawData
