import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The weirdest job title: a real-sounding job (professional mourner)
// with one gloriously specific twist (abandoned shopping carts).
const TITLE = "Professional Mourner for Abandoned Shopping Carts";

// The gate accepts only UTF-8 text of 1 to 60 characters, not only
// whitespace, so validate the title before writing and fail loudly
// instead of ever shipping an invalid entry.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim().length === 0) {
  throw new Error(`Title fails the gate at ${TITLE.length} chars: ${TITLE}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
console.log(TITLE);
