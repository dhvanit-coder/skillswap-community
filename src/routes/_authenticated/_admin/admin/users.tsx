import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { AdminUsersScreen } from "@/components/screens/AdminUsersScreen";

export const Route = createFileRoute("/_authenticated/_admin/admin/users")({
  head: () => ({
    meta: [
      { title: "User Management — SkillSwap Admin" },
      { name: "description", content: "Manage members, roles, and account status." },
      { property: "og:title", content: "User Management — SkillSwap Admin" },
      { property: "og:description", content: "Manage members, roles, and account status." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <AdminLayout title="User Management">
      <div className="pt-16">
        <PreviewNotice feature="User Management" />
      </div>
      <AdminUsersScreen />
    </AdminLayout>
  );
}
