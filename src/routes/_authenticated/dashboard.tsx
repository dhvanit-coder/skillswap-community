import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  ArrowRight,
  Bell,
  BookOpen,
  ChevronRight,
  Clock,
  Heart,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [userName, setUserName] = useState("User");
  const [offeredSkills, setOfferedSkills] = useState<string[]>([]);
  const [wantedSkills, setWantedSkills] = useState<string[]>([]);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [activeSwaps, setActiveSwaps] = useState(0);
  const [matches, setMatches] = useState<any[]>([]);
  const [myRating, setMyRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [recentRequests, setRecentRequests] = useState<any[]>([]);

useEffect(() => {
 async function loadDashboard() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  // Load profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    console.error("Failed to load profile:", profileError);
    return;
  }

  if (profile?.name) {
    setUserName(profile.name);
  }

  // Load user skills
  const { data: skillData, error: skillError } = await supabase
  .from("user_skills")
  .select(`
    type,
    skill_id
  `)
  .eq("user_id", user.id);

  if (skillError) {
    console.error("Failed to load skills:", skillError);
    return;
  }
  const { data: allSkills, error: allSkillsError } = await supabase
  .from("skills")
  .select("id, name");

  if (allSkillsError) {
  console.error("Failed to load all skills:", allSkillsError);
  return;
 }
  const offered: string[] = [];
  const wanted: string[] = [];

(skillData ?? []).forEach((item: any) => {
  const skill = allSkills?.find((s) => s.id === item.skill_id);

  if (!skill) return;

  if (item.type === "OFFER") {
    offered.push(skill.name);
  }

  if (item.type === "WANT") {
    wanted.push(skill.name);
  }
});

  setOfferedSkills(offered);
  setWantedSkills(wanted);

  // Find smart matches
const mySkills = skillData ?? [];

const myWantedSkillIds = mySkills
  .filter((item: any) => item.type === "WANT")
  .map((item: any) => item.skill_id)
  .filter(Boolean);

const myOfferedSkillIds = mySkills
  .filter((item: any) => item.type === "OFFER")
  .map((item: any) => item.skill_id)
  .filter(Boolean);

if (myWantedSkillIds.length === 0 || myOfferedSkillIds.length === 0) {
  setMatches([]);
} else {
  // Get skills of all other users

  const { data: otherUserSkills, error: matchError } = await supabase
    .from("user_skills")
    .select("user_id, skill_id, type")
    .neq("user_id", user.id);

  if (matchError) {
    console.error("SMART MATCH ERROR:", matchError);
    setMatches([]);
  } else {
    // Find users who:
    // 1. Offer something I want
    // 2. Want something I offer
const { data: otherUserSkills, error: matchError } = await supabase
  .from("user_skills")
  .select("user_id, skill_id, type")
  .neq("user_id", user.id);
    const matchedUserIds = new Set<string>();

    const users = new Map<
      string,
      {
        offered: number[];
        wanted: number[];
      }
    >();

    (otherUserSkills ?? []).forEach((item: any) => {
      if (!users.has(item.user_id)) {
        users.set(item.user_id, {
          offered: [],
          wanted: [],
        });
      }

      const userSkills = users.get(item.user_id)!;

      if (item.type === "OFFER") {
        userSkills.offered.push(item.skill_id);
      }

      if (item.type === "WANT") {
        userSkills.wanted.push(item.skill_id);
      }
    });

    users.forEach((skills, otherUserId) => {
      const offersWhatIWant = skills.offered.some((skillId) =>
        myWantedSkillIds.includes(skillId)
      );

      const wantsWhatIOffer = skills.wanted.some((skillId) =>
        myOfferedSkillIds.includes(skillId)
      );

      if (offersWhatIWant && wantsWhatIOffer) {
        matchedUserIds.add(otherUserId);
      }
    });
    // Get matched users' profiles
    const userIds = Array.from(matchedUserIds);

    if (userIds.length === 0) {
      setMatches([]);
    } else {
      const { data: profiles, error: profileError } = await supabase
        .from("profiles")
        .select("id, name, rating, is_public")
        .in("id", userIds)
        .eq("is_public", true);

      if (profileError) {
        console.error("SMART MATCH PROFILE ERROR:", profileError);
        setMatches([]);
      } else {
        const formattedMatches = (profiles ?? []).slice(0, 3).map((profile: any) => {
  const userSkills = users.get(profile.id);

  return {
    id: profile.id,
    name: profile.name ?? "User",
    
    offeredSkillId: (userSkills?.offered ?? [])
    .find((skillId: number) => myWantedSkillIds.includes(skillId)) ?? null,

    wantedSkillId: (userSkills?.wanted ?? [])
    .find((skillId: number) => myOfferedSkillIds.includes(skillId)) ?? null,

    offers: (userSkills?.offered ?? [])
    .filter((skillId: number) => myWantedSkillIds.includes(skillId))
    .map((skillId: number) => {
        const skill = allSkills?.find((s) => s.id === skillId);
        return skill?.name ?? "Skill";
    })
    .join(", "),

    wants: (userSkills?.wanted ?? [])
      .filter((skillId: number) => myOfferedSkillIds.includes(skillId))
      .map((skillId: number) => {
        const skill = allSkills?.find((s) => s.id === skillId);
        return skill?.name ?? "Skill";
      })
      .join(", "),

    rating: profile.rating ?? 0,
  };
});
setMatches(formattedMatches);
      }
    }
  }
}    
// Load my rating
const { data: ratingData, error: ratingError } = await supabase
  .from("ratings")
  .select("rating")
  .eq("to_user", user.id);

if (ratingError) {
  console.error("Failed to load rating:", ratingError);
} else {
  const ratings = (ratingData ?? [])
    .map((item: any) => item.rating)
    .filter((rating: any) => typeof rating === "number");

  const average =
    ratings.length > 0
      ? ratings.reduce((sum: number, rating: number) => sum + rating, 0) /
        ratings.length
      : 0;

  setMyRating(Number(average.toFixed(1)));
  setReviewCount(ratings.length);
}
// Load recent swap requests
const { data: requestData, error: requestError } = await supabase
  .from("swap_requests")
  .select(`
  id,
  sender_id,
  receiver_id,
  sender_skill,
  receiver_skill,
  status,
  created_at
`)
  .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`)
  .order("created_at", { ascending: false })
  .limit(5);

if (requestError) {
  console.error("Failed to load recent requests:", requestError);
} else {
  const requests = requestData ?? [];

  const userIds = [
    ...new Set(
      requests.map((request) =>
        request.sender_id === user.id
          ? request.receiver_id
          : request.sender_id
      )
    ),
  ];

 const skillIds: number[] = [
  ...new Set(
    requests
      .flatMap((request) => [
        request.sender_skill,
        request.receiver_skill,
      ])
      .filter((id): id is number => id !== null)
  ),
];

  const [{ data: profiles }, { data: skills }] = await Promise.all([
    supabase
      .from("profiles")
      .select("id, name")
      .in("id", userIds),

    supabase
      .from("skills")
      .select("id, name")
      .in("id", skillIds),
  ]);

  const profileMap = new Map(
    (profiles ?? []).map((profile) => [profile.id, profile.name ?? "User"])
  );

  const skillMap = new Map(
    (skills ?? []).map((skill) => [skill.id, skill.name])
  );

  const formattedRequests = requests.map((request) => {
    const otherUserId =
      request.sender_id === user.id
        ? request.receiver_id
        : request.sender_id;

    return {
      id: request.id,
      name: profileMap.get(otherUserId) ?? "User",
      skill: `${
  request.sender_skill != null
    ? skillMap.get(request.sender_skill) ?? "Skill"
    : "Skill"
} ↔ ${
  request.receiver_skill != null
    ? skillMap.get(request.receiver_skill) ?? "Skill"
    : "Skill"
}`,
      time: new Date(request.created_at).toLocaleDateString(),
      status: request.status,
    };
  });

  setRecentRequests(formattedRequests);
}
  // Load pending swap requests
  const { count: pendingCount, error: pendingError } = await supabase
    .from("swap_requests")
    .select("id", { count: "exact", head: true })
    .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`)
    .eq("status", "PENDING");

  if (pendingError) {
    console.error("Failed to load pending requests:", pendingError);
  } else {
    setPendingRequests(pendingCount ?? 0);
  }
  // Load active swaps
const { count: activeSwapCount, error: activeSwapError } = await supabase
  .from("swap_requests")
  .select("id", { count: "exact", head: true })
  .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`)
  .eq("status", "ACCEPTED");

if (activeSwapError) {
  console.error("Failed to load active swaps:", activeSwapError);
} else {
  setActiveSwaps(activeSwapCount ?? 0);
}

}
// Load pending swap requests

  loadDashboard();
}, []);
  return (
    <div className="min-h-screen bg-[#f8f7ff] text-slate-900">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-slate-200 bg-white md:flex md:flex-col">
          <div className="flex h-20 items-center gap-3 border-b px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Users size={21} />
            </div>

            <div>
              <h1 className="text-lg font-bold">SkillSwap</h1>
              <p className="text-xs text-slate-400">Learn. Teach. Grow.</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2 p-4">
            <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
            <SidebarItem icon={<Search size={18} />} label="Explore Skills" />
            <SidebarItem icon={<Sparkles size={18} />} label="Smart Matches" />
            <SidebarItem icon={<MessageSquare size={18} />} label="Swap Requests" />
            <SidebarItem icon={<BookOpen size={18} />} label="My Swaps" />
            <SidebarItem icon={<Bell size={18} />} label="Notifications" />
          </nav>

          <div className="border-t p-4">
            <SidebarItem icon={<Settings size={18} />} label="Settings" />
            <SidebarItem icon={<LogOut size={18} />} label="Logout" />
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">

          {/* Top Bar */}
          <header className="flex h-20 items-center justify-between border-b bg-white px-6 md:px-8">
            <div>
              <p className="text-sm text-slate-400">SkillSwap</p>
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative rounded-full p-2 hover:bg-slate-100">
                <Bell size={20} />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                  D
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold">My Profile</p>
                  <p className="text-xs text-slate-400">Skill Swapper</p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6 md:p-8">

            {/* Welcome */}
            <section className="rounded-2xl bg-indigo-600 p-7 text-white shadow-sm">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <p className="mb-2 text-sm text-indigo-200">
                    Welcome back 👋
                  </p>

                  <h1 className="text-3xl font-bold">
                    Welcome back, {userName}! 👋
                  </h1>

                  <p className="mt-2 max-w-xl text-indigo-100">
                    Discover people who can teach you what you want to learn
                    while learning from what you already know.
                  </p>
                </div>

                <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-600 hover:bg-indigo-50">
                  Explore Skills
                  <ArrowRight size={17} />
                </button>
              </div>
            </section>

            {/* Stats */}
            <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                icon={<Sparkles size={20} />}
                title="Smart Matches"
                value="12"
                description="People matching your skills"
              />

              <StatCard
                icon={<MessageSquare size={20} />}
                title="Pending Requests"
                value={pendingRequests.toString()}
                description="Requests waiting for response"
              />

              <StatCard
                icon={<BookOpen size={20} />}
                title="Active Swaps"
                value={activeSwaps.toString()}
                description="Currently learning or teaching"
              />

              <StatCard
                icon={<Star size={20} />}
                title="My Rating"
                value={myRating.toString()}
                description={`Based on ${reviewCount} reviews`}
              />
            </section>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">

              {/* Skills */}
              <section className="rounded-2xl border bg-white p-6 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold">My Skills</h2>
                    <p className="text-sm text-slate-400">
                      Skills you offer and want to learn
                    </p>
                  </div>

                  <button className="text-sm font-semibold text-indigo-600">
                    Edit Profile
                  </button>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">

                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-slate-600">
                      Skills I Offer
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {offeredSkills.length > 0 ? (
                        offeredSkills.map((skill) => (
                          <SkillBadge key={skill} label={skill} />
                          ))
                       ) : (
                       <p className="text-sm text-slate-400">
                           No offered skills added yet.
                       </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-slate-600">
                      Skills I Want
                    </h3>

                    <div className="flex flex-wrap gap-2">
                    {wantedSkills.length > 0 ? (
                      wantedSkills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                   ))
                  ) : (
                        <p className="text-sm text-slate-400">
                         No wanted skills added yet.
                     </p>
                     )}
                    </div>
                  </div>

                </div>
              </section>

              {/* Profile */}
              <section className="rounded-2xl border bg-white p-6">
                <h2 className="text-lg font-bold">Profile</h2>

                <div className="mt-5 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-600">
                    D
                  </div>

                  <h3 className="mt-3 font-bold">{userName}</h3>

                  <div className="mt-2 flex items-center justify-center gap-1 text-sm text-amber-500">
                    <Star size={15} fill="currentColor" />
                    4.8 Rating
                  </div>

                  <button className="mt-5 w-full rounded-xl bg-indigo-50 py-3 text-sm font-semibold text-indigo-600 hover:bg-indigo-100">
                    View My Profile
                  </button>
                </div>
              </section>
            </div>

            {/* Smart Matches */}
            <section className="mt-6 rounded-2xl border bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={20} className="text-indigo-600" />
                    <h2 className="text-lg font-bold">Smart Matches</h2>
                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    People whose skills match what you want to learn.
                  </p>
                </div>

                <button className="flex items-center gap-1 text-sm font-semibold text-indigo-600">
                  View All
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">

              {matches.length > 0 ? (
  matches.map((match, index) => (
    <MatchCard
      key={`${match.name}-${index}`}
      name={match.name}
      initials={match.name
        .split(" ")
        .map((word: string) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()}
      offers={match.offers}
      wants={match.wants}
      rating={match.rating.toString()}
      userId={match.id}
      offeredSkillId={match.offeredSkillId}
      wantedSkillId={match.wantedSkillId}
    />
  ))
) : (
  <div className="rounded-xl bg-slate-50 p-6 text-center md:col-span-3">
    <Sparkles className="mx-auto text-indigo-500" size={24} />

    <p className="mt-2 font-medium text-slate-700">
      No smart matches found yet.
    </p>

    <p className="mt-1 text-sm text-slate-400">
      Add more offered and wanted skills to find better matches.
    </p>
  </div>
)}

              </div>
            </section>

            {/* Recent Requests */}
            <section className="mt-6 rounded-2xl border bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold">Recent Swap Requests</h2>
                  <p className="text-sm text-slate-400">
                    Manage your latest skill exchange requests.
                  </p>
                </div>

                <button className="text-sm font-semibold text-indigo-600">
                  View All
                </button>
              </div>

              <div className="mt-5 space-y-3">

               {recentRequests.length > 0 ? (
                recentRequests.map((request) => (
               <RequestRow
                     key={request.id}
                      name={request.name}
                      skill={request.skill}
                      time={request.time}
                      status={request.status}
                       />
                    ))
                  ) : (
  <div className="rounded-xl bg-slate-50 p-6 text-center">
    <p className="text-sm font-medium text-slate-600">
      No recent swap requests
    </p>
    <p className="mt-1 text-xs text-slate-400">
      Your recent skill exchange requests will appear here.
    </p>
  </div>
)}

              </div>
            </section>

            {/* Footer */}
            <footer className="mt-8 flex flex-col justify-between gap-2 text-xs text-slate-400 sm:flex-row">
              <p>© 2026 SkillSwap</p>
              <p>Learn. Teach. Exchange. Grow.</p>
            </footer>

          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-indigo-600 text-white"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function StatCard({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-400">{title}</p>
      <p className="mt-1 text-3xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{description}</p>
    </div>
  );
}

function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-medium text-indigo-600">
      {label}
    </span>
  );
}

function MatchCard({
  name,
  initials,
  offers,
  wants,
  rating,
  userId,
  offeredSkillId,
  wantedSkillId,
}: {
  name: string;
  initials: string;
  offers: string;
  wants: string;
  rating: string;
  userId: string;
  offeredSkillId: number | null;
  wantedSkillId: number | null;
}) {
 const handleSendRequest = async () => {
  console.log("SEND REQUEST CLICKED", {
  userId,
  offeredSkillId,
  wantedSkillId,
});
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    alert("Please login first.");
    return;
  }

  if (!offeredSkillId || !wantedSkillId) {
    alert("Skill information is missing.");
    return;
  }

  const { error } = await supabase.from("swap_requests").insert({
    sender_id: user.id,
    receiver_id: userId,
    sender_skill: wantedSkillId,
    receiver_skill: offeredSkillId,
    status: "PENDING",
  });

  if (error) {
    console.error("SWAP REQUEST ERROR:", error);
    alert("Failed to send swap request.");
    return;
  }

  alert("Swap request sent successfully! 🎉");
};

  return (
    <div className="rounded-xl border p-4 hover:border-indigo-200">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
          {initials}
        </div>

        <div>
          <h3 className="font-semibold">{name}</h3>
          <div className="flex items-center gap-1 text-xs text-amber-500">
            <Star size={12} fill="currentColor" />
            {rating}
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-xs">
        <p>
          <span className="text-slate-400">Offers:</span>{" "}
          <span className="font-medium">{offers}</span>
        </p>

        <p>
          <span className="text-slate-400">Wants:</span>{" "}
          <span className="font-medium">{wants}</span>
        </p>
      </div>

      <button  onClick={handleSendRequest}
      className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-700">
          Send Swap Request
      </button>
    </div>
  );
}

function RequestRow({
  name,
  skill,
  time,
  status,
}: {
  name: string;
  skill: string;
  time: string;
  status: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
          {name
            .split(" ")
            .map((word: string) => word[0])
            .join("")}
        </div>

        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-slate-400">{skill}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <Clock size={13} />
          {time}
        </div>

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
          {status}
        </span>
      </div>
    </div>
  );
}
