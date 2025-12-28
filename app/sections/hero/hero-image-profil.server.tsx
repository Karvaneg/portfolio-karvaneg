import Image from "next/image";
import { profileData } from "@/app/lib/data/profile";
import { dsTokens } from "@/design-system/tokens";
import { cn } from "@/lib/utils";
import { HeroImageProfilClient } from "./hero-image-profil.client";


export function HeroImageProfil() {
  return (
    <HeroImageProfilClient>
      <Image
        src={profileData.image}
        alt={profileData.imageAlt}
        width={256}
        height={256}
        priority
        sizes="(max-width: 768px) 192px, 256px"
        className={cn(dsTokens.radius.pill, "object-cover")}
      />
    </HeroImageProfilClient>
  );
}