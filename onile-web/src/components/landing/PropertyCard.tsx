import Image from "next/image";
import Link from "next/link";
import type { FeaturedProperty } from "@/lib/content/landingContent";

type PropertyCardProps = {
  property: FeaturedProperty;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="surface-card overflow-hidden">
      <Image src={property.imageSrc} alt={`${property.name} property preview`} width={640} height={400} className="h-44 w-full object-cover" />
      <div className="space-y-2 p-4">
        <p className="text-caption">{property.propertyType}</p>
        <h3 className="text-h3 text-text-primary">{property.name}</h3>
        <p className="text-body-sm">{property.location}</p>
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div>
            <p className="text-caption">Token Price</p>
            <p className="text-body-sm text-text-primary">${property.tokenPriceUsd.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-caption">Expected Yield</p>
            <p className="text-body-sm text-text-primary">{property.expectedYieldPct.toFixed(1)}%</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="text-caption">Funded: {property.fundedPct}%</p>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-elevated">
            <div className="h-full rounded-full" style={{ width: `${property.fundedPct}%`, backgroundImage: "var(--gradient-cta)" }} />
          </div>
        </div>
        <Link href={`/properties/${property.id}`} className="button-secondary w-full mt-3">
          View Property
        </Link>
      </div>
    </article>
  );
}
