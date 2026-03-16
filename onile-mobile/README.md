
# onile-mobile
**Expo React Native mobile app for onile**

![Expo](https://img.shields.io/badge/React%20Native-Expo-blueviolet)
![TypeScript](https://img.shields.io/badge/TypeScript-Strongly%20Typed-blue)

`onile-mobile` provides a mobile-first experience for exploring properties, managing portfolios, and interacting with tokenized assets on Stellar. It uses Expo and the Expo Router for rapid development.

## 🌟 Key Features

* File-based routing (Expo Router) with `(auth)` and `(tabs)` groups
* NativeWind/Tailwind parity with web styles
* Secure local storage and biometric unlock hooks
* Offline-first UX with queued actions

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Development](#development)
4. [Running on Device](#running-on-device)

## 🚀 Quick Start

1. Copy environment template:

```bash
cp .env.example .env
```

2. Install and run the dev server:

```bash
npm install
expo start --tunnel
```

## 📁 Project Structure

- `src/app` — Expo Router routes and screens
- `src/components` — Mobile UI components
- `src/hooks` — `useAuth`, `useProperties`, `usePortfolio`, `useStellar`
- `src/lib` — API client and secure storage helpers
- `assets` — Images, fonts, icons

## 🛠 Development

- Use `expo start --tunnel` for the easiest device pairing
- For production builds, configure EAS and the `eas.json` file

## 📱 Running on Device

- Start Metro with `expo start --lan` or `--tunnel` and scan the QR code with Expo Go

For platform-specific build instructions, see `infrastructure/` and CI/CD recipes in the root README.

