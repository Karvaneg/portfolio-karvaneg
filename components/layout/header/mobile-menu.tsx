import { MobileMenuProps } from "@/types/header"
import { MenuItemsList } from "./menu-items-list"
import { ContactButton } from "./contact-button"

export function MobileMenu({ activeSection, isOpen, onMenuClick, scrollToSection }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="md:hidden py-4 border-t border-border" role="menu">
      <MenuItemsList
        activeSection={activeSection}
        onMenuClick={onMenuClick}
        itemClassName="block w-full text-left px-4 py-3 text-sm font-medium"
        role="menuitem"
      />
      <div className="px-4 pt-3">
        <ContactButton onClick={() => scrollToSection("contact")} className="w-full" />
      </div>
    </div>
  )
}