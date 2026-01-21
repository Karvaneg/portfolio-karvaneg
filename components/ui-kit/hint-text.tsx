import { cn } from '@/lib/utils';

interface HintTextProps {
  children: React.ReactNode;
  className?: string;
}

export function HintText({ children, className }: HintTextProps) {
  return <p className={cn('text-xs text-muted-foreground/80 italic', className)}>{children}</p>;
}
