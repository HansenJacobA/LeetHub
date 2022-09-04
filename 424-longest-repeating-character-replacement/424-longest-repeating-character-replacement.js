/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let result = 0;
    const cache = {};
    let l = 0;
    let max = 0;
    for (let r = 0; r < s.length; r += 1) {
        cache[s[r]] = cache[s[r]] == undefined ? 1 : cache[s[r]] += 1;
        max = max > cache[s[r]] ? max : cache[s[r]];
        if (r - l - max < k) {
            result = result > r - l + 1 ? result : r - l + 1;
        } else {
            while (r - l - max >= k) {
                cache[s[l]] -= 1;
                l += 1;
            }
        }
    }
    return result;
};