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

export interface ProgressProps {
  value: number
  min?: number
  max?: number
  step?: number
  label: string
  showValue?: boolean
  className?: string
}