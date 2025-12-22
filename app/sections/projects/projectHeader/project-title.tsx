import { SectionSubTitle } from "@/components/ui-kit/section-sub-title";
import { cn } from "@/lib/utils";

interface ProjectTitleProps {
  title: string;
}
export function ProjectTitle ({ title }: ProjectTitleProps) {
  return (
    <div className={cn("flex items-start justify-between gap-4")}>
        <SectionSubTitle className={cn("group-hover:text-primary transition-colors")}>
            {title}
        </SectionSubTitle>
    </div>
  )}