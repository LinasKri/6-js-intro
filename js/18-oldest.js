/*
Gimines medyje reikia rasti, kas buvo/yra vyriausias?
*/

function oldest(asmuo) {
    let biggestAge = asmuo.age;
    let childAge = 0;


    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            const childAge = oldest(child);

            if (childAge > biggestAge) {
                biggestAge = childAge;
            }
        };
    }


    return biggestAge;
}
const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                 
            ]
        },
        {
            name: 'Jonas',
            age: 43
        },   
    ]
}
const vyriausias = oldest(gimine1);
console.log(vyriausias);