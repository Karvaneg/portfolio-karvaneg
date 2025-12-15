interface ExperiencePeriodProps {
  period: string
}

export function ExperiencePeriod({ period }: ExperiencePeriodProps) {
  return (
    <div className="text-sm text-muted-foreground uppercase tracking-wide pt-1">{period}</div>
)}