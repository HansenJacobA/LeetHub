/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanStr = [];
    for (let i = 0; i < s.length; i += 1) {
        const original = s.charCodeAt(i);
        const lowered = s[i].toLowerCase().charCodeAt();
        if (original > 47 && original < 58) {
            cleanStr.push(original);
        } else if (lowered < 123 && lowered > 96) {
            cleanStr.push(lowered);
        }
    }
    return cleanStr.join('') == cleanStr.reverse().join('');
};