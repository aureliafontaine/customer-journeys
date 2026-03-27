# Customer Journey Mapping — Cuure

## Rôle de Claude
Développeur sur ce projet. Aurélia fournit les infos métier (structure des journeys, étapes, données) et Claude les intègre dans le code. Pas besoin de push à chaque modification — uniquement quand Aurélia le demande.

---

## L'app

Web app interne hébergée sur GitHub Pages : `aureliafontaine.github.io/customer-journeys`

Stack : React + Tailwind CSS via CDN, pas de build step.
Données hardcodées dans `data/journeys.js`.

---

## Structure de navigation

Groupes de journeys (dossiers accordéon) :

| Groupe | Journeys |
|--------|----------|
| Discovery | Prospects · Returning |
| Conversion | MyCuure · FS-3B · MA-05 · onely · Essentials · Multi-range |
| Post-purchase | MyCuure · FS-3B · MA-05 · onely · Essentials |
| Repurchase | OTP · Active Subscriber · Paused Subscriber |
| Engagement | Loyalty · Guidance |

Section Data : Context & Objectives · FS-3B Rates

La page **Journeys** est la vue d'ensemble qui relie tous les groupes.

---

## Format d'une journey (canvas)

- **Colonnes** = étapes (Step 1, Step 2…)
- **Lignes** = lanes (formats, types d'achat, etc.)

Types de contenu dans les cellules :
- Texte simple
- Tableau inline avec prix / prix barré (`{ type: "table", rows: [...] }`)
- Lien vers une autre journey (orange) ou une page Data (violet)

---

## État d'avancement

| Groupe | Contenu |
|--------|---------|
| Journeys (vue d'ensemble) | ✅ Complet |
| Conversion | ✅ Complet |
| Post-purchase | 🔲 Journeys créées, contenu vide |
| Repurchase | 🔲 Journeys créées, contenu vide |
| Engagement | 🔲 Journeys créées, contenu vide |
| Discovery | 🔲 Journeys créées, contenu vide |
| Pages Data | 🔲 Structure créée, données vides |
