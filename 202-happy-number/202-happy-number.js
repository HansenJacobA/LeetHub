/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let cache = {};
    let num = n;
    while (num !== 1 && cache[num] === undefined) {
        cache[num] = true;
        num = JSON.stringify(num).split('');
        num = num.map(val => parseInt(val) ** 2);
        num = num.reduce((prev, curr) => prev + curr);
    }
    return num == 1;
};