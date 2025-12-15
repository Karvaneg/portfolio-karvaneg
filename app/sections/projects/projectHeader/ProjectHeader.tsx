import { ProjectLinks } from "./ProjectLinks"
import { ProjectTitle } from "./ProjectTitle"

interface ProjectHeaderProps {
  header: {
    title: string;
    github: string | null;
    live: string | null;
  };
}

export function ProjectHeader ({ header }: ProjectHeaderProps) {
    return (
        <div className="flex items-center justify-between">
            <ProjectTitle title={header.title} />
            <ProjectLinks links={header} />
        </div>
    )}