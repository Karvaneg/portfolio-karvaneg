import { dsTokens } from "@/design-system/tokens"
import { cn } from "@/lib/utils"

interface SkillItemProps {
  name: string
  level: number
}

export function SkillItem({ name, level }: SkillItemProps) {
  return (
    <div>
      <div className={cn("flex items-center justify-between mb-2")}>
        <span className={cn("text-sm font-medium")}>{name}</span>
        <span className={cn(dsTokens.color.textSecondary, "text-sm")} aria-label={`${level} pourcent`}>
          {level}%
        </span>
      </div>
      <div className={cn("h-2 bg-muted rounded-full overflow-hidden")}>
        <div
          className={cn(`h-full bg-primary transition-all duration-500 ease-out ${
            level >= 90
              ? "w-[90%]"
              : level >= 85
                ? "w-[85%]"
                : level >= 80
                  ? "w-4/5"
                  : level >= 75
                    ? "w-3/4"
                    : level >= 70
                      ? "w-[70%]"
                      : "w-3/5"
          }`)}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Niveau de compétence en ${name}`}
        />
      </div>
    </div>
  )
}