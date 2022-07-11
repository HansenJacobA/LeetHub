/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function(n, k) {
//     // create return array
//     // loop through each k value
//     // send to an outer function starting with k value
//     // have array
// };

var combine = function(n, k) {
    let result = [];
    
    function dfs(current, start) {
        if(current.length == k) {
            result.push(current);
            return;
        }
        for(let i = start; i <= n; i++) {
            dfs([...current, i], i + 1);
        }
    }
    
    dfs([], 1);
    return result;
};