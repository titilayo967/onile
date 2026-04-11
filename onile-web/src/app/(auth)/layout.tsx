import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <div className="container-token py-8 md:py-12">
        <div className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
          <aside className="surface-card p-6 md:p-8" style={{ backgroundImage: 'var(--gradient-card-accent)' }}>
            <p className="chip">onile Access</p>
            <h2 className="text-h2 mt-4 text-text-primary">Secure your place in digital real estate markets.</h2>
            <p className="text-body mt-4">Sign in to track your holdings or create an account to start building diversified property exposure through tokenized assets.</p>
          </aside>
          <section className="surface-card p-6 md:p-8">{children}</section>
        </div>
      </div>
    </div>
  );
}
