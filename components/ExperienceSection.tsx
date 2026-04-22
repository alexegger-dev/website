import { Section } from "@/components/Section";
import { experience } from "@/lib/site-content";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      description="From quantitative research through financial analytics to founding engineering on production AI platforms."
    >
      <div className="reveal-stagger-grid space-y-6 sm:space-y-8">
        {experience.map((role) => (
          <article
            key={`${role.company}-${role.range}`}
            className="rounded-2xl border border-[var(--border-medium)] bg-[var(--surface)] p-5 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="pb-0.5 font-[family-name:var(--font-syne)] text-xl font-semibold leading-snug sm:text-2xl">
                  {role.company}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {role.title} · {role.location}
                </p>
              </div>
              <p className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent-2)]">{role.range}</p>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--foreground-muted)] sm:mt-6">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
