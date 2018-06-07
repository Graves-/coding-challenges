/*
    Missing Number

    Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
    find the one that is missing from the array.


    Example 1:
        Input: [3,0,1]
        Output: 2

    Example 2:
        Input: [9,6,4,2,3,5,7,0,1]
        Output: 8
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
    let ordered = nums.sort((a,b) => a-b);
    for(let i=0; i <= nums.length; i++){
        if(i !== nums[i]) return i;
    }
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([0]));
console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]));