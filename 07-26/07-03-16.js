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

const runTests = require('../helpers/runTests');
runTests(migrateRecord, `
    Waiting:1. migrateRecord({ username: "", posts: 0 }, { verified: true }) should return { username: "", posts: 0, verified: true }.
    Waiting:2. migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }) should return { username: "camper", posts: 5 }.
    Waiting:3. migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" }) should return { username: "camper", posts: 0, verified: false }.
    Waiting:4. migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" }) should return { username: "camper", role: "admin", posts: 0 }.
    Waiting:5. migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" }) should return { username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false }.
`);