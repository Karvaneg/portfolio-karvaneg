import { profileData } from "@/app/lib/data/profile";
import Image from "next/image";

export function HeroImageProfil() {
  return (
    <div className="shrink-0">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-2xl shadow-primary/20 hover:ring-primary/50 transition-all duration-300">
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