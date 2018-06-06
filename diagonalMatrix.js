/*
    Is diagonal Matrix
    Check if the given matrix is diagonal.
*/

const matrix = [
    [1,0,0],
    [0,1,0],
    [0,0,0]
];
  
const matrix4 = [
    [1,0,0,0],
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1]
];
  
const matTest = [
    [1,0,0,0], 
    [0,5,0,0], 
    [0,0,0,0], 
    [0,0,0,1000]
];
  
//Diagonal matrix all entries are null except for the main diagonal.
//Entries in main diagonal can be null or not.

function isDiagonalMatrix(matrix) {
    let diag = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            if(j !== diag){
                if(matrix[i][j] !== 0) return false;
            }
        }
        diag++;
    }
    return true;
}

//console.log(isDiagonalMatrix(matrix));
console.log(isDiagonalMatrix(matTest));