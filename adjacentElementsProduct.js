/*
    Adjacent Elements Product

    Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.


    Example:
        For inputArray = [3, 6, -2, -5, 7, 3], the output should be
        
        adjacentElementsProduct(inputArray) = 21.

        7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
    let largestProd = Number.MIN_SAFE_INTEGER;
    for(let i = 1; i < inputArray.length; i++){
        let result =inputArray[i-1] * inputArray[i];
        if(result > largestProd) {
            largestProd = result;
        }
    }
    return largestProd;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));