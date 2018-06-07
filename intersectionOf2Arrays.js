/*
    Intersection of Two Arrays

    Given two arrays, write a function to compute their intersection.

    Example:
        Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

    Note:
        Each element in the result should appear as many times as it shows in both arrays.
        The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let intersection = [];
    for(let i=0; i < nums1.length; i++){
        if(nums2.includes(nums1[i])){
            intersection.push(nums1[i]);
            nums2.splice(nums2.indexOf(nums1[i]), 1);
        }
    }
    return intersection;
};

console.log(intersect([1, 2, 2, 1], [2,2]));
console.log(intersect([1,2,2,1], [2]));


