import type { NavItem, NavSection, UserRole } from "@/components/layout/types";

export function isRouteActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function filterItemsByRole(items: NavItem[], role: UserRole): NavItem[] {
  return items.filter((item) => !item.roles || item.roles.includes(role));
}

export function filterSectionsByRole(sections: NavSection[], role: UserRole): NavSection[] {
  return sections
    .map((section) => ({ ...section, items: filterItemsByRole(section.items, role) }))
    .filter((section) => section.items.length > 0);
}

export function pageTitleFromPath(pathname: string): string {
  const normalized = pathname.replace(/\?.*$/, "").replace(/#.*$/, "");
  if (normalized === "/") return "Home";
  const segment = normalized.split("/").filter(Boolean).at(-1) ?? "dashboard";
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
