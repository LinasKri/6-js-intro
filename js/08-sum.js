// CIKLO for PANAUDOJIMAS //

// 1 //
/*

0 - 4           = 10
10 - 14         = 60
20 - 24         = 110
0 - 100         = 5050
574 - 815       = labai didelis skaicius
-50 - 50        = 0
-70 - 30        = santykinai didelis skaicius (-2020)
0 - 0           = 0

*/

const nuo = -70;
const iki = 30;
let cikloSuma = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        cikloSuma += i;    
    }    
} else {
    for (let i = iki; i <= nuo; i++) {
        cikloSuma += i;
    }    
}

const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${cikloSuma}`
console.log(ats);



console.log('--------------------');
