import { skillCategories } from "@/app/lib/data/skills"
import { SkillsHeader } from "./SkillsHeader"
import { SkillCategoryCard } from "./SkillCategoryCard"

export function Skills() {
  return (
    <section id="competences" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SkillsHeader />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
