/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const counts = {};
    for (let i = 0; i < nums.length; i += 1) {
        if (counts[nums[i]] === undefined) {
            counts[nums[i]] = 1;
            continue;
        }
        counts[nums[i]] += 1;
    }
    const inOrder = Object.entries(counts).sort((a, b) => a[1] - b[1]);
    const topK = [];
    for (let i = inOrder.length - k; i < inOrder.length; i += 1) {
        topK.push(inOrder[i][0]);
    }
    
    return topK;
};