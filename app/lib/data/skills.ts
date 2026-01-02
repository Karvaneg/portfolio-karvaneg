import {
  Code2,
  Database,
  Palette,
  Users,
  Rocket,
  GitBranch,
} from "lucide-react";
import { SkillCategory } from "@/types/data";

export const skillCategories: readonly SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React / TypeScript", level: 85 },
      { name: "Next.js (App Router, SSR, SSG)", level: 80 },
      { name: "HTML5 / CSS3 / Sass", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Design System & UI tokens", level: 80 },
      { name: "Animations UI (Framer Motion / CSS)", level: 85 },
    ],
  },
  {
    title: "DevOps & Outils",
    icon: GitBranch,
    skills: [
      { name: "Git (GitHub & GitLab)", level: 90 },
      { name: "CI/CD & Pipelines (GitLab) ", level: 85 },
      { name: "Déploiement automatique (GitLab → Vercel)", level: 85 },
      { name: "Mirroring (GitLab → GitHub)", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Méthodes Agiles (Trello)", level: 90 },
    ],
  },
  {
    title: "UX, Qualité & Design",
    icon: Palette,
    skills: [
      { name: "Accessibilité (WCAG)", level: 90 },
      { name: "Design System (scalable & themable)", level: 85 },
      { name: "SEO (Next.js & bonnes pratiques)", level: 85 },
      { name: "Dark / Light mode (UX & perf)", level: 85 },
      { name: "Figma / Canva", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "PHP / Symfony / Twig", level: 90 },
      { name: "Node.js / Express.js", level: 75 },
      { name: "PostgreSQL / MySQL", level: 85 },
    ],
  },
  {
    title: "Qualités et posture",
    icon: Rocket,
    skills: [
      { name: "Clean Code & lisibilité", level: 90 },
      { name: "Apprentissage continu", level: 95 },
      { name: "Résolution de problèmes", level: 90 },
      { name: "Usage raisonné de l’IA en dev", level: 85 },
    ],
  },
  {
    title: "Compétences humaines",
    icon: Users,
    skills: [
      { name: "Travail en équipe", level: 90 },
      { name: "Ténacité", level: 95 },
      { name: "Communication technique et fonctionnelle", level: 90 },
    ],
  },
] as const;
