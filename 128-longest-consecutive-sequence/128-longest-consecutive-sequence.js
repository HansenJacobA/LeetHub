/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const cache = {};
    for (const num of nums) {
        cache[num] = num;
    }
    let max = 0;
    for (let num of nums) {
        if (cache[num - 1] !== undefined) continue;
        let currMax = 0;
        while (cache[num] !== undefined) {
            currMax += 1;
            num += 1;
        }
        max = max > currMax ? max : currMax;
    }
    return max;
};