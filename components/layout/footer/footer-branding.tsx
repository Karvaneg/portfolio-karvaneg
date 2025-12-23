import { footerData } from "@/app/lib/data/footer"
import { dsTokens } from "@/design-system/tokens"
import { cn } from "@/lib/utils"

export function FooterBranding() {
  const currentYear = new Date().getFullYear()

  return (
    <div className={cn("text-center md:text-left")}>
      <p className={cn("text-sm", dsTokens.color.textSecondary)}>
        {currentYear} {footerData.name} — {footerData.title}
      </p>
      <p className={cn("text-xs italic mt-1", dsTokens.color.textSecondary)}>
        {footerData.tagline}
      </p>
      <p className={cn("text-xs mt-1", dsTokens.color.textSecondary)}>
        {footerData.techline}
      </p>
    </div>
  )
}