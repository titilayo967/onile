import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="surface-card p-7 md:p-10 text-center" style={{ backgroundImage: "var(--gradient-card-accent)" }}>
      <p className="chip">Start with as little as $50</p>
      <h2 className="text-h2 mt-4 text-text-primary">Own a share of premium real estate without buying an entire building</h2>
      <p className="text-body mt-3 max-w-2xl mx-auto">
        Whether you are investing for yield or listing assets for liquidity, onile gives you compliant pathways with clear blockchain-backed visibility.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/auth/signup" className="button-primary">Get Started</Link>
        <Link href="/dashboard/list-property" className="button-secondary">List Property</Link>
      </div>
    </section>
  );
}
