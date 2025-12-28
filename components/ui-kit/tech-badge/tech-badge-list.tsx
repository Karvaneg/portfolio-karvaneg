import { cn } from "@/lib/utils"
import { TechBadge } from "./tech-badge"

interface TechBadgeListProps {
  technologies: readonly string[]
  size?: "sm" | "xs"
  className?: string
  ariaLabel?: string
}

export function TechBadgeList({
  technologies,
  size,
  className,
  ariaLabel = "Technologies utilisées",
}: TechBadgeListProps) {
  return (
    <div
      role="list"
      aria-label={ariaLabel}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {technologies.map((tech) => (
        <TechBadge key={tech} label={tech} size={size} />
      ))}
    </div>
  )
}
