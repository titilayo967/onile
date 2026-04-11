import Link from "next/link";
import { footerLinks, socialLinks } from "@/lib/content/landingContent";

export default function LandingFooter() {
  return (
    <footer id="faq" className="surface-card p-6 md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-h3 text-text-primary">onile</p>
          <p className="text-body-sm mt-2 max-w-md">
            Securities and digital asset regulations vary by jurisdiction. Availability may depend on compliance checks and investor eligibility.
          </p>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="button-secondary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-5 flex flex-col gap-3 border-t border-border-subtle pt-4 text-body-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-body-sm hover:text-text-primary">
              {social.label}
            </Link>
          ))}
        </div>
        <p className="text-caption">© {new Date().getFullYear()} onile. All rights reserved.</p>
      </div>
    </footer>
  );
}
