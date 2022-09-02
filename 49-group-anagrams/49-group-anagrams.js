/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const cache = {};
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (cache[sorted] == undefined) {
            cache[sorted] = [str];
        } else {
            cache[sorted].push(str);
        }
    }
    return Object.values(cache);
};