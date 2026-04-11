"use client";

import type { NavSection } from "@/components/layout/types";
import SidebarNavItem from "@/components/layout/Sidebar/SidebarNavItem";

type SidebarNavSectionProps = {
  section: NavSection;
  pathname: string;
  collapsed: boolean;
  onNavigate?: () => void;
};

export default function SidebarNavSection({ section, pathname, collapsed, onNavigate }: SidebarNavSectionProps) {
  return (
    <section aria-label={section.title} className="space-y-2">
      {!collapsed && <h2 className="px-2 text-caption uppercase tracking-wide">{section.title}</h2>}
      <ul className="space-y-1">
        {section.items.map((item) => (
          <SidebarNavItem key={`${section.title}-${item.label}`} item={item} pathname={pathname} collapsed={collapsed} onNavigate={onNavigate} />
        ))}
      </ul>
    </section>
  );
}
