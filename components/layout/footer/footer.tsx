import { SocialLinksGroup } from "../../ui/social-networks/SocialLinksGroup";
import { FooterBranding } from "./footer-branding";

export function Footer() {

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <FooterBranding />
          <SocialLinksGroup variant="footer" />
        </div>
      </div>
    </footer>
  )
}
