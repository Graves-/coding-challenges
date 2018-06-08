/*
    Rotate Array

    Given an array, rotate the array to the right by k steps, where k is non-negative.

    Example:
        Input: [1,2,3,4,5,6,7] and k = 3
        Output: [5,6,7,1,2,3,4]
        Explanation:
            rotate 1 steps to the right: [7,1,2,3,4,5,6]
            rotate 2 steps to the right: [6,7,1,2,3,4,5]
            rotate 3 steps to the right: [5,6,7,1,2,3,4]

    Example:
        Input: [-1,-100,3,99] and k = 2
        Output: [3,99,-1,-100]
        Explanation: 
            rotate 1 steps to the right: [99,-1,-100,3]
            rotate 2 steps to the right: [3,99,-1,-100]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let counter = 0;
    while (counter < k) {
        let temp = nums[nums.length - 1];
        for (let i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = temp;
        counter++;
    }
};

rotate([1,2,3,4,5,6,7], 3);
rotate([-1,-100,3,99], 2);