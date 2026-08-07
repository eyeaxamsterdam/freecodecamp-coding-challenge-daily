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

const MONTH_ABBR = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// e.g. month 7 -> "07-Jul" — zero-padded so folders sort in calendar order,
// abbreviation so they're still readable at a glance.
function monthFolderName(month) {
  return `${pad(month)}-${MONTH_ABBR[month - 1]}`;
}

function parseDateArg(arg) {
  const today = new Date();
  const year = today.getFullYear();

  if (!arg) {
    return { year, month: today.getMonth() + 1, day: today.getDate() };
  }

  const shortMatch = arg.match(/^(\d{1,2})-(\d{1,2})$/);
  if (!shortMatch) {
    console.error(`\n❌  Could not parse "${arg}". Use "MM-DD".\n`);
    process.exit(1);
  }

  const [, month, day] = shortMatch.map(Number);
  const date = new Date(year, month - 1, day);
  const isValid = date.getMonth() === month - 1 && date.getDate() === day;

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

module.exports = { parseArgs, parseDateArg, pad, monthFolderName, EXTENSIONS };
