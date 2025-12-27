import { TechBadgeList } from "@/components/ui-kit/tech-badge-list"

interface ExperienceTechnologiesProps {
  technologies: readonly string[]
}

export function ExperienceTechnologies({ technologies }: ExperienceTechnologiesProps) {
  return (
    <TechBadgeList
      technologies={technologies}
      size="xs"
    />         
  )
}