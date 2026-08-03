# Repository Guidelines

## Project Structure & Module Organization

This repository is a static bilingual portfolio built with Astro and strict TypeScript. Route entry points live in `src/pages/`; `src/pages/[lang]/index.astro` serves localized pages, while `src/pages/index.astro` handles the root route. Reusable UI belongs in `src/components/`, and shared page framing belongs in `src/layouts/`. Keep portfolio content and translations centralized in `src/data/portfolio.ts`. Global styling is in `src/styles/global.css`; imported images belong in `src/assets/`, while files copied unchanged to the site belong in `public/`. Generated `.astro/` and `dist/` directories must not be committed.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies from `package-lock.json`.
- `npm run dev` starts Astro's local development server with hot reload.
- `npm run check` runs Astro and TypeScript diagnostics without building.
- `npm run build` checks the project and produces the static site in `dist/`.
- `npm run preview` serves the production build for final browser review.

Run `npm run build` before submitting a change.

## Coding Style & Naming Conventions

Follow the existing two-space indentation, semicolon usage, and single-quoted JavaScript/TypeScript strings. Use `PascalCase.astro` for components and layouts, lowercase route filenames, `camelCase` for variables/functions, and `PascalCase` for TypeScript interfaces and types. Prefer typed data models over inline unstructured content. Preserve the `es`/`en` shape for every localized field. Reuse CSS custom properties from `:root`, choose descriptive kebab-case class names, and retain accessible labels, alt text, focus states, and semantic landmarks.

## Testing Guidelines

There is currently no automated test framework or coverage threshold. Treat `npm run check` and `npm run build` as required validation. For visual changes, use `npm run preview` and inspect both `/es/` and `/en/` at desktop and mobile widths; verify navigation, language switching, external links, keyboard focus, and image alt text.

## Commit & Pull Request Guidelines

Git history is not included in this repository snapshot, so no established commit convention can be inferred. Use concise, imperative subjects, optionally scoped, such as `feat(portfolio): add project card` or `fix(nav): improve mobile focus`. Pull requests should explain the change and validation performed, link related issues, and include before/after screenshots for visible UI changes. Keep generated files and unrelated edits out of the diff.

## Configuration & Content Safety

Replace placeholder profile data, links, and images before deployment, and set the production `site` URL in `astro.config.mjs`. Do not commit secrets or private contact information not intended for the public site.
