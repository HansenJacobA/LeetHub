/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length == 1) return 1;
    var longestLength = 0;
    for (let i = 0; i < s.length; i += 1) {
        var currLength = 0;
        var currBank = {};
        for (let j = i; j < s.length; j += 1) {
            if (currBank[s[j]] == undefined) {
                currBank[s[j]] = 1;
                currLength += 1;
                longestLength = Math.max(longestLength, currLength);
            } else {
                break;
            }
        }
    }
    return longestLength;
};