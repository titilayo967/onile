"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/components/layout/types";
import { isRouteActive } from "@/components/layout/utils";

type HeaderNavProps = {
  items: NavItem[];
  className?: string;
  onNavigate?: () => void;
};

export default function HeaderNav({ items, className, onNavigate }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className={className}>
      <ul className="flex flex-wrap items-center gap-2">
        {items.map((item) => {
          const active = isRouteActive(pathname, item.href);
          return (
            <li key={`${item.label}-${item.href}`}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active ? "bg-elevated text-text-primary" : "text-text-secondary hover:text-text-primary"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
