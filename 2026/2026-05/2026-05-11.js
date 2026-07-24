/*
Oldest Person
Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.

If multiple people share the oldest age, return all of their names in the order they appear in the input.
*/

function getOldest(people) {
    // find the max age
    const maxAge = Math.max(...people.map(p => p.age));
    // see who matches the max age
    return people.filter(p => p.age === maxAge).map(p => p.name);
}

const runTests = require('../../helpers/runTests');
runTests(getOldest, [
    `assert.deepEqual(getOldest([{ name: "Brenda", age: 40 }]), ["Brenda"]);`,
    `assert.deepEqual(getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]), ["Alice"]);`,
    `assert.deepEqual(getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }]), ["Bill", "Carol"]);`,
    `assert.deepEqual(getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }]), ["George", "Holly", "Zach"]);`,
]);
