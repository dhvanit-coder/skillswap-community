import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_admin/admin/reports")({
  component: () => <div className="p-8">AdminReports</div>,
});
