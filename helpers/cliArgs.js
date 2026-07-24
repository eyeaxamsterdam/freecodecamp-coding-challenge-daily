const LANGUAGE_ALIASES = {
  js: "javascript",
  javascript: "javascript",
  py: "python",
  python: "python",
  both: "both",
  all: "both",
};

const LANGUAGE_ORDER = ["javascript", "python"];

const EXTENSIONS = { javascript: "js", python: "py" };

function pad(n) {
  return String(n).padStart(2, "0");
}

function parseDateArg(arg) {
  const today = new Date();

  if (!arg) {
    return { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() };
  }

  const fullMatch = arg.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  const shortMatch = arg.match(/^(\d{1,2})-(\d{1,2})$/);

  let year, month, day;
  if (fullMatch) {
    [, year, month, day] = fullMatch.map(Number);
  } else if (shortMatch) {
    year = today.getFullYear();
    [, month, day] = shortMatch.map(Number);
  } else {
    console.error(`\n❌  Could not parse "${arg}". Use "YYYY-MM-DD" or "MM-DD".\n`);
    process.exit(1);
  }

  const date = new Date(year, month - 1, day);
  const isValid =
    date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;

  if (!isValid) {
    console.error(`\n❌  "${arg}" is not a valid date.\n`);
    process.exit(1);
  }

  return { year, month, day };
}

// Parses a mix of one optional date token and zero or more language tokens,
// in any order (e.g. "py js 07-25", "07-25 both", "python").
function parseArgs(argv) {
  let dateArg = null;
  const requestedLanguages = new Set();

  for (const arg of argv) {
    const alias = LANGUAGE_ALIASES[arg.toLowerCase()];
    if (alias === "both") {
      LANGUAGE_ORDER.forEach((l) => requestedLanguages.add(l));
    } else if (alias) {
      requestedLanguages.add(alias);
    } else {
      dateArg = arg;
    }
  }

  const { year, month, day } = parseDateArg(dateArg);
  const languages =
    requestedLanguages.size > 0
      ? LANGUAGE_ORDER.filter((l) => requestedLanguages.has(l))
      : ["javascript"];

  return { year, month, day, languages };
}

module.exports = { parseArgs, parseDateArg, pad, EXTENSIONS };
