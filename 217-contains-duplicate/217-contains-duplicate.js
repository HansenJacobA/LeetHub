/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const cache = {};
    for (num of nums) {
        if (cache[num]) return true;
        cache[num] = true;
    }
    return false;
};