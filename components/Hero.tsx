import { GITHUB_SITE_OWNER, RESUME_SOURCE_HREF } from "@/lib/site-config";
import {
  careerIntent,
  contact,
  displayName,
  headline,
  heroAtAGlance,
  heroProofBullets,
  summary,
  tagline,
} from "@/lib/site-content";

const pill =
  "inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--border-medium)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] sm:min-h-9 sm:tracking-[0.16em]";

const btnPrimary =
  "btn-primary-cta focus-ring transition-surface inline-flex min-h-12 min-w-0 w-full touch-manipulation items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--foreground-on-accent)] hover:brightness-110 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_14px_44px_color-mix(in_oklab,var(--accent)_32%,transparent)] sm:min-h-11 sm:w-auto sm:px-6";

const btnGhost =
  "focus-ring transition-surface inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] motion-safe:hover:-translate-y-0.5 sm:min-h-11 sm:w-auto sm:px-6";

const btnMuted =
  "focus-ring transition-surface inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-dashed border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--muted)] hover:border-[var(--border-medium)] hover:text-[var(--foreground)] sm:min-h-11 sm:w-auto sm:px-6";

/** Compact diagram — gateway, data, runtime. */
function HeroArchitecturePreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border-medium)] bg-[color-mix(in_oklab,var(--surface-2)_65%,var(--surface))] p-4 shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_5%,transparent)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, color-mix(in oklab, var(--accent) 14%, transparent) 0%, transparent 42%), linear-gradient(315deg, color-mix(in oklab, var(--accent-2) 10%, transparent) 0%, transparent 50%)",
        }}
      />
      <svg
        className="relative z-[1] mx-auto h-auto w-full max-w-[16.5rem] text-[var(--accent)]"
        viewBox="0 0 280 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="14"
          y="22"
          width="92"
          height="54"
          rx="11"
          fill="color-mix(in oklab, currentColor 14%, transparent)"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.85"
        />
        <rect
          x="174"
          y="18"
          width="94"
          height="44"
          rx="10"
          fill="color-mix(in oklab, var(--accent-2) 12%, transparent)"
          stroke="var(--accent-2)"
          strokeWidth="2"
          strokeOpacity="0.75"
        />
        <rect
          x="38"
          y="104"
          width="204"
          height="46"
          rx="12"
          fill="color-mix(in oklab, currentColor 10%, transparent)"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.7"
        />
        <path
          d="M106 49h52c8 0 14 6 14 14v22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.65"
        />
        <path
          d="M221 62v26c0 8-6 14-14 14h-55"
          stroke="var(--accent-2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M140 104V88c0-10 8-18 18-18h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
        <circle cx="140" cy="76" r="5" fill="currentColor" fillOpacity="0.75" />
        <circle cx="106" cy="49" r="4" fill="currentColor" fillOpacity="0.55" />
        <text
          x="24"
          y="42"
          fill="currentColor"
          fillOpacity="0.9"
          style={{ font: "600 11px var(--font-geist-sans), system-ui, sans-serif" }}
        >
          API edge
        </text>
        <text
          x="182"
          y="36"
          style={{
            fill: "var(--accent-2)",
            font: "600 10px var(--font-geist-sans), system-ui, sans-serif",
          }}
        >
          Data
        </text>
        <text
          x="48"
          y="132"
          fill="currentColor"
          fillOpacity="0.88"
          style={{ font: "600 11px var(--font-geist-sans), system-ui, sans-serif" }}
        >
          Agents
        </text>
      </svg>
      <p className="relative z-[1] mt-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] sm:tracking-[0.16em]">
        Product · RAG · reliability
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-24 overflow-x-clip border-b border-[var(--border-medium)] pb-px sm:scroll-mt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(55vh,420px)] opacity-25 blur-3xl sm:h-[min(60vh,480px)]"
        style={{
          background:
            "radial-gradient(ellipse 75% 80% at 22% 12%, color-mix(in oklab, var(--accent) 28%, transparent), transparent 72%), radial-gradient(ellipse 70% 75% at 88% 8%, color-mix(in oklab, var(--accent-2) 18%, transparent), transparent 68%)",
        }}
      />
      <div className="page-container relative pb-12 pt-10 sm:pb-20 sm:pt-16 md:pt-20">
        <div className="hero-reveal-stagger flex flex-col gap-8 sm:gap-10">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20.5rem)] lg:items-start lg:gap-12">
            <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
              <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
                <span className={pill}>Mid-level AI / full-stack</span>
                <span className={pill}>LangGraph / LangChain</span>
                <span className={pill}>RAG & agents</span>
                <span className={pill}>{contact.location}</span>
              </div>
              <div className="max-w-3xl min-w-0 space-y-4 sm:space-y-5">
                <p className="max-w-prose text-pretty font-mono text-[0.75rem] uppercase leading-relaxed tracking-[0.16em] text-[var(--accent)] sm:text-[0.8125rem] sm:tracking-[0.18em]">
                  {tagline}
                </p>
                <h1 className="pb-1 font-[family-name:var(--font-syne)] font-semibold leading-[1.18] tracking-[-0.02em] sm:leading-[1.22]">
                  <span className="block text-balance text-[clamp(1.75rem,4.8vw+0.45rem,3.125rem)]">{displayName}</span>
                  <span className="mt-1.5 block max-w-[42rem] text-pretty text-[clamp(0.98rem,1.6vw+0.5rem,1.4rem)] font-medium leading-[1.38] text-[var(--foreground-subtle)] sm:mt-2 sm:leading-[1.42] md:text-xl">
                    {headline}
                  </span>
                </h1>
                <ul className="grid max-w-prose list-none gap-2.5 pl-0 sm:gap-3">
                  {heroProofBullets.map(line => (
                    <li
                      key={line}
                      className="flex gap-3 rounded-xl border border-[var(--border-hairline)] bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-3 py-2.5 text-sm leading-snug text-[var(--foreground-muted)] sm:px-4 sm:py-3 sm:text-[0.9375rem] sm:leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                      <span className="min-w-0 text-pretty">{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-editorial max-w-prose text-pretty text-[var(--foreground-muted)]">{summary}</p>
                <p className="max-w-prose text-pretty text-sm leading-relaxed text-[var(--foreground-subtle)] sm:text-[0.9375rem]">
                  {careerIntent}
                </p>
              </div>
              <div className="grid min-w-0 grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3">
                <a className={btnPrimary} href={`mailto:${contact.email}`} aria-label={`Email ${contact.email}`}>
                  Email
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
                  Resume (source)
                </a>
              </div>
            </div>

            <aside className="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-3xl border border-[var(--border-medium)] bg-[var(--surface)] shadow-[var(--shadow-elevated)] ring-1 ring-[color-mix(in_oklab,var(--accent)_12%,transparent)] backdrop-blur-md supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] lg:sticky lg:top-28">
              <div className="border-b border-[var(--border-hairline)] bg-[color-mix(in_oklab,var(--surface-2)_35%,var(--surface))] px-5 pb-4 pt-5 sm:px-6 sm:pb-5 sm:pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] sm:tracking-[0.2em]">
                  At a glance
                </p>
                <p className="mt-2.5 text-sm leading-snug text-[var(--foreground-muted)] sm:text-[0.9375rem] sm:leading-relaxed">
                  {heroAtAGlance.cardSummary}
                </p>
              </div>
              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                <HeroArchitecturePreview />
              </div>
              <dl className="space-y-4 border-t border-[var(--border-hairline)] bg-[color-mix(in_oklab,var(--surface)_92%,var(--surface-2))] px-5 py-5 sm:px-6">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">Availability</dt>
                  <dd className="mt-1.5 font-medium text-[var(--foreground)]">{heroAtAGlance.availability}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">Location &amp; time</dt>
                  <dd className="mt-1.5 font-medium text-[var(--foreground)]">{heroAtAGlance.timezone}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">Phone</dt>
                  <dd className="mt-1.5">
                    <a
                      className="focus-ring font-semibold text-[var(--foreground)] hover:text-[var(--accent)]"
                      href={`tel:${contact.phoneTel}`}
                    >
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">Core stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {heroAtAGlance.stack.map(s => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--border-medium)] bg-[var(--surface)] px-2.5 py-1 font-mono text-[11px] text-[var(--foreground-muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
