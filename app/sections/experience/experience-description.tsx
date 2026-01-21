import { cn } from '@/lib/utils';

interface ExperienceDescriptionProps {
  description: string;
}

export function ExperienceDescription({ description }: ExperienceDescriptionProps) {
  return <p className={cn('text-muted-foreground leading-relaxed text-pretty')}>{description}</p>;
}
