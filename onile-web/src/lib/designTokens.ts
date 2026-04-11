export const designTokens = {
  typography: {
    fontHeading: "var(--font-heading)",
    fontBody: "var(--font-body)",
    fontMono: "var(--font-mono)",
    scale: {
      display: "var(--text-display)",
      h1: "var(--text-h1)",
      h2: "var(--text-h2)",
      h3: "var(--text-h3)",
      bodyLg: "var(--text-body-lg)",
      body: "var(--text-body)",
      bodySm: "var(--text-body-sm)",
      caption: "var(--text-caption)",
    },
  },
  colors: {
    background: "var(--color-bg-canvas)",
    surface: "var(--color-bg-surface)",
    elevated: "var(--color-bg-elevated)",
    textPrimary: "var(--color-text-primary)",
    textSecondary: "var(--color-text-secondary)",
    textMuted: "var(--color-text-muted)",
    brand: "var(--color-brand-500)",
    tech: "var(--color-tech-500)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
    info: "var(--color-info)",
  },
  spacing: {
    1: "var(--space-1)",
    2: "var(--space-2)",
    3: "var(--space-3)",
    4: "var(--space-4)",
    5: "var(--space-5)",
    6: "var(--space-6)",
    7: "var(--space-7)",
    8: "var(--space-8)",
  },
  shadows: {
    card: "var(--shadow-card)",
    hover: "var(--shadow-hover)",
    focus: "var(--shadow-focus)",
    modal: "var(--shadow-modal)",
  },
  gradients: {
    hero: "var(--gradient-hero)",
    cardAccent: "var(--gradient-card-accent)",
    cta: "var(--gradient-cta)",
  },
  motion: {
    fast: "var(--motion-fast)",
    base: "var(--motion-base)",
    slow: "var(--motion-slow)",
    easeStandard: "var(--ease-standard)",
    easeEmphasized: "var(--ease-emphasized)",
    easeOut: "var(--ease-out)",
  },
} as const;

export type DesignTokens = typeof designTokens;

export function getThemeToken(tokenName: string): string | null {
  if (typeof window === "undefined") return null;
  return getComputedStyle(document.documentElement).getPropertyValue(tokenName).trim() || null;
}

export default designTokens;
