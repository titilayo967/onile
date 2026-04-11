import type { NavItem, NavSection } from "@/components/layout/types";

export const publicNavLinks: NavItem[] = [
  { label: "Properties", href: "/properties" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#tokenization" },
  { label: "FAQ", href: "/#faq" },
];

export const dashboardSections: NavSection[] = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: "home" },
      { label: "Properties", href: "/properties", icon: "building" },
      { label: "Investments", href: "/portfolio", icon: "chart" },
      { label: "Wallet", href: "/trading", icon: "wallet" },
    ],
  },
  {
    title: "Portfolio",
    items: [
      { label: "My Properties", href: "/properties", icon: "asset" },
      { label: "Performance", href: "/portfolio", icon: "spark" },
      { label: "Distributions", href: "/portfolio", icon: "coins" },
    ],
  },
  {
    title: "Token Management",
    items: [
      { label: "List Property", href: "/dashboard/list-property", icon: "plus", roles: ["owner", "admin"] },
      { label: "Token Dashboard", href: "/dashboard", icon: "token", roles: ["owner", "admin"] },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Profile", href: "/dashboard", icon: "user" },
      { label: "Security", href: "/dashboard", icon: "shield" },
      { label: "Notifications", href: "/dashboard", icon: "bell" },
    ],
  },
];

export const bottomNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "home" },
  { label: "Properties", href: "/properties", icon: "building" },
  { label: "Portfolio", href: "/portfolio", icon: "chart" },
  { label: "Wallet", href: "/trading", icon: "wallet" },
  { label: "Profile", href: "/dashboard", icon: "user" },
];

export const footerColumns = {
  Platform: [
    { label: "Properties", href: "/properties" },
    { label: "Tokenization", href: "/#tokenization" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/" },
  ],
  Resources: [
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/" },
    { label: "Help Center", href: "/" },
    { label: "Documentation", href: "https://developers.stellar.org/docs" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/" },
    { label: "Privacy Policy", href: "/" },
    { label: "Disclaimers", href: "/" },
  ],
  Company: [
    { label: "About", href: "/#tokenization" },
    { label: "Contact", href: "/" },
    { label: "Careers", href: "/" },
  ],
} as const;

export const socialLinks = [
  { label: "X", href: "https://x.com/stellarorg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/stellar-development-foundation/" },
  { label: "GitHub", href: "https://github.com/stellar" },
] as const;
