/**
    Valid Palindrome

    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

    Note: 
        For the purpose of this problem, we define empty string as valid palindrome.

    Example 1:
        Input: "A man, a plan, a canal: Panama"
        Output: true
    
    Example 2:
        Input: "race a car"
        Output: false
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 0) return true;
    let normalized = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed = normalized.split('').reverse().join('');
    for(let i = 0; i < normalized.length; i++){
        if(normalized.charAt(i) !== reversed.charAt(i)) return false;
    }
    return true;
};

console.log(isPalindrome('race a car'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));