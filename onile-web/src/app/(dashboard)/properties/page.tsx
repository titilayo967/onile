import React from 'react';

export default function PropertiesPage() {
  return (
    <section className="space-y-4">
      <span className="chip">Asset Discovery</span>
      <h1 className="text-h1 text-text-primary">Properties</h1>
      <p className="text-body">Browse curated opportunities with transparent fundamentals and tokenized entry points.</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {['Lekki Heights', 'Ikoyi Prime Residences', 'Victoria Harbour Lofts'].map((name) => (
          <article key={name} className="surface-card p-5">
            <p className="text-caption">Featured Property</p>
            <p className="text-h3 mt-2 text-text-primary">{name}</p>
            <p className="text-body-sm mt-2">Token Yield: 7.9% to 9.4% yearly</p>
          </article>
        ))}
      </div>
    </section>
  );
}
