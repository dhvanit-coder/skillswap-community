import { Link } from "@tanstack/react-router";
import { BRAND_LOGO_URL } from "@/components/layout/BrandLogo";

const linkClass = "font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors";

/** Footer used on the landing/public pages (full nav) and app pages (compact). */
export function SiteFooter({ variant = "app" }: { variant?: "public" | "app" }) {
  if (variant === "public") {
    return (
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg pb-space-lg border-b border-outline-variant/20">
            <Brand imgClass="h-7" />
            <nav className="flex flex-wrap items-center gap-x-space-lg gap-y-space-sm">
              <Link to="/" hash="how-it-works" className={linkClass}>
                How It Works
              </Link>
              <Link to="/explore" className={linkClass}>
                Explore Skills
              </Link>
              <a className={linkClass} href="#">
                About
              </a>
              <a className={linkClass} href="#">
                Contact
              </a>
              <a className={linkClass} href="#">
                Privacy
              </a>
              <a className={linkClass} href="#">
                Terms
              </a>
            </nav>
          </div>
          <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant">
            <p className="font-body-sm text-body-sm">© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
            <p className="font-label-sm text-label-sm text-outline">Crafted for peer-to-peer knowledge exchange.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(15,23,42,0.02)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-lg">
          <Brand imgClass="h-6" centered />
          <div className="flex flex-wrap items-center justify-center gap-space-lg">
            <a className={linkClass} href="#">
              Help Center
            </a>
            <a className={linkClass} href="#">
              Guidelines
            </a>
            <a className={linkClass} href="#">
              Privacy
            </a>
            <a className={linkClass} href="#">
              Terms
            </a>
          </div>
        </div>
        <div className="pt-space-md text-center md:text-left">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} SkillSwap Platform Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Brand({ imgClass, centered = false }: { imgClass: string; centered?: boolean }) {
  return (
    <div className={`flex flex-col gap-space-xs ${centered ? "items-center md:items-start" : ""}`}>
      <div className="flex items-center gap-space-sm">
        <img alt="SkillSwap Logo" className={`${imgClass} w-auto object-contain`} src={BRAND_LOGO_URL} />
        <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">SkillSwap</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Learn. Teach. Exchange. Grow.</p>
    </div>
  );
}
