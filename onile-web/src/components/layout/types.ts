export type UserRole = "investor" | "owner" | "admin";

export type LayoutVariant = "public" | "auth" | "dashboard" | "full-width";

export type NavItem = {
  label: string;
  href: string;
  icon?: string;
  roles?: UserRole[];
};

export type NavSection = {
  title: string;
  items: NavItem[];
};
