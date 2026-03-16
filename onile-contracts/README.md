
# onile-contracts
**Stellar smart contracts — classic assets & Soroban-ready sources**

![Stellar](https://img.shields.io/badge/Stellar-Contracts-blue)

`onile-contracts` contains on-chain code for tokenizing property assets and (future) Soroban contracts for on-chain deeds, rent distribution, and governance logic.

## 🌟 Key Features

* Classic Stellar asset scripts for property tokens
* Soroban contract sources (NFT deeds, rent distribution) prepared for future integration
* Deployment scripts and test helpers for local testnet flows

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Build & Deploy](#build--deploy)
4. [Testing](#testing)

## 🚀 Quick Start

Install the required toolchain for your contracts (e.g., Scarb for Cairo/Soroban), then build:

```bash
# Build contracts (example for Cairo/Soroban)
scarb build
```

Use the `src/scripts` helpers to deploy to a local testnet before attempting mainnet deployments.

## 📁 Project Structure

- `src/contracts` — Contract sources (classic & Soroban)
- `src/scripts` — Deployment and test scripts
- `artifacts` — Compiled WASM / ABIs
- `tests` — Contract integration tests

## 🧪 Testing

Run contract tests using the framework suited to your contract language (Cairo, Soroban). Always test on a local or test network first.

## 🔒 Security

Follow best practices: audits, timelocks, multi-sig for issuing accounts, and limited issuing keys for production assets.

# Soroban Project

## Project Structure

This repository uses the recommended structure for a Soroban project:

```text
.
├── contracts
│   └── hello_world
│       ├── src
│       │   ├── lib.rs
│       │   └── test.rs
│       └── Cargo.toml
├── Cargo.toml
└── README.md
```

- New Soroban contracts can be put in `contracts`, each in their own directory. There is already a `hello_world` contract in there to get you started.
- If you initialized this project with any other example contracts via `--with-example`, those contracts will be in the `contracts` directory as well.
- Contracts should have their own `Cargo.toml` files that rely on the top-level `Cargo.toml` workspace for their dependencies.
- Frontend libraries can be added to the top-level directory as well. If you initialized this project with a frontend template via `--frontend-template` you will have those files already included.
