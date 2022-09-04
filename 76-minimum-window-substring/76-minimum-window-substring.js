/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let output = '';
    const reqLetters = {};
    let reqCount = 0;
    const currLetters = {};
    for (let i = 0; i < t.length; i += 1) {
        if (reqLetters[t[i]] == undefined) {
            reqLetters[t[i]] = 1;
            reqCount += 1;
            currLetters[t[i]] = 0;
        } else {
            reqLetters[t[i]] += 1;
        }
    }
    let currCount = 0;
    let l = 0;
    for (let r = 0; r < s.length; r += 1) {
        if (currLetters[s[r]] !== undefined) {
            currLetters[s[r]] += 1;
            if (currLetters[s[r]] == reqLetters[s[r]]) {
                currCount += 1;
                    while (currCount == reqCount) {
                        if (output == '' || output.length > r - l + 1) {
                            output = s.substring(l, r + 1);
                        }
                        if (currLetters[s[l]] !== undefined) {
                            currLetters[s[l]] -= 1;
                            if (currLetters[s[l]] < reqLetters[s[l]]) currCount -= 1;
                        }
                        l += 1;
                    }
            }
        }
    }
    return output;
};