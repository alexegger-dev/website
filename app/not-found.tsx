import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page does not exist on this site.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="page-container relative z-10 flex min-h-dvh max-w-2xl flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] sm:text-xs sm:tracking-[0.26em]">
        404
      </p>
      <h1 className="mt-4 max-w-lg pb-1.5 text-center text-balance font-[family-name:var(--font-syne)] text-3xl font-semibold leading-[1.2] tracking-[-0.02em] sm:text-4xl sm:leading-[1.22]">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-pretty text-center text-base leading-relaxed text-[var(--foreground-muted)]">
        The link may be incorrect, or the page may have moved. If this site is served under a path prefix, use the home URL from your deployment.
      </p>
      <Link
        href="/"
        className="focus-ring transition-surface mt-10 inline-flex min-h-11 touch-manipulation items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--foreground-on-accent)] hover:brightness-110"
      >
        Back to home
      </Link>
    </div>
  );
}
