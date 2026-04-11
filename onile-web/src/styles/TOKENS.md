# onile-web Design Tokens

Single source of truth for the onile-web visual language.

## Typography

- Heading font: `--font-heading` (Space Grotesk)
- Body font: `--font-body` (Plus Jakarta Sans)
- Mono font: `--font-mono` (JetBrains Mono)

Type scale tokens:

- `--text-display`
- `--text-h1`
- `--text-h2`
- `--text-h3`
- `--text-body-lg`
- `--text-body`
- `--text-body-sm`
- `--text-caption`

Line-height and letter-spacing:

- `--lh-tight`
- `--lh-heading`
- `--lh-body`
- `--ls-display`
- `--ls-tight`
- `--ls-normal`

## Color System

Brand and supporting palettes:

- Brand: `--color-brand-50` to `--color-brand-900`
- Tech: `--color-tech-100` to `--color-tech-700`
- Accent gold: `--color-accent-gold-200` to `--color-accent-gold-600`
- Neutrals: `--color-neutral-0` to `--color-neutral-900`

Semantic colors:

- `--color-success`
- `--color-warning`
- `--color-error`
- `--color-info`

Surface and text tokens:

- `--color-bg-canvas`
- `--color-bg-surface`
- `--color-bg-elevated`
- `--color-border-subtle`
- `--color-border-strong`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-muted`

Dark mode:

- Auto via `@media (prefers-color-scheme: dark)`
- Optional override via `[data-theme="dark"]` and `[data-theme="light"]`

## Spacing and Layout

Spacing scale:

- `--space-1` (4px)
- `--space-2` (8px)
- `--space-3` (12px)
- `--space-4` (16px)
- `--space-5` (24px)
- `--space-6` (32px)
- `--space-7` (48px)
- `--space-8` (64px)

Layout tokens:

- `--container-sm`
- `--container-md`
- `--container-lg`
- `--container-xl`
- `--gutter-inline`

## Shadows

- `--shadow-card`
- `--shadow-hover`
- `--shadow-focus`
- `--shadow-modal`

## Gradients

- `--gradient-hero`
- `--gradient-card-accent`
- `--gradient-cta`

## Motion

Durations:

- `--motion-fast`
- `--motion-base`
- `--motion-slow`

Easing:

- `--ease-standard`
- `--ease-emphasized`
- `--ease-out`

Preset motion pattern:

- `.stagger-reveal` uses fade + slide-up keyframes

## Usage

- Core token definitions: `src/app/globals.css`
- Tailwind alignment: `tailwind.config.js`
- JS access: `src/lib/designTokens.ts`
- Base classes built on tokens:
  - `.app-shell`
  - `.container-token`
  - `.surface-card`
  - `.button-primary`
  - `.button-secondary`
  - `.text-display`, `.text-h1`, `.text-h2`, `.text-h3`, `.text-body`, `.text-caption`

## Accessibility Checklist

- Semantic colors maintain readable contrast against surfaces.
- Motion respects `prefers-reduced-motion`.
- Focus states use `--shadow-focus` for clear keyboard visibility.
- Typography scale adjusts at `48rem` for responsive legibility.
