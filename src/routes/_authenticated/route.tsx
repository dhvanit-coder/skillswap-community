import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

/**
 * Protected-route gate. Client-only (the session lives in localStorage), so
 * hard refreshes never loop through the server. Unauthenticated visitors are
 * sent to /login with the intended destination preserved.
 */
export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async ({ location }) => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({ to: "/login", search: { redirect: location.href } });
    }
    return { session: data.session };
  },
  component: () => <Outlet />,
});
