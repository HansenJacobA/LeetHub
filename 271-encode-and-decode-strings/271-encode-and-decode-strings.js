/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let str = '';
    strs.forEach(s => { str += s.length + '#' + s; });
    return str;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    const arr = [];
    for (let i = 0; i < s.length; i += 1) {
        let findPoundIdx = i;
        while (s[findPoundIdx] !== '#' && findPoundIdx < s.length) {
            findPoundIdx += 1;
        }
        let numStr = s.substring(i, findPoundIdx);
        let num = parseInt(numStr);
        let str = s.substring(findPoundIdx + 1, findPoundIdx + num + 1);
        arr.push(str);
        i = findPoundIdx + num;
    }
    return arr;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */