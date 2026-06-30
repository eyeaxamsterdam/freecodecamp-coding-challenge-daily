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

function runTests(fn, rawTests) {
    const lines = rawTests.trim().split('\n').filter(l => /should return/.test(l));

    lines.forEach(line => {
        const callMatch = line.match(/\w+\((.+)\)\s+should return/);
        const expectedMatch = line.match(/should return (.+)/);
        if (!callMatch || !expectedMatch) return;

        const argsStr = callMatch[1];
        const expectedStr = expectedMatch[1].replace(/\s*\*\/$/, '').replace(/\.\s*$/, '').trim();

        let args, expectedOptions;
        try {
            args = eval(`[${argsStr}]`);
            const arrays = extractTopLevelArrays(expectedStr);
            expectedOptions = arrays.length > 0
                ? arrays.map(s => eval(s))
                : expectedStr.split(' or ').map(s => eval(s.trim()));
        } catch (e) {
            console.log(`PARSE ERROR on: ${line}`);
            return;
        }

        const result = fn(...args);
        const label = argsStr.length > 40 ? argsStr.slice(0, 40) + '...' : argsStr;
        const resultStr = JSON.stringify(result);

        if (expectedOptions.some(e => resultStr === JSON.stringify(e))) {
            console.log(`Response: ${JSON.stringify(result)}`);
            console.log(`    PASS: ${fn.name}(${label})`);
        } else {
            console.log(`FAIL: ${fn.name}(${label})`);
            console.log(`  expected: ${JSON.stringify(expectedOptions)}`);
            console.log(`  got:      ${JSON.stringify(result)}`);
        }
    });
}

module.exports = runTests;