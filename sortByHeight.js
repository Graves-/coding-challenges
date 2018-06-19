/*
    Sort by Height

    Some people are standing in a row in a park. 
    There are trees between them which cannot be moved. 
    Your task is to rearrange the people by their heights in a 
    non-descending order without moving the trees.


    Example

    For a = [-1, 150, 190, 170, -1, -1, 160, 180], 
    the output should be:

    sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]
*/

function sortByHeight(a) {
    let treeIndices = [];
    let resultArray = [];
    let sortedArray = a.filter(item => {
        return item !== -1;
    }).sort((a,b) =>{
        return b-a;
    });

    for(let i = 0; i < a.length; i++){
        if(a[i] === -1){
            treeIndices.push(i);
        }
    }

    for(let i = 0; i < a.length; i++){
        if(i === treeIndices[0]){
            resultArray.push(-1);
            treeIndices.shift();
        }else{
            resultArray.push(sortedArray.pop());
        }
    }
    return resultArray;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);