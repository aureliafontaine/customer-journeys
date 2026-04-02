# Customer Journey Mapping — Cuure

## Rôle de Claude
Développeur sur ce projet. Aurélia fournit les infos métier (structure des journeys, étapes, données) et Claude les intègre dans le code. Push systématique après chaque modification.

---

## L'app

Web app interne hébergée sur GitHub Pages : `aureliafontaine.github.io/customer-journeys`

Stack : React + Tailwind CSS via CDN, pas de build step.
Données hardcodées dans `data/journeys.js`.

Cache busting : incrémenter `?v=N` dans `index.html` à chaque modif de `journeys.js`.
Version actuelle : `?v=20`

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

La page **Journeys** (id: `journey-cx`) est la vue d'ensemble qui relie tous les groupes.

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

---

## Persistence des données

### localStorage (5 clés)
- `cuure-chip-statuses` — overrides d'état par chip
- `cuure-chip-additions` — chips ajoutés manuellement
- `cuure-chip-deletions` — chips / tableaux supprimés
- `cuure-meta-values` — contenu des cellules Définition / Source
- `cuure-edit-mode` — état du mode édition

### overrides.json (`data/overrides.json`)
Fichier de référence partagé (base de données persistante). Chargé au démarrage via fetch avec cache-busting (`?t=Date.now()`).

Contient les mêmes 5 types de données que localStorage. **Règle de priorité : localStorage prend le dessus sur overrides.json** pour chaque clé — si une clé existe dans localStorage, elle écrase la valeur de overrides.json.

**Workflow de publication :**
1. Aurélia fait ses modifications en mode édition (localStorage)
2. Elle ouvre le modal "Publier" (bouton en bas de la sidebar, visible en mode édition)
3. Elle copie le JSON et le transmet à Claude Code
4. Claude Code met à jour `data/overrides.json` et push

---

## URL routing

Chaque journey a une URL partageable basée sur le hash :
`https://aureliafontaine.github.io/customer-journeys/#<journey-id>`

Exemples :
- `#conversion` → Single-range
- `#discovery-prospects` → Prospects
- `#repurchase-active-subscriber` → Active Subscriber

La navigation met à jour le hash automatiquement. Le bouton retour du navigateur fonctionne (`pushState` + listener `hashchange`).

---

## État d'avancement

| Groupe | Contenu |
|--------|---------|
| Journeys (vue d'ensemble) | ✅ Complet |
| Conversion | ✅ Complet (Single-range fusionné) |
| Discovery | ✅ Structure + Définitions & Sources complètes |
| Post-purchase | 🔲 Journeys créées, contenu vide |
| Repurchase | 🔲 Journeys créées, contenu vide (Active Sub : lanes Upseller & Change Seekers vides intentionnellement) |
| Engagement | 🔲 Journeys créées, contenu vide |
| Pages Data | 🔲 Structure créée, données vides |
