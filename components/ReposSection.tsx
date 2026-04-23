import { Section } from "@/components/Section";
import { githubRepoUrl } from "@/lib/site-config";
import { portfolioRepos } from "@/lib/site-content";

export function ReposSection() {
  return (
    <Section
      id="repos"
      eyebrow="Portfolio"
      title="Full portfolio index"
      description="Twelve reference implementations across gateways, RAG, runtimes, contracts, and quant tooling. Titles are for scanning, and slugs match GitHub."
    >
      <div className="reveal-stagger-grid flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[var(--border-medium)] md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:rounded-none md:border-0 xl:grid-cols-3">
        {portfolioRepos.map((repo) => (
          <a
            key={repo.slug}
            href={githubRepoUrl(repo.slug)}
            target="_blank"
            rel="noopener noreferrer"
            title={repo.title}
            className="focus-ring group relative flex min-h-[7.5rem] min-w-0 touch-manipulation flex-col border-b border-[var(--border-medium)] bg-[var(--surface)] px-4 py-4 transition-surface last:border-b-0 motion-safe:hover:bg-[color-mix(in_oklab,var(--surface)_88%,var(--surface-2))] md:min-h-[11.5rem] md:rounded-2xl md:border md:border-[var(--border-medium)] md:bg-[var(--surface)] md:p-6 md:shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] md:motion-safe:hover:-translate-y-1 md:motion-safe:hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)] md:motion-safe:hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="font-[family-name:var(--font-syne)] text-base font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)] sm:text-lg">
                  {repo.title}
                </h3>
                <p className="prose-safe mt-1 font-mono text-[11px] leading-snug text-[var(--muted)] sm:text-xs">{repo.slug}</p>
              </div>
              <span className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" aria-hidden>
                ↗
              </span>
            </div>
            {repo.tags && repo.tags.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-1.5 md:mt-3">
                {repo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border-hairline)] bg-[var(--surface-2)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--foreground-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            <p className="mt-2 flex-1 text-pretty text-sm leading-snug text-[var(--foreground-muted)] md:mt-3 md:leading-relaxed">
              {repo.pitch}
            </p>
            <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)] sm:text-[11px] sm:tracking-[0.18em] md:mt-6">
              <span className="md:hidden">Open on GitHub</span>
              <span className="hidden md:inline">View repository</span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
