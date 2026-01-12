import type { DesktopMenuProps } from "@/types/header"
import { MenuItemsList } from "./menu-items-list"
import { ContactButton } from "./contact-button"
import { cn } from "@/lib/utils"

export function DesktopMenu({ activeSection, onMenuClick, scrollToSection }: DesktopMenuProps) {
  return (
    <div className={cn("hidden md:flex items-center gap-8")}>
      <MenuItemsList
        activeSection={activeSection}
        onMenuClick={onMenuClick}
        itemClassName={cn("text-sm font-medium")}
      />
      <ContactButton onClick={() => scrollToSection("contact")} />
    </div>
  )
}