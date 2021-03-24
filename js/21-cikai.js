/*
JS galimi ciklai ir "cikliskos" funkcijos/metodai:

(funkcijos)
- for
- for-in
- for-of
- while
- do-while

(metodai)
- foreach
- map
- filter
- reduce
- sort

*/

const list = [ 1, -5, 78, 2, 11, -14, 0, -3];

///// FOR /////

//break: nutraukia ciklo darba
//continue: eiti i sekancia ciklo iteracija, jei tokia yra


for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(item);
}
console.clear()

///// FOR-IN /////

//break: nutraukia ciklo darba
//continue: eiti i sekancia ciklo iteracija, jei tokia yra

for (const i in list){
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(i, item);
}

console.clear()

///// FOR-OF /////

for (const item of list) {
    if (item > 0 ){
        continue;
    }
    console.log(item);
}

console.clear()


///// WHILE ///// (tol kol)

//break: nutraukia ciklo darba
//continue: eiti i sekancia ciklo iteracija, jei tokia yra

let randomNumber = 0; 
let randomNumberCount = 0   


while (randomNumber < 0.9) {
    randomNumber = Math.random(); // [0..1)
    randomNumberCount++;
    console.log(randomNumberCount, randomNumber);
}

console.clear()

let i = 0;
while (i < list.length) {
    const item = list[i];
    if (item > 0) {
        break;          // negalimas continue, nes suks begalini cikla
    }
    console.log(item);
    i++;
}

console.clear()


// DO-WHILE    pirmiausia daro, paskui klausia

//break: nutraukia ciklo darba

let dwi = 0;

do {
    console.log(dwi);
    if (dwi > 2){
        break;
    }
    dwi++
} while (dwi < 5);

console.clear()

// FOREACH

// tai yra cikas, kuris automatiskai eina per sarasa;
// nuo pirmo iki paskutinio nario;

let suma = 0

list.forEach(function (item, i, /*arr*/) {   
    console.log(i, item, /*arr*/);
})

/* list.forEach(item, i, arr) => {   
    console.log(i, item, arr);
}) */

/* list.forEach(item => console.log(item);
}) */
let FEsuma = 0;
list.forEach (n => FEsuma += n)
console.log(FEsuma);

console.clear()

const doubleList = [[1, 5], 15, [8, 99], -40, [-8, -7, 15, 4], [3]];
let dlSuma = 0;
// doubleList.forEach(innerItem => innerItem.forEach(n => dlSuma += n))
doubleList.forEach(
    innerItem => typeof innerItem === 'number'
    ? dlSuma += innerItem
    :innerItem.forEach(n => dlSuma+= n)
);
console.log(dlSuma);

console.clear()

// MAP
// map() metodas perejes per duota sarasa grazina tokio pacio dydzop sarasa,
//tik su pakeistomis reiksmemis

// tekstams MAP neveikia, tik array

const mapList = [1, 2, 3, 4, 5, 6];
const forListSqaure = [];

for (const num of mapList) {
    forListSqaure.push(num * num);
}
console.log(forListSqaure);

const mapListSquare = mapList.map(n => n * n);
console.log(mapListSquare);

/**********************************************************/
console.clear()

// uzdavinys: visi neigiami skaiciai turi buti konvertuoti i nuli
const pazymiai = [10, -8, 2, -6, 8, -2];

const konvertuotiPazymiai = pazymiai.map(n => n < 0 ? 0 : n);
console.log(pazymiai);
console.log(konvertuotiPazymiai);

/**********************************************************/
console.clear()

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

const sveikieji = desimtainiai.map(n => Math.round(n));
console.log(desimtainiai);
console.log(sveikieji);

/**********************************************************/
console.clear()
// pvz su FOR, bet problema, kad reikia overdide'inti const
for (let i = 0; i < desimtainiai.length; i++) {
    desimtainiai[i] = Math.round(desimtainiai[i]);
}
console.log(desimtainiai);    

/**********************************************************/
console.clear()

// FILTER        skirtas modifikuoti reiksmes

// atrinkti tik tikrus pazymius,t.y. [1..10]

const marks = [10, -8, 2, 3.14, -6, 7.5, 8, -2, 11, 55];

const filteredMarks = marks.filter(m => m > 0 && m <= 10 && m % 1 === 0);

console.log(marks);
console.log(filteredMarks);

// palikti zodius is didziosios raides

const dictionary = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const isDidziosios = dictionary.filter(word => word[0] === word[0].toUpperCase());

console.log(dictionary);
console.log(isDidziosios);


/**********************************************************/
console.clear()

// REDUCE
// eina per sarasa, paima visas reiksmes is eiles ir su jomis padaro viena bendra rezultata
// pvz .: jei turim pazymiu sarasa, tai eina per pazymius ir suskaiciuoja pzymiu suma


const pertiukoPazymiai = [10, 2, 8, 6, 4];

let pertiukoPazymiuSuma = 0;
pertiukoPazymiai.forEach(p => pertiukoPazymiuSuma += p);
console.log(pertiukoPazymiuSuma, 'nes petriukoPazymiai 0');

const reducedPazymiai = pertiukoPazymiai.reduce((total, paz) => total + paz, 20);
console.log(reducedPazymiai, 'butu 30 bet yra prideta 20');


/**********************************************************/
console.clear()

// koks gausis tekstas, jei sujungsime visu zoddziu pirmas raides
const dictionary2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const short = dictionary2.reduce((total, word) => total + word[0], '');
console.log(short);


/**********************************************************/
console.clear()


///// SORT /////

const sortAbc = [ 'a', 'c', 'fabrikas', 'fancy', 'baklazanas', 'Bermudai', 'd', 'Antanas'];
const sortedAbc = sortAbc.sort();
console.log(sortedAbc);


const sortList = [ 1, -5, 78, 2, 11, -14, 0, -3];
// console.log(sortList.sort());

// const sorted  = sortList.sort((a, b) => b - a);       // a < b ---> +1
const sortedNumber  = [...sortList].sort((a, b) => a > b ? -1 : 1 );       

console.log(sortList);
console.log(sortedNumber);


/**********************************************************/
console.clear();
