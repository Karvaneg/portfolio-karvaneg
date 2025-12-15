import { contactData } from "@/app/lib/data/contact"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { ContactDetails } from "./ContactDetails"
import { ContactDescription } from "./ContactDescription"
import { ContactFooterNote } from "./ContactFooterNote"
import { ContactButton } from "./ContactButton"

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="max-w-2xl mx-auto text-center space-y-8">
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
