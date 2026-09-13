import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { AdminSkillsScreen } from "@/components/screens/AdminSkillsScreen";

export const Route = createFileRoute("/_authenticated/_admin/admin/skills")({
  head: () => ({
    meta: [
      { title: "Skills Management — SkillSwap Admin" },
      { name: "description", content: "Curate the platform skill catalogue." },
      { property: "og:title", content: "Skills Management — SkillSwap Admin" },
      { property: "og:description", content: "Curate the platform skill catalogue." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <AdminLayout title="Skills Management">
      <div className="pt-16">
        <PreviewNotice feature="Skills Management" />
      </div>
      <AdminSkillsScreen />
    </AdminLayout>
  );
}
