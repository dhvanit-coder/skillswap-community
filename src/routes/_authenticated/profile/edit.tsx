import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile/edit")({
  component: () => <div className="p-8">EditProfile</div>,
});
