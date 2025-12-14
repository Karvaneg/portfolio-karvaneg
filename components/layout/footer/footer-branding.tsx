import { footerData } from "@/app/lib/data/footer"
import { dsTokens } from "@/design-system/tokens"

export function FooterBranding() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="text-center md:text-left">
      <p className={`text-sm ${dsTokens.color.onSurface}`}>
        {currentYear} {footerData.name} — {footerData.title}
      </p>
      <p className={`text-xs ${dsTokens.color.onSurface} mt-1`}>
        {footerData.tagline}
      </p>
    </div>
  )
}