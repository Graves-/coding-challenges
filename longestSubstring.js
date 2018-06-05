/*
    Longest Substring Without Repeating Characters

    Given a string, find the length of the longest substring 
    without repeating characters.


    Examples:

    Given "abcabcbb", the answer is "abc", which the length is 3.
    Given "bbbbb", the answer is "b", with the length of 1.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let set = new Set();
    let ans = 0, i = 0, j = 0;
    while(i < n && j < n){
        if(!set.has(s.charAt(j))){
            set.add(s.charAt(j++));
            ans = Math.max(ans, j - i);
        }else{
            set.delete(s.charAt(i++));
        }
    }
    return ans;
}

console.log(lengthOfLongestSubstring('dvdf'));