/*
Anniversary Milestones
Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

Years Married	Milestone
1	"Paper"
5	"Wood"
10	"Tin"
25	"Silver"
40	"Ruby"
50	"Gold"
60	"Diamond"
70	"Platinum"
If they haven't reached the first milestone, return "Newlyweds".
*/

function getMilestone(years) {
    const MILESTONES = {
        1:	"Paper",
        5:	"Wood",
        10:	"Tin",
        25:	"Silver",
        40:	"Ruby",
        50:	"Gold",
        60:	"Diamond",
        70:	"Platinum"
    }

    let back = Object.keys(MILESTONES).sort((a,b) => b - a);
    return MILESTONES[back.find(n => years >= n)] || 'Newlyweds';
    
}

const runTests = require('../../../helpers/runTests');
runTests(getMilestone, [
    `assert.equal(getMilestone(0), "Newlyweds");`,
    `assert.equal(getMilestone(1), "Paper");`,
    `assert.equal(getMilestone(8), "Wood");`,
    `assert.equal(getMilestone(10), "Tin");`,
    `assert.equal(getMilestone(26), "Silver");`,
    `assert.equal(getMilestone(45), "Ruby");`,
    `assert.equal(getMilestone(50), "Gold");`,
    `assert.equal(getMilestone(64), "Diamond");`,
    `assert.equal(getMilestone(71), "Platinum");`,
]);
