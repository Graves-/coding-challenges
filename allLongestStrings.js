/*
    All Longest String

    Given an array of strings, 
    return another array containing all of its longest strings.

    Example:
        For inputArray = ["aba", "aa", "ad", "vcd", "aba"], 
        the output should be

        allLongestStrings(inputArray) = ["aba", "vcd", "aba"]
*/

function allLongestStrings(inputArray) {
    let longestLen = 0;
    let resultArray = [];
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > longestLen){
            longestLen = inputArray[i].length;
        }
    }
    for(let j = 0; j < inputArray.length; j++){
        if(inputArray[j].length === longestLen){
            resultArray.push(inputArray[j]);
        }
    }
    return resultArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));