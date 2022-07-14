/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Input - array of nums
    // Output - repeated num
    // Constraint - no modifications and constant space
    
    // Implement Binary Search
    let low = 1, high = nums.length - 1, duplicate = -1;
    
    while (low <= high) {
        let cur = Math.floor((low + high) / 2);
        // Count how many numbers in 'nums' are less than or equal to 'cur'
        let count = 0;
        for (const num of nums) {
            if (num <= cur) count += 1;
        }
        if (count > cur) {
            duplicate = cur;
            high = cur - 1;
        } else {
            low = cur + 1;
        }
    }
    return duplicate;
};