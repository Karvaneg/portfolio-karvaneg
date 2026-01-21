import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ContactButtonProps } from '@/types/header';

export function ContactButton({ onClick, className }: ContactButtonProps) {
  return (
    <Button size="sm" onClick={onClick} className={cn('cursor-pointer', className)}>
      Me contacter
    </Button>
  );
}
