import { experiences } from "@/app/lib/data/experience"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { ExperienceTechnologies } from "./ExperienceTechnologies"
import { ExperienceDescription } from "./ExperienceDescription"
import { ExperiencePeriod } from "./ExperiencePeriod"
import { ExperienceTitle } from "./ExperienceTitle"

export function Experience() {
  return (
    <SectionContainer id="experience">
        <SectionTitle>Expérience</SectionTitle>
        <div className="space-y-12">
        {experiences.map((exp, index) => (
            <div key={index} className="group relative">
                <div className="grid md:grid-cols-[200px_1fr] gap-4">
                    <ExperiencePeriod period={exp.period} />
                    <div className="space-y-4">
                        <ExperienceTitle title={exp.title} company={exp.company} link={exp.link} />
                        <ExperienceDescription description={exp.description} />
                        <ExperienceTechnologies technologies={exp.technologies} />
                    </div>
                </div>
            </div>
        ))}
        </div>
    </SectionContainer>
  )
}
