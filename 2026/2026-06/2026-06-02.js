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
    const SCHEMA = { username: 'string', posts: 0, verified: false };
    let checkKeys = Object.keys(obj).filter(item => item in SCHEMA);
    let checkValues = checkKeys.filter(item => typeof obj[item] === typeof SCHEMA[item]);
    return checkKeys.length === 3 && checkValues.length === 3;
}

const runTests = require('../../helpers/runTests');
runTests(isValidSchema, `
    isValidSchema({ username: "alice", posts: 10, verified: false }) should return true.
    isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 }) should return true.
    isValidSchema({ username: "frank", posts: "21", verified: true }) should return false.
    isValidSchema({ username: "sam", posts: 17, verified: "false" }) should return false.
    isValidSchema({ username: "bill", verified: true }) should return false.
    isValidSchema({ username: "fred", verified: true }) should return false.
    isValidSchema({ username: 5, posts: 10, verified: true }) should return false.
`);