import { Section } from "@/components/Section";
import { lanes } from "@/lib/site-content";

export function LanesSection() {
  return (
    <Section
      id="narrative"
      eyebrow="Focus areas"
      title="How I group the work"
      description="Three interview-sized lanes: edge reliability, spend control, and RAG or agent runtime. Each card links to reference repositories you can clone and run locally."
    >
      <div className="reveal-stagger-grid grid min-w-0 gap-5 sm:gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <article
            key={lane.title}
            className="group relative isolate min-w-0 overflow-x-clip rounded-2xl border border-[var(--border-medium)] bg-[var(--surface)] p-5 shadow-[var(--shadow-elevated),inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] transition-surface motion-safe:hover:-translate-y-1 motion-safe:hover:border-[color-mix(in_oklab,var(--accent)_35%,transparent)] motion-safe:hover:shadow-[var(--shadow-card-hover),inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] sm:p-6"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent)_24%,transparent),transparent_72%)] blur-2xl" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="pb-1 text-balance font-[family-name:var(--font-syne)] text-xl font-semibold leading-[1.22] tracking-[-0.02em] sm:leading-[1.24]">
                {lane.title}
              </h3>
              <p className="text-editorial text-pretty text-[var(--foreground-muted)]">{lane.description}</p>
              <ul className="space-y-2">
                {lane.repos.map((repo) => (
                  <li key={repo.name}>
                    <a
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring transition-surface inline-flex max-w-full touch-manipulation items-center gap-2 rounded-lg px-2 py-1 font-mono text-sm text-[var(--accent)] underline-offset-4 hover:underline prose-safe"
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
