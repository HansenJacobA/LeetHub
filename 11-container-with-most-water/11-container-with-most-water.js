/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let v = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const w = r - l;
        const h = height[l] < height[r] ? height[l] : height[r];
        v = w * h > v ? w * h : v;
        if (height[l] > height[r]) {
            r -= 1;
        } else {
            l += 1;
        }
    }
    return v;
};