import { contactData } from "@/app/lib/data/contact";

export function ContactFooterNote () {
    return (
        <div className="pt-12 text-sm text-muted-foreground">
            <p>{contactData.footerNote}</p>
        </div>
    )
}