/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    const left = new Array(prices.length);
    const right = new Array(prices.length);
    for (let i = 0; i < prices.length; i += 1) {
        left[i] = Math.min(left[i - 1], prices[i]) || prices[i];
    }
    for (let i = prices.length - 1; i >= 0; i -= 1) {
        right[i] = Math.max(right[i + 1], prices[i]) || prices[i];
    }
    for (let i = 0; i < prices.length; i += 1) {
        max = Math.max(max, right[i] - left[i]);
    }
    return max;
};