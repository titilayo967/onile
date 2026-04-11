"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function ListPropertyPage() {
  const { user } = useAuth();
  const canAccess = user?.role === "owner" || user?.role === "admin";

  function enableOwnerDemo() {
    window.localStorage.setItem("onile:role", "owner");
    window.location.reload();
  }

  if (!canAccess) {
    return (
      <section className="surface-card p-6 md:p-8" role="alert">
        <span className="chip">Restricted</span>
        <h1 className="text-h1 mt-3 text-text-primary">Owner access required</h1>
        <p className="text-body mt-3">Only property owners can access token management onboarding. Switch to an owner profile to continue.</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={enableOwnerDemo} className="button-primary">
            Enable Owner Demo
          </button>
          <Link href="/dashboard" className="button-secondary">
            Back to Dashboard
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="surface-card p-6 md:p-8">
      <span className="chip">For Property Owners</span>
      <h1 className="text-h1 mt-3 text-text-primary">List your property on onile</h1>
      <p className="text-body mt-3 max-w-2xl">
        Begin verification, valuation, and tokenization setup to make your asset accessible to a global pool of fractional investors.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link href="/register" className="button-primary">
          Create Owner Account
        </Link>
        <Link href="/#how-it-works" className="button-secondary">
          Review Process
        </Link>
      </div>
    </section>
  );
}
