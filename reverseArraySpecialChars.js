/*
    Reverse an array without affecting special characters

    Given a string, that contains special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’), 
    reverse the string in a way that special characters are not affected.


    Examples:
        Input:   str = "a,b$c"
        Output:  str = "c,b$a"
        Note that $ and , are not moved anywhere.  
        Only subsequence "abc" is reversed

        Input:   str = "Ab,c,de!$"
        Output:  str = "ed,c,bA!$"
 */
//  65 - 90 A-Z
//  97-122 a-z

 function reverseArraySpecialChars(input){
    let chars = input.split('');
    let reversed = [];
    for(let i = chars.length - 1; i >= 0; i--){
        let code = chars[i].charCodeAt(0);
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            reversed.push(chars[i]);
        }
    }
    for(let j = 0; j < chars.length; j++){
        let code = chars[j].charCodeAt(0);
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            chars[j] = reversed.shift();
        }
    }
    return chars.join('');
 }

console.log(reverseArraySpecialChars("a,b$c"));
console.log(reverseArraySpecialChars("Ab,c,de!$"));
console.log(reverseArraySpecialChars("a!!!b.c.d,e'f,ghi"));