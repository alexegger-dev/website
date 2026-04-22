import { afterEach, describe, expect, it, vi } from "vitest";
import {
  DEFAULT_SITE_URL,
  GITHUB_PORTFOLIO_OWNER,
  GITHUB_SITE_OWNER,
  PERSONAL_REPO_SLUG,
  RESUME_SOURCE_HREF,
  SITE_REPO_SLUG,
  absoluteSiteUrl,
  getPublicSiteUrl,
  githubRepoUrl,
} from "./site-config";

describe("site-config", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("exposes stable GitHub Pages defaults", () => {
    expect(GITHUB_SITE_OWNER).toBe("alexegger-dev");
    expect(SITE_REPO_SLUG).toBe("website");
    expect(DEFAULT_SITE_URL).toBe(`https://${GITHUB_SITE_OWNER}.github.io/${SITE_REPO_SLUG}`);
    expect(GITHUB_PORTFOLIO_OWNER).toBe(GITHUB_SITE_OWNER);
  });

  it("builds resume source href to personal repo", () => {
    expect(RESUME_SOURCE_HREF).toBe(
      `https://github.com/${GITHUB_SITE_OWNER}/${PERSONAL_REPO_SLUG}/blob/main/resume.latex`,
    );
    expect(RESUME_SOURCE_HREF).toMatch(/^https:\/\/github\.com\/[^/]+\/[^/]+\/blob\/main\/resume\.latex$/);
  });

  it("returns default site URL when env is unset", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    expect(getPublicSiteUrl()).toBe(DEFAULT_SITE_URL);
  });

  it("trims trailing slashes from NEXT_PUBLIC_SITE_URL", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.org/my-site///");
    expect(getPublicSiteUrl()).toBe("https://example.org/my-site");
  });

  it("trims whitespace from NEXT_PUBLIC_SITE_URL", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "  https://deploy.example/pages  ");
    expect(getPublicSiteUrl()).toBe("https://deploy.example/pages");
  });

  it("joins absoluteSiteUrl with normalized path", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://deploy.example/repo");
    expect(absoluteSiteUrl("/opengraph-image")).toBe("https://deploy.example/repo/opengraph-image");
    expect(absoluteSiteUrl("opengraph-image")).toBe("https://deploy.example/repo/opengraph-image");
  });

  it("builds githubRepoUrl with the portfolio owner", () => {
    expect(githubRepoUrl("llm-traffic-controller")).toBe(
      `https://github.com/${GITHUB_PORTFOLIO_OWNER}/llm-traffic-controller`,
    );
  });
});
