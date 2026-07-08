import { OB_PRICING }       from '../data/ob_pricing_mar2026.js'
import { VNE_PRICING }      from '../data/vne_pricing_mar2026.js'
import { VPNAAS_PRICING }   from '../data/vpnaas_pricing_mar2026.js'
import { MEGAPORT_PRICING } from '../data/megaport_pricing_mar2026.js'
import { EQUINIX_PRICING }  from '../data/equinix_pricing_mar2026.js'
import {
  COUNTRY_TO_MEGAPORT, COUNTRY_TO_EQUINIX_METRO, DEFAULT_VNE_CONFIG
} from '../data/geoMappings.js'
import { composeStack }  from './stackComposer.js'
import { toDisplay }     from './currencyUtils.js'

/**
 * Point d'entrée principal — calcule les 3 acteurs sur les 3 niveaux de résilience
 */
export function computeAllLevels(params) {
  if (Array.isArray(params.countries)) {
    return {
      bot: computeLevelMultiCountry({ ...params, resilience: 'bot' }),
      mid: computeLevelMultiCountry({ ...params, resilience: 'mid' }),
      a2a: computeLevelMultiCountry({ ...params, resilience: 'a2a' }),
    }
  }
  return {
    bot: computeLevel({ ...params, resilience: 'bot' }),
    mid: computeLevel({ ...params, resilience: 'mid' }),
    a2a: computeLevel({ ...params, resilience: 'a2a' }),
  }
}

// ─── Multi-country (Cas E) ────────────────────────────────────────────────────

function computeLevelMultiCountry(params) {
  return {
    ob:       computeActorMultiCountry('ob',       params),
    megaport: computeActorMultiCountry('megaport', params),
    equinix:  computeActorMultiCountry('equinix',  params),
  }
}

function computeActorMultiCountry(actor, params) {
  const { countries } = params  // array of countries, 1 per DC
  const breakdown = [], missing = []
  let total = 0

  // Per-DC stack (m_dcs=1 → per-DC quantities)
  const perDcStack = composeStack({ ...params, m_dcs: 1 }, actor)

  if (actor === 'ob') {
    // Strip VPNaaS from per-DC stack (add it globally once after)
    const perDcStackNoPnaas = { ...perDcStack, vpnaas: 0 }

    for (let i = 0; i < countries.length; i++) {
      const dcResult = calcOB(perDcStackNoPnaas, { ...params, country: countries[i] })
      breakdown.push({ label: `DC ${i+1} — ${countries[i]}`, total: dcResult.total, sub: dcResult.breakdown })
      if (dcResult.total != null) total += dcResult.total
      else missing.push(...(dcResult.missing ?? []))
    }

    // VPNaaS once (global, using first country for pricing)
    if ((perDcStack.vpnaas ?? 0) > 0) {
      const globalResult = calcOB({ cc: 0, vpnaas: 1 }, { ...params, country: countries[0] })
      breakdown.push(...globalResult.breakdown)
      if (globalResult.total != null) total += globalResult.total
      else missing.push(...(globalResult.missing ?? []))
    }
  } else {
    const calcFn = actor === 'megaport' ? calcMegaport : calcEquinix
    for (let i = 0; i < countries.length; i++) {
      const dcResult = calcFn(perDcStack, { ...params, country: countries[i] })
      breakdown.push({ label: `DC ${i+1} — ${countries[i]}`, total: dcResult.total, sub: dcResult.breakdown })
      if (dcResult.total != null) total += dcResult.total
      else missing.push(...(dcResult.missing ?? []))
    }
  }

  return { total: missing.length === 0 ? total : null, breakdown, missing, notes: [] }
}

export function computeLevel(params) {
  return {
    ob:       computeActor('ob',       params),
    megaport: computeActor('megaport', params),
    equinix:  computeActor('equinix',  params),
  }
}

export function computeActor(actor, params) {
  const stack = composeStack(params, actor)
  if (actor === 'ob')       return calcOB(stack, params)
  if (actor === 'megaport') return calcMegaport(stack, params)
  if (actor === 'equinix')  return calcEquinix(stack, params)
}

// ─── OB ───────────────────────────────────────────────────────────────────────

function calcOB(stack, params) {
  const { country, bandwidth_mbps, term_months, vne_config, m_dcs = 1 } = params
  const breakdown = []
  let total = 0
  const missing = []

  // OB pricing is always in EUR — wrap every amount with toDisplay(value, 'EUR')
  // CC
  const bwKey  = nearestOBBandwidth(bandwidth_mbps)
  const ccData = OB_PRICING[country]?.['High Availability']?.['Local']?.[bwKey]
  if (!ccData) {
    missing.push(`OB CC: prix manquant pour ${country} / Local / ${bwKey}`)
  } else {
    const unit = toDisplay(ccData.monthly_cost_744h, 'EUR')
    const qty  = stack.cc ?? 0
    if (qty > 0) {
      breakdown.push({ label: `${qty}× CC ${bwKey}`, unit, qty, total: unit * qty })
      total += unit * qty
    }
  }

  // VNE + Internet (greenfield)
  const vneQty = stack.vne ?? (stack.vne_per_dc != null ? stack.vne_per_dc * m_dcs : 0)
  if (vneQty > 0) {
    const termKey = termLabel(term_months)
    const config  = vne_config || DEFAULT_VNE_CONFIG
    const inetBW  = nearestVNEInternetBW(bandwidth_mbps)

    const hostingUnitRaw  = VNE_PRICING.hosting?.[country]?.[config]?.[termKey]
    const internetUnitRaw = VNE_PRICING.internet?.[country]?.[inetBW]?.[termKey]

    if (!hostingUnitRaw)  missing.push(`VNE hosting: manquant pour ${country} / ${config}`)
    if (!internetUnitRaw) missing.push(`VNE internet: manquant pour ${country} / ${inetBW}`)

    if (hostingUnitRaw && internetUnitRaw) {
      const hostingUnit  = toDisplay(hostingUnitRaw,  'EUR')
      const internetUnit = toDisplay(internetUnitRaw, 'EUR')
      const unit = hostingUnit + internetUnit
      breakdown.push({
        label: `${vneQty}× VNE (${config})`,
        unit, qty: vneQty, total: unit * vneQty,
        sub: [
          { label: `Hosting ${config}`, unit: hostingUnit },
          { label: `Internet ${inetBW}`, unit: internetUnit },
        ]
      })
      total += unit * vneQty
    }
  }

  // VPNaaS (contexte MPLS)
  if (stack.vpnaas && stack.vpnaas > 0) {
    const { vpnaas_footprint: footprint = 'Local' } = params

    if (footprint === 'Local') {
      breakdown.push({ label: 'VPNaaS Local', unit: 0, qty: 1, total: 0, note: '0€ intra-pays — inclus dans le service OB' })
    } else {
      const bwKey   = nearestOBBandwidth(bandwidth_mbps)
      const cities  = Object.keys(VPNAAS_PRICING[country]?.[footprint] ?? {})
      if (!cities.length) {
        missing.push(`VPNaaS ${footprint}: ${country} non disponible`)
      } else {
        const city    = cities[0]
        const vpnData = VPNAAS_PRICING[country]?.[footprint]?.[city]?.[bwKey]
        if (!vpnData) {
          missing.push(`VPNaaS ${footprint}: manquant pour ${country} / ${city} / ${bwKey}`)
        } else {
          const unit = toDisplay(vpnData.monthly_cost_744h, 'EUR')
          breakdown.push({ label: `VPNaaS ${footprint} (${city})`, unit, qty: 1, total: unit })
          total += unit
        }
      }
    }
  }

  return { total: missing.length === 0 ? total : null, breakdown, missing, notes: [] }
}

// ─── Megaport ─────────────────────────────────────────────────────────────────

function calcMegaport(stack, params) {
  const { country, bandwidth_mbps, term_months, csps = ['aws'] } = params
  const breakdown = []
  let total = 0
  const missing = []

  const locInfo = COUNTRY_TO_MEGAPORT[country]
  if (!locInfo) return { total: null, breakdown, missing: [`Megaport: ${country} non disponible`], notes: [] }

  const locData = findMegaportLoc(locInfo)
  if (!locData) return { total: null, breakdown, missing: [`Megaport: PoP introuvable pour ${country}`], notes: [] }

  const term = term_months
  const bw   = nearestMegaportBandwidth(bandwidth_mbps)

  // PORT
  const portQty = stack.port ?? 0
  if (portQty > 0) {
    const unit = locData.port?.[String(bw)]?.[term]?.monthlyRate
    if (!unit) {
      missing.push(`Port: manquant pour ${locInfo.metro} / ${bw}M / ${term}m`)
    } else {
      const unitD = toDisplay(unit, 'USD')
      breakdown.push({ label: `${portQty}× Port ${bw}M (${locInfo.metro})`, unit: unitD, qty: portQty, total: unitD * portQty })
      total += unitD * portQty
    }
  }

  // MCR — taille calculée sur throughput total (bidirectionnel)
  const mcrQty = stack.mcr ?? 0
  if (mcrQty > 0) {
    const vxcQty    = stack.vxc ?? 0
    const mcrSize   = calcMCRSize(bw, vxcQty, country)
    const unit      = locData.mcr?.[String(mcrSize)]?.[term]?.monthlyRate
    const throughput = bw * vxcQty

    if (!unit) {
      // Fallback palier supérieur
      const paliers  = getMCRPaliers(country)
      const nextSize = paliers.find(p => p > mcrSize)
      const unitNext = nextSize ? locData.mcr?.[String(nextSize)]?.[term]?.monthlyRate : null
      if (unitNext) {
        const unitD = toDisplay(unitNext, 'USD')
        breakdown.push({ label: `${mcrQty}× MCR ${nextSize}M`, unit: unitD, qty: mcrQty, total: unitD * mcrQty, note: `Palier ${mcrSize}M non disponible — palier supérieur utilisé` })
        total += unitD * mcrQty
      } else {
        missing.push(`MCR ${mcrSize}M: manquant pour ${locInfo.metro} / ${term}m`)
      }
    } else {
      const unitD = toDisplay(unit, 'USD')
      breakdown.push({ label: `${mcrQty}× MCR ${mcrSize}M`, unit: unitD, qty: mcrQty, total: unitD * mcrQty, note: `Throughput: ${throughput}M → palier ${mcrSize}M` })
      total += unitD * mcrQty
    }
  }

  // VXC (par CSP)
  const vxcTotal = stack.vxc ?? 0
  if (vxcTotal > 0) {
    const vxcPerCSP = Math.ceil(vxcTotal / csps.length)
    for (const csp of csps) {
      const { rate, usedFallback } = getVXCRate(locData, csp, bw, term)
      if (!rate) {
        missing.push(`VXC→${csp.toUpperCase()} ${bw}M: manquant pour ${locInfo.metro} / ${term}m`)
      } else {
        const unitD = toDisplay(rate, 'USD')
        const note  = usedFallback ? `Prix AWS utilisé (Azure identique)` : undefined
        const entry = { label: `${vxcPerCSP}× VXC→${csp.toUpperCase()} ${bw}M`, unit: unitD, qty: vxcPerCSP, total: unitD * vxcPerCSP }
        if (note) entry.note = note
        breakdown.push(entry)
        total += unitD * vxcPerCSP
      }
    }
  }

  return { total: missing.length === 0 ? total : null, breakdown, missing, notes: [] }
}

// ─── Equinix ──────────────────────────────────────────────────────────────────

function calcEquinix(stack, params) {
  const { country, bandwidth_mbps, term_months } = params
  const breakdown = []
  let total = 0
  const missing = []

  const metro = COUNTRY_TO_EQUINIX_METRO[country]
  if (!metro) return { total: null, breakdown, missing: [`Equinix: ${country} non disponible`], notes: [] }

  const term = term_months
  const bw   = nearestEquinixBandwidth(bandwidth_mbps)

  // PORT
  const portQty = stack.port ?? 0
  if (portQty > 0) {
    const portBw    = nearestPortBandwidth(bandwidth_mbps)
    const portEntry = EQUINIX_PRICING.services.ports?.data
      ?.find(r => r.metro === metro && r.bandwidth === portBw)
    if (!portEntry) {
      missing.push(`Port Equinix: manquant pour ${metro} / ${portBw}M`)
    } else {
      const unit = toDisplay(portEntry.monthly_price, portEntry.currency)
      breakdown.push({ label: `${portQty}× Port ${portBw}M (${metro})`, unit, qty: portQty, total: unit * portQty, note: `${portEntry.monthly_price} ${portEntry.currency}` })
      total += unit * portQty
    }
  }

  // FCR — package selon throughput total
  const fcrQty = stack.fcr ?? 0
  if (fcrQty > 0) {
    const vcQty      = stack.vc ?? 0
    const throughput = bw * vcQty
    const pkg        = getFCRPackage(throughput)
    const fcrEntry   = EQUINIX_PRICING.services.cloud_router?.data
      ?.find(r => r.metro === metro && r.package === pkg && r.term === term)
    if (!fcrEntry) {
      missing.push(`FCR ${pkg}: manquant pour ${metro} / ${term}m`)
    } else {
      const unit = toDisplay(fcrEntry.price, fcrEntry.currency)
      breakdown.push({ label: `${fcrQty}× FCR ${pkg} (${metro})`, unit, qty: fcrQty, total: unit * fcrQty })
      total += unit * fcrQty
    }
  }

  // VC (fabric_cloud_sp)
  // ⚠️ fabric_cloud_sp ne dispose que des terms 1 et 12 dans ce dataset.
  // Pour 24/36 mois : fallback sur term=12 (prix identiques — pas de discount additionnel).
  const vcQty = stack.vc ?? 0
  if (vcQty > 0) {
    const vcTermLookup = term > 12 ? 12 : term
    const vcEntry = EQUINIX_PRICING.services.fabric_cloud_sp?.data
      ?.find(r => r.metro === metro && r.bandwidth === bw && r.term === vcTermLookup)
    if (!vcEntry) {
      // Résultat partiel — ne pas bloquer tout le stack Equinix
      breakdown.push({ label: `${vcQty}× VC ${bw}M (${metro})`, unit: null, qty: vcQty, total: null, note: `VC Cloud non disponible pour ${metro} — données en attente` })
      missing.push(`VC Cloud: ${metro} non disponible`)
    } else {
      const unit = toDisplay(vcEntry.price, vcEntry.currency)
      breakdown.push({ label: `${vcQty}× VC ${bw}M`, unit, qty: vcQty, total: unit * vcQty })
      total += unit * vcQty
    }
  }

  return { total: missing.length === 0 ? total : null, breakdown, missing, notes: [] }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function nearestOBBandwidth(mbps) {
  const BWS   = [10, 20, 50, 100, 200, 300, 400, 500, 1000, 2000, 5000, 10000]
  const match = BWS.find(b => b >= mbps) ?? BWS[BWS.length - 1]
  return { 1000: '1G', 2000: '2G', 5000: '5G', 10000: '10G' }[match] ?? `${match}M`
}

export function nearestMegaportBandwidth(mbps) {
  const BWS = [50, 100, 200, 500, 1000, 2000, 5000, 10000]
  return BWS.find(b => b >= mbps) ?? BWS[BWS.length - 1]
}

export function nearestEquinixBandwidth(mbps) {
  const BWS = [50, 100, 200, 500, 1000, 2000, 5000, 10000]
  return BWS.find(b => b >= mbps) ?? BWS[BWS.length - 1]
}

export function nearestPortBandwidth(mbps) {
  return mbps <= 10000 ? 1000 : 10000
}

export function nearestVNEInternetBW(mbps) {
  const BWS   = [10, 20, 50, 100, 200, 300, 400, 500, 1000, 2000, 5000, 10000]
  const match = BWS.find(b => b >= mbps) ?? BWS[BWS.length - 1]
  return { 1000: '1G', 2000: '2G', 5000: '5G', 10000: '10G' }[match] ?? `${match}M`
}

export function termLabel(months) {
  return months === 1 ? '1 month' : `${months} months`
}

/**
 * Taille MCR = premier palier ≥ throughput total (n_vxcs × bandwidth)
 * Exemple : 4 VXCs × 500M = 2000M throughput → palier MCR France [1000, 5000, 10000] → 5000M
 */
export function calcMCRSize(vxc_bw_mbps, n_vxcs, country) {
  const throughput = vxc_bw_mbps * n_vxcs
  const paliers    = getMCRPaliers(country)
  return paliers.find(p => p >= throughput) ?? paliers[paliers.length - 1]
}

function getMCRPaliers(country) {
  const HIGH = [1000, 5000, 10000, 25000, 50000, 100000]
  const MED  = [1000, 5000, 10000, 25000, 50000]
  const STD  = [1000, 5000, 10000]
  const HK   = [1000, 5000]
  const map  = {
    'Germany':        HIGH,
    'Netherlands':    HIGH,
    'Ireland':        HIGH,
    'USA':            HIGH,
    'United States':  HIGH,
    'Australia':      MED,
    'Hong Kong':      HK,
  }
  return map[country] ?? STD
}

function getFCRPackage(throughput_mbps) {
  if (throughput_mbps <= 2000)  return 'BASIC'
  if (throughput_mbps <= 10000) return 'STANDARD'
  return 'ADVANCED'
}

/**
 * Récupère le monthlyRate d'un VXC pour un CSP donné.
 *
 * Structures dans megaport_pricing_20260403.json (v5.0) :
 *   vxc_aws[bw]   → { region, terms: { '12': { monthlyRate } } }
 *   vxc_azure[bw] → { primary: { terms: { '12': { monthlyRate } } } }
 *
 * v5 utilise un sampling optimisé : certains PoPs n'ont qu'un seul des deux types.
 * Fallback symétrique : AWS absent → vxc_azure.primary, Azure absent → vxc_aws
 * (les prix sont identiques entre AWS et Azure sur Megaport — confirmé avril 2026).
 */
function getVXCRate(locData, csp, bw, term) {
  const bwStr   = String(bw)
  const termStr = String(term)

  const awsRate = locData.vxc_aws?.[bwStr]?.terms?.[termStr]?.monthlyRate ?? null
  const azRate  = locData.vxc_azure?.[bwStr]?.primary?.terms?.[termStr]?.monthlyRate ?? null

  if (csp === 'aws') {
    if (awsRate != null) return { rate: awsRate, usedFallback: false }
    return { rate: azRate, usedFallback: azRate != null }
  }

  // azure
  if (azRate != null) return { rate: azRate, usedFallback: false }
  return { rate: awsRate, usedFallback: awsRate != null }
}

function findMegaportLoc(locInfo) {
  const countryData = MEGAPORT_PRICING.pricing?.[locInfo.country_key]
  if (!countryData) return null
  if (locInfo.loc_id && countryData[locInfo.loc_id]) return countryData[locInfo.loc_id]
  return Object.values(countryData)[0] ?? null
}
