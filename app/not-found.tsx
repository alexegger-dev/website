import type { Metadata } from "next";
import Link from "next/link";
import { displayName } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-5 py-20 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">404</p>
      <h1 className="mt-4 max-w-lg text-center font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
        This page is not here
      </h1>
      <p className="mt-4 max-w-md text-center text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_75%,transparent)]">
        The URL may be mistyped, or the site was deployed under a different base path. Return to the profile.
      </p>
      <Link
        href="/"
        className="focus-ring transition-surface mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[#04110d] hover:brightness-110"
      >
        {displayName} — home
      </Link>
    </div>
  );
}
