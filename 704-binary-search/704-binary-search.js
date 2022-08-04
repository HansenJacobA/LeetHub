/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middleIdx = Math.floor((left + right) / 2);
        const currentValue = nums[middleIdx];
        if (target === currentValue) {
            return middleIdx;
        }
        if (target < currentValue) {
            right = middleIdx - 1;
            }
        if (target > currentValue) {
            left = middleIdx + 1;
        }
     }
    return -1;
};