const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 2;
const f = 3;


function desimteriopaSuma(pirmas, antras) {
    const s = (pirmas + antras) * 10;
    console.log(s);
}

desimteriopaSuma(e, f)
console.log('----------------');
desimteriopaSuma(a, b)
console.log('----------------');
desimteriopaSuma(c, d)



console.log('----------------');


function labas(vardas, amzius, vietovardis) {
    console.log(`labas, as esu ${vardas} ir man ${amzius} metai ir gyvenu ${vietovardis}.`);
}
labas('Petras', 88, 'vilniuje');
labas('Maryte', 77, 'Kaune');
labas('Alphe', 5, 'namie');

//f(x) = x*x;
function kvadratu(x) {
    console.log(x * x);
}
kvadratu(5)
kvadratu(55)
kvadratu(5554845)