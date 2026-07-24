const nodeAssert = require("assert");

// Minimal chai-`assert`-compatible shim — covers only the methods that
// appear across freeCodeCamp's daily coding challenges.
module.exports = {
  equal: (actual, expected, msg) => nodeAssert.equal(actual, expected, msg),
  notEqual: (actual, expected, msg) => nodeAssert.notEqual(actual, expected, msg),
  strictEqual: (actual, expected, msg) => nodeAssert.strictEqual(actual, expected, msg),
  deepEqual: (actual, expected, msg) => nodeAssert.deepStrictEqual(actual, expected, msg),
  isTrue: (actual, msg) => nodeAssert.strictEqual(actual, true, msg),
  isFalse: (actual, msg) => nodeAssert.strictEqual(actual, false, msg),
  isAbove: (actual, expected, msg) => {
    if (!(actual > expected)) {
      throw new Error(msg || `expected ${JSON.stringify(actual)} to be above ${JSON.stringify(expected)}`);
    }
  },
  lengthOf: (actual, expected, msg) => {
    nodeAssert.strictEqual(actual.length, expected, msg);
  },
};
