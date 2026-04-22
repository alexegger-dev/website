#!/usr/bin/env node
/**
 * Post-build integrity checks for a static export directory (`out/`, `docs/`, …).
 *
 * Usage: node ./scripts/verify-export-integrity.mjs out
 *        node ./scripts/verify-export-integrity.mjs docs
 *
 * Reads `displayName` from `lib/site-content.ts` so expectations stay in sync with source.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function readConstString(relPath, constName) {
  const src = readFileSync(join(root, relPath), "utf8");
  const re = new RegExp(`export const ${constName} = "([^"]*)" as const`);
  const m = src.match(re);
  if (!m) {
    throw new Error(`Could not parse export const ${constName} in ${relPath}`);
  }
  return m[1];
}

const displayName = readConstString("lib/site-content.ts", "displayName");

/** Section ids used for in-page navigation and layout contracts. */
const SECTION_IDS = [
  "top",
  "narrative",
  "proof",
  "cases",
  "experience",
  "stack",
  "education",
  "repos",
];

function verifyDir(dirName) {
  const base = join(root, dirName);
  const indexPath = join(base, "index.html");
  if (!existsSync(indexPath)) {
    console.error(`Missing ${dirName}/index.html`);
    process.exit(1);
  }
  if (!existsSync(join(base, "_next"))) {
    console.error(`Missing ${dirName}/_next/`);
    process.exit(1);
  }
  if (!existsSync(join(base, ".nojekyll"))) {
    console.error(`Missing ${dirName}/.nojekyll (GitHub Pages may ignore _next/)`);
    process.exit(1);
  }

  const html = readFileSync(indexPath, "utf8");
  if (!html.includes(displayName)) {
    console.error(`${dirName}/index.html does not include displayName "${displayName}"`);
    process.exit(1);
  }
  if (!html.includes("_next")) {
    console.error(`${dirName}/index.html does not reference _next assets`);
    process.exit(1);
  }

  for (const id of SECTION_IDS) {
    const needle = `id="${id}"`;
    if (!html.includes(needle)) {
      console.error(`${dirName}/index.html missing section ${needle}`);
      process.exit(1);
    }
  }

  console.log(`OK: ${dirName}/ (index + _next + .nojekyll + ${SECTION_IDS.length} section ids)`);
}

function main() {
  const dirs = process.argv.slice(2).filter(Boolean);
  if (!dirs.length) {
    console.error("Usage: node ./scripts/verify-export-integrity.mjs <dir> [<dir>...]");
    console.error("Example: node ./scripts/verify-export-integrity.mjs out");
    process.exit(1);
  }
  for (const d of dirs) {
    verifyDir(d);
  }
}

main();
