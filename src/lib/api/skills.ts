import { supabase } from "@/lib/supabase";
import type {
  SkillRow,
  SkillType,
  DbSkillType,
  UserSkillWithSkill,
} from "@/lib/database.types";

export const skillKeys = {
  all: ["skills"] as const,
  forUser: (userId: string | undefined) => ["user_skills", userId] as const,
};

/** All skills from the existing `skills` catalogue. */
export async function listSkills(): Promise<SkillRow[]> {
  const { data, error } = await supabase.from("skills").select("*").order("name", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export interface UserSkillsByType {
  offered: UserSkillWithSkill[];
  wanted: UserSkillWithSkill[];
}

/** A user's offered + wanted skills joined with the skill catalogue. */
export async function getUserSkills(userId: string): Promise<UserSkillsByType> {
  const { data, error } = await supabase
    .from("user_skills")
    .select("*, skill:skills(*)")
    .eq("user_id", userId)
    .order("id", { ascending: true });

  if (error) throw error;

  const rows = (data ?? []) as unknown as UserSkillWithSkill[];

  return {
    offered: rows.filter((r) => r.type === "OFFER"),
    wanted: rows.filter((r) => r.type === "WANT"),
  };
}


export async function addUserSkill(
  userId: string,
  skillId: number,
  type: SkillType,
): Promise<void> {
  const dbType: DbSkillType =
    type === "offered" ? "OFFER" : "WANT";

  const { error } = await supabase
    .from("user_skills")
    .insert({
      user_id: userId,
      skill_id: skillId,
      type: dbType,
    });

  if (error) throw error;
}

export async function removeUserSkill(userSkillId: number): Promise<void> {
  const { error } = await supabase.from("user_skills").delete().eq("id", userSkillId);
  if (error) throw error;
}

/** Deterministic pastel colour class per skill name, used by skill chips. */
export function skillTone(name: string): "primary" | "tertiary" | "secondary" | "neutral" {
  const tones = ["primary", "tertiary", "secondary", "neutral"] as const;
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) | 0;
  return tones[Math.abs(hash) % tones.length] ?? "primary";
}

const SKILL_ICONS: Record<string, string> = {
  react: "code",
  javascript: "terminal",
  html: "data_object",
  css: "palette",
  python: "smart_toy",
  java: "coffee",
  excel: "table_chart",
  powerpoint: "slideshow",
  photoshop: "image",
  canva: "brush",
  "graphic design": "design_services",
  "video editing": "movie_edit",
  photography: "photo_camera",
  "digital marketing": "campaign",
  "social media marketing": "share",
  "content writing": "edit_note",
  english: "translate",
  gujarati: "translate",
  hindi: "translate",
};

/** Material Symbol name for a skill, with a sensible fallback. */
export function skillIcon(name: string): string {
  return SKILL_ICONS[name.trim().toLowerCase()] ?? "auto_awesome";
}
