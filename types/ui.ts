import { ReactElement } from "react"

export interface SocialIconButtonProps {
  href: string
  label: string
  icon: ReactElement<{ className?: string }>
  className?: string
}

export interface SocialLink {
  id: string
  href: string
  label: string
  icon: ReactElement<{ className?: string }>
}