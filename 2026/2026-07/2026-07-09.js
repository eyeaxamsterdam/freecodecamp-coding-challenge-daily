/*
Issue Triage 2
Given an issue title and an array of current labels, return an updated array of labels based on the following rules:

If the issue doesn't have any labels, add:

"bug" and "needs triage" if the title contains "error" or "bug"
"enhancement" and "discussing" if the title contains "feature" or "add"
Otherwise, if the given labels contain:

"needs triage" and the title contains "simple" or "easy", remove "needs triage" and add "good first issue"
"discussing" and the title contains "planned" or "next", remove "discussing" and add "on the roadmap"
Otherwise, if "needs triage" or "discussing" is present, remove it and add "help wanted"
If the title contains:

"security", add a "critical" label
*/

function triageIssue(title, labels) {
    const getCriticalLabel = (t) => t.includes('security') ? ['critical'] : [];

    if (labels.length === 0) {
        const response = [];
        if (title.includes('error') || title.includes('bug')) response.push('bug', 'needs triage');
        if (title.includes('feature') || title.includes('add')) response.push('enhancement', 'discussing');
        return [...response, ...getCriticalLabel(title)];
    }

    let response = [...labels];

    if (labels.includes('needs triage')) {
        response = response.map(item => item === 'needs triage'
            ? (title.includes('simple') || title.includes('easy') ? 'good first issue' : 'help wanted')
            : item);
    }

    if (labels.includes('discussing')) {
        response = response.map(item => item === 'discussing'
            ? (title.includes('planned') || title.includes('next') ? 'on the roadmap' : 'help wanted')
            : item);
    }

    return [...response, ...getCriticalLabel(title)];
}

const runTests = require('../../helpers/runTests');
runTests(triageIssue, [
    `assert.deepEqual(triageIssue("app crashes with error", []).sort(), ["bug", "needs triage"].sort());`,
    `assert.deepEqual(triageIssue("app crashes with error", ["bug", "needs triage"]).sort(), ["bug", "help wanted"].sort());`,
    `assert.deepEqual(triageIssue("add dark mode", []).sort(), ["enhancement", "discussing"].sort());`,
    `assert.deepEqual(triageIssue("add dark mode", ["enhancement", "discussing"]).sort(), ["enhancement", "help wanted"].sort());`,
    `assert.deepEqual(triageIssue("xss security bug", []).sort(), ["bug", "needs triage", "critical"].sort());`,
    `assert.deepEqual(triageIssue("security vulnerability in auth", []).sort(), ["critical"].sort());`,
    `assert.deepEqual(triageIssue("easy a11y fix", ["bug", "needs triage"]).sort(), ["bug", "good first issue"].sort());`,
    `assert.deepEqual(triageIssue("planned api migration", ["enhancement", "discussing"]).sort(), ["enhancement", "on the roadmap"].sort());`,
    `assert.deepEqual(triageIssue("improve security", ["enhancement", "discussing"]).sort(), ["enhancement", "help wanted", "critical"].sort());`,
]);
