import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/app/lib/data/projects"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ProjectScreen } from "./ProjectScreen"
import { ProjectHeader } from "./projectHeader/ProjectHeader"
import { ProjectTechnologies } from "./ProjectTechnologies"
import { ProjectDescription } from "./ProjectDescription"
import { HintText } from "@/components/ui/HintText"

export function Projects() {
  return (
    <SectionContainer id="projets">
        <SectionTitle>Projets Significatifs</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                        <ProjectScreen project={project} index={index} />
                        <div className="p-6 space-y-4">
                            <ProjectHeader header={project} />
                            <ProjectDescription description={project.description} />
                            {project.live && (
                                <HintText>
                                    {project.hint}
                                </HintText>
                            )}
                            <ProjectTechnologies technologies={project.technologies} />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </SectionContainer>
  )
}
