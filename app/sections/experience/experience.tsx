import { experiences } from "@/app/lib/data/experience"
import { SectionContainer } from "@/components/ui-kit/section/section-container"
import { SectionTitle } from "@/components/ui-kit/section/section-title"
import { ExperienceDescription } from "./experience-description"
import { ExperienceTechnologies } from "./experience-technologies"
import { ExperiencePeriod } from "./experience-period"
import { ExperienceTitle } from "./experience-title"
import { cn } from "@/lib/utils"

export function Experience() {
  return (
    <SectionContainer id="experience">
        <SectionTitle>Expérience</SectionTitle>
        <div className={cn("space-y-12")}>
        {experiences.map((exp, index) => (
            <div key={index} className={cn("group relative")}>
                <div className={cn("grid md:grid-cols-[200px_1fr] gap-4")}>
                    <ExperiencePeriod period={exp.period} />
                    <div className={cn("space-y-4")}>
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
