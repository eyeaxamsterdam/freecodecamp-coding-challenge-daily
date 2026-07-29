/*
Tip Calculator
*/

function calculateTips(mealPrice, customTip) {
  const cleanPrice = parseFloat(mealPrice.replace(/[^0-9.-]+/g, ""));
  const cleanTip = parseFloat((customTip.replace(/[^0-9.-]+/g, ""))/100);
  const tips = [.15,.20,cleanTip];
  const finalTipArray = tips.map(tip => `$${(cleanPrice * tip).toFixed(2)}`)
  console.log(finalTipArray)
  return finalTipArray;
}

const runTests = require('../../../helpers/runTests');
runTests(calculateTips, [
    `assert.deepEqual(calculateTips("$10.00", "25%"), ["$1.50", "$2.00", "$2.50"]);`,
    `assert.deepEqual(calculateTips("$89.67", "26%"), ["$13.45", "$17.93", "$23.31"]);`,
    `assert.deepEqual(calculateTips("$19.85", "9%"), ["$2.98", "$3.97", "$1.79"]);`,
]);
