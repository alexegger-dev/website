import { Section } from "@/components/Section";
import { experience } from "@/lib/site-content";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      description="Pre-seed product engineering, consulting delivery, financial analytics, and quant research. Newest first."
    >
      <div className="reveal-stagger-grid relative min-w-0">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-8 left-[13px] top-10 w-px bg-[var(--border-medium)] sm:left-[15px]"
        />
        <div className="space-y-8 sm:space-y-10">
          {experience.map((role) => (
            <article
              key={`${role.company}-${role.range}`}
              className="relative ml-1 min-w-0 rounded-2xl border border-[var(--border-medium)] bg-[var(--surface)] py-5 pl-9 pr-4 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] sm:ml-0 sm:py-6 sm:pl-12 sm:pr-8"
            >
              <span
                className="absolute left-[7px] top-[1.4rem] z-10 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] sm:left-[9px] sm:top-[1.55rem]"
                aria-hidden
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="pb-0.5 text-balance font-[family-name:var(--font-syne)] text-xl font-semibold leading-snug sm:text-2xl">
                    {role.company}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {role.title} · {role.location}
                  </p>
                </div>
                <p className="chip-date shrink-0 font-mono text-xs uppercase tracking-[0.18em]">{role.range}</p>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--foreground-muted)] sm:mt-6">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" aria-hidden />
                    <span className="min-w-0 text-pretty">{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
