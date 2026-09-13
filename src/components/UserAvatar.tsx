import { cn } from "@/lib/utils";
import { Icon } from "@/components/Icon";
import { initialsOf } from "@/lib/api/profiles";

interface UserAvatarProps {
  name?: string | null | undefined;
  src?: string | null | undefined;
  className?: string | undefined;
  /** Tailwind size classes, e.g. "w-8 h-8". */
  sizeClass?: string | undefined;
  textClass?: string | undefined;
  /** Show generic person icon instead of initials when there is no photo. */
  iconFallback?: boolean | undefined;
}

/** Profile photo with graceful fallback to initials (or a person icon). */
export function UserAvatar({
  name,
  src,
  className,
  sizeClass = "w-8 h-8",
  textClass = "text-[13px]",
  iconFallback = false,
}: UserAvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name ? `${name}'s profile photo` : "Profile photo"}
        className={cn("rounded-full object-cover shrink-0", sizeClass, className)}
        loading="lazy"
      />
    );
  }
  return (
    <div
      className={cn(
        "rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-label-md font-bold",
        sizeClass,
        textClass,
        className,
      )}
      aria-label={name ?? "Profile"}
    >
      {iconFallback || !name ? <Icon name="person" size={18} /> : initialsOf(name)}
    </div>
  );
}
