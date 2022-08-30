/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // input - array nums
    // output - array list of nums sum to 0
    
    // plan
    // create cache obj of each num for constant time look up
    // double for loop each num and look for the third num
    // O(n) space and O(n^2) time
    
    const result = {};
    const uniqueNums = nums.sort((a, b) => a - b);
    for (let i = 0; i < uniqueNums.length - 2; i += 1) {
        let left = i + 1;
        let right = uniqueNums.length - 1;
        while (left < right) {
            const sum = uniqueNums[i] + uniqueNums[left] + uniqueNums[right];
            if (sum > 0) {
                right -= 1;
            } else if (sum < 0) {
                left += 1;
            } else {
                result[`${uniqueNums[i]}, ${uniqueNums[left]}, ${uniqueNums[right]}]`] = 
                    [uniqueNums[i], uniqueNums[left], uniqueNums[right]];
                left += 1;
                right -= 1;
            }
        } 
    }
    return Object.values(result);
};