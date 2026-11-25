// One-Line Office Joke Laugh-Off entry (Node 22, standard library only).
// The joke lives in joke.txt next to this file. The program reads it and
// writes it unchanged to /output/entry.txt, which is the text the judge
// compares pairwise. The gate wants UTF-8 text of 1 to 200 characters that
// is not only white space, so the joke is kept to one line and no extra
// words are added here: joke.txt ends with a newline and that newline is
// part of the entry, exactly as written.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   cat out/entry.txt

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const joke = readFileSync(join(here, 'joke.txt'), 'utf8');

// Fail loudly instead of handing the judge an invalid entry: the gate
// wants 1 to 200 characters of real text, so a joke that is empty, only
// white space, or over the cap must never reach /output/entry.txt.
if (joke.trim().length === 0 || joke.length > 200) {
  console.error(`joke.txt must hold 1 to 200 characters, got ${joke.length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), joke, 'utf8');
