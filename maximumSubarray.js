/*
    Maximum Subarray

    Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    Example:
        Input: [-2,1,-3,4,-1,2,1,-5,4],
        Output: 6
        Explanation: [4,-1,2,1] has the largest sum = 6.


Initialize:
max_so_far = 0
max_ending_here = 0

Loop for each element of the array
(a) max_ending_here = max_ending_here + a[i]
(b) if(max_ending_here < 0)
    max_ending_here = 0
(c) if(max_so_far < max_ending_here)
    max_so_far = max_ending_here
return max_so_far
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let size = nums.length;
    let max_so_far = Number.MIN_SAFE_INTEGER, max_ending_here = 0;

    for(let i = 0; i < size; i++){
        max_ending_here = max_ending_here + nums[i];
        if(max_so_far < max_ending_here){
            max_so_far = max_ending_here;
        }
        if(max_ending_here < 0){
            max_ending_here = 0;
        }
    }
    return max_so_far;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))