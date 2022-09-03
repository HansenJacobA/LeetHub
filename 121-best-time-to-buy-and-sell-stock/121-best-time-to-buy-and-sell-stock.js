/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(p) {
    var m = 0;
    var l = p[0];
    for (var n of p) {
        l = l < n ? l : n;
        m = m > n - l ? m : n - l;
    }
    return m;
};