import { dsTokens } from "@/design-system/tokens"
import { cn } from "@/lib/utils"

interface ExperienceTechnologiesProps {
  technologies: readonly string[]
}

export function ExperienceTechnologies({ technologies }: ExperienceTechnologiesProps) {
  return (
    <div className={cn("flex flex-wrap gap-2")}>
        {technologies.map((tech) => (
        <span
          key={tech}
          className={cn(dsTokens.color.primarySoft, dsTokens.color.primary, "px-3 py-1 rounded-full text-xs font-medium")}
        >
          {tech}
        </span>
        ))}
    </div>           
  )
}