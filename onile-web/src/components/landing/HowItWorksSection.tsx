import { howItWorksSteps } from "@/lib/content/landingContent";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="space-y-5">
      <div>
        <span className="chip">How It Works</span>
        <h2 className="text-h2 mt-3 text-text-primary">From property verification to passive income in four clear steps</h2>
        <p className="text-body mt-3 max-w-3xl">
          onile combines trusted real-estate diligence with Stellar settlement rails, so both property owners and investors operate with confidence.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {howItWorksSteps.map((step, index) => (
          <article key={step.title} className="surface-card p-5">
            <div className="chip" aria-hidden="true">
              Step {index + 1}
            </div>
            <h3 className="text-h3 mt-3 text-text-primary">{step.title}</h3>
            <p className="text-body-sm mt-3">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
