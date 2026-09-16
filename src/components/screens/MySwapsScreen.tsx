/** Imported Stitch screen (8). Static content until its feature phase is implemented. */
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export function MySwapsScreen() {
    const [swaps, setSwaps] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"active" | "history">("active");
    const [selectedRating, setSelectedRating] = useState(0);
    const [feedback, setFeedback] = useState("");
  useEffect(() => {
    async function loadSwaps() {
      const activeSwaps = swaps.filter((swap) => swap.status === "ACCEPTED");
      const historySwaps = swaps.filter((swap) => swap.status === "COMPLETED");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    setLoading(false);
    return;
  }

  const { data, error } = await supabase
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
    .in("status", ["ACCEPTED", "COMPLETED"])
    .order("created_at", { ascending: false });

  if (error) {
    console.error("LOAD SWAPS ERROR:", error);
    setLoading(false);
    return;
  }

  const swapsData = data ?? [];

  // Get all user IDs involved in swaps
  const userIds = [
    ...new Set(
      swapsData.flatMap((swap) => [
        swap.sender_id,
        swap.receiver_id,
      ])
    ),
  ];

  // Get profiles
  const { data: profiles, error: profilesError } = await supabase
    .from("profiles")
    .select("id, name, location, rating, profile_photo")
    .in("id", userIds);

  if (profilesError) {
    console.error("LOAD SWAP PROFILES ERROR:", profilesError);
  }

  // Get all skill IDs
  const skillIds: number[] = [
  ...new Set(
    swapsData.flatMap((swap) => [
      swap.sender_skill,
      swap.receiver_skill,
    ])
  ),
].filter((id): id is number => id !== null);

  // Get skill names
  const { data: skills, error: skillsError } = await supabase
    .from("skills")
    .select("id, name")
    .in("id", skillIds);

  if (skillsError) {
    console.error("LOAD SWAP SKILLS ERROR:", skillsError);
  }

  const formattedSwaps = swapsData.map((swap) => {
    const otherUserId =
      swap.sender_id === user.id
        ? swap.receiver_id
        : swap.sender_id;

    const otherUser = profiles?.find(
      (profile) => profile.id === otherUserId
    );

    const getSkillName = (skillId: number | null) =>
      skills?.find((skill) => skill.id === skillId)?.name ?? "Skill";

    // sender_skill = skill the sender wants to learn
    // receiver_skill = skill the sender offers
    const youLearn =
      swap.sender_id === user.id
        ? getSkillName(swap.sender_skill)
        : getSkillName(swap.receiver_skill);

    const youTeach =
      swap.sender_id === user.id
        ? getSkillName(swap.receiver_skill)
        : getSkillName(swap.sender_skill);

    return {
      ...swap,
      otherUserId,
      otherUserName: otherUser?.name ?? "User",
      otherUserLocation: otherUser?.location ?? "",
      otherUserRating: otherUser?.rating ?? 0,
      otherUserPhoto: otherUser?.profile_photo ?? "",
      youLearn,
      youTeach,
    };
  });

  setSwaps(formattedSwaps);
  setLoading(false);
}
loadSwaps();
}, []);
 const activeSwaps = swaps.filter(
    (swap) => swap.status === "ACCEPTED"
  );

  const historySwaps = swaps.filter(
    (swap) => swap.status === "COMPLETED"
  );
  return (
    <main className="w-full bg-background min-h-screen">
      <div className="flex flex-col w-full">
        <div className="relative w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin pb-space-xl">
          <div className="pt-space-lg pb-space-md flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm font-label-md text-label-md text-on-surface-variant">
              <a className="hover:text-primary transition-colors" href="#">Dashboard</a>
              <span className="material-symbols-outlined text-[16px] text-outline-variant">chevron_right</span>
              <span className="text-on-surface font-semibold">My Swaps</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-container/10 text-tertiary font-label-sm text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse" />
                {swaps.length} Active Exchanges
              </span>
            </div>
            <div className="flex items-center gap-space-sm">
              <a className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all shadow-sm" href="#">
                <span className="material-symbols-outlined text-[18px] text-primary">calendar_add_on</span>
                <span>Schedule Session</span>
              </a>
              <a className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md transition-all shadow-md shadow-primary/20" href="#">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span>Find New Match</span>
              </a>
            </div>
          </div>
          <div className="mt-space-xs mb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <h1 className="font-display-xl text-headline-lg md:text-display-xl text-on-surface tracking-tight">My Swaps</h1>
              <p className="mt-1 font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl">Track active peer-to-peer exchanges, coordinate reciprocal learning sessions, and verify mutual completion.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm md:gap-space-md mb-space-xl">
            <div className="relative overflow-hidden p-space-md rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex items-center justify-between group hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Ongoing Swaps</div>
                <div className="font-headline-lg text-headline-lg text-primary flex items-baseline gap-1">
                  2
                  <span className="text-tertiary font-label-sm text-xs font-semibold">Active</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">sync_alt</span>
              </div>
            </div>
            <div className="relative overflow-hidden p-space-md rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex items-center justify-between group hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Completed Swaps</div>
                <div className="font-headline-lg text-headline-lg text-on-surface">14</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
            </div>
            <div className="relative overflow-hidden p-space-md rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex items-center justify-between group hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Rating Received</div>
                <div className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-1.5">
                  4.9
                  <span className="material-symbols-outlined text-[20px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined text-[24px]">reviews</span>
              </div>
            </div>
            <div className="relative overflow-hidden p-space-md rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex items-center justify-between group hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mentoring Logged</div>
                <div className="font-headline-lg text-headline-lg text-on-surface">
                  28
                  <span className="font-body-md text-body-sm text-on-surface-variant font-normal">hrs</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">schedule</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low/70 p-2 rounded-2xl mb-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
            <div className="flex items-center gap-1.5 bg-surface-container p-1 rounded-xl">
              <button onClick={() => setActiveTab("active")} className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl font-headline-sm text-[15px] transition-all duration-200 bg-surface-container-lowest text-primary shadow-sm" id="tab-btn-active">
                <span className="material-symbols-outlined text-[18px]">swap_horizontal_circle</span>
                <span>Active Swaps</span>
                <span className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-[11px] flex items-center justify-center font-bold">2</span>
              </button>
              <button onClick={() => setActiveTab("history")} className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl font-headline-sm text-[15px] transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/60" id="tab-btn-history">
                <span className="material-symbols-outlined text-[18px]">history</span>
                <span>Swap History</span>
                <span className="w-5 h-5 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-[11px] flex items-center justify-center font-semibold">4</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-space-xs md:gap-space-sm">
              <div className="relative flex-1 sm:w-60">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                <input className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all" placeholder="Filter by peer or skill..." type="text" />
              </div>
              <div className="flex items-center gap-space-xs">
                <select className="py-2 px-3 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer">
                  <option>All Statuses</option>
                  <option>In Progress</option>
                  <option>Ready to Complete</option>
                </select>
                <button  className="p-2 bg-surface-container-lowest hover:bg-surface-container rounded-xl text-on-surface-variant transition-colors shadow-sm" title="Sort Order">
                  <span className="material-symbols-outlined text-[20px]">sort</span>
                </button>
              </div>
          </div>
         </div> 
          {activeTab === "active" && (
  <div className="space-y-space-lg" id="section-active-swaps">
  {loading ? (
    <div className="text-center py-10 text-on-surface-variant">
      Loading active swaps...
    </div>
  ) : swaps.length === 0 ? (
    <div className="text-center py-10 bg-surface-container-lowest rounded-2xl">
      <span className="material-symbols-outlined text-4xl text-on-surface-variant">
        swap_horizontal_circle
      </span>
      <p className="mt-3 font-headline-sm text-on-surface">
        No active swaps yet
      </p>
      <p className="mt-1 text-sm text-on-surface-variant">
        Accept a swap request to see it here.
      </p>
    </div>
  ) : (
    swaps.map((swap) => (
      <div
        key={swap.id}
        className="relative bg-surface-container-lowest rounded-2xl p-space-md md:p-space-lg shadow-sm"
      >
        {/* User */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md border-b border-surface-container-high/60">
          <div className="flex items-center gap-space-md">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-surface-variant">
              {swap.otherUserPhoto ? (
                <img
                  src={swap.otherUserPhoto}
                  alt={swap.otherUserName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">
                    person
                  </span>
                </div>
              )}
            </div>

            <div>
              <h3 className="font-headline-sm text-on-surface">
                {swap.otherUserName}
              </h3>

              <div className="flex items-center gap-3 mt-1 text-sm text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>
                  {swap.otherUserLocation || "Location not added"}
                </span>

                <span>•</span>

                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    star
                  </span>
                  {swap.otherUserRating ?? 0}
                </span>
              </div>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Active
          </span>
        </div>

        {/* Skills */}
        <div className="py-space-md grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="p-space-md rounded-2xl bg-surface-container-low/50">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">
              You Teach
            </span>

            <h4 className="mt-2 font-headline-sm text-on-surface">
              {swap.youTeach}
            </h4>

            <p className="mt-1 text-sm text-on-surface-variant">
              Skill you are offering in this exchange.
            </p>
          </div>

          <div className="p-space-md rounded-2xl bg-surface-container-low/50">
            <span className="text-xs uppercase tracking-wider text-tertiary-container font-bold">
              You Learn
            </span>

            <h4 className="mt-2 font-headline-sm text-on-surface">
              {swap.youLearn}
            </h4>

            <p className="mt-1 text-sm text-on-surface-variant">
              Skill you will learn from this user.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">
              calendar_month
            </span>

            Started{" "}
            {new Date(swap.created_at).toLocaleDateString("en-IN")}
          </div>

          <div className="flex items-center gap-space-xs">
            <button
              onClick={async () => {
                const { error } = await supabase
                  .from("swap_requests")
                  .update({ status: "COMPLETED" })
                  .eq("id", swap.id);

                if (error) {
                  console.error("COMPLETE SWAP ERROR:", error);
                  alert("Failed to complete swap.");
                  return;
                }
                setSwaps((current) =>
                  current.map((item) =>
                  item.id === swap.id
                  ? { ...item, status: "COMPLETED" }
                  : item
                )
              );
               setActiveTab("history");
                alert("Swap marked as completed! 🎉");
              }}
              className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">
                task_alt
              </span>
              Mark as Completed
            </button>
          </div>
        </div>
      </div>
    ))   
  )}
</div>
)}
    {activeTab === "history" && (
  <div
    className={`space-y-space-lg ${
      activeTab === "history" ? "" : "hidden"
    }`}
    id="section-swap-history"
  >
    {loading ? (
      <div className="text-center py-10">
        Loading history...
      </div>
    ) : historySwaps.length === 0 ? (
      <div className="text-center py-10">
        <p className="text-lg font-medium">
          No completed swaps yet
        </p>

        <p className="text-sm text-on-surface-variant mt-2">
          Your completed swaps will appear here.
        </p>
      </div>
    ) : (
      historySwaps.map((swap) => (
        <div
          key={swap.id}
          className="relative bg-surface-container-lowest rounded-2xl p-space-md md:p-space-lg shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high/60">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  {swap.otherUserName}
                </h4>

                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                  Completed
                </span>
              </div>

              <div className="text-xs text-on-surface-variant mt-1">
                {swap.otherUserLocation}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm py-space-sm">
            <div className="p-space-sm rounded-xl bg-surface-container-low/40">
              <span className="text-[10px] text-primary uppercase font-bold tracking-wider">
                You Taught
              </span>

              <div className="text-sm text-on-surface font-semibold mt-0.5">
                {swap.youTeach}
              </div>
            </div>

            <div className="p-space-sm rounded-xl bg-surface-container-low/40">
              <span className="text-[10px] text-tertiary-container uppercase font-bold tracking-wider">
                You Learned
              </span>

              <div className="text-sm text-on-surface font-semibold mt-0.5">
                {swap.youLearn}
              </div>
              <div className="mt-space-sm p-space-md rounded-2xl bg-surface-container-low/60">
  <div className="flex flex-col gap-3">
    <span className="text-xs font-bold text-on-surface">
      Rate this swap
    </span>

    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
  <button
    key={star}
    type="button"
    onClick={() => setSelectedRating(star)}
    className={`text-2xl transition-colors ${
      star <= selectedRating
        ? "text-amber-400"
        : "text-outline-variant"
    }`}
  >
    ★
  </button>
))}
    </div>

    <textarea
  className="w-full p-space-sm bg-surface-container-lowest rounded-xl text-sm text-on-surface placeholder:text-on-surface-variant/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
  placeholder="Share your experience with this skill swap..."
  rows={3}
  value={feedback}
  onChange={(e) => setFeedback(e.target.value)}
/>

    <div className="flex justify-end">
     <button
  type="button"
  onClick={async () => {
    if (selectedRating === 0) {
      alert("Please select a rating ⭐");
      return;
    }

    if (!feedback.trim()) {
      alert("Please write some feedback 💬");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    const { error } = await supabase
      .from("ratings")
      .insert({
        swap_id: swap.id,
        from_user: user.id,
        to_user: swap.otherUserId,
        rating: selectedRating,
        feedback: feedback.trim(),
      });

    if (error) {
      console.error("SUBMIT RATING ERROR:", error);
      alert("Failed to submit feedback.");
      return;
    }

    alert("Feedback submitted successfully! ⭐");

    setSelectedRating(0);
    setFeedback("");
  }}
  className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-semibold hover:opacity-90 transition-all"
>
  Submit Feedback
</button>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
)}

          <div className="mt-space-xl p-space-lg rounded-2xl bg-surface-container-lowest/80 shadow-[0_1px_3px_rgba(15,23,42,0.03)] flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                <span className="material-symbols-outlined text-[24px]">lightbulb</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-sm md:text-base text-on-surface font-semibold">Looking for your next learning milestone?</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Discover compatible partners in Smart Matches or review incoming requests waiting for you.</p>
              </div>
            </div>
            <div className="flex items-center gap-space-xs shrink-0">
              <a className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" href="#">Incoming Requests (3)</a>
              <a className="px-space-md py-2 rounded-xl bg-primary text-on-primary hover:bg-on-primary-fixed-variant font-label-md text-label-md transition-colors" href="#">Smart Matches</a>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 hidden items-center justify-center bg-inverse-surface/40 backdrop-blur-md p-space-sm md:p-space-lg" id="modal-swap-details">
          <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl p-space-md md:p-space-lg overflow-hidden max-h-[921px] flex flex-col">
            <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high shrink-0">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[22px] text-primary">sync_alt</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Swap Details & Milestones</h3>
              </div>
              <button className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="space-y-space-md py-space-md overflow-y-auto pr-1">
              <div className="p-space-md rounded-2xl bg-surface-container-low flex items-center justify-around">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary font-headline-sm text-sm flex items-center justify-center font-bold">AJ</div>
                  <div>
                    <div className="font-label-md text-xs font-bold text-on-surface">Alex Johnson (You)</div>
                    <div className="font-body-sm text-[11px] text-primary">React Core & Hooks</div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container-lowest shadow flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[18px]">multiple_stop</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary font-headline-sm text-sm flex items-center justify-center font-bold">PS</div>
                  <div>
                    <div className="font-label-md text-xs font-bold text-on-surface">Priya Shah</div>
                    <div className="font-body-sm text-[11px] text-tertiary">Photoshop & Brand</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-headline-sm text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-space-xs">Agreed Session Milestones</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-space-xs p-2.5 rounded-xl bg-emerald-50/70">
                    <span className="material-symbols-outlined text-[18px] text-emerald-700 mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div className="text-xs">
                      <div className="font-semibold text-emerald-950">Session 1 & 2: React State Foundations & Photoshop Vector Pen</div>
                      <div className="text-emerald-800">Completed on 10 Sept 2026 • 2 hours logged mutually</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-xs p-2.5 rounded-xl bg-emerald-50/70">
                    <span className="material-symbols-outlined text-[18px] text-emerald-700 mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div className="text-xs">
                      <div className="font-semibold text-emerald-950">Session 3 & 4: Custom Hooks & Texture Masks with Typography</div>
                      <div className="text-emerald-800">Completed on 21 Sept 2026 • 2 hours logged mutually</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-xs p-2.5 rounded-xl bg-surface-container-low">
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">radio_button_unchecked</span>
                    <div className="text-xs">
                      <div className="font-semibold text-on-surface">Session 5 & 6: Final Capstone Projects & Review (Scheduled)</div>
                      <div className="text-on-surface-variant">Scheduled for Tomorrow at 6:00 PM IST</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-space-sm rounded-xl bg-surface-container-low space-y-2">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">Shared Workspaces & Links</span>
                <div className="flex flex-wrap gap-2">
                  <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-xs font-semibold text-primary hover:bg-surface-variant transition-colors shadow-sm" href="#">
                    <span className="material-symbols-outlined text-[14px]">link</span>
                    github.com/alexj/react-playground
                  </a>
                  <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-xs font-semibold text-secondary hover:bg-surface-variant transition-colors shadow-sm" href="#">
                    <span className="material-symbols-outlined text-[14px]">brush</span>
                    figma.com/@priya/brand-guidelines
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-space-sm border-t border-surface-container-high flex items-center justify-end gap-space-xs shrink-0">
              <button className="px-space-md py-2 rounded-xl text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors">Close Details</button>
              <button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md transition-all shadow-sm">
                <span className="material-symbols-outlined text-[16px]">task_alt</span>
                Complete Swap Now
              </button>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 hidden items-center justify-center bg-inverse-surface/40 backdrop-blur-md p-space-sm md:p-space-lg" id="modal-complete-confirm">
          <div className="relative w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-2xl p-space-lg space-y-space-md">
            <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
              <span className="material-symbols-outlined text-[28px]">verified</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Complete this skill swap?</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Once marked as completed, both you and
                <strong>Priya Shah</strong>
                will be prompted to submit mutual ratings and reviews. This swap will be moved into your Swap History.
              </p>
            </div>
            <div className="p-space-sm rounded-xl bg-surface-container-low text-xs text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
              <span>All 4 mutual sessions will be credited to your public profile profile.</span>
            </div>
            <div className="flex items-center justify-end gap-space-xs pt-space-xs">
              <button className="px-space-md py-2 rounded-xl text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors">Cancel</button>
              <button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-xl bg-tertiary text-on-tertiary hover:bg-tertiary-container font-label-md text-label-md transition-all shadow-sm">
                <span className="material-symbols-outlined text-[16px]">check</span>
                Confirm & Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
