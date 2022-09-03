/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(p) {
//     let m = 0;
//     let l = p[0];
//     for (const n of p) {
//         l = l < n ? l : n;
//         m = m > n - l ? m : n - l;
//     }
//     return m;
// };

var maxProfit = function(prices) {
    
    // Iteratively go through each price. If we
    // find a lower price than the current lower replace it.
    // else calculate the profit for the current price with the lower price
    // yet found and substitute teh maxProfit if it's higher.
    
    let lowestPrice = 0;
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[lowestPrice]) {
            lowestPrice = i;
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - prices[lowestPrice]);
        }
    }
    
    return maxProfit
};