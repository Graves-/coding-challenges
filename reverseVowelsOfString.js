/*
    Reverse Vowels of a String

    Write a function that takes a string as input and reverse only the vowels of a string.
*/

/**
 * @param {string} str
 * @return {string}
 */

function reverseVowels(str){
    let vowels = ['a','e','i','o','u'];
    let reversedVowels = [];
    let result = '';
    for(let i = str.length-1; i >= 0; i--){
        let char = str.charAt(i);
        if(vowels.includes(char)){
            reversedVowels.push(char);
        }
    }
    for(let j=0; j < str.length; j++){
        let char = str.charAt(j);
        if(vowels.includes(char)){
            result += reversedVowels.shift();
        }else{
            result += str[j];
        }
    }
    return result;
}

console.log(reverseVowels("hola"));
console.log(reverseVowels("facebook"));
console.log(reverseVowels("hello world"));