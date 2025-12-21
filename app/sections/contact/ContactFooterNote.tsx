import { contactData } from "@/app/lib/data/contact";
import { dsTokens } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export function ContactFooterNote () {
    return (
        <div className={cn("pt-12 text-sm", dsTokens.color.textSecondary)}>
            <p>{contactData.footerNote}</p>
        </div>
    )
}