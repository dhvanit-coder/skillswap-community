import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const BRAND_LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1W4Spkdep_LLBlz854Q51Ppzy6Eofpzx4dgCOaO7ePnRM3ot6WgYzA7A1mhhDFWJkM-eeCgbhkwrisVJMQzp85wedHvIHfQSO85-SMbRRG9qh3cFq9KAC206DIy9obphhLqMvdGqn-yUWIyqELyrbH-85HdYIpuK9N9XahJAVlViU10IHXdl4Mn94rH9qJ-95b87X3kxXX3sHYYnch2ChJAa03nv1ZgM6fNQ65Kx7k1kt8D-AV_Q6r21Io";

interface BrandLogoProps {
  to?: "/" | "/dashboard";
  imgClass?: string;
  className?: string;
}

export function BrandLogo({ to = "/", imgClass = "h-8", className }: BrandLogoProps) {
  return (
    <Link to={to} className={cn("flex items-center gap-space-sm group", className)}>
      <img alt="SkillSwap Logo" className={cn("w-auto object-contain", imgClass)} src={BRAND_LOGO_URL} />
      <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
        SkillSwap
      </span>
    </Link>
  );
}
