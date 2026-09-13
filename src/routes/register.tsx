import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { AuthCard, fieldClass, labelClass } from "@/components/auth/AuthCard";
import { ensureProfile, updateProfile, uploadProfilePhoto } from "@/lib/api/profiles";
import { describeError, supabase } from "@/lib/supabase";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — SkillSwap" },
      { name: "description", content: "Join SkillSwap and start exchanging skills with your community." },
      { property: "og:title", content: "Create account — SkillSwap" },
      { property: "og:description", content: "Join SkillSwap and start exchanging skills with your community." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", location: "" });
  const [photo, setPhoto] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    if (!form.name.trim()) return setError("Please enter your full name.");
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return setError("Please enter a valid email address.");
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");
    if (form.password !== form.confirm) return setError("Passwords do not match.");

    setBusy(true);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email.trim(),
        password: form.password,
        options: {
          emailRedirectTo: window.location.origin,
          data: { name: form.name.trim(), location: form.location.trim() || null },
        },
      });
      if (signUpError) throw signUpError;
      if (!data.session || !data.user) {
        toast.success("Check your email to confirm your account, then sign in.");
        navigate({ to: "/login" });
        return;
      }
      await ensureProfile(data.user, { name: form.name.trim(), location: form.location.trim() || null });
      if (photo) {
        try {
          const url = await uploadProfilePhoto(data.user.id, photo);
          await updateProfile(data.user.id, { profile_photo: url });
        } catch (photoError) {
          toast.error(`Account created, but the photo upload failed: ${describeError(photoError)}`);
        }
      }
      toast.success("Welcome to SkillSwap!");
      navigate({ to: "/dashboard", replace: true });
    } catch (err) {
      setError(describeError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Teach what you know, learn what you love."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>Full Name</span>
          <input className={fieldClass} autoComplete="name" value={form.name} onChange={set("name")} placeholder="Alex Johnson" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>Email</span>
          <input className={fieldClass} type="email" autoComplete="email" value={form.email} onChange={set("email")} placeholder="you@example.com" />
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Password</span>
            <input className={fieldClass} type="password" autoComplete="new-password" value={form.password} onChange={set("password")} placeholder="Min. 6 characters" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Confirm Password</span>
            <input className={fieldClass} type="password" autoComplete="new-password" value={form.confirm} onChange={set("confirm")} placeholder="Repeat password" />
          </label>
        </div>
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>
            Location <span className="text-on-surface-variant font-normal">(optional)</span>
          </span>
          <input className={fieldClass} autoComplete="address-level2" value={form.location} onChange={set("location")} placeholder="City, Region" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>
            Profile Photo <span className="text-on-surface-variant font-normal">(optional)</span>
          </span>
          <input
            className="font-body-sm text-body-sm text-on-surface-variant file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border-0 file:bg-surface-container-high file:text-primary file:font-label-sm hover:file:bg-surface-container-highest"
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
          />
        </label>
        {error && <p className="font-body-sm text-body-sm text-error bg-error-container/40 px-3 py-2 rounded-lg">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-secondary-container transition-colors disabled:opacity-60"
        >
          {busy ? "Creating account…" : "Create account"}
        </button>
      </form>
    </AuthCard>
  );
}
