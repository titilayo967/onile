
# onile-web
**Next.js frontend for onile (App Router + Server Components)**

![Next.js](https://img.shields.io/badge/Next.js-Frontend-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strongly%20Typed-blue)

onile-web is the web client for the onile platform. It prioritizes performance using Next.js Server Components for SSR pages (SEO) while providing interactive client components for dashboard, trading, and portfolio management.

## 🌟 Key Features

* App Router structure with route groups for `(auth)` and `(dashboard)`
* Server components for SEO and fast initial loads
* Client components for interactive experiences (trading, portfolio)
* WebSocket support for real-time updates

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Development](#development)
4. [Testing](#testing)
5. [Deployment](#deployment)

## 🚀 Quick Start

1. Copy environment template:

```bash
cp .env.example .env
```

2. Install and run:

```bash
npm install
npm run dev
```

The app listens on `http://localhost:3000` by default.

## 📁 Project Structure

- `src/app` — App Router pages and groups (`(auth)`, `(dashboard)`, API routes)
- `src/components` — UI building blocks and layout components
- `src/hooks` — Reusable hooks (`useAuth`, `useProperties`, `usePortfolio`)
- `src/lib` — Client utilities and API client
- `src/store` — State management (Zustand/Redux)

## 🛠 Development

- Use `npm run dev` for local development
- Keep shared types in `packages/shared-types` for API contract stability

## 🧪 Testing

- Unit tests: Jest (add test suites under `src/`)

## 📦 Deployment

- Build and export using Next.js best practices. Use containerization for production deployments.

For more details, see the root `README.md`.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
