import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

/** Imported Stitch screen (7). Static content until its feature phase is implemented. */
export function SwapRequestsScreen() {
   const [requests, setRequests] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);
    useEffect(() => {
    async function loadRequests() {
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
        .order("created_at", { ascending: false });

      if (error) {
        console.error("LOAD REQUESTS ERROR:", error);
        setLoading(false);
        return;
      }

      const senderIds = [...new Set((data ?? []).map((request) => request.sender_id))];

let senderProfiles: any[] = [];

if (senderIds.length > 0) {
  const { data: profiles, error: profileError } = await supabase
    .from("profiles")
    .select("id, name, rating, location")
    .in("id", senderIds);

  if (profileError) {
    console.error("LOAD SENDER PROFILES ERROR:", profileError);
  } else {
    senderProfiles = profiles ?? [];
  }
}

const formattedRequests = (data ?? []).map((request) => {
  const sender = senderProfiles.find(
    (profile) => profile.id === request.sender_id
  );

  return {
    ...request,
    senderName: sender?.name ?? "User",
    senderRating: sender?.rating ?? 0,
    senderLocation: sender?.location ?? "",
  };
});

setRequests(formattedRequests);
setLoading(false);
    }

    loadRequests();
  }, []);
  return (
    <main className="w-full bg-surface min-h-[calc(100vh-18rem)]">
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-64 bg-gradient-to-r from-primary/10 via-secondary-container/10 to-tertiary-fixed-dim/20 blur-3xl pointer-events-none -z-10 rounded-full" />
          <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-lg flex flex-col gap-space-lg">
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface-variant">
                <Link to="/dashboard" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">dashboard</span>
                  <span>Dashboard</span>
                </Link>
                <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
                <span className="text-on-surface font-medium">Swap Requests</span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-container/60 text-error font-label-sm text-label-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                <span>4 Action Items</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-1 max-w-2xl">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Swap Requests</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">Manage your incoming and outgoing peer-to-peer skill exchange proposals.</p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-space-sm w-full lg:w-auto">
                <div className="relative flex-1 sm:w-72 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/40 flex items-center px-space-sm py-2">
                  <span className="material-symbols-outlined text-outline text-[20px] mr-2">search</span>
                  <input className="w-full bg-transparent text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none" id="requestSearchInput" placeholder="Search members, skills, locations..." type="text" />
                  <button aria-label="Clear Search" className="hidden text-outline hover:text-on-surface transition-colors" id="clearSearchBtn">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
                <div className="relative w-full sm:w-48 shrink-0">
                  <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-body-sm font-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer pr-10" id="statusFilterDropdown">
                    <option value="ALL">All Statuses</option>
                    <option value="PENDING">Pending Action</option>
                    <option value="ACCEPTED">Accepted / Active</option>
                    <option value="REJECTED">Declined</option>
                    <option value="CANCELLED">Cancelled</option>
                    <option value="COMPLETED">Completed</option>
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">expand_more</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm md:gap-space-md">
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex items-center justify-between transition-all hover:shadow-md">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Requests</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold mt-1" id="statTotalRequests">8</span>
                  <span className="font-label-sm text-label-sm text-outline mt-0.5">Incoming & Outgoing</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">swap_horiz</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex items-center justify-between transition-all hover:shadow-md">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pending Received</span>
                  <span className="font-headline-md text-headline-md text-primary font-bold mt-1">2</span>
                  <span className="font-label-sm text-label-sm text-error font-medium mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-error" />
                    Action Needed
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-error-container/40 text-error flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">mark_email_unread</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex items-center justify-between transition-all hover:shadow-md">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Awaiting Partner</span>
                  <span className="font-headline-md text-headline-md text-on-surface font-bold mt-1">2</span>
                  <span className="font-label-sm text-label-sm text-secondary font-medium mt-0.5">Sent Pending</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">hourglass_top</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex items-center justify-between transition-all hover:shadow-md">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Exchanges</span>
                  <span className="font-headline-md text-headline-md text-tertiary font-bold mt-1">3</span>
                  <span className="font-label-sm text-label-sm text-tertiary font-medium mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    Ongoing Synergies
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/40 text-tertiary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>sync_saved_locally</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm border-b border-outline-variant/30 pb-2">
              <div className="flex items-center gap-2 overflow-x-auto pb-1" id="tabGroup">
                <button className="tab-btn active px-4 py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-2 bg-primary text-on-primary shadow-sm" data-tab="ALL">
                  <span>All Requests</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] bg-white/20 text-white font-medium" id="tabCountAll">8</span>
                </button>
                <button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40" data-tab="RECEIVED">
                  <span>Received</span>
                  <span className="relative flex items-center justify-center">
                    <span className="px-2 py-0.5 rounded-full text-[11px] bg-surface-container-high text-on-surface font-medium" id="tabCountReceived">4</span>
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-error ring-2 ring-surface" />
                  </span>
                </button>
                <button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40" data-tab="SENT">
                  <span>Sent</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] bg-surface-container-high text-on-surface font-medium" id="tabCountSent">4</span>
                </button>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant text-body-sm font-body-sm shrink-0 self-end sm:self-auto">
                <span className="material-symbols-outlined text-[18px]">sort</span>
                <span>
                  Sorted by:
                  <strong>Most Recent</strong>
                </span>
              </div>
            </div>
            <div className="hidden transform transition-all duration-300 items-center justify-between p-4 rounded-xl bg-primary text-on-primary shadow-lg" id="statusToast">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px]">verified</span>
                <span className="font-body-md text-body-md" id="toastMessage">Action updated successfully</span>
              </div>
              <button className="text-on-primary/80 hover:text-on-primary">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            {requests.length > 0 ? (
  requests.map((request) => (
    <article
      key={request.id}
      className="request-card bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all border border-outline-variant/30 flex flex-col gap-space-md"
    >
      <div className="flex flex-wrap items-start justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="w-14 h-14 rounded-2xl bg-secondary-fixed text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-inner shrink-0">
            {request.senderName
              .split(" ")
              .map((word: string) => word[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>

          <div className="flex flex-col">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {request.senderName}
            </h2>

            <div className="flex items-center gap-2 mt-1">
              <span className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">
                  south_east
                </span>
                Incoming Request
              </span>

              <span className="text-outline text-label-sm">•</span>

              <span className="text-label-sm text-on-surface-variant">
                {request.status}
              </span>
            </div>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-label-sm bg-amber-50 text-amber-800 border border-amber-200/60 font-semibold">
          {request.status}
        </span>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2 border-t border-outline-variant/20">
        {request.status === "PENDING" && (
          <>
          <button
  onClick={async () => {
    const { error } = await supabase
      .from("swap_requests")
      .update({ status: "REJECTED" })
      .eq("id", request.id);

    if (error) {
      console.error("REJECT REQUEST ERROR:", error);
      alert("Failed to reject request.");
      return;
    }

    setRequests((current) =>
      current.map((item) =>
        item.id === request.id
          ? { ...item, status: "REJECTED" }
          : item
      )
    );

    alert("Swap request rejected.");
  }}
  className="px-4 py-2 rounded-xl border border-error/40 text-error hover:bg-error-container/40 font-label-md transition-colors"
>
  <span className="material-symbols-outlined text-[18px] align-middle mr-1">
    close
  </span>
  Decline
</button>  

           <button
  onClick={async () => {
    const { error } = await supabase
      .from("swap_requests")
      .update({ status: "ACCEPTED" })
      .eq("id", request.id);

    if (error) {
      console.error("ACCEPT REQUEST ERROR:", error);
      alert("Failed to accept request.");
      return;
    }

    setRequests((current) =>
      current.map((item) =>
        item.id === request.id
          ? { ...item, status: "ACCEPTED" }
          : item
      )
    );

    alert("Swap request accepted! 🎉");
  }}
  className="px-5 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md shadow-sm transition-all"
>
  <span className="material-symbols-outlined text-[18px] align-middle mr-1">
    check_circle
  </span>
  Accept Request
</button>
          </>
        )}
      </div>
    </article>
  ))
) : (
  <div className="text-center p-8 text-slate-500">
    No swap requests found.
  </div>
)}

              <article className="request-card bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all border border-outline-variant/30 flex flex-col gap-space-md" data-avatar-initials="DM" data-direction="RECEIVED" data-id="req-3" data-location="Berlin, Germany" data-message="Active synergy established. Progressing through design token automated CI sync to React component libraries." data-name="David Miller" data-offering="Figma Tokens & Design Systems" data-rating="4.8" data-reviews="31" data-schedule="Tuesdays 6:00 PM CET" data-seeking="React Core Architecture" data-skills="figma design tokens react core architecture" data-status="ACCEPTED">
                <div className="flex flex-wrap items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-inner shrink-0">DM</div>
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">David Miller</h2>
                        <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface bg-surface-container-low px-2 py-0.5 rounded-md">
                          <span className="material-symbols-outlined text-[15px] text-amber-500 fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          4.8 (31 reviews)
                        </span>
                        <span className="text-label-sm font-label-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">public</span>
                          Berlin, Germany
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-label-sm text-label-sm text-tertiary font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">sync</span>
                          Active Exchange
                        </span>
                        <span className="text-outline text-label-sm">•</span>
                        <span className="text-label-sm font-label-sm text-on-surface-variant">Accepted Oct 14</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold flex items-center gap-1.5 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-ping" />
                      Accepted • In Progress
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low/70 rounded-xl p-3 border border-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">checklist</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface font-semibold">Session 3 of 5 completed</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Next: Component Token Bindings (Tuesday, Oct 28)</p>
                    </div>
                  </div>
                  <div className="w-full sm:w-48 bg-surface-container-highest rounded-full h-2 overflow-hidden">
                    <div className="bg-tertiary h-full rounded-full transition-all" style={{ width: "60%" }} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm text-body-sm font-body-sm">
                  <div className="p-3 rounded-xl bg-surface-container-low/40">
                    <span className="text-primary font-semibold block text-label-sm uppercase">David Teaches</span>
                    <span className="text-on-surface font-medium">Figma Tokens & Design Systems</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low/40">
                    <span className="text-tertiary font-semibold block text-label-sm uppercase">You Teach</span>
                    <span className="text-on-surface font-medium">React Core Architecture & Hooks</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2 border-t border-outline-variant/20">
                  <button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface flex items-center gap-1 transition-colors py-1">
                    <span className="material-symbols-outlined text-[18px]">history_edu</span>
                    View Exchange Logs
                  </button>
                  <div className="flex items-center gap-space-xs ml-auto">
                    <button className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      Message Partner
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container font-label-md text-label-md shadow-sm transition-all flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">dashboard_customize</span>
                      View Swap Hub
                    </button>
                  </div>
                </div>
              </article>
              <article className="request-card bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg shadow-sm border border-outline-variant/30 flex flex-col gap-space-md opacity-90" data-avatar-initials="VR" data-direction="RECEIVED" data-id="req-4" data-location="Mumbai, Maharashtra" data-message="Declined due to mismatched availability and high skill imbalance." data-name="Vikram Rathod" data-offering="Basic SEO & Search Console Setup" data-rating="4.2" data-reviews="7" data-schedule="Weekends only" data-seeking="Full Stack Next.js & Server Actions" data-skills="basic seo full stack next.js" data-status="REJECTED">
                <div className="flex flex-wrap items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-sm text-headline-sm font-bold shrink-0">VR</div>
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Vikram Rathod</h2>
                        <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface bg-surface-container-low px-2 py-0.5 rounded-md">
                          <span className="material-symbols-outlined text-[15px] text-amber-500 fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          4.2 (7 reviews)
                        </span>
                        <span className="text-label-sm font-label-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          Mumbai
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">cancel</span>
                          Declined on Oct 10
                        </span>
                        <span className="text-outline text-label-sm">•</span>
                        <span className="text-label-sm font-label-sm text-error">Mismatched availability</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm bg-error-container/50 text-error font-medium">Declined</span>
                  </div>
                </div>
                <div className="bg-surface-container-low/40 rounded-xl p-3 text-body-sm font-body-sm text-on-surface-variant flex items-center justify-between">
                  <div>
                    <span>
                      Offered:
                      <strong>Basic SEO</strong>
                      → Requested:
                      <strong>Full Stack Next.js</strong>
                    </span>
                  </div>
                  <button className="text-primary hover:underline font-label-sm text-label-sm">View Archived Details</button>
                </div>
              </article>
              <article className="request-card bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all border border-outline-variant/30 flex flex-col gap-space-md" data-avatar-initials="SC" data-direction="SENT" data-id="req-5" data-location="Austin, TX, USA" data-message="Hi Sarah! Your design systems work is incredible. I'd love to swap my React performance tuning experience for your micro-copy feedback on my open source tool." data-name="Sarah Chen" data-offering="React State Management & Performance Optimization" data-rating="4.9" data-reviews="42" data-schedule="Flexible US CST or IST Afternoons" data-seeking="UI/UX Micro-copy & Design System Content Guidelines" data-skills="ui ux micro-copy react state management performance design systems" data-status="PENDING">
                <div className="flex flex-wrap items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-fixed-dim text-on-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-inner shrink-0">SC</div>
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Sarah Chen</h2>
                        <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface bg-surface-container-low px-2 py-0.5 rounded-md">
                          <span className="material-symbols-outlined text-[15px] text-amber-500 fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          4.9 (42 reviews)
                        </span>
                        <span className="text-label-sm font-label-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          Austin, TX
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-label-sm text-label-sm text-secondary font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">north_east</span>
                          Outgoing Request
                        </span>
                        <span className="text-outline text-label-sm">•</span>
                        <span className="text-label-sm font-label-sm text-on-surface-variant">Sent 1 day ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      Awaiting Response
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low/70 rounded-xl p-space-sm md:p-space-md grid grid-cols-1 md:grid-cols-11 gap-space-sm items-center border border-outline-variant/20">
                  <div className="md:col-span-5 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-bold tracking-wide uppercase">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                      You Offered
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <span className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-xs border border-primary/20">React State Management</span>
                      <span className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-xs border border-primary/20">Performance Tuning</span>
                    </div>
                  </div>
                  <div className="md:col-span-1 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface-variant shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px] text-secondary">swap_horiz</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-tertiary-container font-label-sm text-label-sm font-bold tracking-wide uppercase">
                      <span className="material-symbols-outlined text-[18px]">psychology</span>
                      You Requested
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <span className="px-2.5 py-1 rounded-lg bg-tertiary-fixed/30 text-tertiary font-label-sm text-label-sm font-semibold shadow-xs border border-tertiary/20">UI/UX Micro-copy</span>
                      <span className="px-2.5 py-1 rounded-lg bg-tertiary-fixed/30 text-tertiary font-label-sm text-label-sm font-semibold shadow-xs border border-tertiary/20">Design Systems Guidelines</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-3.5 border-l-4 border-secondary bg-secondary/5 flex flex-col gap-2">
                  <p className="font-body-md text-body-md text-on-surface italic">"Hi Sarah! Your design systems work is incredible. I'd love to swap my React performance tuning experience for your micro-copy feedback on my open source tool."</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2 border-t border-outline-variant/20">
                  <button className="font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant flex items-center gap-1 transition-colors py-1">
                    <span className="material-symbols-outlined text-[18px]">account_box</span>
                    View Sarah's Profile
                  </button>
                  <div className="flex items-center gap-space-xs ml-auto">
                    <button className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface-variant hover:text-error hover:border-error/50 hover:bg-error-container/20 font-label-md text-label-md transition-colors flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                      Cancel Request
                    </button>
                  </div>
                </div>
              </article>
              <article className="request-card bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all border border-outline-variant/30 flex flex-col gap-space-md" data-avatar-initials="NG" data-direction="SENT" data-id="req-6" data-location="New Delhi, India" data-message="Active exchange ongoing. Currently conducting Spanish roleplay scenarios alongside responsive flexbox clinics." data-name="Neha Gupta" data-offering="Tailwind CSS & Responsive Layouts" data-rating="4.9" data-reviews="19" data-schedule="Thursdays 7:30 PM IST" data-seeking="Conversational Spanish A1 Basics" data-skills="tailwind css conversational spanish language" data-status="ACCEPTED">
                <div className="flex flex-wrap items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-inner shrink-0">NG</div>
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Neha Gupta</h2>
                        <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface bg-surface-container-low px-2 py-0.5 rounded-md">
                          <span className="material-symbols-outlined text-[15px] text-amber-500 fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          4.9 (19 reviews)
                        </span>
                        <span className="text-label-sm font-label-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          New Delhi
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-label-sm text-label-sm text-tertiary font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">sync</span>
                          Active Exchange
                        </span>
                        <span className="text-outline text-label-sm">•</span>
                        <span className="text-label-sm font-label-sm text-on-surface-variant">Accepted Oct 02</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-tertiary" />
                      Active Swap
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 rounded-xl p-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-body-sm font-body-sm">
                  <div>
                    <span className="text-label-sm font-semibold uppercase text-primary">You Provide Mentorship:</span>
                    <p className="text-on-surface font-medium">Tailwind CSS & Responsive Layouts</p>
                  </div>
                  <div>
                    <span className="text-label-sm font-semibold uppercase text-tertiary">Neha Provides Mentorship:</span>
                    <p className="text-on-surface font-medium">Conversational Spanish (Level A1)</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2 border-t border-outline-variant/20">
                  <span className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-outline text-[18px]">event</span>
                    Next Session: Thursday at 7:30 PM
                  </span>
                  <div className="flex items-center gap-space-xs ml-auto">
                    <button className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                      Schedule Session
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md shadow-sm transition-all flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">hub</span>
                      View Active Swap
                    </button>
                  </div>
                </div>
              </article>
              <article className="request-card bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg shadow-sm border border-outline-variant/30 flex flex-col gap-space-md opacity-75" data-avatar-initials="MV" data-direction="SENT" data-id="req-7" data-location="Seattle, WA" data-message="Request cancelled by sender due to full project schedule." data-name="Marcus Vance" data-offering="TypeScript advanced utility types" data-rating="4.7" data-reviews="15" data-schedule="Pacific Time mornings" data-seeking="Docker container setups" data-skills="typescript docker cloud deployment" data-status="CANCELLED">
                <div className="flex flex-wrap items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-sm text-headline-sm font-bold shrink-0">MV</div>
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Marcus Vance</h2>
                        <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface bg-surface-container-low px-2 py-0.5 rounded-md">
                          <span className="material-symbols-outlined text-[15px] text-amber-500 fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          4.7 (15 reviews)
                        </span>
                        <span className="text-label-sm font-label-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          Seattle, WA
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">do_not_disturb_on</span>
                          Cancelled by You
                        </span>
                        <span className="text-outline text-label-sm">•</span>
                        <span className="text-label-sm font-label-sm text-on-surface-variant">Cancelled on Sep 28</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm bg-surface-container-high text-on-surface-variant font-medium">Cancelled</span>
                  </div>
                </div>
                <div className="bg-surface-container-low/40 rounded-xl p-3 text-body-sm font-body-sm text-on-surface-variant flex items-center justify-between">
                  <span>
                    You withdrew request for:
                    <strong>Docker Deployment Mentorship</strong>
                  </span>
                  <button className="text-primary hover:underline font-label-sm text-label-sm">View Request Log</button>
                </div>
              </article>
              <article className="request-card bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg shadow-sm hover:shadow-md transition-all border border-outline-variant/30 flex flex-col gap-space-md" data-avatar-initials="LO" data-direction="SENT" data-id="req-8" data-location="Dublin, Ireland" data-message="Swap completed flawlessly! 6 sessions completed on Sept 15 with double 5-star testimonials recorded on chain." data-name="Liam O'Connor" data-offering="JavaScript DOM & Async Fundamentals" data-rating="4.8" data-reviews="50" data-schedule="Completed 6 of 6 sessions" data-seeking="Advanced Excel Financial Modeling" data-skills="javascript dom async excel financial modeling formulas" data-status="COMPLETED">
                <div className="flex flex-wrap items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-14 h-14 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-inner shrink-0">LO</div>
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Liam O'Connor</h2>
                        <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-on-surface bg-surface-container-low px-2 py-0.5 rounded-md">
                          <span className="material-symbols-outlined text-[15px] text-amber-500 fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          4.8 (50 reviews)
                        </span>
                        <span className="text-label-sm font-label-sm text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">public</span>
                          Dublin, Ireland
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">task_alt</span>
                          Successfully Exchanged
                        </span>
                        <span className="text-outline text-label-sm">•</span>
                        <span className="text-label-sm font-label-sm text-on-surface-variant">6 Sessions Completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-label-sm font-label-sm bg-primary-fixed text-primary font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      Completed
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low/60 rounded-xl p-3.5 border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-label-sm font-label-sm text-outline uppercase font-semibold">Peer-to-Peer Feedback Exchanged</span>
                    <p className="text-body-sm font-body-sm text-on-surface">"Alex was a phenomenal JS instructor! In exchange he grasped discounted cash flow modeling in hours."</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 shrink-0">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-md text-label-md font-bold text-on-surface ml-1">5.0</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2 border-t border-outline-variant/20">
                  <button className="font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant flex items-center gap-1 transition-colors py-1">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    View Verified Swap Credential
                  </button>
                  <div className="flex items-center gap-space-xs ml-auto">
                    <button className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      Certificate
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="hidden flex-col items-center justify-center p-space-xl bg-surface-container-lowest rounded-2xl border border-outline-variant/30 text-center gap-space-sm my-4" id="noResultsEmptyState">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[32px]">manage_search</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">No swap requests match your filter</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Try clearing your search query or switching your status filter to view other incoming or outgoing exchanges.</p>
              <div className="flex items-center gap-space-xs mt-2">
                <button className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors">Reset Filters</button>
                <Link to="/explore" className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors">Browse Explore Skills</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4" id="acceptModal">
          <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full shadow-2xl border border-outline-variant/40 overflow-hidden transform transition-all">
            <div className="p-space-lg flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Accept Skill Exchange</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Start a mutual learning journey</p>
                  </div>
                </div>
                <button className="text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="bg-surface-container-low/60 rounded-xl p-4 flex flex-col gap-2 border border-outline-variant/30">
                <div className="flex justify-between items-center text-body-sm font-body-sm">
                  <span className="text-on-surface-variant">Exchange Partner:</span>
                  <span className="font-semibold text-on-surface" id="acceptModalPartner">Rahul Mehta</span>
                </div>
                <div className="flex justify-between items-center text-body-sm font-body-sm">
                  <span className="text-on-surface-variant">You'll Learn:</span>
                  <span className="font-semibold text-primary" id="acceptModalLearn">Photoshop & Lightroom</span>
                </div>
                <div className="flex justify-between items-center text-body-sm font-body-sm">
                  <span className="text-on-surface-variant">You'll Teach:</span>
                  <span className="font-semibold text-tertiary" id="acceptModalTeach">React.js</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input defaultChecked className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant" id="acceptAgreeCheckbox" type="checkbox" />
                  <span className="text-body-sm font-body-sm text-on-surface-variant leading-tight">I agree to adhere to the SkillSwap Reciprocal Code of Conduct and attend scheduled sessions promptly.</span>
                </label>
              </div>
              <div className="flex items-center justify-end gap-space-xs pt-2">
                <button className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md">Cancel</button>
                <button className="px-5 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md shadow-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  Confirm & Start Swap
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4" id="rejectModal">
          <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full shadow-2xl border border-outline-variant/40 overflow-hidden transform transition-all">
            <div className="p-space-lg flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-error-container text-error flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">do_not_disturb</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Decline Swap Request</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant" id="rejectPartnerLabel">Decline exchange with Rahul</p>
                  </div>
                </div>
                <button className="text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Please select a polite reason so your peer understands why you cannot proceed at this time:</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/40 hover:bg-surface-container-low cursor-pointer">
                  <input defaultChecked className="w-4 h-4 text-primary focus:ring-primary" name="declineReason" type="radio" defaultValue="availability" />
                  <span className="font-body-sm text-body-sm text-on-surface">Timezone / Availability mismatch</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/40 hover:bg-surface-container-low cursor-pointer">
                  <input className="w-4 h-4 text-primary focus:ring-primary" name="declineReason" type="radio" defaultValue="capacity" />
                  <span className="font-body-sm text-body-sm text-on-surface">Already reached active swap capacity</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/40 hover:bg-surface-container-low cursor-pointer">
                  <input className="w-4 h-4 text-primary focus:ring-primary" name="declineReason" type="radio" defaultValue="alignment" />
                  <span className="font-body-sm text-body-sm text-on-surface">Skills do not align with my current focus</span>
                </label>
              </div>
              <div className="flex items-center justify-end gap-space-xs pt-2">
                <button className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md">Keep Request</button>
                <button className="px-5 py-2 rounded-xl bg-error text-on-error hover:bg-error/90 font-label-md text-label-md shadow-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                  Decline Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4" id="cancelModal">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full shadow-2xl border border-outline-variant/40 overflow-hidden transform transition-all">
            <div className="p-space-lg flex flex-col gap-space-md">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-error-container/40 text-error flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">delete_forever</span>
                </div>
                <button className="text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Cancel Swap Request?</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1" id="cancelModalBody">Are you sure you want to cancel your swap proposal to Sarah Chen? This will withdraw your invitation.</p>
              </div>
              <div className="flex items-center justify-end gap-space-xs pt-2">
                <button className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md">Keep Request</button>
                <button className="px-5 py-2 rounded-xl bg-error text-on-error hover:bg-error/90 font-label-md text-label-md shadow-sm">Yes, Cancel Proposal</button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-sm flex justify-end" id="detailsDrawer">
          <div className="bg-surface-container-lowest w-full max-w-xl h-full shadow-2xl border-l border-outline-variant/40 flex flex-col justify-between overflow-y-auto transform transition-transform">
            <div className="p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-bold text-headline-sm" id="drawerAvatar">RM</div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold" id="drawerName">Rahul Mehta</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1" id="drawerMeta">
                      <span className="material-symbols-outlined text-[16px] text-amber-500 fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      4.7 • Ahmedabad, Gujarat
                    </p>
                  </div>
                </div>
                <button className="w-9 h-9 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="flex flex-col gap-space-sm">
                <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">Exchange Architecture</h4>
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col gap-3">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary font-semibold uppercase">Offered Knowledge</span>
                    <p className="font-body-md text-body-md text-on-surface font-medium" id="drawerOffered">Photoshop [Expert], Lightroom [Adv]</p>
                  </div>
                  <div className="border-t border-outline-variant/20 pt-2">
                    <span className="font-label-sm text-label-sm text-tertiary-container font-semibold uppercase">Requested Skill</span>
                    <p className="font-body-md text-body-md text-on-surface font-medium" id="drawerSeeking">React.js Fundamentals</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-space-sm">
                <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">Logistics & Availability</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface-container-low/50 rounded-xl p-3">
                    <span className="text-label-sm font-label-sm text-outline">Proposed Hours</span>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium mt-0.5" id="drawerSchedule">Weekday Evenings (IST)</p>
                  </div>
                  <div className="bg-surface-container-low/50 rounded-xl p-3">
                    <span className="text-label-sm font-label-sm text-outline">Meeting Platform</span>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium mt-0.5">SkillSwap Meet (Built-in)</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-space-sm">
                <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">Proposal Memo</h4>
                <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-body-md font-body-md text-on-surface italic" id="drawerMessage">"Looking forward to reciprocal sessions."</div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                  ID Verified
                </span>
                <span className="px-3 py-1 rounded-lg bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">security</span>
                  100% Reciprocity Score
                </span>
                <span className="px-3 py-1 rounded-lg bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">speed</span>
                  Responsive (Under 2 hrs)
                </span>
              </div>
            </div>
            <div className="p-space-lg border-t border-outline-variant/30 bg-surface-container-lowest flex items-center justify-between">
              <button className="px-4 py-2 rounded-xl border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md">Close Dossier</button>
              <button className="px-5 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md shadow-sm">Visit Member Profile</button>
            </div>
          </div>
        </div>
    </main>
  );
}
