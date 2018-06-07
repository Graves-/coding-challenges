/*
    Happy Number

    Write an algorithm to determine if a number is "happy".

    A happy number is a number defined by the following process: 
        Starting with any positive integer, 
        replace the number by the sum of the squares of its digits, 
        and repeat the process until the number equals 1 (where it will stay), 
        or it loops endlessly in a cycle which does not include 1. 
    
    Those numbers for which this process ends in 1 are happy numbers.

    Example: 
        Input: 19
        Output: true
*/

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    let sum = calculateSquareSum(n);
    while(sum !== 1){
        sum = calculateSquareSum(sum);
        console.log(sum);
    }
    return true;
};

var splitNumbers = function(n){
    return n.toString().split('').map(val => {
        return parseInt(val);
    });
}

var calculateSquareSum = function(n){
    let arr = splitNumbers(n);
    return arr.reduce((prev, act) => {
        return (prev * prev) + (act * act);
    });
}

console.log(isHappy(2));