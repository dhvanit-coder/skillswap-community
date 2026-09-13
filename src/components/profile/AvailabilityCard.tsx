import { Icon } from "@/components/Icon";
import { AVAILABILITY_OPTIONS } from "@/lib/api/profiles";
import { cn } from "@/lib/utils";

interface AvailabilityCardProps {
  selected: string[];
  editable: boolean;
  onChange?: ((next: string[]) => void) | undefined;
}

/** "My Availability" card — multi-select of session windows. */
export function AvailabilityCard({ selected, editable, onChange }: AvailabilityCardProps) {
  const toggle = (key: string) => {
    if (!editable || !onChange) return;
    onChange(selected.includes(key) ? selected.filter((k) => k !== key) : [...selected, key]);
  };
  const timezone = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "Local";

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(15,23,42,0.04)] flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2.5">
            <Icon name="calendar_month" size={22} className="text-primary" />
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">My Availability</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            When are you free for 1-on-1 virtual swap sessions?
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
          <Icon name="schedule" size={16} />
          <span suppressHydrationWarning>Current Timezone: {timezone}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {AVAILABILITY_OPTIONS.map((opt) => {
          const checked = selected.includes(opt.key);
          return (
            <label
              key={opt.key}
              className={cn(
                "availability-card relative flex items-start gap-3.5 p-4 rounded-xl transition-all",
                checked ? "bg-primary-fixed/30 ring-2 ring-primary" : "bg-surface-container-low",
                editable ? "cursor-pointer hover:bg-surface-container" : "cursor-default",
              )}
            >
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 rounded text-primary accent-primary"
                checked={checked}
                disabled={!editable}
                onChange={() => toggle(opt.key)}
              />
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                  <Icon name={opt.icon} size={18} className={checked ? "text-primary" : "text-outline"} />
                  {opt.label}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{opt.description}</span>
              </div>
              <Icon
                name={checked ? "check_circle" : "radio_button_unchecked"}
                size={20}
                className={cn("ml-auto", checked ? "text-tertiary" : "text-outline-variant")}
              />
            </label>
          );
        })}
      </div>
      {!editable && selected.length === 0 && (
        <p className="font-body-sm text-body-sm text-on-surface-variant -mt-1">
          No availability set yet — switch to edit mode to pick your free windows.
        </p>
      )}
    </div>
  );
}
