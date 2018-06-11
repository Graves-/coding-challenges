/*
    Length of Last Word

    Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
    return the length of last word in the string. If the last word does not exist, return 0.
*/

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s){
    let splitWords = s.split(' ');
    if(splitWords.length <= 1 || s.length === 0) return 0;
    let lastWord = splitWords[splitWords.length - 1];

    return lastWord.length;
}

console.log(lengthOfLastWord("asd asd qweqwe"));