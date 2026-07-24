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

// Separates test entries so multi-statement hints (shared local vars across
// several assert calls) stay grouped instead of being split line-by-line.
const JS_TEST_SEPARATOR = "// ---";
const PY_TEST_SEPARATOR = "# ---";

function buildJsFileContent({ title, description, seedCode, assertBlocks }) {
  const fnMatch = seedCode.match(/function\s+(\w+)\s*\(/);
  const fnName = fnMatch ? fnMatch[1] : "solution";
  const emptySeedCode = emptyJsFunctionBody(seedCode);
  const testBlock = assertBlocks
    .map((block) => block.split("\n").map((l) => `    ${l}`).join("\n"))
    .join(`\n    ${JS_TEST_SEPARATOR}\n`);

  return `/*\n${title}\n${description}\n*/\n\n${emptySeedCode}\n\nconst runTests = require('../../helpers/runTests');\nrunTests(${fnName}, \`\n${testBlock}\n\`);\n`;
}

function buildPythonFileContent({ title, description, seedCode, assertBlocks }) {
  const fnMatch = seedCode.match(/def\s+(\w+)\s*\(/);
  const fnName = fnMatch ? fnMatch[1] : "solution";
  const emptySeedCode = emptyPythonFunctionBody(seedCode);
  const testBlock = assertBlocks.join(`\n${PY_TEST_SEPARATOR}\n`);

  return `"""\n${title}\n${description}\n"""\n\n${emptySeedCode}\n\nimport os\nimport sys\nsys.path.append(os.path.join(os.path.dirname(__file__), "..", ".."))\nfrom helpers.run_tests import run_tests\n\nrun_tests(${fnName}, """\n${testBlock}\n""")\n`;
}

// year/month/day are the same fields createDayFiles.js already parses from
// the CLI arg or today's date. language is "javascript" or "python".
async function fetchDailyChallenge(year, month, day, language = "javascript") {
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

module.exports = fetchDailyChallenge;
