import { cn } from '@/lib/utils';
import { TechBadge } from './tech-badge';

export interface TechBadgeItem {
  label: string;
  starred?: boolean;
}

type TechBadgeEntry = string | TechBadgeItem;

interface TechBadgeListProps {
  technologies: readonly TechBadgeEntry[];
  size?: 'sm' | 'xs';
  className?: string;
  ariaLabel?: string;
}

export function TechBadgeList({
  technologies,
  size,
  className,
  ariaLabel = 'Technologies utilisées',
}: TechBadgeListProps) {
  return (
    <div role="list" aria-label={ariaLabel} className={cn('flex flex-wrap gap-2', className)}>
      {technologies.map((tech, index) => {
        const entry = typeof tech === 'string' ? { label: tech } : tech;
        return <TechBadge key={`${entry.label}-${index}`} label={entry.label} size={size} starred={entry.starred} />;
      })}
    </div>
  );
}
