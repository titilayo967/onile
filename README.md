
# onile
**Open, production-ready architecture for tokenized real estate on Stellar**

![Stellar](https://img.shields.io/badge/Stellar-Blockchain-blue)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black)
![Expo](https://img.shields.io/badge/React%20Native-Expo-blueviolet)
![Express](https://img.shields.io/badge/Express-API-red)

onile tokenizes real-world assets on the Stellar blockchain, enabling fractional ownership and peer-to-peer trading of real estate. Property owners can issue tokens representing their assets, investors can buy fractional shares, and rental income is distributed automatically via smart contracts. Transparent, compliant, and accessible to all.

onile is a modular monorepo that implements a production-ready architecture for tokenized real-estate on Stellar. The repository is organized for clarity, separation of concerns, scalable deployments, and secure blockchain integration.

## 🌟 Key Features

* **Stellar-first blockchain layer** — classic assets & Soroban-ready contracts
* **Dual-database strategy** — PostgreSQL for core relational data, MongoDB for flexible content
* **Monorepo workflows** — shared types and UI packages for consistency
* **Cross-platform clients** — Next.js web app and an Expo React Native mobile app
* **Production DevOps** — Docker, Kubernetes manifests, Terraform examples

## 📋 Table of Contents

1. [System Architecture](#system-architecture)
2. [Repository Structure](#repository-structure)
3. [Quick Start](#quick-start)
4. [Development Workflow](#development-workflow)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Security & Compliance](#security--compliance)
8. [Contributing](#contributing)

## 🏗️ System Architecture
```
┌─────────────────────────────────────────────────────────────────────┐
│                              onile                                   │
├─────────────────────────────────────────────────────────────────────┤
│  Clients: onile-web (Next.js)    │  onile-mobile (Expo React Native)  │
├─────────────────────────────────────────────────────────────────────┤
│                           API Gateway / Backend                       │
│                           (onile-api - Express)                       │
├─────────────────────────────────────────────────────────────────────┤
│ Datastores: PostgreSQL (ACID)  │  MongoDB (flexible content)        │
├─────────────────────────────────────────────────────────────────────┤
│                        Blockchain Layer (Stellar)                     │
│                Classic assets + Soroban contracts (onile-contracts)  │
└─────────────────────────────────────────────────────────────────────┘
```

## 📁 Repository Structure

See our package READMEs for per-service details. Top-level layout:

```
onile/
├── onile-web/         # Next.js frontend (App Router)
├── onile-mobile/      # Expo React Native app
├── onile-api/         # Express backend (controllers/services/repositories)
├── onile-contracts/   # Stellar contract sources and deployment scripts
├── packages/          # Shared packages (types, ui-kit)
├── infrastructure/    # K8s, terraform, monitoring
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites

* Node.js 18+
* npm or yarn
* Docker (for local databases)
* PostgreSQL, MongoDB, Redis (or run via Docker)

### Local dev (recommended)

```bash
# 1) Start infra
docker-compose up -d

# 2) Install root deps
npm install

# 3) Start backend and web app (workspace-aware)
npm run dev --workspace=onile-api
npm run dev --workspace=onile-web
```

## 🔧 Development Workflow

- Adopt a feature branch per change
- Keep package boundaries: update `packages/shared-types` for cross-package types
- Add tests in `tests/` folders and ensure CI runs them

## 🧪 Testing

- Unit tests: Jest
- API integration: Supertest
- E2E: Cypress (web) / Detox (mobile)

## 📦 Deployment

- Containerize each service and deploy with Kubernetes or your preferred orchestrator
- Use `infrastructure/` for manifests and Terraform examples

## 🔐 Security & Compliance

- JWT auth with refresh tokens
- Rate limiting and input validation at API layer
- Multi-sig and locked issuing accounts on Stellar
- KYC/AML integration points prepared in the service layer

## 🤝 Contributing

1. Fork → branch → PR
2. Run tests and include changelog entries
3. Keep API contracts backward-compatible

---
For detailed per-app setup and commands, see `onile-api/README.md`, `onile-web/README.md`, `onile-mobile/README.md`, and `onile-contracts/README.md`.


