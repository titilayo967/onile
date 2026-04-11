"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bottomNavItems } from "@/components/layout/navConfig";
import { Icon } from "@/components/layout/icons";
import { isRouteActive } from "@/components/layout/utils";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile dashboard navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-surface/95 px-3 py-2 backdrop-blur lg:hidden"
    >
      <ul className="mx-auto grid max-w-xl grid-cols-5 gap-1">
        {bottomNavItems.map((item) => {
          const active = isRouteActive(pathname, item.href);
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 rounded-md px-1 py-2 text-[11px] ${
                  active ? "bg-elevated text-text-primary" : "text-text-muted"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon name={item.icon ?? "dot"} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
