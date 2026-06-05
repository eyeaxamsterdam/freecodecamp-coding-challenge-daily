// June 4, 2026 — Thursday
/*
Schema Validator Part 4
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean
}
The pipe (|) symbol means "or". role must be one of the listed Roles values.
The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
Extra keys are allowed
*/

const runTests = require("../helpers/runTests");

function isValidSchema(obj) {
    const ROLES = ["user","creator","moderator","staff","admin"]
    const SCHEMA = {
        'username': 'string',
        'posts': 0,
        'verified': true,
        'role': ROLES,
    }
    let checkKeys = Object.keys(obj).filter(item => Object.keys(SCHEMA).includes(item));
    let checkValues = checkKeys.filter(item => {
        if (item === 'role') return ROLES.includes(obj[item]);
        return typeof obj[item] === typeof SCHEMA[item]
    });
    if (Object.keys(obj).includes('supporter') && typeof obj['supporter'] !== 'boolean') return false; 
    return checkKeys === 4 || 5 ? JSON.stringify(checkKeys) === JSON.stringify(checkValues) : false; 
}

runTests(isValidSchema,`
    Waiting:1. isValidSchema({ username: "vivian", posts: 1, verified: false, role: "user", supporter: true }) should return true.
    Waiting:2. isValidSchema({ username: "rudolph", posts: 15, verified: true, role: "creator" }) should return true.
    Waiting:3. isValidSchema({ username: "hernandez", posts: 35, verified: true, role: "moderator", supporter: false, followers: 55 }) should return true.
    Waiting:4. isValidSchema({ username: "julia", posts: 50, verified: true, role: "admin", supporter: "true" }) should return false.
    Waiting:5. isValidSchema({ username: "bernard", posts: 0, verified: true, role: "friend", supporter: true }) should return false.
    Waiting:6. isValidSchema({ username: "felix", posts: 40, verified: "yes", role: "staff", supporter: false }) should return false.
    Waiting:7. isValidSchema({ username: "jimmy", posts: true, verified: false, role: "creator", supporter: true }) should return false.
    Waiting:8. isValidSchema({ username: true, posts: 30, verified: true, role: "moderator", supporter: false }) should return false.
`)