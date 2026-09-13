import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
  /** Font size in px. */
  size?: number;
  title?: string;
}

/** Material Symbols icon (font is loaded in the root route). */
export function Icon({ name, className, filled = false, size, title }: IconProps) {
  return (
    <span
      aria-hidden={title ? undefined : true}
      title={title}
      className={cn("material-symbols-outlined select-none", filled && "filled", className)}
      style={size ? { fontSize: size } : undefined}
    >
      {name}
    </span>
  );
}
