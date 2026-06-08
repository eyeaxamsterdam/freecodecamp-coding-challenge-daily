// June 1, 2026 — Monday
/*
Schema Validator Part 1
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string
}
Extra keys are allowed
*/

function isValidSchema(obj) {
    const checkUsername = 'username' in obj; 
    const checkString = typeof obj.username === 'string';
    return checkUsername && checkString; 
}

const runTests = require('../helpers/runTests');
runTests(isValidSchema, `
    Waiting:1. isValidSchema({ username: "bob" }) should return true.
    Waiting:2. isValidSchema({ username: "jen", posts: 30 }) should return true.
    Waiting:3. isValidSchema({ username: "" }) should return true.
    Waiting:4. isValidSchema({ username: 7 }) should return false.
    Waiting:5. isValidSchema({ posts: 25 }) should return false.
`);