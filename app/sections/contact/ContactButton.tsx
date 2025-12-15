import { contactData } from "@/app/lib/data/contact";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function ContactButton() {
    return(
        <div className="pt-4">
            <Button asChild size="lg" className="gap-2">
              <a href={`mailto:${contactData.email}`}>
                <Mail className="w-5 h-5" aria-hidden="true" />
                Me contacter
              </a>
            </Button>
        </div>
    )
}