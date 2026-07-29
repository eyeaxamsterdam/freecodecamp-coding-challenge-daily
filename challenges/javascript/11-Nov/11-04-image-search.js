/*
Image Search
On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

Given an array of image names and a search term, return an array of image names containing the search term.

Ignore the case when matching the search terms.
Return the images in the same order they appear in the input array.
*/

function imageSearch(images, term) {
    let result = [];
    images.filter((w) => {
        w.toLowerCase().includes(term.toLowerCase()) && result.push(w)
    });
    console.log(result);
    return result;
}

//Tests

const runTests = require('../../../helpers/runTests');
runTests(imageSearch, [
    `assert.deepEqual(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"), ["dog.png"]);`,
    `assert.deepEqual(imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"), ["Sunset.jpg", "sunflower.jpeg"]);`,
    `assert.deepEqual(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"), ["Moon.png", "stars.png"]);`,
    `assert.deepEqual(imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat"), ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]);`,
]);
