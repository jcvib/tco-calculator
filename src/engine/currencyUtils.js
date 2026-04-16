import { FX_RATES_TO_USD } from '../data/geoMappings.js'

let displayCurrency = 'USD'

export function setDisplayCurrency(currency) { displayCurrency = currency }
export function getDisplayCurrency()          { return displayCurrency }

/**
 * Convertit un montant depuis sa devise source vers la devise d'affichage
 */
export function toDisplay(amount, sourceCurrency) {
  if (amount == null) return null
  const rateToUSD = FX_RATES_TO_USD[sourceCurrency] ?? 1
  const usd = amount * rateToUSD
  if (displayCurrency === 'USD') return usd
  return usd / (FX_RATES_TO_USD['EUR'] ?? 1.08)
}

export function formatCurrency(amount) {
  if (amount == null) return '—'
  const symbol = displayCurrency === 'USD' ? '$' : '€'
  return `${symbol}${Math.round(amount).toLocaleString()}`
}
