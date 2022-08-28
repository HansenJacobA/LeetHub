/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const key = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [s[0]];
    for (let i = 1; i < s.length; i += 1) {
        if (key[s[i]] && stack.pop() !== key[s[i]]) return false;
        if (!key[s[i]]) stack.push(s[i]);
    }
    return !stack.length;
};