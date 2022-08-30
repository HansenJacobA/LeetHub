/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let str = '';
    strs.forEach(word => str += word.length + '#' + word);
    return str;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    const result = [];
    let idx = 0;
    while (idx < s.length) {
        const poundIdx = s.indexOf('#', idx);
        const numStr = s.substring(idx, poundIdx);
        const num = parseInt(numStr);
        const strBit = s.substring(poundIdx + 1, poundIdx + num + 1);
        result.push(strBit);
        idx = poundIdx + num + 1;
    }
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */