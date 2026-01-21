import { cn } from '@/lib/utils';

interface SectionSubTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionSubTitle({ children, className }: SectionSubTitleProps) {
  return <h3 className={cn('text-xl font-semibold', className)}>{children}</h3>;
}
