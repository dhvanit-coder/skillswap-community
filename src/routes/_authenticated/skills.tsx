import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/skills")({
  component: () => <div className="p-8">Skills</div>,
});
