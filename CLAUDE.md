# Customer Journey Mapping — Cuure

## Rôle de Claude
Développeur sur ce projet. Aurélia fournit les infos métier (structure des journeys, étapes, données) et Claude les intègre dans le code. Push systématique après chaque modification.

---

## L'app

Web app interne hébergée sur GitHub Pages : `aureliafontaine.github.io/customer-journeys`

Stack : React + Tailwind CSS via CDN, pas de build step.
Données hardcodées dans `data/journeys.js`.

Cache busting : incrémenter `?v=N` dans `index.html` à chaque modif de `journeys.js`.
Version actuelle : `?v=13`

---

## Structure de navigation

Groupes de journeys (dossiers accordéon) :

| Groupe | Journeys |
|--------|----------|
| Discovery | Prospects · Returning |
| Conversion | Single-range (id: `conversion`) · Multi-range |
| Post-purchase | MyCuure · FS-3B · MA-05 · onely · Essentials · Multi-range |
| Repurchase | OTP · Active Subscriber · Paused Subscriber |
| Engagement | Loyalty · Guidance |

Section Data : Context & Objectives · FS-3B Rates

La page **Journeys** est la vue d'ensemble qui relie tous les groupes.

> **Conversion / Single-range** = vue fusionnée de MyCuure · FS-3B · MA-05 · onely · Essentials sur une seule canvas (1 lane par produit, 8 étapes).

---

## Format d'une journey (canvas)

- **Colonnes** = étapes (Step 1, Step 2…)
- **Lignes** = lanes (formats, types d'achat, etc.)

Types de contenu dans les cellules :
- Texte simple
- Tableau inline avec prix / prix barré (`{ type: "table", rows: [...] }`)
- Lien vers une autre journey (orange) ou une page Data (violet)
- Array de chips (`["chip1", "chip2"]`)

Étapes spéciales (`type: "meta"`) : Définition, Source — affichées comme colonnes sans style "flèche", avec une textarea éditable.

---

## Système de chips

Les chips (items dans les cellules de type array) ont un système d'état à 5 niveaux :

| État | Style | Emoji |
|------|-------|-------|
| Bon | vert | ✅ |
| OK | jaune | 🟡 |
| Moyen | orange | ⚠️ |
| Mauvais | rouge | ❌ |
| Non existant | gris / pointillés | 🚫 |

**Par défaut** : tous les chips sont en "non existant".

**Interactivité (mode édition uniquement) :**
- Clic sur un chip → picker pour changer l'état
- Bouton `×` sur chaque chip → suppression
- Bouton `×` en haut à droite d'un tableau → suppression du tableau
- Bouton `+ Ajouter` en bas de chaque cellule → ajout d'un chip

**Mode édition** : activé via `Ctrl+Shift+E` (owner only).

**Persistence localStorage :**
- `cuure-chip-statuses` — overrides d'état par chip
- `cuure-chip-additions` — chips ajoutés manuellement
- `cuure-chip-deletions` — chips / tableaux supprimés
- `cuure-meta-values` — contenu des cellules Définition / Source
- `cuure-edit-mode` — état du mode édition

---

## État d'avancement

| Groupe | Contenu |
|--------|---------|
| Journeys (vue d'ensemble) | ✅ Complet |
| Conversion | ✅ Complet (Single-range fusionné) |
| Post-purchase | 🔲 Journeys créées, contenu vide |
| Repurchase | 🔲 Journeys créées, contenu vide |
| Engagement | 🔲 Journeys créées, contenu vide |
| Discovery | 🔲 Journeys créées, contenu vide |
| Pages Data | 🔲 Structure créée, données vides |
