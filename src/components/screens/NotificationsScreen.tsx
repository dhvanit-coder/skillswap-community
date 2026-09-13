import { Link } from "@tanstack/react-router";

/** Imported Stitch screen (10). Static content until its feature phase is implemented. */
export function NotificationsScreen() {
  return (
    <main className="w-full bg-surface flex-1">
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 -right-24 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-80 -left-20 w-80 h-80 bg-tertiary-fixed-dim/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-lg w-full">
            <section className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md">
                <Link to="/dashboard" className="text-on-surface-variant hover:text-primary transition-colors">Dashboard</Link>
                <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                <span className="text-on-surface font-semibold">Notifications</span>
                <div className="inline-flex items-center gap-1.5 ml-space-sm px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse" />
                  <span>3 New</span>
                </div>
              </nav>
              <div className="flex items-center gap-space-sm">
                <button className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-all" id="mark-all-read-btn" type="button">
                  <span className="material-symbols-outlined text-[18px] text-primary">done_all</span>
                  <span>Mark All as Read</span>
                </button>
                <Link to="/settings" className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">tune</span>
                  <span className="hidden sm:inline">Preferences</span>
                </Link>
              </div>
            </section>
            <section className="mb-space-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase">Activity Pulse</span>
                    <span className="text-outline-variant font-label-sm">•</span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">Updated 4m ago</span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Notifications</h1>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">Stay updated with your incoming swap requests, mentorship milestones, mutual smart matches, and community peer ratings.</p>
                </div>
                <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between gap-space-md">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Response Rate</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">96.4%</span>
                    <span className="font-label-sm text-label-sm text-tertiary flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                      Top 5% Peer
                    </span>
                  </div>
                  <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                      <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="96, 100" strokeLinecap="round" strokeWidth="3.5" />
                    </svg>
                    <span className="absolute material-symbols-outlined text-[18px] text-primary">bolt</span>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-surface-container-lowest p-space-sm sm:p-space-md rounded-xl shadow-sm mb-space-lg flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 xl:pb-0 scrollbar-none" id="filter-pills-container">
                <button className="filter-pill px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-primary text-on-primary shadow-sm font-semibold" data-filter="all" type="button">
                  All
                  <span className="ml-1 opacity-80 text-label-sm">(7)</span>
                </button>
                <button className="filter-pill px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all whitespace-nowrap text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-filter="unread" type="button">
                  Unread
                  <span className="ml-1 text-label-sm font-bold text-primary">(3)</span>
                </button>
                <button className="filter-pill px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all whitespace-nowrap text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-filter="requests" type="button">
                  Swap Requests
                  <span className="ml-1 text-label-sm opacity-70">(3)</span>
                </button>
                <button className="filter-pill px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all whitespace-nowrap text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-filter="matches" type="button">
                  Matches
                  <span className="ml-1 text-label-sm opacity-70">(2)</span>
                </button>
                <button className="filter-pill px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all whitespace-nowrap text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-filter="ratings" type="button">
                  Ratings
                  <span className="ml-1 text-label-sm opacity-70">(1)</span>
                </button>
                <button className="filter-pill px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all whitespace-nowrap text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface" data-filter="system" type="button">
                  System
                  <span className="ml-1 text-label-sm opacity-70">(1)</span>
                </button>
              </div>
              <div className="flex items-center gap-space-sm flex-wrap sm:flex-nowrap">
                <div className="relative flex-1 sm:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                  <input className="w-full pl-9 pr-3 py-1.5 bg-surface-container-low text-on-surface placeholder-on-surface-variant font-body-sm text-body-sm rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors" id="notification-search" placeholder="Filter notifications..." type="text" />
                </div>
                <div className="relative">
                  <select aria-label="Sort order" className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md pl-3 pr-8 py-1.5 rounded-lg focus:outline-none cursor-pointer">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="priority">Priority Alerts</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
                </div>
              </div>
            </section>
            <section className="space-y-space-md" id="notification-cards-list">
              <article className="notification-card group relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-all duration-200" data-category="requests" data-unread="true">
                <div className="flex flex-col sm:flex-row items-start gap-space-md">
                  <div className="relative flex-shrink-0">
                    <img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait photo of Rahul Mehta, a smiling Indian UI photographer wearing a navy shirt in Ahmedabad studio setting, warm soft lighting, modern creative aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC57WcL7Dfwaiuv9YBPr7QQ_gTU0GE3sH3s5xIWae3prupy4iVORKkKq4o0EkBoD0y9NnkAYMCUG179gOuea3APU6bVsnln07_Va3kCVKZl1cNzsog5rlcHCvPHFyvKMf06cvxlS7g67gJchUePi_bBPbk1k7tKygk0PlS7z5VmAle-R0fzvL3XmXAMeZS3wbvDrKt18QHGwCcZU8gyRliBnKyORk6y0ecLE2_nzOtDhlzUMuhHGEXRw" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm" title="Skill Swap Request">
                      <span className="material-symbols-outlined text-[12px]">swap_horiz</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Rahul Mehta</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          Ahmedabad, Gujarat
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">Swap Request</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">15 minutes ago</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm" title="Unread notification" />
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface mt-0.5">
                      Proposed a skill exchange:
                      <strong className="text-primary font-semibold">Photoshop & Lightroom</strong>
                      in return for your
                      <strong className="text-secondary font-semibold">React.js Core</strong>
                      mentorship.
                    </p>
                    <div className="mt-space-sm p-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface-variant italic">“Hi Alex! I loved your React portfolio and would love to exchange 4 weekly 1-on-1 sessions. I can walk you through RAW workflow and color grading presets!”</div>
                    <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                      <div className="flex items-center gap-space-sm">
                        <button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm inline-flex items-center gap-1.5" type="button">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                          Review Request
                        </button>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container hover:text-error transition-colors" type="button">Decline</button>
                      </div>
                      <div className="relative group/menu inline-block">
                        <button aria-label="More options" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                        <div className="absolute right-0 bottom-full mb-1 hidden group-hover/menu:flex flex-col w-48 bg-surface-container-lowest rounded-xl shadow-md py-1.5 z-20">
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">mark_email_read</span>
                            Mark as read
                          </button>
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">notifications_off</span>
                            Mute updates from Rahul
                          </button>
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-error hover:bg-error-container/20 flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                            Delete notification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="notification-card group relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-all duration-200" data-category="requests" data-unread="true">
                <div className="flex flex-col sm:flex-row items-start gap-space-md">
                  <div className="relative flex-shrink-0">
                    <img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait of Priya Shah, a confident female design mentor in studio lighting with gentle smile, wearing minimalist cream blazer, modern studio aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWflxzhmYd_W7BXcOu2bfuj4Oc-1j681lNdmB-7CAGfuYOLpRvQ_5O3_pRc1zXW6wrL-xWvBMN33UY5o_e57TImaT01l1EPlMJWeJsIPCxA_2BmWoS68EFH0-C0Y0mbbEabMO89FMKYf6t8yy9mIxnhDRrguIBu_Q0EC8xp7pjFKH1XD9UeBqjc_vhkFUnFxUFOyBbH60VjMk5kHSChzRItPkiKHlO4rSUiPK-BpWADE0XkQwQTOIh_w" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm" title="Swap Accepted">
                      <span className="material-symbols-outlined text-[13px]">check_circle</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Priya Shah</span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">verified</span>
                          Top Mentor
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed-dim/30 text-tertiary font-label-sm text-label-sm font-bold">Swap Accepted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">2 hours ago</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm" title="Unread notification" />
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">Accepted your skill swap proposal! You can now access your shared workspace and sync calendar milestones.</p>
                    <div className="mt-space-sm p-3 bg-surface-container-low rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[18px]">calendar_month</span>
                        <span>
                          Next milestone:
                          <strong>React Core & Modern Hooks</strong>
                          •
                          <strong>Photoshop & Brand Design</strong>
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary font-bold self-end sm:self-auto">Awaiting Scheduling</span>
                    </div>
                    <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                      <div className="flex items-center gap-space-sm">
                        <button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm inline-flex items-center gap-1.5" type="button">
                          <span className="material-symbols-outlined text-[16px]">hub</span>
                          Open Swap Workspace
                        </button>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1" type="button">
                          <span className="material-symbols-outlined text-[16px]">chat</span>
                          Message Priya
                        </button>
                      </div>
                      <div className="relative group/menu inline-block">
                        <button aria-label="More options" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                        <div className="absolute right-0 bottom-full mb-1 hidden group-hover/menu:flex flex-col w-48 bg-surface-container-lowest rounded-xl shadow-md py-1.5 z-20">
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">mark_email_read</span>
                            Mark as read
                          </button>
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-error hover:bg-error-container/20 flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                            Delete notification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="notification-card group relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-all duration-200" data-category="matches" data-unread="true">
                <div className="flex flex-col sm:flex-row items-start gap-space-md">
                  <div className="relative flex-shrink-0">
                    <img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait of Elena Rostova, European language educator with headphones smiling warmly in cozy room with bookshelves, warm daylight atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXhI77JSkf-jrnQvdvG_gLQ8tMGyvHD04hZhqyHscJ07YUGEwljMtUJDcS0hLMSaEqNAQ_tbp0VkMsz95qEZOod8dUDCCvbOipRlQtZOoXOupzD5LxW9qNF7MfX2GxX-luSwvHR9iNZN4Lo0PBU89izmG65peeA9o6I73iiOgvPzhKKSRs04SrEGkNtA2aLKcQSBz2_eyQ-CXHJRko-5xPgMKIcOVmiqkH6mkU5umdCk5qLX_VH64pow" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-sm" title="Smart Synergy Match">
                      <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Elena Rostova</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold inline-flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">bolt</span>
                          98% Smart Match
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">Smart Match</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">5 hours ago</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm" title="Unread notification" />
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">
                      New reciprocal match discovered: Elena teaches
                      <strong className="text-secondary font-semibold">Conversational Spanish</strong>
                      and wants to master your expertise in
                      <strong className="text-primary font-semibold">React & Web Layouts</strong>
                      .
                    </p>
                    <div className="mt-space-sm flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-primary-fixed-dim/30 text-primary font-label-sm text-label-sm">Offers: Spanish C1 • Accent Coaching</span>
                      <span className="text-outline-variant font-label-sm">↔</span>
                      <span className="px-2.5 py-1 rounded-full bg-secondary-fixed-dim/40 text-secondary font-label-sm text-label-sm">Needs: React Hooks • Tailwind CSS</span>
                    </div>
                    <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                      <div className="flex items-center gap-space-sm">
                        <button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm inline-flex items-center gap-1.5" type="button">
                          <span className="material-symbols-outlined text-[16px]">account_circle</span>
                          View Match Profile
                        </button>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors" type="button">Dismiss</button>
                      </div>
                      <div className="relative group/menu inline-block">
                        <button aria-label="More options" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                        <div className="absolute right-0 bottom-full mb-1 hidden group-hover/menu:flex flex-col w-48 bg-surface-container-lowest rounded-xl shadow-md py-1.5 z-20">
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">mark_email_read</span>
                            Mark as read
                          </button>
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-error hover:bg-error-container/20 flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                            Delete notification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="notification-card group relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-all duration-200 opacity-95" data-category="matches" data-unread="false">
                <div className="flex flex-col sm:flex-row items-start gap-space-md">
                  <div className="relative flex-shrink-0">
                    <img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait of David Miller, senior product designer with glasses and dark crewneck sweater in bright contemporary studio workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnSRJ_rakwMlPQVFEwmdMTsBfy7AVKJyXVOvQx4SxYjPDgzPGZVRzv9ETPHeO8fh6faQCDs2XAmfJLN46V_LJV_sIogyTjUxrMFpmuaTAVbedszVVIhStcA760uPe5WtHz0yqMjy7HTshQQPnsIsxoiowiBTOs944PkzsQWI3Z4ckls2HW9zxhNcPkcm7nGlsFBcl4oA0ddrZzRZTN3ANIOOUeDGtrNUQJC74oPmMjkPAorPXYkQtWvQ" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm" title="Swap Completed">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">David Miller</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">Swap Completed</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Yesterday at 4:30 PM</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">
                      Your bilateral exchange on
                      <strong className="text-on-surface font-semibold">Modern CSS Architecture & Tailwind Mastery</strong>
                      was successfully concluded by both peers.
                    </p>
                    <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                      <div className="flex items-center gap-space-sm">
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1.5" type="button">
                          <span className="material-symbols-outlined text-[16px]">rate_review</span>
                          Leave Feedback & Rating
                        </button>
                        <button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1" type="button">
                          <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                          View Credential
                        </button>
                      </div>
                      <div className="relative group/menu inline-block">
                        <button aria-label="More options" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                        <div className="absolute right-0 bottom-full mb-1 hidden group-hover/menu:flex flex-col w-48 bg-surface-container-lowest rounded-xl shadow-md py-1.5 z-20">
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">mark_email_unread</span>
                            Mark as unread
                          </button>
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-error hover:bg-error-container/20 flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                            Delete notification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="notification-card group relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-all duration-200 opacity-95" data-category="ratings" data-unread="false">
                <div className="flex flex-col sm:flex-row items-start gap-space-md">
                  <div className="relative flex-shrink-0">
                    <img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait photo of Liam O'Connor, financial analyst and student with short brown hair and blue collared shirt smiling indoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6fkYj-JBPrSk5rPrAcWqMv09xTrQ-j9tTxm3mE4xiA8Ot4rkrhz4bb4LSg3TCNxbRjYEsgVNPXCey0E9tCyFy69mrhXWD8LONTU3MJVSD_9up2dZrKgtFRWGn17CStcgzZ8HB_yHfmQfFJhTW53PbGT-nPPBPXykRc-tc7xwfmE_lL59kjIb-E1kU5g2ErqLtllJuWOyXIlCIdwiS4GXd7p5l34Hx21GtC_91TnaDfjeMF4t-QPhItA" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-lowest text-secondary-container flex items-center justify-center shadow-sm" title="New 5-Star Rating">
                      <span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Liam O'Connor</span>
                        <div className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                          <span className="material-symbols-outlined text-[13px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span>5.0 Mentorship Rating</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">New Rating</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">2 days ago</span>
                    </div>
                    <div className="mt-space-xs p-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface-variant">“Alex was a phenomenal JS instructor! Extremely patient, broke down closures clearly. In exchange he grasped cash flow modeling in hours.”</div>
                    <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                      <Link to="/profile" className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        View on Profile
                      </Link>
                      <div className="relative group/menu inline-block">
                        <button aria-label="More options" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                        <div className="absolute right-0 bottom-full mb-1 hidden group-hover/menu:flex flex-col w-48 bg-surface-container-lowest rounded-xl shadow-md py-1.5 z-20">
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">mark_email_unread</span>
                            Mark as unread
                          </button>
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-error hover:bg-error-container/20 flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                            Delete notification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="notification-card group relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-all duration-200 opacity-95" data-category="requests" data-unread="false">
                <div className="flex flex-col sm:flex-row items-start gap-space-md">
                  <div className="relative flex-shrink-0">
                    <img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait of Sarah Chen, product manager with sleek dark bob hairstyle in modern architect office background, natural sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKp-LlnZ8ue5-eaQXbXTfMFkLDeTD8xtk_NmA_i5laZhmr3yfF-5LueA8WFTErJPJf3Vk9U1XWtpxC2iogkAOgQXkBa2cctLWh_aHXjPhQVP-ff0_HOnUDiLiSKVJfO0lSWoTf_knRrK4zUGVGpLHv2CVd_9yv1twzzlOKeONu8TdGg2ME4AixnGWsiI200dCMMbJNmsfHGLtTIXnmUtviGXZQwIA44g10nJbPTKDbLf02MqZh0LTJkA" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shadow-sm" title="Expiring Soon">
                      <span className="material-symbols-outlined text-[12px]">schedule</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Sarah Chen</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-error-container/40 text-error font-label-sm text-label-sm font-bold">Expires in 48h</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">Reminder</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">3 days ago</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">
                      Sarah Chen's swap proposal for
                      <strong className="text-on-surface font-semibold">Product Roadmapping • Technical Architecture</strong>
                      is awaiting your decision before auto-archiving.
                    </p>
                    <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                      <button className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1.5" type="button">
                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                        View Request Details
                      </button>
                      <div className="relative group/menu inline-block">
                        <button aria-label="More options" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                        <div className="absolute right-0 bottom-full mb-1 hidden group-hover/menu:flex flex-col w-48 bg-surface-container-lowest rounded-xl shadow-md py-1.5 z-20">
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">mark_email_unread</span>
                            Mark as unread
                          </button>
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-error hover:bg-error-container/20 flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                            Delete notification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="notification-card group relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-all duration-200 opacity-95" data-category="system" data-unread="false">
                <div className="flex flex-col sm:flex-row items-start gap-space-md">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">SkillSwap System Release</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">Platform v2.8</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">Platform</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">5 days ago</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">Platform Update: Video Session Rooms now feature live collaborative code editors, terminal sandboxes, and embedded Figma canvas workspaces.</p>
                    <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                      <a className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1.5" href="#">
                        <span className="material-symbols-outlined text-[16px]">article</span>
                        Read Release Notes
                      </a>
                      <div className="relative group/menu inline-block">
                        <button aria-label="More options" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                        <div className="absolute right-0 bottom-full mb-1 hidden group-hover/menu:flex flex-col w-48 bg-surface-container-lowest rounded-xl shadow-md py-1.5 z-20">
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">mark_email_unread</span>
                            Mark as unread
                          </button>
                          <button className="px-3 py-1.5 text-left font-label-sm text-label-sm text-error hover:bg-error-container/20 flex items-center gap-2" type="button">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                            Delete notification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            <section className="mt-space-xl mb-space-xl p-space-lg rounded-xl bg-surface-container-low/70 flex flex-col sm:flex-row items-center justify-between gap-space-md text-center sm:text-left">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px]">task_alt</span>
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">You're completely up to date!</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">No pending mutual requests or unhandled peer alerts. Adjust your notification delivery cadence anytime.</p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm flex-shrink-0">
                <Link to="/settings" className="px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-colors inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">notifications_active</span>
                  Notification Preferences
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
