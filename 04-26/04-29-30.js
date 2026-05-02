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

const runTests = require('../helpers/runTests');
runTests(parseUrlQuery, `
Waiting:1. parseUrlQuery("https://example.com/search?name=Alice&age=30") should return {"name": "Alice", "age": "30"}
Waiting:2. parseUrlQuery("https://freecodecamp.org/learn?skill=programming&language=python") should return {"skill": "programming", "language": "python"}
Waiting:3. parseUrlQuery("https://freecodecamp.org/items?category=books&sort=asc&page=2") should return {"category": "books", "sort": "asc", "page": "2"}
Waiting:4. parseUrlQuery("https://example.com?redirect=freecodecamp.org/learn&when=now") should return {"redirect": "freecodecamp.org/learn", "when": "now"}     */
`);