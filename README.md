# Next.js 14 + TypeScript + Tailwind starter

This repository has been reset and bootstrapped with a fresh Next.js 14 project using the App Router, TypeScript, and Tailwind CSS.

## Getting started

- Install dependencies:
  - npm: `npm install`
  - yarn: `yarn`
  - pnpm: `pnpm install`

- Run the dev server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm start`
- Lint: `npm run lint`
- Format: `npm run format`

## Tech

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint + Prettier

## Design tokens

Global CSS variables define color, spacing, radii, and a fluid type scale (via clamp). Tailwind is configured to read these tokens via the theme extension.

## Fonts

Variable fonts are loaded using `next/font` (Inter and Space Grotesk) and exposed via CSS variables. You can swap in other variable fonts as desired.

## Deployment

A `vercel.json` is provided for Vercel deployments.
