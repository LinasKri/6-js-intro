/*

SWITCH STATMENT:

switch() { case, break, default }

*/

const animal = 'cat'; 

switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;

    case 'cat':
        console.log('Meow meow');
        break

    default:
        console.log('Unknown animal');
        break
}

console.log('---------------------');

const day = 5;

switch (day) {
    case 1 :
        console.log('pirmadienis');
        break;
    case 2 :
        console.log('antradienis');
        break;
    case 3 :
        console.log('antradienis');
    default:
        console.log('Nera tokios dienos');            
}

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
       console.log('darbo diena');
       break;
    case 6:   
    case 7:
        console.log('Savaitgalio diena');   
        break;
    default:
        console.log('nera tokios dienos');
        break;
}
switch (day) {
    case 1:    
    case 3:    
    case 5:
    case 7:
       console.log('nelygine diena');
       break;
    case 2:   
    case 4:   
    case 6:
        console.log('lygine diena');   
        break;
    default:
        console.log('nera tokios dienos');
}
console.log('--------------------');

const process = 1;

switch (process) {
    case 1:
        console.log('paimti puodeli');        
    case 2:
        console.log('isideti arbatos');        
    case 3:
        console.log('isideti saldikli');      
    case 4:
        console.log('ipilti vandens');      
    case 5:
        console.log('ismaisyti');        
    case 6:    
        console.log('gerti');      
        break;  
    default:
        console.log('jau viskas sekmingaia atlikta');
        
}