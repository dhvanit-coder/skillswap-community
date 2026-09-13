/** Imported Stitch screen (14). Static content until its feature phase is implemented. */
export function AdminSwapsScreen() {
  return (
    <main className="relative bg-background min-h-screen w-full px-space-lg">
      <div className="flex flex-col w-full pb-16 space-y-space-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-md">
          <div>
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Swap Management</span>
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Live Engine
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">Monitor, audit, and moderate peer-to-peer skill exchanges, track completion rates, and manage dispute resolution across the platform.</p>
          </div>
          <div className="flex items-center flex-wrap gap-space-sm">
            <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
              <span className="material-symbols-outlined text-[18px] text-outline">download</span>
              <span>Export Swaps CSV</span>
            </button>
            <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-error-container/60 text-on-error-container hover:bg-error-container transition-colors font-label-md text-label-md group" type="button">
              <span className="material-symbols-outlined text-[18px] text-error group-hover:rotate-12 transition-transform">warning</span>
              <span>Dispute Queue</span>
              <span className="ml-1 bg-error text-on-error font-label-sm text-label-sm px-1.5 py-0.5 rounded-full leading-none">4</span>
            </button>
            <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary shadow-sm hover:bg-primary transition-colors font-label-md text-label-md" type="button">
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              <span>+ Initiate Protocol / Manual Match</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-space-md">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">Total Swaps</span>
              <div className="w-9 h-9 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">5,842</div>
              <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-tertiary">
                <span className="material-symbols-outlined text-[15px]">trending_up</span>
                <span>+16.4% MoM</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-primary/5 rounded-full blur-lg" />
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">Pending</span>
              <div className="w-9 h-9 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px] text-secondary">schedule</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">142</div>
              <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span>Needs match/reply</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-secondary/5 rounded-full blur-lg" />
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">Accepted</span>
              <div className="w-9 h-9 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">580</div>
              <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-secondary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                <span>Active sessions</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-secondary-container/5 rounded-full blur-lg" />
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">Completed</span>
              <div className="w-9 h-9 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px] text-tertiary">check_circle</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">4,620</div>
              <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-tertiary font-medium">
                <span className="material-symbols-outlined text-[14px]">star</span>
                <span>94.2% Satisfied</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-tertiary/5 rounded-full blur-lg" />
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">Rejected</span>
              <div className="w-9 h-9 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">cancel</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">318</div>
              <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-outline">
                <span>Declined by peers</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-outline/5 rounded-full blur-lg" />
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">Cancelled</span>
              <div className="w-9 h-9 rounded-lg bg-error-container text-on-error-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">block</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">182</div>
              <div className="flex items-center gap-1 mt-1 font-label-sm text-label-sm text-error font-medium">
                <span>Terminated/moderated</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-error/5 rounded-full blur-lg" />
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div>
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface">Weekly Barter Cadence & Velocity</span>
                <span className="font-label-sm text-label-sm bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">Realtime</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Distribution of initiated, accepted, and finalized skill trades</p>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg self-start md:self-auto">
              <button className="px-3 py-1 rounded bg-surface-container-lowest font-label-sm text-label-sm text-primary font-bold shadow-sm" type="button">Last 7 Days</button>
              <button className="px-3 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" type="button">Last 30 Days</button>
              <button className="px-3 py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" type="button">Last 6 Months</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mt-space-md pt-space-xs">
            <div className="bg-surface-container-low/70 rounded-lg p-space-sm flex items-center gap-space-sm">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">124</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant block">Requests</span>
              </div>
            </div>
            <div className="bg-surface-container-low/70 rounded-lg p-space-sm flex items-center gap-space-sm">
              <div className="w-3 h-3 rounded-full bg-secondary-container" />
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">86</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant block">Accepted</span>
              </div>
            </div>
            <div className="bg-surface-container-low/70 rounded-lg p-space-sm flex items-center gap-space-sm">
              <div className="w-3 h-3 rounded-full bg-tertiary" />
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">72</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant block">Completed</span>
              </div>
            </div>
            <div className="bg-surface-container-low/70 rounded-lg p-space-sm flex items-center gap-space-sm">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">8</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant block">Cancelled</span>
              </div>
            </div>
          </div>
          <div className="mt-space-lg flex flex-col gap-2">
            <div className="h-32 w-full flex items-end justify-between gap-3 px-2 pt-4">
              <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full max-w-[48px] flex items-end gap-1 h-24">
                  <div className="w-1/3 bg-primary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "65%" }} />
                  <div className="w-1/3 bg-secondary-container rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "50%" }} />
                  <div className="w-1/3 bg-tertiary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "40%" }} />
                </div>
                <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-primary">Mon</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full max-w-[48px] flex items-end gap-1 h-24">
                  <div className="w-1/3 bg-primary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "80%" }} />
                  <div className="w-1/3 bg-secondary-container rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "60%" }} />
                  <div className="w-1/3 bg-tertiary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "55%" }} />
                </div>
                <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-primary">Tue</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full max-w-[48px] flex items-end gap-1 h-24">
                  <div className="w-1/3 bg-primary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "95%" }} />
                  <div className="w-1/3 bg-secondary-container rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "75%" }} />
                  <div className="w-1/3 bg-tertiary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "70%" }} />
                </div>
                <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-primary">Wed</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full max-w-[48px] flex items-end gap-1 h-24">
                  <div className="w-1/3 bg-primary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "70%" }} />
                  <div className="w-1/3 bg-secondary-container rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "45%" }} />
                  <div className="w-1/3 bg-tertiary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "38%" }} />
                </div>
                <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-primary">Thu</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full max-w-[48px] flex items-end gap-1 h-24">
                  <div className="w-1/3 bg-primary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "85%" }} />
                  <div className="w-1/3 bg-secondary-container rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "70%" }} />
                  <div className="w-1/3 bg-tertiary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "60%" }} />
                </div>
                <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-primary">Fri</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full max-w-[48px] flex items-end gap-1 h-24">
                  <div className="w-1/3 bg-primary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "60%" }} />
                  <div className="w-1/3 bg-secondary-container rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "52%" }} />
                  <div className="w-1/3 bg-tertiary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "48%" }} />
                </div>
                <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-primary">Sat</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full max-w-[48px] flex items-end gap-1 h-24">
                  <div className="w-1/3 bg-primary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "45%" }} />
                  <div className="w-1/3 bg-secondary-container rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "35%" }} />
                  <div className="w-1/3 bg-tertiary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: "30%" }} />
                </div>
                <span className="font-label-sm text-[11px] text-on-surface-variant group-hover:text-primary">Sun</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm mt-space-sm bg-surface-container-low/50 px-space-md py-space-sm rounded-lg">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">timelapse</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Average Barter Completion Cycle:</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">12.4 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Dispute SLA Resolution:</span>
                <span className="font-label-md text-label-md text-tertiary font-semibold">{'<'} 2.5 hrs (Median 48 min)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">handshake</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Reciprocity Balance Index:</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">97.8% High Synergistic</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm">
            <div className="md:col-span-5 flex items-center bg-surface-container-low px-space-md py-2 rounded-lg text-on-surface-variant focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary transition-all">
              <span className="material-symbols-outlined text-[20px] text-outline mr-2">search</span>
              <input className="bg-transparent border-none outline-none font-body-sm text-body-sm w-full text-on-surface placeholder:text-outline" placeholder="Search by swap ID (e.g. #SWP-1024), user name, or skill keyword..." type="text" />
            </div>
            <div className="md:col-span-3">
              <div className="relative">
                <select className="w-full appearance-none bg-surface-container-low px-space-md py-2 pr-8 rounded-lg font-label-md text-label-md text-on-surface outline-none cursor-pointer hover:bg-surface-container transition-colors">
                  <option>All Statuses (Pending, Accepted, Completed...)</option>
                  <option>Accepted (In Progress)</option>
                  <option>Pending Response</option>
                  <option>Completed</option>
                  <option>Rejected</option>
                  <option>Cancelled / Moderated</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[18px] text-outline pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="relative">
                <select className="w-full appearance-none bg-surface-container-low px-space-md py-2 pr-8 rounded-lg font-label-md text-label-md text-on-surface outline-none cursor-pointer hover:bg-surface-container transition-colors">
                  <option>Last 30 Days ▾</option>
                  <option>Last 7 Days</option>
                  <option>This Quarter</option>
                  <option>All Time History</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[18px] text-outline pointer-events-none">calendar_today</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="relative">
                <select className="w-full appearance-none bg-surface-container-low px-space-md py-2 pr-8 rounded-lg font-label-md text-label-md text-on-surface outline-none cursor-pointer hover:bg-surface-container transition-colors">
                  <option>All Skill Categories ▾</option>
                  <option>Engineering & Dev</option>
                  <option>Design & Creative</option>
                  <option>Finance & Business</option>
                  <option>Languages & Writing</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[18px] text-outline pointer-events-none">category</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2">
            <div className="flex items-center flex-wrap gap-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Active filters:</span>
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container-high text-on-surface px-2.5 py-1 rounded-full">
                Status: All Active & Moderated
                <button className="hover:text-error ml-0.5" type="button">
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              </span>
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container-high text-on-surface px-2.5 py-1 rounded-full">
                Category: All Taxonomies
                <button className="hover:text-error ml-0.5" type="button">
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              </span>
              <button className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:underline ml-1" type="button">
                <span className="material-symbols-outlined text-[14px]">restart_alt</span>
                Reset Filters
              </button>
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              Showing
              <span className="text-on-surface font-bold">1–8</span>
              of
              <span className="text-on-surface font-bold">5,842</span>
              swaps
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          <div className="xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <div className="bg-surface-container-low px-space-md py-2 flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <input className="rounded w-4 h-4 text-primary accent-primary cursor-pointer" type="checkbox" />
                <span className="font-label-sm text-label-sm text-on-surface-variant">Select all listed exchanges</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary flex items-center gap-1" type="button">
                  <span className="material-symbols-outlined text-[16px]">file_download</span>
                  Quick Export Selection
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    <th className="py-3 px-3 w-10" />
                    <th className="py-3 px-3">Swap ID</th>
                    <th className="py-3 px-3">Participants</th>
                    <th className="py-3 px-3">Exchange Taxonomy (Offer ⇄ Want)</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3">Timeline</th>
                    <th className="py-3 px-3">Health / Cadence</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y-0 font-body-sm text-body-sm">
                  <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                    <td className="py-3.5 px-3">
                      <input defaultChecked className="rounded w-4 h-4 accent-primary cursor-pointer" type="checkbox" />
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md text-primary font-bold">
                        <span>#SWP-1024</span>
                        <button className="text-outline hover:text-primary" title="Copy ID" type="button">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="flex items-center -space-x-2">
                          <img className="w-7 h-7 rounded-full object-cover shadow-sm ring-2 ring-surface" data-alt="Close-up professional headshot of Rahul, a South Asian graphic designer smiling in modern studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWRdaFlAlPZ0kVupVbraIvMhZkV_fjG7kE13wTPc0YdOs1JP-muRi4oIDP2FCRmysiZG9FpaPYpwHAu3GyiLGHsYjOS4wQxP0xNqE110OvQtvqgBy0STJJ4rQtwiEB4xrWygtSNvvw-ApLb5LcDqAm1lKC1fnh8pwebSjJZKlMSvTNDOr-nP7bKz48zWEeoMSlnpJLs-q4DOXEGjqrOK8X9y9gUwFY0OLbpIGbYTso57y7sMnbT3iXvQ" />
                          <img className="w-7 h-7 rounded-full object-cover shadow-sm ring-2 ring-surface" data-alt="Warm friendly professional portrait of Priya, an Indian senior female software engineer wearing glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsTBwcABnCr9gOdFjnWUe6Ob-COfNrG91NN5K9B2Bi_h2iZFwFeH_MQyjRwG64jNQX7QH3BVX1UoJ6ZhR51NDHjaPf3zwoSHzpJ7VDgNtBIqL9KKb11m8oUXx64R7P1yXjIfns0lqVtx1Z2DuGiSanFRMUVu6QpYEz7PhgQHfpP5JcHzCIqfjaDO8TR71pnoft3bnkUtzD-BBmv5nj73NXq_EbycotptTtKoei8eTtnyWhCZoQLPhVXA" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Rahul Mehta
                            <span className="text-tertiary">★ 4.8</span>
                          </span>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">
                            → Priya Shah
                            <span className="text-tertiary">★ 4.9</span>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-label-sm text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Photoshop CC</span>
                        <span className="material-symbols-outlined text-[14px] text-outline">sync_alt</span>
                        <span className="font-label-sm text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-medium">React.js Core</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 rounded-full font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        Accepted
                      </span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface">05 Sep 2026</span>
                        <span className="font-label-sm text-[11px] text-outline">2h ago</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-primary font-bold">Session 4/6</span>
                        <div className="w-20 bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-1">
                          <div className="bg-primary h-full rounded-full" style={{ width: "66%" }} />
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-primary hover:bg-primary-fixed rounded" title="View Details" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-error hover:bg-error-container/30 rounded" title="Flag Swap" type="button">
                          <span className="material-symbols-outlined text-[18px]">flag</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-on-surface hover:bg-surface-container rounded" title="More" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/60 transition-colors">
                    <td className="py-3.5 px-3">
                      <input className="rounded w-4 h-4 accent-primary cursor-pointer" type="checkbox" />
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
                        <span>#SWP-1023</span>
                        <button className="text-outline hover:text-primary" type="button">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">DM</div>
                          <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">NG</div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                            David Miller
                            <span className="text-tertiary">★ 4.8</span>
                          </span>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">
                            → Neha Gupta
                            <span className="text-tertiary">★ 4.9</span>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-label-sm text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Figma Systems</span>
                        <span className="material-symbols-outlined text-[14px] text-outline">sync_alt</span>
                        <span className="font-label-sm text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-medium">CSS Grid</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 rounded-full font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Accepted
                      </span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface">04 Sep 2026</span>
                        <span className="font-label-sm text-[11px] text-outline">5h ago</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-secondary font-semibold">Session 3/4</span>
                        <div className="w-20 bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-1">
                          <div className="bg-secondary-container h-full rounded-full" style={{ width: "75%" }} />
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-error hover:bg-error-container/30 rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">flag</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-on-surface hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-error-container/20 hover:bg-error-container/30 transition-colors">
                    <td className="py-3.5 px-3">
                      <input className="rounded w-4 h-4 accent-error cursor-pointer" type="checkbox" />
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md text-error font-bold">
                        <span>#SWP-1022</span>
                        <button className="text-outline hover:text-error" type="button">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-error text-on-error flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">AT</div>
                          <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">MV</div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-error font-semibold flex items-center gap-1">
                            Alex Thorne
                            <span className="bg-error text-on-error text-[10px] px-1 rounded">Flagged</span>
                          </span>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">→ Marcus Vance ★ 4.7</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-label-sm text-[11px] bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full line-through">Crypto Trading Bots</span>
                        <span className="material-symbols-outlined text-[14px] text-outline">sync_alt</span>
                        <span className="font-label-sm text-[11px] bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full">JavaScript ES6</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-error-container text-on-error-container px-2.5 py-1 rounded-full font-semibold">
                        <span className="material-symbols-outlined text-[14px]">block</span>
                        Cancelled
                      </span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface">03 Sep 2026</span>
                        <span className="font-label-sm text-[11px] text-outline">Yesterday</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="font-label-sm text-[11px] text-error font-semibold bg-error-container/60 px-2 py-0.5 rounded">Policy Breach (Spam)</span>
                    </td>
                    <td className="py-3.5 px-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-error hover:bg-error-container rounded" title="View Moderation Log" type="button">
                          <span className="material-symbols-outlined text-[18px]">gavel</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-on-surface hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/60 transition-colors">
                    <td className="py-3.5 px-3">
                      <input className="rounded w-4 h-4 accent-primary cursor-pointer" type="checkbox" />
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
                        <span>#SWP-1021</span>
                        <button className="text-outline hover:text-primary" type="button">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">LO</div>
                          <div className="w-7 h-7 rounded-full bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">AA</div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Liam O'Connor
                            <span className="text-tertiary">★ 5.0</span>
                          </span>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">
                            → Amina Al-Mansoor
                            <span className="text-tertiary">★ 4.9</span>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-label-sm text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Financial Modeling</span>
                        <span className="material-symbols-outlined text-[14px] text-outline">sync_alt</span>
                        <span className="font-label-sm text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-medium">B2B SEO Strategy</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full font-semibold">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Completed
                      </span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface">28 Aug 2026</span>
                        <span className="font-label-sm text-[11px] text-outline">2d ago</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="font-label-sm text-[11px] text-tertiary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">stars</span>
                        5.0 ★ Mutual
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-on-surface hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/60 transition-colors">
                    <td className="py-3.5 px-3">
                      <input className="rounded w-4 h-4 accent-primary cursor-pointer" type="checkbox" />
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
                        <span>#SWP-1020</span>
                        <button className="text-outline hover:text-primary" type="button">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">ER</div>
                          <div className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">SC</div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">Elena Rostova ★ 4.9</span>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">→ Sarah Chen ★ 4.9</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-label-sm text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Spanish (Native)</span>
                        <span className="material-symbols-outlined text-[14px] text-outline">sync_alt</span>
                        <span className="font-label-sm text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-medium">Product Arch</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-surface-container-high text-on-surface px-2.5 py-1 rounded-full font-semibold">
                        <span className="material-symbols-outlined text-[14px] text-secondary">hourglass_empty</span>
                        Pending
                      </span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface">06 Sep 2026</span>
                        <span className="font-label-sm text-[11px] text-outline">15m ago</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="font-label-sm text-[11px] text-secondary font-medium">36h SLA Remaining</span>
                    </td>
                    <td className="py-3.5 px-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-on-surface hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/60 transition-colors opacity-85">
                    <td className="py-3.5 px-3">
                      <input className="rounded w-4 h-4 accent-primary cursor-pointer" type="checkbox" />
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
                        <span>#SWP-1019</span>
                        <button className="text-outline hover:text-primary" type="button">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">RP</div>
                          <div className="w-7 h-7 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">PD</div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">Rohan Patel ★ 4.6</span>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">→ Priyanshu Das ★ 4.5</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-label-sm text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Blender Rigging</span>
                        <span className="material-symbols-outlined text-[14px] text-outline">sync_alt</span>
                        <span className="font-label-sm text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-medium">Tailwind CSS</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-surface-container-high text-outline px-2.5 py-1 rounded-full font-semibold">
                        <span className="material-symbols-outlined text-[14px]">close</span>
                        Rejected
                      </span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface">01 Sep 2026</span>
                        <span className="font-label-sm text-[11px] text-outline">3d ago</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="font-label-sm text-[11px] text-outline">Schedule Mismatch</span>
                    </td>
                    <td className="py-3.5 px-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-on-surface hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/60 transition-colors">
                    <td className="py-3.5 px-3">
                      <input className="rounded w-4 h-4 accent-primary cursor-pointer" type="checkbox" />
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
                        <span>#SWP-1018</span>
                        <button className="text-outline hover:text-primary" type="button">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">SJ</div>
                          <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">DM</div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">Sarah Jenkins ★ 5.0</span>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">→ David Miller ★ 4.8</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-label-sm text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Sec Auditing</span>
                        <span className="material-symbols-outlined text-[14px] text-outline">sync_alt</span>
                        <span className="font-label-sm text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-medium">WebGL Shaders</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full font-semibold">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Completed
                      </span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface">20 Aug 2026</span>
                        <span className="font-label-sm text-[11px] text-outline">1w ago</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="font-label-sm text-[11px] text-tertiary font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">stars</span>
                        4.9 ★ Mutual
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-on-surface hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/60 transition-colors">
                    <td className="py-3.5 px-3">
                      <input className="rounded w-4 h-4 accent-primary cursor-pointer" type="checkbox" />
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
                        <span>#SWP-1017</span>
                        <button className="text-outline hover:text-primary" type="button">
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="flex items-center -space-x-2">
                          <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">MV</div>
                          <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-[11px] font-bold ring-2 ring-surface">RM</div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold">Marcus Vance ★ 4.7</span>
                          <span className="font-label-sm text-[11px] text-on-surface-variant">→ Raj Mehta ★ 4.8</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-label-sm text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Premiere Video</span>
                        <span className="material-symbols-outlined text-[14px] text-outline">sync_alt</span>
                        <span className="font-label-sm text-[11px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-medium">Node.js API</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 rounded-full font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Accepted
                      </span>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface">02 Sep 2026</span>
                        <span className="font-label-sm text-[11px] text-outline">1d ago</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-secondary font-semibold">Session 1/5</span>
                        <div className="w-20 bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-1">
                          <div className="bg-secondary-container h-full rounded-full" style={{ width: "20%" }} />
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 text-outline hover:text-on-surface hover:bg-surface-container rounded" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-container-lowest px-space-md py-3 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <span>Rows per page:</span>
                <select className="bg-surface-container-low px-2 py-1 rounded font-label-md text-label-md text-on-surface outline-none cursor-pointer">
                  <option>8 per page</option>
                  <option>15 per page</option>
                  <option>25 per page</option>
                  <option>50 per page</option>
                </select>
              </div>
              <div className="flex items-center gap-1 font-label-md text-label-md">
                <button className="p-1.5 rounded hover:bg-surface-container text-outline hover:text-on-surface disabled:opacity-40" disabled type="button">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 rounded bg-primary text-on-primary font-bold" type="button">1</button>
                <button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface" type="button">2</button>
                <button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface" type="button">3</button>
                <span className="px-1 text-outline">...</span>
                <button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface" type="button">731</button>
                <button className="p-1.5 rounded hover:bg-surface-container text-outline hover:text-on-surface" type="button">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md space-y-space-md relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Swap Details</span>
                    <span className="font-label-md text-label-md text-primary font-semibold">#SWP-1024</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Accepted • In Progress
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Tier: 1-on-1 Barter</span>
                  </div>
                </div>
                <button className="p-1 text-outline hover:text-on-surface hover:bg-surface-container rounded transition-colors" title="Close Panel" type="button">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-sm space-y-space-sm">
                <div className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Reciprocal Match Architecture</div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-surface-container-lowest p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img className="w-9 h-9 rounded-full object-cover" data-alt="Close up professional headshot of Rahul smiling with warm creative background lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD38OqIWwK7_gcQWxtDrbH7h3lyg7m-8kVOjJA22EgyO2XVUc6eCKBsFJ-PVni2tGJIKBBIrgcaRz-uvbPzshyoXFVeUTOFBhvcSBo-gvnfUMLQVeRwBwNYhBqxOhtq2tw-4uqr0HjVQcAG4PONvR2qdAVsoahhofM5aLXH2PsPavJKh43OOCwVzxoa-bCacMTVkpYyXrlIZvfo-Dvcw0Jlj3ChU92-hL-dQE7y5AW-pBRPy1h3YssVcw" />
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-label-md text-label-md text-on-surface font-bold">Rahul Mehta</span>
                          <span className="material-symbols-outlined text-[15px] text-tertiary">verified</span>
                        </div>
                        <span className="font-label-sm text-[11px] text-on-surface-variant">Ahmedabad, IN • ★ 4.8 (18 swaps)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-label-sm text-[10px] text-primary uppercase font-bold tracking-wider block">Teaches</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Photoshop CC</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center -my-1 relative z-10">
                    <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">sync</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img className="w-9 h-9 rounded-full object-cover" data-alt="Portrait of Priya Shah software architect mentor looking confident and friendly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh49q9M17KdFKXRVyIHKg-ywEGOjPe_05pSrAbnP9p5Pyz5Xm-y8nvhARgr39CRWANMG-xRHjAO4DHr9uCBcDlgNAh4wfYhi3gQAjk5YSH88mpAV8Lvc_HgH71fjPUevMyx0BSthDEG75rrHha0XYqwT7eXvCxDaKZFY01XwqkM5ST8h0lP9KzJrWguRad7FIvBaj33A3kfs-AO9itmLNGCJVpiQjZylCY2Vuxy0uh0YGW-uWFlD8vNw" />
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-label-md text-label-md text-on-surface font-bold">Priya Shah</span>
                          <span className="bg-primary/10 text-primary font-label-sm text-[10px] px-1.5 py-0.2 rounded font-semibold">Top Mentor</span>
                        </div>
                        <span className="font-label-sm text-[11px] text-on-surface-variant">Ahmedabad, IN • ★ 4.9 (28 swaps)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-label-sm text-[10px] text-tertiary uppercase font-bold tracking-wider block">Teaches</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">React.js & Hooks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-sm space-y-2">
                <div className="flex items-center justify-between font-label-md text-label-md">
                  <span className="text-on-surface font-semibold">Session Progress Milestones</span>
                  <span className="text-primary font-bold">4 of 6 Completed (66%)</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all" style={{ width: "66%" }} />
                </div>
                <div className="flex justify-between font-label-sm text-[11px] text-on-surface-variant pt-1">
                  <span>Cadence: 2 sessions / week</span>
                  <span>Target End: 19 Sep 2026</span>
                </div>
              </div>
              <div className="space-y-space-xs">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Audit Trail & Verification</span>
                <div className="relative pl-5 space-y-3 pt-2 font-body-sm text-body-sm">
                  <div className="absolute left-1.5 top-3 bottom-2 w-0.5 bg-surface-container-high" />
                  <div className="relative">
                    <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface-container-lowest" />
                    <div className="font-label-sm text-label-sm text-on-surface font-semibold">Session 4 Concluded & Verified</div>
                    <div className="font-label-sm text-[11px] text-outline">12 Sep 2026, 05:45 PM • Peer Signature OK</div>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-secondary-container ring-4 ring-surface-container-lowest" />
                    <div className="font-label-sm text-label-sm text-on-surface font-semibold">Session 1 Verified & Room Logged</div>
                    <div className="font-label-sm text-[11px] text-outline">07 Sep 2026, 06:00 PM • Screen shared: 58 mins</div>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-tertiary-container ring-4 ring-surface-container-lowest" />
                    <div className="font-label-sm text-label-sm text-on-surface font-semibold">Accepted by Priya Shah</div>
                    <div className="font-label-sm text-[11px] text-outline">05 Sep 2026, 02:30 PM • Terms agreed</div>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-outline ring-4 ring-surface-container-lowest" />
                    <div className="font-label-sm text-label-sm text-on-surface font-semibold">Proposal Initiated by Rahul Mehta</div>
                    <div className="font-label-sm text-[11px] text-outline">05 Sep 2026, 10:14 AM • Via Discovery Portal</div>
                  </div>
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <button className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                    <span className="material-symbols-outlined text-[16px] text-outline">chat</span>
                    <span>Review Chat</span>
                  </button>
                  <button className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                    <span className="material-symbols-outlined text-[16px] text-error">flag</span>
                    <span>Flag Dispute</span>
                  </button>
                </div>
                <button className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-error-container text-on-error-container font-label-md text-label-md hover:bg-error-container/80 transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px]">cancel</span>
                  <span>Force Terminate / Cancel Swap</span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md space-y-space-sm">
              <div className="flex items-center gap-space-sm text-error">
                <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">warning</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Cancel this swap?</h4>
                  <span className="font-label-sm text-[11px] text-outline">Administrative Override Protocol</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                This action will immediately terminate the current skill exchange agreement between
                <strong>Rahul Mehta</strong>
                and
                <strong>Priya Shah</strong>
                , close active session rooms, and notify both parties with an administrative rationale.
              </p>
              <div className="space-y-1">
                <label className="font-label-sm text-label-sm text-on-surface font-semibold block">Select Cancellation Reason</label>
                <select className="w-full bg-surface-container-low px-space-md py-2 rounded-lg font-label-md text-label-md text-on-surface outline-none">
                  <option>Policy Breach / Inappropriate Conduct</option>
                  <option>Unresponsive Partner</option>
                  <option>Mutual Incompatibility</option>
                  <option>Admin Intervention (Spam / Fake Account)</option>
                </select>
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors" type="button">Keep Active</button>
                <button className="px-3 py-1.5 rounded-lg bg-error text-on-error font-label-md text-label-md hover:bg-error/90 transition-colors" type="button">Confirm Cancellation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
