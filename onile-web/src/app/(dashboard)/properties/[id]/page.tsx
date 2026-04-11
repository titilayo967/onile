import React from 'react';

type Props = { params: { id: string } };

export default function PropertyPage({ params }: Props) {
  return (
    <main className="app-shell">
      <section className="container-token py-8 md:py-12 space-y-4">
        <span className="chip">Asset Detail</span>
        <h1 className="text-h1 text-text-primary">Property {params.id}</h1>
        <p className="text-body">This screen presents token supply, yield profile, occupancy track record, and ownership terms for informed investment decisions.</p>
        <article className="surface-card p-5 md:p-6" style={{ backgroundImage: 'var(--gradient-card-accent)' }}>
          <p className="text-caption">Current Snapshot</p>
          <p className="text-h3 mt-2 text-text-primary">Projected Net Yield: 8.1%</p>
          <p className="text-body-sm mt-2">Minimum ticket size and on-chain issuance details will appear here once API integration is complete.</p>
        </article>
      </section>
    </main>
  );
}
