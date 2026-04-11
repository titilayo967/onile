import { trustIndicators } from "@/lib/content/landingContent";

export default function TrustIndicators() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <article className="surface-card p-6 md:p-8">
        <span className="chip">Trust and Compliance</span>
        <h2 className="text-h2 mt-3 text-text-primary">Built for confidence, transparency, and long-term participation</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {trustIndicators.badges.map((badge) => (
            <span key={badge} className="chip">{badge}</span>
          ))}
        </div>
        <h3 className="text-h3 mt-5 text-text-primary">Ecosystem Alignment</h3>
        <ul className="mt-2 space-y-2 text-body-sm">
          {trustIndicators.partnerships.map((partner) => (
            <li key={partner}>{partner}</li>
          ))}
        </ul>
      </article>

      <article className="surface-card p-6 md:p-8">
        <p className="text-caption">What this platform enables</p>
        <blockquote className="text-body mt-3">“{trustIndicators.quote.body}”</blockquote>
        <p className="text-caption mt-2">{trustIndicators.quote.author}</p>
        <div className="kpi-grid mt-5">
          {trustIndicators.metrics.map((metric) => (
            <div key={metric.label} className="surface-card p-4">
              <p className="text-caption">{metric.label}</p>
              <p className="text-h3 mt-2 text-text-primary">{metric.value}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
