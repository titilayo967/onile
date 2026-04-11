"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs/Breadcrumbs";
import { Icon, NotificationIcon } from "@/components/layout/icons";
import { pageTitleFromPath } from "@/components/layout/utils";
import { useAuth } from "@/hooks/useAuth";

type DashboardHeaderProps = {
  onMenuToggle: () => void;
};

export default function DashboardHeader({ onMenuToggle }: DashboardHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const pageTitle = useMemo(() => pageTitleFromPath(pathname), [pathname]);

  function signOut() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("onile:user");
    }
    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-surface/95 backdrop-blur">
      <div className="container-token py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="button-secondary lg:hidden"
              onClick={onMenuToggle}
              aria-label="Open dashboard menu"
            >
              <Icon name="menu" />
            </button>
            <Link href="/dashboard" className="text-h3 text-text-primary" aria-label="Dashboard home">
              onile
            </Link>
          </div>

          <label className="hidden w-full max-w-md items-center gap-2 rounded-lg border border-border-subtle bg-elevated px-3 py-2 md:flex">
            <span className="text-caption">Search</span>
            <input
              type="search"
              aria-label="Global property and investment search"
              placeholder="Search properties, tokens, or investments"
              className="w-full border-0 bg-transparent text-body-sm text-text-primary outline-none"
            />
          </label>

          <div className="relative flex items-center gap-2">
            <button type="button" className="button-secondary" aria-label="Open notifications">
              <NotificationIcon />
            </button>
            <button
              type="button"
              className="button-secondary"
              aria-expanded={menuOpen}
              aria-label="Toggle user menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Icon name="user" />
              <span className="hidden sm:inline">{user?.name ?? "Account"}</span>
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-12 w-52 rounded-xl border border-border-subtle bg-surface p-2 shadow-modal">
                <Link href="/dashboard" className="block rounded-md px-3 py-2 text-body-sm hover:bg-elevated">
                  Profile
                </Link>
                <Link href="/dashboard" className="block rounded-md px-3 py-2 text-body-sm hover:bg-elevated">
                  Settings
                </Link>
                <Link href="/trading" className="block rounded-md px-3 py-2 text-body-sm hover:bg-elevated">
                  Wallet
                </Link>
                <button type="button" onClick={signOut} className="mt-1 w-full rounded-md px-3 py-2 text-left text-body-sm hover:bg-elevated">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h1 className="text-h2 text-text-primary">{pageTitle}</h1>
          <Breadcrumbs />
        </div>
      </div>
    </header>
  );
}
