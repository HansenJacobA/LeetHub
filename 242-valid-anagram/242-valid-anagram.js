/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const letters = {};
    for (let i = 0; i < s.length; i += 1) {
        if (letters[s[i]] === undefined) {
            letters[s[i]] = 1;
            continue;
        }
        letters[s[i]] += 1;
    }
    for (let i = 0; i < t.length; i += 1) {
        if (letters[t[i]] === undefined || letters[t[i]] === 0) return false;
        letters[t[i]] -= 1;
    }
    return true;
};