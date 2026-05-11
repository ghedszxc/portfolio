# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Gerard Mendiola — a single-page Vue 3 + Vite + TypeScript app, styled with Tailwind CSS v4. No backend, no router; everything renders from `src/App.vue` as one scrollable page.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — runs `type-check` and `build-only` in parallel (via `npm-run-all2`); production output to `dist/`
- `npm run type-check` — `vue-tsc --build` (project references; checks `tsconfig.app.json` and `tsconfig.node.json`)
- `npm run build-only` — Vite build without type-checking
- `npm run preview` — serve the built `dist/`

No test runner, linter script, or formatter script is wired up. Prettier and `eslint-config-prettier` are installed as devDependencies but there is no `npm run lint` / `npm run format`.

## Architecture

- **Entry:** `index.html` → `src/main.ts` mounts `App.vue` and registers `vue3-apexcharts` globally as `<apexchart>`.
- **Page composition:** `src/App.vue` lays out the page as a fixed sequence of section components in `src/components/`: `navbar`, `header`, `me`, `experience`, `projects`. A scroll listener in `App.vue` tracks `scrolledPast100vh` (passed to `Navbar` so it swaps to a light theme) and toggles a scroll-to-top button.
- **Component auto-import:** `unplugin-vue-components` (configured in `vite.config.ts`) auto-imports anything in `src/components/` plus components resolved by `motion-v/resolver`. Do not add manual `import` statements for these — they are registered globally and typed in the generated `components.d.ts` (regenerated on dev/build, do not hand-edit).
- **Styling:** Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — utilities are zero-config). Global styles live in `src/assets/main.css` and `src/assets/base.css`.
- **Path alias:** `@/*` resolves to `./src/*` (set in both `vite.config.ts` and `tsconfig.app.json`).
- **Static assets:** Everything in `public/` is served at the site root (e.g. `/favicon.svg`, `/logo-emus.svg`, `/resume.pdf`). Note that some `<img>` tags in components reference `/public/...` paths — Vite serves these correctly in dev but the leading `/public/` is non-idiomatic; the canonical form is just `/asset.svg`.

## Key dependencies

- `vue@^3.5` with `<script setup lang="ts">` SFCs
- `motion-v` — Vue port of Framer Motion, components auto-resolved
- `swiper` — carousel/slider
- `apexcharts` + `vue3-apexcharts` — charts (used inside section components)
