import Link from "next/link";

export default function ListPropertyPage() {
  return (
    <div className="app-shell">
      <main className="container-token py-10 md:py-14">
        <section className="surface-card p-6 md:p-8">
          <span className="chip">For Property Owners</span>
          <h1 className="text-h1 mt-3 text-text-primary">List your property on onile</h1>
          <p className="text-body mt-3 max-w-2xl">
            Begin verification, valuation, and tokenization setup to make your asset accessible to a global pool of fractional investors.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/register" className="button-primary">
              Create Owner Account
            </Link>
            <Link href="/#how-it-works" className="button-secondary">
              Review Process
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
