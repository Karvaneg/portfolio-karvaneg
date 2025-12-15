import { contactData } from "@/app/lib/data/contact";
import { MapPin, Phone } from "lucide-react";

export function ContactDetails () {
    return(
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
    )
}