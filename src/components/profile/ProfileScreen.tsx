import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { UserAvatar } from "@/components/UserAvatar";
import { SkillsCard } from "@/components/skills/SkillsCard";
import { AvailabilityCard } from "@/components/profile/AvailabilityCard";
import { VisibilityCard } from "@/components/profile/VisibilityCard";
import { useAuth } from "@/lib/auth";
import { useUserSkills } from "@/hooks/useSkills";
import {
  parseAvailability,
  profileCompletion,
  profileKeys,
  serializeAvailability,
  updateProfile,
  uploadProfilePhoto,
} from "@/lib/api/profiles";
import { describeError } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import type { ProfileRow } from "@/lib/database.types";

const BIO_LIMIT = 500;

interface FormState {
  name: string;
  location: string;
  bio: string;
  availability: string[];
  isPublic: boolean;
}

function formFromProfile(profile: ProfileRow | null): FormState {
  return {
    name: profile?.name ?? "",
    location: profile?.location ?? "",
    bio: profile?.bio ?? "",
    availability: parseAvailability(profile?.availability),
    isPublic: profile?.is_public ?? true,
  };
}

function sameForm(a: FormState, b: FormState) {
  return (
    a.name === b.name &&
    a.location === b.location &&
    a.bio === b.bio &&
    a.isPublic === b.isPublic &&
    a.availability.length === b.availability.length &&
    a.availability.every((k) => b.availability.includes(k))
  );
}

function memberSince(created: string | undefined) {
  if (!created) return "—";
  const d = new Date(created);
  return Number.isNaN(d.getTime()) ? "—" : d.toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

const inputClass =
  "w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all";

/** The "My Profile" screen. `mode="edit"` renders the same layout with editing enabled. */
export function ProfileScreen({ mode }: { mode: "view" | "edit" }) {
  const editing = mode === "edit";
  const { user, profile, profileLoading } = useAuth();
  const userId = user?.id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormState>(() => formFromProfile(profile));
  const [baseline, setBaseline] = useState<FormState>(() => formFromProfile(profile));

  // Re-seed the form whenever a fresh profile arrives and the user has no unsaved edits.
  useEffect(() => {
    const fresh = formFromProfile(profile);
    setForm((current) => (sameForm(current, baseline) ? fresh : current));
    setBaseline(fresh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  const dirty = !sameForm(form, baseline);
  const skills = useUserSkills(userId);
  const offeredCount = skills.data?.offered.length ?? 0;
  const wantedCount = skills.data?.wanted.length ?? 0;
  const completion = useMemo(
    () => profileCompletion(profile, offeredCount, wantedCount),
    [profile, offeredCount, wantedCount],
  );

  const save = useMutation({
    mutationFn: () =>
      updateProfile(userId!, {
        name: form.name.trim(),
        location: form.location.trim() || null,
        bio: form.bio.trim() || null,
        availability: serializeAvailability(form.availability),
        is_public: form.isPublic,
      }),
    onSuccess: async (updated) => {
      queryClient.setQueryData(profileKeys.detail(userId), updated);
      await queryClient.invalidateQueries({ queryKey: profileKeys.all });
      toast.success("Profile updated");
      navigate({ to: "/profile" });
    },
    onError: (error) => toast.error(describeError(error)),
  });

  const photo = useMutation({
    mutationFn: async (file: File) => {
      const url = await uploadProfilePhoto(userId!, file);
      return updateProfile(userId!, { profile_photo: url });
    },
    onSuccess: async (updated) => {
      queryClient.setQueryData(profileKeys.detail(userId), updated);
      await queryClient.invalidateQueries({ queryKey: profileKeys.all });
      toast.success("Profile photo updated");
    },
    onError: (error) => toast.error(describeError(error)),
  });

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) return void toast.error("Please choose an image file.");
    if (file.size > 5 * 1024 * 1024) return void toast.error("Photos must be smaller than 5 MB.");
    photo.mutate(file);
  };

  const handleSave = () => {
    if (!form.name.trim()) return void toast.error("Please enter your name.");
    if (form.bio.length > BIO_LIMIT) return void toast.error(`Bio must be ${BIO_LIMIT} characters or fewer.`);
    save.mutate();
  };

  const handleCancel = () => {
    setForm(baseline);
    navigate({ to: "/profile" });
  };

  const displayName = profile?.name || user?.email || "Your profile";
  const isPublic = profile?.is_public ?? true;
  const modeBtn = (active: boolean) =>
    cn(
      "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-label-md text-label-md transition-all duration-200",
      active
        ? "bg-surface-container-lowest text-primary shadow-sm"
        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high",
    );

  return (
    <main className="w-full pt-20 bg-surface flex-1">
      <div className="flex flex-col w-full">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col gap-6">
          {/* Breadcrumb + mode switch */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-surface-container-lowest p-4 rounded-xl shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                <Link to="/dashboard" className="hover:text-primary transition-colors">
                  Dashboard
                </Link>
                <Icon name="chevron_right" size={16} className="text-outline" />
                <span className="text-on-surface font-headline-sm text-[15px] font-semibold">My Profile</span>
              </div>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-label-sm",
                  isPublic ? "bg-tertiary-fixed text-on-tertiary-fixed" : "bg-surface-container-high text-on-surface-variant",
                )}
              >
                <span className={cn("w-2 h-2 rounded-full", isPublic ? "bg-tertiary-container animate-pulse" : "bg-outline")} />
                {isPublic ? "Profile Status: Active & Discoverable" : "Profile Status: Private"}
              </div>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-low p-1.5 rounded-xl self-stretch sm:self-auto justify-between sm:justify-start">
              <div className="flex items-center gap-1">
                <Link to="/profile" className={modeBtn(!editing)}>
                  <Icon name="visibility" size={18} />
                  <span>Preview</span>
                </Link>
                <Link to="/profile/edit" className={modeBtn(editing)}>
                  <Icon name="edit" size={18} />
                  <span>Edit Profile Mode</span>
                </Link>
              </div>
            </div>
          </div>

          {editing && (
            <div className="flex items-center justify-between px-5 py-3 rounded-xl bg-primary-fixed text-on-primary-fixed shadow-sm">
              <div className="flex items-center gap-3">
                <Icon name="mode_edit_outline" size={22} className="text-primary" />
                <div>
                  <span className="font-headline-sm text-[15px] font-bold">Editing Mode Active</span>
                  <span className="font-body-sm text-body-sm text-on-primary-fixed-variant ml-2">
                    Make updates to your skills, availability, and biography. Don't forget to save.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Hero */}
          <div className="relative w-full bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] overflow-hidden">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
                <div className="relative group shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-surface-container-high ring-4 ring-tertiary-fixed-dim/40 shadow-md flex items-center justify-center overflow-hidden">
                    <UserAvatar
                      name={profile?.name}
                      src={profile?.profile_photo}
                      sizeClass="w-full h-full"
                      textClass="text-[28px]"
                    />
                  </div>
                  <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-tertiary-fixed-dim ring-4 ring-surface-container-lowest shadow-sm" />
                  <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                  <button
                    type="button"
                    disabled={photo.isPending || !userId}
                    onClick={() => fileInputRef.current?.click()}
                    className={cn(
                      "absolute inset-0 rounded-full bg-on-background/50 backdrop-blur-xs flex flex-col items-center justify-center text-on-primary transition-all duration-200",
                      photo.isPending ? "opacity-100" : "opacity-0 group-hover:opacity-100 focus-visible:opacity-100",
                    )}
                  >
                    <Icon name={photo.isPending ? "progress_activity" : "photo_camera"} size={24} className={photo.isPending ? "animate-spin" : ""} />
                    <span className="font-label-sm text-[10px] mt-0.5">{photo.isPending ? "Uploading" : "Change"}</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  {editing ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                      <label className="flex flex-col gap-1">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Full Name</span>
                        <input
                          className={inputClass}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          maxLength={80}
                        />
                      </label>
                      <label className="flex flex-col gap-1">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Location</span>
                        <input
                          className={inputClass}
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                          placeholder="City, Region"
                          maxLength={80}
                        />
                      </label>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h1 className="font-headline-lg text-[30px] lg:text-headline-lg text-on-surface tracking-tight">
                          {profileLoading ? "Loading…" : displayName}
                        </h1>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm",
                            isPublic ? "bg-tertiary-fixed text-on-tertiary-fixed" : "bg-surface-container-high text-on-surface-variant",
                          )}
                        >
                          <span className={cn("w-1.5 h-1.5 rounded-full", isPublic ? "bg-tertiary" : "bg-outline")} />
                          {isPublic ? "Public Profile" : "Private Profile"}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-body-sm font-body-sm text-on-surface-variant pt-1">
                        <div className="flex items-center gap-1">
                          <Icon name="location_on" size={18} className="text-outline" />
                          <span>{profile?.location || "Location not set"}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <div className="flex items-center gap-1 text-on-surface font-semibold bg-surface-container-low px-2 py-0.5 rounded-md">
                          <Icon name="star" size={16} filled className="text-amber-500" />
                          <span>{profile?.rating ? Number(profile.rating).toFixed(1) : "New"}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" />
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                          <Icon name="sync_alt" size={16} />
                          <span>
                            {offeredCount} offered · {wantedCount} wanted
                          </span>
                        </div>
                      </div>
                      {profile?.bio && (
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1 leading-relaxed line-clamp-2">
                          {profile.bio}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="flex sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0 mt-2 lg:mt-0">
                {editing ? (
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={save.isPending || !dirty}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-secondary-container transition-colors disabled:opacity-60"
                  >
                    <Icon name="check" size={18} />
                    <span>{save.isPending ? "Saving…" : "Save Changes"}</span>
                  </button>
                ) : (
                  <Link
                    to="/profile/edit"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-secondary-container transition-colors"
                  >
                    <Icon name="edit" size={18} />
                    <span>Edit Profile</span>
                  </Link>
                )}
                {userId && (
                  <Link
                    to="/user/$id"
                    params={{ id: userId }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors"
                  >
                    <Icon name="open_in_new" size={18} />
                    <span>View Public View</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Completion banner */}
          {completion < 100 && (
            <div className="relative w-full rounded-2xl bg-gradient-to-r from-primary-container via-primary to-secondary p-6 lg:p-7 text-on-primary shadow-md overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-on-primary/10 blur-2xl pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex flex-col gap-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-on-primary/15 backdrop-blur-md text-on-primary">
                      <Icon name="stars" size={20} />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm font-bold tracking-tight">Profile Completion</span>
                      <span className="px-2 py-0.5 rounded-full bg-on-primary/20 text-on-primary font-label-sm text-label-sm font-semibold">
                        {completion}% Complete
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-primary/90 leading-normal">
                    Complete your profile to get better skill matches.{" "}
                    {wantedCount === 0
                      ? "Add a skill you want to learn!"
                      : offeredCount === 0
                        ? "Add a skill you can teach!"
                        : !profile?.bio
                          ? "Tell others a little about yourself."
                          : "You're almost there!"}
                  </p>
                  <div className="w-full bg-on-primary/20 h-2.5 rounded-full overflow-hidden mt-1 backdrop-blur-xs">
                    <div
                      className="h-full rounded-full bg-tertiary-fixed transition-all duration-700 ease-out"
                      style={{ width: `${completion}%` }}
                    />
                  </div>
                </div>
                {!editing && (
                  <div className="shrink-0 flex items-center">
                    <Link
                      to="/profile/edit"
                      className="px-5 py-2.5 rounded-lg bg-on-primary text-primary hover:bg-surface-bright font-label-md text-label-md shadow-sm transition-all hover:scale-[1.02] flex items-center gap-2"
                    >
                      <span>Complete Profile</span>
                      <Icon name="arrow_forward" size={18} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* About */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <Icon name="person_pin" size={22} className="text-primary" />
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">About Me</h2>
                  </div>
                  {editing && (
                    <span
                      className={cn(
                        "font-label-sm text-label-sm bg-surface-container-low px-2.5 py-1 rounded-md",
                        form.bio.length > BIO_LIMIT ? "text-error" : "text-on-surface-variant",
                      )}
                    >
                      {form.bio.length} / {BIO_LIMIT} characters
                    </span>
                  )}
                </div>
                {editing ? (
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="aboutMeInput">
                      Bio & Exchange Philosophy
                    </label>
                    <textarea
                      id="aboutMeInput"
                      rows={5}
                      value={form.bio}
                      onChange={(e) => setForm({ ...form, bio: e.target.value })}
                      className="w-full p-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-[0_1px_3px_rgba(15,23,42,0.04)] focus:outline-none focus:bg-surface-container-low focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Share your background, teaching philosophy, and what projects you're excited to collaborate on..."
                    />
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Provide a genuine description of your skills and exchange goals to build trust with potential partners.
                    </p>
                  </div>
                ) : (
                  <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-3 whitespace-pre-line">
                    {profile?.bio ? (
                      <p>{profile.bio}</p>
                    ) : (
                      <p className="italic">
                        You haven't written a bio yet.{" "}
                        <Link to="/profile/edit" className="text-primary not-italic font-semibold hover:underline">
                          Add one
                        </Link>{" "}
                        so partners know what you're about.
                      </p>
                    )}
                  </div>
                )}
              </div>

              <SkillsCard userId={userId} type="offered" editable={editing} />
              <SkillsCard userId={userId} type="wanted" editable={editing} />

              <AvailabilityCard
                selected={form.availability}
                editable={editing}
                onChange={(availability) => setForm({ ...form, availability })}
              />
              <VisibilityCard
                isPublic={form.isPublic}
                editable={editing}
                onChange={(isPublicNext) => setForm({ ...form, isPublic: isPublicNext })}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-[18px] text-on-surface font-bold">Profile Details</h3>
                  {!editing && (
                    <Link to="/profile/edit" className="font-label-sm text-label-sm text-primary hover:underline font-semibold">
                      Edit Details
                    </Link>
                  )}
                </div>
                <div className="flex flex-col gap-4 font-body-sm text-body-sm">
                  <div className="flex flex-col gap-1 pb-3 bg-surface-container-low/50 p-3 rounded-lg">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Full Name</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{profile?.name || "—"}</span>
                  </div>
                  <div className="flex flex-col gap-1 pb-3 bg-surface-container-low/50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Email Address</span>
                      {user?.email_confirmed_at && (
                        <span className="inline-flex items-center gap-1 font-label-sm text-[11px] text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded-full font-bold">
                          <Icon name="check" size={12} />
                          Verified
                        </span>
                      )}
                    </div>
                    <span className="font-label-md text-label-md text-on-surface font-medium truncate">
                      {profile?.email || user?.email || "—"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-1">
                    <span className="text-on-surface-variant">Location</span>
                    <span className="font-semibold text-on-surface">{profile?.location || "—"}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-1">
                    <span className="text-on-surface-variant">Member Since</span>
                    <span className="font-semibold text-on-surface" suppressHydrationWarning>
                      {memberSince(profile?.created_at)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-1">
                    <span className="text-on-surface-variant">Visibility</span>
                    <div className="flex items-center gap-1.5">
                      <span className={cn("w-2 h-2 rounded-full", isPublic ? "bg-tertiary-container" : "bg-outline")} />
                      <span className="font-semibold text-on-surface">{isPublic ? "Public" : "Private"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container rounded-2xl p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                    <Icon name="hub" size={22} />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-[16px] text-on-surface font-bold">Skill Match Potential</h3>
                    <span className="font-label-sm text-label-sm text-tertiary font-semibold">
                      {offeredCount > 0 && wantedCount > 0 ? "Ready for matching" : "Needs a few more skills"}
                    </span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You offer <strong className="text-on-surface font-semibold">{offeredCount}</strong> skill
                  {offeredCount === 1 ? "" : "s"} and want to learn{" "}
                  <strong className="text-on-surface font-semibold">{wantedCount}</strong>. Smart Matches will use both
                  lists to find partners whose needs mirror yours.
                </p>
                <Link
                  to="/skills"
                  className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary hover:underline font-semibold"
                >
                  Manage skills
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating unsaved-changes bar */}
        {editing && dirty && (
          <div className="fixed bottom-6 inset-x-0 z-40 max-w-2xl mx-auto px-4 transition-all duration-300">
            <div className="w-full bg-inverse-surface text-inverse-on-surface p-4 rounded-2xl shadow-xl flex items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center gap-2 pl-2">
                <Icon name="pending_actions" size={22} className="text-tertiary-fixed" />
                <span className="font-label-md text-label-md">Unsaved profile edits</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 rounded-lg font-label-md text-label-md text-inverse-on-surface hover:bg-on-background/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={save.isPending}
                  className="px-5 py-2 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim font-label-md text-label-md font-bold shadow-md transition-all flex items-center gap-1.5 disabled:opacity-60"
                >
                  <Icon name="check" size={18} />
                  <span>{save.isPending ? "Saving…" : "Save Changes"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
