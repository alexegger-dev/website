import { describe, expect, it } from "vitest";
import {
  absoluteSiteUrl,
  DEFAULT_SITE_URL,
  GITHUB_PORTFOLIO_OWNER,
  GITHUB_SITE_OWNER,
  SITE_REPO_SLUG,
  githubRepoUrl,
} from "./site-config";
import {
  allGithubRepoHrefs,
  contact,
  lanes,
  portfolioRepos,
  selectedCases,
} from "./site-content";

const portfolioRepoPattern = new RegExp(
  `^https://github\\.com/${GITHUB_PORTFOLIO_OWNER}/[a-zA-Z0-9._-]+$`,
);

describe("site-content", () => {
  it("defaults the public site URL to the GitHub Pages project host", () => {
    expect(DEFAULT_SITE_URL).toBe(
      `https://${GITHUB_SITE_OWNER}.github.io/${SITE_REPO_SLUG}`,
    );
  });

  it("exposes valid GitHub URLs for every portfolio repo", () => {
    for (const repo of portfolioRepos) {
      expect(githubRepoUrl(repo.slug)).toMatch(portfolioRepoPattern);
    }
  });

  it("keeps portfolio repo titles and tag lists scannable", () => {
    for (const repo of portfolioRepos) {
      expect(repo.title.trim().length).toBeGreaterThan(2);
      if (repo.tags) {
        expect(repo.tags.length).toBeGreaterThan(0);
        expect(repo.tags.length).toBeLessThanOrEqual(3);
      }
    }
  });

  it("links selected cases on the portfolio owner", () => {
    for (const item of selectedCases) {
      expect(githubRepoUrl(item.slug)).toMatch(portfolioRepoPattern);
    }
  });

  it("builds absolute asset URLs for OG metadata", () => {
    const u = absoluteSiteUrl("/opengraph-image");
    expect(u.startsWith("https://")).toBe(true);
    expect(u.endsWith("/opengraph-image")).toBe(true);
  });

  it("keeps lane repository links on the portfolio owner", () => {
    for (const lane of lanes) {
      for (const repo of lane.repos) {
        expect(repo.href).toMatch(portfolioRepoPattern);
      }
    }
  });

  it("aggregates hrefs without duplicates", () => {
    const hrefs = allGithubRepoHrefs();
    expect(hrefs.length).toBe(new Set(hrefs).size);
    for (const href of hrefs) {
      expect(href).toMatch(/^https:\/\/github\.com\//);
    }
  });

  it("uses stable contact channels", () => {
    expect(contact.email).toContain("@");
    expect(contact.linkedinHref).toMatch(/^https:\/\//);
    expect(contact.linkedinHref).toContain("alexegger-dev");
    expect(contact.linkedinLabel).toBe("LinkedIn");
    expect(contact.location).toBe("Remote");
    expect(contact.githubHref).toBe(`https://github.com/${GITHUB_SITE_OWNER}`);
    expect(contact.phoneTel).toMatch(/^\+1\d{10}$/);
  });
});
