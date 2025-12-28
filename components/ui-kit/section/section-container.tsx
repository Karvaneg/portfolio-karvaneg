import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({ id, children, className }: SectionContainerProps) {
  return (
    <section id={id} className={cn("min-h-screen flex items-center justify-center px-6 py-20", className)}>
      <div className={cn("max-w-6xl w-full")}>
        <div className={cn("space-y-12")}>
          {children}
        </div>
      </div>
    </section>
  );
}
