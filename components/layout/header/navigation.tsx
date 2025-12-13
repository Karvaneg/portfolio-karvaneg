"use client"

import { NavigationProps } from "@/types/header"
import { DesktopMenu } from "./DesktopMenu"
import { ToggleMenuButton } from "./ToggleMenuButton"

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
      <ToggleMenuButton
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
    </>
  )
}
