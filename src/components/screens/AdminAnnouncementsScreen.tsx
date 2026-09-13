/** Imported Stitch screen (15). Static content until its feature phase is implemented. */
export function AdminAnnouncementsScreen() {
  return (
    <main className="relative w-full bg-background min-h-screen">
      <div className="flex flex-col w-full">
        <div className="px-space-lg py-space-lg max-w-[1440px] mx-auto w-full flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-space-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-sm">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Announcements</h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-sm text-label-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  Delivery Health: 99.9% Delivered
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Create, schedule, and dispatch platform-wide messages to the SkillSwap community.</p>
            </div>
            <div className="flex items-center gap-space-sm self-start md:self-auto">
              <button className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">history_edu</span>
                <span>Broadcast History & Export</span>
              </button>
              <button className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-primary-container hover:bg-secondary text-on-primary font-label-md text-label-md shadow-[0_6px_16px_-4px_rgba(79,70,229,0.35)] transition-all" id="btnNewAnnouncement">
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span>+ New Announcement</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Total Announcements</span>
                  <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">24</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">campaign</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-space-sm pt-space-xs text-primary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span className="font-semibold">+3 dispatched this month</span>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Published</span>
                  <span className="font-display-xl text-[36px] leading-[44px] text-tertiary-container font-extrabold mt-1">18</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[22px]">verified</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-space-sm pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-tertiary" />
                <span>Reaching 12.4k active members</span>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Scheduled</span>
                  <span className="font-display-xl text-[36px] leading-[44px] text-amber-700 font-extrabold mt-1">4</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <span className="material-symbols-outlined text-[22px]">schedule</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-space-sm pt-space-xs text-amber-800 font-label-sm text-label-sm truncate">
                <span className="material-symbols-outlined text-[15px]">event</span>
                <span className="truncate">Next: Maintenance (Tomorrow 02:00 UTC)</span>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Drafts</span>
                  <span className="font-display-xl text-[36px] leading-[44px] text-on-surface font-extrabold mt-1">2</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[22px]">edit_note</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-space-sm pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[15px]">pending</span>
                <span>In review by operations</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04)] flex flex-col gap-space-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm">
                  <div className="md:col-span-5 relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">search</span>
                    <input className="w-full h-10 pl-9 pr-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all" id="searchInput" placeholder="Search announcements by title or keyword..." type="text" />
                  </div>
                  <div className="md:col-span-2">
                    <select className="w-full h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container">
                      <option value="all">All Statuses</option>
                      <option value="published">Published</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                  <div className="md:col-span-3">
                    <select className="w-full h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container">
                      <option value="all">All Types</option>
                      <option value="general">General</option>
                      <option value="update">Platform Update</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="notice">Important Notice</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <select className="w-full h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container">
                      <option value="all">All Audiences</option>
                      <option value="all_users">All Users</option>
                      <option value="active">Active Members</option>
                      <option value="new">New Users</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Active Filters:</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                      Status: All
                      <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">close</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                      Audience: All
                      <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">close</span>
                    </span>
                    <button className="font-label-sm text-label-sm text-primary hover:underline ml-1">Clear Filters</button>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">24 records total</span>
                </div>
              </div>
              <div className="flex flex-col gap-space-sm" id="announcementsContainer">
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] hover:shadow-md transition-all flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 font-label-sm text-label-sm font-semibold">Maintenance</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px]">public</span>
                          All Users (12,480)
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">schedule</span>
                          Scheduled
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer truncate">Scheduled Maintenance: Database Upgrades & WebSocket Optimization</h3>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Preview Item">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Duplicate">
                        <span className="material-symbols-outlined text-[20px]">content_copy</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">SkillSwap services will be temporarily paused for approximately 45 minutes on Wednesday, Oct 15 at 02:00 UTC while we upgrade our database clusters and WebSocket pairing engine. Ongoing video swaps will not disconnect.</p>
                  <div className="flex flex-wrap items-center justify-between pt-2 border-t border-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm gap-2">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        Scheduled: 15 Oct 2026, 02:00 UTC
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span>Created 12 Oct 2026 by Sarah Jenkins</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-amber-700 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      Broadcasting in 2 days
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] hover:shadow-md transition-all flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold">Platform Update</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px]">public</span>
                          All Users (12,480)
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Published
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer truncate">SkillSwap v2.8 Release: Real-time Audio/Video Barter Rooms Now Live!</h3>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Preview Item">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Duplicate">
                        <span className="material-symbols-outlined text-[20px]">content_copy</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">We have officially rolled out native high-fidelity audio/video rooms powered by WebRTC. Experience zero-latency screen-sharing, collaborative code scratchpads, and live transcription during peer barter sessions.</p>
                  <div className="flex flex-wrap items-center justify-between pt-2 border-t border-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm gap-2">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-tertiary-container font-semibold">
                        <span className="material-symbols-outlined text-[16px]">done_all</span>
                        Published: 01 Oct 2026, 15:00 PM
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span>Created 01 Oct 2026, 14:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-tertiary font-semibold">
                      <span className="material-symbols-outlined text-[16px]">mark_email_read</span>
                      <span>99.4% Read Rate (11,820 read)</span>
                    </div>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] hover:shadow-md transition-all flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold">Important Notice</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px]">group</span>
                          Active Users (8,924)
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Published
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer truncate">Community Guidelines Reminder: Fair Barter & Safe Communication</h3>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Preview Item">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Duplicate">
                        <span className="material-symbols-outlined text-[20px]">content_copy</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Maintaining mutual respect and punctuality is essential to the SkillSwap ethos. Please review the updated cancellation policy and peer feedback criteria before scheduling swaps for Q4.</p>
                  <div className="flex flex-wrap items-center justify-between pt-2 border-t border-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm gap-2">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-tertiary-container font-semibold">
                        <span className="material-symbols-outlined text-[16px]">done_all</span>
                        Published: 22 Sep 2026, 12:00 PM
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span>Created 22 Sep 2026, 11:15 AM</span>
                    </div>
                    <span className="text-on-surface-variant font-semibold">88.7% Reach (7,915 acknowledged)</span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] hover:shadow-md transition-all flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">General</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px]">person_add</span>
                          New Users (1,245)
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          Published
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer truncate">Welcome Perk: Double Karma Points on Your First 3 Completed Swaps</h3>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Preview Item">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Duplicate">
                        <span className="material-symbols-outlined text-[20px]">content_copy</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">New members who finalize three knowledge exchanges within their initial 14 days will automatically earn tier 2 community badge accreditation and double profile endorsement visibility.</p>
                  <div className="flex flex-wrap items-center justify-between pt-2 border-t border-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm gap-2">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-tertiary-container font-semibold">
                        <span className="material-symbols-outlined text-[16px]">done_all</span>
                        Published: 19 Sep 2026, 08:00 AM
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span>Created 18 Sep 2026, 16:45 PM</span>
                    </div>
                    <span className="text-tertiary font-semibold">Automated Onboarding Trigger</span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] hover:shadow-md transition-all flex flex-col gap-space-sm border-l-4 border-outline">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">General</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px]">public</span>
                          All Users
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">draw</span>
                          Draft
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer truncate">Winter Skill Jam 2026: Community Hackathon & Mentorship Week</h3>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Preview Item">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors" title="Duplicate">
                        <span className="material-symbols-outlined text-[20px]">content_copy</span>
                      </button>
                      <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Save the date! SkillSwap is hosting our flagship virtual Winter Hackathon from Dec 01 to Dec 07. Form bilateral learning squads, pair with Senior Staff mentors, and showcase your collaborative crafts.</p>
                  <div className="flex flex-wrap items-center justify-between pt-2 border-t border-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm gap-2">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px]">edit_note</span>
                        Draft - Unpublished
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span>Created Yesterday, 17:20 PM by Priya S.</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-on-surface-variant italic">Awaiting copy signoff</span>
                  </div>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04)] flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Showing
                  <span className="font-semibold text-on-surface">1–5</span>
                  of
                  <span className="font-semibold text-on-surface">24</span>
                  announcements
                </span>
                <div className="flex items-center gap-1">
                  <button className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm disabled:opacity-40" disabled>Previous</button>
                  <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold">1</button>
                  <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm font-semibold">2</button>
                  <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm font-semibold">3</button>
                  <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm font-semibold">4</button>
                  <button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm font-semibold">5</button>
                  <button className="px-2.5 py-1.5 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm">Next</button>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container/50 border border-dashed border-outline-variant/60 flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[24px] text-on-surface-variant">inbox</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">Zero Results Fallback State</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">View how empty filtered queries render for administrators.</span>
                  </div>
                </div>
                <button className="px-space-sm py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm hover:bg-surface-container shadow-sm transition-colors">Toggle Preview</button>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-md sticky top-20">
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex flex-col gap-space-sm">
                <div className="flex items-center justify-between pb-2 border-b border-surface-container-high">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-primary">smartphone</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Live Member Preview</h2>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">In-App Feed</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Simulated realtime view of how this broadcast renders in member client feeds and modal overlays:</p>
                <div className="p-3.5 rounded-xl bg-surface-container-low/80 flex flex-col gap-3 shadow-inner">
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-2 relative overflow-hidden" id="previewCardTarget">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" id="previewAccentBar" />
                    <div className="flex items-center justify-between pt-1">
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-label-sm text-label-sm uppercase font-bold tracking-wider text-[11px]" id="previewTag">Maintenance</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant" id="previewTime">Oct 15 • In 2 days</span>
                    </div>
                    <h4 className="font-headline-sm text-[17px] leading-tight text-on-surface font-bold mt-1" id="previewTitle">Scheduled Maintenance: Database Upgrades & WebSocket Optimization</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed" id="previewBody">SkillSwap services will be temporarily paused for approximately 45 minutes on Wednesday, Oct 15 at 02:00 UTC while we upgrade our database clusters and WebSocket pairing engine. Ongoing video swaps will not disconnect, but new swap requests will queue until completion.</p>
                    <div className="flex items-center justify-between pt-3 border-t border-surface-container mt-1">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                          <span className="material-symbols-outlined text-[13px]">handshake</span>
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">— SkillSwap Team</span>
                        <span className="material-symbols-outlined text-[14px] text-tertiary" title="Verified Broadcast">verified</span>
                      </div>
                      <button className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors">Acknowledge</button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-primary">broadcast_on_personal</span>
                    <span className="leading-tight">
                      Dispatched as:
                      <strong className="text-on-surface">In-app modal & Banner</strong>
                      to All Users (12,480)
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_16px_-4px_rgba(79,70,229,0.04)] flex flex-col gap-space-sm">
                <div className="flex items-center justify-between pb-2 border-b border-surface-container-high">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-primary">edit_square</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Quick Broadcast Editor</h2>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-tertiary" title="Editor Ready" />
                </div>
                <form className="flex flex-col gap-space-sm" id="announcementForm">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm font-semibold text-on-surface">Announcement Title</label>
                    <input className="w-full h-10 px-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container" id="formTitle" placeholder="Enter concise broadcast headline..." required type="text" defaultValue="Scheduled Maintenance: Database Upgrades & WebSocket Optimization" />
                  </div>
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-on-surface">Type</label>
                      <select className="w-full h-10 px-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="formType">
                        <option value="Maintenance">Maintenance</option>
                        <option value="Platform Update">Platform Update</option>
                        <option value="General">General</option>
                        <option value="Important Notice">Important Notice</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-on-surface">Target Audience</label>
                      <select className="w-full h-10 px-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container">
                        <option value="all">All Users (12,480)</option>
                        <option value="active">Active Members (8,924)</option>
                        <option value="new">New Users (1,245)</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-on-surface">Publish Date</label>
                      <input className="w-full h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container" type="date" defaultValue="2026-10-15" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm font-semibold text-on-surface">Time (UTC)</label>
                      <input className="w-full h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container" type="time" defaultValue="02:00" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <label className="font-label-sm text-label-sm font-semibold text-on-surface">Message Description</label>
                      <span className="font-label-sm text-label-sm text-on-surface-variant" id="charCount">224 chars</span>
                    </div>
                    <textarea className="w-full p-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container resize-none" id="formBody" placeholder="Compose broadcast copy for SkillSwap users..." rows={4} defaultValue="SkillSwap services will be temporarily paused for approximately 45 minutes on Wednesday, Oct 15 at 02:00 UTC while we upgrade our database clusters and WebSocket pairing engine. Ongoing video swaps will not disconnect, but new swap requests will queue until completion." />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-space-xs pt-2">
                    <button className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" type="button">Save Draft</button>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button className="px-space-sm py-2 text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm" type="reset">Clear</button>
                      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-space-md py-2 rounded-lg bg-primary-container hover:bg-secondary text-on-primary font-label-md text-label-md shadow-md transition-all" type="submit">
                        <span className="material-symbols-outlined text-[16px]">send</span>
                        <span>Publish Announcement</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm hidden" id="deleteModal">
          <div className="w-full max-w-md p-space-lg rounded-xl bg-surface-container-lowest shadow-2xl flex flex-col gap-space-md mx-4 animate-in fade-in zoom-in duration-150">
            <div className="flex items-start gap-space-sm">
              <div className="w-12 h-12 rounded-xl bg-error-container text-error flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">warning</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Delete this announcement?</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">This announcement will be permanently removed from all user feeds and cannot be recovered.</p>
                <div className="p-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm mt-3 italic" id="deleteTargetTitle">"Scheduled Maintenance: Database Upgrades & WebSocket Optimization"</div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-space-sm pt-2">
              <button className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">Cancel</button>
              <button className="inline-flex items-center gap-1 px-space-md py-2 rounded-lg bg-error hover:bg-red-700 text-on-error font-label-md text-label-md shadow transition-colors">
                <span className="material-symbols-outlined text-[16px]">delete</span>
                <span>Delete Announcement</span>
              </button>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm hidden" id="emptyStateModal">
          <div className="w-full max-w-lg p-space-xl rounded-xl bg-surface-container-lowest shadow-2xl flex flex-col items-center text-center gap-space-md mx-4">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">campaign</span>
            </div>
            <div className="flex flex-col gap-1 max-w-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface">No announcements yet</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Create your first announcement to communicate platform updates, release notes, or maintenance schedules to the SkillSwap community.</p>
            </div>
            <div className="flex items-center gap-space-sm mt-2">
              <button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">Dismiss Demo</button>
              <button className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-md">Create New Now</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
