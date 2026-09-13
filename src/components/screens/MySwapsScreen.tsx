/** Imported Stitch screen (8). Static content until its feature phase is implemented. */
export function MySwapsScreen() {
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
                2 Active Exchanges
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
              <button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl font-headline-sm text-[15px] transition-all duration-200 bg-surface-container-lowest text-primary shadow-sm" id="tab-btn-active">
                <span className="material-symbols-outlined text-[18px]">swap_horizontal_circle</span>
                <span>Active Swaps</span>
                <span className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-[11px] flex items-center justify-center font-bold">2</span>
              </button>
              <button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-xl font-headline-sm text-[15px] transition-all duration-200 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/60" id="tab-btn-history">
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
                <button className="p-2 bg-surface-container-lowest hover:bg-surface-container rounded-xl text-on-surface-variant transition-colors shadow-sm" title="Sort Order">
                  <span className="material-symbols-outlined text-[20px]">sort</span>
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-space-lg" id="section-active-swaps">
            <div className="relative bg-surface-container-lowest rounded-2xl p-space-md md:p-space-lg shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md border-b border-surface-container-high/60">
                <div className="flex items-center gap-space-md">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm bg-surface-variant">
                      <img className="w-full h-full object-cover" data-alt="Close up photographic portrait of Priya Shah, a South Asian female graphic designer with warm studio lighting, modern creative workspace background with indigo accents, smiling friendly expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqa6d840vfqhCWjgBzyTR8lOplACl7yEBli3oxPE4zuuQMJ1FY9D7QiWBzPB1o02b5mGEPi4CdLlWhwoMfelGk_DP0PJiG3KCJNcf5Wb6K90WZt1_iu6pklz0qqHk0em_6DgVFFEgWY_GFd20qTqQYSESCK4TvZ110zNP6u7lwcYKhAcmtj4U2157nD9XxYksjXhewKovwxEA9dXK_1LDpvb4hQ6LtzzSuQTYX07gOEpGaBn7ICRq6sw" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" title="Online now" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Priya Shah</h3>
                      <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-bold">Top Mentor</span>
                      <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px] font-bold">Fast Responder</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        Ahmedabad, Gujarat
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        4.9
                        <span className="font-normal text-on-surface-variant">(24 reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm lg:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-md text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Active • On Track
                  </span>
                  <div className="px-3 py-1 rounded-xl bg-surface-container-low text-on-surface-variant font-body-sm text-xs flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">event_upcoming</span>
                    <span>
                      Next:
                      <strong>Tomorrow, 6:00 PM IST</strong>
                    </span>
                  </div>
                  <a className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100/60 hover:bg-emerald-100 px-3 py-1 rounded-xl font-label-md text-xs font-bold transition-colors" href="#">
                    <span className="material-symbols-outlined text-[16px]">video_camera_front</span>
                    Open Session Room
                  </a>
                </div>
              </div>
              <div className="py-space-md grid grid-cols-1 md:grid-cols-2 gap-space-md relative">
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface-container-lowest shadow-md items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                </div>
                <div className="p-space-md rounded-2xl bg-surface-container-low/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">school</span>
                        You Teach
                      </span>
                      <span className="font-label-md text-xs font-bold text-on-surface">Session 4 of 6</span>
                    </div>
                    <h4 className="mt-2 font-headline-sm text-headline-sm text-on-surface">React Core & Modern Hooks</h4>
                    <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Custom hooks, State management with Context, and performance memoization patterns.</p>
                  </div>
                  <div className="mt-space-md pt-space-xs">
                    <div className="flex items-center justify-between font-label-sm text-xs mb-1.5">
                      <span className="text-on-surface-variant">Course Cadence</span>
                      <span className="text-primary font-bold">65% Completed</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                      <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: "65%" }} />
                    </div>
                  </div>
                </div>
                <div className="p-space-md rounded-2xl bg-surface-container-low/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-[11px] uppercase tracking-wider text-tertiary-container font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">local_library</span>
                        You Learn
                      </span>
                      <span className="font-label-md text-xs font-bold text-on-surface">Session 4 of 6</span>
                    </div>
                    <h4 className="mt-2 font-headline-sm text-headline-sm text-on-surface">Photoshop & Brand Design</h4>
                    <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Vector pen manipulation, raster masking techniques, brand guideline asset generation.</p>
                  </div>
                  <div className="mt-space-md pt-space-xs">
                    <div className="flex items-center justify-between font-label-sm text-xs mb-1.5">
                      <span className="text-on-surface-variant">Learning Trajectory</span>
                      <span className="text-tertiary-container font-bold">65% Completed</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                      <div className="h-full rounded-full bg-tertiary-container transition-all duration-500" style={{ width: "65%" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                <div className="flex items-center gap-2 font-body-sm text-xs text-on-surface-variant w-full sm:w-auto">
                  <span className="material-symbols-outlined text-[16px] text-outline">calendar_month</span>
                  <span>Started 5 Sept 2026</span>
                  <span className="text-outline-variant">•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
                    Shared Weekends & Evenings
                  </span>
                </div>
                <div className="flex items-center gap-space-xs w-full sm:w-auto justify-end">
                  <button className="px-space-sm py-2 rounded-xl text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors">View Profile</button>
                  <button className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors">View Swap Details</button>
                  <button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-xl bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">task_alt</span>
                    Mark as Completed
                  </button>
                </div>
              </div>
            </div>
            <div className="relative bg-surface-container-lowest rounded-2xl p-space-md md:p-space-lg shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md border-b border-surface-container-high/60">
                <div className="flex items-center gap-space-md">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm bg-surface-variant">
                      <img className="w-full h-full object-cover" data-alt="Clean corporate and casual profile headshot of David Miller, an experienced product designer from Seattle, soft indoor daylight, slate navy apparel, friendly calm demeanour." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPG0ycCyzIm6srhBpR1pc8o_3FVNtf1Ni9vHO57XC9VmJJ93NM9lsLUM0Hej7rHcuzjjWEQL_K5dx1QcWIXznv6hcGtBaeYpRCLV2Bd9dO15NSt4apNbApiPl8WiFQUtT8zPz0-feslv2-pTJcBJVhxt1mVKGW7T6kO1tbGK3lPdOuKBwbr0DITWelXQc_sKMCpWZwXFYc2si5Hxd41upoGkOKKD_3ysXqlB5gTlzcIpAvALP2aJeARg" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" title="Available" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">David Miller</h3>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">Verified Swapper</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        Seattle, WA
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-semibold text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        4.8
                        <span className="font-normal text-on-surface-variant">(19 reviews)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm lg:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-md text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Active • Final Stage
                  </span>
                  <div className="px-3 py-1 rounded-xl bg-surface-container-low text-on-surface-variant font-body-sm text-xs flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">event_upcoming</span>
                    <span>
                      Next:
                      <strong>Friday, 7:30 PM CST</strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-space-md grid grid-cols-1 md:grid-cols-2 gap-space-md relative">
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface-container-lowest shadow-md items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                </div>
                <div className="p-space-md rounded-2xl bg-surface-container-low/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">code</span>
                        You Teach
                      </span>
                      <span className="font-label-md text-xs font-bold text-on-surface">Session 3 of 4</span>
                    </div>
                    <h4 className="mt-2 font-headline-sm text-headline-sm text-on-surface">Modern CSS & Tailwind Architecture</h4>
                    <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Component breakdown, custom utility configurations, and accessible layout building.</p>
                  </div>
                  <div className="mt-space-md pt-space-xs">
                    <div className="flex items-center justify-between font-label-sm text-xs mb-1.5">
                      <span className="text-on-surface-variant">Exchange Status</span>
                      <span className="text-primary font-bold">75% Completed</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                      <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: "75%" }} />
                    </div>
                  </div>
                </div>
                <div className="p-space-md rounded-2xl bg-surface-container-low/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-[11px] uppercase tracking-wider text-tertiary-container font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">token</span>
                        You Learn
                      </span>
                      <span className="font-label-md text-xs font-bold text-on-surface">Session 3 of 4</span>
                    </div>
                    <h4 className="mt-2 font-headline-sm text-headline-sm text-on-surface">Figma Design Systems & Design Tokens</h4>
                    <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Auto-layout 5.0, variables, theme switches, and component library governance.</p>
                  </div>
                  <div className="mt-space-md pt-space-xs">
                    <div className="flex items-center justify-between font-label-sm text-xs mb-1.5">
                      <span className="text-on-surface-variant">Mastery Arc</span>
                      <span className="text-tertiary-container font-bold">75% Completed</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                      <div className="h-full rounded-full bg-tertiary-container transition-all duration-500" style={{ width: "75%" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                <div className="flex items-center gap-2 font-body-sm text-xs text-on-surface-variant w-full sm:w-auto">
                  <span className="material-symbols-outlined text-[16px] text-outline">calendar_month</span>
                  <span>Started 18 Aug 2026</span>
                  <span className="text-outline-variant">•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
                    Shared Evenings PST
                  </span>
                </div>
                <div className="flex items-center gap-space-xs w-full sm:w-auto justify-end">
                  <button className="px-space-sm py-2 rounded-xl text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors">View Profile</button>
                  <button className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors">View Swap Details</button>
                  <button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-xl bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">task_alt</span>
                    Mark as Completed
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden space-y-space-lg" id="section-swap-history">
            <div className="relative bg-surface-container-lowest rounded-2xl p-space-md md:p-space-lg shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high/60">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden bg-surface-variant shadow-sm">
                    <img className="w-full h-full object-cover" data-alt="Portrait photo of Rahul Mehta, professional software developer, clean backdrop, warm smile, modern spectacles, tech workspace setup." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4CwSPO0WKlzg_jnBkC1armADfGqNG68dUDLLHZ2hh45SIDyoVZ44akqStw8lnMLmuCjKl6GiyChhaP4RGWrwOTiP7v5ueKB3CtWK5JI-4W7C6DvkG0nb2sUfdeW0JXEasSpBjhcTeg0DKtztkq710TEwbXo3sgDI-hKDpCEpc1SFD7DdxQq2kM_-l8xbuKsM6k5YI4HyS6Ul2SRBUheA4L4es8B6bneP0w56jAk0P7snDzeZZcJo0g" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Rahul Mehta</h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-label-sm text-[11px] font-bold inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        Completed
                      </span>
                    </div>
                    <div className="font-body-sm text-xs text-on-surface-variant flex items-center gap-2 mt-0.5">
                      <span>Mumbai, IN</span>
                      <span>•</span>
                      <span>Completed 28 Aug 2026</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <button className="px-space-sm py-1.5 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-md text-xs transition-colors">View Public Review</button>
                  <button className="px-space-sm py-1.5 rounded-xl bg-surface-container text-primary hover:bg-surface-container-high font-label-md text-xs transition-colors">Archive Details</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm py-space-sm">
                <div className="p-space-sm rounded-xl bg-surface-container-low/40">
                  <span className="font-label-sm text-[10px] text-primary uppercase font-bold tracking-wider">You Taught</span>
                  <div className="font-headline-sm text-sm text-on-surface font-semibold mt-0.5">Canva & Social Media Graphics</div>
                </div>
                <div className="p-space-sm rounded-xl bg-surface-container-low/40">
                  <span className="font-label-sm text-[10px] text-tertiary-container uppercase font-bold tracking-wider">You Learned</span>
                  <div className="font-headline-sm text-sm text-on-surface font-semibold mt-0.5">JavaScript Async & API Integration</div>
                </div>
              </div>
              <div className="p-space-sm rounded-xl bg-amber-50/60 flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-amber-600 mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1">
                    <span className="font-label-md text-xs font-bold text-amber-900">5.0 Star Feedback</span>
                    <span className="text-amber-700 text-xs">from Rahul</span>
                  </div>
                  <p className="font-body-sm text-xs text-amber-950 italic">"Alex is a fantastic mentor! He explained asynchronous JavaScript and Promise chaining with real-world scenarios that immediately made sense. Would gladly swap skills again anytime!"</p>
                </div>
              </div>
            </div>
            <div className="relative bg-surface-container-lowest rounded-2xl p-space-md md:p-space-lg shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high/60">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden bg-surface-variant shadow-sm">
                    <img className="w-full h-full object-cover" data-alt="Portrait photo of Neha Gupta, smiling language coach and community educator, soft warm outdoor portrait, modern natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsU7Z3crdOMH_jOsKd35_PrlronUo3pYE2mJEM4VExoGEMwsboV5E6qAO57DCU8dDsVTlNWIBnIlZ8uA5PYEUp588fLTamtrzOOsva-RoNdOTB3v-DTbdXmtw2CUGdYYqnkBn2aNhSbpKLn0xPH6RUpJW6aN6Mb7AT9icEgtb3QfTusDde0NrmOOA-QrUUv-motgm1fuJI1z1zXBOKwa4dzDoUD_KfbZCM_l8MqLL4JAj44zyygziXcg" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Neha Gupta</h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-label-sm text-[11px] font-bold inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                        Completed
                      </span>
                    </div>
                    <div className="font-body-sm text-xs text-on-surface-variant flex items-center gap-2 mt-0.5">
                      <span>Completed 15 Aug 2026</span>
                      <span>•</span>
                      <span>Taught: Tailwind CSS ⇄ Learned: Spanish A1</span>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">rate_review</span>
                  Feedback Pending
                </div>
              </div>
              <div className="my-space-sm p-space-md rounded-2xl bg-gradient-to-r from-primary-fixed/30 via-surface-container-low to-tertiary-fixed/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">stars</span>
                  </div>
                  <div>
                    <h5 className="font-headline-sm text-sm text-on-surface font-semibold">You haven't left a rating yet for Neha</h5>
                    <p className="font-body-sm text-xs text-on-surface-variant">Help your peer establish credibility in the community by rating your 4 sessions.</p>
                  </div>
                </div>
              </div>
              <div className="p-space-md rounded-2xl bg-surface-container-low/60 space-y-space-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-label-md text-xs font-bold text-on-surface">Rate Neha's Spanish Mentoring:</span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[26px] text-outline-variant hover:text-amber-400 cursor-pointer transition-transform hover:scale-110" id="star-icon-1">star</span>
                      <span className="material-symbols-outlined text-[26px] text-outline-variant hover:text-amber-400 cursor-pointer transition-transform hover:scale-110" id="star-icon-2">star</span>
                      <span className="material-symbols-outlined text-[26px] text-outline-variant hover:text-amber-400 cursor-pointer transition-transform hover:scale-110" id="star-icon-3">star</span>
                      <span className="material-symbols-outlined text-[26px] text-outline-variant hover:text-amber-400 cursor-pointer transition-transform hover:scale-110" id="star-icon-4">star</span>
                      <span className="material-symbols-outlined text-[26px] text-outline-variant hover:text-amber-400 cursor-pointer transition-transform hover:scale-110" id="star-icon-5">star</span>
                    </div>
                    <span className="font-label-sm text-xs text-primary font-bold ml-2" id="rating-feedback-label">Click stars to rate</span>
                  </div>
                </div>
                <div>
                  <textarea className="w-full p-space-sm bg-surface-container-lowest rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" placeholder="Share how Neha helped you learn Spanish A1 conversational basics..." rows={2} />
                </div>
                <div className="flex justify-end">
                  <button className="px-space-md py-2 rounded-xl bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md transition-all shadow-sm">Submit Feedback</button>
                </div>
              </div>
            </div>
          </div>
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
