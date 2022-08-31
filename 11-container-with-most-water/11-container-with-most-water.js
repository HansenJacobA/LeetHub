/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxVolume = -Infinity;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const w = right - left;
        const h = Math.min(height[left], height[right]);
        console.log(h)
        maxVolume = Math.max(maxVolume, (w * h));
        if (height[left] >= height[right]) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return maxVolume;
};