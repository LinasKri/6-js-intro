/* 
https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
*/

function enough(cap, on, wait) {
    if (on + wait <= cap) {
        return 0
    } else if (cap - on < wait) {
        let taken = cap - on;
        let diff = taken - wait;
        
        if (diff < 0) {
            diff *= -1;
        }
        return diff
    }
}




console.log(enough(10, 5, 5), 0);
// 0, He can fit all 5 passengers
console.log(enough(100, 60, 50), 10);
// 10, He can't fit 10 out of 50 waiting
console.log(enough(20, 5, 5), 0);
