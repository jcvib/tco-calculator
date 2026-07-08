import { formatCurrency } from './currencyUtils.js'

export function generateNarrative(allLevels, params) {
  const { resilience = 'mid', lang = 'fr' } = params
  return lang === 'en'
    ? buildNarrativeEN(allLevels, resilience)
    : buildNarrativeFR(allLevels, resilience)
}

// ─── French ───────────────────────────────────────────────────────────────────

function buildNarrativeFR(allLevels, resilience) {
  const lines   = []
  const current = allLevels[resilience]
  const ob      = current?.ob
  const bestDIY = getBestDIY(current)

  if (ob?.total && bestDIY?.total) {
    const delta    = ((ob.total - bestDIY.total) / bestDIY.total * 100)
    const absDelta = Math.abs(delta).toFixed(0)
    const dir      = delta > 0 ? 'plus cher' : 'moins cher'
    lines.push(
      `En configuration ${resilienceLabelFR(resilience)}, OB est ${absDelta}% ${dir} que ` +
      `${bestDIY.name} (${formatCurrency(ob.total)} vs ${formatCurrency(bestDIY.total)}/mois).`
    )
  }

  const a2aOB  = allLevels.a2a?.ob?.total
  const a2aDIY = getBestDIY(allLevels.a2a)?.total
  if (a2aOB && a2aDIY && resilience !== 'a2a') {
    const d = ((a2aOB - a2aDIY) / a2aDIY * 100).toFixed(0)
    lines.push(
      `En apple-to-apple (résilience équivalente OB), l'écart est de ${Math.abs(d)}% ` +
      `${+d > 0 ? 'en faveur du DIY' : "en faveur d'OB"}.`
    )
  }

  lines.push(`OB inclut un SLA contractuel 99,99% avec double circuit natif, non garanti par les solutions fabric DIY.`)

  const allMissing = [...(current?.megaport?.missing ?? []), ...(current?.equinix?.missing ?? [])]
  if (allMissing.length)
    lines.push(`⚠️ Comparatif partiel — ${allMissing.length} composant(s) sans données.`)

  return lines.join(' ')
}

// ─── English ──────────────────────────────────────────────────────────────────

function buildNarrativeEN(allLevels, resilience) {
  const lines   = []
  const current = allLevels[resilience]
  const ob      = current?.ob
  const bestDIY = getBestDIY(current)

  if (ob?.total && bestDIY?.total) {
    const delta    = ((ob.total - bestDIY.total) / bestDIY.total * 100)
    const absDelta = Math.abs(delta).toFixed(0)
    const dir      = delta > 0 ? 'more expensive' : 'cheaper'
    lines.push(
      `At the ${resilienceLabelEN(resilience)} level, OB is ${absDelta}% ${dir} than ` +
      `${bestDIY.name} (${formatCurrency(ob.total)} vs ${formatCurrency(bestDIY.total)}/month).`
    )
  }

  const a2aOB  = allLevels.a2a?.ob?.total
  const a2aDIY = getBestDIY(allLevels.a2a)?.total
  if (a2aOB && a2aDIY && resilience !== 'a2a') {
    const d = ((a2aOB - a2aDIY) / a2aDIY * 100).toFixed(0)
    lines.push(
      `On an apple-to-apple basis (equivalent resilience to OB), the gap is ${Math.abs(d)}% ` +
      `${+d > 0 ? 'in favour of DIY' : 'in favour of OB'}.`
    )
  }

  lines.push(`OB includes a contractual 99.99% SLA with native dual-circuit failover — not guaranteed by DIY fabric solutions.`)

  const allMissing = [...(current?.megaport?.missing ?? []), ...(current?.equinix?.missing ?? [])]
  if (allMissing.length)
    lines.push(`⚠️ Partial comparison — ${allMissing.length} component(s) with missing data.`)

  return lines.join(' ')
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resilienceLabelFR(r) {
  return { bot: 'bottom-line', mid: 'intermédiaire', a2a: 'apple-to-apple' }[r] ?? r
}

function resilienceLabelEN(r) {
  return { bot: 'bottom-line', mid: 'intermediate', a2a: 'apple-to-apple' }[r] ?? r
}

function getBestDIY({ megaport, equinix } = {}) {
  if (!megaport?.total && !equinix?.total) return { total: null, name: '?' }
  if (!megaport?.total) return { ...equinix, name: 'Equinix' }
  if (!equinix?.total)  return { ...megaport, name: 'Megaport' }
  return megaport.total <= equinix.total
    ? { ...megaport, name: 'Megaport' }
    : { ...equinix, name: 'Equinix' }
}
