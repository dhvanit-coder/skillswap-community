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

export async function getAdminDashboardStats(): Promise<AdminDashboardStats> {
  const [
    usersResult,
    pendingResult,
    completedResult,
    skillsResult,
    ratingsResult,
  ] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),

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
    pendingResult.error,
    completedResult.error,
    skillsResult.error,
    ratingsResult.error,
  ].find(Boolean);

  if (firstError) {
    throw firstError;
  }

  const ratings = (ratingsResult.data ?? []) as Array<{
    rating: number | null;
  }>;

  const validRatings = ratings
    .map((row) => row.rating)
    .filter((rating): rating is number => typeof rating === "number");

  const averageRating =
    validRatings.length > 0
      ? validRatings.reduce((sum, rating) => sum + rating, 0) /
        validRatings.length
      : 0;

  const { data: userSkills, error: userSkillsError } = await supabase
    .from("user_skills")
    .select("user_id");

  if (userSkillsError) {
    throw userSkillsError;
  }

  const activeSwappers = new Set(
    (userSkills ?? []).map((row) => row.user_id),
  ).size;

  return {
    totalUsers: usersResult.count ?? 0,
    activeSwappers,
    pendingSwaps: pendingResult.count ?? 0,
    completedSwaps: completedResult.count ?? 0,
    totalSkills: skillsResult.count ?? 0,
    averageRating: Number(averageRating.toFixed(2)),
    totalReviews: validRatings.length,
  };
}

export async function getRecentUsers(limit = 5): Promise<ProfileRow[]> {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw error;
  }

  return (data ?? []) as ProfileRow[];
}