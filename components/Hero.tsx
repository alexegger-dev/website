import { GITHUB_SITE_OWNER, RESUME_SOURCE_HREF } from "@/lib/site-config";
import {
  careerIntent,
  contact,
  displayName,
  headline,
  heroAtAGlance,
  summary,
  tagline,
} from "@/lib/site-content";

const pill =
  "inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--border-medium)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:min-h-9 sm:text-[11px] sm:tracking-[0.18em]";

const btnPrimary =
  "btn-primary-cta focus-ring transition-surface inline-flex min-h-12 min-w-0 w-full touch-manipulation items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--foreground-on-accent)] hover:brightness-110 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_14px_44px_color-mix(in_oklab,var(--accent)_32%,transparent)] sm:min-h-11 sm:w-auto sm:px-6";

const btnGhost =
  "focus-ring transition-surface inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] motion-safe:hover:-translate-y-0.5 sm:min-h-11 sm:w-auto sm:px-6";

const btnMuted =
  "focus-ring transition-surface inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-dashed border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--muted)] hover:border-[var(--border-medium)] hover:text-[var(--foreground)] sm:min-h-11 sm:w-auto sm:px-6";

function HeroControlPlane() {
  return (
    <svg
      className="mx-auto h-auto w-full max-w-[17.5rem] shrink-0 text-[var(--accent)] opacity-[0.9]"
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="8" y="8" width="120" height="56" rx="12" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.25" />
      <rect
        x="192"
        y="20"
        width="120"
        height="44"
        rx="10"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <rect x="32" y="120" width="96" height="48" rx="10" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.15" />
      <rect x="188" y="108" width="124" height="64" rx="12" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.35" />
      <path
        d="M128 36H168C176 36 182 42 182 50V96"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M182 50H248C256 50 262 56 262 64V108"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M80 120V88C80 72 92 60 108 60H168"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M250 172V200C250 214 238 226 222 226H108C92 226 80 214 80 198V168"
        stroke="currentColor"
        strokeOpacity="0.32"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <circle cx="182" cy="96" r="4" fill="currentColor" fillOpacity="0.55" />
      <circle cx="128" cy="36" r="3.5" fill="currentColor" fillOpacity="0.45" />
      <circle cx="250" cy="140" r="4" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-x-clip border-b border-[var(--border-medium)] pb-px"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(65vh,480px)] opacity-30 blur-3xl sm:h-[min(70vh,520px)]"
        style={{
          background:
            "radial-gradient(ellipse 75% 80% at 22% 12%, color-mix(in oklab, var(--accent) 32%, transparent), transparent 72%), radial-gradient(ellipse 70% 75% at 88% 8%, color-mix(in oklab, var(--accent-2) 22%, transparent), transparent 68%)",
        }}
      />
      <div className="page-container relative max-w-6xl pb-14 pt-12 sm:pb-28 sm:pt-20 md:pt-24">
        <div className="hero-reveal-stagger flex flex-col gap-10 sm:gap-12">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,19.5rem)] lg:items-start lg:gap-14">
            <div className="flex min-w-0 flex-col gap-8 sm:gap-12">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className={pill}>Founding engineer</span>
                <span className={pill}>AI platforms</span>
                <span className={pill}>{contact.location}</span>
              </div>
              <div className="max-w-3xl min-w-0 space-y-4 sm:space-y-6">
                <p className="font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.22em] text-[var(--accent)] sm:text-[0.7rem] sm:tracking-[0.24em] lg:text-[0.6875rem] lg:tracking-[0.22em]">
                  {tagline}
                </p>
                <h1 className="pb-1 font-[family-name:var(--font-syne)] font-semibold leading-[1.18] tracking-[-0.02em] sm:leading-[1.22]">
                  <span className="block text-[clamp(1.875rem,5.5vw+0.5rem,3.5rem)]">{displayName}</span>
                  <span className="mt-1.5 block max-w-[40rem] text-[clamp(1rem,2vw+0.6rem,1.55rem)] font-medium leading-[1.38] text-[var(--foreground-subtle)] sm:mt-2 sm:leading-[1.42] md:text-xl">
                    {headline}
                  </span>
                </h1>
                <p className="text-editorial max-w-prose text-[var(--foreground-muted)]">{summary}</p>
                <p className="max-w-prose text-sm leading-relaxed text-[var(--foreground-subtle)] sm:text-[0.9375rem]">
                  {careerIntent}
                </p>
              </div>
              <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
                <a className={btnPrimary} href={`mailto:${contact.email}`} aria-label={`Email ${contact.email}`}>
                  <span className="sm:hidden">Email</span>
                  <span className="hidden sm:inline">Email {contact.email}</span>
                </a>
                <a
                  className={btnGhost}
                  href={contact.linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in new tab)"
                >
                  {contact.linkedinLabel}
                </a>
                <a
                  className={btnGhost}
                  href={contact.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub (${GITHUB_SITE_OWNER}) (opens in new tab)`}
                >
                  GitHub
                </a>
                <a
                  className={btnMuted}
                  href={RESUME_SOURCE_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume LaTeX source on GitHub (opens in new tab)"
                >
                  <span className="sm:hidden">Resume (LaTeX)</span>
                  <span className="hidden sm:inline">Resume — LaTeX source</span>
                </a>
              </div>
            </div>

            <aside className="flex min-w-0 flex-col gap-6 rounded-3xl border border-[var(--border-medium)] bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] p-5 shadow-[var(--shadow-elevated)] backdrop-blur-sm sm:p-6 lg:sticky lg:top-24">
              <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[11px]">
                At a glance
              </p>
              <HeroControlPlane />
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Availability</dt>
                  <dd className="mt-1.5 font-medium text-[var(--foreground)]">{heroAtAGlance.availability}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Location</dt>
                  <dd className="mt-1.5 font-medium text-[var(--foreground)]">{heroAtAGlance.timezone}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Core stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {heroAtAGlance.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--border-medium)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--foreground-muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="grid min-w-0 gap-4 rounded-2xl border border-[var(--border-medium)] bg-[var(--surface-2)] p-4 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_6%,transparent)] sm:grid-cols-3 sm:gap-4 sm:p-6">
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-[11px] sm:tracking-[0.2em]">
                Phone
              </p>
              <a
                className="focus-ring transition-surface mt-2 block min-h-11 touch-manipulation text-base font-semibold leading-snug tracking-normal sm:min-h-0 sm:text-lg"
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
                className="focus-ring transition-surface mt-2 block min-h-11 touch-manipulation break-words text-base font-semibold leading-snug tracking-normal sm:min-h-0 sm:text-lg"
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
                className="focus-ring transition-surface mt-2 inline-flex min-h-11 touch-manipulation items-center text-base font-semibold leading-snug tracking-normal sm:min-h-0 sm:text-lg"
                href={contact.githubHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{GITHUB_SITE_OWNER}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
