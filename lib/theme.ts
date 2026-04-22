export const THEME_STORAGE_KEY = "website-theme" as const;

export type ThemePreference = "light" | "dark" | "system";

export function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function readStoredTheme(): ThemePreference | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (raw === "light" || raw === "dark" || raw === "system") return raw;
  } catch {
    /* private mode */
  }
  return null;
}

export function writeStoredTheme(preference: ThemePreference) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    /* ignore */
  }
}

export function resolveAppliedTheme(preference: ThemePreference): "light" | "dark" {
  if (preference === "system") return getSystemTheme();
  return preference;
}

export function applyThemeToDocument(preference: ThemePreference) {
  const applied = resolveAppliedTheme(preference);
  document.documentElement.setAttribute("data-theme", applied);
  document.documentElement.setAttribute("data-theme-preference", preference);
}

/** Runs before paint; keep in sync with `applyThemeToDocument` / `readStoredTheme`. */
export const THEME_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)},r=document.documentElement,s=localStorage.getItem(k);if(s==="light"||s==="dark"){r.setAttribute("data-theme",s);r.setAttribute("data-theme-preference",s);return;}if(s==="system"){var a=window.matchMedia("(prefers-color-scheme:dark)").matches;r.setAttribute("data-theme",a?"dark":"light");r.setAttribute("data-theme-preference","system");return;}var d=window.matchMedia("(prefers-color-scheme:dark)").matches;r.setAttribute("data-theme",d?"dark":"light");r.setAttribute("data-theme-preference","system");}catch(e){document.documentElement.setAttribute("data-theme","dark");document.documentElement.setAttribute("data-theme-preference","system");}})();`;
