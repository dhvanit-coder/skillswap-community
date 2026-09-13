import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
  component: () => <div className="p-8">Register</div>,
});
