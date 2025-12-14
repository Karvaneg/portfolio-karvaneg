import { ReactNode } from "react"

export interface SocialIconButtonProps {
  href: string
  label: string
  icon: ReactNode
  className?: string
}

export interface SocialLink {
  id: string
  href: string
  label: string
  icon: ReactNode
}