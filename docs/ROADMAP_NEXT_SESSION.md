# Roadmap — prochaine session

Priorisé avec Jean-Charles le 2026-07-08, à l'issue de la session v6.2 (Public/IPsec, remise EVP, i18n, redesign, merge avec le Mode Challenger v7.0). Ordre = priorité.

---

## 1 — Unifier le pipeline de pricing Cloud Connect (Heatmap + Challenger)

**Constat** : les deux modes ne partagent aucune donnée OB malgré des noms de fichiers proches.
- Heatmap OB vs CSP → `public/ob_pricing_jul2026.js`, généré par `scripts/convert_ob_pricing.mjs` depuis `ODCCpricingJul26.csv`. EUR natif, PAYG pur, couvre Private **et** Public/IPsec, disponibilité par CSP.
- Mode Challenger → `src/data/ob_pricing_mar2026.js`, importé par `src/engine/pricingEngine.js`. Source `ODCCpricingMar26.csv` (31/03/2026), ancien modèle (frais de réservation + tarif horaire), Private uniquement, pas de Public/IPsec.

**Demande explicite de Jean-Charles** : ne pas juste unifier la mécanique — remonter aussi les prix Cloud Connect de juillet côté Challenger (le Challenger tourne actuellement sur des tarifs de mars, obsolètes).

**Point de décision pour la prochaine session** : `pricingEngine.js` attend `OB_PRICING[country]['High Availability']['Local'][bwKey]` (dimension géographique Local/Regional/Inter-Regional). Le fichier Jul26 n'a plus cette dimension (résolue ailleurs dans le modèle de juillet). Deux options :
- (a) Adapter `pricingEngine.js` pour consommer directement `OB_PRICING_PRIVATE`/`OB_PRICING_PUBLIC` (le format Jul26), en abandonnant la dimension géo côté Challenger aussi — une seule source de vérité, plus propre à terme.
- (b) Regénérer un fichier au format attendu par Challenger depuis le même CSV Jul26 (adaptateur), en gardant deux fichiers mais une seule source CSV.

Recommandation : (a), mais à valider — ça touche `pricingEngine.js` qui n'a pas été audité en détail cette session.

**Hors périmètre** : VNE (`vne_pricing_mar2026.js`) et VPNaaS (`vpnaas_pricing_mar2026.js`) restent sur les données de mars — ce sont des produits différents, absents du CSV ODCC de juillet.

---

## 2 — Fraîcheur des données visible dans l'UI

Afficher "Pricing à jour au JJ/MM/AAAA" dans les deux modes, pas seulement dans un numéro de version. Idéalement :
- Étendre `scripts/convert_ob_pricing.mjs` pour écrire une métadonnée exploitable (ex. `OB_PRICING_META = { generatedAt, sourceFile }`) dans le fichier généré, plutôt que hardcoder une date dans les composants.
- Header.jsx (Heatmap) et le shell Challenger affichent cette date, traduite FR/EN.

Motivation de Jean-Charles : la transparence sur la fraîcheur des données va être de plus en plus challengée par les interlocuteurs.

---

## 3 — Détecteur de point de bascule Private ↔ Public/IPsec

Pour un pays donné, calculer et afficher automatiquement le volume/débit où le Cloud Connect Public/IPsec devient moins cher que le Private (ou vice-versa), plutôt que de laisser l'utilisateur scanner la heatmap à l'œil.

Approche probable : pour une bande passante fixée, balayer l'axe volume, comparer les deux totaux (`calculatePrivateCost` vs `calculatePublicIPsecCost` dans `src/utils/calculations.js`), trouver le point de croisement (ou signaler l'absence de croisement dans la plage). Affichage : annotation sur la heatmap ou phrase de synthèse ("En dessous de X TiB/mois, le Public/IPsec est plus compétitif").

C'est la suite directe du retour marketing (Marion/Emmanuel) sur la compétitivité de l'IPsec en petits volumes.

---

## 4 — Passerelle entre les deux modes

Depuis la Heatmap OB vs CSP, un lien/bouton "Comparer aussi vs Megaport/Equinix" qui bascule vers le Mode Challenger en réutilisant le pays et la bande passante déjà sélectionnés (mapping vers le cas d'usage le plus proche, probablement Cas A — on-ramp simple).

`viewMode` est déjà géré dans `App.jsx` — il s'agit de lui faire porter aussi un contexte initial (pays/débit) à transmettre à `ChallengerView` au moment du switch, plutôt que deux outils cloisonnés.

---

## 5 — URL partageable

Encoder la configuration courante (pays, CSP, mode Private/Public, bande passante, volume, TCV/durée, devise, viewMode) dans les query params de l'URL, synchronisée à chaque changement et relue au chargement. Permet à un commercial d'envoyer un lien direct plutôt que de redécrire tout un scénario.

Approche légère suggérée : un hook `useUrlState` maison avec `URLSearchParams` + `history.replaceState`, pas besoin d'une dépendance router pour un besoin aussi simple.

---

## Explicitement mis de côté (nice-to-have, pas structurant selon JC)

- Argumentaire automatique pour la Heatmap OB vs CSP (le Mode Challenger en a déjà un via `narrativeGenerator.js` — pourrait être répliqué plus tard si le besoin se confirme).
- Mode "guidé" simplifié pour commerciaux généralistes (masquer les paramètres techniques derrière 2-3 questions).
