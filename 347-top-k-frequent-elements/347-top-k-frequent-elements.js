/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const arrs = new Array(nums.length + 1).fill([]);
    const cache = {};
    for (const num of nums) {
        if (cache[num] == undefined) {
            cache[num] = 1;
        } else {
            cache[num] += 1;
        }      
    }
    for (const key in cache) {
        const val = [...arrs[cache[key]], key];
        arrs[cache[key]] = val;
    }
    const topK = [];
    for (let i = arrs.length - 1; i >= 0; i -= 1) {
        if (arrs[i].length && topK.length < k) {
            let idx = 0;
            while (idx < arrs[i].length && topK.length < k) {
                topK.push(arrs[i][idx]);
                idx += 1;
            }
        }
    }
    return topK;
};