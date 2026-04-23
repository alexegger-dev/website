import { careerIntent, contact, displayName, legalName } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-medium)] bg-[var(--footer-bg)] py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-12">
      <div className="page-container flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
        <div className="min-w-0 max-w-xl">
          <p className="font-[family-name:var(--font-syne)] text-xl font-semibold">{displayName}</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            Legal name: {legalName} · {contact.location}
          </p>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--foreground-muted)]">{careerIntent}</p>
        </div>
        <div className="flex min-w-0 shrink-0 flex-col gap-1 text-sm sm:gap-3 sm:pt-1 md:items-end md:text-right">
          <a
            className="focus-ring transition-surface inline-flex min-h-11 touch-manipulation items-center break-words py-1 text-[var(--foreground)] hover:text-[var(--accent)] sm:min-h-0 sm:py-0 md:justify-end"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            className="focus-ring transition-surface inline-flex min-h-11 touch-manipulation items-center py-1 text-[var(--foreground)] hover:text-[var(--accent)] sm:min-h-0 sm:py-0 md:justify-end"
            href={contact.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.linkedinLabel}
          </a>
          <a
            className="focus-ring transition-surface inline-flex min-h-11 touch-manipulation items-center break-words py-1 text-[var(--foreground)] hover:text-[var(--accent)] sm:min-h-0 sm:py-0 md:justify-end"
            href={contact.githubHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.githubLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
