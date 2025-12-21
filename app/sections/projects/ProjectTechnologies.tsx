import { dsTokens } from "@/design-system/tokens"
import { cn } from "@/lib/utils"

interface ProjectTechnologiesProps {
    technologies: readonly string[]
}

export function ProjectTechnologies ({ technologies }: ProjectTechnologiesProps) {
    return (
        <div className={cn("flex flex-wrap gap-2 pt-2")} role="list" aria-label="Technologies utilisées">
            {technologies.map((tech) => (
            <span
                key={tech}
                className={cn(dsTokens.color.primarySoft, dsTokens.color.primary, "px-3 py-1 rounded-full text-xs font-medium")}
                role="listitem"
            >
                {tech}
            </span>
            ))}
        </div>
    )}