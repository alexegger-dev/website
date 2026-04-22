import { defineConfig } from "vitest/config";

/** Colocated `*.test.ts` files (e.g. under `lib/`). Ignores `docs/` / `out/` via workspace layout. */
export default defineConfig({
  test: {
    environment: "node",
    include: ["**/*.test.ts"],
    exclude: ["node_modules/**", "docs/**", "out/**", ".next/**"],
    passWithNoTests: false,
  },
});
