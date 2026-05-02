function runTests(fn, rawTests) {
    const lines = rawTests.trim().split('\n').filter(l => /should return/.test(l));

    lines.forEach(line => {
        const callMatch = line.match(/\w+\((.+)\)\s+should return/);
        const expectedMatch = line.match(/should return (.+)/);
        if (!callMatch || !expectedMatch) return;

        const argsStr = callMatch[1];
        const expectedStr = expectedMatch[1].replace(/\s*\*\/$/, '').replace(/\.\s*$/, '').trim();

        let args, expected;
        try {
            args = eval(`[${argsStr}]`);
            expected = eval(`(${expectedStr})`);
        } catch (e) {
            console.log(`PARSE ERROR on: ${line}`);
            return;
        }

        const result = fn(...args);
        const label = argsStr.length > 40 ? argsStr.slice(0, 40) + '...' : argsStr;

        if (JSON.stringify(result) === JSON.stringify(expected)) {
            console.log(`PASS: ${fn.name}(${label})`);
        } else {
            console.log(`FAIL: ${fn.name}(${label})`);
            console.log(`  expected: ${JSON.stringify(expected)}`);
            console.log(`  got:      ${JSON.stringify(result)}`);
        }
    });
}

module.exports = runTests;
