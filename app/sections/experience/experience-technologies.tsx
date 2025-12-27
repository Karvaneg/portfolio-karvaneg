import { dsTokens } from "@/design-system/tokens"
import { cn } from "@/lib/utils"

interface ExperienceTechnologiesProps {
  technologies: readonly string[]
}

export function ExperienceTechnologies({ technologies }: ExperienceTechnologiesProps) {
  return (
    <div className={cn("flex flex-wrap gap-2")} role="list" aria-label="Technologies apprises">
        {technologies.map((tech) => (
        <span
          key={tech}
          className={cn(dsTokens.color.primarySoft, dsTokens.color.primary, dsTokens.radius.pill, "px-3 py-1 text-xs font-medium")}
          role="listitem"
        >
          {tech}
        </span>
        ))}
    </div>           
  )
}