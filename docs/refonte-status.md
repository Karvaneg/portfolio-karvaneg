# Refonte — État & reprise

> Point de situation pour reprendre la refonte. Lire aussi `docs/refonte-plan.md`
> (feuille de route + règles) et `CLAUDE.md` (conventions). Dernière mise à jour : 2026-06-11.

## TL;DR — où on en est

Phases **0 → 7 terminées**. Reste la **Phase 8 — QA finale & déploiement** (Lighthouse,
responsive, relecture copy, MR `feat/refonte` → `main`).

- Branche : **`feat/refonte`**, poussée sur `origin` jusqu'à `f546b10`.
- Archive V1 : tag **`v1-portfolio`**. `main` protégée (pas de force-push), intouchée.
- Build vert, lint 0 warning, **24 tests verts**, tout en SSG/statique (19 routes).

| Phase                                                  | État           | Commit(s)                         |
| ------------------------------------------------------ | -------------- | --------------------------------- |
| 0 — Fondations (images, arbo)                          | ✅             | `7b4b4ee`                         |
| 1 — Contenu unifié                                     | ✅             | `b132411`, `b304be1`              |
| 2 — Tokens + polices + accent CSS                      | ✅             | `6fd230c`                         |
| 3 — Atrium `/`                                         | ✅             | `fec3d4e`                         |
| 4 — Carnet technique `/technique`                      | ✅             | `12c0bd4`, `7572bab`, `f25f0ca`   |
| 5 — Carnet d'esquisses `/esquisses`                    | ✅             | `4b5ce55`, `6911d85`, `ab6b745`   |
| 6 — Playbook `/playbook` + `[slug]` (MDX)              | ✅             | `60d10bb`                         |
| 7 — Transverse (a11y, SEO, perf, analytics)            | ✅             | `c082a39` (+ favicons, cleanup)   |
| **8 — QA finale + Lighthouse + déploiement**           | ⏳ **en cours**| —                                 |

Post-phases : renommage `/carnet` → `/esquisses` (`218fd6c`) puis cohérence interne
`carnet` → `esquisses` dans tout le code (`f546b10`).

## Routes en place (toutes SSG/statique)

- `/` → Atrium. `app/page.tsx` + `components/atrium/*`.
- `/esquisses` → Carnet d'esquisses. `app/esquisses/page.tsx` + `components/esquisses/*`.
- `/technique` → Carnet technique. `app/technique/page.tsx` + `components/technique/*`.
- `/playbook` + `/playbook/[slug]` → Playbook (MDX). `app/playbook/**` + `components/playbook/*`.
- OG dynamiques (`opengraph-image.tsx` par route), `sitemap.xml`, `robots.txt`, `manifest.webmanifest`.

## Phase 6 — Playbook : FAIT

Surface MDX extensible, esthétique terminal réutilisée (`data-surface="technique"`).
- Infra : `@next/mdx` + `@mdx-js/*`, `next.config` via `createMDX`, `mdx-components.tsx` racine.
- Contenu : `content/playbook-index.ts` = **source unique** des métadonnées (titre, catégorie,
  temps, tags, résumé), lue par l'atrium, l'index, le pager ET l'en-tête MDX (`entry={props.entry}`).
  3 entrées en MDX (001 setup Windows, 002 skills, 003 worktrees).
- Composants : primitives (CopyButton, PromptBlock, TerminalBlock, Callout, Step/SubStep,
  StatusLinePreview, ArticleHeader + wrappers) ; coque/nav/pager. Registre `content/playbook/registry.ts`
  (slug → import statique, Turbopack-safe).
- Tests : intégrité index/registre/pager/accent/tags.

## Phase 7 — Transverse : FAIT

- **SEO** : `app/lib/metadata.ts` (root refonte + helper `buildMetadata`), canonical + OG/Twitter
  par route, `sitemap.ts` (4 surfaces + slugs), `robots.ts`. Slash final de `NEXT_PUBLIC_SITE_URL`
  normalisé.
- **OG dynamiques** : `app/lib/og.tsx` (ImageResponse thémé par surface) + 5 `opengraph-image.tsx`.
- **a11y** : reset `prefers-reduced-motion` global dans `globals.css`. Focus-trap des overlays
  (case-study, project-detail) vérifié (scroll lock, focus initial+restitution, Esc, piège Tab,
  `role=dialog`/`aria-modal`).
- **perf** : images refonte en `fill` + `sizes`, aucune image LCP above-the-fold.
- **analytics** : consent-gaté — `components/consent/cookie-consent.tsx` monte `CookieBanner`,
  charge le script Contentsquare sur consentement + interaction. Restylé aux tokens refonte
  (couverture atrium, bas-gauche, CSS Module) ; ne dépend plus de la V1.
- **favicons** : `app/icon.svg` + `app/apple-icon.png` + `app/favicon.ico` + `app/manifest.ts`
  (astérisque rouge, theme `#15120d`). Anciens assets OG/favicon V1 supprimés.

## Phase 8 — QA finale : à finir

Vérifié auto : `lint` + `build` + 24 tests verts ; renvois croisés cohérents ; breakpoints
860/960 présents. **Reste (manuel / live)** :

- **Lighthouse 100×4** sur preview Vercel (ou `next start` local).
- Check visuel responsive 860/960px.
- Relecture copy finale + **audit contraste AA** des textes faibles (`--ivory-faint`, `--fg-faint`,
  `--graphite-light`).
- **MR `feat/refonte` → `main`** (action de validation, `main` protégée GitLab).

## Décisions / points ouverts

- Voir mémoire `[[portfolio-refonte-decisions]]`. Accent switcher discret (emerald/cyan/rouge),
  email unifié, vidéo démo + repo stats en **placeholders**, projets du plus récent au plus ancien.
- **À trancher** : la marque des nav esquisses/technique pointe vers `#top` (scroll), pas vers
  l'atrium `/`. Le brancher sur `/` ou laisser ?
- **Naming** : `carnet` → `esquisses` partout dans le code ; la **copie affichée** « carnet
  d'esquisses » / « carnet technique » et le « carnet d'adresses » (projet Portails) sont conservés.

## Gotchas / dettes connues

- **Fix SSR critique** : `app/providers.tsx` ne charge pas le ThemeProvider en `ssr:false`.
  `<html suppressHydrationWarning>`. Ne pas réintroduire `ssr:false`.
- **Nettoyage V1 fait** : sections, ui-kit, layout, data, hooks, ui, `design-system/`,
  `lib/utils.ts`, tests et images V1 supprimés (~100 fichiers). Restent câblés au `layout` :
  `app/lib/fonts.ts` (Inter/JetBrains/Cinzel sur `<html>`), `providers`/`theme-provider`,
  `client-utilities` + `components/consent/*`, `lib/security.ts`.
- **pnpm** : dans cet environnement, `pnpm` se résout en 10.x alors que `node_modules` vient de
  pnpm 11.5.3 → utiliser `corepack pnpm@11.5.3 …` (ou `node_modules/.bin/*` directement).
- **Lint** : `react-hooks/set-state-in-effect` actif → pas de `setState` dans un effet
  (cf. `components/technique/use-accent.ts`, `useSyncExternalStore`).

## Reprendre — commandes

```bash
git switch feat/refonte
pnpm dev                                     # / · /esquisses · /technique · /playbook
node_modules/.bin/eslint . --ext .ts,.tsx --max-warnings=0
node_modules/.bin/next build                 # 19 routes, ○ Static / ● SSG
node_modules/.bin/vitest run                 # 24 tests
```
