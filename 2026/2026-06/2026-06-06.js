/*
Schema Validator Part 6
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

UserProfile = {
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean,
  badges: string[]
}

{
  users: UserProfile[]
}
The pipe (|) symbol means "or". role must be one of the listed Roles values.
The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
UserProfile[] denotes an array of UserProfile objects. An empty array is valid.
Extra keys are allowed
*/

function isValidSchema(obj) {
  const ROLES = ["user", "creator", "moderator", "staff", "admin"];

  if (typeof obj !== "object" || obj === null || !Array.isArray(obj.users)) {
    return false;
  }

  return obj.users.every((user) => {
    if (typeof user !== "object" || user === null) return false;
    if (typeof user.username !== "string") return false;
    if (typeof user.posts !== "number") return false;
    if (typeof user.verified !== "boolean") return false;
    if (!ROLES.includes(user.role)) return false;
    if ("supporter" in user && typeof user.supporter !== "boolean") return false;
    if (!Array.isArray(user.badges) || !user.badges.every((b) => typeof b === "string")) return false;
    return true;
  });
}

const runTests = require('../../helpers/runTests');
runTests(isValidSchema, [
    `assert.isTrue(isValidSchema({users: [{ username: "ron", posts: 14, verified: true, role: "creator", badges: [ "early-adopter" ]}, { username: "cher", posts: 25, verified: true, role: "moderator", supporter: true, followers: 20, badges: [ "helper" ]}]}));`,
    `assert.isTrue(isValidSchema({ users: [] }));`,
    `assert.isFalse(isValidSchema({ users: { username: "anne", posts: 0, verified: false, role: "user", supporter: false, badges: []}}));`,
    `assert.isFalse(isValidSchema({ users: [{ username: "tony", posts: 10, verified: true, role: "creator", supporter: true, badges: ["liked", 6]}]}));`,
    `assert.isFalse(isValidSchema({ users: [{ username: "ursula", posts: 3, verified: false, role: "user", supporter: "false", badges: ["comeback"]}]}));`,
    `assert.isFalse(isValidSchema({ users: [{ username: "benny", posts: 55, verified: true, role: "superstar", supporter: true, badges: ["veteran"]}]}));`,
    `assert.isFalse(isValidSchema({ users: [{ username: "chase", posts: 1, verified: "yes", role: "staff", supporter: false, badges: ["superstar"]}]}));`,
    `assert.isFalse(isValidSchema({ users: [{ username: "carla", posts: "10", verified: false, role: "user", supporter: false, badges: ["newbie"]}]}));`,
    `assert.isFalse(isValidSchema({ users: [{ posts: 4, verified: false, role: "admin", supporter: false, badges: ["superuser", "veteran"]}]}));`,
    `assert.isFalse(isValidSchema({ users: [{ username: "harold", posts: 80, verified: true, role: "creator", supporter: true, badges: ["liked", "hero"]}, { username: "kim", posts: 11, verified: false, role: "admin", supporter: true, badges: ["first"]}, {}]}));`,
]);
