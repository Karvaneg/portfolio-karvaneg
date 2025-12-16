"use client"

import { ReactNode } from "react"

interface MobileMenuWrapperProps {
  isOpen: boolean
  children: ReactNode
}

export function MobileMenuWrapper({ isOpen, children }: MobileMenuWrapperProps) {
  return (
    <div
      className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  )
}

