/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(p) {
    let m = 0;
    let l = p[0];
    for (const n of p) {
        l = l < n ? l : n;
        m = m > n - l ? m : n - l;
    }
    return m;
};