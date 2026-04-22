import { Section } from "@/components/Section";
import { certifications, education, featuredProjects } from "@/lib/site-content";

export function EducationSection() {
  return (
    <Section
      id="education"
      eyebrow="Education & highlights"
      title="Credentials and competition work"
      description="Coursework plus certifications and standout projects that mirror production rigor."
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-6 rounded-2xl border border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-[var(--surface)] p-5 sm:p-8">
          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold">Education</h3>
            <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_78%,transparent)]">
              <span className="font-semibold text-[var(--foreground)]">{education.school}</span> — {education.detail}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Certifications</h4>
            <ul className="mt-3 space-y-2.5 text-sm leading-snug text-[color-mix(in_oklab,var(--foreground)_82%,transparent)]">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden>
                    ▹
                  </span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-[var(--surface-2)] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h3 className="min-w-0 font-[family-name:var(--font-syne)] text-lg font-semibold">{project.name}</h3>
                <p className="shrink-0 font-mono text-[11px] uppercase leading-snug tracking-[0.16em] text-[var(--accent-2)]">
                  {project.meta}
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_78%,transparent)]">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-2)]/80" aria-hidden />
                    <span>{bullet}</span>
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
