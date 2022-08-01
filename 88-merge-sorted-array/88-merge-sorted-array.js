/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i += 1) {
        nums1[i] = nums2[n - 1];
        n -= 1;
    }
    
    for (let k = 0; k < nums1.length; k += 1) {
        for (let i = nums1.length - 1; i >= 0; i -= 1) {
            let runner = i;
            while (runner > 0 && nums1[runner] < nums1[runner - 1]) {
                const temp = nums1[runner];
                nums1[runner] = nums1[runner - 1];
                nums1[runner - 1] = temp;
                runner -= 1;
            }
        }
    }
    return nums1;
};