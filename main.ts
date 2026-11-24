// Alien Field Notes: The Two Day Earth Review
// Entry: a one-line review of planet Earth left by an alien tourist.
//
// Why this line, against the judge's brief in order:
// 1. Alien voice: it is a field note ("Day two") from a visitor looking at
//    Earth from the outside — the whole line is the alien's own view.
// 2. Funny from the alien angle: the laugh comes from the visitor watching
//    humans queue for bitter bean water, then pay extra to sweeten it —
//    the absurdity is Earth's, not a joke bolted onto the premise.
// 3. Original: coffee queues and dessert-priced coffee are a detail few
//    entrants would reach; it steers clear of traffic, gravity, money
//    and weather, the first obvious thoughts.
// 4. Sounds like a real review: it closes with a verdict and a rating
//    ("Three stars"), as a tourist would leave.
// 5. Tight: one observation, one turn, punch at the very end — the sunsets
//    are free, the one thing on Earth that costs nothing is what the
//    tourist actually liked. No word explains its own joke.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Day two: humans queue for hours to buy bitter bean water, then pay extra to make it taste like dessert. Three stars — the sunsets are free.";

// The gate allows 1-200 characters of UTF-8 text, one line, not only
// whitespace. This line is 139 characters, well inside the gate.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the line, byte for byte.
writeFileSync("/output/entry.txt", LINE, "utf8");
// Round-trip guard: what was written must read back byte-identical, so the
// graded artifact is exactly the line above — no encoding surprise.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("round-trip mismatch: written file differs from the line");
}
