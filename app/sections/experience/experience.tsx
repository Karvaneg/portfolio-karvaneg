import { experiences } from "@/app/lib/data/experience"
import { ExternalLink } from "lucide-react"
import Link from "next/link"


export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">Expérience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="grid md:grid-cols-[200px_1fr] gap-4">
                  <div className="text-sm text-muted-foreground uppercase tracking-wide pt-1">{exp.period}</div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {exp.title} · {exp.company}
                        {exp.link && (
                          <Link
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block ml-2 align-middle"
                          >
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        )}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
