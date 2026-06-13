# Karvaneg – Portfolio v2

**Développeuse Fullstack & AI-Augmented Engineer**  
Next.js · TypeScript · Symfony · Orchestration LLM

🌐 [karvaneg.vercel.app](https://portfolio-karvaneg.vercel.app) ·
[LinkedIn](https://linkedin.com/in/marielecarvennec) ·
[Playbook IA](https://portfolio-karvaneg.vercel.app/playbook)

---

## Ce que tu trouveras ici

Un portfolio conçu comme un produit : architecture soignée,
design system cohérent, pipeline CI/CD complet — et un Playbook
public sur ma façon de travailler avec les agents IA.

---

## Pourquoi une v2 ?

|                    | v1                 | v2                                                     |
| ------------------ | ------------------ | ------------------------------------------------------ |
| **Framework**      | Next.js 14         | Next.js 16 (RSC first)                                 |
| **Style**          | Tailwind classique | Tailwind v4 CSS-first `@theme` + CSS Modules           |
| **Architecture**   | Page Router        | App Router — composants serveur natifs                 |
| **CI/CD**          | Déploiement manuel | GitLab CI/CD complet (SAST, secrets detection, mirror) |
| **Positionnement** | Portfolio dev      | Portfolio dev + Playbook ingénierie augmentée IA       |

> La v1 faisait le job. La v2 reflète ce que je suis capable
> de construire — et comment je travaille.

---

## Stack technique

- **Next.js 16** — App Router, React Server Components
- **React 19 & TypeScript strict**
- **Tailwind CSS v4** — approche CSS-first avec `@theme`
- **CSS Modules** — encapsulation des styles critiques
- Design system personnel — composants réutilisables,
  tokens de design cohérents

### Pipeline DevOps (GitLab CI/CD → Vercel)

- Lint + tests unitaires (Vitest) — gate qualité avant build & déploiement
- Build automatisé + analyse SAST
- Détection de secrets exposés
- Mirroring GitLab → GitHub (ce repo = miroir lecture seule)
- Cache pnpm — builds reproductibles
- Déploiement continu sur Vercel (branche `main`)

---

## Playbook — Ingénierie augmentée par l'IA

Une série de guides techniques sur ma méthode de travail
avec Claude Code :

- `001` Setup Claude Code sur Windows — 100% prompt-driven
- `002` Création de Skills & Workflows versionnés
- `003` Refactoring asynchrone & Git Worktrees

→ [Lire le Playbook](https://portfolio-karvaneg.vercel.app/playbook)

---

## 🔒 Ce repo est un miroir

Dépôt source hébergé sur GitLab.  
Issues et PR désactivées — consultation du code : ✅

---

**Marie Le Carvennec** — Le Teich (33) · Remote

[![LinkedIn](https://img.shields.io/badge/LINKEDIN-KARVANEG-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marielecarvennec/)
