import { contactData } from "@/app/lib/data/contact";
import { Button } from "@/components/ui/button";
import { dsTokens } from "@/design-system/tokens";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

export function ContactButton() {
    return(
        <div className={cn("pt-4")}>
            <Button asChild size="lg" className={cn("gap-2")}>
              <a href={`mailto:${contactData.email}`}>
                <Mail className={cn(dsTokens.size.iconMd)} aria-hidden="true" />
                Me contacter
              </a>
            </Button>
        </div>
    )
}