"use client";

import Link from "next/link";
import { footerColumns, socialLinks } from "@/components/layout/navConfig";

type FooterProps = {
  compact?: boolean;
};

export default function Footer({ compact = false }: FooterProps) {
  const entries = Object.entries(footerColumns);

  return (
    <footer className="border-t border-border-subtle bg-surface/80">
      <div className="container-token py-8">
        {!compact && (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {entries.map(([title, links]) => (
              <details key={title} className="group md:open" open>
                <summary className="cursor-pointer list-none text-h3 text-text-primary">{title}</summary>
                <ul className="mt-3 space-y-2">
                  {links.map((link) => (
                    <li key={`${title}-${link.label}`}>
                      <Link href={link.href} className="text-body-sm text-text-secondary hover:text-text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-col gap-3 border-t border-border-subtle pt-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-body-sm text-text-secondary">Stellar ecosystem participant focused on compliant tokenized real-estate access.</p>
            <p className="text-caption mt-1">Securities offerings may be restricted and subject to eligibility checks in your jurisdiction.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-body-sm hover:text-text-primary">
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
