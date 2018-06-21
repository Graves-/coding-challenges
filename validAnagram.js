/*
    Valid Anagram

    Given two strings s and t , write a function to determine if t is an anagram of s.

    Example 1:
        Input: s = "anagram", t = "nagaram"
        Output: true

    Example 2:
        Input: s = "rat", t = "car"
        Output: false

    Note:
        You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */ 

var isAnagram = function(s, t) {
    let orderedS = s.split('').sort();
    let orderedT = t.split('').sort();

    if(s.length !== t.length) return false;

    for(let i=0; i < orderedS.length; i++){
        if(orderedS[i] !== orderedT[i]) return false;
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

var assert = require('assert');
describe('Anagram', function(){
    describe('Valid Anagram', function(){
        it('should return true or false', function(){
            assert.equal(isAnagram("anagram", "nagaram"), [true,false]);
        });
    });
});