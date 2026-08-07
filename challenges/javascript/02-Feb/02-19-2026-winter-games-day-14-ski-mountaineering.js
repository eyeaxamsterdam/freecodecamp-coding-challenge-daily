/*
2026 Winter Games Day 14: Ski Mountaineering
Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

The snow depth values are "Shallow", "Moderate", or "Deep".
Slope values are "Gentle", "Steep", or "Very Steep".

Return "Safe" or "Risky" based on this table:

| |"Shallow"|"Moderate"|"Deep"|
|-|-|-|-|
|"Gentle"|"Safe"|"Safe"|"Safe"|
|"Steep"|"Safe"|"Risky"|"Risky"|
|"Very Steep"|"Safe"| "Risky"|"Risky"|

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/02-19
*/

function avalancheRisk(snowDepth, slope) {
    if (slope === 'Gentle' || snowDepth === 'Shallow') return 'Safe';
    return 'Risky';
}

const runTests = require('../../../helpers/runTests');
runTests(avalancheRisk, [
    `assert.equal(avalancheRisk("Shallow", "Gentle"), "Safe");`,
    `assert.equal(avalancheRisk("Shallow", "Steep"), "Safe");`,
    `assert.equal(avalancheRisk("Shallow", "Very Steep"), "Safe");`,
    `assert.equal(avalancheRisk("Moderate", "Gentle"), "Safe");`,
    `assert.equal(avalancheRisk("Moderate", "Steep"), "Risky");`,
    `assert.equal(avalancheRisk("Moderate", "Very Steep"), "Risky");`,
    `assert.equal(avalancheRisk("Deep", "Gentle"), "Safe");`,
    `assert.equal(avalancheRisk("Deep", "Steep"), "Risky");`,
    `assert.equal(avalancheRisk("Deep", "Very Steep"), "Risky");`,
]);
