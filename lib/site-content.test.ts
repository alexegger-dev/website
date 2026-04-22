import { describe, expect, it } from "vitest";
import {
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
    expect(contact.linkedinHref).toContain("alex-egger-3bb47037b");
    expect(contact.linkedinLabel).toBe("LinkedIn");
    expect(contact.location).toBe("Remote");
    expect(contact.githubHref).toBe(`https://github.com/${GITHUB_SITE_OWNER}`);
    expect(contact.phoneTel).toMatch(/^\+1\d{10}$/);
  });
});
