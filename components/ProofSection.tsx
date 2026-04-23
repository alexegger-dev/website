import { Section } from "@/components/Section";
import { metrics } from "@/lib/site-content";

const metricCardBg =
  "linear-gradient(152deg, var(--surface) 0%, color-mix(in oklab, var(--surface-2) 55%, var(--surface)) 48%, var(--surface-2) 100%)";

export function ProofSection() {
  return (
    <Section
      id="proof"
      eyebrow="Evidence"
      title="Outcomes from my resume"
      description="Each card reflects a concrete statement on my resume. Scope lines state the employer context and how the outcome is defined. No additional internal metrics beyond that."
    >
      <div className="reveal-stagger-grid grid min-w-0 gap-4 sm:gap-5 md:grid-cols-2">
        {metrics.map((metric, index) => {
          const featured = index === 0;
          return (
            <article
              key={metric.label}
              className={`relative isolate min-w-0 overflow-x-clip rounded-2xl border border-[var(--border-medium)] p-5 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_6%,transparent),var(--shadow-elevated)] sm:p-6 ${
                featured ? "md:col-span-2 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-start md:gap-10 md:p-8" : ""
              }`}
              style={{ background: metricCardBg }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-2 top-2 h-24 w-24 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent-2)_18%,transparent),transparent_75%)] blur-xl sm:right-4 sm:top-4"
              />
              <div className="relative z-10">
                <p className="pb-1 text-balance font-[family-name:var(--font-syne)] text-xl font-semibold leading-[1.22] tracking-[-0.02em] text-[var(--accent)] sm:text-2xl sm:leading-[1.24]">
                  {metric.label}
                </p>
                <p
                  className={`mt-3 text-pretty text-sm leading-relaxed text-[var(--foreground-muted)] ${featured ? "sm:text-base sm:leading-relaxed" : ""}`}
                >
                  {metric.detail}
                </p>
              </div>
              <div
                className={`relative z-10 mt-5 border-t border-[var(--border-hairline)] pt-4 ${
                  featured ? "md:mt-0 md:border-t-0 md:border-l md:border-[var(--border-hairline)] md:pl-8 md:pt-0" : ""
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] sm:tracking-[0.16em]">
                  Scope and definition
                </p>
                <p className="text-scope mt-2 text-pretty text-xs leading-relaxed sm:text-sm">{metric.context}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
