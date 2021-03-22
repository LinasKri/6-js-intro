/*
https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
*/

function countSheeps(arrayOfSheep) {
    let sheep = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true){
            sheep++
        }
    }
    return sheep
} 



var array1 = [true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true ];
    
console.log(countSheeps(array1) == 17, "There are 17 sheeps in total")
