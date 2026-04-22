/**
 * Copy Next static export (out/) → docs/ for GitHub Pages when using
 * "Deploy from a branch" → main → /docs (repo root has no index.html).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const docsDir = path.join(root, "docs");

if (!fs.existsSync(path.join(outDir, "index.html"))) {
  console.error("out/index.html missing — run `next build` first (npm run build).");
  process.exit(1);
}

fs.rmSync(docsDir, { recursive: true, force: true });
fs.cpSync(outDir, docsDir, { recursive: true });
console.log("Synced out/ → docs/. Commit and push docs/ for Pages (branch main, folder /docs).");
