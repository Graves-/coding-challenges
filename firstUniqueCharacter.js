/*
    First Unique Character in a String

    Given a string, find the first non-repeating character in it and return it's index. 
    If it doesn't exist, return -1.

    Note: You may assume the string contain only lowercase letters.

    Examples:
        s = "leetcode"
        return 0.

        s = "loveleetcode",
        return 2.
*/

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    let map = new Map();

    for(let i = 0; i<s.length; i++){
        if(map.has(s.charAt(i))){
            let times = map.get(s.charAt(i));
            map.set(s.charAt(i), times+1);
        }else{
            map.set(s.charAt(i), 1);
        }
    }

    for (var [k, v] of map.entries()) {
        if(v === 1) return s.indexOf(k);
    }
    return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));