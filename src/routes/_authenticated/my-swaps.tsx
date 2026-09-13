import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { MySwapsScreen } from "@/components/screens/MySwapsScreen";

export const Route = createFileRoute("/_authenticated/my-swaps")({
  head: () => ({
    meta: [
      { title: "My Swaps — SkillSwap" },
      { name: "description", content: "Track your active and completed skill swaps and leave feedback." },
      { property: "og:title", content: "My Swaps — SkillSwap" },
      { property: "og:description", content: "Track your active and completed skill swaps and leave feedback." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <AppLayout>
      <div className="pt-20">
        <PreviewNotice feature="My Swaps" />
      </div>
      <MySwapsScreen />
    </AppLayout>
  );
}
