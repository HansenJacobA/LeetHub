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
        l[i] = l[i - 1] < v ? l[i - 1] : v;
    }
    for (let i = g - 1; i >= 0; i -= 1) {
        let v = prices[i];
        r[i] = r[i + 1] > v ? r[i + 1] : v;
    }
    for (let i = 0; i < g; i += 1) {
        m = m > r[i] - l[i] ? m : r[i] - l[i];
    }
    return m;
};