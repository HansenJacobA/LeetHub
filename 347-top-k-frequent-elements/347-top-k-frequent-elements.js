/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // input - array nums and limit num
    // output - array of top k nums in nums
    
    // create storage array of arrays
        // used to store counts at array indices
    // create map of values to counts
        // used to fill storage array
    // iterate through nums and fill map
    // iterate through map and fill storage
    // iterate through storage to get top k elements
    // return top k elements
    
    const order = new Array(nums.length + 1).fill([]);
    const counts = {};
    for (const num of nums) {
        counts[num] = counts[num] == undefined ? 1 : counts[num] += 1;
    }
    for (const key in counts) {
        const idx = counts[key];
        order[idx] = [...order[idx], key];
    }
    const result = [];
    for (let i = order.length - 1; i > 0; i -= 1) {
        if (order[i].length) {
            let idx = 0;
            while (idx < order[i].length && result.length < k) {
                result.push(order[i][idx]);
                idx += 1;
            }
        }
    }
    return result;
};