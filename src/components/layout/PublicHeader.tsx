import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { UserAvatar } from "@/components/UserAvatar";
import { useAuth } from "@/lib/auth";

const linkClass = "font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors";
const activeClass = "text-primary font-label-md";

/** Landing / Explore header. Shows Sign In + Get Started, or the account when signed in. */
export function PublicHeader() {
  const { isAuthenticated, profile, initializing } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        <BrandLogo to="/" />
        <nav className="hidden md:flex items-center gap-space-lg">
          <Link to="/" className={linkClass} activeProps={{ className: activeClass }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/explore" className={linkClass} activeProps={{ className: activeClass }}>
            Explore Skills
          </Link>
          <Link to="/" hash="how-it-works" className={linkClass}>
            How It Works
          </Link>
        </nav>
        <div className="flex items-center gap-space-md">
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-sm rounded-lg hover:bg-secondary-container transition-colors shadow-sm"
              >
                Go to Dashboard
              </Link>
              <Link to="/profile" aria-label="Your profile">
                <UserAvatar name={profile?.name} src={profile?.profile_photo} />
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors px-space-sm py-space-xs"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-space-md py-space-sm rounded-lg hover:bg-secondary-container transition-colors shadow-sm"
              >
                Get Started
              </Link>
              <div
                className={`w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0 hidden sm:flex ${initializing ? "opacity-60" : ""}`}
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
