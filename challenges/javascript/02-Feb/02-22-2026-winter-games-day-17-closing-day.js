/*
2026 Winter Games Day 17: Closing Day
Given a 2D array of medal winners, return a medal count for each country as a CSV string.

In the given array, each sub-array represents a single event: [gold_winner, silver_winner, bronze_winner]

The returned CSV string should have the following format, with the first line being headers:

`sh
Country,Gold,Silver,Bronze,Total
country_name,gold_count,silver_count,bronze_count,total_medals
`

Separate new lines with the new line character ("\n").
Do not include spaces around commas or at the end of lines.
Sort the returned CSV by gold medal count, highest first. If two countries have the same gold medal count, sort the tied ones alphabetically.

For example, given:

`js
[
  ["USA", "CAN", "NOR"],
  ["NOR", "USA", "CAN"],
  ["USA", "NOR", "SWE"]
]
`

Return:

`sh
"Country,Gold,Silver,Bronze,Total\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1"
`

Which looks like this when printed:

`sh
Country,Gold,Silver,Bronze,Total
USA,2,1,0,3
NOR,1,1,1,3
CAN,0,1,1,2
SWE,0,0,1,1
`

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/02-22
*/

function countMedals(winners) {
    const counts = {};
    const getCountry = name => counts[name] || (counts[name] = { Gold: 0, Silver: 0, Bronze: 0 });
    winners.forEach(([gold, silver, bronze]) => {
        getCountry(gold).Gold++;
        getCountry(silver).Silver++;
        getCountry(bronze).Bronze++;
    });
    const rows = Object.entries(counts).map(([country, c]) => ({
        country, ...c, Total: c.Gold + c.Silver + c.Bronze,
    }));
    rows.sort((a, b) => b.Gold - a.Gold || a.country.localeCompare(b.country));
    const lines = rows.map(r => `${r.country},${r.Gold},${r.Silver},${r.Bronze},${r.Total}`);
    return ['Country,Gold,Silver,Bronze,Total', ...lines].join('\n');
}

const runTests = require('../../../helpers/runTests');
runTests(countMedals, [
    `assert.equal(countMedals([["USA", "CAN", "NOR"], ["NOR", "USA", "CAN"], ["USA", "NOR", "SWE"]]), "Country,Gold,Silver,Bronze,Total\\nUSA,2,1,0,3\\nNOR,1,1,1,3\\nCAN,0,1,1,2\\nSWE,0,0,1,1");`,
    `assert.equal(countMedals([["NOR","SWE","FIN"]]), "Country,Gold,Silver,Bronze,Total\\nNOR,1,0,0,1\\nFIN,0,0,1,1\\nSWE,0,1,0,1");`,
    `assert.equal(countMedals([["ITA", "CHN", "CHN"], ["JPN", "ITA", "JPN"]]), "Country,Gold,Silver,Bronze,Total\\nITA,1,1,0,2\\nJPN,1,0,1,2\\nCHN,0,1,1,2");`,
    `assert.equal(countMedals([["USA","CAN","NOR"], ["GER","FRA","ITA"], ["JPN","KOR","CHN"], ["SWE","FIN","NOR"], ["CAN","USA","SWE"], ["FRA","GER","ITA"]]), "Country,Gold,Silver,Bronze,Total\\nCAN,1,1,0,2\\nFRA,1,1,0,2\\nGER,1,1,0,2\\nJPN,1,0,0,1\\nSWE,1,0,1,2\\nUSA,1,1,0,2\\nCHN,0,0,1,1\\nFIN,0,1,0,1\\nITA,0,0,2,2\\nKOR,0,1,0,1\\nNOR,0,0,2,2");`,
    `assert.equal(countMedals([["ESP","ITA","FRA"], ["ITA","ESP","GER"], ["NOR","SWE","FIN"], ["FIN","NOR","SWE"], ["USA","CAN","MEX"], ["CAN","USA","MEX"], ["JPN","KOR","CHN"], ["CHN","JPN","KOR"]]), "Country,Gold,Silver,Bronze,Total\\nCAN,1,1,0,2\\nCHN,1,0,1,2\\nESP,1,1,0,2\\nFIN,1,0,1,2\\nITA,1,1,0,2\\nJPN,1,1,0,2\\nNOR,1,1,0,2\\nUSA,1,1,0,2\\nFRA,0,0,1,1\\nGER,0,0,1,1\\nKOR,0,1,1,2\\nMEX,0,0,2,2\\nSWE,0,1,1,2");`,
    `assert.equal(countMedals([["USA","CAN","GER"], ["NOR","SWE","FIN"], ["USA","NOR","SWE"], ["GER","FRA","ITA"], ["JPN","KOR","CHN"], ["USA","GER","CAN"], ["SWE","NOR","FIN"], ["CAN","USA","NOR"], ["FRA","GER","ITA"], ["JPN","CHN","KOR"], ["SWE","FIN","NOR"], ["GER","ITA","FRA"]]), "Country,Gold,Silver,Bronze,Total\\nUSA,3,1,0,4\\nGER,2,2,1,5\\nJPN,2,0,0,2\\nSWE,2,1,1,4\\nCAN,1,1,1,3\\nFRA,1,1,1,3\\nNOR,1,2,2,5\\nCHN,0,1,1,2\\nFIN,0,1,2,3\\nITA,0,1,2,3\\nKOR,0,1,1,2");`,
]);
