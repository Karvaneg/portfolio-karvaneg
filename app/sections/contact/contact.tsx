import { contactData } from "@/app/lib/data/contact"
import { SectionTitle } from "@/components/ui-kit/section-title"
import { ContactDetails } from "./contact-details"
import { ContactDescription } from "./contact-description"
import { ContactButton } from "./contact-button"
import { ContactFooterNote } from "./contact-footer-note"
import { cn } from "@/lib/utils"

export function Contact() {
  return (
    <section id="contact" className={cn("min-h-screen flex items-center justify-center px-6 py-20")}>
      <div className={cn("max-w-6xl w-full")}>
        <div className={cn("max-w-2xl mx-auto text-center space-y-8")}>
          <SectionTitle>{contactData.title}</SectionTitle>
          <ContactDescription />
          <ContactDetails />
          <ContactButton /> 
          <ContactFooterNote />
        </div>
      </div>
    </section>
  )
}
