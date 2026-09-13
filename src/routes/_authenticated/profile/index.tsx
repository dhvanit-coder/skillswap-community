import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile/")({
  component: () => <div className="p-8">Profile</div>,
});
