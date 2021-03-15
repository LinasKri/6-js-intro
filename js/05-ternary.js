/*

TERNARY OPERATOR: ? (KLAUSTUKAS)

palyginimas ? ka daryti jei tenkina logika : kadaryti jei logikos netenkina

palyginimas ? true : false

*/

const a = 8;
const b = 7;

let ats = '';

if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
}

console.log(ats);


const c = 5;
const d = 7;

const ats2 = c > d ? 'daugiau' : 'ne daugiau';

console.log(ats2);


const pazymaiai = [7, 10, 7];

const suma = pazymaiai[0] + pazymaiai[1] + pazymaiai[2];

const vidurkis = suma / pazymaiai.length;
console.log(vidurkis);