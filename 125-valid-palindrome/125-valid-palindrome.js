/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanStr = [];
    for (let i = 0; i < s.length; i += 1) {
        const lowered = s[i].toLowerCase().charCodeAt();
        if (lowered > 47 && lowered < 58 ||
           lowered < 123 && lowered > 96) {
            cleanStr.push(lowered);
        }
    }
    return cleanStr.join('') == cleanStr.reverse().join('');
};