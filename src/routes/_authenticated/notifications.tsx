import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { NotificationsScreen } from "@/components/screens/NotificationsScreen";

export const Route = createFileRoute("/_authenticated/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — SkillSwap" },
      { name: "description", content: "Stay updated on swap requests, matches, and community ratings." },
      { property: "og:title", content: "Notifications — SkillSwap" },
      { property: "og:description", content: "Stay updated on swap requests, matches, and community ratings." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <AppLayout>
      <div className="pt-20">
        <PreviewNotice feature="Notifications" />
      </div>
      <NotificationsScreen />
    </AppLayout>
  );
}
