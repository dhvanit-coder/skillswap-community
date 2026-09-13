/** Imported Stitch screen (12). Static content until its feature phase is implemented. */
export function AdminUsersScreen() {
  return (
    <main className="w-full bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        <div className="p-space-lg lg:p-margin space-y-space-xl max-w-[1560px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-space-md">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">User Management</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">View, audit, search, and manage registered members across the SkillSwap peer network.</p>
            </div>
            <div className="flex items-center flex-wrap gap-space-sm">
              <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">tune</span>
                <span>Bulk Actions</span>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
              </button>
              <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px] text-primary">download</span>
                <span>Export CSV Directory</span>
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-all" type="button">
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                <span>+ Add New Member</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Users</span>
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">group</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">12,480</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  +14.2%
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">vs. previous 30-day baseline</p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Users</span>
                <div className="w-10 h-10 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">11,854</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  95.0% active
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">Healthy peer network retention</p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Banned Users</span>
                <div className="w-10 h-10 rounded-xl bg-error-container/40 flex items-center justify-center text-error">
                  <span className="material-symbols-outlined text-[22px]">gpp_bad</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">48</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">0.4% moderated</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">Active enforcement actions</p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">New Users (30d)</span>
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">1,245</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                  +18.6%
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">New signups verified this month</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md lg:p-space-lg rounded-xl shadow-sm space-y-space-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
              <div className="md:col-span-12 xl:col-span-4 relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">search</span>
                <input className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all" id="userSearchInput" placeholder="Search users by name, email, or user ID..." type="text" />
              </div>
              <div className="md:col-span-3 xl:col-span-2">
                <div className="relative">
                  <select className="w-full appearance-none px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all cursor-pointer" id="statusFilter">
                    <option value="all">All Statuses</option>
                    <option value="active">Active</option>
                    <option value="banned">Banned</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">unfold_more</span>
                </div>
              </div>
              <div className="md:col-span-3 xl:col-span-2">
                <div className="relative">
                  <select className="w-full appearance-none px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all cursor-pointer">
                    <option value="all">All Roles</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">unfold_more</span>
                </div>
              </div>
              <div className="md:col-span-3 xl:col-span-2">
                <div className="relative">
                  <select className="w-full appearance-none px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all cursor-pointer">
                    <option value="all">All Ratings</option>
                    <option value="4.5">4.5+ ★</option>
                    <option value="4.0">4.0 - 4.5 ★</option>
                    <option value="low">Below 4.0 ★</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">unfold_more</span>
                </div>
              </div>
              <div className="md:col-span-3 xl:col-span-2">
                <div className="relative">
                  <select className="w-full appearance-none px-3.5 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(79,70,229,0.2)] transition-all cursor-pointer">
                    <option value="all">All Members</option>
                    <option value="verified">Verified ID</option>
                    <option value="mentor">Top Mentor</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">unfold_more</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2">
              <div className="flex items-center flex-wrap gap-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Applied Filters:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                  <span>
                    Status:
                    <strong>All Active & Moderated</strong>
                  </span>
                  <button className="hover:text-error transition-colors" type="button">
                    <span className="material-symbols-outlined text-[14px]">close</span>
                  </button>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                  <span>
                    Rating:
                    <strong>All Stars</strong>
                  </span>
                  <button className="hover:text-error transition-colors" type="button">
                    <span className="material-symbols-outlined text-[14px]">close</span>
                  </button>
                </span>
                <button className="inline-flex items-center gap-1 text-primary hover:text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold transition-colors ml-1" type="button">
                  <span className="material-symbols-outlined text-[15px]">restart_alt</span>
                  <span>Clear Filters</span>
                </button>
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">
                Showing
                <span className="font-semibold text-on-surface">1–8</span>
                of
                <span className="font-semibold text-on-surface">12,480</span>
                users
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container/60 text-on-surface-variant font-label-sm text-label-sm tracking-wide uppercase select-none">
                    <th className="py-3.5 px-space-md pl-6">
                      <input className="rounded w-4 h-4 text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </th>
                    <th className="py-3.5 px-space-md">User</th>
                    <th className="py-3.5 px-space-md">Location</th>
                    <th className="py-3.5 px-space-md">Skills Offered</th>
                    <th className="py-3.5 px-space-md">Skills Wanted</th>
                    <th className="py-3.5 px-space-md">Rating</th>
                    <th className="py-3.5 px-space-md">Status</th>
                    <th className="py-3.5 px-space-md">Joined Date</th>
                    <th className="py-3.5 px-space-md pr-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container text-body-sm font-body-sm">
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 px-space-md pl-6">
                      <input className="rounded w-4 h-4 text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-surface-container">
                          <img className="w-full h-full object-cover" data-alt="Close up modern business portrait of Sarah Chen with confident gentle smile in modern studio lighting, high resolution editorial photograph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDWa4nmGVqf-EzYhLbyYb0tbp6CRVe3Usg3h7FSbGbbRmmz8HQnxkztiSe0gKk4c3RuGWtN9I6WvDWXBUIxGWrN512EXmFxnw_WNpTppgayi9YQoRfBEr-IC-Ol8cEONOojD_JQFnXK3zUIoI7ZYnsT7YNRjgQ0NJ7qY4Sbjnx4SslTAPDZ-wicU12EsOqf7TtLrcKXBBb401COkI48M39gMHyd2p_zgMXEU9aYvqcT2n9IYo5hR6iKw" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold truncate cursor-pointer hover:text-primary transition-colors">Sarah Chen</span>
                            <span className="material-symbols-outlined text-[15px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified ID">verified</span>
                          </div>
                          <span className="text-on-surface-variant text-[13px] truncate">sarah.c@fintech.io</span>
                          <span className="inline-block mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">User</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-outline-variant">location_on</span>
                        <span>Austin, TX</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Figma</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Design Systems</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">React.js</span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">Next.js</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[17px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-semibold text-on-surface">4.9</span>
                        <span className="text-on-surface-variant text-[12px]">(22)</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap text-[13px]">12 Jan 2026</td>
                    <td className="py-4 px-space-md pr-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" type="button">View Profile</button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View Activity" type="button">
                          <span className="material-symbols-outlined text-[19px]">history</span>
                        </button>
                        <button className="px-2 py-1 rounded text-error hover:bg-error-container font-label-sm text-label-sm transition-colors" type="button">Ban</button>
                        <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 px-space-md pl-6">
                      <input className="rounded w-4 h-4 text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-surface-container">
                          <img className="w-full h-full object-cover" data-alt="Portrait of Raj Mehta a cheerful creative software developer wearing casual crewneck indoors soft natural ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAyHlgD8nvQXwEMjbZtFVnwpRpqrJsTGjTvXY_uJN2MYE8jLCyFQSkP81RRrooGFPUNjbt_AG-8Rlt1N9DYHzw6sZuWe2D8Hn2bXuys6ReNfT4TBy_4aESWxFIqxmTBTKpUHUOBbfYScU4F1Qfh_7EAIl277Aw-a3ekjtuClZEnHvmKzYWp_Y_6akNmmziDEz3XlNNIZK8BNIPU7Ya--zBsrgKtl7XnKOzHYBgEW4lnH8lEZlaBV_dqQ" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold truncate cursor-pointer hover:text-primary transition-colors">Raj Mehta</span>
                            <span className="material-symbols-outlined text-[15px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified ID">verified</span>
                          </div>
                          <span className="text-on-surface-variant text-[13px] truncate">raj@example.com</span>
                          <span className="inline-block mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">User</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-outline-variant">location_on</span>
                        <span>Ahmedabad, India</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">React</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">JavaScript</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">Photoshop</span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">Lightroom</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[17px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-semibold text-on-surface">4.8</span>
                        <span className="text-on-surface-variant text-[12px]">(18)</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap text-[13px]">05 Sep 2026</td>
                    <td className="py-4 px-space-md pr-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" type="button">View Profile</button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View Activity" type="button">
                          <span className="material-symbols-outlined text-[19px]">history</span>
                        </button>
                        <button className="px-2 py-1 rounded text-error hover:bg-error-container font-label-sm text-label-sm transition-colors" type="button">Ban</button>
                        <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-error-container/20 transition-colors bg-error-container/10">
                    <td className="py-4 px-space-md pl-6">
                      <input className="rounded w-4 h-4 text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-surface-container grayscale opacity-80">
                          <img className="w-full h-full object-cover" data-alt="Portrait photo of Alex Thorne looking somber in muted grey background modern digital photo style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaXxmHheDgmIuRgwbRdVaXn5H9p6i2fL8H6dq14WClvNHqxJxXaa8ubHc2HMpvN8TEFXLtDo9q1ZkhHdhKMwC0ew8MAQ215_VphKc9AamCqKNCkTSFyog6P-YZebHITsYzOgeKLxMboZgfdi8lvcq9oXRkqfuHCbJzu4Qx2KHGs6SkMEFQJKpv8y0psiz0KPMLvJ2gAJ8RZPXfka-59tBhgI6vz0QBr3vUUT7763Pxwc15Xpbsv1TLjQ" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold truncate cursor-pointer hover:text-primary transition-colors">Alex Thorne</span>
                            <span className="material-symbols-outlined text-[15px] text-error" title="Account Suspended">block</span>
                          </div>
                          <span className="text-on-surface-variant text-[13px] truncate">alex.t@tempmail.xyz</span>
                          <span className="inline-block mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-error">Suspended</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-outline-variant">location_on</span>
                        <span>Chicago, IL</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[11px] font-medium line-through">Crypto Trading</span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[11px] font-medium line-through">SEO Botting</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[11px] font-medium">FullStack</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[17px] text-error" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                        <span className="font-semibold text-error">2.1</span>
                        <span className="text-on-surface-variant text-[12px]">(3)</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-error" />
                        Banned
                      </span>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap text-[13px]">18 Aug 2026</td>
                    <td className="py-4 px-space-md pr-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" type="button">View Profile</button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View Audit Logs" type="button">
                          <span className="material-symbols-outlined text-[19px]">receipt_long</span>
                        </button>
                        <button className="px-2 py-1 rounded bg-tertiary-container/20 text-tertiary hover:bg-tertiary-container/30 font-label-sm text-label-sm font-semibold transition-colors" type="button">Unban User</button>
                        <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 px-space-md pl-6">
                      <input className="rounded w-4 h-4 text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary-fixed text-primary font-headline-sm text-[15px] font-bold flex items-center justify-center flex-shrink-0 shadow-sm">PS</div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold truncate cursor-pointer hover:text-primary transition-colors">Priya Shah</span>
                            <span className="material-symbols-outlined text-[15px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified ID">verified</span>
                          </div>
                          <span className="text-on-surface-variant text-[13px] truncate">priya.s@designstudio.org</span>
                          <span className="inline-block mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">User</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-outline-variant">location_on</span>
                        <span>Ahmedabad, India</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Graphic Design</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Brand Identity</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">Node.js</span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">Python</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[17px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-semibold text-on-surface">4.9</span>
                        <span className="text-on-surface-variant text-[12px]">(28)</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap text-[13px]">14 Feb 2026</td>
                    <td className="py-4 px-space-md pr-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" type="button">View Profile</button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View Activity" type="button">
                          <span className="material-symbols-outlined text-[19px]">history</span>
                        </button>
                        <button className="px-2 py-1 rounded text-error hover:bg-error-container font-label-sm text-label-sm transition-colors" type="button">Ban</button>
                        <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 px-space-md pl-6">
                      <input className="rounded w-4 h-4 text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-surface-container">
                          <img className="w-full h-full object-cover" data-alt="Portrait of David Miller a senior web technologist wearing spectacles with clean warm light aesthetic studio photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXEuodhipEDxnhwA1AKBzOYZZ0Yuac0k_rT8whGH73fVK8OD9V3rmBGSBXp8uiWaQRzNWV2Oekx5ASpDT0DjHKY1SoGT6V12lih5_UVg7w6Vi7-B0SFRPPeEFQcgK6IiAox3xf_GVXJW1fmCI1eBenTWHZstajyh0uROvbjmsaG0yieVBxBfbBFEbKB5qr89MHKOqbt5xUOdVk_mfKLbk-HhfQlfYvbffECOC2vO6Z_lcGnBdDFH1pIQ" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold truncate cursor-pointer hover:text-primary transition-colors">David Miller</span>
                            <span className="material-symbols-outlined text-[15px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified ID">verified</span>
                          </div>
                          <span className="text-on-surface-variant text-[13px] truncate">david.m@craftcode.net</span>
                          <span className="inline-block mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">User</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-outline-variant">location_on</span>
                        <span>Seattle, WA</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Figma Tokens</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">CSS Grid</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">WebGL</span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">Three.js</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[17px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-semibold text-on-surface">4.8</span>
                        <span className="text-on-surface-variant text-[12px]">(19)</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap text-[13px]">22 Mar 2026</td>
                    <td className="py-4 px-space-md pr-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" type="button">View Profile</button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View Activity" type="button">
                          <span className="material-symbols-outlined text-[19px]">history</span>
                        </button>
                        <button className="px-2 py-1 rounded text-error hover:bg-error-container font-label-sm text-label-sm transition-colors" type="button">Ban</button>
                        <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 px-space-md pl-6">
                      <input className="rounded w-4 h-4 text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary font-headline-sm text-[15px] font-bold flex items-center justify-center flex-shrink-0">ER</div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold truncate cursor-pointer hover:text-primary transition-colors">Elena Rostova</span>
                            <span className="material-symbols-outlined text-[15px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified ID">verified</span>
                          </div>
                          <span className="text-on-surface-variant text-[13px] truncate">elena.r@linguamatch.eu</span>
                          <span className="inline-block mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">User</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-outline-variant">location_on</span>
                        <span>Madrid, Spain</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Conversational Spanish</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Accent Coaching</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">React Hooks</span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">Tailwind</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[17px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-semibold text-on-surface">4.9</span>
                        <span className="text-on-surface-variant text-[12px]">(34)</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap text-[13px]">30 Apr 2026</td>
                    <td className="py-4 px-space-md pr-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" type="button">View Profile</button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View Activity" type="button">
                          <span className="material-symbols-outlined text-[19px]">history</span>
                        </button>
                        <button className="px-2 py-1 rounded text-error hover:bg-error-container font-label-sm text-label-sm transition-colors" type="button">Ban</button>
                        <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="py-4 px-space-md pl-6">
                      <input className="rounded w-4 h-4 text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-surface-container">
                          <img className="w-full h-full object-cover" data-alt="Portrait of Marcus Vance a professional filmmaker with warm smile holding creative equipment in clean minimalist creative studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX1U2_gb-aCrw0cVoru6KklWlWUP7yeDcTYG803CMJNJR21hyIlv1P7w0zm1hdX1wbGlWliRMQn2dIavJAVwtGt0qdRo8V802-nVdYbMSym7xnIzqD7Hn5Gvr85g8llBrsFBLJY7EDOr27mIu4v_1syt_nz7BF-vn2ShjyVs6wjyV8vOgryZ-aO-B6Tlh-_N_AFDXXHuf0uhDL4z8dZZ069U3fZ1DrAvaVliJfbFJFWY_zLDYe6yXozg" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold truncate cursor-pointer hover:text-primary transition-colors">Marcus Vance</span>
                          </div>
                          <span className="text-on-surface-variant text-[13px] truncate">m.vance@studio.org</span>
                          <span className="inline-block mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">User</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-outline-variant">location_on</span>
                        <span>Seattle, WA</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Video Editing</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Premiere Pro</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">JavaScript</span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">Python</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[17px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-semibold text-on-surface">4.7</span>
                        <span className="text-on-surface-variant text-[12px]">(15)</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap text-[13px]">08 May 2026</td>
                    <td className="py-4 px-space-md pr-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" type="button">View Profile</button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View Activity" type="button">
                          <span className="material-symbols-outlined text-[19px]">history</span>
                        </button>
                        <button className="px-2 py-1 rounded text-error hover:bg-error-container font-label-sm text-label-sm transition-colors" type="button">Ban</button>
                        <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors group bg-surface-container-low/40">
                    <td className="py-4 px-space-md pl-6">
                      <input className="rounded w-4 h-4 text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm text-[15px] font-bold shadow-[0_2px_8px_rgba(79,70,229,0.3)] flex-shrink-0">SJ</div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-headline-sm text-[15px] leading-tight text-on-surface font-semibold truncate cursor-pointer hover:text-primary transition-colors">Sarah Jenkins</span>
                            <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-[10px] tracking-wider uppercase font-bold leading-none">ADMIN</span>
                          </div>
                          <span className="text-on-surface-variant text-[13px] truncate">s.jenkins@skillswap.internal</span>
                          <span className="inline-block mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">System Administrator</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-outline-variant">location_on</span>
                        <span>San Francisco, CA</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">System Arch</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-medium">Security Auditing</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md">
                      <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">Rust</span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-medium">DevOps</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[17px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-semibold text-on-surface">5.0</span>
                        <span className="text-on-surface-variant text-[12px]">(41)</span>
                      </div>
                    </td>
                    <td className="py-4 px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-space-md text-on-surface-variant whitespace-nowrap text-[13px]">01 Nov 2025</td>
                    <td className="py-4 px-space-md pr-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" type="button">View Profile</button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View Audit Logs" type="button">
                          <span className="material-symbols-outlined text-[19px]">manage_accounts</span>
                        </button>
                        <button className="p-1 rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-space-lg py-4 bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-surface-container">
              <div className="flex items-center gap-space-md">
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Showing
                  <span className="font-semibold text-on-surface">1–8</span>
                  of
                  <span className="font-semibold text-on-surface">12,480</span>
                  users
                </span>
                <div className="relative">
                  <select className="appearance-none pl-3 pr-8 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm focus:outline-none cursor-pointer">
                    <option>8 per page</option>
                    <option>10 per page</option>
                    <option>25 per page</option>
                    <option>50 per page</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1.5 rounded-lg text-on-surface-variant bg-surface-container opacity-50 cursor-not-allowed font-label-sm text-label-sm flex items-center gap-1" disabled type="button">
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                  <span>Previous</span>
                </button>
                <button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold flex items-center justify-center" type="button">1</button>
                <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center justify-center transition-colors" type="button">2</button>
                <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center justify-center transition-colors" type="button">3</button>
                <span className="px-1 text-on-surface-variant">...</span>
                <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center justify-center transition-colors" type="button">1,248</button>
                <button className="px-3 py-1.5 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button">
                  <span>Next</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden bg-surface-container-lowest rounded-xl p-space-xl text-center shadow-sm max-w-lg mx-auto" id="emptyStateBox">
            <div className="w-16 h-16 rounded-full bg-surface-container-high mx-auto flex items-center justify-center text-on-surface-variant mb-4">
              <span className="material-symbols-outlined text-[32px]">person_search</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">No users found</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">We couldn't find any member matching your criteria. Try adjusting your search query, status filters, or role specifications.</p>
            <div className="mt-6 flex justify-center">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-all" type="button">
                <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                <span>Clear All Filters</span>
              </button>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none transition-opacity duration-300 opacity-0" id="userDrawer">
          <div className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity" id="drawerBackdrop" />
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-surface-container-lowest shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 pointer-events-auto" id="drawerPanel">
              <div className="p-space-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">badge</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Member Dossier</span>
                </div>
                <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-space-lg space-y-space-lg">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-surface-container shadow-sm flex-shrink-0">
                    <img className="w-full h-full object-cover" data-alt="Portrait photograph of Sarah Chen looking friendly and professional against contemporary backdrop with soft contrast lighting" id="drawerAvatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABVZ_G0RO0DRYZeJE104fwxka8Cy_lVzaoc4rnVDFIVwPjDZqqIARhy-NTGuEEtuE21-ZAIrgG9Mh7UmBg2IJ6-8zGHlqjCZSCv4-aI3eO370qs43w_8meDPHJp8mSors3pk46fGZMiO_6yYlUK1DpZmr8cbpWjOsDcu4Lp3khkuF4KGVeI93MTv9kCwxkWFBla4RtlDOfeGJNBi1W9NNy8zIY5bLvIgRVVuOvUszgnkbR_vihrwnnug" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate" id="drawerName">Sarah Chen</h2>
                      <span className="material-symbols-outlined text-[18px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate" id="drawerEmail">sarah.c@fintech.io</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-[11px] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Active
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-bold">User</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="p-3 rounded-xl bg-surface-container-low">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant">Rating</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-amber-500 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-headline-sm text-[16px] font-bold text-on-surface">4.9</span>
                      <span className="text-[12px] text-on-surface-variant">(22 reviews)</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-on-surface-variant">Total Swaps</span>
                    <div className="mt-1 font-headline-sm text-[16px] font-bold text-on-surface">
                      18
                      <span className="text-on-surface-variant font-normal text-[12px]">Completed (1 Active)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-2">Member Bio</h4>
                  <p className="font-body-sm text-body-sm text-on-surface bg-surface-container-low p-3 rounded-xl">Lead product designer specializing in tokenized design systems and atomic components. Looking to exchange UI mentorship for intermediate React hook mastery.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Skills Taxonomy</h4>
                  <div className="p-3 rounded-xl bg-surface-container-low space-y-2">
                    <span className="font-label-sm text-[12px] font-semibold text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">school</span>
                      Skills Offered
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[12px] font-semibold">Figma (Expert)</span>
                      <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[12px] font-semibold">Design Systems (Advanced)</span>
                      <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[12px] font-semibold">UI Micro-copy</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low space-y-2">
                    <span className="font-label-sm text-[12px] font-semibold text-tertiary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">psychology</span>
                      Skills Wanted
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[12px] font-semibold">React.js</span>
                      <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[12px] font-semibold">Next.js</span>
                      <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[12px] font-semibold">State Management</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2.5 border-t border-surface-container pt-3 text-body-sm font-body-sm">
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Location:</span>
                    <span className="font-medium text-on-surface">Austin, TX (CST)</span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Availability:</span>
                    <span className="font-medium text-on-surface">Weekends & Evenings</span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Joined Date:</span>
                    <span className="font-medium text-on-surface">12 Jan 2026 (7 months ago)</span>
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <button className="w-full py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Message User Directly</span>
                  </button>
                  <button className="w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors" type="button">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Download Full Audit Log</span>
                  </button>
                  <button className="w-full py-2.5 rounded-lg text-error hover:bg-error-container font-label-md text-label-md flex items-center justify-center gap-2 transition-colors" type="button">
                    <span className="material-symbols-outlined text-[18px]">block</span>
                    <span>Suspend / Ban Member</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 overflow-y-auto hidden" id="banModal">
          <div className="min-h-screen px-4 text-center flex items-center justify-center">
            <div className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity" />
            <div className="inline-block w-full max-w-md p-space-lg my-8 text-left align-middle bg-surface-container-lowest rounded-2xl shadow-2xl transform transition-all relative z-10">
              <div className="w-12 h-12 rounded-full bg-error-container/50 text-error flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">warning</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Ban this user?</h3>
              <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                Are you sure you want to ban
                <strong className="text-on-surface" id="banTargetName">Alex Thorne</strong>
                ? The user will no longer be able to log in, send swap requests, or participate in barter chat rooms. All active swaps will be automatically paused.
              </p>
              <div className="mt-6 flex items-center justify-end gap-space-sm">
                <button className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">Cancel</button>
                <button className="px-4 py-2 rounded-lg bg-error text-on-error hover:bg-red-700 font-label-md text-label-md transition-colors shadow-sm" type="button">Confirm Ban</button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 overflow-y-auto hidden" id="unbanModal">
          <div className="min-h-screen px-4 text-center flex items-center justify-center">
            <div className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity" />
            <div className="inline-block w-full max-w-md p-space-lg my-8 text-left align-middle bg-surface-container-lowest rounded-2xl shadow-2xl transform transition-all relative z-10">
              <div className="w-12 h-12 rounded-full bg-tertiary-container/20 text-tertiary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">verified_user</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Reactivate user account?</h3>
              <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                Are you sure you want to restore access for
                <strong className="text-on-surface" id="unbanTargetName">Alex Thorne</strong>
                ? Their swap listings and direct messaging capabilities will be reinstated immediately.
              </p>
              <div className="mt-6 flex items-center justify-end gap-space-sm">
                <button className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">Cancel</button>
                <button className="px-4 py-2 rounded-lg bg-tertiary-container text-on-primary hover:bg-tertiary font-label-md text-label-md transition-colors shadow-sm" type="button">Restore User</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
