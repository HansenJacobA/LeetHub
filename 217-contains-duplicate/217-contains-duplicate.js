/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let cache = {};
    for (let i = 0; i < nums.length; i += 1) {
        const currNum = nums[i];
        if (cache[currNum] !== undefined) return true
        cache[currNum] = currNum;
    }
    return false;
};