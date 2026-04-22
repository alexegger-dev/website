# Security policy

## Reporting a vulnerability

Use [GitHub private vulnerability reporting](https://docs.github.com/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability) for this repository (enable it under **Settings → Security** if it is not already on). Please do not disclose undisclosed security issues in public issues.

## Scope

This repository ships a **static** site (HTML/CSS/JS via Next.js static export). There is no application server, database, or session store in this repo. Build-time variables are limited to public `NEXT_PUBLIC_*` URL configuration—see [`.env.example`](.env.example).

## Secrets

Do not commit real API keys, tokens, or personal secrets. `.gitignore` excludes `.env*` by default. If you add tooling that needs secrets locally, keep them in an untracked `.env.local` file only.
