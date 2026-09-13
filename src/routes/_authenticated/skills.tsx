import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { SkillsCard } from "@/components/skills/SkillsCard";
import { Icon } from "@/components/Icon";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_authenticated/skills")({
  head: () => ({
    meta: [
      { title: "My Skills — SkillSwap" },
      { name: "description", content: "Manage the skills you offer and the skills you want to learn." },
      { property: "og:title", content: "My Skills — SkillSwap" },
      { property: "og:description", content: "Manage the skills you offer and the skills you want to learn." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const { user } = useAuth();
  return (
    <AppLayout>
      <main className="w-full pt-20 bg-surface flex-1">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-surface-container-lowest p-4 rounded-xl shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <Link to="/dashboard" className="hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Icon name="chevron_right" size={16} className="text-outline" />
              <span className="text-on-surface font-headline-sm text-[15px] font-semibold">My Skills</span>
            </div>
            <Link
              to="/profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors"
            >
              <Icon name="person" size={18} />
              <span>Back to Profile</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <SkillsCard userId={user?.id} type="offered" editable />
            <SkillsCard userId={user?.id} type="wanted" editable />
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
