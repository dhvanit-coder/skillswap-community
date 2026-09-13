/** Imported Stitch screen (13). Static content until its feature phase is implemented. */
export function AdminSkillsScreen() {
  return (
    <main className="w-full bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        <div className="p-space-lg lg:p-margin flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-space-md">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span>SkillSwap Admin</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-semibold">Skills Management</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Skills Management</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Manage the skills users can offer and learn across the peer exchange network.</p>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm">
              <button className="flex items-center gap-space-xs px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-secondary transition-all active:scale-[0.98]" id="openAddModalBtn" type="button">
                <span className="material-symbols-outlined text-[20px]">add</span>
                <span>+ Add Skill</span>
              </button>
              <button className="flex items-center gap-space-xs px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">file_download</span>
                <span>Taxonomy Export</span>
              </button>
              <div className="relative inline-block text-left">
                <button className="flex items-center gap-space-xs px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">tune</span>
                  <span>Category Settings</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant">Total Skills</span>
                <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">interests</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <span className="font-display-xl-mobile xl:font-display-xl text-display-xl-mobile xl:text-display-xl text-on-surface font-bold leading-none tracking-tight">468</span>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                    <span>+12 this month</span>
                  </span>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary/5 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant">Most Popular Skill</span>
                <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[22px]">trending_up</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold leading-tight">React.js</span>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    342 active profiles
                  </span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">offering/seeking</span>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-tertiary/5 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant">Skills in Active Swaps</span>
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[22px]">swap_calls</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <span className="font-display-xl-mobile xl:font-display-xl text-display-xl-mobile xl:text-display-xl text-on-surface font-bold leading-none tracking-tight">314</span>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">67.1%</span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">barter utilization rate</span>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-secondary/5 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            </div>
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant">Recently Added</span>
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[22px]">pending_actions</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <span className="font-display-xl-mobile xl:font-display-xl text-display-xl-mobile xl:text-display-xl text-on-surface font-bold leading-none tracking-tight">18</span>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-error font-label-sm text-label-sm font-semibold">4 unmapped</span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">pending curriculum review</span>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-on-surface/5 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
            <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
              <div className="relative flex-1 max-w-lg">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">search</span>
                <input className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.25)] outline-none transition-all" id="skillSearchInput" placeholder="Search skills by name, tag, keyword..." type="text" />
              </div>
              <div className="flex flex-wrap items-center gap-space-sm justify-between xl:justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Status:</span>
                  <select className="px-3 py-2 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface outline-none cursor-pointer focus:bg-surface-container transition-colors">
                    <option>All Statuses</option>
                    <option>Active</option>
                    <option>Under Review</option>
                    <option>Deprecated</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Sort by:</span>
                  <select className="px-3 py-2 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface outline-none cursor-pointer focus:bg-surface-container transition-colors">
                    <option>Most Used</option>
                    <option>Highest Demand</option>
                    <option>Recently Added</option>
                    <option>Alphabetical</option>
                  </select>
                </div>
                <button className="text-primary font-label-sm text-label-sm hover:underline ml-1" type="button">Clear Filters</button>
              </div>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
              <button className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-semibold whitespace-nowrap shadow-sm" type="button">All Categories (468)</button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors" type="button">Development (142)</button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors" type="button">Design (86)</button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors" type="button">Marketing (54)</button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors" type="button">Business (48)</button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors" type="button">Languages (38)</button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors" type="button">Productivity (32)</button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-colors" type="button">Creative (68)</button>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/70 font-label-sm text-label-sm text-on-surface-variant select-none">
                    <th className="p-4 pl-6 w-12 text-center">
                      <input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </th>
                    <th className="p-4 font-semibold">Skill Name & Icon</th>
                    <th className="p-4 font-semibold">Category</th>
                    <th className="p-4 font-semibold">Users Offering</th>
                    <th className="p-4 font-semibold">Users Wanting (Demand)</th>
                    <th className="p-4 font-semibold">Total Swaps</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold">Created Date</th>
                    <th className="p-4 pr-6 text-right font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="p-4 pl-6 text-center">
                      <input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">code</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">React.js</span>
                          <span className="text-on-surface-variant font-label-sm text-[11px]">ID: SKL-8041</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Development</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">person</span>
                        <span>184 users</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-on-surface">210 wanting</span>
                        <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[10px] font-bold uppercase tracking-wider">High Demand</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[16px] text-secondary">swap_horiz</span>
                        <span>94 completed</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant font-label-sm text-label-sm">12 Jan 2025</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View details" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Edit skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Delete skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="p-4 pl-6 text-center">
                      <input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined text-[20px]">brush</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">Figma & UI Systems</span>
                          <span className="text-on-surface-variant font-label-sm text-[11px]">ID: SKL-7729</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-[11px] font-semibold">Design</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">person</span>
                        <span>146 users</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-on-surface">168 wanting</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[16px] text-secondary">swap_horiz</span>
                        <span>78 completed</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant font-label-sm text-label-sm">15 Jan 2025</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View details" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Edit skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Delete skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="p-4 pl-6 text-center">
                      <input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary">
                          <span className="material-symbols-outlined text-[20px]">translate</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">Conversational Spanish</span>
                          <span className="text-on-surface-variant font-label-sm text-[11px]">ID: SKL-4412</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-label-sm text-[11px] font-semibold">Languages</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">person</span>
                        <span>64 users</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-on-surface">92 wanting</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[16px] text-secondary">swap_horiz</span>
                        <span>41 completed</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant font-label-sm text-label-sm">02 Feb 2025</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View details" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Edit skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Delete skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="p-4 pl-6 text-center">
                      <input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">terminal</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">Python & Data Analysis</span>
                          <span className="text-on-surface-variant font-label-sm text-[11px]">ID: SKL-9023</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Development</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">person</span>
                        <span>112 users</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-on-surface">138 wanting</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[16px] text-secondary">swap_horiz</span>
                        <span>63 completed</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant font-label-sm text-label-sm">20 Jan 2025</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View details" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Edit skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Delete skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="p-4 pl-6 text-center">
                      <input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined text-[20px]">campaign</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">SEO & Growth Marketing</span>
                          <span className="text-on-surface-variant font-label-sm text-[11px]">ID: SKL-3390</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-[11px] font-semibold">Marketing</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">person</span>
                        <span>58 users</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-on-surface">74 wanting</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[16px] text-secondary">swap_horiz</span>
                        <span>29 completed</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant font-label-sm text-label-sm">10 Feb 2025</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View details" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Edit skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Delete skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="p-4 pl-6 text-center">
                      <input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">movie</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">Video Editing (Premiere & After Effects)</span>
                          <span className="text-on-surface-variant font-label-sm text-[11px]">ID: SKL-5892</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-[11px] font-semibold">Creative</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">person</span>
                        <span>76 users</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-on-surface">89 wanting</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[16px] text-secondary">swap_horiz</span>
                        <span>37 completed</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant font-label-sm text-label-sm">28 Jan 2025</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View details" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Edit skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Delete skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="p-4 pl-6 text-center">
                      <input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary">
                          <span className="material-symbols-outlined text-[20px]">query_stats</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">Financial Modeling & Pitch Decks</span>
                          <span className="text-on-surface-variant font-label-sm text-[11px]">ID: SKL-1104</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-tertiary font-label-sm text-[11px] font-semibold">Business</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">person</span>
                        <span>42 users</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-on-surface">51 wanting</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[16px] text-secondary">swap_horiz</span>
                        <span>22 completed</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant font-label-sm text-label-sm">14 Feb 2025</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View details" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Edit skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Delete skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="p-4 pl-6 text-center">
                      <input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                          <span className="material-symbols-outlined text-[20px]">dataset</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">Notion Workflow & Systems</span>
                          <span className="text-on-surface-variant font-label-sm text-[11px]">ID: SKL-6218</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-semibold">Productivity</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">person</span>
                        <span>38 users</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-on-surface">45 wanting</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-on-surface font-semibold">
                        <span className="material-symbols-outlined text-[16px] text-secondary">swap_horiz</span>
                        <span>19 completed</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant font-label-sm text-label-sm">01 Mar 2025</td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View details" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Edit skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Delete skill" type="button">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="lg:hidden flex flex-col divide-y-0 p-space-md gap-space-md">
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">code</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">React.js</span>
                      <span className="text-on-surface-variant font-label-sm text-[12px]">Development</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px] font-bold">Active</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-label-sm font-label-sm py-2">
                  <div className="p-2 rounded bg-surface-container-lowest">
                    <span className="text-on-surface-variant block">Offering:</span>
                    <span className="text-on-surface font-semibold">184 users</span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest">
                    <span className="text-on-surface-variant block">Wanting:</span>
                    <span className="text-on-surface font-semibold">210 (High Demand)</span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest">
                    <span className="text-on-surface-variant block">Total Swaps:</span>
                    <span className="text-secondary font-semibold">94 completed</span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest">
                    <span className="text-on-surface-variant block">Created:</span>
                    <span className="text-on-surface font-semibold">12 Jan 2025</span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface" type="button">View Details</button>
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface" type="button">Edit</button>
                  <button className="px-3 py-1.5 rounded-lg bg-error-container font-label-sm text-label-sm text-on-error-container" type="button">Delete</button>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[20px]">brush</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Figma & UI Systems</span>
                      <span className="text-on-surface-variant font-label-sm text-[12px]">Design</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px] font-bold">Active</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-label-sm font-label-sm py-2">
                  <div className="p-2 rounded bg-surface-container-lowest">
                    <span className="text-on-surface-variant block">Offering:</span>
                    <span className="text-on-surface font-semibold">146 users</span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest">
                    <span className="text-on-surface-variant block">Wanting:</span>
                    <span className="text-on-surface font-semibold">168 users</span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest">
                    <span className="text-on-surface-variant block">Total Swaps:</span>
                    <span className="text-secondary font-semibold">78 completed</span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest">
                    <span className="text-on-surface-variant block">Created:</span>
                    <span className="text-on-surface font-semibold">15 Jan 2025</span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface" type="button">View Details</button>
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface" type="button">Edit</button>
                  <button className="px-3 py-1.5 rounded-lg bg-error-container font-label-sm text-label-sm text-on-error-container" type="button">Delete</button>
                </div>
              </div>
            </div>
            <div className="p-space-md lg:px-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-lowest">
              <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
                <span>
                  Showing
                  <strong className="text-on-surface font-semibold">1-8</strong>
                  of
                  <strong className="text-on-surface font-semibold">468</strong>
                  skills
                </span>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-label-sm font-label-sm">Rows per page:</span>
                  <select className="px-2 py-1 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface outline-none">
                    <option>8</option>
                    <option>16</option>
                    <option>32</option>
                    <option>64</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container disabled:opacity-40" disabled type="button">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold flex items-center justify-center" type="button">1</button>
                <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center justify-center" type="button">2</button>
                <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center justify-center" type="button">3</button>
                <span className="px-1 text-on-surface-variant font-label-sm text-label-sm">...</span>
                <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center justify-center" type="button">59</button>
                <button className="p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-on-background/40 backdrop-blur-sm transition-opacity" id="addSkillModal">
          <div className="w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-space-lg flex items-center justify-between bg-surface-container-low/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">add_task</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Add New Skill</h3>
              </div>
              <button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" id="closeAddModalBtn" type="button">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-space-lg flex flex-col gap-space-md max-h-[768px] overflow-y-auto">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface font-semibold">Skill Name</label>
                <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" placeholder="e.g. Prompt Engineering, Golang, UI Typography..." type="text" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">Category</label>
                  <select className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all">
                    <option>Development</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Business</option>
                    <option>Languages</option>
                    <option>Productivity</option>
                    <option>Creative</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">Initial Status</label>
                  <select className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all">
                    <option>Active</option>
                    <option>Under Review</option>
                    <option>Deprecated</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface font-semibold">Description</label>
                <textarea className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Briefly describe the domain, scope, and acceptable peer-learning expectations for this skill..." rows={3} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-label-md text-on-surface font-semibold">Tags & Synonyms (Comma separated)</label>
                <input className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" placeholder="e.g. Next.js, Redux, Frontend, SSR" type="text" />
                <span className="font-label-sm text-label-sm text-on-surface-variant">Helps matching algorithms suggest this skill in peer searches.</span>
              </div>
            </div>
            <div className="p-space-md bg-surface-container-low/50 flex items-center justify-end gap-space-sm">
              <button className="px-4 py-2 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors" id="cancelAddBtn" type="button">Cancel</button>
              <button className="px-5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-secondary transition-all" id="confirmAddBtn" type="button">Add Skill</button>
            </div>
          </div>
        </div>
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface-container-lowest shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col justify-between" id="skillDrawer">
          <div className="flex flex-col h-full overflow-hidden">
            <div className="p-space-lg flex items-start justify-between bg-surface-container-low/40">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">hub</span>
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-[10px] font-bold uppercase tracking-wider" id="drawerCategoryBadge">Development</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5" id="drawerSkillTitle">Skill Name</h3>
                </div>
              </div>
              <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" id="closeDrawerBtn" type="button">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-space-lg overflow-y-auto flex-1 flex flex-col gap-space-lg">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">Overview</span>
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed" id="drawerDescription">Detailed curriculum and taxonomy notes for this skill.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Offering Mentors</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">184 Users</span>
                  <span className="font-label-sm text-[11px] text-tertiary">42 verified badges</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Active Seekers</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">210 Users</span>
                  <span className="font-label-sm text-[11px] text-primary">High demand velocity</span>
                </div>
              </div>
              <div className="p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">Weekly Swap Velocity</span>
                  <span className="text-tertiary font-label-sm text-[12px] font-bold">+18.4% WoW</span>
                </div>
                <div className="h-20 w-full flex items-end">
                  <svg className="w-full h-full text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 240 60">
                    <rect fill="currentColor" height="24" opacity="0.2" rx="4" width="16" x="10" y="36" />
                    <rect fill="currentColor" height="32" opacity="0.3" rx="4" width="16" x="42" y="28" />
                    <rect fill="currentColor" height="40" opacity="0.4" rx="4" width="16" x="74" y="20" />
                    <rect fill="currentColor" height="36" opacity="0.5" rx="4" width="16" x="106" y="24" />
                    <rect fill="currentColor" height="46" opacity="0.7" rx="4" width="16" x="138" y="14" />
                    <rect fill="currentColor" height="42" opacity="0.85" rx="4" width="16" x="170" y="18" />
                    <rect fill="currentColor" height="54" rx="4" width="16" x="202" y="6" />
                  </svg>
                </div>
                <div className="flex justify-between font-label-sm text-[10px] text-on-surface-variant">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">Top Rated Mentors</span>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-[12px]">EK</div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Elena Rostova</span>
                      <span className="text-on-surface-variant font-label-sm text-[11px]">38 Swaps • 4.98 ⭐</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-bold text-[12px]">MC</div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Marcus Chen</span>
                      <span className="text-on-surface-variant font-label-sm text-[11px]">29 Swaps • 4.95 ⭐</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                </div>
              </div>
            </div>
            <div className="p-space-md bg-surface-container-low/60 flex items-center justify-between gap-space-sm">
              <button className="w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" id="drawerCloseActionBtn" type="button">Close</button>
              <button className="w-full py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-secondary transition-colors" type="button">Edit Taxonomy</button>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-on-background/40 backdrop-blur-sm transition-opacity" id="deleteSkillModal">
          <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-space-lg flex flex-col items-center text-center gap-space-md">
              <div className="w-14 h-14 rounded-full bg-error-container text-error flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[28px]">warning</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Remove this skill?</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Users will no longer be able to select
                  <strong className="text-on-surface" id="deleteTargetSkill">this skill</strong>
                  for new profiles or initiated swaps. Existing swap records will be archived.
                </p>
              </div>
              <div className="flex items-center gap-space-sm w-full pt-2">
                <button className="w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" id="cancelDeleteBtn" type="button">Cancel</button>
                <button className="w-full py-2.5 rounded-lg bg-error text-on-error font-label-md text-label-md shadow-sm hover:bg-on-error-container transition-colors" id="confirmDeleteBtn" type="button">Remove Skill</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
