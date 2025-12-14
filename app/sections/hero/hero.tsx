import { profileData } from "@/app/lib/data/profile"
import { SocialLinksGroup } from "@/components/ui/SocialLinksGroup"
import Image from "next/image"
import { dsTokens } from "@/design-system/tokens"

export function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
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

          <div className="space-y-8 flex-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-balance">{profileData.name}</h1>
              <p className={`text-xl md:text-2xl ${dsTokens.color.onSurface}`}>{profileData.title}</p>
            </div>

            <p className={`text-lg md:text-xl ${dsTokens.color.onSurface} max-w-2xl text-pretty leading-relaxed`}>
              {profileData.description}
            </p>

            <nav className="flex gap-4 pt-4" aria-label="Liens de contact">
              <SocialLinksGroup className={`${dsTokens.color.onSurface} hover:text-foreground`} iconClassName={dsTokens.size.iconLg} />
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
