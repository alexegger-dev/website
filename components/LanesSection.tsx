import { Section } from "@/components/Section";
import { lanes } from "@/lib/site-content";

export function LanesSection() {
  return (
    <Section
      id="narrative"
      eyebrow="Focus areas"
      title="Three technical pillars"
      description="Gateway, FinOps, and agent-runtime engineering—pinned repositories for a concise technical review."
    >
      <div className="reveal-stagger-grid grid gap-5 sm:gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <article
            key={lane.title}
            className="group relative isolate overflow-x-hidden rounded-2xl border border-[var(--border-medium)] bg-[var(--surface)] p-5 shadow-[var(--shadow-elevated),inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] transition-surface motion-safe:hover:-translate-y-1 motion-safe:hover:border-[color-mix(in_oklab,var(--accent)_35%,transparent)] motion-safe:hover:shadow-[var(--shadow-card-hover),inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] sm:p-6"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent)_24%,transparent),transparent_72%)] blur-2xl" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="pb-0.5 font-[family-name:var(--font-syne)] text-xl font-semibold leading-snug tracking-tight">
                {lane.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">{lane.description}</p>
              <ul className="space-y-2">
                {lane.repos.map((repo) => (
                  <li key={repo.name}>
                    <a
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring transition-surface inline-flex max-w-full items-center gap-2 break-all rounded-lg px-2 py-1 font-mono text-sm text-[var(--accent)] underline-offset-4 hover:underline sm:break-normal"
                    >
                      <span className="min-w-0">{repo.name}</span>
                      <span aria-hidden className="shrink-0 text-[var(--muted)]">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
