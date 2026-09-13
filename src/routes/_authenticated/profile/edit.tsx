import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { ProfileScreen } from "@/components/profile/ProfileScreen";

export const Route = createFileRoute("/_authenticated/profile/edit")({
  head: () => ({
    meta: [
      { title: "Edit Profile — SkillSwap" },
      { name: "description", content: "Update your name, bio, photo, skills, availability and visibility." },
      { property: "og:title", content: "Edit Profile — SkillSwap" },
      { property: "og:description", content: "Update your name, bio, photo, skills, availability and visibility." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <AppLayout>
      <ProfileScreen mode="edit" />
    </AppLayout>
  ),
});
