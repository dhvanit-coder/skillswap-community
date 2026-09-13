import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { LandingScreen } from "@/components/screens/LandingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillSwap — Turn What You Know Into What You Want to Learn" },
      {
        name: "description",
        content: "Join the SkillSwap community to exchange skills peer-to-peer: teach what you know, learn what you love — no money involved.",
      },
      { property: "og:title", content: "SkillSwap — Community Skill Exchange" },
      { property: "og:description", content: "Teach what you know, learn what you love. Find your skill partner on SkillSwap." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <AppLayout chrome="public" footer="public">
      <LandingScreen />
    </AppLayout>
  );
}
