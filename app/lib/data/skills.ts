import type { LucideIcon } from "lucide-react"
import { Code2, Database, Palette, Users, Rocket, GitBranch } from "lucide-react"

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: readonly Skill[]
}

export const skillCategories: readonly SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React / TypeScript", level: 85 },
      { name: "HTML5 / CSS3 / Sass", level: 95 },
      { name: "Styled Components", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "PHP / Symfony", level: 90 },
      { name: "Node.js / Express", level: 75 },
      { name: "PostgreSQL / MySQL", level: 85 },
    ],
  },
  {
    title: "UX & Design",
    icon: Palette,
    skills: [
      { name: "Accessibilité WCAG", level: 90 },
      { name: "Figma / Canva", level: 75 },
      { name: "SEO", level: 85 },
    ],
  },
  {
    title: "DevOps & Outils",
    icon: GitBranch,
    skills: [
      { name: "Git / GitHub / GitLab", level: 90 },
      { name: "Docker / CI/CD", level: 80 },
      { name: "Méthode Agile / Trello", level: 85 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Travail en équipe", level: 95 },
      { name: "Ténacité", level: 95 },
      { name: "Communication", level: 90 },
    ],
  },
  {
    title: "Passion",
    icon: Rocket,
    skills: [
      { name: "Clean Code", level: 90 },
      { name: "Apprentissage continu", level: 100 },
      { name: "Résolution de problèmes", level: 90 },
    ],
  },
] as const
