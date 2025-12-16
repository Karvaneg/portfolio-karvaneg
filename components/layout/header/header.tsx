"use client"

import { Logo } from "./Logo"
import { MobileMenu } from "./MobileMenu"
import { MobileMenuWrapper } from "./MobileMenuWrapper"
import { Navigation } from "./Navigation"
import { useHeaderLogic } from "@/app/hooks/useHeaderLogic"

export function Header() {
  const { activeSection, isOpen, toggleMenu, handleMenuClick, scrollToSection } = useHeaderLogic()

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
        aria-label="Navigation principale"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo scrollToSection={scrollToSection} />
            <Navigation
              activeSection={activeSection}
              isOpen={isOpen}
              toggleMenu={toggleMenu}
              onMenuClick={handleMenuClick}
              scrollToSection={scrollToSection}
            />
          </div>
          <MobileMenuWrapper isOpen={isOpen}>
            <MobileMenu
              activeSection={activeSection}
              isOpen={isOpen}
              onMenuClick={handleMenuClick}
              scrollToSection={scrollToSection}
            />
          </MobileMenuWrapper>
        </div>
      </nav>
    </header>
  )
}
