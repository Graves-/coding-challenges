/*
    Add Two Digits

    You are given a two-digit integer n. Return the sum of its digits.

    For n = 29, the output should be: addTwoDigits(n) = 11.
*/

function sumNumers(num){
    return num.toString().split('').reduce((anterior, actual, i) => {
        return parseInt(anterior) + parseInt(actual);
    });
}

console.log(sumNumers(29));