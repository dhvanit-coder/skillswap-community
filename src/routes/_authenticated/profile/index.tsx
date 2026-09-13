import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { ProfileScreen } from "@/components/profile/ProfileScreen";

export const Route = createFileRoute("/_authenticated/profile/")({
  head: () => ({
    meta: [
      { title: "My Profile — SkillSwap" },
      { name: "description", content: "View your SkillSwap profile, skills, availability and visibility." },
      { property: "og:title", content: "My Profile — SkillSwap" },
      { property: "og:description", content: "View your SkillSwap profile, skills, availability and visibility." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <AppLayout>
      <ProfileScreen mode="view" />
    </AppLayout>
  ),
});
