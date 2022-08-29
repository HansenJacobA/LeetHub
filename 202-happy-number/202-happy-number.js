/**
 * @param {number} n
 * @return {boolean}
 */

function getNext(n) {
    let totalSum = 0;
    while (n > 0) {
        let d = n % 10;
        n = Math.floor(n / 10);
        totalSum += d * d;
    }
    return totalSum;
}

var isHappy = function(n) {
    let cache = {};
    while (n !== 1 && cache[n] === undefined) {
        cache[n] = true;
        n = getNext(n);
    }
    return n === 1;
};