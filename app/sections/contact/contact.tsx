import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactData } from "@/app/lib/data/contact"
import { SectionTitle } from "@/components/ui/SectionTitle"

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <SectionTitle>{contactData.title}</SectionTitle>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{contactData.description}</p>

          <address className="flex flex-col items-center gap-4 pt-4 text-muted-foreground not-italic">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" aria-hidden="true" />
              <span>{contactData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" aria-hidden="true" />
              <a href={`tel:${contactData.phone}`} className="hover:text-foreground transition-colors">
                {contactData.phoneDisplay}
              </a>
            </div>
          </address>

          <div className="pt-4">
            <Button asChild size="lg" className="gap-2">
              <a href={`mailto:${contactData.email}`}>
                <Mail className="w-5 h-5" aria-hidden="true" />
                Me contacter
              </a>
            </Button>
          </div>

          <div className="pt-12 text-sm text-muted-foreground">
            <p>{contactData.footerNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
