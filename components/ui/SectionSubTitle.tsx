interface SectionSubTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionSubTitle({ children, className }: SectionSubTitleProps) {
  return <h3 className={`text-xl font-semibold ${className || ''}`}>{children}</h3>;
}
