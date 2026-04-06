# Plan d'implémentation — Mode Challenger (Étude de cas)
## Document de référence unique pour Claude Code

---

## 1. Contexte métier

### Pourquoi cet outil

Orange Business propose de la connectivité cloud privée (Cloud Connect) avec un SLA contractuel 99,99% et un double circuit natif. Les concurrents Megaport et Equinix proposent les mêmes briques de service (Port, VXC/VC, MCR/FCR) mais en mode DIY : le client assemble lui-même, sans SLA contractuel fort, mais souvent moins cher sur le catalogue brut.

L'outil "Challenger" permet aux équipes commerciales et marketing de comparer les coûts réels sur des cas concrets, en tenant compte de la résilience, du contexte client (déjà sur le réseau OB ou greenfield), et de la topologie.

### Acteurs comparés

**Orange Business** : Cloud Connect (CC) + VNE (Virtual Network Edge, héberge SD-WAN / IPsec) + Internet (composante VNE) + VPNaaS (chaînage entre PoPs OB pour clients MPLS existants).

**Megaport** : Port (accès physique au fabric) + VXC (Virtual Cross Connect vers CSP) + MCR (Megaport Cloud Router, routing multi-cloud). Modèle à l'heure ou à l'engagement, pas de SLA contractuel fort.

**Equinix** : Port (équivalent Megaport Port) + VC fabric_cloud_sp (équivalent VXC) + FCR Cloud Router (équivalent MCR). Devises variables selon le metro (EUR, GBP, HKD, AUD, SGD, JPY, BRL…).

### Différences structurelles importantes

- OB inclut toujours la HA (double circuit, 2 localisations) — c'est le standard, pas une option.
- En contexte greenfield (pas de réseau OB existant), OB nécessite un VNE + Internet pour faire atterrir le client sur la plateforme. Il n'y a pas d'autre option à date.
- En contexte MPLS existant, le client est déjà sur la plateforme OB. Le Port Megaport/Equinix n'a pas d'équivalent chez OB — il est absorbé dans le Business VPN. OB facture un VPNaaS pour le chaînage inter-PoPs (Local = 0€, Regional et Global ont des prix réels).
- 1 CC OB est fonctionnellement équivalent à MCR + 2×VXC côté Megaport : la CC inclut déjà le routing et la résilience cloud.
- Le MCR Megaport est facturé sur le **throughput total bidirectionnel** : 2 VXCs à 1G = 2G de throughput → MCR minimum = 5G (premier palier ≥ 2G).
- Equinix : pas de terme 24 mois sur les VC fabric_cloud_sp dans le dataset actuel (seulement term=1 et term=12).

---

## 2. Ce qui existe dans le repo (`jcvib/tco-calculator`)

| Fichier | Rôle | Instruction |
|---|---|---|
| `src/App.jsx` | Shell principal, chargement données, routing | Modifier minimalement |
| `src/components/ViewSelector.jsx` | Navigation entre vues | Ajouter 1 onglet |
| `src/components/Heatmap.jsx` | Heatmap OB vs AWS/Azure (egress) | Ne pas toucher |
| `src/components/MegaportHeatmap.jsx` | Heatmap OB vs Megaport Port+VXC | Ne pas toucher |
| `src/components/Controls.jsx` | Filtres heatmaps existantes | Ne pas toucher |
| `src/utils/calculations.js` | Calculs heatmap existante | Ne pas toucher |
| `src/data/megaport_pricing.js` | Ancien pricing Megaport (heatmap) | Garder — nouveau fichier séparé |
| `src/data/ob_pricing_jan2026.js` | Ancien pricing OB (heatmap) | Garder — nouveau fichier séparé |

**Principe absolu : ne pas modifier les fichiers existants**, sauf `App.jsx` (ajout d'une branche viewMode) et `ViewSelector.jsx` (ajout d'un onglet). Toute la nouvelle logique va dans de nouveaux fichiers.

---

## 3. Architecture d'ensemble

```
src/
  data/
    ob_pricing_mar2026.js         OB Cloud Connect — prix par pays/bandwidth
    vne_pricing_mar2026.js        VNE hosting + internet — prix par pays/config/term
    vpnaas_pricing_mar2026.js     VPNaaS OB — prix par pays/footprint/ville/bandwidth
    megaport_pricing_mar2026.js   Port + MCR + VXC — prix par PoP/speed/term
    equinix_pricing_mar2026.js    Port + FCR + VC — prix par metro/bandwidth/term
    geoMappings.js                Pays → PoP Megaport + metro Equinix + taux de change
    useCases.json                 ← CLEF : définit tous les use cases et leurs stacks

  engine/
    currencyUtils.js              Conversion multi-devises (EUR/GBP/HKD/AUD/SGD/JPY/BRL → USD ou EUR)
    stackComposer.js              Lit useCases.json et calcule les quantités de briques
    pricingEngine.js              Calcule les coûts à partir des quantités et des prix
    narrativeGenerator.js         Génère le texte argumentaire automatique

  components/
    Challenger/
      ChallengerView.jsx          Composant racine du mode Challenger
      ChallengerForm.jsx          Formulaire de paramétrage
      ChallengerResult.jsx        Affichage comparatif 3 acteurs × 3 niveaux
      BrickBreakdown.jsx          Accordéon détail briques
```

---

## 4. Système de configuration des use cases — `src/data/useCases.json`

### Pourquoi un fichier de configuration

Les use cases (topologies) évoluent régulièrement. Plutôt que d'avoir la logique de composition des stacks hardcodée dans du code React, elle est externalisée dans `useCases.json`. **Ajouter ou modifier un use case ne nécessite aucune modification de code frontend** — uniquement éditer le JSON.

### Structure du fichier

```json
[
  {
    "id": "A",
    "label": "On-ramp simple",
    "description": "1 CSP · 1 région · 1 DC",
    "icon": "arrow-right",
    "params": ["country", "csps", "bandwidth", "term", "context", "vpnaas_footprint"],
    "constraints": { "max_csps": 1, "fixed_dcs": 1 },
    "stacks": {
      "ob_greenfield": {
        "bot": { "cc": 1, "vne": 1, "internet": 1 },
        "mid": { "cc": 1, "vne": 2, "internet": 1 },
        "a2a": { "cc": 2, "vne": 2, "internet": 1 }
      },
      "ob_mpls": {
        "bot": { "cc": 1, "vpnaas": 1 },
        "mid": { "cc": 1, "vpnaas": 1 },
        "a2a": { "cc": 2, "vpnaas": 1 }
      },
      "megaport": {
        "bot": { "port": 1, "mcr": 1, "vxc": "n_csps*2" },
        "mid": { "port": 2, "mcr": 1, "vxc": "n_csps*2" },
        "a2a": { "port": 2, "mcr": 2, "vxc": "n_csps*4" }
      },
      "equinix": {
        "bot": { "port": 1, "fcr": 1, "vc": "n_csps*2" },
        "mid": { "port": 2, "fcr": 1, "vc": "n_csps*2" },
        "a2a": { "port": 2, "fcr": 2, "vc": "n_csps*4" }
      }
    }
  },
  {
    "id": "C",
    "label": "Multi-cloud",
    "description": "N CSPs · 1 DC",
    "icon": "cloud",
    "params": ["country", "csps", "bandwidth", "term", "context", "vpnaas_footprint"],
    "constraints": { "min_csps": 2, "fixed_dcs": 1 },
    "stacks": {
      "ob_greenfield": {
        "bot": { "cc": "n_csps", "vne": 1, "internet": 1 },
        "mid": { "cc": "n_csps", "vne": 2, "internet": 1 },
        "a2a": { "cc": "n_csps", "vne": 2, "internet": 1 }
      },
      "ob_mpls": {
        "bot": { "cc": "n_csps", "vpnaas": 1 },
        "mid": { "cc": "n_csps", "vpnaas": 1 },
        "a2a": { "cc": "n_csps", "vpnaas": 1 }
      },
      "megaport": {
        "bot": { "port": 1, "mcr": 0, "vxc": "n_csps" },
        "mid": { "port": 1, "mcr": 1, "vxc": "n_csps*2" },
        "a2a": { "port": 2, "mcr": 1, "vxc": "n_csps*2" }
      },
      "equinix": {
        "bot": { "port": 1, "fcr": 0, "vc": "n_csps" },
        "mid": { "port": 1, "fcr": 1, "vc": "n_csps*2" },
        "a2a": { "port": 2, "fcr": 1, "vc": "n_csps*2" }
      }
    }
  },
  {
    "id": "E",
    "label": "Multi-site multi-cloud",
    "description": "N CSPs · N DCs",
    "icon": "network",
    "params": ["country", "csps", "m_dcs", "bandwidth", "term", "context", "vpnaas_footprint"],
    "constraints": { "min_csps": 1, "min_dcs": 2 },
    "stacks": {
      "ob_greenfield": {
        "bot": { "cc": "n_csps*m_dcs", "vne": "m_dcs", "internet": 1 },
        "mid": { "cc": "n_csps*m_dcs", "vne": "m_dcs*2", "internet": 1 },
        "a2a": { "cc": "n_csps*m_dcs", "vne": "m_dcs*2", "internet": 1 }
      },
      "ob_mpls": {
        "bot": { "cc": "n_csps*m_dcs", "vpnaas": 1 },
        "mid": { "cc": "n_csps*m_dcs", "vpnaas": 1 },
        "a2a": { "cc": "n_csps*m_dcs", "vpnaas": 1 }
      },
      "megaport": {
        "bot": { "port": "m_dcs",   "mcr": 0,         "vxc": "n_csps*m_dcs" },
        "mid": { "port": "m_dcs*2", "mcr": "m_dcs",   "vxc": "n_csps*m_dcs*2" },
        "a2a": { "port": "m_dcs*2", "mcr": "m_dcs*2", "vxc": "n_csps*m_dcs*2" }
      },
      "equinix": {
        "bot": { "port": "m_dcs",   "fcr": 0,         "vc": "n_csps*m_dcs" },
        "mid": { "port": "m_dcs*2", "fcr": "m_dcs",   "vc": "n_csps*m_dcs*2" },
        "a2a": { "port": "m_dcs*2", "fcr": "m_dcs*2", "vc": "n_csps*m_dcs*2" }
      }
    }
  },
  {
    "id": "F",
    "label": "Cloud-to-cloud",
    "description": "Connectivité privée entre CSPs",
    "icon": "arrows-exchange",
    "params": ["country", "csps", "bandwidth", "term", "context", "vpnaas_footprint"],
    "constraints": { "fixed_csps": 2, "fixed_dcs": 1 },
    "notes": {
      "ob": "2 CC (un par CSP) + VPNaaS pour chaîner les connexions. La résilience est incluse dans le standard OB.",
      "megaport_bot": "2×2 VXCs directs sans MCR — routing client-side requis.",
      "megaport_mid": "MCR assure le routage entre les deux clouds.",
      "megaport_a2a": "MCR HA (2 instances sur 2 PoPs) pour résilience géographique."
    },
    "stacks": {
      "ob_greenfield": {
        "bot": { "cc": 2, "vne": 1, "internet": 1 },
        "mid": { "cc": 2, "vne": 1, "internet": 1 },
        "a2a": { "cc": 2, "vne": 2, "internet": 1 }
      },
      "ob_mpls": {
        "bot": { "cc": 2, "vpnaas": 1 },
        "mid": { "cc": 2, "vpnaas": 1 },
        "a2a": { "cc": 2, "vpnaas": 1 }
      },
      "megaport": {
        "bot": { "port": 1, "mcr": 0, "vxc": 4 },
        "mid": { "port": 1, "mcr": 1, "vxc": 4 },
        "a2a": { "port": 2, "mcr": 2, "vxc": 4 }
      },
      "equinix": {
        "bot": { "port": 1, "fcr": 0, "vc": 4 },
        "mid": { "port": 1, "fcr": 1, "vc": 4 },
        "a2a": { "port": 2, "fcr": 2, "vc": 4 }
      }
    }
  }
]
```

### Règle globale appliquée en dehors du JSON

**Exclusion du Port en contexte MPLS :** quelle que soit la valeur de `port` dans le JSON, si `context === 'mpls'`, le port est mis à 0. Cette règle est implémentée dans `stackComposer.js` après évaluation du blueprint JSON — elle n'est pas dans le JSON car elle est transversale à tous les use cases.

### Expressions dans le JSON

Les valeurs de brique peuvent être :
- Un entier littéral : `1`, `2`, `4`
- Une expression string simple : `"n_csps*2"`, `"m_dcs*2"`, `"n_csps*m_dcs*2"`

L'évaluateur accepte uniquement : chiffres, `n_csps`, `m_dcs`, `+`, `*`, `(`, `)`. Toute autre syntaxe est rejetée.

### Comment ajouter un use case

1. Ajouter un objet dans `useCases.json` avec son `id`, `label`, `description`, et ses `stacks`
2. Aucune modification de code frontend nécessaire
3. Le use case apparaît automatiquement dans le formulaire

---

## 5. Nouveaux fichiers de données

### 5.1 `src/data/ob_pricing_mar2026.js`

Source : `ob_pricing_mar2026.js` fourni — ajouter `export const` devant `OB_PRICING`.

```
OB_PRICING[country][architecture][geo_type][bandwidth]
  → { bandwidth_mbps, hourly_rate_usd, reserved_bw_fee_usd, monthly_cost_744h }
```

- 15 pays, 1 architecture (`"High Availability"` — toujours), 3 types géo (`"Local"`, `"Regional"`, `"Inter - Regional"`)
- **MVP : utiliser uniquement `"Local"`**
- 12 bandwidths : 10M, 20M, 50M, 100M, 200M, 300M, 400M, 500M, 1G, 2G, 5G, 10G
- **Utiliser directement `monthly_cost_744h`** — ne pas recalculer

### 5.2 `src/data/vne_pricing_mar2026.js`

Source : `vne_pricing_mar2026.js` fourni — ajouter `export const` devant `VNE_PRICING`.

```
VNE_PRICING.hosting[country][config][term]   → prix mensuel USD
VNE_PRICING.internet[country][bw][term]      → prix mensuel USD
VNE_PRICING.ip_address                       → { proposed_per_unit: 1, list_price_row: 6 }
```

- Terms VNE : **strings** `"1 month"`, `"12 months"`, `"24 months"`, `"36 months"`
- Config VNE par défaut : `"2vCPU_4GB_64GB"`
- 24 pays (hosting), 26 pays (internet)

### 5.3 `src/data/vpnaas_pricing_mar2026.js`

Source : `vpnaas_pricing_mar2026.js` fourni — ajouter `export const` devant `VPNAAS_PRICING`.

```
VPNAAS_PRICING[country][footprint][city][bandwidth]
  → { bandwidth_mbps, hourly_rate_usd, monthly_cost_744h, vpn_region, iso_code }
```

- 27 pays, 3 footprints : `"Local"` (toujours 0€), `"Regional"`, `"Global"`
- **Local = 0€ systématiquement** — inclus dans le service OB
- 12 bandwidths identiques à OB CC
- **Utiliser directement `monthly_cost_744h`**
- Exemple France 500M : Local=0, Regional=359$, Global=1137$

### 5.4 `src/data/megaport_pricing_mar2026.js`

Source : `megaport_pricing_20260403_092143.json` — convertir en `export const MEGAPORT_PRICING = ...`

```
MEGAPORT_PRICING.pricing[country][loc_id]
  → loc_name, metro
  → port[speed_string][term_int]   → { monthlyRate, monthlyRackRate, currency }
  → mcr[speed_string][term_int]    → { monthlyRate, monthlyRackRate, currency }
  → vxc_aws[speed_string].terms[term_int]  → { monthlyRate }
  → vxc_azure[speed_string].terms[term_int] → { monthlyRate }
  → mve[...]   hors scope MVP
```

- **Terms Megaport : entiers** `1`, `12`, `24`, `36` (pas des strings)
- **Speeds : strings** `"500"`, `"1000"` — utiliser `String(speed)` pour le lookup
- Pays disponibles : Australia, Brazil, Canada, France, Germany, UK, Netherlands, Ireland, Japan, Singapore, Hong Kong, USA (12 pays)
- MCR speeds disponibles : [1000, 5000, 10000] pour la plupart, plus larges pour DE/NL/IE/USA/AU

### 5.5 `src/data/equinix_pricing_mar2026.js`

Source : `equinix_pricing_20260403_122914.json` — convertir en `export const EQUINIX_PRICING = ...`

```
EQUINIX_PRICING.services.ports.data[]
  → { metro, ibx, bandwidth, monthly_price, nrc_price, currency, port_type }
  Bandwidths : 1000, 10000, 100000 Mbps | 26 metros | devises mixtes

EQUINIX_PRICING.services.fabric_cloud_sp.data[]
  → { metro, bandwidth, term, price, currency, type: "cloud_sp" }
  Bandwidths : 50 à 100000 Mbps | 10 metros actuellement | term=1 et 12 seulement

EQUINIX_PRICING.services.cloud_router.data[]
  → { metro, package, term, price, currency }
  Packages : BASIC, STANDARD, ADVANCED | 26 metros | term=1,12,24,36

EQUINIX_PRICING.services.fabric_connections.data[]
  → { metro_a, metro_z, bandwidth, term, price, currency, type: "inter_metro" }
  Hors scope MVP
```

- **Devises mixtes** : EUR pour PA/FR/AM/DB/MD/MU, GBP pour LD, HKD pour HK, AUD pour SY/ME/PE, SGD pour SG, JPY pour TY, BRL pour SP, ZAR pour JN, USD pour metros US
- Toujours appliquer `toDisplay(price, entry.currency)` — ne jamais supposer EUR

### 5.6 `src/data/geoMappings.js`

À créer entièrement :

```js
// Pays → PoP Megaport principal
// ⚠️ Renseigner les loc_id depuis megaport_pricing_mar2026.js
// Règle : premier PoP ayant port + vxc_aws + vxc_azure + mcr tous disponibles
export const COUNTRY_TO_MEGAPORT = {
  'France':         { country_key: 'France',         metro: 'Paris',      loc_id: '515' },
  'Germany':        { country_key: 'Germany',        metro: 'Frankfurt',  loc_id: null },
  'United Kingdom': { country_key: 'United Kingdom', metro: 'London',     loc_id: null },
  'Netherlands':    { country_key: 'Netherlands',    metro: 'Amsterdam',  loc_id: null },
  'Ireland':        { country_key: 'Ireland',        metro: 'Dublin',     loc_id: null },
  'Singapore':      { country_key: 'Singapore',      metro: 'Singapore',  loc_id: null },
  'Hong Kong':      { country_key: 'Hong Kong',      metro: 'Hong Kong',  loc_id: null },
  'Japan':          { country_key: 'Japan',          metro: 'Tokyo',      loc_id: null },
  'Australia':      { country_key: 'Australia',      metro: 'Sydney',     loc_id: null },
  'Brazil':         { country_key: 'Brazil',         metro: 'São Paulo',  loc_id: null },
  'United States':  { country_key: 'USA',            metro: 'Ashburn',    loc_id: null },
  'Canada':         { country_key: 'Canada',         metro: 'Toronto',    loc_id: null },
  // UAE, South Africa, India : Megaport non disponible
}

// Pays → Metro Equinix (code 2 lettres)
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

// Pays disponibles dans le formulaire Challenger
export const CHALLENGER_COUNTRIES = [
  'France', 'Germany', 'United Kingdom', 'Netherlands', 'Ireland',
  'Singapore', 'Hong Kong', 'Japan', 'Australia', 'Brazil', 'United States',
  'Canada', 'United Arab Emirates', 'South Africa', 'India'
]

// Bandwidths de comparaison (intersection des 3 acteurs, en Mbps)
export const CHALLENGER_BANDWIDTHS = [50, 100, 200, 500, 1000, 2000, 5000, 10000]

// Config VNE par défaut
export const DEFAULT_VNE_CONFIG = '2vCPU_4GB_64GB'

// ─── Multi-devises ────────────────────────────────────────────────────────────

// Taux de change vers USD — date de référence : avril 2026
export const FX_RATES_TO_USD = {
  'USD': 1.0,
  'EUR': 1.08,
  'GBP': 1.27,
  'HKD': 0.128,
  'AUD': 0.63,
  'SGD': 0.74,
  'JPY': 0.0067,
  'BRL': 0.175,
  'ZAR': 0.054,
  'SEK': 0.093,
}
```

---

## 6. Moteur de calcul

### 6.1 `src/engine/currencyUtils.js`

```js
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
```

### 6.2 `src/engine/stackComposer.js`

```js
import USE_CASES from '../data/useCases.json'

/**
 * Compose le stack pour un acteur donné en lisant useCases.json
 * @param {QueryParams} params - { usecase_id, context, resilience, n_csps, m_dcs }
 * @param {'ob'|'megaport'|'equinix'} actor
 * @returns {StackQuantities}
 */
export function composeStack(params, actor) {
  const { usecase_id, context, resilience, n_csps = 1, m_dcs = 1 } = params

  const usecase = USE_CASES.find(uc => uc.id === usecase_id)
  if (!usecase) throw new Error(`Use case inconnu : ${usecase_id}`)

  // Sélection de la clé du stack selon acteur et contexte
  const actorKey = actor === 'ob'
    ? (context === 'greenfield' ? 'ob_greenfield' : 'ob_mpls')
    : actor

  const blueprint = usecase.stacks[actorKey]?.[resilience]
  if (!blueprint) return {}

  // Évaluation des expressions du blueprint
  const vars = { n_csps, m_dcs }
  const stack = evaluateBlueprint(blueprint, vars)

  // Règle globale : Port = 0 en contexte MPLS existant
  if (context === 'mpls' && stack.port != null) {
    stack.port = 0
  }

  return stack
}

function evaluateBlueprint(blueprint, vars) {
  const result = {}
  for (const [key, value] of Object.entries(blueprint)) {
    if (typeof value === 'number') {
      result[key] = value
    } else if (typeof value === 'string') {
      result[key] = safeEval(value, vars)
    }
  }
  return result
}

function safeEval(expr, { n_csps, m_dcs }) {
  const substituted = expr
    .replace(/n_csps/g, String(n_csps))
    .replace(/m_dcs/g, String(m_dcs))

  // N'autoriser que les caractères sûrs
  if (!/^[\d\s\+\-\*\/\(\)]+$/.test(substituted)) {
    throw new Error(`Expression non autorisée : ${expr}`)
  }

  try {
    return Math.max(0, Math.round(Function('"use strict"; return (' + substituted + ')')()))
  } catch {
    throw new Error(`Erreur d'évaluation : ${expr}`)
  }
}

/**
 * Retourne tous les use cases disponibles (pour le formulaire)
 */
export function getUseCases() {
  return USE_CASES.map(uc => ({
    id: uc.id,
    label: uc.label,
    description: uc.description,
    icon: uc.icon,
    constraints: uc.constraints ?? {},
    params: uc.params ?? [],
  }))
}
```

### 6.3 `src/engine/pricingEngine.js`

```js
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
  return {
    bot: computeLevel({ ...params, resilience: 'bot' }),
    mid: computeLevel({ ...params, resilience: 'mid' }),
    a2a: computeLevel({ ...params, resilience: 'a2a' }),
  }
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

  // CC
  const bwKey = nearestOBBandwidth(bandwidth_mbps)
  const ccData = OB_PRICING[country]?.['High Availability']?.['Local']?.[bwKey]
  if (!ccData) {
    missing.push(`OB CC: prix manquant pour ${country} / Local / ${bwKey}`)
  } else {
    const unit = ccData.monthly_cost_744h
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

    const hostingUnit  = VNE_PRICING.hosting?.[country]?.[config]?.[termKey]
    const internetUnit = VNE_PRICING.internet?.[country]?.[inetBW]?.[termKey]

    if (!hostingUnit)  missing.push(`VNE hosting: manquant pour ${country} / ${config}`)
    if (!internetUnit) missing.push(`VNE internet: manquant pour ${country} / ${inetBW}`)

    if (hostingUnit && internetUnit) {
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
          const unit = vpnData.monthly_cost_744h
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
    const vxcQty   = stack.vxc ?? 0
    const mcrSize  = calcMCRSize(bw, vxcQty, country)
    const unit     = locData.mcr?.[String(mcrSize)]?.[term]?.monthlyRate
    const throughput = bw * vxcQty

    if (!unit) {
      // Fallback palier supérieur
      const paliers   = getMCRPaliers(country)
      const nextSize  = paliers.find(p => p > mcrSize)
      const unitNext  = nextSize ? locData.mcr?.[String(nextSize)]?.[term]?.monthlyRate : null
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
      const key  = csp === 'aws' ? 'vxc_aws' : 'vxc_azure'
      const unit = locData[key]?.[String(bw)]?.terms?.[term]?.monthlyRate
      if (!unit) {
        missing.push(`VXC→${csp.toUpperCase()} ${bw}M: manquant pour ${locInfo.metro} / ${term}m`)
      } else {
        const unitD = toDisplay(unit, 'USD')
        breakdown.push({ label: `${vxcPerCSP}× VXC→${csp.toUpperCase()} ${bw}M`, unit: unitD, qty: vxcPerCSP, total: unitD * vxcPerCSP })
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
    const vcQty     = stack.vc ?? 0
    const throughput = bw * vcQty
    const pkg       = getFCRPackage(throughput)
    const fcrEntry  = EQUINIX_PRICING.services.cloud_router?.data
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
  const vcQty = stack.vc ?? 0
  if (vcQty > 0) {
    const vcEntry = EQUINIX_PRICING.services.fabric_cloud_sp?.data
      ?.find(r => r.metro === metro && r.bandwidth === bw && r.term === term)
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
  const BWS    = [10, 20, 50, 100, 200, 300, 400, 500, 1000, 2000, 5000, 10000]
  const match  = BWS.find(b => b >= mbps) ?? BWS[BWS.length - 1]
  return { 1000:'1G', 2000:'2G', 5000:'5G', 10000:'10G' }[match] ?? `${match}M`
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
  return { 1000:'1G', 2000:'2G', 5000:'5G', 10000:'10G' }[match] ?? `${match}M`
}

export function termLabel(months) {
  return months === 1 ? '1 month' : `${months} months`
}

/**
 * Taille MCR = premier palier ≥ throughput total (n_vxcs × bandwidth)
 * Exemple : 4 VXCs × 500M = 2000M throughput → palier MCR = 5000M
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
    'Germany': HIGH, 'Netherlands': HIGH, 'Ireland': HIGH,
    'USA': HIGH, 'United States': HIGH,
    'Australia': MED,
    'Hong Kong': HK,
  }
  return map[country] ?? STD
}

function getFCRPackage(throughput_mbps) {
  if (throughput_mbps <= 2000)  return 'BASIC'
  if (throughput_mbps <= 10000) return 'STANDARD'
  return 'ADVANCED'
}

function findMegaportLoc(locInfo) {
  const countryData = MEGAPORT_PRICING.pricing?.[locInfo.country_key]
  if (!countryData) return null
  if (locInfo.loc_id && countryData[locInfo.loc_id]) return countryData[locInfo.loc_id]
  return Object.values(countryData)[0] ?? null
}
```

### 6.4 `src/engine/narrativeGenerator.js`

```js
import { formatCurrency } from './currencyUtils.js'

export function generateNarrative(allLevels, params) {
  const { resilience = 'mid' } = params
  const lines   = []
  const current = allLevels[resilience]
  const ob      = current?.ob
  const bestDIY = getBestDIY(current)

  if (ob?.total && bestDIY?.total) {
    const delta    = ((ob.total - bestDIY.total) / bestDIY.total * 100)
    const absDelta = Math.abs(delta).toFixed(0)
    const dir      = delta > 0 ? 'plus cher' : 'moins cher'
    lines.push(`En configuration ${resilienceLabel(resilience)}, OB est ${absDelta}% ${dir} que ${bestDIY.name} (${formatCurrency(ob.total)} vs ${formatCurrency(bestDIY.total)}/mois).`)
  }

  const a2aOB  = allLevels.a2a?.ob?.total
  const a2aDIY = getBestDIY(allLevels.a2a)?.total
  if (a2aOB && a2aDIY && resilience !== 'a2a') {
    const d = ((a2aOB - a2aDIY) / a2aDIY * 100).toFixed(0)
    lines.push(`En apple-to-apple (résilience équivalente OB), l'écart est de ${Math.abs(d)}% ${+d > 0 ? 'en faveur du DIY' : 'en faveur d\'OB'}.`)
  }

  lines.push(`OB inclut un SLA contractuel 99,99% avec double circuit natif, non garanti par les solutions fabric DIY.`)

  const allMissing = [...(current?.megaport?.missing ?? []), ...(current?.equinix?.missing ?? [])]
  if (allMissing.length) lines.push(`⚠️ Comparatif partiel — ${allMissing.length} composant(s) sans données.`)

  return lines.join(' ')
}

function resilienceLabel(r) {
  return { bot: 'bottom-line', mid: 'intermédiaire', a2a: 'apple-to-apple' }[r] ?? r
}

function getBestDIY({ megaport, equinix } = {}) {
  if (!megaport?.total && !equinix?.total) return { total: null, name: '?' }
  if (!megaport?.total) return { ...equinix, name: 'Equinix' }
  if (!equinix?.total)  return { ...megaport, name: 'Megaport' }
  return megaport.total <= equinix.total
    ? { ...megaport, name: 'Megaport' }
    : { ...equinix, name: 'Equinix' }
}
```

---

## 7. Composants UI

### Arborescence
```
src/components/Challenger/
  ChallengerView.jsx      ← composant racine, orchestre formulaire et résultats
  ChallengerForm.jsx      ← formulaire paramétrage (lit useCases.json via getUseCases())
  ChallengerResult.jsx    ← tableau comparatif 3 acteurs × 3 niveaux
  BrickBreakdown.jsx      ← accordéon détail briques (réutilisable par acteur)
```

### `ChallengerView.jsx`

```jsx
import { useState } from 'react'
import ChallengerForm from './ChallengerForm'
import ChallengerResult from './ChallengerResult'
import { computeAllLevels } from '../../engine/pricingEngine'
import { generateNarrative } from '../../engine/narrativeGenerator'

export default function ChallengerView() {
  const [params, setParams]   = useState(null)
  const [results, setResults] = useState(null)

  function handleCalculate(formParams) {
    const allLevels = computeAllLevels(formParams)
    const narrative = generateNarrative(allLevels, { ...formParams, resilience: 'mid' })
    setParams(formParams)
    setResults({ allLevels, narrative })
  }

  return (
    <div className="space-y-6">
      <ChallengerForm onCalculate={handleCalculate} />
      {results && (
        <ChallengerResult
          results={results}
          params={params}
          onReset={() => { setParams(null); setResults(null) }}
        />
      )}
    </div>
  )
}
```

### `ChallengerForm.jsx` — champs du formulaire

| Section | Champ | Type | Valeurs | Défaut |
|---|---|---|---|---|
| **1 — Contexte** | `context` | Toggle | `mpls` / `greenfield` | `mpls` |
| | `country` | Select | `CHALLENGER_COUNTRIES` | `France` |
| | `vpnaas_footprint` | Segmented (si mpls) | `Local` / `Regional` / `Global` | `Local` |
| **2 — Topologie** | `usecase_id` | Radio cards | depuis `getUseCases()` | `A` |
| | `csps` | Checkboxes | `aws` / `azure` | `['aws']` |
| | `m_dcs` | Slider (si Cas E) | `2..5` | `2` |
| **3 — Réseau** | `bandwidth_mbps` | Slider | `CHALLENGER_BANDWIDTHS` | `500` |
| | `term_months` | Segmented | `1 / 12 / 24 / 36` | `12` |
| | `vne_config` | Select (avancé) | configs VNE | `2vCPU_4GB_64GB` |

`n_csps` = `csps.length` (calculé automatiquement, non exposé).
`vne_internet_bw` = calculé via `nearestVNEInternetBW(bandwidth_mbps)`, non exposé.

Les contraintes du use case (`constraints`) pilotent la visibilité des champs : si `fixed_csps: 2`, les checkboxes CSP sont verrouillées sur AWS+Azure ; si `fixed_dcs: 1`, le slider DC est masqué.

### `ChallengerResult.jsx` — layout

```
┌────────────────────────────────────────────────────────────────────┐
│  Devise : [USD $] [EUR €]         [Bot] [Intermédiaire ●] [A2A]    │
├──────────────────┬──────────────────┬──────────────────────────────┤
│  Orange Business │  Megaport        │  Equinix                     │
│  XXXX $/mois     │  XXXX $/mois     │  XXXX $/mois                 │
│  [Détail ▾]      │  [Détail ▾]      │  [Détail ▾]                  │
├──────────────────┴──────────────────┴──────────────────────────────┤
│  Megaport X% moins cher | Equinix Y% moins cher                    │
│  Narratif automatique...                                           │
│                                                 [Copier] [Recalc]  │
└────────────────────────────────────────────────────────────────────┘
```

- Le toggle devise appelle `setDisplayCurrency()` et déclenche un re-render.
- Le toggle bottom/mid/a2a change les chiffres affichés (les 3 niveaux sont déjà calculés).
- `[Détail ▾]` ouvre `BrickBreakdown` avec la liste des briques.

### `BrickBreakdown.jsx`

Accordéon affichant pour chaque brique : label, quantité, prix unitaire, total. Les entrées `missing` s'affichent en rouge avec une icône ⚠️. Les `notes` s'affichent en gris italique.

---

## 8. Intégration dans l'app existante

### `src/components/ViewSelector.jsx`
```jsx
// Ajouter uniquement ce troisième élément
{ id: 'challenger', label: 'Étude de cas' }
```

### `src/App.jsx`
```jsx
import ChallengerView from './components/Challenger/ChallengerView'

// Ajouter après la branche 'megaport' existante :
{viewMode === 'challenger' && <ChallengerView />}
```

Les données du Challenger (ob_mar2026, vne, vpnaas, megaport_mar2026, equinix_mar2026) sont importées comme modules ES directement dans `pricingEngine.js`. **Pas de modification du système `window.*` existant.**

---

## 9. Ordre d'implémentation

**Étape 1 — Données**
1. Copier les 5 fichiers pricing dans `src/data/`, ajouter `export const` devant chaque variable principale
2. Créer `src/data/geoMappings.js`
3. Créer `src/data/useCases.json` avec les 4 use cases (A, C, E, F)
4. **Renseigner les `loc_id` Megaport** dans `geoMappings.js` : ouvrir `megaport_pricing_mar2026.js`, pour chaque pays trouver le loc_id d'un PoP ayant `port`, `vxc_aws`, `vxc_azure` et `mcr` tous présents

**Étape 2 — Engine**
1. `src/engine/currencyUtils.js`
2. `src/engine/stackComposer.js`
3. `src/engine/pricingEngine.js`
4. `src/engine/narrativeGenerator.js`
5. **Valider sur les cas de test §10 avant de continuer**

**Étape 3 — UI**
1. `ChallengerForm.jsx`
2. `BrickBreakdown.jsx`
3. `ChallengerResult.jsx`
4. `ChallengerView.jsx`

**Étape 4 — Intégration**
1. `ViewSelector.jsx` (+ 1 onglet)
2. `App.jsx` (+ 1 branche)

---

## 10. Cas de test de référence

### Test 1 — Cas A / France / Greenfield / AWS / 500M / 12 mois / Bottom-line

**Stack attendu :**
- OB : `{ cc:1, vne:1, internet:1 }` → desde blueprint Cas A bot ob_greenfield
- Megaport : `{ port:1, mcr:1, vxc:2 }` → 2 VXCs (n_csps=1, 1×2=2)
- Equinix : `{ port:1, fcr:1, vc:2 }`

**MCR sizing :** 2 VXCs × 500M = 1000M throughput → palier MCR France [1000, 5000, 10000] → **MCR 1000M** ✓

**Prix OB :**
```
CC  = OB_PRICING['France']['High Availability']['Local']['500M'].monthly_cost_744h
VNE = VNE_PRICING.hosting['France']['2vCPU_4GB_64GB']['12 months']
    + VNE_PRICING.internet['France']['500M']['12 months']
```

**Prix Megaport :**
```
Port  = locData.port['500'][12].monthlyRate                    → toDisplay(_, 'USD')
MCR   = locData.mcr['1000'][12].monthlyRate                    → toDisplay(_, 'USD')
VXC×2 = locData.vxc_aws['500'].terms[12].monthlyRate × 2      → toDisplay(_, 'USD')
```

**Prix Equinix :**
```
Port  = ports.data.find(metro='PA', bandwidth=1000).monthly_price  → toDisplay(_, 'EUR')
FCR   = cloud_router.data.find(metro='PA', package='BASIC', term=12).price → toDisplay(_, 'EUR')
VC×2  = fabric_cloud_sp.data.find(metro='PA', bandwidth=500, term=12).price × 2 → toDisplay(_, 'EUR')
```

---

### Test 2 — Cas A / France / MPLS / AWS / 500M / Local / 12 mois / Bottom-line

**Stack attendu :**
- OB : `{ cc:1, vpnaas:1 }` (port exclu, VPNaaS Local = 0€)
- Megaport : `{ port:0, mcr:1, vxc:2 }` (port=0 car règle MPLS)
- Equinix : `{ port:0, fcr:1, vc:2 }`

**VPNaaS :** 0€ — ligne visible dans le breakdown avec note "0€ intra-pays"

---

### Test 3 — Cas C / France / MPLS / AWS+Azure / 1G / Regional / 12 mois / Intermédiaire

**Stack attendu :**
- OB : `{ cc:2, vpnaas:1 }` (n_csps=2, cc="n_csps"=2)
- OB VPNaaS Regional = VPNAAS_PRICING['France']['Regional']['Aubervilliers']['1G'].monthly_cost_744h
- Megaport : `{ port:0, mcr:1, vxc:4 }` (n_csps=2, "n_csps*2"=4 ; port=0 MPLS)
- Equinix : `{ port:0, fcr:1, vc:4 }`

**MCR sizing :** 4 VXCs × 1000M = 4000M → MCR France palier → **MCR 5000M** ✓

**FCR package :** 4 VCs × 1000M = 4000M throughput → `getFCRPackage(4000)` → **STANDARD** (>2G, ≤10G)

---

### Test 4 — Cas F / France / MPLS / AWS+Azure / 500M / Regional / 12 mois / Intermédiaire

**Stack attendu (blueprint Cas F mid) :**
- OB : `{ cc:2, vpnaas:1 }` (fixe, n_csps ignoré pour Cas F)
- Megaport : `{ port:0, mcr:1, vxc:4 }` (port=0 MPLS ; vxc=4 fixe dans JSON)
- Equinix : `{ port:0, fcr:1, vc:4 }`

**MCR sizing :** 4 VXCs × 500M = 2000M → palier MCR France → **MCR 5000M** (5000 ≥ 2000) ✓

---

## 11. Points de vigilance

1. **Ne pas modifier** les fichiers existants sauf `App.jsx` et `ViewSelector.jsx`
2. **OB = toujours 'High Availability' / 'Local'** — ne jamais chercher une autre clé architecture ou geo_type
3. **`monthly_cost_744h`** — utiliser directement pour OB CC et VPNaaS, ne pas recalculer depuis hourly_rate
4. **Megaport terms : entiers** `1`, `12`, `24`, `36` — pas des strings ; les speeds MCR/Port sont des strings
5. **VNE/VPNaaS terms : strings** `"1 month"`, `"12 months"` — pas des entiers
6. **Devises Equinix : mixtes** — toujours `toDisplay(price, entry.currency)`, jamais supposer EUR
7. **MCR sizing** — utiliser `calcMCRSize(bw, stack.vxc, country)`, pas une taille fixe
8. **MCR clés string** — `locData.mcr[String(mcrSize)][term]`, pas `locData.mcr[mcrSize]`
9. **Cas C/E/F bottom-line** — `mcr=0` et `fcr=0` côté DIY (exprimé dans JSON) — pas de routeur, client-side
10. **Port MPLS** — règle globale dans stackComposer après évaluation JSON, pas dans le JSON lui-même
11. **VPNaaS Local = 0€** — rendre la ligne visible dans le breakdown pour l'argument commercial
12. **VC Cloud Equinix absent** — afficher résultat partiel (Port+FCR calculé, VC en "données manquantes") sans mettre `total:null` sur tout le stack Equinix
13. **Fallback loc_id Megaport** — si `loc_id` est null dans geoMappings, `findMegaportLoc` prend le premier PoP du pays
14. **USA normalization** — OB utilise `'United States'`, Megaport utilise `'USA'` — le `country_key` dans COUNTRY_TO_MEGAPORT fait le bridge
15. **FCR package** — `getFCRPackage(throughput)` sélectionne BASIC/STANDARD/ADVANCED selon le throughput total des VCs
16. **useCases.json** — utiliser `getUseCases()` depuis stackComposer dans le formulaire pour lister les use cases dynamiquement
