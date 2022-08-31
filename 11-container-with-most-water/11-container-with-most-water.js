/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(h) {
    let v = 0;
    let l = 0;
    let r = h.length - 1;
    while (l < r) {
        const w = r - l;
        const t = h[l] < h[r] ? h[l] : h[r];
        v = w * t > v ? w * t : v;
        if (h[l] > h[r]) {
            r -= 1;
        } else {
            l += 1;
        }
    }
    return v;
};