import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="space-y-4">
      <span className="chip">Welcome Back</span>
      <h1 className="text-h1 text-text-primary">Sign in to your investment portal</h1>
      <p className="text-body">Use your credentials to access portfolio analytics, property performance, and trading activity.</p>
      <div className="space-y-3">
        <button className="button-primary w-full" type="button">Continue with Email</button>
        <button className="button-secondary w-full" type="button">Use Wallet Sign-in</button>
      </div>
      <p className="text-caption">
        New to onile? <Link className="text-brand underline-offset-4 hover:underline" href="/register">Create an account</Link>
      </p>
    </main>
  );
}
