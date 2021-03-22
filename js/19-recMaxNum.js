/*
Rasti didziausia skaiciu bet kokio sudetingumo array'juje.

Salygos:
- visi array elementai yra : arba skaicius, arba array;
- visi skaiciai yra normalus
*/
function recMaxNum(list) {
    let big = -Infinity;


    for (let i = 0; i < list.length; i++){
        const num = list[i];

        

        if (num > big) {
            big = num;
        }
    }

    return 0;
}

const data = [
    1,
    -5,
    [
        -4,
        80
    ],
    78,
    8];

const biggest = recMaxNum(data)
console.log(biggest);