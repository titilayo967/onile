import React from 'react';

export default function PortfolioPage() {
  return (
    <section className="space-y-4">
      <span className="chip">Investor Snapshot</span>
      <h1 className="text-h1 text-text-primary">Portfolio</h1>
      <p className="text-body">Track holdings, cashflow, and performance trends across your tokenized property positions.</p>
      <div className="surface-card p-5 md:p-6">
        <p className="text-caption">Allocation Overview</p>
        <p className="text-body mt-2">Residential 64% | Commercial 24% | Mixed-use 12%</p>
      </div>
    </section>
  );
}
