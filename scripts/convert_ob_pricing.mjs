// Convertit un export ODCC pricing (CSV ";") en module JS chargé par index.html.
// Usage: node scripts/convert_ob_pricing.mjs "<chemin CSV>" <sortie.js>

import { readFileSync, writeFileSync } from 'fs';

const [, , csvPath, outPath] = process.argv;
if (!csvPath || !outPath) {
  console.error('Usage: node scripts/convert_ob_pricing.mjs <csv> <sortie.js>');
  process.exit(1);
}

const BANDWIDTH_MAP = {
  '5 Mbps': '5M', '10 Mbps': '10M', '20 Mbps': '20M', '30 Mbps': '30M', '40 Mbps': '40M',
  '50 Mbps': '50M', '100 Mbps': '100M', '200 Mbps': '200M', '300 Mbps': '300M', '400 Mbps': '400M',
  '500 Mbps': '500M', '1 Gbps': '1G', '2 Gbps': '2G', '5 Gbps': '5G', '10 Gbps': '10G',
};

const BANDWIDTH_MBPS = {
  '5M': 5, '10M': 10, '20M': 20, '30M': 30, '40M': 40, '50M': 50,
  '100M': 100, '200M': 200, '300M': 300, '400M': 400, '500M': 500,
  '1G': 1000, '2G': 2000, '5G': 5000, '10G': 10000,
};

function parseCsv(text) {
  const lines = text.replace(/^﻿/, '').split(/\r?\n/).filter(l => l.trim().length > 0);
  const headers = lines[0].split(';');
  return lines.slice(1).map(line => {
    const cells = line.split(';');
    const row = {};
    headers.forEach((h, i) => { row[h] = cells[i]; });
    return row;
  });
}

function toNumber(str) {
  return parseFloat(String(str).replace(',', '.'));
}

const raw = readFileSync(csvPath, 'utf-8');
const rows = parseCsv(raw);

// PRIVATE : OB_PRICING_PRIVATE[country][bandwidth] -> { bandwidth_mbps, hourly_rate_eur, monthly_cost_744h, status }
// PUBLIC  : OB_PRICING_PUBLIC[country][architecture][bandwidth] -> idem
const OB_PRICING_PRIVATE = {};
const OB_PRICING_PUBLIC = {};
const countriesSet = new Set();

for (const row of rows) {
  const country = row['Country'];
  const subType = row['Subscription Type'];
  const bwLabel = BANDWIDTH_MAP[row['Bandwidth']];
  const architecture = row['Architecture'];
  const csp = row['CSP'];
  const status = row['Status'] === 'Active Usage' ? 'active' : 'unavailable';
  const hourlyRate = toNumber(row['Reserved Unit Price']); // seul prix restant (modèle PAYG)

  if (!country || !bwLabel) continue;
  countriesSet.add(country);

  const entry = () => ({
    bandwidth_mbps: BANDWIDTH_MBPS[bwLabel],
    hourly_rate_eur: hourlyRate,
    monthly_cost_744h: Math.round(hourlyRate * 744 * 100) / 100,
    status: {},
  });

  if (subType === 'Private') {
    OB_PRICING_PRIVATE[country] ??= {};
    OB_PRICING_PRIVATE[country][bwLabel] ??= entry();
    OB_PRICING_PRIVATE[country][bwLabel].status[csp] = status;
  } else if (subType === 'Public / IPSec') {
    OB_PRICING_PUBLIC[country] ??= {};
    OB_PRICING_PUBLIC[country][architecture] ??= {};
    OB_PRICING_PUBLIC[country][architecture][bwLabel] ??= entry();
    OB_PRICING_PUBLIC[country][architecture][bwLabel].status[csp] = status;
  }
}

const countries = [...countriesSet].sort();

const header = `// Orange Business ODCC Pricing Data
// Source: ${csvPath.split(/[\\/]/).pop()}
// Généré le: ${new Date().toISOString()}
//
// Structure Private : OB_PRICING_PRIVATE[Country][Bandwidth] -> { hourly_rate_eur, monthly_cost_744h, status: {csp: 'active'|'unavailable'} }
// Structure Public  : OB_PRICING_PUBLIC[Country][Architecture][Bandwidth] -> idem (Architecture: 'Standard' | 'High Availability')
//
// Prix en EUR, PAYG pur (plus de frais de réservation). monthly_cost_744h = hourly_rate_eur * 744h.
// ${countries.length} pays disponibles.
`;

const body = `${header}
const OB_PRICING_PRIVATE = ${JSON.stringify(OB_PRICING_PRIVATE, null, 2)};

const OB_PRICING_PUBLIC = ${JSON.stringify(OB_PRICING_PUBLIC, null, 2)};

const OB_COUNTRIES = ${JSON.stringify(countries, null, 2)};

if (typeof window !== 'undefined') {
  window.OB_PRICING_PRIVATE = OB_PRICING_PRIVATE;
  window.OB_PRICING_PUBLIC = OB_PRICING_PUBLIC;
  window.OB_COUNTRIES = OB_COUNTRIES;
}
`;

writeFileSync(outPath, body, 'utf-8');
console.log(`OK: ${outPath} (${countries.length} pays)`);
