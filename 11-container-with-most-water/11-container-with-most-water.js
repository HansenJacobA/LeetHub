/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        let h = Math.min(height[l], height[r]);
        let w = r - l;
        max = Math.max(max, w * h);
        if (height[l] == h) {
            l += 1;
        } else {
            r -= 1;
        }
    }
    return max;
};