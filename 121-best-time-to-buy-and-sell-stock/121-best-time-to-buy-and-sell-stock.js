/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let m = 0;
    let g = prices.length;
    const l = new Array(g);
    const r = new Array(g);
    for (let i = 0; i < g; i += 1) {
        let v = prices[i];
        l[i] = Math.min(l[i - 1], v) || v;
    }
    for (let i = g - 1; i >= 0; i -= 1) {
        let v = prices[i];
        r[i] = Math.max(r[i + 1], v) || v;
    }
    for (let i = 0; i < g; i += 1) {
        m = Math.max(m, r[i] - l[i]);
    }
    return m;
};