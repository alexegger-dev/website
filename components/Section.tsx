import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-[color-mix(in_oklab,var(--foreground)_8%,transparent)] py-16 sm:scroll-mt-28 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-prose text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_78%,transparent)] sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
