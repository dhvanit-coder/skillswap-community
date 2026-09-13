import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { AdminSwapsScreen } from "@/components/screens/AdminSwapsScreen";

export const Route = createFileRoute("/_authenticated/_admin/admin/swaps")({
  head: () => ({
    meta: [
      { title: "Swap Management — SkillSwap Admin" },
      { name: "description", content: "Monitor and moderate skill swaps." },
      { property: "og:title", content: "Swap Management — SkillSwap Admin" },
      { property: "og:description", content: "Monitor and moderate skill swaps." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <AdminLayout title="Swap Management">
      <div className="pt-16">
        <PreviewNotice feature="Swap Management" />
      </div>
      <AdminSwapsScreen />
    </AdminLayout>
  );
}
