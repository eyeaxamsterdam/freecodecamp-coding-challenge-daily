/*
Second Best
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.
*/

function getLaptopCost(laptops, budget) {
    let selected;
    const desc = [...new Set(laptops.sort((a,b) => b-a))];
    console.log(desc);

    const findPrice = (arr) => {
        let mostExpensive;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < budget) {
                mostExpensive = arr[i];
                break;
            }
        }
        return mostExpensive;
    }

    selected = desc[0] > budget ? findPrice(desc.slice(1)) : budget < desc[desc.length] ? '0' : desc[1]
    
    console.log('selected', selected);

    return selected;
}

getLaptopCost([1500, 2000, 1800, 1400], 1900) //should return 1800
getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900) //should return 1800
getLaptopCost([2099, 1599, 1899, 1499], 2200) //should return 1899
getLaptopCost([2099, 1599, 1899, 1499], 1000) //should return 0
getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450) //should return 1400