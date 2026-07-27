/*
Re: Fwd: Fw: Count
Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.

For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):

"fw:"
"fwd:"
"re:"

Return the total number of occurrences of these markers.
*/

function emailChainCount(subject) {

}

const runTests = require('../../helpers/runTests');
runTests(emailChainCount, [
    `assert.equal(emailChainCount("Re: Meeting Notes"), 1);`,
    `assert.equal(emailChainCount("Meeting Notes"), 0);`,
    `assert.equal(emailChainCount("Re: re: RE: rE: Meeting Notes"), 4);`,
    `assert.equal(emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes"), 5);`,
    `assert.equal(emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary"), 23);`,
]);
