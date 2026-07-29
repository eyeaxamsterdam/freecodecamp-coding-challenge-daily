/*
Acronym Finder
Given a string representing an acronym, return the full name of the organization it belongs to from the list below:

"National Avocado Storage Authority"
"Cats Infiltration Agency"
"Fluffy Beanbag Inspectors"
"Department Of Jelly"
"Wild Honey Organization"
"Eating Pancakes Administration"
Each letter in the given acronym should match the first letter of each word in the organization it belongs to, in the same order.
*/

function findOrg(acronym) {
    const KEY = ["National Avocado Storage Authority", "Cats Infiltration Agency", "Fluffy Beanbag Inspectors", "Department Of Jelly", "Wild Honey Organization", "Eating Pancakes Administration"];
    let response;
    KEY.find((name,i) => {
        const keyAcronym = name.match(/(?<=^|\s)[A-Z]/g).join('');
        if (keyAcronym === acronym) {
            response = KEY[i];
        }
    });
    console.log('response: ', response);
    return response;
}

// Tests:

const runTests = require('../../../helpers/runTests');
runTests(findOrg, [
    `assert.equal(findOrg("NASA"), "National Avocado Storage Authority");`,
    `assert.equal(findOrg("CIA"), "Cats Infiltration Agency");`,
    `assert.equal(findOrg("FBI"), "Fluffy Beanbag Inspectors");`,
    `assert.equal(findOrg("DOJ"), "Department Of Jelly");`,
    `assert.equal(findOrg("WHO"), "Wild Honey Organization");`,
    `assert.equal(findOrg("EPA"), "Eating Pancakes Administration");`,
]);
