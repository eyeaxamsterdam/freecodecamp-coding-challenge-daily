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
runTests(triageIssue, `
    triageIssue("app crashes with error", []) should return ["bug", "needs triage"].
    triageIssue("app crashes with error", ["bug", "needs triage"]) should return ["bug", "help wanted"].
    triageIssue("add dark mode", []) should return ["enhancement", "discussing"].
    triageIssue("add dark mode", ["enhancement", "discussing"]) should return ["enhancement", "help wanted"].
    triageIssue("xss security bug", []) should return ["bug", "needs triage", "critical"].
    triageIssue("security vulnerability in auth", []) should return ["critical"].
    triageIssue("easy a11y fix", ["bug", "needs triage"]) should return ["bug", "good first issue"].
    triageIssue("planned api migration", ["enhancement", "discussing"]) should return ["enhancement", "on the roadmap"].
    triageIssue("improve security", ["enhancement", "discussing"]) should return ["enhancement", "help wanted", "critical"].
`);
