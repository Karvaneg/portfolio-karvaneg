# CLAUDE.md

Guide d'entrée pour travailler sur ce dépôt. À lire en premier.

## 📚 Docs à lire avant de coder

| Quand | Fichier |
|---|---|
| **Toujours** — feuille de route, règles complètes, décisions, plan en 8 phases | [`docs/refonte-plan.md`](docs/refonte-plan.md) |
| **Refonte** — handoff design hifi (specs par surface, tokens, copy, maquettes) | `…/design_handoff_karvaneg_portfolio/README.md` (hors dépôt, chemin Windows `/mnt/c/Users/marie/Documents/WebDevelopment/Projets/Perso/portFolioKarvaneg/Portfolio_Karvaneg_CD_2versions/`) |

Les fichiers `source/*.jsx|.html` du handoff sont des **références visuelles**, à **recréer en natif** Next.js — jamais à copier tels quels.

## 🎯 Projet

Portfolio de Marie Le Carvennec, en **refonte complète 2026** : système éditorial à
**4 surfaces** — Atrium `/`, Carnet d'esquisses `/esquisses`, Carnet technique `/technique`,
Playbook `/playbook`. Voir `docs/refonte-plan.md` §1.

**Stack** : Next.js 16 (App Router, RSC), React 19, TypeScript strict, Tailwind v4
(CSS-first `@theme`), shadcn/ui + lucide, `next-themes`, Vitest. Prod sur **Vercel**.

## 🔧 Commandes

```bash
pnpm dev      # serveur de dev (http://localhost:3000)
pnpm build    # eslint --max-warnings=0 + next build
pnpm lint     # eslint seul
pnpm test     # vitest run
pnpm format   # prettier --write
```

> Si une commande pnpm échoue sur `ERR_PNPM_IGNORED_BUILDS`, les builds natifs
> (`sharp`/`esbuild`/`unrs-resolver`) sont approuvés dans `pnpm-workspace.yaml` ; relancer `pnpm install`.

## ✅ Règles de base (détail en `docs/refonte-plan.md` §3)

- **Pas de CSS inline** → Tailwind v4 / CSS Modules. `style={{}}` seulement pour une
  valeur dynamique inévitable, documentée.
- **Petits composants**, une seule responsabilité, **viser < ~80 lignes/fichier** ;
  au-delà, découper en sous-composants (cf. pattern `about.tsx`).
- Fichiers **kebab-case**, composants `PascalCase`, **export nommé**, imports `@/…`.
- **RSC par défaut** (`app/**`) ; `'use client'` seulement si interactivité, isolé dans `components/**`.
- **Données séparées du rendu** : tout le contenu typé dans `content/**`, types dans `types/**`.
- **a11y/perf non négociables** : `next/image`, `next/font`, Lighthouse 100×4, focus-trap sur
  overlays, animations gated `prefers-reduced-motion` (état de repos visible), contrastes WCAG AA.
- **Zéro warning ESLint** (le build échoue sinon). **Prettier** : single quotes, semi,
  trailing commas, printWidth 100, 2 espaces.
- **Tests Vitest** : garder la suite verte, tester l'intégrité du modèle de contenu.

## 🌿 Git

- Travail sur la branche **`feat/refonte`**. **`main` est protégée** (GitLab) — pas de force-push,
  pas de commit direct dessus pendant la refonte.
- Archive de la V1 : tag **`v1-portfolio`**.
- Commits atomiques, messages conventionnels. Ne commiter/pusher que sur demande.
- Repo GitLab + **miroir GitHub**.
