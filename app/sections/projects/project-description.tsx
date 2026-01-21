import { cn } from '@/lib/utils';

interface ProjectDescriptionProps {
  description: string;
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <p className={cn('text-muted-foreground text-sm leading-relaxed text-pretty')}>{description}</p>
  );
}
