"use client";

import { usePathname } from "next/navigation";
import { dashboardSections } from "@/components/layout/navConfig";
import SidebarNavSection from "@/components/layout/Sidebar/SidebarNavSection";
import SidebarToggle from "@/components/layout/Sidebar/SidebarToggle";
import { filterSectionsByRole } from "@/components/layout/utils";
import type { UserRole } from "@/components/layout/types";

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapsed: () => void;
  onNavigate?: () => void;
  role: UserRole;
  mobile?: boolean;
};

export default function Sidebar({ collapsed, onToggleCollapsed, onNavigate, role, mobile = false }: SidebarProps) {
  const pathname = usePathname();
  const sections = filterSectionsByRole(dashboardSections, role);

  return (
    <aside
      aria-label="Dashboard sidebar"
      className={`surface-card h-full p-3 transition-all duration-base ${collapsed && !mobile ? "w-18" : "w-full"}`}
    >
      <div className="mb-3">
        <SidebarToggle collapsed={collapsed} onToggle={onToggleCollapsed} />
      </div>
      <div className="space-y-4">
        {sections.map((section) => (
          <SidebarNavSection
            key={section.title}
            section={section}
            pathname={pathname}
            collapsed={collapsed && !mobile}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </aside>
  );
}
