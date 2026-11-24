// Alien Field Notes: The Two Day Earth Review
// Writes one line (<= 200 chars): an alien tourist's review of planet Earth.
// Node 22 stdlib only, deterministic, offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "The brochure promised a blue paradise, but nobody warned me the locals worship a hot brown drink every morning \u2014 two stars, I tried one cup and now I queue with them.";

const chars = [...REVIEW];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`review must be 1-200 characters, got ${chars.length}`);
}
if (/[\n\r]/.test(REVIEW) || REVIEW.trim().length === 0) {
  throw new Error("review must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
