interface SectionSubTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionSubTitle({ children, className }: SectionSubTitleProps) {
  return <p className={`text-muted-foreground max-w-2xl mx-auto text-pretty ${className || ''}`}>{children}</p>;
}
