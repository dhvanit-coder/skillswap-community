import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

/**
 * Admin gate: only profiles with role = 'admin' may enter /admin/*.
 * Runs after the parent auth gate, so a session is guaranteed here.
 * (The database's Row Level Security remains the real authority.)
 */
export const Route = createFileRoute("/_authenticated/_admin")({
  beforeLoad: async ({ context }) => {
    const userId = context.session.user.id;
    const { data, error } = await supabase.from("profiles").select("role").eq("id", userId).maybeSingle();
    if (error || data?.role !== "admin") {
      throw redirect({ to: "/dashboard" });
    }
    return { isAdmin: true };
  },
  component: () => <Outlet />,
});
