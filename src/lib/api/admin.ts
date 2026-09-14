import { supabase } from "@/lib/supabase";
import type { ProfileRow } from "@/lib/database.types";

export type AdminDashboardStats = {
  totalUsers: number;
  activeSwappers: number;
  pendingSwaps: number;
  completedSwaps: number;
  totalSkills: number;
  averageRating: number;
  totalReviews: number;
};

/**
 * Loads the live summary values shown in the Admin Dashboard.
 *
 * The Supabase session must belong to an admin. RLS should allow admins to
 * read the rows needed by these aggregate queries.
 */
export async function getAdminDashboardStats(): Promise<AdminDashboardStats> {
  const [usersResult, activeUsersResult, pendingResult, completedResult, skillsResult, ratingsResult] =
    await Promise.all([
      supabase.from("profiles").select("id", { count: "exact", head: true }),
      supabase.from("user_skills").select("user_id", { count: "exact", head: true }),
      supabase
        .from("swap_requests")
        .select("id", { count: "exact", head: true })
        .eq("status", "PENDING"),
      supabase
        .from("swap_requests")
        .select("id", { count: "exact", head: true })
        .eq("status", "COMPLETED"),
      supabase.from("skills").select("id", { count: "exact", head: true }),
      supabase.from("ratings").select("rating"),
    ]);

  const firstError = [
    usersResult.error,
    activeUsersResult.error,
    pendingResult.error,
    completedResult.error,
    skillsResult.error,
    ratingsResult.error,
  ].find(Boolean);

  if (firstError) throw firstError;

  const ratings = (ratingsResult.data ?? []) as Array<{ rating: number | null }>;
  const validRatings = ratings
    .map((row) => row.rating)
    .filter((rating): rating is number => typeof rating === "number");

  const averageRating =
    validRatings.length > 0
      ? validRatings.reduce((sum, rating) => sum + rating, 0) / validRatings.length
      : 0;

  return {
    totalUsers: usersResult.count ?? 0,
    // user_skills contains one row per skill assignment. The dashboard needs
    // unique users, so fetch the IDs when an exact active-user count is needed.
    activeSwappers: await getActiveSwapperCount(),
    pendingSwaps: pendingResult.count ?? 0,
    completedSwaps: completedResult.count ?? 0,
    totalSkills: skillsResult.count ?? 0,
    averageRating: Number(averageRating.toFixed(2)),
    totalReviews: validRatings.length,
  };
}

async function getActiveSwapperCount(): Promise<number> {
  const { data, error } = await supabase
    .from("user_skills")
    .select("user_id");

  if (error) throw error;

  return new Set((data ?? []).map((row) => row.user_id)).size;
}

/** Loads a small set of recent public profile fields for future dashboard use. */
export async function getRecentUsers(limit = 5): Promise<ProfileRow[]> {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return (data ?? []) as ProfileRow[];
}
