/** Imported Stitch screen (11). Static content until its feature phase is implemented. */
export function AdminDashboardScreen() {
  return (
    <main className="relative w-full bg-background min-h-screen">
      <div className="flex flex-col w-full">
        <div className="px-8 py-8 flex flex-col gap-8 max-w-[1560px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-2">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Admin Dashboard</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
                  Real-Time Sync
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">Platform-wide swap volume, liquidity metrics, user integrity oversight, and live triage queue.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-surface-container-low p-1 rounded-xl flex items-center shadow-sm">
                <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-label-sm text-label-sm text-primary font-semibold shadow-sm transition-all" type="button">Last 7 days</button>
                <button className="px-3 py-1.5 rounded-lg text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors" type="button">Last 30 days</button>
                <button className="px-3 py-1.5 rounded-lg text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors" type="button">Last 6 mos</button>
                <button className="px-3 py-1.5 rounded-lg text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors flex items-center gap-1" type="button">
                  <span>Custom</span>
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button">
                <span className="material-symbols-outlined text-[18px] text-outline">file_download</span>
                <span>Export Audit Log</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md transition-all shadow-sm" type="button">
                <span className="material-symbols-outlined text-[18px]">campaign</span>
                <span>+ System Broadcast</span>
              </button>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm flex items-center justify-between overflow-x-auto gap-3">
            <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm px-2">
              <span className="material-symbols-outlined text-[18px] text-primary">bolt</span>
              <span className="uppercase tracking-wider font-semibold text-outline">Shortcuts:</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-sm text-label-sm text-on-surface transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px] text-primary">group</span>
                <span>Manage Users</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-sm text-label-sm text-on-surface transition-colors relative" type="button">
                <span className="material-symbols-outlined text-[16px] text-error">flag</span>
                <span>Review Reports</span>
                <span className="w-4 h-4 rounded-full bg-error text-on-error font-label-sm text-[10px] flex items-center justify-center font-bold">3</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-sm text-label-sm text-on-surface transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px] text-primary">auto_stories</span>
                <span>Manage Skills</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-sm text-label-sm text-on-surface transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px] text-secondary">send</span>
                <span>Send Announcement</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-sm text-label-sm text-on-surface transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px] text-outline">analytics</span>
                <span>Download Weekly Metrics</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-sm text-label-sm text-on-surface transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px] text-outline">history</span>
                <span>Security Audit Trail</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-primary-container/5 group-hover:scale-125 transition-transform duration-300" />
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Total Users</span>
                <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">group</span>
                </div>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">12,480</div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="flex items-center text-tertiary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                    14.2%
                  </span>
                  <span className="font-body-sm text-body-sm text-outline">vs prev 30d</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-tertiary-fixed/20 group-hover:scale-125 transition-transform duration-300" />
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Active Swappers</span>
                <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[18px]">person_check</span>
                </div>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">8,924</div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-[11px] font-semibold">71.5% Active</span>
                  <span className="font-body-sm text-body-sm text-outline">engagement</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-amber-50 group-hover:scale-125 transition-transform duration-300" />
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Pending Swaps</span>
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
                  <span className="material-symbols-outlined text-[18px]">hourglass_top</span>
                </div>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">142</div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="font-label-sm text-label-sm text-amber-800 font-medium">Needs Attention</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-tertiary-fixed/20 group-hover:scale-125 transition-transform duration-300" />
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Completed Swaps</span>
                <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                </div>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">3,819</div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="flex items-center text-tertiary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    +22.4%
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-[10px] font-semibold text-on-surface-variant">Record</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-secondary-fixed/40 group-hover:scale-125 transition-transform duration-300" />
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Total Skills</span>
                <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[18px]">category</span>
                </div>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">468</div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="font-body-sm text-body-sm text-outline">Across 12 Taxonomies</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-primary-fixed/30 group-hover:scale-125 transition-transform duration-300" />
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Avg Peer Rating</span>
                <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight flex items-center gap-1">
                  <span>4.86</span>
                  <span className="text-amber-500 font-headline-sm text-headline-sm">★</span>
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="font-body-sm text-body-sm text-outline">7,240 mutual reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">swap_calls</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">Swap Activity & Barter Volume</h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Distribution of accepted, completed, pending, and aborted barter agreements.</p>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-xl">
                    <button className="px-3 py-1 rounded-lg bg-surface-container-lowest font-label-sm text-label-sm font-semibold text-primary shadow-xs" type="button">7 Days</button>
                    <button className="px-3 py-1 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" type="button">30 Days</button>
                    <button className="px-3 py-1 rounded-lg font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" type="button">6 Months</button>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-surface-container-low rounded-xl">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      Pending
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">142</span>
                    <span className="font-body-sm text-[12px] text-outline">In queue</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                      Accepted
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">580</span>
                    <span className="font-body-sm text-[12px] text-outline">In session</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
                      Completed
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">412</span>
                    <span className="font-body-sm text-[12px] text-tertiary font-semibold">+18.5% rate</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-error" />
                      Cancelled
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">34</span>
                    <span className="font-body-sm text-[12px] text-outline">3.1% abort rate</span>
                  </div>
                </div>
                <div className="w-full pt-2 flex flex-col gap-2">
                  <div className="h-64 w-full relative flex items-end justify-between px-2 pt-6">
                    <div className="absolute inset-x-0 top-0 h-full flex flex-col justify-between pointer-events-none opacity-40">
                      <div className="w-full border-b border-surface-container-highest flex items-center justify-between text-outline text-[11px]">
                        <span>120</span>
                      </div>
                      <div className="w-full border-b border-surface-container-highest flex items-center justify-between text-outline text-[11px]">
                        <span>90</span>
                      </div>
                      <div className="w-full border-b border-surface-container-highest flex items-center justify-between text-outline text-[11px]">
                        <span>60</span>
                      </div>
                      <div className="w-full border-b border-surface-container-highest flex items-center justify-between text-outline text-[11px]">
                        <span>30</span>
                      </div>
                      <div className="w-full border-b border-surface-container-highest flex items-center justify-between text-outline text-[11px]">
                        <span>0</span>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer w-12">
                      <div className="flex items-end gap-1 w-full justify-center h-full">
                        <div className="w-2 rounded-t bg-tertiary-container transition-all group-hover:brightness-110" style={{ height: "55%" }} title="Completed: 55" />
                        <div className="w-2 rounded-t bg-primary-container transition-all group-hover:brightness-110" style={{ height: "72%" }} title="Accepted: 72" />
                        <div className="w-2 rounded-t bg-amber-400 transition-all group-hover:brightness-110" style={{ height: "24%" }} title="Pending: 24" />
                        <div className="w-2 rounded-t bg-error/70 transition-all group-hover:brightness-110" style={{ height: "6%" }} title="Cancelled: 6" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">Mon</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer w-12">
                      <div className="flex items-end gap-1 w-full justify-center h-full">
                        <div className="w-2 rounded-t bg-tertiary-container transition-all group-hover:brightness-110" style={{ height: "64%" }} title="Completed: 64" />
                        <div className="w-2 rounded-t bg-primary-container transition-all group-hover:brightness-110" style={{ height: "80%" }} title="Accepted: 80" />
                        <div className="w-2 rounded-t bg-amber-400 transition-all group-hover:brightness-110" style={{ height: "20%" }} title="Pending: 20" />
                        <div className="w-2 rounded-t bg-error/70 transition-all group-hover:brightness-110" style={{ height: "4%" }} title="Cancelled: 4" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">Tue</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer w-12">
                      <div className="flex items-end gap-1 w-full justify-center h-full">
                        <div className="w-2 rounded-t bg-tertiary-container transition-all group-hover:brightness-110" style={{ height: "70%" }} title="Completed: 70" />
                        <div className="w-2 rounded-t bg-primary-container transition-all group-hover:brightness-110" style={{ height: "94%" }} title="Accepted: 94" />
                        <div className="w-2 rounded-t bg-amber-400 transition-all group-hover:brightness-110" style={{ height: "28%" }} title="Pending: 28" />
                        <div className="w-2 rounded-t bg-error/70 transition-all group-hover:brightness-110" style={{ height: "7%" }} title="Cancelled: 7" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">Wed</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer w-12">
                      <div className="flex items-end gap-1 w-full justify-center h-full">
                        <div className="w-2 rounded-t bg-tertiary-container transition-all group-hover:brightness-110" style={{ height: "58%" }} title="Completed: 58" />
                        <div className="w-2 rounded-t bg-primary-container transition-all group-hover:brightness-110" style={{ height: "78%" }} title="Accepted: 78" />
                        <div className="w-2 rounded-t bg-amber-400 transition-all group-hover:brightness-110" style={{ height: "18%" }} title="Pending: 18" />
                        <div className="w-2 rounded-t bg-error/70 transition-all group-hover:brightness-110" style={{ height: "3%" }} title="Cancelled: 3" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">Thu</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer w-12">
                      <div className="flex items-end gap-1 w-full justify-center h-full">
                        <div className="w-2 rounded-t bg-tertiary-container transition-all group-hover:brightness-110" style={{ height: "84%" }} title="Completed: 84" />
                        <div className="w-2 rounded-t bg-primary-container transition-all group-hover:brightness-110" style={{ height: "100%" }} title="Accepted: 110" />
                        <div className="w-2 rounded-t bg-amber-400 transition-all group-hover:brightness-110" style={{ height: "32%" }} title="Pending: 32" />
                        <div className="w-2 rounded-t bg-error/70 transition-all group-hover:brightness-110" style={{ height: "5%" }} title="Cancelled: 5" />
                      </div>
                      <span className="font-label-sm text-label-sm text-primary font-bold">Fri</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer w-12">
                      <div className="flex items-end gap-1 w-full justify-center h-full">
                        <div className="w-2 rounded-t bg-tertiary-container transition-all group-hover:brightness-110" style={{ height: "48%" }} title="Completed: 48" />
                        <div className="w-2 rounded-t bg-primary-container transition-all group-hover:brightness-110" style={{ height: "62%" }} title="Accepted: 62" />
                        <div className="w-2 rounded-t bg-amber-400 transition-all group-hover:brightness-110" style={{ height: "14%" }} title="Pending: 14" />
                        <div className="w-2 rounded-t bg-error/70 transition-all group-hover:brightness-110" style={{ height: "4%" }} title="Cancelled: 4" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">Sat</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer w-12">
                      <div className="flex items-end gap-1 w-full justify-center h-full">
                        <div className="w-2 rounded-t bg-tertiary-container transition-all group-hover:brightness-110" style={{ height: "52%" }} title="Completed: 52" />
                        <div className="w-2 rounded-t bg-primary-container transition-all group-hover:brightness-110" style={{ height: "68%" }} title="Accepted: 68" />
                        <div className="w-2 rounded-t bg-amber-400 transition-all group-hover:brightness-110" style={{ height: "16%" }} title="Pending: 16" />
                        <div className="w-2 rounded-t bg-error/70 transition-all group-hover:brightness-110" style={{ height: "3%" }} title="Cancelled: 3" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">Sun</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-surface-container gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
                        <span className="font-label-sm text-label-sm text-on-surface">
                          <span className="font-bold">92.4%</span>
                          Mutual Completion Rate
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">timer</span>
                        <span className="font-label-sm text-label-sm text-on-surface">
                          <span className="font-bold">4.2 hrs</span>
                          Avg. Time to First Barter Match
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-outline font-label-sm text-label-sm">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded bg-tertiary-container" />
                        Completed
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded bg-primary-container" />
                        Accepted
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded bg-amber-400" />
                        Pending
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded bg-error" />
                        Cancelled
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">manage_accounts</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">Recent User Registrations</h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Manage member credentials, skill inventories, and account standing.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-56">
                      <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-outline">search</span>
                      <input className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Filter by name, skill..." type="text" />
                    </div>
                    <select className="px-3 py-1.5 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface focus:outline-none cursor-pointer">
                      <option>All Statuses</option>
                      <option>Active</option>
                      <option>Flagged / Review</option>
                      <option>Suspended</option>
                    </select>
                    <a className="font-label-sm text-label-sm text-primary hover:underline font-semibold flex items-center gap-0.5" href="#">
                      <span>View All</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </a>
                  </div>
                </div>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low/60 text-outline font-label-sm text-[12px] uppercase tracking-wider">
                        <th className="py-3 px-6 font-semibold">User</th>
                        <th className="py-3 px-4 font-semibold">Skills Offered</th>
                        <th className="py-3 px-4 font-semibold">Skills Seeking</th>
                        <th className="py-3 px-4 font-semibold">Rating</th>
                        <th className="py-3 px-4 font-semibold">Status</th>
                        <th className="py-3 px-4 font-semibold">Joined</th>
                        <th className="py-3 px-6 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container">
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-xs">
                              <img className="w-full h-full object-cover" data-alt="Portrait photo of Sarah Chen, a professional female Asian UX designer in her late 20s smiling with soft studio natural lighting and subtle indigo blurred background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx3iPKUjLm4YRlwI1Nvqf7k_8g-dEaw-pcWDnSPcvXDhKr84IGo3Dh4dhoJtc0ACH4enMcmQu25njtULP-CwtWfVA-hO-7M4O7rRmr60iZMyvSVD6BW6FtsrrDJ-k-MyTQcT8-WWkx1YcgcLtncoirKOn8wMfX3YWy2m0gqVBUBaxkrNGiZlUA0hRWBzpy1w9Ej0hFmX64qY1_eHpIuxl1aDljfEpTcMJ7wx15csFc2sum5x6l4eJiYA" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-label-md text-label-md text-on-surface font-semibold truncate">Sarah Chen</span>
                                <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified Profile">verified</span>
                              </div>
                              <span className="font-body-sm text-body-sm text-outline truncate">sarah.c@fintech.io • Austin, TX</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-medium">Figma</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-medium">Design Systems</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">React.js</span>
                            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">Next.js</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface">
                            <span className="text-amber-500">★</span>
                            <span className="font-semibold">4.9</span>
                            <span className="text-outline text-[12px]">(22)</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
                            Active
                          </span>
                        </td>
                        <td className="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2026</td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">View</button>
                            <button className="px-2.5 py-1 rounded-lg hover:bg-error-container text-error font-label-sm text-label-sm transition-colors" title="Suspend or Ban User" type="button">Ban</button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-xs">
                              <img className="w-full h-full object-cover" data-alt="Portrait photo of Rohan Patel, a 30-year-old male creative designer wearing spectacles in modern studio setting with warm ambient indoor lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY22ItWQuFsn7JIJXXpSQCm5z0aAVUUncLiYpJL_ChTChWxjB2qmxMXqvs_5UoZc7T7Ez19FTJ0rfpQncZ0R65uNvdmLN13s-Q8lgcCwJh5dRK68QhTvi4gEGRSJdrjuvqL8sffVHHyIaQY8ruWDTEg7zdUYF8C3cZA3Op-pYlCY4GwZ3AbZhC9A5G5IQ4W5HT_1jdve1MpZduxXAacF0PW2MsnLYKn64CyqgSFkFEXerIvziX9xK2WQ" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-label-md text-label-md text-on-surface font-semibold truncate">Rohan Patel</span>
                                <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified Profile">verified</span>
                              </div>
                              <span className="font-body-sm text-body-sm text-outline truncate">rohan.patel@design.in • Ahmedabad, IN</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-medium">Blender 3D</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-medium">Illustrator</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">Tailwind CSS</span>
                            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">JS</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface">
                            <span className="text-amber-500">★</span>
                            <span className="font-semibold">4.8</span>
                            <span className="text-outline text-[12px]">(19)</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
                            Active
                          </span>
                        </td>
                        <td className="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Oct 23, 2026</td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">View</button>
                            <button className="px-2.5 py-1 rounded-lg hover:bg-error-container text-error font-label-sm text-label-sm transition-colors" type="button">Ban</button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-xs">
                              <img className="w-full h-full object-cover" data-alt="Portrait photo of Marcus Vance, a creative video director in his early 30s with trimmed beard wearing a casual charcoal jacket in an editorial workspace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1kB429SlIeoxXrnEe_jCG7OZVC70_hMyhiqLwoIfudYeOO4AclyNQIzvztEDNJk99GROyAAmw92Jc-kkP2QXrBqO_mrgrUv7WGrNjMw4zJFiadRKi6tEZg9H4grWaKHH2QVdvLymSU07qUFo7BKEfyTZfnf5tcxtnNbuJAIHHJOywCAZ29ZNrPpxCNIYnXJVVg8Xu4qlODJ6UwX11skgjs-KDvOtIGE4p3R1xBfUkQ9Pri-fhlrBcwA" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-label-md text-label-md text-on-surface font-semibold truncate">Marcus Vance</span>
                              </div>
                              <span className="font-body-sm text-body-sm text-outline truncate">m.vance@studio.org • Seattle, WA</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-medium">Video Editing</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-medium">Premiere</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">JavaScript</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface">
                            <span className="text-amber-500">★</span>
                            <span className="font-semibold">4.7</span>
                            <span className="text-outline text-[12px]">(12)</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
                            Active
                          </span>
                        </td>
                        <td className="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Oct 22, 2026</td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">View</button>
                            <button className="px-2.5 py-1 rounded-lg hover:bg-error-container text-error font-label-sm text-label-sm transition-colors" type="button">Ban</button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-error-container/20 hover:bg-error-container/30 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center font-bold text-sm shrink-0">AT</div>
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-label-md text-label-md text-on-surface font-semibold truncate">Alex Thorne</span>
                                <span className="material-symbols-outlined text-[16px] text-error" title="Reported User">flag</span>
                              </div>
                              <span className="font-body-sm text-body-sm text-error truncate">alex.t@tempmail.xyz • Chicago, IL</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px]">Crypto Trading</span>
                            <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px]">SEO Botting</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">FullStack</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1 font-label-sm text-label-sm text-error">
                            <span className="text-error">★</span>
                            <span className="font-semibold">2.1</span>
                            <span className="text-outline text-[12px]">(3)</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error text-on-error font-label-sm text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-on-error animate-ping" />
                            Flagged
                          </span>
                        </td>
                        <td className="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Oct 21, 2026</td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="px-2.5 py-1 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">Review</button>
                            <button className="px-2.5 py-1 rounded-lg bg-error text-on-error font-label-sm text-label-sm hover:brightness-110 transition-all font-semibold" type="button">Ban Now</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 bg-surface-container-lowest flex items-center justify-between border-t border-surface-container">
                  <span className="font-body-sm text-body-sm text-outline">
                    Showing
                    <span className="text-on-surface font-medium">1-4</span>
                    of
                    <span className="text-on-surface font-medium">12,480</span>
                    users
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container text-outline font-label-sm text-label-sm disabled:opacity-50 cursor-not-allowed" type="button">Previous</button>
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors" type="button">Next</button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">sync_alt</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Live Swap Transactions</h2>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping" />
                    Live Barter Stream
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">swap_horizontal_circle</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">Priya Shah</span>
                          <span className="text-outline text-[14px]">⇄</span>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">Alex Johnson</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 mt-0.5">
                          <span className="text-primary font-medium">Photoshop & Brand Design</span>
                          <span className="text-outline">bartered for</span>
                          <span className="text-secondary font-medium">React Core Hooks</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                      <div className="flex flex-col text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-semibold">In Progress (4/6 hrs)</span>
                        <span className="font-body-sm text-[11px] text-outline mt-0.5">Started 2h ago</span>
                      </div>
                      <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" title="Inspect Swap Details" type="button">
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">handshake</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">David Miller</span>
                          <span className="text-outline text-[14px]">⇄</span>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">Neha Gupta</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 mt-0.5">
                          <span className="text-primary font-medium">Figma Tokens & AutoLayout</span>
                          <span className="text-outline">bartered for</span>
                          <span className="text-secondary font-medium">Modern CSS Grid</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                      <div className="flex flex-col text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-secondary font-label-sm text-[11px] font-semibold">Accepted</span>
                        <span className="font-body-sm text-[11px] text-outline mt-0.5">Matched 5h ago</span>
                      </div>
                      <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">task_alt</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">Liam O'Connor</span>
                          <span className="text-outline text-[14px]">⇄</span>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">Amina Al-Mansoor</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 mt-0.5">
                          <span className="text-primary font-medium">Financial Modeling</span>
                          <span className="text-outline">bartered for</span>
                          <span className="text-secondary font-medium">B2B SEO Strategy</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                      <div className="flex flex-col text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-[11px] font-semibold">Completed</span>
                        <span className="font-body-sm text-[11px] text-outline mt-0.5">Yesterday</span>
                      </div>
                      <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">pending_actions</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">Rahul Mehta</span>
                          <span className="text-outline text-[14px]">⇄</span>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">Elena Rostova</span>
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 mt-0.5">
                          <span className="text-primary font-medium">Lightroom Color Grading</span>
                          <span className="text-outline">bartered for</span>
                          <span className="text-secondary font-medium">Spanish C1 Conversation</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                      <div className="flex flex-col text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-label-sm text-[11px] font-semibold">Pending Acceptance</span>
                        <span className="font-body-sm text-[11px] text-outline mt-0.5">15m ago</span>
                      </div>
                      <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-5 border-l-4 border-error">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-error text-[22px]">warning</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Moderation Queue</h2>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-semibold animate-pulse">3 Pending</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-error shrink-0" />
                        <span className="font-label-md text-label-md text-on-surface font-semibold">Reported User: Alex Thorne</span>
                      </div>
                      <span className="font-body-sm text-[11px] text-outline shrink-0">24m ago</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Reported by 2 users for unsolicited spam promotions in barter chat. Multiple accounts affected.</p>
                    <div className="flex items-center gap-2 pt-1">
                      <button className="flex-1 py-1.5 px-3 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-primary transition-colors text-center font-semibold" type="button">Review Report</button>
                      <button className="py-1.5 px-3 rounded-lg hover:bg-surface-container text-outline hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">Dismiss</button>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        <span className="font-label-md text-label-md text-on-surface font-semibold">Flagged Skill Description</span>
                      </div>
                      <span className="font-body-sm text-[11px] text-outline shrink-0">1h ago</span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container-lowest font-body-sm text-[13px] text-on-surface italic">"Guaranteed 100x Crypto Returns Trading"</div>
                    <p className="font-body-sm text-body-sm text-error">Violation of Community Guidelines: Unverified financial promises and predatory trading advice.</p>
                    <div className="flex items-center gap-2 pt-1">
                      <button className="flex-1 py-1.5 px-3 rounded-lg bg-surface-container-highest text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors text-center font-semibold" type="button">Inspect & Edit</button>
                      <button className="py-1.5 px-3 rounded-lg bg-error-container text-on-error-container hover:brightness-95 font-label-sm text-label-sm transition-colors font-semibold" type="button">Reject Skill</button>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="font-label-md text-label-md text-on-surface font-semibold">Rate Limit Trigger</span>
                      </div>
                      <span className="font-body-sm text-[11px] text-outline shrink-0">3h ago</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      User ID
                      <code className="px-1.5 py-0.5 rounded bg-surface-container font-mono text-[12px] text-primary">#8921</code>
                      initiated 14 swap requests in 5 minutes. Temporary rate cooldown applied.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <button className="flex-1 py-1.5 px-3 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors text-center font-semibold" type="button">Inspect Activity</button>
                      <button className="py-1.5 px-3 rounded-lg text-outline hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[22px]">dns</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">System Health</h2>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-[11px] font-semibold">99.98% SLA</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface font-medium">WebSocket Pairing Engine</span>
                      <span className="text-tertiary font-semibold">Operational</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-tertiary-container rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface font-medium">Matchmaking Latency</span>
                      <span className="text-on-surface font-mono font-bold">18ms</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-primary-container rounded-full" style={{ width: "15%" }} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-on-surface font-medium">Media & File Storage</span>
                      <span className="text-on-surface font-mono font-bold">42% (2.1 TB / 5 TB)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-secondary-container rounded-full" style={{ width: "42%" }} />
                    </div>
                  </div>
                  <div className="pt-3 border-t border-surface-container flex items-center justify-between font-body-sm text-[12px] text-outline">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">update</span>
                      Automated DB Snapshot:
                    </span>
                    <span className="font-medium text-on-surface">Scheduled in 3 hours</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">record_voice_over</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Quick Broadcast</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Dispatch platform-wide alerts to swapper dashboards immediately.</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold block mb-1">Target Audience</label>
                    <select className="w-full px-3 py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option>All Active Members (8,924)</option>
                      <option>Technical / Developer Track</option>
                      <option>Design & Creative Track</option>
                      <option>New Members ({'<'} 7 days)</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold block mb-1">Notice Headline</label>
                    <input className="w-full px-3 py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g., Scheduled Maintenance Window..." type="text" />
                  </div>
                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold block mb-1">Message Content</label>
                    <textarea className="w-full px-3 py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Write concise platform broadcast update..." rows={3} />
                  </div>
                  <button className="w-full mt-1 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all flex items-center justify-center gap-2 font-semibold shadow-sm" type="button">
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Dispatch Alert</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
