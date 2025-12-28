import { aboutData } from "@/app/lib/data/about";
import { SectionSubTitle } from "@/components/ui-kit/section/section-sub-title";
import { TechBadgeList } from "@/components/ui-kit/tech-badge/tech-badge-list";
import { cn } from "@/lib/utils";

export function Technologies() {
  return (
    <div className={cn("pt-8")}>
      <SectionSubTitle className={cn("mb-4")}>Technologies que j&apos;utilise :</SectionSubTitle>
      <TechBadgeList
        technologies={aboutData.technologies}
        className="pt-2"
      />
    </div>
  )
}