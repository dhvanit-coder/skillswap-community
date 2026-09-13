import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useRouter } from "@tanstack/react-router";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { getProfile, profileKeys } from "@/lib/api/profiles";
import type { ProfileRow } from "@/lib/database.types";

export interface AuthContextValue {
  /** Current Supabase session (null when signed out). */
  session: Session | null;
  user: User | null;
  /** Profile row for the signed-in user (null while loading / signed out). */
  profile: ProfileRow | null;
  profileLoading: boolean;
  isAdmin: boolean;
  /** True until the initial session has been read from storage. */
  initializing: boolean;
  isAuthenticated: boolean;
  refreshProfile: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [initializing, setInitializing] = useState(true);
  const queryClient = useQueryClient();
  const router = useRouter();
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!active) return;
        setSession(data.session);
      })
      .catch(() => undefined)
      .finally(() => {
        if (active) setInitializing(false);
      });

    // Single app-wide listener: keep session state fresh, refresh router + caches
    // on identity transitions only (not on token refresh / initial session).
    const { data: subscription } = supabase.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession);
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      router.invalidate();
      if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
    });

    return () => {
      active = false;
      subscription.subscription.unsubscribe();
    };
  }, [queryClient, router]);

  const user = session?.user ?? null;
  const userId = user?.id;

  const profileQuery = useQuery({
    queryKey: profileKeys.detail(userId),
    queryFn: () => getProfile(userId!),
    enabled: Boolean(userId),
    staleTime: 60_000,
  });

  const refreshProfile = useCallback(async () => {
    await queryClient.invalidateQueries({ queryKey: profileKeys.detail(userId) });
  }, [queryClient, userId]);

  const signOut = useCallback(async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    setSession(null);
    navigate({ to: "/", replace: true });
  }, [navigate, queryClient]);

  const profile = profileQuery.data ?? null;

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user,
      profile,
      profileLoading: Boolean(userId) && profileQuery.isPending,
      isAdmin: profile?.role === "admin",
      initializing,
      isAuthenticated: Boolean(session),
      refreshProfile,
      signOut,
    }),
    [session, user, profile, userId, profileQuery.isPending, initializing, refreshProfile, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
