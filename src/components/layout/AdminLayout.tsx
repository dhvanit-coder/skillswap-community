import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { UserAvatar } from "@/components/UserAvatar";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

const ADMIN_NAV = [
  { to: "/admin", label: "Admin Dashboard", icon: "dashboard", exact: true },
  { to: "/admin/users", label: "User Management", icon: "group" },
  { to: "/admin/swaps", label: "Swap Management", icon: "sync_alt" },
  { to: "/admin/skills", label: "Skills Management", icon: "auto_stories" },
  { to: "/admin/reports", label: "Reports & Feedback", icon: "flag" },
  { to: "/admin/announcements", label: "Announcements", icon: "campaign" },
  { to: "/settings", label: "Settings", icon: "settings" },
] as const;

const navBase =
  "flex items-center justify-between px-space-md py-space-sm rounded-xl text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high hover:text-on-surface transition-all group";
const navActive = "bg-primary-container text-on-primary font-label-md rounded-xl shadow-sm";

interface AdminLayoutProps {
  title: string;
  children: ReactNode;
}

/** Admin console shell: fixed sidebar + top bar (from the Stitch admin screens). */
export function AdminLayout({ title, children }: AdminLayoutProps) {
  const { profile, user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const displayName = profile?.name || user?.email || "Administrator";

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-on-surface/30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-space-lg">
          <div className="flex items-center gap-space-sm mb-space-xl">
            <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
              <Icon name="swap_horiz" size={20} />
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">SkillSwap</span>
              <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm uppercase tracking-wider">
                Admin
              </span>
            </div>
          </div>
          <div className="px-space-xs mb-space-sm">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Platform Console</span>
          </div>
          <nav className="flex flex-col gap-1">
            {ADMIN_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={navBase}
                activeProps={{ className: navActive }}
                activeOptions={{ exact: "exact" in item && item.exact }}
              >
                {({ isActive }) => (
                  <div className="flex items-center gap-3">
                    <Icon
                      name={item.icon}
                      size={20}
                      className={cn(isActive ? "text-on-primary" : "text-outline group-hover:text-primary transition-colors")}
                    />
                    <span>{item.label}</span>
                  </div>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-space-lg flex flex-col gap-space-md">
          <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse" />
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface">All Systems Operational</span>
              <span className="font-body-sm text-body-sm text-outline">Signed in as administrator</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-space-xs">
            <div className="flex items-center gap-3 min-w-0">
              <UserAvatar name={profile?.name} src={profile?.profile_photo} sizeClass="w-10 h-10" iconFallback />
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-on-surface leading-tight truncate">{displayName}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Sys Administrator</span>
              </div>
            </div>
            <button
              type="button"
              aria-label="Logout"
              onClick={() => void signOut()}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors shrink-0"
            >
              <Icon name="logout" size={20} />
            </button>
          </div>
        </div>
      </aside>

      <header className="fixed top-0 left-0 lg:left-72 right-0 h-16 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open menu"
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" size={22} />
          </button>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
            <Link to="/admin" className="hover:text-on-surface cursor-pointer transition-colors">
              SkillSwap Admin
            </Link>
            <Icon name="chevron_right" size={16} />
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">{title}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-80 hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">
              search
            </span>
            <input
              className="w-full pl-9 pr-14 py-1.5 rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Search users, swap IDs, logs..."
              type="text"
            />
            <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px]">
              ⌘K
            </kbd>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/dashboard"
              className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant hidden lg:inline-flex items-center gap-1.5 hover:text-on-surface"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
              Member view
            </Link>
            <Link
              to="/notifications"
              aria-label="Notifications"
              className="relative w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
            >
              <Icon name="notifications" size={20} />
            </Link>
            <UserAvatar name={profile?.name} src={profile?.profile_photo} iconFallback />
          </div>
        </div>
      </header>

      <div className="lg:pl-72">{children}</div>
    </div>
  );
}
