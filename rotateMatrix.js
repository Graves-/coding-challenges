/**
 * @param {integer[][]} a
 * @return {integer[][]}
 */

function rotateMAtrix(mat){
    mat = mat.reverse();
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < i; j++){
            console.log('[',i,']','[',j,']','->', mat[i][j],'       ','[',j,']','[',i,']','->', mat[j][i]);
            let temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }
    return mat;
}

const a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const b = [
    [1,2,3,5],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

console.log(rotateMAtrix(a));
console.log(rotateMAtrix(b));