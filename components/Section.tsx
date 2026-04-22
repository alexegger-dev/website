import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

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
      className="scroll-mt-20 border-t border-[var(--border-hairline)] py-12 sm:scroll-mt-28 sm:py-16 md:py-24"
    >
      <div className="page-container min-w-0">
        <Reveal>
          <div className="max-w-3xl min-w-0">
            {eyebrow ? (
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs sm:tracking-[0.22em]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-2.5 pb-1.5 font-[family-name:var(--font-syne)] text-[clamp(1.5rem,4vw+0.75rem,2.25rem)] font-semibold leading-[1.2] tracking-[-0.02em] sm:mt-3 sm:text-4xl sm:leading-[1.22]">
              {title}
            </h2>
            {description ? (
              <p className="mt-3 max-w-prose text-base leading-relaxed text-[var(--foreground-muted)] sm:mt-4 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>
        <Reveal className="mt-8 min-w-0 sm:mt-10 md:mt-12" stagger={1} staggerChildren>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
