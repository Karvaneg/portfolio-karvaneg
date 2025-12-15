interface HintTextProps {
  children: React.ReactNode
  className?: string
}

export function HintText({ children, className }: HintTextProps) {
  return (
    <p className={`text-xs text-muted-foreground/80 italic ${className ?? ""}`}>
      {children}
    </p>
  )
}