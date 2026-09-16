/** Imported Stitch screen (6). Static content until its feature phase is implemented. */
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export function MatchesScreen() {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  async function loadMatches() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    console.log("CURRENT USER:", user.id);

    const { data: mySkills, error: mySkillsError } = await supabase
      .from("user_skills")
      .select("skill_id, type")
      .eq("user_id", user.id);

    if (mySkillsError) {
      console.error("MY SKILLS ERROR:", mySkillsError);
      setLoading(false);
      return;
    }

    console.log("MY SKILLS:", mySkills);
    const offeredSkillIds = (mySkills ?? [])
  .filter((skill) => skill.type === "OFFER")
  .map((skill) => skill.skill_id);

const wantedSkillIds = (mySkills ?? [])
  .filter((skill) => skill.type === "WANT")
  .map((skill) => skill.skill_id);

console.log("MY OFFERED SKILLS:", offeredSkillIds);
console.log("MY WANTED SKILLS:", wantedSkillIds);
const { data: possibleMatches, error: matchesError } = await supabase
  .from("user_skills")
  .select("user_id, skill_id, type")
  .neq("user_id", user.id)
  .eq("type", "OFFER")
  .in("skill_id", wantedSkillIds);

if (matchesError) {
  console.error("MATCH SEARCH ERROR:", matchesError);
  setLoading(false);
  return;
}

console.log("POSSIBLE MATCHES:", possibleMatches);
const possibleUserIds = [
  ...new Set((possibleMatches ?? []).map((match) => match.user_id)),
];

let reciprocalMatches: any[] = [];

if (possibleUserIds.length > 0 && offeredSkillIds.length > 0) {
  const { data: wantedMatches, error: wantedMatchesError } =
    await supabase
      .from("user_skills")
      .select("user_id, skill_id, type")
      .in("user_id", possibleUserIds)
      .eq("type", "WANT")
      .in("skill_id", offeredSkillIds);

  if (wantedMatchesError) {
    console.error("RECIPROCAL MATCH ERROR:", wantedMatchesError);
    setLoading(false);
    return;
  }

  reciprocalMatches = wantedMatches ?? [];
}

console.log("RECIPROCAL MATCHES:", reciprocalMatches);
const matchedUserIds = [
  ...new Set(reciprocalMatches.map((match) => match.user_id)),
];

let profiles: any[] = [];

if (matchedUserIds.length > 0) {
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("id, name, location, rating, profile_photo")
    .in("id", matchedUserIds)
    .eq("is_public", true);

  if (profileError) {
    console.error("LOAD MATCH PROFILES ERROR:", profileError);
    setLoading(false);
    return;
  }

  profiles = profileData ?? [];
}

console.log("MATCH PROFILES:", profiles);
const skillIds = [
  ...new Set(
    reciprocalMatches
      .map((match) => match.skill_id)
      .filter((id): id is number => id !== null)
  ),
];

let skills: any[] = [];

if (skillIds.length > 0) {
  const { data: skillData, error: skillError } = await supabase
    .from("skills")
    .select("id, name")
    .in("id", skillIds);

  if (skillError) {
    console.error("LOAD MATCH SKILLS ERROR:", skillError);
    setLoading(false);
    return;
  }

  skills = skillData ?? [];
}

console.log("MATCH SKILLS:", skills);
const formattedMatches = reciprocalMatches
  .map((match) => {
    const profile = profiles.find(
      (item) => item.id === match.user_id
    );

    const skill = skills.find(
      (item) => item.id === match.skill_id
    );

    if (!profile || !skill) {
      return null;
    }

    const wantedSkill = skills.find(
      (item) =>
        item.id === offeredSkillIds[0]
    );

    return {
      userId: profile.id,
      name: profile.name,
      location: profile.location ?? "",
      rating: profile.rating ?? 0,
      profilePhoto: profile.profile_photo ?? "",
      offeredSkillId: match.skill_id,
      offeredSkillName: skill.name,
      wantedSkillId: wantedSkill?.id ?? null,
      wantedSkillName: wantedSkill?.name ?? "Skill",
    };
  })
  .filter(Boolean);

setMatches(formattedMatches);
console.log("FORMATTED MATCHES:", formattedMatches);

    setLoading(false);
  }

  loadMatches();
}, []);
  return (
    <main className="w-full bg-surface min-h-[calc(100vh-18rem)]">
      <div className="flex flex-col w-full">
        <div className="max-w-7xl mx-auto w-full px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl flex flex-col gap-space-lg lg:gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
              <a className="hover:text-primary transition-colors" href="#">Dashboard</a>
              <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              <span className="text-on-surface font-semibold">Smart Matches</span>
            </div>
            <div className="inline-flex items-center gap-2 self-start md:self-auto px-3 py-1 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
              </span>
              <span className="font-medium tracking-wide">Algorithmic Pairing Active</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-3xl">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Smart Matches</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">People who match your skills and learning goals. True 1-to-1 reciprocal barter pairing based on your offered and wanted skills.</p>
            </div>
            <div className="flex items-center gap-space-sm shrink-0">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm">PS</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm shadow-sm">SC</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm shadow-sm">RP</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm shadow-sm">+11</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline">14 peers active now</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-low via-surface-container-high to-surface-container p-space-lg lg:p-space-xl shadow-sm">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-container/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
              <div className="flex flex-col gap-space-sm max-w-3xl">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <span className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">hub</span>
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Your Best Complementary Matches</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">14 High-Synergy Matches Found</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">We found people whose skills complement yours. You teach what they want to learn, and they teach what you want to learn with shared calendar availability.</p>
                <div className="flex flex-wrap items-center gap-2 pt-space-xs">
                  <span className="font-label-sm text-label-sm text-outline">Active Profile:</span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-[16px]">person</span>
                    Alex Johnson
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm shadow-sm">
                    <strong className="text-primary">Teaching:</strong>
                    React, JS, HTML, CSS
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm shadow-sm">
                    <strong className="text-tertiary">Learning:</strong>
                    Photoshop, Graphic Design, Video Editing
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-outline text-[16px]">schedule</span>
                    Weekends & Evenings
                  </span>
                </div>
              </div>
              <button className="shrink-0 px-space-md py-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface text-primary font-label-md text-label-md font-semibold shadow-sm transition-all flex items-center gap-2 group" type="button">
                <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform">tune</span>
                Tune Match Preferences
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
              <div className="flex flex-wrap items-center gap-space-sm">
                <div className="relative">
                  <select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md py-2 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                    <option>Sort by: Highest Match % (Default)</option>
                    <option>Sort by: Most Active</option>
                    <option>Sort by: Highest Rated</option>
                    <option>Sort by: Newest Matches</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-2.5 text-outline text-[18px] pointer-events-none">expand_more</span>
                </div>
                <div className="relative">
                  <select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md py-2 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                    <option>Filter by Wanted Skill: All</option>
                    <option>Photoshop</option>
                    <option>Graphic Design</option>
                    <option>Video Editing</option>
                    <option>UI/UX Design</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-2.5 text-outline text-[18px] pointer-events-none">expand_more</span>
                </div>
                <div className="relative">
                  <select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md py-2 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                    <option>Availability: Any</option>
                    <option>Weekends</option>
                    <option>Weekday Evenings</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-2.5 text-outline text-[18px] pointer-events-none">expand_more</span>
                </div>
                <div className="relative">
                  <select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md py-2 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                    <option>Rating: 4.5+ ★</option>
                    <option>Rating: 4.8+ ★</option>
                    <option>All Ratings</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-2.5 text-outline text-[18px] pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs xl:pt-0">
                <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container cursor-pointer select-none">
                  <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox" />
                  <span className="font-label-sm text-label-sm text-on-surface font-medium">Mutual Perfect Match</span>
                </label>
                <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container cursor-pointer select-none">
                  <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox" />
                  <span className="font-label-sm text-label-sm text-on-surface font-medium">Verified Swappers Only</span>
                </label>
                <span className="font-label-sm text-label-sm text-outline ml-auto xl:ml-0 font-medium">Showing 4 top recommendations</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-lg">
            <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-tertiary" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="relative">
                    <img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Warm photographic studio portrait of Priya Shah, a creative female designer smiling confidently with soft natural lighting and minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFjoqExjoVmAWqBZbl4CP3gRS2iqH3XBKxmcfvxJlJz01kaFJpx7NyCMaVDnPisHU-LxGXV7mCUO-jxvOAQ0r0Y3YlfiaehwvjTlpVGlqB-6lNkqu1C7knJEVV17X0Ic49VSGh58zERIa8OoVEn2irk_HCKPEwJk9IPn6SURdHBDKTuEd7R4Ig63BXrmThB4GXzVUzW1ZBhUauk4aVQrzqWcWjjOeKKyaBtuSBd9Xy2ySYMclzsKcsmA" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-tertiary rounded-full ring-2 ring-surface-container-lowest flex items-center justify-center text-on-tertiary">
                      <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Priya Shah</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        Top Mentor & Fast Responder
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-space-sm gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        Ahmedabad, Gujarat
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        4.9
                        <span className="text-outline font-normal">(24 reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 p-space-xs sm:p-0 bg-surface-container-low sm:bg-transparent rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="font-display-xl-mobile sm:font-display-xl text-display-xl-mobile sm:text-display-xl text-tertiary font-extrabold leading-none tracking-tight">98%</span>
                    <span className="material-symbols-outlined text-tertiary text-[28px]">electric_bolt</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">Perfect Reciprocal Fit</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md p-space-md bg-surface-container-low rounded-xl">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-tertiary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">file_download</span>
                      THEY OFFER
                      <span className="text-on-surface-variant font-normal">(You Want)</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-tertiary font-semibold">3 Direct Matches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-tertiary" />
                      Photoshop
                      <span className="font-label-sm text-label-sm text-outline">[Advanced]</span>
                    </span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-tertiary" />
                      Graphic Design
                      <span className="font-label-sm text-label-sm text-outline">[Expert]</span>
                    </span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-outline-variant" />
                      Figma
                      <span className="font-label-sm text-label-sm text-outline">[Intermediate]</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">file_upload</span>
                      THEY WANT
                      <span className="text-on-surface-variant font-normal">(You Offer)</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">2 Direct Matches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      React.js
                      <span className="font-label-sm text-label-sm text-outline">[Needs Beg/Int]</span>
                    </span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      JavaScript
                      <span className="font-label-sm text-label-sm text-outline">[Wants Adv]</span>
                    </span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-outline-variant" />
                      Web Dev
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant px-space-xs">
                <span className="flex items-center gap-1.5 font-medium text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">event_available</span>
                  Available: Weekends (Saturdays & Sundays)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-outline">schedule</span>
                  IST (UTC+05:30) — Same Timezone!
                </span>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
                  Why this is a top match
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>You offer React & JavaScript — Priya actively wants to learn both!</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Priya offers Graphic Design & Photoshop — Exact matches for your learning wishlist!</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Weekend availability perfectly matches your Saturday & Sunday time slots.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Response rate 99% within 2 hours.</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-space-sm pt-space-xs">
                <button className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button">View Full Profile</button>
                <button className="px-space-lg py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-all flex items-center justify-center gap-2" type="button">
                  <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                  Request Swap
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-tertiary/80" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="relative">
                    <img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Headshot of Sarah Chen, professional female product designer with glasses in a modern sunlit architectural office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB93gHTyEE8Y6A0plQE-9Ii_D6RrwI_KJ6A50_OJ3jrJkrCh3Yr-nxvDFvcttY3bcEP3SFEpiT8R0LqdycA4vHppoxIeTEQgeXXCS5rZmdpDSp9gp76KPUMsWoq_OMPjhJy6rkZuEMTv14zdQVLm73ja1PUqQYUW7UYElWE2pBVQkRxZGZxSiRZZQLzjApaZOArWDWmqYUReCZ4viCJJlCy3axN4RiPdrnvjKYAHGxun0AmGz3TdkvH-Q" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-tertiary rounded-full ring-2 ring-surface-container-lowest flex items-center justify-center text-on-tertiary">
                      <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Sarah Chen</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">verified_user</span>
                        Verified Swapper
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-space-sm gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        Austin, TX
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        4.9
                        <span className="text-outline font-normal">(22 reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 p-space-xs sm:p-0 bg-surface-container-low sm:bg-transparent rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="font-display-xl-mobile sm:font-display-xl text-display-xl-mobile sm:text-display-xl text-tertiary font-extrabold leading-none tracking-tight">95%</span>
                    <span className="material-symbols-outlined text-tertiary text-[26px]">all_inclusive</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">High Synergy Match</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md p-space-md bg-surface-container-low rounded-xl">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-tertiary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">file_download</span>
                    THEY OFFER
                    <span className="text-on-surface-variant font-normal">(You Want)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">UI/UX Micro-copy</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Figma Tokens</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Design Systems</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">file_upload</span>
                    THEY WANT
                    <span className="text-on-surface-variant font-normal">(You Offer)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">React State Management</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Frontend Performance</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant px-space-xs">
                <span className="flex items-center gap-1.5 font-medium text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">event_available</span>
                  Available: Weekends & Evenings
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-outline">schedule</span>
                  CST (UTC-6)
                </span>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
                  Why this is a match
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>High mutual synergy: Figma Design Systems ⇄ React Components</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Both prefer project-based pair sessions (1 hr / week)</span>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Verified identity & 18 successful swaps completed</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-space-sm pt-space-xs">
                <button className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button">View Full Profile</button>
                <button className="px-space-lg py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-all flex items-center justify-center gap-2" type="button">
                  <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                  Request Swap
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="relative">
                    <img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Portrait photo of Rohan Patel, a 3D digital artist with creative casual style in a studio filled with digital tablets and art prints" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB82u285DJNKKkX2rlCiwPqywFk-uQ_uXx1DlXV18ZhbOzY3uV-2tIYBwGd5b-ivqpMewoTU5R4Q9YI2IA0L67qBH70Ae8m1V1PsQ36ejVm9Y0_ssmHyZ6M5DNDvaKBzOGQ6p5LN7f9VMeRAYJ66CkAZQBr8ErWUb5AnwxGVbRXORXq8POcH5JBPBR71VchB9zD5cTZChG-b5a3UZcudEFbT5GIBx2FwcXQz_XC4NYrAne_BfuvbdUIBQ" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-secondary rounded-full ring-2 ring-surface-container-lowest flex items-center justify-center text-on-secondary">
                      <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Rohan Patel</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">near_me</span>
                        Local Swapper
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-space-sm gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        Ahmedabad, Gujarat
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        4.8
                        <span className="text-outline font-normal">(18 reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 p-space-xs sm:p-0 bg-surface-container-low sm:bg-transparent rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="font-display-xl-mobile sm:font-display-xl text-display-xl-mobile sm:text-display-xl text-secondary font-extrabold leading-none tracking-tight">91%</span>
                    <span className="material-symbols-outlined text-secondary text-[26px]">handshake</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">Strong Skill Match</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md p-space-md bg-surface-container-low rounded-xl">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-tertiary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">file_download</span>
                    THEY OFFER
                    <span className="text-on-surface-variant font-normal">(You Want)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">3D Graphic Design</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Blender Basics</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Adobe Illustrator</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">file_upload</span>
                    THEY WANT
                    <span className="text-on-surface-variant font-normal">(You Offer)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Modern CSS Architecture</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Tailwind CSS</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant px-space-xs">
                <span className="flex items-center gap-1.5 font-medium text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-secondary">event_available</span>
                  Available: Weekday Evenings (after 7 PM)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-outline">schedule</span>
                  Flexible in-person or virtual
                </span>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
                  Why this is a match
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Mutual skill exchange: Blender & Illustrator ⇄ CSS & Tailwind</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Same city (Ahmedabad) with flexible in-person or virtual options</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-space-sm pt-space-xs">
                <button className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button">View Full Profile</button>
                <button className="px-space-lg py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-all flex items-center justify-center gap-2" type="button">
                  <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                  Request Swap
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-outline" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="relative">
                    <img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Portrait photography of Marcus Vance, creative video editor with headphones around his neck against a dark creative editing suite with warm practical glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1I52TFqAs7LTlqQvqJIMfApPjB5_Tz2q4f6WTGL3HslS0XCD91exFpeg9Ew4_7gzeo2-xUSunst7X2eqDICxDMyUXLwprn3Mpb15UkdbjU47woSIGMsqYSjvxhOebPK8ds9Xvm6AQmnJDPrMFp9a_pYajSS1Y-OtN66WwvsnOSuvq2Wz4D8XT5L9b84Qya4x41raeTxl7yO5fzJc9Jvf2QP2QTHRO2A9QlDBFkZn6sCSbmGnf5JuyWQ" />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-primary-container rounded-full ring-2 ring-surface-container-lowest flex items-center justify-center text-on-primary">
                      <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Marcus Vance</span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">bolt</span>
                        Active Swapper
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-space-sm gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        Seattle, WA
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        4.7
                        <span className="text-outline font-normal">(12 reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 p-space-xs sm:p-0 bg-surface-container-low sm:bg-transparent rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="font-display-xl-mobile sm:font-display-xl text-display-xl-mobile sm:text-display-xl text-on-surface font-extrabold leading-none tracking-tight">88%</span>
                    <span className="material-symbols-outlined text-outline text-[26px]">tune</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold uppercase tracking-wider">Good Synergy</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md p-space-md bg-surface-container-low rounded-xl">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-tertiary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">file_download</span>
                    THEY OFFER
                    <span className="text-on-surface-variant font-normal">(You Want)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Video Editing</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Premiere Pro</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Motion Graphics</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">file_upload</span>
                    THEY WANT
                    <span className="text-on-surface-variant font-normal">(You Offer)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">JavaScript Fundamentals</span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">Web App Deployment</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant px-space-xs">
                <span className="flex items-center gap-1.5 font-medium text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-outline">event_available</span>
                  Available: Weekends
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-outline">schedule</span>
                  PST (UTC-8)
                </span>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
                  Why this is a match
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-outline text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Video editing mastery matched with Alex's JavaScript tutoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-outline text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span>Both looking for bi-weekly milestone reviews</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-space-sm pt-space-xs">
                <button className="px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button">View Full Profile</button>
                <button className="px-space-lg py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-all flex items-center justify-center gap-2" type="button">
                  <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                  Request Swap
                </button>
              </div>
            </div>
          </div>
          <div className="p-space-lg lg:p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            <div className="flex items-start gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[28px]">explore</span>
              </div>
              <div className="flex flex-col gap-1 max-w-xl">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Looking for even more niche skill swaps?</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Add 1 more skill to your profile or broaden your availability to unlock 18+ additional peer connections.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm w-full md:w-auto">
              <button className="flex-1 md:flex-initial px-space-md py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors" type="button">Adjust Availability</button>
              <button className="flex-1 md:flex-initial px-space-md py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-all" type="button">Update My Skills</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
