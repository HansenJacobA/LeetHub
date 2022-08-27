/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let cache = {};
    for (let i = 0; i < nums.length; i += 1) {
        if (cache[nums[i]]) {
            return true;
        }
        cache[nums[i]] = true;
    }
    return false;
};