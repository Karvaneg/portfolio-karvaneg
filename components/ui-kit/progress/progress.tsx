
import { cn } from "@/lib/utils"
import { ProgressProps } from "@/types/ui-kit"
import { useId } from "react"
import { clamp, normalize } from "./progress.utils"

export function Progress({
  value,
  min = 0,
  max = 100,
  step,
  label,
  showValue = true,
  className,
}: ProgressProps) {
  const id = useId()

  const normalizedValue = clamp(normalize(value, step), min, max)
  const percentage = ((normalizedValue - min) / (max - min)) * 100

  return (
    <div className={cn("space-y-2", className)}>
      {/* Label */}
      <div className="flex items-center justify-between">
        <span id={id} className="text-sm font-medium">
          {label}
        </span>

        {showValue && (
          <span
            className="text-sm text-muted-foreground"
            aria-hidden="true"
          >
            {normalizedValue}
            {max === 100 && " %"}
          </span>
        )}
      </div>

      {/* Progressbar */}
      <div
        role="progressbar"
        aria-labelledby={id}
        aria-valuenow={normalizedValue}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={`${normalizedValue} sur ${max}`}
        tabIndex={0}
        className={cn(
          "relative h-2 overflow-hidden rounded-full bg-muted",
          "focus-visible:outline-2 focus-visible:outline-primary"
        )}
      >
        <div
          className="h-full bg-primary transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Fallback SR */}
      <p className="sr-only">
        {label} : {normalizedValue} sur {max}
      </p>
    </div>
  )
}
