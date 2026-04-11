import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/lib/content/landingContent";

export default function HeroSection() {
  return (
    <section className="surface-card p-6 md:p-10 lg:p-12">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <span className="chip">{heroContent.badge}</span>
          <h1 className="text-display mt-4 max-w-3xl text-text-primary">{heroContent.headline}</h1>
          <p className="text-body-lg mt-4 max-w-2xl">{heroContent.subheadline}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="button-primary" href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
            </Link>
            <Link className="button-secondary" href={heroContent.exploreCta.href}>
              {heroContent.exploreCta.label}
            </Link>
            <Link className="button-secondary" href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </Link>
          </div>
          <div className="kpi-grid mt-6">
            {heroContent.stats.map((stat) => (
              <article key={stat.label} className="surface-card p-4" style={{ backgroundImage: "var(--gradient-card-accent)" }}>
                <p className="text-caption">{stat.label}</p>
                <p className="text-h3 mt-2 text-text-primary">{stat.value}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="surface-card overflow-hidden p-4">
          <Image
            src="/illustrations/hero-tokenization.svg"
            alt="Illustration of real estate assets connected through a blockchain network"
            width={620}
            height={460}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
