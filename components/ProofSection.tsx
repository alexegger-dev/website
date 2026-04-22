import { Section } from "@/components/Section";
import { metrics } from "@/lib/site-content";

export function ProofSection() {
  return (
    <Section
      id="proof"
      eyebrow="Proof"
      title="Outcomes that scale"
      description="Quantified impact across founding engineering, automation consulting, and financial analytics."
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="relative isolate overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-linear-to-br from-[var(--surface)] to-[#0b0d14] p-6"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute right-2 top-2 h-20 w-20 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent-2)_22%,transparent),transparent_70%)] blur-xl sm:right-4 sm:top-4"
            />
            <div className="relative z-10">
              <p className="font-[family-name:var(--font-syne)] text-xl font-semibold tracking-tight text-[var(--accent)] sm:text-2xl">
                {metric.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_78%,transparent)]">
                {metric.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
