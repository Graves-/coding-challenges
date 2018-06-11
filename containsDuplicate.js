/*
    Contains Duplicate

    Given an array of integers, find if the array contains any duplicates. 
    Your function should return true if any value appears at least twice in the array, 
    and it should return false if every element is distinct.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums){
    let numSet = new Set();

    for(let i=0; i < nums.length; i++){
        if(numSet.has(nums[i])){
            return true;
        }else{
            numSet.add(nums[i]);
        }
    }
    return false;
}

console.log(containsDuplicate([1,3,4,5,6,7]));
console.log(containsDuplicate([1,1,4,5,6,7]));
console.log(containsDuplicate([1,3,123,3,4,5,6,7]));