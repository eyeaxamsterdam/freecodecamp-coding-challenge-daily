/*
Space Week Day 2: Exoplanet Search
For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
Characters 0-9 correspond to luminosity levels 0-9.
Characters A-Z correspond to luminosity levels 10-35.
A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.
*/

function hasExoplanet(readings) {
  let isExoplanet = false;
  let letterToNumberMap = {};

  for (let i = 0; i <= 9; i++) {
    letterToNumberMap[i] = i;
  }
  for (let i = 0; i < 26; i++) {

    let letter = String.fromCharCode(65 + i);
    
    letterToNumberMap[letter] = 10 + i;
  }

  let numberArray = readings.split('').map(letter => letterToNumberMap[letter])

  let average = numberArray.reduce((acc, num) => acc + num, 0)/readings.length;

  console.log(average)

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] / average <= .8) {
      isExoplanet = true;
      break;
    }
  }
  console.log(isExoplanet);
  return isExoplanet;
}

hasExoplanet("665544554") //should return false.
hasExoplanet("FGFFCFFGG") //should return true.
hasExoplanet("MONOPLONOMONPLNOMPNOMP") //should return false.
hasExoplanet("FREECODECAMP") //should return true.
hasExoplanet("9AB98AB9BC98A") //should return false.
hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") //should return true.