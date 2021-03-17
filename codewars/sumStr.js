function sumStr(a,b) {
    const pirmas = parseInt(a);
    const antras = parseInt(b);

    if (isNaN(pirmas)) {
        pirmas = 0;
    }
    if (isNaN(antras)) {
        antras = 0;
    }

    return '' + (pirmas + antras);
}


console.log(sumStr("4","5"), '->', "9");
console.log(sumStr("34","5"), '->', "39");
console.log(sumStr("","5"), '->', "5");
console.log(sumStr("34",""), '->', "34");
console.log(sumStr("",""), '->', "0");