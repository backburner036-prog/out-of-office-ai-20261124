// The Funniest AI Out-of-Office Reply — make.fun entry
// Line (91 bytes, 89 chars): machine voice on vacation — even the
// auto-reply is off. Punch at the end: hold indefinitely.
// Criteria order: joke first, then machine voice, fit, freshness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am on vacation. My out-of-office reply is also on vacation. Please hold — indefinitely.";

// Gate: entry must be 1–160 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || !LINE.trim()) {
  throw new Error(`line length ${LINE.length} fails the 1–160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
