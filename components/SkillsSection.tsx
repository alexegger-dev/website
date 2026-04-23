import { Section } from "@/components/Section";
import { skillGroups } from "@/lib/site-content";

export function SkillsSection() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Skills"
      description="Grouped the same way as my resume. Easy to scan, and easy to verify in the repos."
    >
      <div className="reveal-stagger-grid grid min-w-0 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="min-w-0 rounded-2xl border border-[var(--border-medium)] bg-[var(--surface-2)] p-5 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)] sm:p-6"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.18em]">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="transition-surface max-w-full break-words rounded-full border border-[var(--border-medium)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--foreground)] motion-safe:hover:border-[color-mix(in_oklab,var(--accent)_40%,transparent)] motion-safe:hover:text-[var(--accent)]"
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
