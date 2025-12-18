import { profileData } from "@/app/lib/data/profile";
import { dsTokens } from "@/design-system/tokens";

export function HeroDescriptionProfil() {
  return (
    <>
        <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">{profileData.name}</h1>
            <p className={`text-xl md:text-2xl ${dsTokens.color.onSurface}`}>{profileData.title}</p>
        </div>
        
        <p className={`text-lg md:text-xl ${dsTokens.color.onSurface} max-w-2xl text-pretty leading-relaxed`}>
            {profileData.description}
        </p>
    </>
  )
}