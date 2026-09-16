import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

/** Imported Stitch screen (10). Static content until its feature phase is implemented. */
export function NotificationsScreen() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  async function loadNotifications() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("notifications")
      .select(`
        id,
        user_id,
        message,
        type,
        is_read,
        created_at
      `)
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("LOAD NOTIFICATIONS ERROR:", error.message, error.details, error.hint);
      setLoading(false);
      return;
    }
    console.log("CURRENT USER ID:", user.id);
console.log("NOTIFICATIONS DATA:", data);
    setNotifications(data ?? []);
    setLoading(false);
  }

  loadNotifications();
}, []);
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
              <button
  type="button"
  onClick={async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    const { error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("user_id", user.id)
      .eq("is_read", false);

    if (error) {
      console.error("MARK ALL READ ERROR:", error);
      alert("Failed to mark all notifications as read.");
      return;
    }

    setNotifications((current) =>
      current.map((item) => ({
        ...item,
        is_read: true,
      }))
    );

    alert("All notifications marked as read! ✅");
  }}
  className="..."
>
  Mark All as Read
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
  {loading ? (
    <div className="text-center py-10">
      Loading notifications...
    </div>
  ) : notifications.length === 0 ? (
    <div className="text-center py-10">
      <p className="text-lg font-medium text-on-surface">
        No notifications yet
      </p>
      <p className="text-sm text-on-surface-variant mt-2">
        Your notifications will appear here.
      </p>
    </div>
  ) : (
    notifications.map((notification) => (
      <article
        key={notification.id}
        className={`notification-card group relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm hover:shadow-md transition-all duration-200 ${
          notification.is_read ? "opacity-95" : ""
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start gap-space-md">
          
          {/* Notification Icon */}
          <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[24px]">
              notifications
            </span>
          </div>

          <div className="flex-1 min-w-0">
            
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {notification.title}
                </span>

                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  {notification.type ?? "Notification"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {new Date(notification.created_at).toLocaleString()}
                </span>

                {!notification.is_read && (
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm"
                    title="Unread notification"
                  />
                )}
              </div>
            </div>

            {/* Message */}
            <p className="font-body-md text-body-md text-on-surface mt-0.5">
              {notification.message}
            </p>

            {/* Actions */}
            <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
              <div className="flex items-center gap-space-sm">
                
                {!notification.is_read && (
                  <button
                    type="button"
                    onClick={async () => {
                      const { error } = await supabase
                        .from("notifications")
                        .update({ is_read: true })
                        .eq("id", notification.id);

                      if (error) {
                        console.error(
                          "MARK NOTIFICATION READ ERROR:",
                          error
                        );
                        alert("Failed to mark notification as read.");
                        return;
                      }

                      setNotifications((current) =>
                        current.map((item) =>
                          item.id === notification.id
                            ? { ...item, is_read: true }
                            : item
                        )
                      );
                    }}
                    className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md hover:bg-surface-container transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      mark_email_read
                    </span>
                    Mark as Read
                  </button>
                )}

                <button
                  type="button"
                  onClick={async () => {
                    const { error } = await supabase
                      .from("notifications")
                      .delete()
                      .eq("id", notification.id);

                    if (error) {
                      console.error(
                        "DELETE NOTIFICATION ERROR:",
                        error
                      );
                      alert("Failed to delete notification.");
                      return;
                    }

                    setNotifications((current) =>
                      current.filter(
                        (item) => item.id !== notification.id
                      )
                    );
                  }}
                  className="px-space-md py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container hover:text-error transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    delete
                  </span>
                  Delete
                </button>
              </div>
            </div>

          </div>
        </div>
      </article>
    ))
  )}
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
