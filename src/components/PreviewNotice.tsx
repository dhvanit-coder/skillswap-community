import { Icon } from "@/components/Icon";

/** Small banner shown on screens whose live functionality ships in a later phase. */
export function PreviewNotice({ feature }: { feature: string }) {
  return (
    <div className="w-full bg-primary-fixed/60 border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2 flex items-center gap-2 font-label-sm text-label-sm text-on-primary-fixed">
        <Icon name="info" size={16} />
        <span>
          {feature} is showing sample data — live functionality arrives in the next phase.
        </span>
      </div>
    </div>
  );
}
