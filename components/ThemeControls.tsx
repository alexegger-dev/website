"use client";

import { startTransition, useCallback, useEffect, useState } from "react";
import {
  applyThemeToDocument,
  readStoredTheme,
  resolveAppliedTheme,
  type ThemePreference,
  writeStoredTheme,
} from "@/lib/theme";

function getPreferenceFromDom(): ThemePreference {
  const raw = document.documentElement.getAttribute("data-theme-preference");
  if (raw === "light" || raw === "dark" || raw === "system") {
    return raw;
  }
  return "system";
}

export function ThemeControls() {
  const [preference, setPreference] = useState<ThemePreference>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      const stored = readStoredTheme();
      setPreference(stored ?? getPreferenceFromDom());
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyThemeToDocument(preference);
    writeStoredTheme(preference);
  }, [mounted, preference]);

  useEffect(() => {
    if (!mounted || preference !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => applyThemeToDocument("system");
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [preference, mounted]);

  const cycle = useCallback(() => {
    setPreference((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  }, []);

  const resolved = mounted ? resolveAppliedTheme(preference) : "dark";
  const label =
    preference === "system"
      ? `Color theme: System (${resolved})`
      : `Color theme: ${preference === "light" ? "Light" : "Dark"}`;

  return (
    <button
      type="button"
      onClick={cycle}
      className="focus-ring transition-surface flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-medium)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[color-mix(in_oklab,var(--accent)_45%,transparent)] hover:text-[var(--accent)]"
      aria-label={label}
      title={label}
    >
      {preference === "light" ? (
        <SunIcon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
      ) : preference === "dark" ? (
        <MoonIcon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
      ) : (
        <SystemIcon className="h-[1.2rem] w-[1.2rem]" aria-hidden />
      )}
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
}

function SystemIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 21h8M12 17v4" />
    </svg>
  );
}
