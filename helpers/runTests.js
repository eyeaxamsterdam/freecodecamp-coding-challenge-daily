const assert = require("./chaiAssert");

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

function extractTopLevelArrays(str) {
    const results = [];
    let depth = 0, start = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[') {
            if (depth === 0) start = i;
            depth++;
        } else if (str[i] === ']') {
            depth--;
            if (depth === 0) results.push(str.slice(start, i + 1));
        }
    }
    return results;
}

// Runs a real assert block (as pulled straight from freeCodeCamp) with `fn`
// in scope under its own name, so the assertion semantics (deepEqual vs
// isTrue vs isAbove, etc.) match freeCodeCamp's own tests. A block may hold
// several statements sharing local variables, not just one assert call.
function runAssertBlock(fn, block) {
    const runner = new Function(fn.name, "assert", block);
    runner(fn, assert);
}

// Order-independent for object keys (unlike JSON.stringify comparison),
// order-dependent for arrays.
function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
    if (Array.isArray(a) !== Array.isArray(b)) return false;

    if (Array.isArray(a)) {
        return a.length === b.length && a.every((v, i) => deepEqual(v, b[i]));
    }

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    return (
        aKeys.length === bKeys.length &&
        aKeys.every((k) => Object.prototype.hasOwnProperty.call(b, k) && deepEqual(a[k], b[k]))
    );
}

function runLegacyLine(fn, line) {
    const callMatch = line.match(/\w+\((.+)\)\s+should return/);
    const expectedMatch = line.match(/should return (.+)/);
    if (!callMatch || !expectedMatch) {
        throw new Error(`could not parse: ${line}`);
    }

    const argsStr = callMatch[1];
    const expectedStr = expectedMatch[1].replace(/\s*\*\/$/, '').replace(/\.\s*$/, '').trim();

    const args = eval(`[${argsStr}]`);
    const arrays = extractTopLevelArrays(expectedStr);
    // Wrapped in parens: a bare object literal like `{"a": 1}` would
    // otherwise be parsed by eval as a block statement, not an expression.
    const expectedOptions = arrays.length > 0
        ? arrays.map(s => eval(`(${s})`))
        : expectedStr.split(' or ').map(s => eval(`(${s.trim()})`));

    const result = fn(...args);

    if (!expectedOptions.some((e) => deepEqual(result, e))) {
        throw new Error(`expected ${JSON.stringify(expectedOptions)}, got ${JSON.stringify(result)}`);
    }

    return { argsStr, result };
}

const TEST_SEPARATOR = '// ---';

function report(passCount, failCount) {
    console.log(`${passCount} passed, ${failCount} failed`);
    console.log();
    if (failCount > 0) {
        process.exitCode = 1;
    }
}

// New format: real assert code, one or more statements per test entry,
// entries separated by a `// ---` marker line so shared local variables
// within a multi-statement entry aren't split apart.
function runAssertBlocks(fn, rawTests) {
    const blocks = rawTests
        .split(TEST_SEPARATOR)
        .map(b => b.trim())
        .filter(Boolean);

    let passCount = 0;
    let failCount = 0;

    console.log();
    blocks.forEach(block => {
        const label = block.split('\n')[0] + (block.includes('\n') ? ' ...' : '');
        try {
            runAssertBlock(fn, block);
            console.log(`${GREEN}PASS:${RESET} ${label}`);
            passCount++;
        } catch (e) {
            console.log(`${RED}FAIL:${RESET} ${label}`);
            console.log(`  ${e.message}`);
            failCount++;
        }
        console.log();
    });

    report(passCount, failCount);
}

// Legacy format: freeCodeCamp hint prose pasted directly, one test per line,
// e.g. `fn(args) should return expected.`
function runLegacyLines(fn, rawTests) {
    const lines = rawTests
        .split('\n')
        .map(l => l.trim())
        .filter(l => /should return/.test(l));

    let passCount = 0;
    let failCount = 0;

    console.log();
    lines.forEach(line => {
        try {
            const { argsStr, result } = runLegacyLine(fn, line);
            const label = argsStr.length > 40 ? argsStr.slice(0, 40) + '...' : argsStr;
            console.log(`${GREEN}PASS:${RESET} ${fn.name}(${label})`);
            console.log(`  ${JSON.stringify(result)}`);
            passCount++;
        } catch (e) {
            console.log(`${RED}FAIL:${RESET} ${line}`);
            console.log(`  ${e.message}`);
            failCount++;
        }
        console.log();
    });

    report(passCount, failCount);
}

function runTests(fn, rawTests) {
    const trimmed = rawTests.trim();
    const isNewFormat = /^\s*assert\./m.test(trimmed) || trimmed.includes(TEST_SEPARATOR);

    if (isNewFormat) {
        runAssertBlocks(fn, trimmed);
    } else {
        runLegacyLines(fn, trimmed);
    }
}

module.exports = runTests;
