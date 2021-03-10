console.log(345345);
console.log('345345');
console.log(3.45345);
console.log(3,45345);
console.log("labas");
console.log('rytas');
console.log('Lietuva');
console.log('mano','vardas','yra');
console.log('mano vardas yra');
console.log(':::::::::::::::::::::::::')
/*
KINTAMUJU INICIAVIMO BUDAI:
const -kintamasis, kurio reiksmes negali priskirti is naujo* 
let - kintamas, kurio reiksme gali buti priskirta kiek norite kartu
var - esant galimybei !!!NENAUDOTI!!!

*/
const vardas ='Linas';
console.log(vardas);

const pasisveikinimas = 'Labas rytas Lietuva!!! 🟨🟩🟥';
console.log(pasisveikinimas)

const pirmasSkaicius = 7;
const antrasSkaicius = 77;
const suma = pirmasSkaicius + antrasSkaicius;

console.log(pirmasSkaicius)
console.log(antrasSkaicius)
console.log(suma)

console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

const mathText = pirmasSkaicius + ' + ' + antrasSkaicius + ' = ' + suma;
console.log(mathText)

/*

7
77
84
7 "+" 77 "=" 84
7 + 77 = 84

*/

console.log('-------------------------------');

const name = 'Petras';
const age = 99;

// Petras age is 99.

const petrasAge = name + ' age is ' + age + '.';
console.log(petrasAge)

console.log('--------------------------------')

// sarasas (array)
const pazymiai = [5, 7, 8, 3, 10];
console.log(pazymiai);



const pirmasPazymys = pazymiai[0]
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3];
console.log(pazymiuSuma);

const pazymiuKiekis = pazymiai.length;

const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log('pazymiu suma', pazymiuSuma);
console.log('pazymiu kiekis', pazymiuKiekis);
console.log('pazymiu vidurkis', pazymiuVidurkis);

console.log('---------------------------------')

const x = " "

// is mums zinomos  raidziu abeceles yra "s".//

const abc = ['a', 'b', 'c', 'd', 'e', 'f' ];
console.log(abc);

const abcIlgis = abc.length;
console.log(abcIlgis)
const paskutinesRaidesPozicija = abcIlgis - 1;
const paskutineRaide = abc[paskutinesRaidesPozicija];

const abcAtsakymas = 'Is mums zinomos ' + abcIlgis + ' raidziu abeceles paskutine yra " ' + paskutineRaide + ' ".'
console.log(abcAtsakymas)
