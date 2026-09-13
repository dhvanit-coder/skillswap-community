import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/_authenticated/_admin/admin/reports")({
  head: () => ({
    meta: [
      { title: "Reports & Feedback — SkillSwap Admin" },
      { name: "description", content: "Review member reports and swap feedback." },
      { property: "og:title", content: "Reports & Feedback — SkillSwap Admin" },
      { property: "og:description", content: "Review member reports and swap feedback." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <AdminLayout title="Reports & Feedback">
      <div className="pt-16">
        <PreviewNotice feature="Reports & Feedback" />
      </div>
      <main className="w-full bg-surface min-h-screen p-space-lg">
        <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04)] flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
            <Icon name="flag" size={24} />
          </div>
          <h1 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Reports & Feedback</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Member reports and swap feedback will be listed here once moderation tools ship in the next phase.
          </p>
        </div>
      </main>
    </AdminLayout>
  ),
});
