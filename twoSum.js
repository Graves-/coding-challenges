/*
    Two Sum

    Given an array of integers, 
    return indices of the two numbers such that they 
    add up to a specific target.

    You may assume that each input 
    would have exactly one solution, 
    and you may not use the same element twice.

    Example:
        Given nums = [2, 7, 11, 15], target = 9,

        Because nums[0] + nums[1] = 2 + 7 = 9,
        return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
                if((nums[i] + nums[j]) === target){
                    return [i, j];
                }
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([6,5,12,1], 7));
console.log(twoSum([23,17,11,15], 40));
console.log(twoSum([1,7,10,17], 27));