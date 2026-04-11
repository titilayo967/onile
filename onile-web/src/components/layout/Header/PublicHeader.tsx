"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNav from "@/components/layout/Header/HeaderNav";
import { Icon } from "@/components/layout/icons";
import { publicNavLinks } from "@/components/layout/navConfig";

type PublicHeaderProps = {
  minimal?: boolean;
};

export default function PublicHeader({ minimal = false }: PublicHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border-subtle transition-all ${
        scrolled ? "bg-surface/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-token flex min-h-16 items-center justify-between gap-3 py-2">
        <Link href="/" className="text-h3 text-text-primary" aria-label="onile home">
          onile
        </Link>

        {!minimal && <HeaderNav items={publicNavLinks} className="hidden lg:block" />}

        {!minimal && (
          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/login" className="button-secondary">
              Sign In
            </Link>
            <Link href="/auth/signup" className="button-primary">
              Get Started
            </Link>
          </div>
        )}

        {!minimal && (
          <button
            type="button"
            className="button-secondary lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="public-mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
            Menu
          </button>
        )}
      </div>

      {!minimal && mobileOpen && (
        <div id="public-mobile-nav" className="border-t border-border-subtle bg-surface lg:hidden">
          <div className="container-token space-y-3 py-4">
            <HeaderNav items={publicNavLinks} className="block" onNavigate={() => setMobileOpen(false)} />
            <div className="flex flex-col gap-2">
              <Link href="/login" className="button-secondary" onClick={() => setMobileOpen(false)}>
                Sign In
              </Link>
              <Link href="/auth/signup" className="button-primary" onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
