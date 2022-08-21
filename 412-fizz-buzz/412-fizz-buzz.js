/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = new Array(n);
    for (let i = 0; i < result.length; i += 1) {
        let idx = i + 1;
        if (idx % 3 == 0 && idx % 5 == 0) {
            result[i] = 'FizzBuzz';
        } else if (idx % 3 == 0) {
            result[i] = 'Fizz';
        }  else if (idx % 5 == 0) {
            result[i] = 'Buzz';
        } else {
            result[i] = idx.toString();
        }
    }
    return result;
};