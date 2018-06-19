/*
    Matrix Elements Sum

    After they became famous, the CodeBots all decided to move 
    to a new building and live together. The building is represented by 
    a rectangular matrix of rooms. Each cell in the matrix contains an 
    integer that represents the price of the room. 
    Some rooms are free (their cost is 0), but that's probably because 
    they are haunted, so all the bots are afraid of them. 
    That is why any room that is free or is located anywhere below a free 
    room in the same column is not considered suitable for the bots to live in.

    Help the bots calculate the total price of all 
    the rooms that are suitable for them.

    https://codefights.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr
*/

const matrix = [
    [0, 1, 1, 2], 
    [0, 5, 0, 0], 
    [2, 0, 3, 3]
];

const matrix2 = [
    [1,1,1,0], 
    [0,5,0,1], 
    [2,1,3,10]
];

function matrixElementsSum(matrix) {
    let sum = 0;
    let bannedIndex = [];
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0) {
                bannedIndex.push(j);
            }else if(bannedIndex.indexOf(j) === -1){
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}

console.log(matrixElementsSum(matrix2));