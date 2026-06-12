/*
Parking Fee Calculator
Given two strings representing the time you parked your car and the time you picked it up, calculate the parking fee.

The given strings will be in the format "HH:MM" using a 24-hour clock. So "14:00" is 2pm for example.
The first string will be the time you parked your car, and the second will be the time you picked it up.
If the pickup time is earlier than the entry time, it means the parking spanned past midnight into the next day.
Fee rules:

Each hour parked costs $3.
Partial hours are rounded up to the next full hour.
If the parking spans overnight (past midnight), an additional $10 overnight fee is applied.
There is a minimum fee of $5 (only used if the total would be less than $5).
Return the total cost in the format "$cost", "$5" for example.
*/

function calculateParkingFee(parkTime, pickupTime) {
    let hours = 0;
    let isOvernight = false;
    const [parkh,parkm] = parkTime.split(':').map(Number);
    const [pickh,pickm] = pickupTime.split(':').map(Number);

    const subtractDatesInHours = (date1, date2) => {
        const oneHour = 60 * 60 * 1000; // milliseconds in one hour
        const diffInMilliseconds = date1 - date2;
        return Math.ceil(diffInMilliseconds / oneHour); // Convert milliseconds to hours
    }

    const nextDay = (time) => {
        time.setDate(time.getDate() + 1)
        time.setHours(pickh,pickm,0,0)
        return time;
    }

    let newParkTime = new Date();
    let newPickTime = new Date(newParkTime);

    newParkTime.setHours(parkh,parkm,0,0);
    if (pickh > parkh || (pickh === parkh && pickm > parkm)) {
        newPickTime.setHours(pickh,pickm,0,0);
    } else {
        newPickTime = nextDay(newPickTime);
        isOvernight = true;
    }
    hours = subtractDatesInHours(newPickTime, newParkTime);
    let response = hours === 1 ? '$5' : isOvernight ? `$${hours * 3 + 10}` : `$${hours * 3}`;
    return response;
}


const runTests = require('../helpers/runTests');
runTests(calculateParkingFee, `
    Waiting:1. calculateParkingFee("09:00", "11:00") should return "$6".
    Waiting:2. calculateParkingFee("10:00", "10:30") should return "$5".
    Waiting:3. calculateParkingFee("08:10", "10:45") should return "$9".
    Waiting:4. calculateParkingFee("14:40", "23:10") should return "$27".
    Waiting:5. calculateParkingFee("18:15", "01:30") should return "$34".
    Waiting:6. calculateParkingFee("11:11", "11:10") should return "$82".
`);