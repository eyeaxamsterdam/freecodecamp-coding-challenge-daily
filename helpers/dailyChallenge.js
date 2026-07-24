const START_DATE = Date.UTC(2025, 7, 11); // first daily challenge: Aug 11, 2025
const TOTAL_CHALLENGES = 365;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

const BLOCK_NAMES = {
  javascript: "daily-coding-challenges-javascript",
  python: "daily-coding-challenges-python",
};

const blockUrl = (language) =>
  `https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/curriculum/structure/blocks/${BLOCK_NAMES[language]}.json`;
const challengeUrl = (language, id) =>
  `https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/curriculum/challenges/english/blocks/${BLOCK_NAMES[language]}/${id}.md`;

function stripInlineCode(text) {
  return text.replace(/`([^`]*)`/g, "$1");
}

function extractSection(md, marker) {
  const markers = [
    "# --description--",
    "# --hints--",
    "# --seed--",
    "## --seed-contents--",
    "# --solutions--",
  ];
  const start = md.indexOf(marker);
  if (start === -1) return "";
  const afterStart = start + marker.length;
  let end = md.length;
  for (const m of markers) {
    if (m === marker) continue;
    const idx = md.indexOf(m, afterStart);
    if (idx !== -1 && idx < end) end = idx;
  }
  return md.slice(afterStart, end).trim();
}

function formatDescription(raw) {
  return raw
    .split("\n")
    .map((line) => stripInlineCode(line.replace(/^\s*-\s+/, "")))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractSeedCode(md) {
  const section = extractSection(md, "## --seed-contents--");
  const match = section.match(/```(?:js|py)?\n([\s\S]*?)```/);
  return match ? match[1].trim() : "";
}

function extractTitle(md, fallback) {
  const match = md.match(/title:\s*"Challenge \d+:\s*(.+?)"/);
  return match ? match[1] : fallback;
}

// JavaScript hints are fenced ```js blocks holding real assert.* statements.
function extractJsAssertBlocks(raw) {
  return [...raw.matchAll(/```(?:js)?\n([\s\S]*?)```/g)].map((m) => m[1].trim());
}

// Python hints are fenced ```js blocks wrapping a `runPython(`...`)` call —
// the freeCodeCamp platform's in-browser Python runner. The actual Python
// source is the template-literal contents passed to runPython.
function extractPythonAssertBlocks(raw) {
  const codeBlocks = [...raw.matchAll(/```(?:js)?\n([\s\S]*?)```/g)].map((m) => m[1]);
  return codeBlocks
    .map((block) => {
      const match = block.match(/runPython\(`([\s\S]*?)`\)/);
      return match ? match[1].trim() : null;
    })
    .filter(Boolean);
}

function emptyJsFunctionBody(seedCode) {
  const match = seedCode.match(/^(function\s+\w+\s*\([^)]*\)\s*\{)/);
  return match ? `${match[1]}\n\n}` : seedCode;
}

function emptyPythonFunctionBody(seedCode) {
  const match = seedCode.match(/^(def\s+\w+\s*\([^)]*\)\s*:)/);
  return match ? `${match[1]}\n    pass` : seedCode;
}

// The generated file's tail (everything from here down) is fully derived
// from freeCodeCamp's data — syncTests.js locates this marker to know where
// a user's own code (above) ends and the regeneratable part (below) begins.
const JS_TAIL_MARKER = "const runTests = require(";
const PY_TAIL_MARKER = "import os\nimport sys";

// Each assert block becomes one array element — a multi-statement block's
// own internal lines stay indented for readability, but the array's commas
// are the only "separator" needed, so no marker text shows up in the file.
function indentContinuationLines(block) {
  return block
    .split("\n")
    .map((l, i) => (i === 0 ? l : `    ${l}`))
    .join("\n");
}

function buildJsTestTail(fnName, assertBlocks) {
  const items = assertBlocks
    .map((block) => `    \`${indentContinuationLines(block)}\`,`)
    .join("\n");

  return `const runTests = require('../../helpers/runTests');\nrunTests(${fnName}, [\n${items}\n]);\n`;
}

function buildPythonTestTail(fnName, assertBlocks) {
  // Unlike JS, Python's exec() is whitespace-sensitive, so continuation
  // lines must stay flush-left inside the string — no readability indent.
  const items = assertBlocks.map((block) => `    """${block}""",`).join("\n");

  return `import os\nimport sys\nsys.path.append(os.path.join(os.path.dirname(__file__), "..", ".."))\nfrom helpers.run_tests import run_tests\n\nrun_tests(${fnName}, [\n${items}\n])\n`;
}

function buildJsFileContent({ title, description, seedCode, assertBlocks }) {
  const fnMatch = seedCode.match(/function\s+(\w+)\s*\(/);
  const fnName = fnMatch ? fnMatch[1] : "solution";
  const emptySeedCode = emptyJsFunctionBody(seedCode);

  return `/*\n${title}\n${description}\n*/\n\n${emptySeedCode}\n\n${buildJsTestTail(fnName, assertBlocks)}`;
}

function buildPythonFileContent({ title, description, seedCode, assertBlocks }) {
  const fnMatch = seedCode.match(/def\s+(\w+)\s*\(/);
  const fnName = fnMatch ? fnMatch[1] : "solution";
  const emptySeedCode = emptyPythonFunctionBody(seedCode);

  return `"""\n${title}\n${description}\n"""\n\n${emptySeedCode}\n\n${buildPythonTestTail(fnName, assertBlocks)}`;
}

// Resolves year/month/day to a challenge number and fetches its markdown.
// Returns null if the date is outside the 365-day series or the fetch fails.
async function fetchChallengeMarkdown(year, month, day, language) {
  const target = Date.UTC(year, month - 1, day);
  const challengeNumber = Math.round((target - START_DATE) / MS_PER_DAY) + 1;

  if (challengeNumber < 1 || challengeNumber > TOTAL_CHALLENGES) {
    return null;
  }

  const blockRes = await fetch(blockUrl(language));
  if (!blockRes.ok) return null;
  const block = await blockRes.json();
  const entry = block.challengeOrder[challengeNumber - 1];
  if (!entry) return null;

  const mdRes = await fetch(challengeUrl(language, entry.id));
  if (!mdRes.ok) return null;
  const md = await mdRes.text();

  return { md, entry };
}

// year/month/day are the same fields createDayFiles.js already parses from
// the CLI arg or today's date. language is "javascript" or "python".
async function fetchDailyChallenge(year, month, day, language = "javascript") {
  const result = await fetchChallengeMarkdown(year, month, day, language);
  if (!result) return null;
  const { md, entry } = result;

  const fallbackTitle = entry.title.replace(/^Challenge \d+:\s*/, "");
  const title = extractTitle(md, fallbackTitle);
  const description = formatDescription(extractSection(md, "# --description--"));
  const seedCode = extractSeedCode(md);
  const hintsRaw = extractSection(md, "# --hints--");

  if (!seedCode) return null;

  if (language === "python") {
    const assertBlocks = extractPythonAssertBlocks(hintsRaw);
    if (assertBlocks.length === 0) return null;
    return buildPythonFileContent({ title, description, seedCode, assertBlocks });
  }

  const assertBlocks = extractJsAssertBlocks(hintsRaw);
  if (assertBlocks.length === 0) return null;
  return buildJsFileContent({ title, description, seedCode, assertBlocks });
}

// Fetches just the current assert blocks for a date/language, for
// syncTests.js to refresh an existing file's tests without recreating it.
async function fetchAssertBlocks(year, month, day, language = "javascript") {
  const result = await fetchChallengeMarkdown(year, month, day, language);
  if (!result) return null;
  const { md } = result;

  const hintsRaw = extractSection(md, "# --hints--");
  const assertBlocks =
    language === "python" ? extractPythonAssertBlocks(hintsRaw) : extractJsAssertBlocks(hintsRaw);

  return assertBlocks.length > 0 ? assertBlocks : null;
}

module.exports = {
  fetchDailyChallenge,
  fetchAssertBlocks,
  buildJsTestTail,
  buildPythonTestTail,
  JS_TAIL_MARKER,
  PY_TAIL_MARKER,
};
