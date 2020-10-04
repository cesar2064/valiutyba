function countAvailableDays(watchmenCount = 0, days = 0, startingDays = [], endDays = []) {
    let daysWithwatchmen = 0;
    if (watchmenCount > 0 && days > 0 && startingDays.length > 0) {
        daysWithwatchmen = filteredRanges(startingDays, endDays).length;
    }
    return daysWithwatchmen;
}

function filteredRanges(startingDays, endDays) {
    let result = getAllDays(startingDays, endDays);
    return result.filter((day, index) => result.indexOf(day) == index)
}

function getAllDays(startingDays, endDays) {
    let result = [];
    for (let i = 0, length = startingDays.length; i < length; i++) {
        const currentValue = startingDays[i];
        const pair = endDays[i] || currentValue;
        result = result.concat(getDaysRange(currentValue, pair));
    }
    return result;
}

function getDaysRange(start, end) {
    let range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}

console.log(countAvailableDays(3, 10, [1, 2, 8], [4, 5, 9]));