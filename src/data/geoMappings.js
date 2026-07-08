// Mappings géographiques pour le mode Challenger
// Pays → PoP Megaport principal + metro Equinix + utilitaires

// ─── Megaport ─────────────────────────────────────────────────────────────────
// Règle de sélection : premier PoP ayant port + vxc_aws + vxc_azure présents
// loc_id issus de megaport_pricing_20260401.json
// ⚠️  Hong Kong et USA absents du dataset Megaport actuel (loc_id null → fallback)

// loc_ids issus de megaport_pricing_20260403.json (v5.0)
// Règle : premier PoP ayant port + mcr + vxc_aws + vxc_azure tous présents
export const COUNTRY_TO_MEGAPORT = {
  'France':         { country_key: 'France',           metro: 'Paris',       loc_id: '515' },  // Equinix Paris PA2
  'Germany':        { country_key: 'Germany',          metro: 'Frankfurt',   loc_id: '130' },  // Digital Realty Interxion FRA13
  'United Kingdom': { country_key: 'United Kingdom',   metro: 'London',      loc_id: '90'  },  // Equinix London LD5
  'Netherlands':    { country_key: 'Netherlands',      metro: 'Amsterdam',   loc_id: '85'  },  // Equinix Amsterdam AM1
  'Ireland':        { country_key: 'Ireland',          metro: 'Dublin',      loc_id: '94'  },  // Equinix Dublin DB1
  'Singapore':      { country_key: 'Singapore',        metro: 'Singapore',   loc_id: '37'  },  // Equinix Singapore SG2
  'Hong Kong':      { country_key: 'Hong Kong',        metro: 'Hong Kong',   loc_id: '46'  },  // Equinix Hong Kong HK1
  'Japan':          { country_key: 'Japan',            metro: 'Tokyo',       loc_id: '560' },  // Equinix Tokyo TY2
  'Australia':      { country_key: 'Australia',        metro: 'Sydney',      loc_id: '2'   },  // Equinix Sydney SY1
  'Brazil':         { country_key: 'Brazil',           metro: 'São Paulo',   loc_id: '1484'},  // Equinix São Paulo SP2
  'United States':  { country_key: 'USA',              metro: 'Ashburn',     loc_id: '68'  },  // CoreSite VA1 Ashburn
  'Canada':         { country_key: 'Canada',           metro: 'Toronto',     loc_id: '79'  },  // Cologix TOR1
  // UAE, South Africa, India : Megaport non disponible
}

// ─── Equinix ──────────────────────────────────────────────────────────────────
// Code metro 2 lettres utilisé dans equinix_pricing_20260401.json

export const COUNTRY_TO_EQUINIX_METRO = {
  'France':               'PA',
  'Germany':              'FR',
  'United Kingdom':       'LD',
  'Netherlands':          'AM',
  'Ireland':              'DB',
  'Singapore':            'SG',
  'Hong Kong':            'HK',
  'Japan':                'TY',
  'Australia':            'SY',
  'Brazil':               'SP',
  'United States':        'NY',
  'Canada':               'TO',
  'United Arab Emirates': 'DX',
  'South Africa':         'JN',
  'India':                'CH',
}

// ─── Formulaire Challenger ────────────────────────────────────────────────────

// Pays disponibles dans le formulaire Challenger
// = intersection OB (15 pays) × Equinix (26 metros) avec au moins un acteur DIY disponible
export const CHALLENGER_COUNTRIES = [
  'France', 'Germany', 'United Kingdom', 'Netherlands', 'Ireland',
  'Singapore', 'Hong Kong', 'Japan', 'Australia', 'Brazil', 'United States',
  'Canada', 'United Arab Emirates', 'South Africa', 'India',
]

// Bandwidths de comparaison (Mbps)
// Intersection des 3 acteurs — OB / Megaport / Equinix
export const CHALLENGER_BANDWIDTHS = [50, 100, 200, 500, 1000, 2000, 5000, 10000]

// Config VNE par défaut (greenfield)
export const DEFAULT_VNE_CONFIG = '2vCPU_4GB_64GB'

// ─── Devises ──────────────────────────────────────────────────────────────────
// Taux de change vers USD — référence avril 2026

export const FX_RATES_TO_USD = {
  'USD': 1.0,
  'EUR': 1.18,
  'GBP': 1.27,
  'HKD': 0.128,
  'AUD': 0.63,
  'SGD': 0.74,
  'JPY': 0.0067,
  'BRL': 0.175,
  'ZAR': 0.054,
  'SEK': 0.093,
}
