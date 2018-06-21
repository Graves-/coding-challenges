/*
    Add Border

    Given a rectangular matrix of characters, 
    add a border of asterisks(*) to it.

    Example:
        picture = [ "abc",
                    "ded"]
                    the output should be

        addBorder(picture) = [  "*****",
                                "*abc*",
                                "*ded*",
                                "*****"]

*/


function addBorder(picture) {
    let len = picture[0].length + 2;
    let topBot = '';
    for(let i = 0; i < len; i++){
        topBot += '*';
    }
    for(let i = 0; i < picture.length; i++){
        picture[i] = `*${picture[i]}*`;
    }
    picture.unshift(topBot);
    picture.push(topBot);
    return picture;
}

function addBorder2(picture) {
    let len = picture[0].length + 2;
    let result = new Array(picture.length + 2);
    let topBot = '';
    for(let i = 0; i < len; i++){
        topBot += '*';
    }
    for(let i = 0; i < result.length; i++){
        if(i === 0){
            result[i] = topBot;
        }else if(i === result.length - 1){
            result[i] = topBot;
        }else{
            result[i] = `*${picture[i-1]}*`;
        }
    }
    return result;
}

console.log(addBorder([ "abc","ded"]));
console.log(addBorder2([ "abc","ded"]));