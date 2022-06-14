/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Create return array
    // Create left values array (LVA)
    // Create right values array (RVA)
    // Create current product variable
    // Iterate right and fill LVA
    // Iterate left and fill RVA
    // Iterate LVA and RVA and fill return array
    
    const result = [];
    const leftValues = [];
    const rightValues = [];
    let product = 1;
    for (let i = 0; i < nums.length; i += 1) {
        leftValues.push(product);
        product *= nums[i];
        rightValues.push(1);
    }
    product = 1;
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        rightValues[i] = product;
        product *= nums[i];
    }
    for (let i = 0; i < nums.length; i += 1) {
        result.push((leftValues[i] * rightValues[i]));
    }
    return result;
};

// Input: array of numbers
// Output: array of products
// Constraints: O(n) time and no use of division
// Edgecases: Products must be of all elements except the current element