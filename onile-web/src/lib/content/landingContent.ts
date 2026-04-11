export type FeaturedProperty = {
  id: string;
  name: string;
  imageSrc: string;
  propertyType: string;
  location: string;
  tokenPriceUsd: number;
  expectedYieldPct: number;
  fundedPct: number;
};

export const heroContent = {
  badge: "Stellar-Powered Tokenized Real Estate",
  headline: "Build durable wealth through premium, blockchain-verified property access.",
  subheadline:
    "onile helps investors buy fractional stakes in verified properties while enabling owners to unlock liquidity with compliant token issuance.",
  primaryCta: { label: "Start Investing", href: "/auth/signup" },
  exploreCta: { label: "Explore Properties", href: "/properties" },
  secondaryCta: { label: "List Your Property", href: "/dashboard/list-property" },
  stats: [
    { label: "Properties Tokenized", value: "128" },
    { label: "Active Investors", value: "4,820" },
    { label: "Avg. Net Yield", value: "8.6%" },
  ],
} as const;

export const howItWorksSteps = [
  {
    title: "Property Listing and Verification",
    description:
      "Owners submit details and legal documents, then onile verifies title, valuation, and rent profile before issuance.",
  },
  {
    title: "Token Issuance on Stellar",
    description:
      "Verified assets are represented as blockchain tokens, giving each property transparent, traceable ownership records.",
  },
  {
    title: "Fractional Ownership Purchase",
    description:
      "Investors buy fractions with low minimums, creating diversified exposure across multiple real-estate classes.",
  },
  {
    title: "Automated Rental Income Distribution",
    description:
      "Rental proceeds are distributed to token holders using deterministic payout logic and auditable transaction trails.",
  },
] as const;

export const tokenizationBenefits = [
  {
    title: "Lower Entry Barriers",
    detail: "Start with as little as $50 instead of full-property capital requirements.",
  },
  {
    title: "Programmable Liquidity",
    detail: "Trade eligible tokens on Stellar-supported markets without waiting for full asset exits.",
  },
  {
    title: "Transparent Ownership",
    detail: "Track issuance and transfers through verifiable blockchain records.",
  },
  {
    title: "Automated Income Rails",
    detail: "Receive rental distributions with clear payout logic and reporting.",
  },
] as const;

export const featuredProperties: FeaturedProperty[] = [
  {
    id: "lekki-heights",
    name: "Lekki Heights Residences",
    imageSrc: "/images/properties/lekki-heights.svg",
    propertyType: "Residential",
    location: "Lekki, Lagos",
    tokenPriceUsd: 92,
    expectedYieldPct: 8.1,
    fundedPct: 74,
  },
  {
    id: "ikoyi-prime",
    name: "Ikoyi Prime Suites",
    imageSrc: "/images/properties/ikoyi-prime.svg",
    propertyType: "Mixed Use",
    location: "Ikoyi, Lagos",
    tokenPriceUsd: 110,
    expectedYieldPct: 7.8,
    fundedPct: 62,
  },
  {
    id: "vi-harbour",
    name: "Victoria Harbour Lofts",
    imageSrc: "/images/properties/victoria-harbour.svg",
    propertyType: "Commercial",
    location: "Victoria Island, Lagos",
    tokenPriceUsd: 138,
    expectedYieldPct: 9.3,
    fundedPct: 81,
  },
  {
    id: "abuja-gateway",
    name: "Abuja Gateway Residences",
    imageSrc: "/images/properties/abuja-gateway.svg",
    propertyType: "Residential",
    location: "Maitama, Abuja",
    tokenPriceUsd: 84,
    expectedYieldPct: 8.7,
    fundedPct: 56,
  },
];

export const trustIndicators = {
  badges: ["Stellar Network Settlement", "Smart-Contract Audit Ready", "KYC/AML Workflow Ready"],
  partnerships: ["Stellar Ecosystem", "RegTech Compliance Partners", "Institutional Custody Integrations"],
  quote: {
    body: "onile bridges traditional real-estate confidence with fintech-grade speed, making ownership more inclusive without sacrificing transparency.",
    author: "Product Vision Team",
  },
  metrics: [
    { label: "Total Value Tokenized", value: "$18.4M" },
    { label: "Investors Onboarded", value: "4.8K" },
    { label: "Verified Listings", value: "128" },
  ],
} as const;

export const footerLinks = [
  { label: "Properties", href: "/properties" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#tokenization" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const socialLinks = [
  { label: "X", href: "https://x.com/stellarorg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/stellar-development-foundation/" },
  { label: "GitHub", href: "https://github.com/stellar" },
] as const;
