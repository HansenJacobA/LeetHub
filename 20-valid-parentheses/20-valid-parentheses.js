/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = [s[0]];
    let i = 1;
    while (i < s.length) {
        if (pairs[s[i]]) {
            stack.push(s[i]);
        } else if (pairs[stack.pop()] !== s[i]) {
            return false;
        }
        i += 1;
    }
    return stack.length == 0;
};