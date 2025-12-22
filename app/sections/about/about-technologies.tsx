import { aboutData } from "@/app/lib/data/about";
import { SectionSubTitle } from "@/components/ui-kit/section-sub-title";
import { dsTokens } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export function Technologies() {
  return (
    <div className={cn("pt-8")}>
      <SectionSubTitle className={cn("mb-4")}>Technologies que j&apos;utilise :</SectionSubTitle>
      <div className={cn("flex flex-wrap gap-2")}>
        {aboutData.technologies.map((tech) => (
          <span key={tech} className={cn(
              "px-4 py-2 text-sm font-medium",
              dsTokens.color.primary,
              dsTokens.color.primarySoft,
              dsTokens.radius.lg
            )}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}