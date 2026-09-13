import type { ReactNode } from "react";
import { AppHeader } from "@/components/layout/AppHeader";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useAuth } from "@/lib/auth";

interface AppLayoutProps {
  children: ReactNode;
  /** "public" = landing-style header; "app" = signed-in header; "auto" picks by session. */
  chrome?: "public" | "app" | "auto";
  footer?: "public" | "app" | "none";
}

/** Page shell: fixed header + content + footer, matching the Stitch screens. */
export function AppLayout({ children, chrome = "app", footer = "app" }: AppLayoutProps) {
  const { isAuthenticated } = useAuth();
  const usePublic = chrome === "public" || (chrome === "auto" && !isAuthenticated);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {usePublic ? <PublicHeader /> : <AppHeader />}
      {children}
      {footer !== "none" && <SiteFooter variant={footer} />}
    </div>
  );
}
