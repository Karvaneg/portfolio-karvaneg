import { profileData } from "@/app/lib/data/profile";
import { dsTokens } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export function HeroDescriptionProfil() {
  return (
    <>
        <div className={cn("space-y-4")}>
            <h1 className={cn("text-5xl md:text-7xl font-bold text-balance")}>{profileData.name}</h1>
            <p className={cn("text-xl md:text-2xl", dsTokens.color.textSecondary)}>{profileData.title}</p>
        </div>
        <div className={cn("relative pl-6")}>
            {/* Barre verticale */}
            <span
                aria-hidden
                className={cn(
                "absolute left-0 top-1 bottom-1 w-[3px] rounded-full",
                dsTokens.color.borderBg,
                )}
            />
            <p className={cn("text-lg md:text-xl max-w-2xl text-pretty leading-relaxed", dsTokens.color.textSecondary)}>
                {profileData.description.map((desc) => (
                    <span key={desc.line}>
                        {desc.line}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    </>
  )
}