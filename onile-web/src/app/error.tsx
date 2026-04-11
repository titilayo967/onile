"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="app-shell">
      <main className="container-token py-12">
        <section className="surface-card p-6 md:p-8" role="alert">
          <span className="chip">Something went wrong</span>
          <h2 className="text-h2 mt-3 text-text-primary">We could not load this page right now</h2>
          <p className="text-body mt-2">Please try again. If this persists, contact support.</p>
          <p className="text-caption mt-2">{error.message}</p>
          <button className="button-secondary mt-4" onClick={reset} type="button">
            Try Again
          </button>
        </section>
      </main>
    </div>
  );
}
