import { SectionSubTitle } from "@/components/ui/SectionSubTitle";

interface ProjectTitleProps {
  title: string;
}
export function ProjectTitle ({ title }: ProjectTitleProps) {
  return (
    <div className="flex items-start justify-between gap-4">
        <SectionSubTitle className="group-hover:text-primary transition-colors">
            {title}
        </SectionSubTitle>
    </div>
  )}