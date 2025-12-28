import { SectionTitle } from "@/components/ui-kit/section/section-title"
import { cn } from "@/lib/utils"

export function SkillsHeader() {
  return (
    <div className={cn("text-center mb-12")}>
      <SectionTitle className={cn("mb-4 text-balance")}>Compétences & Expertises</SectionTitle>
      <p className={cn("text-muted-foreground max-w-2xl mx-auto text-pretty")}>
        Un aperçu de mes compétences techniques et humaines acquises tout au long de mon parcours
      </p>
    </div>
  )
}