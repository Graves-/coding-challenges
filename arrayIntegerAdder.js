


/**
 * @param {string[]} nums1
 * @param {string[]} nums2
 * @return {string[]}
 */

 function integerAdder(nums1, nums2){
    if(nums1.length === 0 && nums2.length === 0) return 0;
    let firstNumber = parseInt(nums1.join('').toString());
    let secondNumber = parseInt(nums2.join('').toString());

    return (firstNumber + secondNumber).toString().split('');
 }


 console.log(integerAdder(['9','9','9'], ['5','7']));
 console.log(integerAdder(['1','0'], ['5']));
 console.log(integerAdder(['9','9','9'], ['5','7']));


 function secondApproach()

