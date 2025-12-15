import { contactData } from "@/app/lib/data/contact";

export function ContactDescription() {
    return(
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{contactData.description}</p>
    )
}