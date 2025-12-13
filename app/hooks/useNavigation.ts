"use client"

import { useState, useEffect } from "react"
import { menuItems } from "@/app/lib/data/navigation"
import { SCROLL_CONSTANTS } from "@/app/lib/constants/scroll"

export function useActiveSection() {
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

  return activeSection
}

export function useMenuState() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return { isOpen, toggleMenu, closeMenu }
}

export function useScrollToSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - SCROLL_CONSTANTS.NAVIGATION_OFFSET
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return scrollToSection
}