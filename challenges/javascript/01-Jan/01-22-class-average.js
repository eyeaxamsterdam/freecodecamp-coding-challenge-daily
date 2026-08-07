/*
Class Average
Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:

| Average Score | Letter Grade |
| - | - |
| 97-100 | "A+" |
| 93-96 | "A" |
| 90-92 | "A-" |
| 87-89 | "B+" |
| 83-86 | "B" |
| 80-82 | "B-" |
| 77-79 | "C+" |
| 73–76 | "C" |
| 70-72 | "C-" |
| 67-69 | "D+" |
| 63-66 | "D" |
| 60–62 | "D-" |
| below 60 | "F" |

Calculate the average by adding all scores in the array and dividing by the total number of scores.
*/

function getAverageGrade(scores) {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg >= 97) return "A+";
    if (avg >= 93) return "A";
    if (avg >= 90) return "A-";
    if (avg >= 87) return "B+";
    if (avg >= 83) return "B";
    if (avg >= 80) return "B-";
    if (avg >= 77) return "C+";
    if (avg >= 73) return "C";
    if (avg >= 70) return "C-";
    if (avg >= 67) return "D+";
    if (avg >= 63) return "D";
    if (avg >= 60) return "D-";
    return "F";
}

const runTests = require('../../../helpers/runTests');
runTests(getAverageGrade, [
    `assert.equal(getAverageGrade([92, 91, 90, 94, 89, 93]), "A-");`,
    `assert.equal(getAverageGrade([84, 89, 85, 100, 91, 88, 79]), "B+");`,
    `assert.equal(getAverageGrade([63, 69, 65, 66, 71, 64, 65]), "D");`,
    `assert.equal(getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]), "A+");`,
    `assert.equal(getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]), "C+");`,
    `assert.equal(getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]), "F");`,
]);
