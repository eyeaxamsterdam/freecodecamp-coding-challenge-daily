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

const runTests = require('../../../helpers/runTests');
runTests(isValidSchema, [
    `assert.isTrue(isValidSchema({ username: "alice", posts: 10, verified: false }));`,
    `assert.isTrue(isValidSchema({ username: "carol", posts: 15, verified: true, followers: 25 }));`,
    `assert.isFalse(isValidSchema({ username: "frank", posts: "21", verified: true }));`,
    `assert.isFalse(isValidSchema({ username: "sam", posts: 17, verified: "false" }));`,
    `assert.isFalse(isValidSchema({ username: "bill", verified: true }));`,
    `assert.isFalse(isValidSchema({ username: "fred", verified: true }));`,
    `assert.isFalse(isValidSchema({ username: 5, posts: 10, verified: true }));`,
]);
