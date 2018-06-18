function checkPalindrome(inputString) {
    let inputArr = inputString.split('');
    let reversedArr = inputString.split('').reverse();
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr[i] !== reversedArr[i]) return false;
    }
    return true;
}

console.log(checkPalindrome('abac'));
console.log(checkPalindrome('az'));