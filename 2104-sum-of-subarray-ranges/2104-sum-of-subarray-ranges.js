/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i; j < nums.length; j += 1) {
            let min = Infinity;
            let max = -Infinity;
            for (let k = i; k <= j; k += 1) {
                min = Math.min(min, nums[k]);
                max = Math.max(max, nums[k]);
            }
            sum += max - min;
        }
    }
    return sum;
};