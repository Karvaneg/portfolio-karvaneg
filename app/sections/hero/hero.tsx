import { SocialLinksGroup } from "@/components/ui/social-networks/SocialLinksGroup"
import { HeroDescriptionProfil } from "./HeroDecriptionProfil"
import { HeroImageProfil } from "./HeroImageProfil"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="accueil" className={cn("min-h-screen flex items-center justify-center px-6 py-20")}>
      <div className={cn("max-w-6xl w-full")}>
        <div className={cn("flex flex-col md:flex-row items-center gap-12")}>
          <HeroImageProfil />
          <div className={cn("space-y-8 flex-1")}>
            <HeroDescriptionProfil />
            <SocialLinksGroup />
          </div>
        </div>
      </div>
    </section>
  )
}
