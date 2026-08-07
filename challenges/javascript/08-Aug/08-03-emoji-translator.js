/*
Emoji Translator
Given a string of emojis, return the phrase using the following table:

| Emoji | Word |
|-------|------|
| 👶 | "baby" |
| 🐱 | "cat" |
| 🐕 | "dog" |
| 🐟 | "fish" |
| 🥵 | "hot" |
| 🧊 | "ice" |
| 🪨 | "rock" |
| 🦈 | "shark" |
| 🍲 | "soup" |
| ⭐ | "star" |

Return the words separated by spaces.
*/

const emojis = {
    '👶':  "baby",
    '🐱': "cat",
    '🐕': "dog",
    '🐟': "fish",
    '🥵': "hot",
    '🧊': "ice",
    '🪨': "rock",
    '🦈': "shark",
    '🍲': "soup",
    '⭐': "star"
}

function getEmojiPhrase(str) {
    return [...str].map(e => emojis[e]).join(' ');
}

const runTests = require('../../../helpers/runTests');
runTests(getEmojiPhrase, [
    `assert.equal(getEmojiPhrase("🪨⭐"), "rock star");`,
    `assert.equal(getEmojiPhrase("🥵🐕"), "hot dog");`,
    `assert.equal(getEmojiPhrase("👶🦈"), "baby shark");`,
    `assert.equal(getEmojiPhrase("⭐🐟"), "star fish");`,
    `assert.equal(getEmojiPhrase("🧊🧊👶"), "ice ice baby");`,
    `assert.equal(getEmojiPhrase("🐱🐟🍲"), "cat fish soup");`,
]);
