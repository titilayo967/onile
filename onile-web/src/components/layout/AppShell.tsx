"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import PublicHeader from "@/components/layout/Header/PublicHeader";
import DashboardHeader from "@/components/layout/Header/DashboardHeader";
import BottomNav from "@/components/layout/BottomNav/BottomNav";
import Footer from "@/components/layout/Footer/Footer";
import type { LayoutVariant, UserRole } from "@/components/layout/types";
import { pageTitleFromPath } from "@/components/layout/utils";
import { useAuth } from "@/hooks/useAuth";

const Sidebar = dynamic(() => import("@/components/layout/Sidebar/Sidebar"), {
  loading: () => <div className="surface-card hidden h-[70vh] lg:block" aria-hidden="true" />,
});

type AppShellProps = {
  variant: LayoutVariant;
  children: React.ReactNode;
};

export default function AppShell({ variant, children }: AppShellProps) {
  const pathname = usePathname();
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const role: UserRole = useMemo(() => user?.role ?? "investor", [user?.role]);

  useEffect(() => {
    if (variant !== "dashboard") return;
    const stored = window.localStorage.getItem("onile:sidebar-collapsed");
    setCollapsed(stored === "1");
  }, [variant]);

  useEffect(() => {
    if (variant !== "dashboard") return;
    window.localStorage.setItem("onile:sidebar-collapsed", collapsed ? "1" : "0");
  }, [collapsed, variant]);

  useEffect(() => {
    setAnnouncement(`Navigated to ${pageTitleFromPath(pathname)}`);
    setMobileSidebarOpen(false);
  }, [pathname]);

  if (variant === "full-width") {
    return <>{children}</>;
  }

  if (variant === "auth") {
    return (
      <div className="app-shell">
        <PublicHeader minimal />
        <main id="main-content" className="container-token py-8 md:py-12">
          <section className="mx-auto w-full max-w-xl surface-card p-6 md:p-8">{children}</section>
        </main>
      </div>
    );
  }

  if (variant === "dashboard") {
    return (
      <div className="app-shell">
        <DashboardHeader onMenuToggle={() => setMobileSidebarOpen((prev) => !prev)} />

        <div className="container-token grid gap-4 py-4 lg:grid-cols-[auto_1fr] lg:py-6">
          <div className="hidden lg:block">
            <Sidebar collapsed={collapsed} onToggleCollapsed={() => setCollapsed((prev) => !prev)} role={role} />
          </div>

          {mobileSidebarOpen && (
            <div className="surface-card p-3 lg:hidden">
              <Sidebar
                mobile
                collapsed={false}
                onToggleCollapsed={() => setCollapsed((prev) => !prev)}
                onNavigate={() => setMobileSidebarOpen(false)}
                role={role}
              />
            </div>
          )}

          <main id="main-content" className="space-y-4 pb-20 lg:pb-6">
            {children}
          </main>
        </div>

        <BottomNav />
        <Footer compact />
        <p className="sr-only" aria-live="polite">
          {announcement}
        </p>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <PublicHeader />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
