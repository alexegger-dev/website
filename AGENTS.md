<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## This repository

- **Stack:** Next.js 16 (static export), React 19, Tailwind v4, Vitest.
- **Content:** `lib/site-content.ts` + `lib/site-config.ts`.
- **Theme:** `lib/theme.ts`, `components/ThemeControls.tsx`, `app/globals.css` (`data-theme` light/dark).
- **Pages artifact:** `npm run build:pages` fills **`docs/`** from **`out/`**—see root **README.md** before editing or deleting files under `docs/`.
