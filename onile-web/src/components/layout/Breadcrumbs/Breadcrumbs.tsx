"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="text-body-sm">
      <ol className="flex flex-wrap items-center gap-2 text-text-muted">
        <li>
          <Link href="/dashboard" className="hover:text-text-primary">
            Dashboard
          </Link>
        </li>
        {parts.map((part, index) => {
          const href = `/${parts.slice(0, index + 1).join("/")}`;
          const label = part
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          const isCurrent = index === parts.length - 1;

          return (
            <li key={href} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {isCurrent ? (
                <span className="text-text-primary" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link href={href} className="hover:text-text-primary">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
