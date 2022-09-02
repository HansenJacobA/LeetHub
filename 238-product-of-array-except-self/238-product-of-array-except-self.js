/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const lefts = new Array(nums.length).fill(1);
    const rights = new Array(nums.length).fill(1);
    const sums = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i += 1) {
        lefts[i] = lefts[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i -= 1) {
        rights[i] = rights[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < nums.length; i += 1) {
        sums[i] = lefts[i] * rights[i];
    }
    return sums;
};