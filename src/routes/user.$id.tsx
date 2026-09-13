import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$id")({
  component: () => <div className="p-8">User</div>,
});
