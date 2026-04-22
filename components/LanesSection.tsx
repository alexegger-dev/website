import { Section } from "@/components/Section";
import { lanes } from "@/lib/site-content";

export function LanesSection() {
  return (
    <Section
      id="narrative"
      eyebrow="Hiring narrative"
      title="Three lanes I ship against"
      description="Gateway, FinOps, and agent runtime work—pinned repositories recruiters can skim in minutes."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <article
            key={lane.title}
            className="group relative isolate overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)] bg-[var(--surface)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-surface motion-safe:hover:-translate-y-1 motion-safe:hover:border-[color-mix(in_oklab,var(--accent)_35%,transparent)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent)_30%,transparent),transparent_65%)] blur-2xl" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold tracking-tight">{lane.title}</h3>
              <p className="text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_75%,transparent)]">
                {lane.description}
              </p>
              <ul className="space-y-2">
                {lane.repos.map((repo) => (
                  <li key={repo.name}>
                    <a
                      href={repo.href}
                      target="_blank"
                      rel="noreferrer"
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
