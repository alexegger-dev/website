import { describe, expect, it } from "vitest";
import { DEFAULT_SITE_URL, GITHUB_OWNER, SITE_REPO_SLUG, githubRepoUrl } from "./site-config";
import {
  allGithubRepoHrefs,
  contact,
  lanes,
  portfolioRepos,
} from "./site-content";

const githubRepoPattern = new RegExp(
  `^https://github\\.com/${GITHUB_OWNER}/[a-zA-Z0-9._-]+$`,
);

describe("site-content", () => {
  it("defaults the public site URL to the portfolio-website Pages host", () => {
    expect(DEFAULT_SITE_URL).toBe(`https://${GITHUB_OWNER}.github.io/${SITE_REPO_SLUG}`);
  });

  it("exposes valid GitHub URLs for every portfolio repo", () => {
    for (const repo of portfolioRepos) {
      expect(githubRepoUrl(repo.slug)).toMatch(githubRepoPattern);
    }
  });

  it("keeps lane repository links on the expected owner", () => {
    for (const lane of lanes) {
      for (const repo of lane.repos) {
        expect(repo.href).toMatch(githubRepoPattern);
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
    expect(contact.githubHref).toBe(`https://github.com/${GITHUB_OWNER}`);
    expect(contact.phoneTel).toMatch(/^\+1\d{10}$/);
  });
});
