/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let m = 0;
    let l = Infinity;
    for (const n of prices) {
        l = Math.min(l, n);
        m = Math.max(m, n - l);
    }
    return m;
};