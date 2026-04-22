# website

Static hiring profile (**Next.js** App Router, **`output: "export"`**, **Tailwind CSS v4**). Live repo: **[alexegger-dev/website](https://github.com/alexegger-dev/website)** → **https://alexegger-dev.github.io/website/**

## Repository layout

| Path                                                                       | Purpose                                                                  |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`app/`](app/)                                                             | Routes, layout, global styles, theme init                                |
| [`components/`](components/)                                               | UI sections, nav, footer, theme toggle, reveal animation                 |
| [`lib/site-content.ts`](lib/site-content.ts)                               | Copy, metrics, experience, repos (single source of truth for page text)  |
| [`lib/site-config.ts`](lib/site-config.ts)                                 | GitHub owners, Pages URL defaults, resume link helper                    |
| [`lib/theme.ts`](lib/theme.ts)                                             | Light / dark / system preference, storage key, before-paint init script  |
| [`scripts/sync-github-pages-docs.mjs`](scripts/sync-github-pages-docs.mjs) | Copies `out/` → **`docs/`** for branch-based GitHub Pages                |
| [`docs/`](docs/)                                                           | **Generated** static site (see below)—do not hand-edit                   |
| [`.github/workflows/`](.github/workflows/)                                 | CI (lint, test, build, verify `docs/`) and optional Actions Pages deploy |

## Commands

- `npm ci` — install from lockfile
- `npm run dev` — local dev server
- `npm run lint` / `npm run test` — quality gates
- `npm run build` — static export to **`out/`**
- `npm run build:pages` — `next build` then sync **`out/` → `docs/`** (use when publishing via **Settings → Pages → Branch `main` → `/docs`**)

Requires **Node 22** (see [`.nvmrc`](.nvmrc)).

## About `docs/` (and `_next`, `__next*.txt`)

The **`docs/`** folder is a **verbatim copy of `out/`** from `next build`. It exists so you can use **“Deploy from a branch” → `main` → `/docs`** on GitHub Pages without Actions.

Inside you will see:

- **`_next/`** — compiled JavaScript, CSS, and manifests (required for the site to run).
- **`__next*.txt`**, **`index.txt`**, **`\_not-found/**`** — Next.js App Router **static export payloads\*\* (required for routing/hydration).

**Do not delete those from a published tree** and do not hand-edit them. Regenerate with `npm run build:pages` (or CI) after app changes. To **avoid committing** build output, switch Pages to **GitHub Actions** only (see [`.github/workflows/pages.yml`](.github/workflows/pages.yml)) and add **`docs/`** to `.gitignore`—trade-off is you no longer use branch `/docs`.

## GitHub Pages

1. **Project URL:** `https://<owner>.github.io/<repo>/` (this repo: `alexegger-dev` / `website`).
2. **Either** branch **`main` + `/docs`** (commit regenerated **`docs/`**) **or** **GitHub Actions** artifact deploy—see workflow comments in [`pages.yml`](.github/workflows/pages.yml).
3. **`public/.nojekyll`** is copied into `out/` / `docs/` so Jekyll does not ignore `_next/`.

## Configuration

- **[`.env.example`](.env.example)** — `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_BASE_PATH` (build-time only; no secrets).
- **[`SECURITY.md`](SECURITY.md)** — reporting and scope.

## Conventions

- Prefer editing **`lib/site-content.ts`** for copy and repo lists; **`lib/site-config.ts`** for GitHub URLs and Pages defaults.
- **`eslint.config.mjs`** ignores **`docs/`** and **`out/`** (generated output).
