/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let m = 0;
    let l = prices[0];
    for (const n of prices) {
        l = l < n ? l : n;
        m = m > n - l ? m : n - l;
    }
    return m;
};