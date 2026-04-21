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
findOrg("NASA") //should return "National Avocado Storage Authority".
findOrg("CIA") //should return "Cats Infiltration Agency".
findOrg("FBI") //should return "Fluffy Beanbag Inspectors".
findOrg("DOJ") //should return "Department Of Jelly".
findOrg("WHO") //should return "Wild Honey Organization".
findOrg("EPA") //should return "Eating Pancakes Administration". 