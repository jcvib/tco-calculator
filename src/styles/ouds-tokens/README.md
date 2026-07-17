# Tokens OUDS (Orange Unified Design System)

Fichiers CSS de tokens copiés depuis un export "Orange Design System" (session claude.ai/design de Jean-Charles, 2026-07-17), lui-même construit à partir du kit open-source d'Orange **OUDS Web** (Orange-Boosted-Bootstrap, fork de Bootstrap 5) :
- Repo source : https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap
- Docs publiques : https://web.unified-design-system.orange.com

Ce sont de **vrais tokens OUDS** (pas une approximation) — à distinguer de la palette Tailwind actuelle du projet (`tailwind.config.js` : `orange`/`graphite`/`malachite`), qui elle est juste "inspirée" d'OUDS avec des valeurs hex choisies à la main.

## Contenu

| Fichier | Contenu |
|---|---|
| `colors-raw.css` | Palette brute (`--ouds-orange-*`, `--ouds-warm-gray-*`, `--ouds-scarlet-*`, `--ouds-malachite-*`, `--ouds-sun-*`, `--ouds-dodger-blue-*`, palette décorative amber/amethyst/deep-peach/emerald/pink/sky, `--ouds-black`/`--ouds-white`) |
| `colors-semantic.css` | Alias sémantiques (`--ouds-color-surface-*`, `--ouds-color-content-*`, `--ouds-color-border-*`, `--ouds-color-action-*`...) + variantes `[data-theme="dark"]` |
| `typography.css` | `--ouds-font-family` (pile de fallback Helvetica Neue — la vraie police "HelvNeueOrange" est sous licence privée Orange, non incluse), tailles/line-heights/letter-spacing display/heading/body/label |
| `spacing.css` | Échelle `--ouds-space-scaled-*` (responsive) et `--ouds-space-fixed-*` (non-responsive, pour paddings/gaps internes de composants) |
| `borders.css` | Rayons (`--ouds-radius-small/medium/large/pill`) et épaisseurs de bordure |
| `elevation.css` | 5 niveaux d'ombre (`--ouds-elevation-raised/elevated/sticky/drag/emphasized`) |
| `styles.css` | Point d'entrée qui importe les 6 fichiers ci-dessus, dans l'ordre |

## Utilisation dans ce projet

Pas de composants React/Vue fournis avec ces tokens (le bundle de composants de l'export original est lié au runtime propriétaire de l'outil de design claude.ai, non portable tel quel). Ce qui est réellement exploitable ici, ce sont les **variables CSS** — à consommer directement en `var(--ouds-xxx)` dans les styles inline ou en les référençant depuis `tailwind.config.js` (`theme.extend.colors` peut pointer vers des `var(--ouds-orange-500)` etc.).

Pour les activer : importer `src/styles/ouds-tokens/styles.css` une fois au point d'entrée de l'app (`src/main.jsx` ou `index.html`).

Voir [`docs/REDESIGN_HEATMAP.md`](../../../docs/REDESIGN_HEATMAP.md) pour le détail de leur usage prévu dans la refonte de la heatmap.

## Caveats (repris de l'export original)

- Police réelle non disponible publiquement (licence privée Orange) — fallback système Helvetica Neue déjà utilisé partout ailleurs dans ce projet, cohérent.
- Tokens de couleur copiés fidèlement depuis la source ; pas de composants (Button/Card/Badge...) vendorisés ici, seulement les tokens bruts.
