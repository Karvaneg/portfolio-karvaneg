import { cn } from "@/lib/utils";
import { SocialLinksGroup } from "../../ui/social-networks/SocialLinksGroup";
import { FooterBranding } from "./footer-branding";

export function Footer() {

  return (
    <footer className={cn("bg-background border-t border-border py-8")}>
      <div className={cn("container mx-auto px-4")}>
        <div className={cn("flex flex-col md:flex-row items-center justify-between gap-4")}>
          <FooterBranding />
          <SocialLinksGroup variant="footer" />
        </div>
      </div>
    </footer>
  )
}
