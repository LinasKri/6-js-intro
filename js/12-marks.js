/*function pazymiuVidurkis(vardas, pazymiai) {
    let suma = 0;

    for (let i = 0; i < pazymiai.length; i++) {
        suma += pazymiai[i];
        
    }
    const average = suma / pazymiai.length;
    //Vardenis: pazymiu vidurkis 6
    console.log(`${vardas}: pazymiu vidurkis yra ${average}`);
}
pazymiuVidurkis('Petriukas,'[10, 2, 8, 4]);
pazymiuVidurkis('Maryte,'[10, 6, 8, 4]);
pazymiuVidurkis('Maryte,'[10, 6, 8, 4]);

*/




const mokykla = [
    ['Petriukas', [10, 2, 8, 4]],
    ['Maryte', [10, 8, 6, 4]],
    ['Alphe', [10, 9, 10, 4]],

];
console.log(mokykla);

for (let i = 0; i < mokykla.length; i++) {
    const mokinys = mokykla[i];
    const name = mokinys[0];
    const marks = mokinys[1]
    

    pazymiuVidurkis(name,mark)
    pazymiuVidurkis( )
}