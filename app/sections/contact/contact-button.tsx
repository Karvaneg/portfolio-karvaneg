"use client";

import { contactData } from "@/app/lib/data/contact";
import { buttonVariants } from "@/components/ui/button";
import { dsTokens } from "@/design-system/tokens";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

export function ContactButton() {
  return(
    <div className={cn("pt-4")}>
        <a
          href={`mailto:${contactData.email}`}
          aria-label={`Envoyer un email à ${contactData.email}`}
          className={cn(
            buttonVariants({ variant: "default", size: "default" }),
          )}>
          <Mail className={cn(dsTokens.size.iconMd)} aria-hidden="true" />
          Me contacter
        </a>
    </div>
  )
}