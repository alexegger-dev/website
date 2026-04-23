import { describe, expect, it } from "vitest";
import { githubRepoUrl } from "./site-config";
import {
  careerIntent,
  certifications,
  displayName,
  experience,
  featuredProjects,
  headline,
  heroAtAGlance,
  heroProofBullets,
  lanes,
  metrics,
  portfolioRepos,
  selectedCases,
  skillGroups,
  summary,
  tagline,
} from "./site-content";

const slugPattern = /^[a-z][a-z0-9-]*$/;

describe("site-content integrity", () => {
  it("keeps hero and SEO strings non-empty", () => {
    expect(displayName.trim().length).toBeGreaterThan(0);
    expect(headline.trim().length).toBeGreaterThan(20);
    expect(tagline.trim().length).toBeGreaterThan(20);
    expect(summary.trim().length).toBeGreaterThan(40);
    expect(careerIntent.trim().length).toBeGreaterThan(20);
  });

  it("keeps hero glance stack non-empty", () => {
    expect(heroAtAGlance.stack.length).toBeGreaterThan(0);
    for (const s of heroAtAGlance.stack) {
      expect(s.trim().length).toBeGreaterThan(0);
    }
    expect(heroAtAGlance.timezone.toLowerCase()).toContain("mountain");
    expect(heroAtAGlance.cardSummary.trim().length).toBeGreaterThan(20);
  });

  it("requires every metric to have defensible scope copy", () => {
    expect(metrics.length).toBeGreaterThanOrEqual(4);
    for (const m of metrics) {
      expect(m.label.trim().length).toBeGreaterThan(0);
      expect(m.detail.trim().length).toBeGreaterThan(10);
      expect(m.context.trim().length).toBeGreaterThan(15);
    }
  });

  it("keeps portfolio repo slugs unique and URL-safe", () => {
    expect(portfolioRepos.length).toBe(12);
    const slugs = portfolioRepos.map(r => r.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(slugPattern);
    }
  });

  it("pins selected cases to repos that exist in the portfolio grid", () => {
    const slugSet = new Set(portfolioRepos.map(r => r.slug));
    for (const c of selectedCases) {
      expect(c.slug).toMatch(slugPattern);
      expect(slugSet.has(c.slug)).toBe(true);
    }
  });

  it("keeps lane repo hrefs aligned with githubRepoUrl(slug)", () => {
    for (const lane of lanes) {
      expect(lane.repos.length).toBeGreaterThan(0);
      for (const r of lane.repos) {
        expect(r.name).toBe(r.name.trim());
        expect(r.href).toBe(githubRepoUrl(r.name));
      }
    }
  });

  it("requires experience entries with at least one bullet", () => {
    expect(experience.length).toBeGreaterThanOrEqual(2);
    for (const role of experience) {
      expect(role.company.trim().length).toBeGreaterThan(0);
      expect(role.bullets.length).toBeGreaterThan(0);
      for (const b of role.bullets) {
        expect(b.trim().length).toBeGreaterThan(10);
      }
    }
  });

  it("keeps skill groups populated", () => {
    expect(skillGroups.length).toBeGreaterThanOrEqual(4);
    for (const g of skillGroups) {
      expect(g.title.trim().length).toBeGreaterThan(0);
      expect(g.items.length).toBeGreaterThan(0);
    }
  });

  it("lists certifications and featured projects", () => {
    expect(certifications.length).toBe(3);
    expect(featuredProjects.length).toBeGreaterThanOrEqual(1);
  });

  it("keeps public metrics resume-scoped (no legacy stealth/uptime slogans)", () => {
    const joined = metrics.map(m => `${m.label} ${m.detail} ${m.context}`).join(" ");
    expect(joined).not.toMatch(/Stealth|99\.9%|~88%|~40%/i);
  });

  it("exposes hero proof lines for the fold", () => {
    expect(heroProofBullets.length).toBeGreaterThanOrEqual(3);
    for (const line of heroProofBullets) {
      expect(line.trim().length).toBeGreaterThan(20);
    }
  });
});
