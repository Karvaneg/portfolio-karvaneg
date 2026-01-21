'use client';

import { cn } from '@/lib/utils';

interface MobileMenuWrapperProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export function MobileMenuWrapper({ isOpen, children }: MobileMenuWrapperProps) {
  return (
    <div
      className={cn(
        'md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
      )}
      aria-hidden={!isOpen}
    >
      <div className={cn('overflow-hidden')}>{children}</div>
    </div>
  );
}
