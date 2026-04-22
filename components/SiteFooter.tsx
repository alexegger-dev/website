import { contact, displayName, legalName } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color-mix(in_oklab,var(--foreground)_10%,transparent)] bg-[color-mix(in_oklab,var(--background)_88%,#000_12%)] py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="font-[family-name:var(--font-syne)] text-xl font-semibold">{displayName}</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            Legal name {legalName} · {contact.location}
          </p>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-[color-mix(in_oklab,var(--muted)_92%,transparent)]">
            Built with Next.js (static export) and Tailwind CSS v4—CI/CD via GitHub Actions to Pages.
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
            rel="noreferrer"
          >
            {contact.linkedinLabel}
          </a>
          <a
            className="focus-ring transition-surface break-all text-[var(--foreground)] hover:text-[var(--accent)]"
            href={contact.githubHref}
            target="_blank"
            rel="noreferrer"
          >
            {contact.githubLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
