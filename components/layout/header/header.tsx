"use client"

import { cn } from "@/lib/utils"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { MobileMenuWrapper } from "./mobile-menu-wrapper"
import { Navigation } from "./navigation"
import { useHeaderLogic } from "@/app/hooks/use-header-logic"

export function Header() {
  const { activeSection, isOpen, toggleMenu, handleMenuClick, scrollToSection } = useHeaderLogic()

  return (
    <header>
      <nav
        className={cn("fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border")}
        aria-label="Navigation principale"
      >
        <div className={cn("container mx-auto px-4")}>
          <div className={cn("flex items-center justify-between h-16")}>
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
