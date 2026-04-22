# Portfolio website

Recruiter-focused static site for **Alex Egger**. Copy in [`lib/site-content.ts`](lib/site-content.ts) is the source of truth for what appears on the page—keep it aligned with your public resume and GitHub profile when you update your story.

## Privacy & public content

This site intentionally includes **professional contact information** (email, phone, links) for hiring workflows. There are **no API keys or private credentials** in the repository; build-time settings are public URL overrides only (see [`.env.example`](.env.example)). See [`SECURITY.md`](SECURITY.md) for how to report security concerns.

## Requirements

- **Node.js 22+** (see [`package.json`](package.json) `engines` and [`.nvmrc`](.nvmrc))

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run test
npm run build
```

Static export is written to **`out/`** (`output: "export"` in Next.js).

## Repository layout & CI/CD

This app is designed to live in its **own GitHub repository** (recommended name: **`portfolio-website`**) so that **`.github/workflows/` at this directory root** is the repository root on GitHub.

Workflows:

| File                                                         | Purpose                                                                                                                                            |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`.github/workflows/ci.yml`](.github/workflows/ci.yml)       | Every push/PR: `npm ci`, lint, tests, production build with the same `NEXT_PUBLIC_*` env as Pages, then verifies `out/index.html` and `out/_next`. |
| [`.github/workflows/pages.yml`](.github/workflows/pages.yml) | On push to **`main`**: static export, upload artifact, deploy with **`actions/deploy-pages`**.                                                     |

### One-time GitHub settings

1. **Settings → Pages → Build and deployment**: source **GitHub Actions**.
2. Default branch for production should be **`main`** (or edit `pages.yml`).
3. **Project site** (`https://<user>.github.io/<repo>/`): workflows set `NEXT_PUBLIC_BASE_PATH=/<repo>` and `NEXT_PUBLIC_SITE_URL` from `${{ github.repository_owner }}` and `${{ github.event.repository.name }}` so assets resolve under the subpath.

### Renaming the GitHub repository

Update **`SITE_REPO_SLUG`** in [`lib/site-config.ts`](lib/site-config.ts) so `DEFAULT_SITE_URL` matches your Pages URL, and keep CI env in sync (or rely on `repository.name` in workflows, which tracks the slug automatically).

### Custom domain or site at domain root

Use repository **Variables** for Actions if you need overrides, or edit the workflow `env` block:

- Omit or clear **`NEXT_PUBLIC_BASE_PATH`** when the app is served at `/` (not under `/<repo>/`).
- Set **`NEXT_PUBLIC_SITE_URL`** to your canonical `https://…` origin.

### Resume source link

The hero links to LaTeX source via **`PERSONAL_REPO_SLUG`** in `lib/site-config.ts` (defaults to `personal`). Point it at a **public** repository path you control; avoid private or internal-only URLs.

### Embedded in a monorepo

If this folder is **not** the Git root, GitHub will **not** load `portfolio-website/.github/workflows`. Either publish this directory as its own repository (recommended for Pages), or add equivalent workflows at your **monorepo** `.github/` with `defaults.run.working-directory: portfolio-website` and path filters.
