import { LucideIcon } from "lucide-react"

export interface MenuItem {
  id: string
  label: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  icon: LucideIcon | null
  skills: readonly Skill[]
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: readonly string[]
  github: string | null
  live: string | null
}

export interface Experience {
  period: string
  title: string
  company: string
  description: string
  technologies: readonly string[]
  link: string | null
}