/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const cache = {};
    for (let i = 0; i < nums.length; i += 1) {
        cache[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i += 1) {
        const remainder = target - nums[i];
        if (cache[remainder] !== undefined && cache[remainder] !== i) {
            return [cache[remainder], i];
        }
    }
    return [];
};