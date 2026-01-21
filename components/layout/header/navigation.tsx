'use client';

import type { NavigationProps } from '@/types/header';
import { DesktopMenu } from './desktop-menu';
import { ToggleMenuButton } from './toggle-menu-button';

export function Navigation({
  activeSection,
  isOpen,
  toggleMenu,
  onMenuClick,
  scrollToSection,
}: NavigationProps) {
  return (
    <>
      <DesktopMenu
        activeSection={activeSection}
        onMenuClick={onMenuClick}
        scrollToSection={scrollToSection}
      />
      <ToggleMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
