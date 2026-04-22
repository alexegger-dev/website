import { Section } from "@/components/Section";
import { metrics } from "@/lib/site-content";

const metricCardBg =
  "linear-gradient(152deg, var(--surface) 0%, color-mix(in oklab, var(--surface-2) 55%, var(--surface)) 48%, var(--surface-2) 100%)";

export function ProofSection() {
  return (
    <Section
      id="proof"
      eyebrow="Proof"
      title="Outcomes that scale"
      description="Quantified outcomes from founding engineering, automation consulting, and financial analytics."
    >
      <div className="reveal-stagger-grid grid gap-4 sm:gap-5 md:grid-cols-2">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="relative isolate overflow-x-clip rounded-2xl border border-[var(--border-medium)] p-6 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_6%,transparent),0_16px_48px_rgba(0,0,0,0.35)]"
            style={{ background: metricCardBg }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute right-2 top-2 h-24 w-24 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent-2)_18%,transparent),transparent_75%)] blur-xl sm:right-4 sm:top-4"
            />
            <div className="relative z-10">
              <p className="pb-1 font-[family-name:var(--font-syne)] text-xl font-semibold leading-[1.22] tracking-[-0.02em] text-[var(--accent)] sm:text-2xl sm:leading-[1.24]">
                {metric.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)]">{metric.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
