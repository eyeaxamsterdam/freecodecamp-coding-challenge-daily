// June 2, 2026 — Tuesday
/*
Schema Validator Part 2
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string,
  posts: number,
  verified: boolean
}
Extra keys are allowed
*/

function isValidSchema(obj) {
    let valid = { username: 'string', posts: 0, verified: false };
    let checkKeys = Object.keys(obj).filter(item => Object.keys(valid).includes(item));
    let checkValues = checkKeys.filter(item => typeof obj[item] === typeof valid[item]);
    return checkKeys.length === 3 && JSON.stringify(checkKeys) === JSON.stringify(checkValues); 
}

const runTests = require('../helpers/runTests');
runTests(isValidSchema, `
    Waiting:1. isValidSchema({ username: "alice", posts: 10, verified: false }) should return true.
    Waiting:2. isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 }) should return true.
    Waiting:3. isValidSchema({ username: "frank", posts: "21", verified: true }) should return false.
    Waiting:4. isValidSchema({ username: "sam", posts: 17, verified: "false" }) should return false.
    Waiting:5. isValidSchema({ username: "bill", verified: true }) should return false.
    Waiting:6. isValidSchema({ username: "fred", verified: true }) should return false.
    Waiting:7. isValidSchema({ username: 5, posts: 10, verified: true }) should return false.
`);