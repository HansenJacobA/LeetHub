/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let m = 0;
    const l = [];
    const r = [];
    for (let i = 0; i < prices.length; i += 1) {
        let v = prices[i];
        l[i] = Math.min(l[i - 1], v) || v;
    }
    for (let i = prices.length - 1; i >= 0; i -= 1) {
        let v = prices[i];
        r[i] = Math.max(r[i + 1], v) || v;
    }
    for (let i = 0; i < prices.length; i += 1) {
        m = Math.max(m, r[i] - l[i]);
    }
    return m;
};