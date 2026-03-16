
# packages/shared-types
**Shared TypeScript types for onile (API contracts & domain types)**

This package centralizes TypeScript type definitions used across the monorepo (API payloads, property and user domain types, and Stellar-related types). Keeping a single source of truth reduces integration errors and improves developer DX.

## Usage

Install or reference the workspace package and import types:

```ts
import { Property, User } from '@onile/shared-types';
```

## Conventions

* Keep types backward compatible where possible
* Add new types for shared API contracts rather than duplicating them across packages

