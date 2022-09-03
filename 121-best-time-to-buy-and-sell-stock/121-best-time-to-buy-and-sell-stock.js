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
    let maxProfitValue = 0,left=0,right=1;
    while(right < prices.length){
        let difference = prices[right] - prices[left]
        if(prices[left] > prices[right]){
            left = right
        }else if(prices[left] < prices[right]){
            maxProfitValue = Math.max(difference,maxProfitValue)
        }
        right++
    }
    return maxProfitValue
};