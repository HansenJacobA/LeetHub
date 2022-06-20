/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Input - array
    // Output - repeated number
    // Constraints - no original array modification, constant space
    // Edge Cases -
    
    // Naive solution = Nested for loops checking every pair, 
    // return the matching pair number
    // Space - O(1) Time - O(n^2)
    
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            if (nums[i] === nums[j]) return nums[i];
        }
    }
};