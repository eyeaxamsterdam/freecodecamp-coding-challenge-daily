/*
Character Battle
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.
*/

function battle(myArmy, opposingArmy) {
    let totalMy = 0;
    let totalOpp = 0;
    
    const categorizeCharacter = (char, caseType) => {
        console.log('char ', char);
        caseType === 'upper' ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;
    }

    const characterCase = (char) => {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            console.log(categorizeCharacter(char, 'upper'));
            return categorizeCharacter(char, 'upper');
        } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
            console.log(categorizeCharacter(char, 'lower'))
            return categorizeCharacter(char, 'lower');
        } else {
            return 0;
        }
    }

    const addArmy = (arr, army) => {
        arr.forEach((l) => army += characterCase(l));
    }

    addArmy(myArmy.split(''), totalMy);
    console.log(totalMy)
    //addArmy(opposingArmy.split(''))



    return myArmy;
}


battle("Hello", "World") //should return "We lost".
//attle("pizza", "salad") //should return "We won".
//battle("C@T5", "D0G$") //should return "We won".
//battle("kn!ght", "orc") //should return "Opponent retreated".
//battle("PC", "Mac") //should return "We retreated".
//battle("Wizards", "Dragons") //should return "It was a tie".
//battle("Mr. Smith", "Dr. Jones") //should return "It was a tie".