import { cn } from '@/lib/utils';
import { ProjectLinks } from './project-links';
import { ProjectTitle } from './project-title';

interface ProjectHeaderProps {
  header: {
    title: string;
    github: string | null;
    live: string | null;
  };
}

export function ProjectHeader({ header }: ProjectHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between')}>
      <ProjectTitle title={header.title} />
      <ProjectLinks links={header} />
    </div>
  );
}
