/**
 * GitHub user or org that owns this site repository (Pages + profile link in the hero).
 * @see https://github.com/alexegger-dev/website
 */
export const GITHUB_SITE_OWNER = "alexegger-dev" as const;

/**
 * Repository name on GitHub — must match `NEXT_PUBLIC_BASE_PATH` for project Pages
 * (`https://<owner>.github.io/<repo>/`).
 */
export const SITE_REPO_SLUG = "website" as const;

/** Default canonical URL (no trailing slash). CI sets `NEXT_PUBLIC_SITE_URL` to match. */
export const DEFAULT_SITE_URL =
  `https://${GITHUB_SITE_OWNER}.github.io/${SITE_REPO_SLUG}` as const;

/**
 * Account where the public portfolio implementation repos live (repo grid + lane links).
 * Change if you move those repositories under another org.
 */
export const GITHUB_PORTFOLIO_OWNER = "alexegger224" as const;

/** Owner and repo for the LaTeX resume deep link in the hero. */
export const RESUME_REPO_OWNER = "alexegger224" as const;
export const PERSONAL_REPO_SLUG = "personal" as const;

export const RESUME_SOURCE_HREF =
  `https://github.com/${RESUME_REPO_OWNER}/${PERSONAL_REPO_SLUG}/blob/main/resume.latex` as const;

export function getPublicSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    return raw.replace(/\/$/, "");
  }
  return DEFAULT_SITE_URL;
}

export function githubRepoUrl(repo: string): string {
  return `https://github.com/${GITHUB_PORTFOLIO_OWNER}/${repo}`;
}
