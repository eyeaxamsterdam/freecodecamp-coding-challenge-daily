/*
Schema Validator Part 5
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}
The pipe (|) symbol means "or". role must be one of the listed Roles values.
The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
The brackets [] after string means that badges should be an array of strings (or empty).
Extra keys are allowed
*/

function isValidSchema(obj) {
    const ROLES = ["user","creator","moderator","staff","admin"];
    const SCHEMA = {
        username: '',
        posts: 0,
        verified: true,
        role: ROLES,
        badges: []
    }
    let checkKeys = Object.keys(obj).filter(item => item in SCHEMA);
    let checkValues = checkKeys.filter(item => {
        if (item === 'role') return ROLES.includes(obj[item]); 
        if (item === 'badges') {
            return obj[item].filter(str => typeof str === 'string').length === obj[item].length;
        }
        return typeof obj[item] === typeof SCHEMA[item]
    });
    if (Object.keys(obj).includes('supporter') && typeof obj['supporter'] !== 'boolean') return false; 
    return checkKeys.length === 5 && checkValues.length === 5; 
}

const runTests = require('../helpers/runTests');
runTests(isValidSchema, `
    Waiting:1. isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] }) should return true.
    Waiting:2. isValidSchema({ username: "tonya", posts: 299, verified: true, role: "moderator", supporter: true, badges: [ "streak-master", "veteran" ], followers: 1233 }) should return true.
    Waiting:3. isValidSchema({ username: "zara", posts: 0, verified: false, role: "user", supporter: false, badges: [] }) should return true.
    Waiting:4. isValidSchema({ username: "nicole", posts: 65, verified: true, role: "admin", supporter: false, badges: [ "first-post", 18 ] }) should return false.
    Waiting:5. isValidSchema({ username: "tim", posts: 25, verified: true, role: "staff", supporter: false }) should return false.
    Waiting:6. isValidSchema({ username: "charlie", posts: 0, verified: false, role: "user", supporter: "no", badges: [ "first-post", "anniversary" ] }) should return false.
    Waiting:7. isValidSchema({ username: "wanda", posts: 15, verified: true, role: "friend", supporter: true, badges: [ "popular" ] }) should return false.
    Waiting:8. isValidSchema({ username: "guy", posts: 5, verified: "false", role: "staff", supporter: true, badges: [ "helper" ] }) should return false.
    Waiting:9. isValidSchema({ username: "carrie", verified: true, role: "moderator", supporter: true, badges: [ "helper", "sharer" ] }) should return false.
    Waiting:10. isValidSchema({ username: true, posts: 75, verified: true, role: "creator", supporter: true, badges: [ "veteran" ] }) should return false.
`);