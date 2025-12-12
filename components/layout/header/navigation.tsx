"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { menuItems } from "@/app/lib/data/navigation"
import { SCROLL_CONSTANTS } from "@/app/lib/constants/scroll"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("accueil")

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + SCROLL_CONSTANTS.SECTION_DETECTION_OFFSET

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - SCROLL_CONSTANTS.NAVIGATION_OFFSET
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("accueil")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Retour à l'accueil"
          >
            <Image
              src="/images/logokphotoroomombre.webp"
              alt="Logo KARVANEG"
              width={64}
              height={64}
              className="w-16 h-16"
              priority
            />
            <span
              className="text-3xl font-bold tracking-widest font-cinzel bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient"
              aria-label="KARVANEG"
            >
              KARVANEG
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <Button size="sm" onClick={() => scrollToSection("contact")}>
              Me contacter
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border" role="menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
                role="menuitem"
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-3">
              <Button className="w-full" onClick={() => scrollToSection("contact")}>
                Me contacter
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
