export type ScrollToSection = (sectionId: string) => void;
export type OnMenuClick = (sectionId: string) => void;

export interface MenuItem {
  id: string;
  label: string;
}

export interface LogoProps {
  scrollToSection: ScrollToSection;
}

export interface NavigationProps {
  activeSection: string;
  isOpen: boolean;
  toggleMenu: () => void;
  onMenuClick: OnMenuClick;
  scrollToSection: ScrollToSection;
}

export interface MenuItemButtonProps {
  item: MenuItem;
  activeSection: string;
  onClick: () => void;
  className?: string;
  role?: string;
  ariaCurrent?: boolean;
}

export interface DesktopMenuProps {
  activeSection: string;
  onMenuClick: OnMenuClick;
  scrollToSection: ScrollToSection;
}

export interface MobileMenuProps {
  activeSection: string;
  isOpen: boolean;
  onMenuClick: OnMenuClick;
  scrollToSection: ScrollToSection;
}

export interface MenuItemsListProps {
  activeSection: string;
  onMenuClick: OnMenuClick;
  itemClassName: string;
  role?: string;
}

export interface ContactButtonProps {
  onClick: () => void;
  className?: string;
}

export interface ToggleMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
