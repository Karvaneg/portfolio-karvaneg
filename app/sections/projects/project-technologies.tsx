import { TechBadgeList } from "@/components/ui-kit/tech-badge/tech-badge-list"

interface ProjectTechnologiesProps {
    technologies: readonly string[]
}

export function ProjectTechnologies ({ technologies }: ProjectTechnologiesProps) {
    return (
        <TechBadgeList
            technologies={technologies}
            size="xs"
            className="pt-2"
        />
    )}