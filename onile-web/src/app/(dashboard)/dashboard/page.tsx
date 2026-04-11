import React from 'react';

export default function DashboardHome() {
  return (
    <main className="app-shell">
      <section className="container-token py-8 md:py-12 space-y-4">
        <span className="chip">Portfolio Command Center</span>
        <h1 className="text-h1 text-text-primary">Dashboard</h1>
        <p className="text-body">Monitor valuation, rental distributions, and market moves in one institutional-grade interface.</p>
        <div className="kpi-grid">
          <article className="surface-card p-5">
            <p className="text-caption">Total Invested</p>
            <p className="text-h3 mt-2 text-text-primary">$248,700</p>
          </article>
          <article className="surface-card p-5">
            <p className="text-caption">Annualized Yield</p>
            <p className="text-h3 mt-2 text-text-primary">8.4%</p>
          </article>
          <article className="surface-card p-5">
            <p className="text-caption">Monthly Rental Income</p>
            <p className="text-h3 mt-2 text-text-primary">$1,940</p>
          </article>
        </div>
      </section>
    </main>
  );
}
