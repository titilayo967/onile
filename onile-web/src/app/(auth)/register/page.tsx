import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="space-y-4">
      <span className="chip">Get Started</span>
      <h1 className="text-h1 text-text-primary">Create your onile account</h1>
      <p className="text-body">Build your investor profile to access curated properties, transparent metrics, and blockchain-secured ownership records.</p>
      <div className="space-y-3">
        <button className="button-primary w-full" type="button">Create Account</button>
        <button className="button-secondary w-full" type="button">Continue with Wallet</button>
      </div>
      <p className="text-caption">
        Already have an account? <Link className="text-brand underline-offset-4 hover:underline" href="/login">Sign in</Link>
      </p>
    </main>
  );
}
