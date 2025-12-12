import { footerData } from "@/app/lib/data/footer"

export function FooterBranding() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="text-center md:text-left">
      <p className="text-sm text-muted-foreground">
        {currentYear} {footerData.name} — {footerData.title}
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        {footerData.tagline}
      </p>
    </div>
  )
}