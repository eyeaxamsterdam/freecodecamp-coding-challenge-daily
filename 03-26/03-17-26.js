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

const runTests = require('../helpers/runTests');
runTests(getMilestone, `
    Waiting:1. getMilestone(0) should return "Newlyweds".
    Waiting:2. getMilestone(1) should return "Paper".
    Waiting:3. getMilestone(8) should return "Wood".
    Waiting:4. getMilestone(10) should return "Tin".
    Waiting:5. getMilestone(26) should return "Silver".
    Waiting:6. getMilestone(45) should return "Ruby".
    Waiting:7. getMilestone(50) should return "Gold".
    Waiting:8. getMilestone(64) should return "Diamond".
    Waiting:9. getMilestone(71) should return "Platinum".
`);