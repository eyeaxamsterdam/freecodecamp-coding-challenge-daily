/*
URL Query Parser
Given a URL that contains a query string, parse the query string into an object (or dictionary) of key-value pairs.

The query string begins after the "?",
each parameter is separated by "&",
each key/value pair is separated by "="
For example, given "https://example.com/search?name=Alice&age=30", return:
*/

function parseUrlQuery(url) {
    const regex = /[?&]([^=]+)=([^&]*)/g; 
    const match = url.matchAll(regex);
    let myObj = {};
    for (const parameter of match) {
       myObj[parameter[1]] = parameter[2];
    }
    console.log(myObj);
    return myObj;
}

const runTests = require('../../helpers/runTests');
runTests(parseUrlQuery, [
    `assert.deepEqual(parseUrlQuery("https://example.com/search?name=Alice&age=30"), {"name": "Alice", "age": "30"});`,
    `assert.deepEqual(parseUrlQuery("https://freecodecamp.org/learn?skill=programming&language=python"), {"skill": "programming", "language": "python"});`,
    `assert.deepEqual(parseUrlQuery("https://freecodecamp.org/items?category=books&sort=asc&page=2"), {"category": "books", "sort": "asc", "page": "2"});`,
    `assert.deepEqual(parseUrlQuery("https://example.com?redirect=freecodecamp.org/learn&when=now"), {"redirect": "freecodecamp.org/learn", "when": "now"});`,
]);
