/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const t = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i += 1) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] > 0) {
                r -= 1;
            } else  if (nums[i] + nums[l] + nums[r] < 0) {
                l += 1;
            } else {
                t.push([nums[i], nums[l], nums[r]]);
                l += 1;
                while (nums[l] == nums[l - 1]) l += 1;
            }
        }
    }
    return t;
};