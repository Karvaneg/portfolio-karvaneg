import { profileData } from "@/app/lib/data/profile";
import { VerticalMarker } from "@/components/ui-kit/vertical-maker";
import { dsTokens } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export function HeroDescriptionProfil() {
  return (
    <>
        <div className={cn("space-y-4")}>
            <h1 className={cn("text-5xl md:text-7xl font-bold text-balance")}>{profileData.name}</h1>
            <p className={cn("text-xl md:text-2xl", dsTokens.color.textSecondary)}>{profileData.title}</p>
        </div>
        
        <VerticalMarker>
            <div className={cn("text-lg md:text-xl max-w-2xl text-pretty leading-relaxed", dsTokens.color.textSecondary)}>
                {profileData.description.map((desc) => (
                    <p key={desc.line}>
                        {desc.line}
                    </p>
                ))}
            </div>
        </VerticalMarker>
    </>
  )
}