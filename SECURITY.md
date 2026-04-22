# Security policy

- Report vulnerabilities through **GitHub private vulnerability reporting** (repository **Security** tab). Do not use public issues for undisclosed problems.
- This repo is a **static** site: no app server, database, or sessions in-tree. Build-time config is **`NEXT_PUBLIC_*`** URL overrides only ([`.env.example`](.env.example)).
- Do not commit API keys, tokens, or other secrets. `.gitignore` excludes `.env*`; keep local-only material in **`.env.local`** (untracked).
