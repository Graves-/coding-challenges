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
var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true;
        }else{
            set.add(nums[i]);
        }
    }
    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));