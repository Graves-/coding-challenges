/*
    Majority Element

    Given an array of size n, find the majority element. 
    The majority element is the element that appears more than [n/2] times.

    You may assume that the array is non-empty and the majority element always exist in the array.


    Example 1:
        Input: [3,2,3]
        Output: 3

    Example 2:
        Input: [2,2,1,1,1,2,2]
        Output: 2   
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let map = new Map();
    let majorityVal = 0;
    let majorityKey = 0;

    nums.forEach((val, i) => {
        if(map.has(val)){
            let times = map.get(val);
            map.set(val, times+1);
        }else{
            map.set(val, 1);
        }
    });

    map.forEach((val, key) => {
        if(val > majorityVal){
            majorityVal = val;
            majorityKey = key;
        }
    });

    return majorityKey;
};

console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([3,2,3]));