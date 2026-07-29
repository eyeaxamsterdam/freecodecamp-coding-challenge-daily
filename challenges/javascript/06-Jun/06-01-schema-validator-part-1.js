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

const runTests = require('../../../helpers/runTests');
runTests(isValidSchema, [
    `assert.isTrue(isValidSchema({ username: "bob" }));`,
    `assert.isTrue(isValidSchema({ username: "jen", posts: 30 }));`,
    `assert.isTrue(isValidSchema({ username: "" }));`,
    `assert.isFalse(isValidSchema({ username: 7 }));`,
    `assert.isFalse(isValidSchema({ posts: 25 }));`,
]);
