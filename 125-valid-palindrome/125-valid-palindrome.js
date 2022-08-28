/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let val = s.toLowerCase();
    let strippedWord =[];
    for (let i = 0; i < val.length; i += 1) {
        let num = val.charCodeAt(i);
        if (num > 96 && num < 123 || num < 58 && num > 47) {
            strippedWord.push(val[i]);
        }
    }
    return [...strippedWord].reverse().join('') === strippedWord.join('');
};