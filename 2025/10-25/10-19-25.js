/*
HTML Attribute Extractor
Given a string of a valid HTML element, return the attributes of the element using the following criteria:

You will only be given one element.
Attributes will be in the format: attribute="value".
Return an array of strings with each attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
Return attributes in the order they are given.
If no attributes are found, return an empty array.
*/
// 

function extractAttributes(element) {
    // Regular expression to match attributes and their values
    const regex = /(\w+)\s*=\s*"([^"]*)"/g;
    let matches;
    const attributes = [];

    // Use regex.exec in a loop to find all matches
    while ((matches = regex.exec(element)) !== null) {
        // Format each match and add to the attributes array
        attributes.push(`${matches[1]}, ${matches[2]}`);
    }
    console.log(attributes)
    return attributes;
}

//Tests
extractAttributes('<span class="red"></span>') //should return ["class, red"].
extractAttributes('<meta charset="UTF-8" />') //should return ["charset, UTF-8"].
//extractAttributes("<p>Lorem ipsum dolor sit amet</p>") //should return [].
extractAttributes('<input name="email" type="email" required="true" />') //should return ["name, email", "type, email", "required, true"].
extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') //should return ["id, submit", "class, btn btn-primary"].