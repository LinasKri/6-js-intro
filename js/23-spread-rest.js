///// SPREAD (...) /////

const spread1 = [5, 9, -14];
console.log(spread1);
// const spread2 = [5, 9, 7];
const spread2 = [spread1[0], spread1[1], 7];
console.log(spread2);
// const spread3 = [7, 5, 9];
const spread3 = [7, ...spread1];
console.log(spread3);

const spread4 = ['asd', 'qwe', 874, true];
console.log(spread4);

const spread5 = [...spread4];
console.log(spread5);
const spread6 = [...spread4, ...spread1];
console.log(spread6);


const average = () => {
    
}