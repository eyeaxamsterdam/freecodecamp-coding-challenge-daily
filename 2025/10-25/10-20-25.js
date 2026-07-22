function calculateTips(mealPrice, customTip) {
  const cleanPrice = parseFloat(mealPrice.replace(/[^0-9.-]+/g, ""));
  const cleanTip = parseFloat((customTip.replace(/[^0-9.-]+/g, ""))/100);
  const tips = [.15,.20,cleanTip];
  const finalTipArray = tips.map(tip => `$${(cleanPrice * tip).toFixed(2)}`)
  console.log(finalTipArray)
  return finalTipArray;
}

calculateTips("$10.00", "25%");
calculateTips("$89.67", "26%");
calculateTips("$19.85", "9%");