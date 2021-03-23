function suma(a, b) {
    return a + b;
}
const atsSuma = suma(8, 5);
console.log(atsSuma);

/***********************************************/

// function atimtis(a, b) {
//    return a - b;
// }

// Bevardes funkcijos priskirimas kintamajam
const atimtis = function (a, b) {
    return a - b;
}


const atsAtimtis = atimtis(8, 5);
console.log(atsAtimtis);


/***********************************************/


// arrow function priskirimas kintamajam
const daugyba = (a, b) => {
    return a * b;
}


const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

/***********************************************/

//arrow funkcija priskiriama kintamajam
// jei logika turi tik viena procesa, tai galima nerasyti {} ir return;

const dalyba = (a, b) => a / b;

const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);


/***********************************************/


//arrow funkcija priskiriama kintamajam
// jei logika turi tik viena procesa, tai galima nerasyti {} ir return;
// jeigu parametru yra tik 1, , tai galima nerasyti ()

const kvadratu = (a) => a * a;

const atsKvadratu = kvadratu(8);
console.log(atsKvadratu);
