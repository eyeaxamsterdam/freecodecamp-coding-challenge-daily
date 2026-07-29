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
    const ROLES = ["user", "creator", "moderator", "staff", "admin"];

    if (!Array.isArray(obj.users)) return false;
    if (obj.users.length === 0) return true;

    return obj.users.every(user => {
        if (typeof user !== 'object' || user === null) return false;
        if (typeof user.username !== 'string') return false;
        if (typeof user.posts !== 'number') return false;
        if (typeof user.verified !== 'boolean') return false;
        if (!ROLES.includes(user.role)) return false;
        if (!Array.isArray(user.badges)) return false;
        if (!user.badges.every(b => typeof b === 'string')) return false;
        if ('supporter' in user && typeof user.supporter !== 'boolean') return false;
        return true;
    });
}

const runTests = require('../../../helpers/runTests');
runTests(isValidSchema, [
    `assert.isTrue(isValidSchema({ username: "gill", posts: 12, verified: false, role: "creator", supporter: false, badges: [ "early-adopter", "popular" ] }));`,
    `assert.isTrue(isValidSchema({ username: "tonya", posts: 299, verified: true, role: "moderator", supporter: true, badges: [ "streak-master", "veteran" ], followers: 1233 }));`,
    `assert.isTrue(isValidSchema({ username: "zara", posts: 0, verified: false, role: "user", supporter: false, badges: [] }));`,
    `assert.isFalse(isValidSchema({ username: "nicole", posts: 65, verified: true, role: "admin", supporter: false, badges: [ "first-post", 18 ] }));`,
    `assert.isFalse(isValidSchema({ username: "tim", posts: 25, verified: true, role: "staff", supporter: false }));`,
    `assert.isFalse(isValidSchema({ username: "charlie", posts: 0, verified: false, role: "user", supporter: "no", badges: [ "first-post", "anniversary" ] }));`,
    `assert.isFalse(isValidSchema({ username: "wanda", posts: 15, verified: true, role: "friend", supporter: true, badges: [ "popular" ] }));`,
    `assert.isFalse(isValidSchema({ username: "guy", posts: 5, verified: "false", role: "staff", supporter: true, badges: [ "helper" ] }));`,
    `assert.isFalse(isValidSchema({ username: "carrie", verified: true, role: "moderator", supporter: true, badges: [ "helper", "sharer" ] }));`,
    `assert.isFalse(isValidSchema({ username: true, posts: 75, verified: true, role: "creator", supporter: true, badges: [ "veteran" ] }));`,
]);
