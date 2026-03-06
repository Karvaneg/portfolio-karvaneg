import { cn } from '@/lib/utils';

interface ExperiencePeriodProps {
  period: string;
}

export function ExperiencePeriod({ period }: ExperiencePeriodProps) {
  return (
    <div className={cn('pt-1 text-sm uppercase tracking-wide text-foreground/80')}>{period}</div>
  );
}
