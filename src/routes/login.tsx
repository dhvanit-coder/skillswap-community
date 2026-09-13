import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { AuthCard, fieldClass, labelClass } from "@/components/auth/AuthCard";
import { describeError, supabase } from "@/lib/supabase";

const searchSchema = z.object({ redirect: z.string().optional() });

export const Route = createFileRoute("/login")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Sign in — SkillSwap" },
      { name: "description", content: "Sign in to SkillSwap to manage your skills, matches and swaps." },
      { property: "og:title", content: "Sign in — SkillSwap" },
      { property: "og:description", content: "Sign in to SkillSwap to manage your skills, matches and swaps." },
    ],
  }),
  component: LoginPage,
});

function safeRedirect(target: string | undefined) {
  return target && target.startsWith("/") && !target.startsWith("//") ? target : "/dashboard";
}

function LoginPage() {
  const navigate = useNavigate();
  const { redirect } = Route.useSearch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    if (!email.trim() || !password) return setError("Please enter your email and password.");
    setBusy(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (signInError) return setError(describeError(signInError));
    toast.success("Welcome back!");
    navigate({ to: safeRedirect(redirect), replace: true });
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to continue swapping skills."
      footer={
        <>
          New to SkillSwap?{" "}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>Email</span>
          <input className={fieldClass} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>Password</span>
          <input className={fieldClass} type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
        </label>
        {error && <p className="font-body-sm text-body-sm text-error bg-error-container/40 px-3 py-2 rounded-lg">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-secondary-container transition-colors disabled:opacity-60"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </AuthCard>
  );
}
