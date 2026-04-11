import Link from "next/link";
import { tokenizationBenefits } from "@/lib/content/landingContent";

export default function TokenizationExplainer() {
  return (
    <section id="tokenization" className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <article className="surface-card p-6 md:p-8">
        <span className="chip">Why Tokenization</span>
        <h2 className="text-h2 mt-3 text-text-primary">Real-estate stability meets fintech agility</h2>
        <p className="text-body mt-3">
          Traditional property investing often requires high capital and long lock-up periods. onile introduces programmable ownership, cleaner liquidity paths, and transparent reporting.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {tokenizationBenefits.map((benefit) => (
            <div key={benefit.title} className="surface-card p-4">
              <h3 className="text-h3 text-text-primary">{benefit.title}</h3>
              <p className="text-body-sm mt-2">{benefit.detail}</p>
            </div>
          ))}
        </div>
        <Link href="https://developers.stellar.org/docs" className="button-secondary mt-5" target="_blank" rel="noreferrer">
          Learn More
        </Link>
      </article>
      <aside className="surface-card p-6 md:p-8" aria-label="Tokenization flow diagram">
        <p className="text-caption">Token Flow</p>
        <div className="mt-4 space-y-3">
          <div className="surface-card p-3 text-body-sm">Verified Property</div>
          <div className="text-center text-caption">↓</div>
          <div className="surface-card p-3 text-body-sm">Stellar Asset Issuance</div>
          <div className="text-center text-caption">↓</div>
          <div className="surface-card p-3 text-body-sm">Fractional Investor Ownership</div>
          <div className="text-center text-caption">↓</div>
          <div className="surface-card p-3 text-body-sm">Rental Yield Distribution</div>
        </div>
      </aside>
    </section>
  );
}
