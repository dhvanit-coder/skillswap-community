import type { User } from "@supabase/supabase-js";
import { PROFILE_PHOTO_BUCKET, supabase } from "@/lib/supabase";
import type { ProfileRow, ProfileUpdate } from "@/lib/database.types";

export const profileKeys = {
  all: ["profiles"] as const,
  detail: (id: string | undefined) => ["profiles", id] as const,
  publicList: () => ["profiles", "public"] as const,
};

/** Fetch a single profile row (RLS decides visibility). */
export async function getProfile(id: string): Promise<ProfileRow | null> {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data;
}

/** Fetch public profiles for Explore / user pages. */
export async function listPublicProfiles(limit = 24): Promise<ProfileRow[]> {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("is_public", true)
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data ?? [];
}

/** Update the signed-in user's own profile. Only whitelisted columns are sent. */
export async function updateProfile(
  id: string,
  patch: ProfileUpdate,
): Promise<ProfileRow> {
  const allowed: ProfileUpdate = {};

  if (patch.name !== undefined) allowed.name = patch.name;
  if (patch.location !== undefined) allowed.location = patch.location;
  if (patch.bio !== undefined) allowed.bio = patch.bio;
  if (patch.profile_photo !== undefined)
    allowed.profile_photo = patch.profile_photo;
  if (patch.availability !== undefined)
    allowed.availability = patch.availability;
  if (patch.is_public !== undefined) allowed.is_public = patch.is_public;

  const { error } = await supabase
    .from("profiles")
    .update(allowed)
    .eq("id", id);

  if (error) throw error;

  // Fetch the profile separately after updating it.
  const { data, error: fetchError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (fetchError) throw fetchError;
  if (!data) throw new Error("Profile was updated but could not be loaded.");

  return data;
}

/**
 * Makes sure a profile row exists after registration.
 * If the database trigger already created it we only fill in the extra fields;
 * otherwise we insert the row ourselves (never a password).
 */
export async function ensureProfile(
  user: User,
  extras: { name: string; location?: string | null },
): Promise<ProfileRow> {
  const existing = await getProfile(user.id);
  if (existing) {
    const patch: ProfileUpdate = {};
    if (!existing.name && extras.name) patch.name = extras.name;
    if (!existing.location && extras.location) patch.location = extras.location;
    if (Object.keys(patch).length === 0) return existing;
    return updateProfile(user.id, patch);
  }
  const { data, error } = await supabase
    .from("profiles")
    .insert({
      id: user.id,
      name: extras.name,
      email: user.email ?? null,
      location: extras.location ?? null,
      is_public: true,
      role: "user",
    })
    .select("*")
    .single();
  if (error) throw error;
  return data;
}

/** Uploads a profile photo to Storage and returns its public URL. */
export async function uploadProfilePhoto(userId: string, file: File): Promise<string> {
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const path = `${userId}/avatar-${Date.now()}.${ext}`;
  const { error } = await supabase.storage.from(PROFILE_PHOTO_BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: true,
    ...(file.type ? { contentType: file.type } : {}),
  });
  if (error) throw error;
  const { data } = supabase.storage.from(PROFILE_PHOTO_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

/* ---------------- Availability helpers ---------------- */

export interface AvailabilityOption {
  key: string;
  label: string;
  description: string;
  icon: string;
}

export const AVAILABILITY_OPTIONS: AvailabilityOption[] = [
  { key: "weekday-mornings", label: "Weekday Mornings", description: "Mornings and mid-day slots", icon: "today" },
  { key: "weekday-evenings", label: "Weekday Evenings", description: "After 6:00 PM local time", icon: "dark_mode" },
  { key: "weekends", label: "Weekends", description: "Saturday & Sunday (Flexible)", icon: "weekend" },
  { key: "flexible", label: "Flexible / Ad-hoc", description: "Ad-hoc coordination via chat", icon: "bolt" },
];

/** The `availability` column is stored as a comma-separated list of option keys. */
export function parseAvailability(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed.startsWith("[")) {
      try {
        const parsed: unknown = JSON.parse(trimmed);
        if (Array.isArray(parsed)) return parsed.map(String);
      } catch {
        /* fall through to comma parsing */
      }
    }
    return trimmed
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

export function serializeAvailability(keys: string[]): string | null {
  return keys.length ? keys.join(",") : null;
}

export function availabilityLabels(value: unknown): string[] {
  const keys = parseAvailability(value);
  return keys.map((k) => AVAILABILITY_OPTIONS.find((o) => o.key === k)?.label ?? k);
}

/* ---------------- Display helpers ---------------- */

export function initialsOf(name: string | null | undefined): string {
  if (!name) return "?";
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export function profileCompletion(
  profile: ProfileRow | null | undefined,
  offeredCount: number,
  wantedCount: number,
): number {
  if (!profile) return 0;
  const checks = [
    Boolean(profile.name),
    Boolean(profile.profile_photo),
    Boolean(profile.location),
    Boolean(profile.bio),
    parseAvailability(profile.availability).length > 0,
    offeredCount > 0,
    wantedCount > 0,
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}
