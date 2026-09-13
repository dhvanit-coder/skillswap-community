import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Icon } from "@/components/Icon";
import { UserAvatar } from "@/components/UserAvatar";
import { useAuth } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navBase =
  "px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface rounded-lg transition-colors";
const navActive = "bg-surface-container-high text-primary font-label-md text-label-md rounded-lg";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/explore", label: "Explore Skills" },
  { to: "/matches", label: "Smart Matches", badge: "New" },
  { to: "/swap-requests", label: "Swap Requests" },
] as const;

/** Header for signed-in pages (profile, explore, matches, settings, ...). */
export function AppHeader() {
  const { profile, user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const displayName = profile?.name || user?.email?.split("@")[0] || "Member";
  const subtitle = profile?.location || (isAdmin ? "Administrator" : "Community member");

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/explore", search: search.trim() ? { q: search.trim() } : {} });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(15,23,42,0.04)]">
      <div className="h-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <button
            type="button"
            aria-label="Open menu"
            className="xl:hidden p-2 -ml-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
          <BrandLogo to="/dashboard" />
          <nav className="hidden xl:flex items-center gap-space-xs">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${navBase} flex items-center gap-space-xs`}
                activeProps={{ className: navActive }}
              >
                <span>{item.label}</span>
                {"badge" in item && (
                  <span className="px-1.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <form onSubmit={submitSearch} className="items-center gap-space-md flex-1 max-w-xs mx-space-sm hidden md:flex">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-surface-container-low text-on-surface placeholder-on-surface-variant font-body-sm text-body-sm rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors"
              placeholder="Search skills, mentors..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>

        <div className="flex items-center gap-space-md">
          <Link
            to="/notifications"
            aria-label="Notifications"
            className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors"
            activeProps={{ className: "text-primary" }}
          >
            <span className="material-symbols-outlined text-[24px]">notifications</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-space-sm pl-space-xs rounded-lg hover:bg-surface-container-low transition-colors py-1 pr-1"
                aria-label="Account menu"
              >
                <UserAvatar name={profile?.name} src={profile?.profile_photo} iconFallback={!profile?.name} />
                <div className="hidden lg:flex flex-col text-left leading-tight">
                  <span className="font-label-md text-label-md text-on-surface">{displayName}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{subtitle}</span>
                </div>
                <span className="material-symbols-outlined hidden lg:block text-on-surface-variant text-[18px]">
                  expand_more
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-surface-container-lowest border-outline-variant/40">
              <DropdownMenuLabel className="font-label-md text-label-md text-on-surface">
                {displayName}
                <span className="block font-body-sm text-body-sm text-on-surface-variant font-normal truncate">
                  {user?.email}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile" className="flex items-center gap-2">
                  <Icon name="person" size={18} /> My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/skills" className="flex items-center gap-2">
                  <Icon name="school" size={18} /> My Skills
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/my-swaps" className="flex items-center gap-2">
                  <Icon name="sync_alt" size={18} /> My Swaps
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex items-center gap-2">
                  <Icon name="settings" size={18} /> Settings
                </Link>
              </DropdownMenuItem>
              {isAdmin && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center gap-2">
                      <Icon name="admin_panel_settings" size={18} /> Admin Console
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => void signOut()} className="flex items-center gap-2 text-error focus:text-error">
                <Icon name="logout" size={18} /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {mobileOpen && (
        <nav className="xl:hidden border-t border-outline-variant/30 bg-surface-container-lowest px-4 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`${navBase} flex items-center justify-between`}
              activeProps={{ className: navActive }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/skills" onClick={() => setMobileOpen(false)} className={navBase} activeProps={{ className: navActive }}>
            My Skills
          </Link>
          <Link to="/my-swaps" onClick={() => setMobileOpen(false)} className={navBase} activeProps={{ className: navActive }}>
            My Swaps
          </Link>
        </nav>
      )}
    </header>
  );
}
