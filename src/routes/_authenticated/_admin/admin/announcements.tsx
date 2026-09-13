import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { AdminAnnouncementsScreen } from "@/components/screens/AdminAnnouncementsScreen";

export const Route = createFileRoute("/_authenticated/_admin/admin/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements — SkillSwap Admin" },
      { name: "description", content: "Broadcast updates to the community." },
      { property: "og:title", content: "Announcements — SkillSwap Admin" },
      { property: "og:description", content: "Broadcast updates to the community." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <AdminLayout title="Announcements">
      <div className="pt-16">
        <PreviewNotice feature="Announcements" />
      </div>
      <AdminAnnouncementsScreen />
    </AdminLayout>
  );
}
