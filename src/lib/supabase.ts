import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

/**
 * Browser/SSR-safe Supabase client.
 *
 * Reads the public project URL + publishable/anon key that Lovable injects once
 * a Supabase project is connected (Project Settings → Connectors → Supabase).
 * Only public keys are ever used here — never a service-role key.
 */
const env = import.meta.env as Record<string, string | undefined>;
const supabaseUrl = env["VITE_SUPABASE_URL"];
const supabaseKey = env["VITE_SUPABASE_PUBLISHABLE_KEY"] ?? env["VITE_SUPABASE_ANON_KEY"];

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

export const BACKEND_NOT_CONNECTED_MESSAGE =
  "Your Supabase project isn't connected yet. Connect it under Project Settings → Connectors → Supabase, then reload.";

export const supabase = createClient<Database>(
  supabaseUrl ?? "https://not-connected.supabase.co",
  supabaseKey ?? "public-key-not-configured",
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
);

/** Storage bucket used for profile photos (public bucket expected). */
export const PROFILE_PHOTO_BUCKET = "avatars";

/** Normalises Supabase/PostgREST/Storage errors into a readable message. */
export function describeError(error: unknown): string {
  if (!isSupabaseConfigured) return BACKEND_NOT_CONNECTED_MESSAGE;
  if (!error) return "Something went wrong.";
  if (typeof error === "string") return error;
  if (error instanceof Error) {
    if (/failed to fetch|network/i.test(error.message)) {
      return "Could not reach the server. Check your connection and try again.";
    }
    return error.message;
  }
  if (typeof error === "object" && "message" in error && typeof (error as { message: unknown }).message === "string") {
    return (error as { message: string }).message;
  }
  return "Something went wrong.";
}
