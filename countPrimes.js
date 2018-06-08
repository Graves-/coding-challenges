/*
    Count Primes

    Count the number of prime numbers less than a non-negative number, n.

    Example:
        Input: 10
        Output: 4
        Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2)
        return 0;
    // init an array to track prime numbers
    let primes = new Array(n);
    for (let i = 2; i < n; i++)
        primes[i] = true;
    
    for (let i = 2; i <= Math.sqrt(n - 1); i++) {
    // or for (int i = 2; i <= n-1; i++) {
        if (primes[i]) {
            for (let j = i + i; j < n; j += i)
                primes[j] = false;
        }
    }
    
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (primes[i])
            count++;
    }
    return count;
};

console.log(countPrimes(10));