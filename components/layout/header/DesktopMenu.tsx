import { DesktopMenuProps } from "@/types/header"
import { MenuItemsList } from "./MenuItemsList"
import { ContactButton } from "./ContactButton"

export function DesktopMenu({ activeSection, onMenuClick, scrollToSection }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex items-center gap-8">
      <MenuItemsList
        activeSection={activeSection}
        onMenuClick={onMenuClick}
        itemClassName="text-sm font-medium"
      />
      <ContactButton onClick={() => scrollToSection("contact")} />
    </div>
  )
}