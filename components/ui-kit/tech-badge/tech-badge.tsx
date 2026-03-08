import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

type TechBadgeSize = 'sm' | 'xs';

interface TechBadgeProps {
  label: string;
  size?: TechBadgeSize;
  className?: string;
  starred?: boolean;
}

export function TechBadge({ label, size = 'sm', className, starred = false }: TechBadgeProps) {
  return (
    <span
      role="listitem"
      className={cn(
        'relative overflow-hidden inline-flex items-center font-medium',
        'cursor-default select-none',
        dsTokens.color.primary,
        dsTokens.color.primarySoft,
        dsTokens.radius.pill,

        // tailles
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'xs' && 'px-3 py-1 text-xs',

        // micro feedback
        'transition-transform duration-200 ease-out',
        'hover:-translate-y-px',

        // reflet
        "after:absolute after:inset-0 after:content-['']",
        'after:bg-[linear-gradient(120deg,transparent_35%,rgba(255,255,255,0.2),transparent_65%)]',
        'after:-translate-x-full',

        // animation UNIQUEMENT à l'entrée
        'hover:after:translate-x-full hover:after:transition-transform hover:after:duration-700 hover:after:ease-out',

        className,
      )}
    >
      {starred ? (
        <Star
          aria-hidden="true"
          className={cn(
            'mr-1.5 fill-current text-amber-400',
            size === 'sm' && 'h-3.5 w-3.5',
            size === 'xs' && 'h-3 w-3',
          )}
        />
      ) : null}
      {label}
    </span>
  );
}
