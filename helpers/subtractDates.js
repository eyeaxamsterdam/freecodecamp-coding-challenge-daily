function subtractDatesInHours(date1, date2) {
    const oneHour = 60 * 60 * 1000; // milliseconds in one hour
    const diffInMilliseconds = date1 - date2;
    return Math.round(diffInMilliseconds / oneHour); // Convert milliseconds to hours
}