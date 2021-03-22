/*
https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
*/


const areaOrPerimeter = function(l , w) {
    if (l === w) {
        return l*w;
    } else if (l !== w) {
        return (l+w)*2
    }
    // return l == w ? l*w : 2*(l + w)
};




console.log(areaOrPerimeter(4 , 4) , 16);
console.log(areaOrPerimeter(6 , 10) , 32);