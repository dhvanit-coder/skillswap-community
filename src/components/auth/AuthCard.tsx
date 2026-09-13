import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/layout/BrandLogo";

export const fieldClass =
  "w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all";
export const labelClass = "font-label-md text-label-md text-on-surface";

interface AuthCardProps {
  title: string;
  subtitle: string;
  footer: ReactNode;
  children: ReactNode;
}

/** Centered auth card shell shared by the Login and Register screens. */
export function AuthCard({ title, subtitle, footer, children }: AuthCardProps) {
  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center px-4 py-12">
      <div className="mb-8">
        <BrandLogo to="/" />
      </div>
      <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.06)] flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{title}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">{subtitle}</p>
        </div>
        {children}
      </div>
      <p className="mt-6 font-body-sm text-body-sm text-on-surface-variant">{footer}</p>
      <Link to="/" className="mt-2 font-label-sm text-label-sm text-primary hover:underline">
        Back to home
      </Link>
    </main>
  );
}
