/*
Database Migration
Given two database objects, return the second object with any missing properties from the first filled in.

Fields that already exist in the record should not be overwri
*/

function migrateRecord(schema, record) {
    Object.keys(schema).forEach(prop => {
        if (!record[prop]) record[prop] = schema[prop]; 
    })
    return record
}

const runTests = require('../../../helpers/runTests');
runTests(migrateRecord, [
    `assert.deepEqual(migrateRecord({ username: "", posts: 0 }, { verified: true }), { username: "", posts: 0, verified: true });`,
    `assert.deepEqual(migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }), { username: "camper", posts: 5 });`,
    `assert.deepEqual(migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" }), { username: "camper", posts: 0, verified: false });`,
    `assert.deepEqual(migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" }), { username: "camper", role: "admin", posts: 0 });`,
    `assert.deepEqual(migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" }), { username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false });`,
]);
