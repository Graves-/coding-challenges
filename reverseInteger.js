/*
    Reverse Integer

    Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:
        Input: 123
        Output: 321

    Example 2:
        Input: -123
        Output: -321

    Example 3:
        Input: 120
        Output: 21

    Note:
        Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
        For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    if(x > Number.MAX_SAFE_INTEGER){
        return 0;
    }else{
        let isNeg = x < 0;
        let splitDigits = Math.abs(x).toString().split('').reverse().join('');
        if(isNeg){
            splitDigits = '-' + splitDigits;
        }
        if(parseInt(splitDigits) > Math.pow(2,31)-1 || parseInt(splitDigits) < (Math.pow(2,31)-1)*-1){
            return 0;
        }
        return parseInt(splitDigits);
    }
};

console.log(reverse(120));