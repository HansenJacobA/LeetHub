/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const cache = {};
    for (let i = 0; i < nums.length; i += 1) {
        if (cache[nums[i]] === undefined) {
            cache[nums[i]] = 1;
            continue;
        }
        cache[nums[i]] += 1;
    }
    for (let i = 0; i < nums.length; i += 1) {
        if (cache[nums[i]] === 1) {
            return nums[i];
        }
    }
    return -1;
};