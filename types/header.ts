export interface LogoProps {
  scrollToSection: (sectionId: string) => void
}

export interface NavigationProps {
  activeSection: string
  isOpen: boolean
  toggleMenu: () => void
  onMenuClick: (sectionId: string) => void
  scrollToSection: (sectionId: string) => void
}

export interface MenuItemButtonProps {
  item: { id: string; label: string }
  activeSection: string
  onClick: () => void
  className?: string
  role?: string
  ariaCurrent?: boolean
}

export interface DesktopMenuProps {
  activeSection: string
  onMenuClick: (sectionId: string) => void
  scrollToSection: (sectionId: string) => void
}

export interface MobileMenuProps {
  activeSection: string
  isOpen: boolean
  onMenuClick: (sectionId: string) => void
  scrollToSection: (sectionId: string) => void
}

export interface MenuItemsListProps {
  activeSection: string
  onMenuClick: (sectionId: string) => void
  itemClassName: string
  role?: string
}

export interface ContactButtonProps {
  onClick: () => void
  className?: string
}

export interface ToggleMenuButtonProps {
  isOpen: boolean
  toggleMenu: () => void
}