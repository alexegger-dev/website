import { Section } from "@/components/Section";
import { githubRepoUrl } from "@/lib/site-config";
import { selectedCases } from "@/lib/site-content";

export function SelectedCasesSection() {
  return (
    <Section
      id="cases"
      eyebrow="Deep dives"
      title="Start here on GitHub"
      description="Three repos that are easy to discuss in interviews. Start with the README, then look at tests and CI."
    >
      <div className="reveal-stagger-grid grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {selectedCases.map((item) => (
          <a
            key={item.slug}
            href={`${githubRepoUrl(item.slug)}#readme`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group flex min-w-0 touch-manipulation flex-col rounded-2xl border border-dashed border-[var(--border-strong)] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] p-5 transition-surface motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] motion-safe:hover:bg-[var(--surface)] motion-safe:hover:shadow-[var(--shadow-elevated)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-balance font-[family-name:var(--font-syne)] text-lg font-semibold leading-snug tracking-[-0.02em] text-[var(--foreground)]">
                {item.title}
              </h3>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
                README
              </span>
            </div>
            <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-[var(--foreground-muted)]">{item.blurb}</p>
            <p className="chip-date prose-safe mt-4 font-mono text-[11px] uppercase tracking-[0.14em]">{item.slug}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
