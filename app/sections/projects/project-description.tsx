import { cn } from '@/lib/utils';

interface ProjectDescriptionProps {
  description: string;
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <p className={cn('text-sm leading-relaxed text-pretty text-foreground/80')}>{description}</p>
  );
}
