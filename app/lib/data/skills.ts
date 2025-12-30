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
      { name: "HTML5 / CSS3 / Sass", level: 95 },
      { name: "Styled-components", level: 90 },
    ],
  },
  {
    title: "DevOps & Outils",
    icon: GitBranch,
    skills: [
      { name: "Git — GitHub & GitLab", level: 90 },
      { name: "Méthodes Agiles (Trello)", level: 90 },
      { name: "CI/CD — pipelines GitLab", level: 80 },
      { name: "Docker", level: 80 },
    ],
  },
  {
    title: "Qualités et posture",
    icon: Rocket,
    skills: [
      { name: "Clean Code & lisibilité", level: 90 },
      { name: "Apprentissage continu", level: 95 },
      { name: "Résolution de problèmes", level: 90 },
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
    title: "UX, Qualité & Design",
    icon: Palette,
    skills: [
      { name: "Accessibilité (WCAG)", level: 90 },
      { name: "Design System", level: 80 },
      { name: "SEO", level: 85 },
      { name: "Figma / Canva", level: 75 },
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
