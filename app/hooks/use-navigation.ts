"use client"

import { useCallback, useState, useSyncExternalStore } from "react"
import { menuItems } from "@/app/lib/data/navigation"
import { SCROLL_CONSTANTS } from "@/app/lib/constants/scroll"

function getActiveSection() {
  if (typeof window === "undefined") return "accueil"

  const scrollPosition =
    window.scrollY + SCROLL_CONSTANTS.SECTION_DETECTION_OFFSET

  for (let i = menuItems.length - 1; i >= 0; i--) {
    const section = document.getElementById(menuItems[i].id)
    if (section && section.offsetTop <= scrollPosition) {
      return menuItems[i].id
    }
  }

  return "accueil"
}

function subscribe(callback: () => void) {
  let rafId: number | null = null
  const handler = () => {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        callback()
        rafId = null
      })
    }
  }

  window.addEventListener("scroll", handler)
  return () => {
    window.removeEventListener("scroll", handler)
    if (rafId !== null) cancelAnimationFrame(rafId)
  }
}


export function useActiveSection() {
  return useSyncExternalStore(
    subscribe,
    getActiveSection,
    () => "accueil" // SSR fallback
  )
}

export function useMenuState() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])


  return { isOpen, toggleMenu, closeMenu }
}

export function useScrollToSection() {
  const scrollToSection = (sectionId: string) => {
    if (typeof window === "undefined") return

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
