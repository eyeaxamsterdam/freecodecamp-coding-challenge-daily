/*
British to American
Given a sentence, convert any British English spellings to their American English equivalents using the following lookup table and return the updated sentence:

British	American
"colour"	"color"
"flavour"	"flavor"
"honour"	"honor"
"neighbour"	"neighbor"
"labour"	"labor"
"humour"	"humor"
"centre"	"center"
"fibre"	"fiber"
"defence"	"defense"
"offence"	"offense"
"organise"	"organize"
"recognise"	"recognize"
"analyse"	"analyze"
Replacements should be case-insensitive. For example, "Colour" should become "Color".
The input may contain words that build on the exact spelling of a root in the table that also need to be changed. For example, "colouring" should become "coloring", and "disorganised" should become "disorganized".
*/

const lookup = {
  colour: "color",
  flavour: "flavor",
  honour: "honor",
  neighbour: "neighbor",
  labour: "labor",
  humour: "humor",
  centre: "center",
  fibre: "fiber",
  defence: "defense",
  offence: "offense",
  organise: "organize",
  recognise: "recognize",
  analyse: "analyze",
};

function britishToAmerican(sentence) {
  let result = sentence;
  for (const [british, american] of Object.entries(lookup)) {
    result = result.replace(new RegExp(british, "gi"), (match) =>
      match[0] === match[0].toUpperCase()
        ? american[0].toUpperCase() + american.slice(1)
        : american
    );
  }
  return result;
}
const runTests = require('../../helpers/runTests');
runTests(britishToAmerican, [
    `assert.equal(britishToAmerican("I love the colour blue."), "I love the color blue.");`,
    `assert.equal(britishToAmerican("The fibre optic cable is new."), "The fiber optic cable is new.");`,
    `assert.equal(britishToAmerican("It's an honour to meet someone with such humour."), "It's an honor to meet someone with such humor.");`,
    `assert.equal(britishToAmerican("The unrecognised artist analysed his colour palette at the centre."), "The unrecognized artist analyzed his color palette at the center.");`,
    `assert.equal(britishToAmerican("The offence analysed, with organisation, the defence centre and recognised that the neighbouring labouror was humourous, flavourful, and colourful."), "The offense analyzed, with organisation, the defense center and recognized that the neighboring laboror was humorous, flavorful, and colorful.");`,
]);
