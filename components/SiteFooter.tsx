import { contact, displayName, legalName } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-medium)] bg-[var(--footer-bg)] py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-12">
      <div className="page-container flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-[family-name:var(--font-syne)] text-xl font-semibold">{displayName}</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            Legal name {legalName} · {contact.location}
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-3 text-sm">
          <a
            className="focus-ring transition-surface break-all text-[var(--foreground)] hover:text-[var(--accent)]"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            className="focus-ring transition-surface text-[var(--foreground)] hover:text-[var(--accent)]"
            href={contact.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.linkedinLabel}
          </a>
          <a
            className="focus-ring transition-surface break-all text-[var(--foreground)] hover:text-[var(--accent)]"
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
