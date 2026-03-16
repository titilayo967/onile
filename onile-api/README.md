
# onile-api
**Express.js backend — controllers, services, repositories, and Stellar integration**

![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Strongly%20Typed-blue)

`onile-api` implements the API surface and business logic for onile. It follows a clean architecture: HTTP controllers (request/response) delegate to services (business logic), which use repositories (data access) to interact with PostgreSQL and MongoDB. The service layer also coordinates Stellar interactions.

## 🌟 Key Features

* Clean architecture (controllers → services → repositories)
* Prisma + PostgreSQL for ACID-critical data
* MongoDB for flexible property documents and media metadata
* Redis for caching and background queues
* Stellar integration entrypoints in `src/services/stellar.service.ts`

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Development](#development)
4. [Testing](#testing)
5. [Deployment](#deployment)
6. [Security](#security)

## 🚀 Quick Start

1. Copy environment variables:

```bash
cp .env.example .env
# Edit `.env` with DB and Stellar settings
```

2. Install and start in dev mode:

```bash
npm install
npm run dev
```

3. Build for production:

```bash
npm run build
npm run start
```

## 📁 Project Structure

- `src/controllers` — Route handlers
- `src/services` — Business logic & Stellar integration
- `src/repositories` — DB access (Postgres & Mongo)
- `src/models` — Type definitions / Prisma mappings
- `src/middlewares` — Auth, validation, error handling
- `src/routes` — API route registration (`v1/`)
- `prisma/` — Prisma schema and migrations

## 🛠 Development

- Use a local Postgres/Mongo/Redis instance or the `docker-compose.yml` at repo root
- Run migrations with Prisma and seed data before starting complex workflows

## 🧪 Testing

- Unit tests: `npm run test` (Jest)
- Integration tests: Supertest against a test DB instance

## 📦 Deployment

- Build TypeScript to `dist` and run via PM2 using `ecosystem.config.js` or deploy containers to Kubernetes

## 🔐 Security

- JWT authentication and RBAC patterns
- Rate limiting and input validation middleware
- Secure key management for Stellar and wallet operations

For detailed API documentation, add OpenAPI/Swagger specs under `docs/api`.

