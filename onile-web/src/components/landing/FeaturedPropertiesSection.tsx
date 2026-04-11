"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PropertyCard from "@/components/landing/PropertyCard";
import type { FeaturedProperty } from "@/lib/content/landingContent";

type FeaturedResponse = {
  properties: FeaturedProperty[];
};

export default function FeaturedPropertiesSection() {
  const [data, setData] = useState<FeaturedProperty[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadProperties(signal?: AbortSignal) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/properties/featured?limit=4", { signal, cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to load featured properties (${response.status})`);
      }
      const payload = (await response.json()) as FeaturedResponse;
      setData(payload.properties ?? []);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setError("Unable to load featured properties right now.");
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    loadProperties(controller.signal);
    return () => controller.abort();
  }, []);

  const skeletonItems = useMemo(() => Array.from({ length: 4 }), []);

  return (
    <section id="featured-properties" className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="chip">Featured Properties</span>
          <h2 className="text-h2 mt-3 text-text-primary">Invest in curated tokenized assets</h2>
          <p className="text-body mt-2 max-w-2xl">Explore high-quality properties with transparent yields, token prices, and ownership readiness.</p>
        </div>
        <Link href="/properties" className="button-secondary hidden sm:inline-flex">
          View All Properties
        </Link>
      </div>

      {loading && (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-live="polite" aria-busy="true">
          {skeletonItems.map((_, index) => (
            <div key={`skeleton-${index}`} className="surface-card overflow-hidden">
              <div className="h-44 w-full animate-pulse bg-elevated" />
              <div className="space-y-3 p-4">
                <div className="h-3 w-20 animate-pulse rounded bg-elevated" />
                <div className="h-5 w-40 animate-pulse rounded bg-elevated" />
                <div className="h-4 w-28 animate-pulse rounded bg-elevated" />
                <div className="h-4 w-full animate-pulse rounded bg-elevated" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="surface-card p-6" role="alert">
          <h3 className="text-h3 text-text-primary">Featured properties are temporarily unavailable</h3>
          <p className="text-body mt-2">{error}</p>
          <button className="button-secondary mt-4" type="button" onClick={() => loadProperties()}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && data && (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}

      <Link href="/properties" className="button-secondary sm:hidden">
        View All Properties
      </Link>
    </section>
  );
}
