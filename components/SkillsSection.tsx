import { Section } from "@/components/Section";
import { skillGroups } from "@/lib/site-content";

export function SkillsSection() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Tools and surfaces I own"
      description="Languages through automation—aligned with production systems, not slideware."
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-[var(--surface-2)] p-5 sm:p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="transition-surface rounded-full border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--foreground)] motion-safe:hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)] motion-safe:hover:text-[var(--accent)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
