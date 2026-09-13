import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import { PreviewNotice } from "@/components/PreviewNotice";
import { SwapRequestsScreen } from "@/components/screens/SwapRequestsScreen";

export const Route = createFileRoute("/_authenticated/swap-requests")({
  head: () => ({
    meta: [
      { title: "Swap Requests — SkillSwap" },
      { name: "description", content: "Review incoming and outgoing skill swap requests." },
      { property: "og:title", content: "Swap Requests — SkillSwap" },
      { property: "og:description", content: "Review incoming and outgoing skill swap requests." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <AppLayout>
      <div className="pt-20">
        <PreviewNotice feature="Swap Requests" />
      </div>
      <SwapRequestsScreen />
    </AppLayout>
  );
}
