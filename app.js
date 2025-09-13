/* 16) Berilgan sonning "tarkibidagi" sonlar yig'indisini toping.
        Misol uchun:
        1 + 2 + 3 = 6
        1 + 2 + 3 + ... + 10 = 55
        1 + 2 + 3 + ... 7 = 28
*/

let number = 0

// 1-chi usul
// for (let i = 1; i <= 10; i++) {
//    console.log(number += i)
// }

// 2-chi usul
for (let i = 1; i <= 7; i++) {
    number += i
}

console.log(number);
