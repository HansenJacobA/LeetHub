/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let ans = 0;
    let sum = 0;
    for (let i = 0; i <= n; i += 1) {
        sum += i;
        if (sum > n) break;
        ans = i;
    }
    return ans;
};