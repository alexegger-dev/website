import { GITHUB_SITE_OWNER, RESUME_SOURCE_HREF } from "@/lib/site-config";
import {
  contact,
  displayName,
  headline,
  summary,
  tagline,
} from "@/lib/site-content";

const pill =
  "inline-flex min-h-9 items-center gap-2 rounded-full border border-[var(--border-medium)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:min-h-0 sm:text-[11px] sm:tracking-[0.18em]";

const btnPrimary =
  "focus-ring transition-surface inline-flex min-h-12 min-w-0 w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--foreground-on-accent)] hover:brightness-110 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_14px_44px_color-mix(in_oklab,var(--accent)_32%,transparent)] sm:min-h-11 sm:w-auto sm:px-6";

const btnGhost =
  "focus-ring transition-surface inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] motion-safe:hover:-translate-y-0.5 sm:min-h-11 sm:w-auto sm:px-6";

const btnMuted =
  "focus-ring transition-surface inline-flex min-h-12 w-full items-center justify-center rounded-full border border-dashed border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--muted)] hover:border-[var(--border-medium)] hover:text-[var(--foreground)] sm:min-h-11 sm:w-auto sm:px-6";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-x-hidden border-b border-[var(--border-medium)] pb-px"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(65vh,480px)] opacity-30 blur-3xl sm:h-[min(70vh,520px)]"
        style={{
          background:
            "radial-gradient(ellipse 75% 80% at 22% 12%, color-mix(in oklab, var(--accent) 32%, transparent), transparent 72%), radial-gradient(ellipse 70% 75% at 88% 8%, color-mix(in oklab, var(--accent-2) 22%, transparent), transparent 68%)",
        }}
      />
      <div className="page-container relative flex max-w-6xl flex-col gap-8 pb-14 pt-12 hero-reveal-stagger sm:gap-12 sm:pb-28 sm:pt-20 md:pt-24">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <span className={pill}>Founding engineer</span>
          <span className={pill}>AI platforms</span>
          <span className={pill}>{contact.location}</span>
        </div>
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <p className="font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--accent)] sm:text-xs sm:tracking-[0.28em]">
            {tagline}
          </p>
          <h1 className="pb-1 font-[family-name:var(--font-syne)] font-semibold leading-[1.12] tracking-tight">
            <span className="block text-[clamp(1.875rem,5.5vw+0.5rem,3.65rem)]">{displayName}</span>
            <span className="mt-1.5 block text-[clamp(1.05rem,2.2vw+0.65rem,1.65rem)] font-medium leading-snug text-[var(--foreground-subtle)] sm:mt-2 sm:text-xl md:text-2xl">
              {headline}
            </span>
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--foreground-muted)] sm:text-lg sm:leading-relaxed">
            {summary}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
          <a className={btnPrimary} href={`mailto:${contact.email}`} aria-label={`Email ${contact.email}`}>
            <span className="sm:hidden">Email</span>
            <span className="hidden sm:inline">Email {contact.email}</span>
          </a>
          <a
            className={btnGhost}
            href={contact.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            {contact.linkedinLabel}
          </a>
          <a
            className={btnGhost}
            href={contact.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub (${GITHUB_SITE_OWNER})`}
          >
            GitHub
          </a>
          <a
            className={btnMuted}
            href={RESUME_SOURCE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume LaTeX source on GitHub"
          >
            <span className="sm:hidden">Resume (LaTeX)</span>
            <span className="hidden sm:inline">Resume — LaTeX source</span>
          </a>
        </div>
        <div className="grid gap-4 rounded-2xl border border-[var(--border-medium)] bg-[var(--surface-2)] p-4 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_6%,transparent)] sm:grid-cols-3 sm:gap-4 sm:p-6">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[11px] sm:tracking-[0.2em]">
              Phone
            </p>
            <a
              className="focus-ring transition-surface mt-2 block min-h-11 text-base font-semibold leading-snug tracking-tight sm:min-h-0 sm:text-lg"
              href={`tel:${contact.phoneTel}`}
            >
              {contact.phone}
            </a>
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[11px] sm:tracking-[0.2em]">
              Email
            </p>
            <a
              className="focus-ring transition-surface mt-2 block min-h-11 break-words text-base font-semibold leading-snug tracking-tight sm:min-h-0 sm:text-lg"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[11px] sm:tracking-[0.2em]">
              GitHub
            </p>
            <a
              className="focus-ring transition-surface mt-2 inline-flex min-h-11 items-center text-base font-semibold leading-snug tracking-tight sm:min-h-0 sm:text-lg"
              href={contact.githubHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{GITHUB_SITE_OWNER}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
