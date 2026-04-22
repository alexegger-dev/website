import { GITHUB_SITE_OWNER, RESUME_SOURCE_HREF } from "@/lib/site-config";
import {
  contact,
  displayName,
  headline,
  summary,
  tagline,
} from "@/lib/site-content";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)] bg-[var(--surface)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]";

const btnPrimary =
  "focus-ring transition-surface inline-flex min-h-11 min-w-0 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#04110d] hover:brightness-110 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_12px_40px_color-mix(in_oklab,var(--accent)_35%,transparent)] sm:px-6 sm:py-3";

const btnGhost =
  "focus-ring transition-surface inline-flex min-h-11 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--foreground)_18%,transparent)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] motion-safe:hover:-translate-y-0.5 sm:px-6 sm:py-3";

const btnMuted =
  "focus-ring transition-surface inline-flex min-h-11 items-center justify-center rounded-full border border-dashed border-[color-mix(in_oklab,var(--foreground)_22%,transparent)] px-5 py-2.5 text-sm font-semibold text-[var(--muted)] hover:border-[color-mix(in_oklab,var(--foreground)_30%,transparent)] hover:text-[var(--foreground)] sm:px-6 sm:py-3";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[color-mix(in_oklab,var(--foreground)_10%,transparent)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--accent) 45%, transparent), transparent 45%), radial-gradient(circle at 80% 10%, color-mix(in oklab, var(--accent-2) 35%, transparent), transparent 40%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-16 pt-14 sm:gap-12 sm:px-6 sm:pb-28 sm:pt-24">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <span className={pill}>Founding engineer</span>
          <span className={pill}>AI platforms</span>
          <span className={pill}>{contact.location}</span>
        </div>
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">{tagline}</p>
          <h1 className="font-[family-name:var(--font-syne)] text-[2rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {displayName}
            <span className="mt-1 block text-[color-mix(in_oklab,var(--foreground)_72%,transparent)] sm:mt-2">
              {headline}
            </span>
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_78%,transparent)] sm:text-lg sm:leading-relaxed">
            {summary}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
          <a className={btnPrimary} href={`mailto:${contact.email}`} aria-label={`Email ${contact.email}`}>
            <span className="sm:hidden">Email</span>
            <span className="hidden sm:inline">Email {contact.email}</span>
          </a>
          <a className={btnGhost} href={contact.linkedinHref} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className={btnGhost} href={contact.githubHref} target="_blank" rel="noreferrer">
            GitHub portfolio
          </a>
          <a className={btnMuted} href={RESUME_SOURCE_HREF} target="_blank" rel="noreferrer">
            <span className="sm:hidden">Resume (LaTeX)</span>
            <span className="hidden sm:inline">LaTeX resume (source)</span>
          </a>
        </div>
        <div className="grid gap-4 rounded-2xl border border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-[var(--surface-2)] p-5 sm:grid-cols-3 sm:p-6">
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Phone</p>
            <a
              className="focus-ring transition-surface mt-2 block text-base font-semibold tracking-tight sm:text-lg"
              href={`tel:${contact.phoneTel}`}
            >
              {contact.phone}
            </a>
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Email</p>
            <a
              className="focus-ring transition-surface mt-2 block break-words text-base font-semibold tracking-tight sm:text-lg"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">GitHub</p>
            <a
              className="focus-ring transition-surface mt-2 inline-block text-base font-semibold tracking-tight sm:text-lg"
              href={contact.githubHref}
              target="_blank"
              rel="noreferrer"
            >
              @{GITHUB_SITE_OWNER}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
