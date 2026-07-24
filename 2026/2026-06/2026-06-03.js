// June 3, 2026 — Wednesday
/*
Schema Validator Part 3
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles
}
The pipe (|) symbol means "or". role must be one of the listed Roles values.
Extra keys are allowed
*/


function isValidSchema(obj) {
    const ROLES = ["user","creator","moderator","staff","admin"];
    const SCHEMA = {'username': 'string', 'posts': 0, 'verified': true, 'role': ROLES } 
    let checkKeys = Object.keys(obj).filter(item => Object.keys(SCHEMA).includes(item));
    let checkValues = checkKeys.filter(item => {
        if (item === 'role') return ROLES.includes(obj[item]);
        return typeof obj[item] === typeof SCHEMA[item]
    });
    return checkKeys.length === 4 && JSON.stringify(checkKeys) === JSON.stringify(checkValues); 
}

const runTests = require('../../helpers/runTests');
runTests(isValidSchema, [
    `assert.isTrue(isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" }));`,
    `assert.isTrue(isValidSchema({ username: "sara", posts: 45, verified: false, role: "creator", followers: 70 }));`,
    `assert.isTrue(isValidSchema({ username: "penelope", posts: 20, verified: true, role: "admin" }));`,
    `assert.isTrue(isValidSchema({ username: "kevin", posts: 0, verified: false, role: "user" }));`,
    `assert.isTrue(isValidSchema({ username: "george", posts: 15, verified: true, role: "moderator" }));`,
    `assert.isFalse(isValidSchema({ username: "david", posts: 0, verified: false, role: "guest" }));`,
    `assert.isFalse(isValidSchema({ username: "wendy", posts: 10, verified: true }));`,
    `assert.isFalse(isValidSchema({ username: "fabian", posts: 1, verified: true, role: true }));`,
    `assert.isFalse(isValidSchema({ username: 8, posts: 1, verified: true, role: "user" }));`,
    `assert.isFalse(isValidSchema({ username: "penny", posts: "10", verified: true, role: "staff" }));`,
    `assert.isFalse(isValidSchema({ username: "john", posts: "1", verified: "true", role: "admin" }));`,
]);
