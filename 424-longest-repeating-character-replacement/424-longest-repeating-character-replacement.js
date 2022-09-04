/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let result = 0;
    const cache = {};
    let l = 0;
    for (let r = 0; r < s.length; r += 1) {
        if (cache[s[r]] == undefined) {
            cache[s[r]] = 1;
        } else {
            cache[s[r]] += 1;
        }
        let max = (() => {
            let m = 0;
            for (const k in cache) {
                m = Math.max(m, cache[k]);
            }
            return m;
        })();
        if (r - l - max < k) {
            result = Math.max(result, r - l + 1);
        } else {
            while (r - l - max >= k) {
                cache[s[l]] -= 1;
                max = (() => {
                    let m = 0;
                    for (const k in cache) {
                        m = Math.max(m, cache[k]);
                    }
                    return m;
                })();
                l += 1;
            }
        }
    }
    return result;
};