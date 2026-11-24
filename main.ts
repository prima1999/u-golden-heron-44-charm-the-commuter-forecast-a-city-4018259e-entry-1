// Forecast for Drizzlemere, a city that does not exist, written to charm a bored commuter.
// The program writes one line to /output/entry.txt for the make.fun judge.
import { writeFileSync, mkdirSync } from "node:fs";

const line = "In Drizzlemere today: grey skies, a 60% chance of rain, and a 100% chance the bus shelter leaks exactly where you stand.";

if (line.length > 140) {
  throw new Error("Forecast must be at most 140 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
