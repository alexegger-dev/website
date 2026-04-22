import { contact, displayName } from "@/lib/site-content";

const links = [
  { href: "#narrative", label: "Narrative" },
  { href: "#proof", label: "Proof" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#repos", label: "Repos" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-[var(--header-bg)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--background)_65%,transparent)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5 sm:gap-4 sm:px-6 sm:py-4">
        <a
          href="#top"
          className="focus-ring transition-surface min-w-0 shrink truncate rounded-md font-[family-name:var(--font-syne)] text-sm font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)]"
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
              className="focus-ring transition-surface whitespace-nowrap rounded-full px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] hover:text-[var(--foreground)] sm:px-3 sm:tracking-[0.16em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <details className="relative md:hidden">
            <summary className="focus-ring cursor-pointer list-none rounded-full border border-[color-mix(in_oklab,var(--foreground)_14%,transparent)] bg-[var(--surface)] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)] [&::-webkit-details-marker]:hidden [&::marker]:content-none">
              Sections
            </summary>
            <div className="absolute right-0 z-50 mt-2 min-w-[12rem] rounded-xl border border-[color-mix(in_oklab,var(--foreground)_12%,transparent)] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="focus-ring transition-surface block rounded-lg px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
          <a
            href={`mailto:${contact.email}`}
            className="focus-ring transition-surface inline-flex items-center rounded-full border border-[color-mix(in_oklab,var(--foreground)_14%,transparent)] bg-[var(--surface)] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--foreground)] hover:border-[color-mix(in_oklab,var(--accent)_55%,transparent)] hover:text-[var(--accent)] sm:px-4"
          >
            Hire
          </a>
        </div>
      </div>
    </header>
  );
}
