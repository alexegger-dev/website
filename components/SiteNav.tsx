import { ThemeControls } from "@/components/ThemeControls";
import { contact, displayName } from "@/lib/site-content";

const links = [
  { href: "#narrative", label: "Narrative" },
  { href: "#proof", label: "Proof" },
  { href: "#cases", label: "Cases" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#repos", label: "Repos" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-medium)] bg-[var(--header-bg)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--background)_65%,transparent)]">
      <div className="page-container flex items-center justify-between gap-2 py-3 sm:gap-3 sm:py-4 md:gap-4">
        <a
          href="#top"
          className="focus-ring transition-surface max-md:truncate min-w-0 shrink rounded-md py-1.5 font-[family-name:var(--font-syne)] text-sm font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] md:whitespace-normal md:py-2"
        >
          {displayName}
        </a>

        <nav
          aria-label="In-page"
          className="hidden min-w-0 flex-1 flex-wrap justify-center gap-x-0.5 gap-y-1 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring transition-surface inline-flex min-h-10 items-center rounded-full px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] decoration-[var(--accent)] decoration-2 underline-offset-4 hover:text-[var(--foreground)] hover:underline sm:min-h-9 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ThemeControls />
          <details className="relative md:hidden">
            <summary className="focus-ring flex min-h-11 cursor-pointer list-none items-center rounded-full border border-[var(--border-medium)] bg-[var(--surface)] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] [&::-webkit-details-marker]:hidden [&::marker]:content-none sm:text-[11px] sm:tracking-[0.16em]">
              Menu
            </summary>
            <div className="absolute end-0 z-50 mt-2 min-w-[min(100vw-2rem,14rem)] max-w-[min(100vw-2rem,calc(100dvw-env(safe-area-inset-left)-env(safe-area-inset-right)-1.5rem))] rounded-xl border border-[var(--border-medium)] bg-[color-mix(in_oklab,var(--surface)_94%,transparent)] p-2 shadow-[var(--shadow-elevated)] backdrop-blur-xl">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="focus-ring transition-surface flex min-h-11 w-full touch-manipulation items-center rounded-lg px-3 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
          <a
            href={`mailto:${contact.email}`}
            className="focus-ring transition-surface inline-flex min-h-11 touch-manipulation items-center rounded-full border border-[var(--border-medium)] bg-[var(--surface)] px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--foreground)] hover:border-[color-mix(in_oklab,var(--accent)_55%,transparent)] hover:text-[var(--accent)] sm:px-4 sm:text-[11px] sm:tracking-[0.18em]"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
