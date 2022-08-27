/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const cache = {};
    for (let i = 0; i < nums.length; i += 1) {
        let val = cache[(target - nums[i])];
        if (val === undefined) {
            cache[nums[i]] = i;
        } else {
            return [val, i];
        }
    }
    return [];
};