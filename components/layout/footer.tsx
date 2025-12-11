import { footerData } from "@/app/lib/data/footer"
import { SocialLinksGroup } from "../ui/SocialLinksGroup";

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {currentYear} {footerData.name} - {footerData.title}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{footerData.tagline}</p>
          </div>

          <SocialLinksGroup />
        </div>
      </div>
    </footer>
  )
}
