/*
    Shape Area

    Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

    A 1-interesting polygon is just a square with a side of length 1. 
    An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. 
    You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

    Link: https://codefights.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ
*/

function shapeArea(n) {
    let centro = (n * 2) - 1;
    let repeat = n - 1;
    let area = 0;

    if(repeat === 0){
        console.log(1);
        return 1;
    }

    let restar = 2;
    for(let i=0; i < repeat; i++){
        area = area + (centro - restar);
        restar += 2;
    }
    return (area * 2) + centro;
}

//shapeArea(1);
//shapeArea(2);
//shapeArea(3);
shapeArea(4);
