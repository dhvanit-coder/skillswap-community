import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { AdminDashboardScreen } from "@/components/screens/AdminDashboardScreen";

export const Route = createFileRoute("/_authenticated/_admin/admin/")({
  head: () => ({
    meta: [
      { title: "Dashboard — SkillSwap Admin" },
      { name: "description", content: "Platform overview: users, swaps, and activity." },
      { property: "og:title", content: "Dashboard — SkillSwap Admin" },
      { property: "og:description", content: "Platform overview: users, swaps, and activity." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <AdminLayout title="Dashboard">
      <div className="pt-16">
        <PreviewNotice feature="Dashboard" />
      </div>
      <AdminDashboardScreen />
    </AdminLayout>
  );
}
