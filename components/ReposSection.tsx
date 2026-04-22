import { Section } from "@/components/Section";
import { githubRepoUrl } from "@/lib/site-config";
import { portfolioRepos } from "@/lib/site-content";

export function ReposSection() {
  return (
    <Section
      id="repos"
      eyebrow="Portfolio"
      title="Twelve repositories to review first"
      description="Each repository illustrates a distinct capability—gateways, runtimes, contracts, and quantitative tooling."
    >
      <div className="reveal-stagger-grid grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portfolioRepos.map((repo) => (
          <a
            key={repo.slug}
            href={githubRepoUrl(repo.slug)}
            target="_blank"
            rel="noopener noreferrer"
            title={repo.slug}
            className="focus-ring group flex min-h-[10.5rem] flex-col overflow-visible rounded-2xl border border-[var(--border-medium)] bg-[var(--surface)] p-5 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] transition-surface motion-safe:hover:-translate-y-1 motion-safe:hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)] motion-safe:hover:shadow-[var(--shadow-card-hover)] sm:min-h-[11.5rem] sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 break-all pb-0.5 font-mono text-sm font-semibold leading-snug text-[var(--foreground)]">
                {repo.slug}
              </h3>
              <span className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" aria-hidden>
                ↗
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--foreground-muted)]">{repo.pitch}</p>
            <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] sm:mt-6">
              View repository
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
