/*
2026 Winter Games Day 15: Freestyle Skiing
Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

The two words will be separated by a single space.

Valid first words:

|"Misty"|
|-|
|"Ghost"|
|"Thunder"|
|"Solar"|
|"Sky"|
|"Phantom"|
|"Frozen"|
|"Polar"|

Valid second words:

|"Twister"|
|-|
|"Icequake"|
|"Avalanche"|
|"Vortex"|
|"Snowstorm"|
|"Frostbite"|
|"Blizzard"|
|"Shadow"|
*/

function isValidTrick(trickName) {
    const firstWords = ['Misty', 'Ghost', 'Thunder', 'Solar', 'Sky', 'Phantom', 'Frozen', 'Polar'];
    const secondWords = ['Twister', 'Icequake', 'Avalanche', 'Vortex', 'Snowstorm', 'Frostbite', 'Blizzard', 'Shadow'];
    const [first, second] = trickName.split(' ');
    return firstWords.includes(first) && secondWords.includes(second);
}

const runTests = require('../../../helpers/runTests');
runTests(isValidTrick, [
    `assert.isTrue(isValidTrick("Polar Vortex"));`,
    `assert.isTrue(isValidTrick("Solar Icequake"));`,
    `assert.isTrue(isValidTrick("Thunder Blizzard"));`,
    `assert.isTrue(isValidTrick("Phantom Frostbite"));`,
    `assert.isTrue(isValidTrick("Ghost Avalanche"));`,
    `assert.isFalse(isValidTrick("Snowstorm Shadow"));`,
    `assert.isFalse(isValidTrick("Solar Sky"));`,
]);
