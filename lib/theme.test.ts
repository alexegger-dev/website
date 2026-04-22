import { describe, expect, it } from "vitest";
import { THEME_STORAGE_KEY, resolveAppliedTheme } from "./theme";

describe("theme", () => {
  it("exports a stable storage key", () => {
    expect(THEME_STORAGE_KEY).toMatch(/^[a-z-]+$/);
  });

  it("resolves light and dark preferences directly", () => {
    expect(resolveAppliedTheme("light")).toBe("light");
    expect(resolveAppliedTheme("dark")).toBe("dark");
  });

  it("resolves system to a concrete branch", () => {
    const resolved = resolveAppliedTheme("system");
    expect(resolved === "light" || resolved === "dark").toBe(true);
  });
});
