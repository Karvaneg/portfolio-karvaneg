"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SCROLL_CONSTANTS } from "@/app/lib/constants/scroll"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Gère l'apparition du bouton
  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SCROLL_CONSTANTS.SCROLL_TO_TOP_THRESHOLD)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!isVisible) return null

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      onClick={handleClick}
      size="icon"
      aria-label="Retour en haut de page"
      className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </Button>
  )
}
