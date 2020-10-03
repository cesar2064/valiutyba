function countMisorderedPairs(pairs = []) {
    let count = 0;
    if (pairs.length > 0) {
        pairs.reduce((pair1, pair2) => {
            if (pair2 > pair1) {
                count++;
            }
            return pair2;
        })
    }
    return count;
}

console.log(countMisorderedPairs([1, 3, 2, 5, 4]))