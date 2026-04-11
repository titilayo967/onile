import { AppShell } from "@/components/layout";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AppShell variant="dashboard">{children}</AppShell>;
}
