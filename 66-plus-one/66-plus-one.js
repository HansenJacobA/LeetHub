/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const strNum = digits.join('');
    const num = BigInt(strNum);
    const newNum = num + BigInt(1);
    const newNumStr = newNum.toString();
    const newNumArr = newNumStr.split('');
    return newNumArr;
};