import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";
import { skillIcon } from "@/lib/api/skills";
import { useAddUserSkill, useRemoveUserSkill, useSkillCatalog, useUserSkills } from "@/hooks/useSkills";
import type { SkillRow, SkillType, UserSkillWithSkill } from "@/lib/database.types";

const COPY: Record<
  SkillType,
  { title: string; subtitle: string; icon: string; tone: "primary" | "secondary"; empty: string; placeholder: string }
> = {
  offered: {
    title: "Skills I Offer",
    subtitle: "Skills you can teach or mentor other community members in.",
    icon: "school",
    tone: "primary",
    empty: "You haven't added any skills you can teach yet.",
    placeholder: "Search or pick from platform skills (e.g., React, Excel, Photoshop)...",
  },
  wanted: {
    title: "Skills I Want to Learn",
    subtitle: "Skills you would love to pick up from a swap partner.",
    icon: "lightbulb",
    tone: "secondary",
    empty: "Add a few skills you'd like to learn to unlock better matches.",
    placeholder: "Search or pick from platform skills (e.g., Python, Photography, Hindi)...",
  },
};

const toneClasses = {
  primary: {
    heading: "text-primary",
    count: "bg-primary-fixed text-on-primary-fixed",
    chip: "bg-primary-fixed/60 text-on-primary-fixed hover:bg-primary-fixed",
    chipIcon: "text-primary",
  },
  secondary: {
    heading: "text-secondary",
    count: "bg-secondary-fixed text-on-secondary-fixed",
    chip: "bg-secondary-fixed/60 text-on-secondary-fixed hover:bg-secondary-fixed",
    chipIcon: "text-secondary",
  },
} as const;

interface SkillChipProps {
  skill: UserSkillWithSkill;
  tone: "primary" | "secondary";
  onRemove?: (() => void) | undefined;
  removing?: boolean | undefined;
}

export function SkillChip({ skill, tone, onRemove, removing }: SkillChipProps) {
  const name = skill.skill?.name ?? "Unknown skill";
  const t = toneClasses[tone];
  return (
    <div
      className={cn(
        "skill-tag group inline-flex items-center gap-2 px-3.5 py-2 rounded-full font-label-md text-label-md shadow-xs transition-all",
        t.chip,
        removing && "opacity-50",
      )}
    >
      <Icon name={skillIcon(name)} size={16} className={t.chipIcon} />
      <span>{name}</span>
      {skill.level && (
        <span className={cn("px-2 py-0.5 rounded-full bg-surface-container-lowest font-label-sm text-[11px] font-bold", t.chipIcon)}>
          {skill.level}
        </span>
      )}
      {onRemove && (
        <button
          type="button"
          aria-label={`Remove ${name}`}
          disabled={removing}
          onClick={onRemove}
          className="ml-0.5 p-0.5 hover:text-error transition-colors disabled:opacity-50"
        >
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  );
}

interface SkillsCardProps {
  userId: string | undefined;
  type: SkillType;
  editable: boolean;
  className?: string | undefined;
}

/** "Skills I Offer" / "Skills I Want to Learn" card wired to the user_skills table. */
export function SkillsCard({ userId, type, editable, className }: SkillsCardProps) {
  const copy = COPY[type];
  const t = toneClasses[copy.tone];
  const [pickerOpen, setPickerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const userSkills = useUserSkills(userId);
  const catalog = useSkillCatalog();
  const add = useAddUserSkill(userId);
  const remove = useRemoveUserSkill(userId);

  const mine = userSkills.data?.[type] ?? [];
  const mineIds = useMemo(() => new Set(mine.map((s) => s.skill_id)), [mine]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const s of catalog.data ?? []) if (s.category) set.add(s.category);
    return [...set].sort();
  }, [catalog.data]);

  const suggestions: SkillRow[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (catalog.data ?? [])
      .filter((s) => !mineIds.has(s.id))
      .filter((s) => !category || s.category === category)
      .filter((s) => !q || s.name.toLowerCase().includes(q))
      .slice(0, 24);
  }, [catalog.data, mineIds, query, category]);

  const handleAdd = (skill: SkillRow) => {
    add.mutate({ skillId: skill.id, type });
    setQuery("");
  };

  return (
    <div
      className={cn(
        "bg-surface-container-lowest rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(15,23,42,0.04)] flex flex-col gap-4",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
        <div>
          <div className="flex items-center gap-2.5">
            <Icon name={copy.icon} size={22} className={t.heading} />
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{copy.title}</h2>
            <span className={cn("px-2.5 py-0.5 rounded-full font-label-sm text-label-sm", t.count)}>
              {mine.length} {mine.length === 1 ? "skill" : "skills"}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{copy.subtitle}</p>
        </div>
        {editable && (
          <button
            type="button"
            onClick={() => setPickerOpen((v) => !v)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md transition-colors self-start sm:self-auto"
          >
            <Icon name={pickerOpen ? "expand_less" : "add"} size={18} />
            <span>{pickerOpen ? "Done" : "Add Skill"}</span>
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2.5 pt-1">
        {userSkills.isPending && userId ? (
          <span className="font-body-sm text-body-sm text-on-surface-variant">Loading skills…</span>
        ) : mine.length === 0 ? (
          <span className="font-body-sm text-body-sm text-on-surface-variant">{copy.empty}</span>
        ) : (
          mine.map((s) => (
            <SkillChip
              key={s.id}
              skill={s}
              tone={copy.tone}
              onRemove={editable ? () => remove.mutate(s.id) : undefined}
              removing={remove.isPending && remove.variables === s.id}
            />
          ))
        )}
      </div>

      {editable && pickerOpen && (
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-surface-container-low mt-2">
          <div className="relative w-full">
            <Icon name="search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={copy.placeholder}
              type="text"
              autoFocus
            />
          </div>
          {categories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Quick categories:</span>
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(category === c ? null : c)}
                  className={cn(
                    "px-2.5 py-1 rounded-full text-label-sm font-label-sm transition-colors",
                    category === c
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {catalog.isPending ? (
              <span className="font-body-sm text-body-sm text-on-surface-variant">Loading catalogue…</span>
            ) : suggestions.length === 0 ? (
              <span className="font-body-sm text-body-sm text-on-surface-variant">No matching skills left to add.</span>
            ) : (
              suggestions.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  disabled={add.isPending}
                  onClick={() => handleAdd(s)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors disabled:opacity-60"
                >
                  <Icon name="add" size={14} />
                  {s.name}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
