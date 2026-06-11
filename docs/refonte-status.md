# Refonte — État & reprise

> Point de situation pour reprendre la refonte. Lire aussi `docs/refonte-plan.md`
> (feuille de route + règles) et `CLAUDE.md` (conventions). Dernière mise à jour : 2026-06-11.

## TL;DR — où on en est

Phases **0 → 5 terminées**. Prochaine étape : **Phase 6 — Playbook (`/playbook` + `[slug]`, MDX)**.

- Branche : **`feat/refonte`**. Phase 5 committée en local (`4b5ce55`, `6911d85`, `ab6b745`)
  — **non encore poussée** sur `origin/feat/refonte` (push sur demande).
- Archive V1 : tag **`v1-portfolio`**. `main` protégée (pas de force-push), intouchée.
- Build vert, lint 0 warning, 16 tests verts, tout en SSG (`/carnet` sort en `○ Static`).

| Phase                                                      | État           | Commit                          |
| ---------------------------------------------------------- | -------------- | ------------------------------- |
| 0 — Fondations (images, arbo)                              | ✅             | `7b4b4ee`                       |
| 1 — Contenu unifié (projects/experience/stack/profile)     | ✅             | `b132411`, `b304be1`            |
| 2 — Tokens + polices + accent CSS                          | ✅             | `6fd230c`                       |
| 3 — Atrium `/`                                             | ✅             | `fec3d4e`                       |
| 4 — Carnet technique `/technique`                          | ✅             | `12c0bd4`, `7572bab`, `f25f0ca` |
| 5 — Carnet d'esquisses `/esquisses`                        | ✅             | `4b5ce55`, `6911d85`, `ab6b745` |
| **6 — Playbook `/playbook` + `[slug]` (MDX)**              | ⏳ **à faire** | —                               |
| 7 — Transverse (a11y, SEO, perf, **réintégrer analytics**) | ⏳             | —                               |
| 8 — QA finale + Lighthouse + déploiement Vercel            | ⏳             | —                               |

## Routes en place

- `/` → Atrium (remplace la home V1). `app/page.tsx` + `components/atrium/*`.
- `/technique` → Carnet technique. `app/technique/page.tsx` + `components/technique/*`.
- `/esquisses` → Carnet d'esquisses. `app/esquisses/page.tsx` + `components/esquisses/*`.
- `/playbook` → **404 temporaire** (Phase 6).

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

## Phase 5 — Carnet d'esquisses : FAIT

`app/esquisses/page.tsx` + `components/esquisses/*` (shell, nav burger, hero easter-egg,
marquee, curseur, about, stack, work, project-detail, experience, contact, footer ;
CSS Module `esquisses.module.css`). Narratif extrait en `content/about.ts` + `types/about.ts`
(paragraphes + citation Coralie Pradel + hero-meta). **Malt omis** (pas d'URL) ; email
gmail unifié ; renvoi croisé footer → `/technique`.

Patterns réutilisables nés ici : **curseur custom** (`carnet-cursor.tsx`, `pointer: fine`,
toggle de classe via `styles.large`) ; **isolation de stacking** sur `.page`
(`isolation: isolate` + texture en `::before` z-index -1) pour que l'aperçu flottant et
l'overlay se superposent aux sections ; **variables CSS dynamiques** pilotées par la donnée
(`--rot`, `--frame-bg`) via `style={{ … } as CSSProperties}` (cast accepté par TS) ;
overlay `CarnetProjectDetail` rendu en sibling de la section Work (fragment) avec focus-trap
calqué sur `case-study.tsx`.

## Phase 6 — Playbook : à attaquer

**Sources (hors dépôt)** : `…/design_handoff_karvaneg_portfolio/source/` →
`Karvaneg Playbook.html`, `Karvaneg Playbook 001/002/003.md`, `ai-workflow-tutorial.jsx`,
`playbook-002.jsx`, `playbook-003.jsx`, `tutorial.css`.
(Chemin Windows : `/mnt/c/Users/marie/Documents/WebDevelopment/Projets/Perso/portFolioKarvaneg/Portfolio_Karvaneg_CD_2versions/`.)

Setup MDX ici (Phase 0 l'avait reporté) : `@next/mdx` + `@mdx-js/*` + config Turbopack.
`content/playbook/*.mdx` (001 live, 002/003 ébauches). Index + entrée `[slug]`. Esthétique
terminal (réutiliser tokens `[data-surface='technique']`). Lien Playbook déjà câblé depuis
les 3 surfaces (atrium, technique, esquisses).

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
git switch feat/refonte                     # Phase 5 committée en local, pas encore poussée
pnpm dev                                     # http://localhost:3000  (/, /technique, /esquisses OK)
node_modules/.bin/eslint . --ext .ts,.tsx --max-warnings=0
node_modules/.bin/next build                 # vérifier ○ Static
node_modules/.bin/vitest run                 # 16 tests
```

Puis : pousser la Phase 5 si validée (`git push`), puis lire les sources Playbook +
`tutorial.css`, attaquer la Phase 6 (setup MDX d'abord), en suivant les patterns de
`components/technique/` et `components/esquisses/` (shell, CSS Module, fidélité maquette).
