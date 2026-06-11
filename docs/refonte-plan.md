# Refonte Portfolio Karvaneg — Règles & Plan d'action

> Document de référence de la refonte complète 2026. Source de vérité pour les
> conventions et l'ordre d'exécution. Établi à partir du handoff design
> (`design_handoff_karvaneg_portfolio/README.md`) et des conventions de la V1.

---

## 1. Contexte & objectif

Refonte complète du portfolio, transformé en **système éditorial à 4 surfaces** (un
seul site). L'ancien portfolio mono-page est **remplacé**.

- **Branche de travail** : `feat/refonte` (créée depuis `main`). `main` reste intouchée.
- **Archive V1** : tag `v1-portfolio` (local + `origin`) — état stable d'avant-refonte.
- **Repo** : GitLab (`main` protégée, pas de force-push) + **miroir GitHub**.
- **Prod** : **Vercel** (conservé).

### Les 4 surfaces

| Route | Surface | Identité visuelle |
|---|---|---|
| `/` | **Atrium / Accueil** | Couverture de carnet, near-black chaud `#15120d`, crop marks, « N° 04 · Édition 2026 », choix entre 2 éditions + mise en avant Playbook |
| `/carnet` | **Carnet d'esquisses** | Papier crème, manuscrit (Caveat / Patrick Hand), scotch, rotations, crayon rouge |
| `/technique` | **Carnet technique** | Terminal `#0a0a0a`, accent émeraude, prompt `marie@karvaneg:~$`, tickets `KARV-00x` + études de cas |
| `/playbook` `/playbook/[slug]` | **Playbook** | Long-form MDX (tutoriels IA), esthétique terminal, extensible dans le temps |

Les deux carnets présentent **le même travail**, mis en page différemment, avec renvoi croisé.

---

## 2. Décisions actées (Marie, 2026-06-10)

- **Process** : plan détaillé validé **avant** toute écriture de code. Validation à chaque phase.
- **N° 04** : éditorial, reproduit tel quel (pas un bug).
- **Accent technique** : **switcher discret** émeraude / cyan / rouge via `next-themes`
  (`[data-accent]`), défaut émeraude `#34d399`. Pas de panneau Tweaks de proto.
- **Email unifié partout** : `marie.lecarvennec@gmail.com`.
- **Liens réels partout** : GitHub `@Karvaneg`, LinkedIn `in/marielecarvennec`, Malt.
- **Vidéo démo (« Show ») + repo stats (« Open Source »)** : construites avec **placeholders propres**, prêtes à brancher le vrai contenu.
- **Analytics conservés** : cookie-banner + Hotjar repris de la V1.
- **Données** : extraites des maquettes en Phase 1, **liste finale des projets validée avec Marie**.

---

## 3. Règles de code (rigueur V1 à préserver)

### Style & formatage
- **Prettier** : `semi: true`, `singleQuote: true`, `trailingComma: 'all'`,
  `printWidth: 100`, `tabWidth: 2`, `arrowParens: 'always'`.
- **ESLint** : `next/core-web-vitals` + TS strict, `jsx-a11y`, `react-hooks` strict
  dans `components/`. Build = `eslint --max-warnings=0` → **zéro warning toléré**.
- **Imports de type** explicites (`import type { … }`). Alias `@/…` (pas de chemins relatifs profonds).

### Architecture des composants
- **Pas de CSS inline.** Styles via **Tailwind v4** (`@theme` / classes) et **CSS Modules**
  pour le très bespoke (carnet manuscrit, effets terminal). Jamais d'`style={{…}}` sauf
  valeur dynamique inévitable (ex. position curseur), et alors documentée.
- **Petits composants, une seule responsabilité.** Référence V1 : une section = un dossier,
  découpée en sous-composants (`about.tsx` compose `about-description.tsx` +
  `about-technologies.tsx`). Viser **< ~80 lignes** par fichier ; au-delà, découper.
- **Nommage** : fichiers en **kebab-case**, composants en `PascalCase`, **export nommé**.
- **RSC par défaut** (`app/**`) ; `'use client'` uniquement quand nécessaire (interactivité),
  isolé dans `components/**`.
- **Données séparées du rendu** : tout le contenu dans `content/**` (typé), jamais en dur dans le JSX.
- **Types** centralisés dans `types/**`. **Tokens** dans `globals.css` (`@theme`) + `design-system/`.

### Accessibilité & performance (exigences du positionnement)
- Cible **Lighthouse 100 / 100 / 100 / 100**.
- `next/image` (toutes images), `next/font/google` (toutes polices), SSG, **pas de Babel runtime**.
- HTML sémantique (`nav`/`section`/`article`/`figure`/`footer`).
- **Overlays** : `body.overflow=hidden`, fermeture `Esc` + clic fond, **focus-trap + restitution
  du focus** (amélioration vs maquettes).
- Animations **gated** `@media (prefers-reduced-motion: no-preference)`, état de repos visible
  (jamais de page blanche en SSR/capture). Curseur custom désactivé au tactile (`pointer: coarse`).
- Contrastes WCAG **AA** — revérifier les textes faibles (`--ivory-faint`, `--fg-faint`).

### Tests
- **Vitest** (déjà en place). Test d'intégrité du modèle de contenu (ids uniques, images
  existantes) + tests de rendu sur les pages clés. Garder la suite verte.

### Git
- Commits atomiques par étape, messages conventionnels. Push régulier sur `origin/feat/refonte`.
- MR `feat/refonte` → `main` en fin de parcours, après validation.

---

## 4. Arborescence cible

```
app/
  layout.tsx              → <html>, fonts, metadata de base, providers (theme, analytics)
  page.tsx                → ATRIUM
  carnet/page.tsx         → Carnet d'esquisses
  technique/page.tsx      → Carnet technique
  playbook/page.tsx       → index Playbook
  playbook/[slug]/page.tsx→ une entrée (MDX)
  globals.css             → reset + tokens @theme partagés
components/
  atrium/…   carnet/…   technique/…   playbook/…   shared/…
content/
  projects.ts             → SOURCE DE VÉRITÉ UNIQUE
  experience.ts  stack.ts  profile.ts
  playbook/*.mdx
types/…   design-system/…   lib/…
public/images/…           → 19 captures (depuis source/images/)
```

---

## 5. Plan d'action (phases)

> Une phase ≈ un (ou quelques) commit(s). Build + revue visuelle à chaque fin de phase.

- **Phase 0 — Fondations (additif, build vert)**
  Copier les 19 images → `public/images/projects/`. Créer l'arborescence cible à vide
  (`content/**`, `components/{atrium,carnet,technique,playbook,shared}/`).
  > **Séquencement** : le **nettoyage V1 est progressif** — chaque section mono-page est retirée
  > au moment où la nouvelle surface la remplace (le build reste vert pour les previews Vercel).
  > Le **setup MDX est reporté en Phase 6** (câblé quand le Playbook l'utilise, pas avant).

- **Phase 1 — Modèle de contenu unifié** *(socle)*
  `content/projects.ts` (type `Project` fusionnant narratif + ticket/case-study, 7 projets
  `KARV-001..007`), `experience.ts`, `stack.ts`, `profile.ts`. Emails/liens corrigés. Test d'intégrité.
  → **Validation de la liste finale des projets avec Marie.**

- **Phase 2 — Tokens, polices & thème**
  7 polices via `next/font` (`app/lib/refonte-fonts.ts`). Tokens des 3 univers **scopés par
  surface** (`app/styles/refonte-tokens.css`, `[data-surface=…]`) — zéro impact V1. Variants
  d'accent `[data-accent=emerald|cyan|red]` en CSS.
  > **Séquencement** : le **composant switcher** (next-themes) est monté en Phase 4 (il lui faut
  > une surface) ; les **utilitaires partagés** (crop marks, animations `reveal`) sont créés en
  > Phase 3 là où ils servent d'abord — pour éviter le code/CSS mort.

- **Phase 3 — Atrium `/`**
  Crop marks · topbar · hero (« savoir-faire. » Caveat rouge) · diptyque éditions · bande Playbook
  cliquable · colophon · raccourcis clavier `1`/`2`/`P`. Reveal en cascade.

- **Phase 4 — Carnet technique `/technique`**
  Nav · Hero (variante verbose/minimal) · Show (vidéo **placeholder**) · Workflow · Projects (tickets) ·
  CaseStudy modal (métriques, carrousel clavier + lightbox, focus-trap) · OpenSource (stats **placeholder**) ·
  Contact · Footer (→ carnet). Accent thémable.

- **Phase 5 — Carnet d'esquisses `/carnet`**
  Nav (burger mobile) · Hero manuscrit (easter egg astérisque) · Marquee · About (+ citation) · Stack ·
  Work (aperçu flottant) · ProjectDetail overlay (galerie, focus-trap) · Experience · Contact · Footer
  (→ technique). Curseur custom (off tactile).

- **Phase 6 — Playbook `/playbook` + `[slug]`**
  Setup MDX ici (install `@next/mdx` + `@mdx-js/*`, config Turbopack). `content/playbook/*.mdx`
  (001 live, 002/003 ébauches). Index + entrée. Composants MDX
  (terminal, étapes, code). Ajouter une entrée = ajouter un fichier.

- **Phase 7 — Transverse : a11y, SEO, perf, analytics**
  `generateMetadata` par route, sitemap/robots (4 surfaces + slugs), canonical, OG. Focus-trap généralisé.
  Contrastes AA. `prefers-reduced-motion` partout. `next/image` priority/lazy. Réintégrer cookie-banner + Hotjar.

- **Phase 8 — QA finale & déploiement**
  `lint` + `build` + tests verts. Audit Lighthouse (100×4). Responsive (860/960px). Renvois croisés.
  Relecture copy. Preview Vercel. MR `feat/refonte` → `main` après validation.

---

## 6. Suivi

- [x] Phase 0 — Fondations & nettoyage
- [x] Phase 1 — Modèle de contenu unifié
- [x] Phase 2 — Tokens, polices & thème
- [x] Phase 3 — Atrium
- [x] Phase 4 — Carnet technique
- [x] Phase 5 — Carnet d'esquisses
- [x] Phase 6 — Playbook
- [x] Phase 7 — Transverse (a11y / SEO / perf / analytics)
- [ ] Phase 8 — QA finale & déploiement
