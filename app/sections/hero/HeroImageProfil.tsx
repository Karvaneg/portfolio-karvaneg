"use client";

import { useCopyToClipboard } from "@/app/hooks/use-copy-to-clipboard";
import { contactData } from "@/app/lib/data/contact";
import { profileData } from "@/app/lib/data/profile";
import Image from "next/image";

export function HeroImageProfil(){
     const { copy } = useCopyToClipboard()

    const handleClick = () => {
        copy(contactData.email, {
            action: "copy-email",
        })
    }
    return (
        <div className="shrink-0">
            <div 
                onClick={handleClick}
                onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleClick()
                }}
                role="button"
                tabIndex={0}
                aria-label="Copier l’adresse email"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-2xl shadow-primary/20 hover:ring-primary/50 transition-all duration-300 cursor-pointer"
            >
                <Image
                src={profileData.image || "/placeholder.svg"}
                alt={profileData.imageAlt}
                width={256}
                height={256}
                className="object-cover rounded-full"
                priority
                sizes="(max-width: 768px) 192px, 256px"
                />
            </div>
        </div>
    )
}