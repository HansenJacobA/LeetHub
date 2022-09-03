/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let m = 0;
    let g = prices.length;
    const l = [];
    const r = [];
    for (let i = 0; i < g; i += 1) {
        l[i] = l[i - 1] < prices[i] ? l[i - 1] : prices[i];
    }
    for (let i = g - 1; i >= 0; i -= 1) {
        r[i] = r[i + 1] > prices[i] ? r[i + 1] : prices[i];
    }
    for (let i = 0; i < g; i += 1) {
        m = m > r[i] - l[i] ? m : r[i] - l[i];
    }
    return m;
};