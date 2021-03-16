// 2 //

const text = 'abcdef';
let reverse ='';

for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse
}
console.log(text, '->' , reverse);


// GALIMI VARIANTAI //

// for (let i = 0; i < text.length; i++) {
// reverse += text[text.length - 1 - i]  
// }

// for (let i = text.length; i >= 0; i--) {    
//      reverse += text[i - 1];    
// }

// for (let i = tekstas.length-1; i >= 0; i--) {
//      reverse += text[i];    
// }  


