/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return Math.floor(Math.sqrt(2*n + .25) - .5);
};