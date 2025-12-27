import { dsTokens } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

interface VerticalMarkerProps {
  className?: string;
  children: React.ReactNode;
}

export function VerticalMarker({ className, children }: VerticalMarkerProps) {
  return (
    <div className={cn("relative pl-6", className)}>
        <span
        aria-hidden
        className={cn(
            "absolute left-0 w-[3px] rounded-full top-1 bottom-1",  dsTokens.color.borderBg,
            className
        )}
        />
        {children}
    </div>
  );
}
