import Link from "next/link";

export default function Home() {
  return (
    <div className="app-shell">
      <main className="container-token py-10 md:py-16">
        <section className="surface-card p-6 md:p-10 stagger-reveal">
          <span className="chip">Stellar-native Real Estate Investing</span>
          <h1 className="text-display mt-4 max-w-3xl text-text-primary">
            Own high-quality property exposure through transparent tokenized equity.
          </h1>
          <p className="text-body-lg mt-4 max-w-2xl">
            onile unlocks fractional real estate ownership with a premium investment experience that blends institutional trust with modern fintech velocity.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/register">
              Start Investing
            </Link>
            <Link className="button-secondary" href="/properties">
              Explore Properties
            </Link>
          </div>
        </section>

        <section className="kpi-grid mt-6 md:mt-8">
          {[
            { label: "Listed Assets", value: "120+" },
            { label: "Avg. Net Yield", value: "8.7%" },
            { label: "Global Investors", value: "4,500+" },
            { label: "Settlement Layer", value: "Stellar" },
          ].map((item) => (
            <article key={item.label} className="surface-card p-5" style={{ backgroundImage: "var(--gradient-card-accent)" }}>
              <p className="text-caption">{item.label}</p>
              <p className="text-h3 mt-2 text-text-primary">{item.value}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
