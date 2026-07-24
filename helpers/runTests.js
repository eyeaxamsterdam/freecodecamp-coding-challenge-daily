const assert = require("./chaiAssert");

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
    const expectedOptions = arrays.length > 0
        ? arrays.map(s => eval(s))
        : expectedStr.split(' or ').map(s => eval(s.trim()));

    const result = fn(...args);
    const resultStr = JSON.stringify(result);

    if (!expectedOptions.some(e => resultStr === JSON.stringify(e))) {
        throw new Error(`expected ${JSON.stringify(expectedOptions)}, got ${resultStr}`);
    }
}

const TEST_SEPARATOR = '// ---';

function report(passCount, failCount) {
    console.log(`\n${passCount} passed, ${failCount} failed`);
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

    blocks.forEach(block => {
        const label = block.split('\n')[0] + (block.includes('\n') ? ' ...' : '');
        try {
            runAssertBlock(fn, block);
            console.log(`PASS: ${label}`);
            passCount++;
        } catch (e) {
            console.log(`FAIL: ${label}`);
            console.log(`  ${e.message}`);
            failCount++;
        }
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

    lines.forEach(line => {
        try {
            runLegacyLine(fn, line);
            console.log(`PASS: ${line}`);
            passCount++;
        } catch (e) {
            console.log(`FAIL: ${line}`);
            console.log(`  ${e.message}`);
            failCount++;
        }
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
