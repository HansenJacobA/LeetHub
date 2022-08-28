/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let left = Infinity;
    for (let i = 0; i < prices.length; i += 1) {
        left = Math.min(left, prices[i]);
        max = Math.max(max, (prices[i] - left));
    }
    return max;
};