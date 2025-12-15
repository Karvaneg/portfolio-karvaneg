import { SectionTitle } from "@/components/ui/SectionTitle"

export function SkillsHeader() {
  return (
    <div className="text-center mb-12">
      <SectionTitle className="mb-4 text-balance">Compétences & Expertises</SectionTitle>
      <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
        Un aperçu de mes compétences techniques et humaines acquises tout au long de mon parcours
      </p>
    </div>
  )
}