import type { Metadata } from "next";
import {
  FeaturedPropertiesSection,
  FinalCTA,
  HeroSection,
  HowItWorksSection,
  LandingFooter,
  TokenizationExplainer,
  TrustIndicators,
} from "@/components/landing";

export const metadata: Metadata = {
  title: "onile | Tokenized Real Estate Investing on Stellar",
  description:
    "Discover, invest in, and list tokenized real estate assets on onile. Access fractional ownership, transparent blockchain records, and yield-ready opportunities.",
  openGraph: {
    title: "onile | Tokenized Real Estate Investing on Stellar",
    description:
      "A premium platform for fractional real-estate ownership, token issuance, and transparent asset performance.",
    type: "website",
    images: [
      {
        url: "/illustrations/hero-tokenization.svg",
        width: 1200,
        height: 630,
        alt: "onile tokenized real estate platform overview",
      },
    ],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "onile",
    url: "https://onile.example",
    description:
      "onile tokenizes real estate assets on Stellar, enabling fractional ownership and transparent investment workflows.",
    sameAs: [
      "https://x.com/stellarorg",
      "https://www.linkedin.com/company/stellar-development-foundation/",
      "https://github.com/stellar",
    ],
  };

  return (
    <div className="app-shell">
      <main className="container-token space-y-6 py-8 md:space-y-8 md:py-12">
        <HeroSection />
        <HowItWorksSection />
        <TokenizationExplainer />
        <FeaturedPropertiesSection />
        <TrustIndicators />
        <FinalCTA />
        <LandingFooter />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
