import { skillCategories } from "@/app/lib/data/skills"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionSubTitle } from "@/components/ui/SectionSubTitle"


export function Skills() {
  return (
    <section id="competences" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <SectionTitle className="mb-4 text-balance">Compétences & Expertises</SectionTitle>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Un aperçu de mes compétences techniques et humaines acquises tout au long de mon parcours
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <SectionSubTitle>{category.title}</SectionSubTitle>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground" aria-label={`${skill.level} pourcent`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-primary transition-all duration-500 ease-out ${
                              skill.level >= 90
                                ? "w-[90%]"
                                : skill.level >= 85
                                  ? "w-[85%]"
                                  : skill.level >= 80
                                    ? "w-4/5"
                                    : skill.level >= 75
                                      ? "w-3/4"
                                      : skill.level >= 70
                                        ? "w-[70%]"
                                        : "w-3/5"
                            }`}
                            role="progressbar"
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`Niveau de compétence en ${skill.name}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
