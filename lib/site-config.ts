/** GitHub username for portfolio URLs (keep in sync with profile). */
export const GITHUB_OWNER = "alexegger224" as const;

/**
 * Slug of the GitHub repository that hosts this site (used for default Pages URL and CI env).
 * Update if you rename the remote repository.
 */
export const SITE_REPO_SLUG = "portfolio-website" as const;

/**
 * Repository slug that contains `resume.latex` (sibling monorepo folder / separate remote).
 */
export const PERSONAL_REPO_SLUG = "personal" as const;

/** Default public site URL when env is unset (override via NEXT_PUBLIC_SITE_URL). */
export const DEFAULT_SITE_URL = `https://${GITHUB_OWNER}.github.io/${SITE_REPO_SLUG}` as const;

export const RESUME_SOURCE_HREF = `https://github.com/${GITHUB_OWNER}/${PERSONAL_REPO_SLUG}/blob/main/resume.latex` as const;

export function getPublicSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    return raw.replace(/\/$/, "");
  }
  return DEFAULT_SITE_URL;
}

export function githubRepoUrl(repo: string): string {
  return `https://github.com/${GITHUB_OWNER}/${repo}`;
}
