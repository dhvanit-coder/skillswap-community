import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

interface VisibilityCardProps {
  isPublic: boolean;
  editable: boolean;
  onChange?: ((next: boolean) => void) | undefined;
}

const OPTIONS = [
  {
    value: true,
    emoji: "🌐",
    label: "Public Profile",
    description: "Other users can discover your profile, inspect your skill listings, and send you direct swap requests.",
  },
  {
    value: false,
    emoji: "🔒",
    label: "Private Profile",
    description: "Only limited profile information is visible. You can still initiate outgoing requests to others.",
  },
] as const;

/** "Profile Visibility" card — public / private radio choice. */
export function VisibilityCard({ isPublic, editable, onChange }: VisibilityCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(15,23,42,0.04)] flex flex-col gap-4">
      <div className="flex items-center gap-2.5">
        <Icon name="visibility" size={22} className="text-primary" />
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Profile Visibility</h2>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant -mt-2">
        Manage how your profile appears in search results and match feeds.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        {OPTIONS.map((opt) => {
          const checked = isPublic === opt.value;
          return (
            <label
              key={opt.label}
              className={cn(
                "relative flex flex-col p-4 rounded-xl transition-all",
                checked ? "bg-primary-fixed/20 ring-2 ring-primary" : "bg-surface-container-low",
                editable ? "cursor-pointer hover:bg-surface-container" : "cursor-default",
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[20px]">{opt.emoji}</span>
                  <span className="font-label-md text-label-md text-on-surface font-bold">{opt.label}</span>
                </div>
                <input
                  type="radio"
                  name="profile_visibility"
                  className="w-4 h-4 text-primary accent-primary"
                  checked={checked}
                  disabled={!editable}
                  onChange={() => onChange?.(opt.value)}
                />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{opt.description}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
}
