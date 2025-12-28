import { dsTokens } from "@/design-system/tokens"
import { cn } from "@/lib/utils"

type TechBadgeSize = "sm" | "xs"

interface TechBadgeProps {
  label: string
  size?: TechBadgeSize
  className?: string
}

export function TechBadge({
  label,
  size = "sm",
  className,
}: TechBadgeProps) {
  return (
    <span
        role="listitem"
        className={cn(
            "relative overflow-hidden inline-flex items-center font-medium",
            "cursor-default select-none",
            dsTokens.color.primary,
            dsTokens.color.primarySoft,
            dsTokens.radius.pill,

            // tailles
            size === "sm" && "px-4 py-2 text-sm",
            size === "xs" && "px-3 py-1 text-xs",

            // micro feedback
            "transition-transform duration-200 ease-out",
            "hover:-translate-y-px",

            // reflet
            "after:absolute after:inset-0 after:content-['']",
            "after:bg-[linear-gradient(120deg,transparent_35%,rgba(255,255,255,0.2),transparent_65%)]",
            "after:-translate-x-full",

            // animation UNIQUEMENT à l'entrée
            "hover:after:translate-x-full hover:after:transition-transform hover:after:duration-700 hover:after:ease-out",

            className
        )}
        >
        {label}
    </span>
  )
}
