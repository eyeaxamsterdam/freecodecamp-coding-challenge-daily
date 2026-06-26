/*
Frontmatter Parser
Given a string representing a frontmatter block, parse it and return an object (JavaScript) or dictionary (Python) with the keys and values.

Frontmatter is wrapped in --- delimiters and contains key: value pairs within them, one per line. For example:

---
title: My Post
draft: false
views: 100
---
Should return:

{
  title: "My Post",
  draft: false,
  views: 100
}
Numbers, Booleans, and Strings should all be returned as their respective type.
The given string will have new lines separated with the newline character ("\n"). The above example would be given as: "---\ntitle: My Post\ndraft: false\nviews: 100\n---".
*/
const helpers = {
    isConvertableToNum: (str) => {
        return !isNaN(str);
    },

    isConvertibleToBoolean: (str) => {
        return ["true", "false"].includes(str);
    }
}

const parseFrontmatter = (str) => {
    let arr = [];
    str.split('\n').forEach((l,i) => {
        if (l.includes(': ')) arr.push(l.split(': '))
    });
    const convertedArr = arr.map(item => {
        const value = helpers.isConvertableToNum(item[1]) ? Number(item[1]) : helpers.isConvertibleToBoolean(item[1]) ? item[1] === 'true' :  item[1]
        return [item[0], value];
    })
    return Object.fromEntries(convertedArr);
}

// escape characters because helper uses "/n" to parse out test cases. 
const runTests = require('../helpers/runTests');
runTests(parseFrontmatter, `
    Waiting:1. parseFrontmatter("---\\ntitle: My Post\\ndraft: false\\nviews: 100\\n---") should return { title: "My Post", draft: false, views: 100 }.
    Waiting:2. parseFrontmatter("---\\nid: 6a174db57256a112f932195c\\ntitle: My Book\\nlocale: en\\nwordCount: 10000\\npublished: false\\n---") should return { id: "6a174db57256a112f932195c", title: "My Book", locale: "en", wordCount: 10000, published: false }.
    Waiting:3. parseFrontmatter("---\\nversion: 1.0.0\\nurl: https://example.com\\nprivate: true\\n---") should return { version: "1.0.0", url: "https://example.com", private: true }.
    Waiting:4. parseFrontmatter("---\\nrating: 4.5\\nprice: 9.99\\n---") should return { rating: 4.5, price: 9.99 }.
`);