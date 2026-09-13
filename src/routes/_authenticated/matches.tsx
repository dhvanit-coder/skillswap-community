import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { MatchesScreen } from "@/components/screens/MatchesScreen";

export const Route = createFileRoute("/_authenticated/matches")({
  head: () => ({
    meta: [
      { title: "Smart Matches — SkillSwap" },
      { name: "description", content: "See members whose offered skills match what you want to learn, and vice versa." },
      { property: "og:title", content: "Smart Matches — SkillSwap" },
      { property: "og:description", content: "See members whose offered skills match what you want to learn, and vice versa." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <AppLayout>
      <div className="pt-20">
        <PreviewNotice feature="Smart Matching" />
      </div>
      <MatchesScreen />
    </AppLayout>
  );
}
