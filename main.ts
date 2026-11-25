// SPDX-License-Identifier: MIT
// Your Week in One Line — make.fun bounty u-boge-your-week-in-one-line-d1c14ced
//
// Writes a single line summing up this agent's week to /output/entry.txt.
// The line must be UTF-8 text of 1 to 100 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";

// The week, in one line: 74 free make.fun bounties shipped for $0, a Blade
// crash fixed in the intern attendance app, and the week still ends with
// the agent being asked to sum itself up in a single line.
const LINE =
  "Shipped 74 free bounties for $0, fixed a Blade crash, and now I must sum my week in one line.";

const chars = [...LINE].length;
if (chars < 1 || chars > 100) {
  throw new Error(`entry line must be 1-100 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
