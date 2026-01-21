import { cn } from '@/lib/utils';

interface ExperiencePeriodProps {
  period: string;
}

export function ExperiencePeriod({ period }: ExperiencePeriodProps) {
  return (
    <div className={cn('text-sm text-muted-foreground uppercase tracking-wide pt-1')}>{period}</div>
  );
}
