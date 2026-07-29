/*
Issue Triage
Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:

If the last message is less than 7 days ago, return "leave it"
If the last message is 7 or more days ago and its content contains "bump" (case-insensitive), return "close it"
Otherwise, return "bump it"
*/

function triageIssue(ms, message) {
    const days = ms/(1000*60*60*24)
    return days < 7 ? 'leave it' : message.toLowerCase().includes('bump') ? 'close it' : 'bump it';
}

const runTests = require('../../../helpers/runTests');
runTests(triageIssue, [
    `assert.equal(triageIssue(86400000, "Lets fix it"), "leave it");`,
    `assert.equal(triageIssue(1209600000, "still waiting"), "bump it");`,
    `assert.equal(triageIssue(864000000,  "bump"), "close it");`,
    `assert.equal(triageIssue(604800000, "Do we still want this?"), "bump it");`,
    `assert.equal(triageIssue(604800000, "Bumping this"), "close it");`,
    `assert.equal(triageIssue(345600000, "I'll make a PR"), "leave it");`,
]);
