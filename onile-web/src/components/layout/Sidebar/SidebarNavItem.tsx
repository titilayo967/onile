"use client";

import Link from "next/link";
import { Icon } from "@/components/layout/icons";
import type { NavItem } from "@/components/layout/types";
import { isRouteActive } from "@/components/layout/utils";

type SidebarNavItemProps = {
  item: NavItem;
  pathname: string;
  collapsed: boolean;
  onNavigate?: () => void;
};

export default function SidebarNavItem({ item, pathname, collapsed, onNavigate }: SidebarNavItemProps) {
  const active = isRouteActive(pathname, item.href);

  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        prefetch
        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-body-sm transition-colors ${
          active ? "bg-elevated text-text-primary" : "text-text-secondary hover:bg-elevated hover:text-text-primary"
        } ${collapsed ? "justify-center" : ""}`}
        aria-current={active ? "page" : undefined}
        aria-label={item.label}
      >
        <Icon name={item.icon ?? "dot"} />
        {!collapsed && <span>{item.label}</span>}
      </Link>
    </li>
  );
}
