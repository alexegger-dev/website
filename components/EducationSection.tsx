import { Section } from "@/components/Section";
import { certifications, education, featuredProjects } from "@/lib/site-content";

export function EducationSection() {
  return (
    <Section
      id="education"
      eyebrow="Education and highlights"
      title="Credentials and selected work"
      description="Coursework, certifications, and projects that reflect production-oriented rigor."
    >
      <div className="reveal-stagger-grid grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="min-w-0 space-y-6 rounded-2xl border border-[var(--border-medium)] bg-[var(--surface)] p-5 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] sm:p-8">
          <div>
            <h3 className="pb-0.5 font-[family-name:var(--font-syne)] text-xl font-semibold leading-snug">Education</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)]">
              <span className="font-semibold text-[var(--foreground)]">{education.school}</span> — {education.detail}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Certifications</h4>
            <ul className="mt-3 space-y-2.5 text-sm leading-snug text-[var(--foreground-muted)]">
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
        <div className="min-w-0 space-y-4">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="min-w-0 rounded-2xl border border-[var(--border-medium)] bg-[var(--surface-2)] p-5 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] sm:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h3 className="min-w-0 pb-0.5 font-[family-name:var(--font-syne)] text-lg font-semibold leading-snug">
                  {project.name}
                </h3>
                <p className="chip-date shrink-0 font-mono text-[11px] uppercase leading-snug tracking-[0.16em]">
                  {project.meta}
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--foreground-muted)]">
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
