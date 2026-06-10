# Refonte — État & reprise

> Point de situation pour reprendre la refonte. Lire aussi `docs/refonte-plan.md`
> (feuille de route + règles) et `CLAUDE.md` (conventions). Dernière mise à jour : 2026-06-11.

## TL;DR — où on en est

Phases **0 → 4 terminées et poussées**. Prochaine étape : **Phase 5 — Carnet d'esquisses (`/carnet`)**.

- Branche : **`feat/refonte`** (synchro avec `origin/feat/refonte`, working tree propre).
- Archive V1 : tag **`v1-portfolio`**. `main` protégée (pas de force-push), intouchée.
- Build vert, lint 0 warning, 16 tests verts, tout en SSG.

| Phase | État | Commit |
|---|---|---|
| 0 — Fondations (images, arbo) | ✅ | `7b4b4ee` |
| 1 — Contenu unifié (projects/experience/stack/profile) | ✅ | `b132411`, `b304be1` |
| 2 — Tokens + polices + accent CSS | ✅ | `6fd230c` |
| 3 — Atrium `/` | ✅ | `fec3d4e` |
| 4 — Carnet technique `/technique` | ✅ | `12c0bd4`, `7572bab`, `f25f0ca` |
| **5 — Carnet d'esquisses `/carnet`** | ⏳ **à faire** | — |
| 6 — Playbook `/playbook` + `[slug]` (MDX) | ⏳ | — |
| 7 — Transverse (a11y, SEO, perf, **réintégrer analytics**) | ⏳ | — |
| 8 — QA finale + Lighthouse + déploiement Vercel | ⏳ | — |

## Routes en place

- `/` → Atrium (remplace la home V1). `app/page.tsx` + `components/atrium/*`.
- `/technique` → Carnet technique. `app/technique/page.tsx` + `components/technique/*`.
- `/carnet`, `/playbook` → **404 temporaires** (Phases 5–6).

## Décisions actées (rappel)

Voir mémoire `[[portfolio-refonte-decisions]]`. En bref : accent switcher discret
(emerald/cyan/rouge), email unifié `marie.lecarvennec@gmail.com`, vidéo démo + repo
stats en **placeholders**, analytics (cookie-banner + Hotjar) **conservés** (à
réintégrer proprement en Phase 7), projets affichés **du plus récent au plus ancien**.

## Patterns établis (à réutiliser en Phase 5)

- **Tokens scopés par surface** : `app/styles/refonte-tokens.css`, bloc
  `[data-surface='carnet']` **déjà prêt** (papier, graphite, pencil, polices).
- **Polices** : `app/lib/refonte-fonts.ts` → `refonteFontVariables` (string) passée
  depuis le composant serveur (page) vers le wrapper.
- **CSS Modules** co-localisés (`components/<surface>/<surface>.module.css`), classes
  camelCase, port fidèle de la maquette. **Pas de CSS inline.**
- **Données** : tout depuis `content/` (projects via champs `carnet`, `description`,
  `tagline`, etc. + `experience`, `stack`, `profile`). Ne pas redupliquer.
- **Petits composants** (< ~80 lignes), un par section, export nommé, RSC par défaut ;
  `'use client'` seulement si interactif (overlay, curseur, menu mobile).
- **SSR/SSG** : OK partout depuis le fix du ThemeProvider (cf. ci-dessous). Vérifier que
  les nouvelles pages sortent en `○ Static` au build.

## Phase 5 — Carnet d'esquisses : plan d'attaque

**Sources (hors dépôt)** : `…/design_handoff_karvaneg_portfolio/source/` →
`Karvaneg Portfolio v2 (carnet).html`, `app-v2.jsx` (734 l.), `styles-v2.css`.
(Chemin Windows : `/mnt/c/Users/marie/Documents/WebDevelopment/Projets/Perso/portFolioKarvaneg/Portfolio_Karvaneg_CD_2versions/`.)

Sections (ordre DOM) : `Nav` (burger mobile a11y) → `Hero` (manuscrit, soulignés SVG,
**easter egg astérisque** = origine celtique « karvaneg ») → `Marquee` → `About`
(+ citation Coralie Pradel) → `Stack` (chips, `content/stack.ts`) → `Work` (lignes
projets + aperçu flottant au survol) → `ProjectDetail` (overlay plein écran, galerie,
focus-trap) → `Experience` (`content/experience.ts`) → `Contact` → `Footer`
(renvoi → `/technique`). **Curseur custom** désactivé au tactile (`pointer: coarse`).

Découpage suggéré (comme Phase 4) :
1. **5A** : shell `/carnet` (data-surface=carnet + polices) + Nav + Hero + Marquee + curseur custom.
2. **5B** : About (+ citation) + Stack + Work + overlay ProjectDetail (réutiliser `content/projects` champs carnet/description/gallery + focus-trap comme `case-study.tsx`).
3. **5C** : Experience + Contact + Footer.

Notes données : le carnet a `description[]` (narratif), `carnet.{rotation,background,accent,cardImage,heroImage,gallery,caption}`, `impactCarnet`, `stackCarnet` (InclusiShield only). La citation Coralie Pradel (DGS du CBNSA) est dans `app-v2.jsx` (section About) — à extraire ; pas encore en `content/` (l'ajouter, ex. `content/about.ts` ou champ profil).

## Gotchas / dettes connues

- **Fix SSR critique fait** : `app/providers.tsx` ne charge plus le ThemeProvider en
  `ssr:false` (sinon tout le site était client-only). `<html suppressHydrationWarning>`
  ajouté. Ne pas réintroduire `ssr:false`.
- **Fichiers V1 morts** : les anciennes sections (`app/sections/*`, `components/layout/*`,
  `components/ui-kit/*`, `app/lib/data/*`, etc.) ne sont plus routées mais **toujours
  présentes** (nettoyage progressif prévu, sans casser le build). `app/layout.tsx` garde
  encore `ClientUtilities` (cookie-banner + Hotjar) et le `ThemeProvider` dark/light.
- **Cookie-banner / Hotjar** s'affichent par-dessus l'atrium/technique → à réintégrer
  proprement en Phase 7.
- **Accent switcher** : pas de script anti-flash (un changement emerald→cyan/red peut
  flasher au 1er chargement). À améliorer en Phase 7 (CSP a un nonce ? cf. `lib/security.ts`).
- **MDX** non installé (Phase 6) : prévoir `@next/mdx` + `@mdx-js/*` + config Turbopack.
- **pnpm** : builds natifs approuvés dans `pnpm-workspace.yaml` (`allowBuilds`). Si
  `ERR_PNPM_IGNORED_BUILDS`, relancer `pnpm install`.
- **Lint** : règle `react-hooks/set-state-in-effect` active → pas de `setState` dans un
  effet (utiliser `useSyncExternalStore` cf. `components/technique/use-accent.ts`).

## Reprendre demain — commandes

```bash
git switch feat/refonte && git pull        # repartir à jour (NE PAS pull sur main)
pnpm dev                                    # http://localhost:3000  (/ et /technique OK)
node_modules/.bin/eslint . --ext .ts,.tsx --max-warnings=0
node_modules/.bin/next build                # vérifier ○ Static
node_modules/.bin/vitest run                # 16 tests
```

Puis : lire `app-v2.jsx` + `styles-v2.css`, attaquer la Phase 5 (sous-commit 5A),
en suivant les patterns de `components/technique/` (shell, CSS Module, fidélité maquette).
