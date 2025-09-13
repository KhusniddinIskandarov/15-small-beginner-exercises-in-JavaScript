/* 12)  Promptdan kiritilgan stringlar orasida "a" harfi necha marta ishtirok etganini aniqlovchi kod yozing!
*/

const word = prompt("istaganingizcha stringlar kiriting! Misol: ==>👇 ", "Assalomu Alaykum ! Qalaysiz Yaxshimisiz ? Yaxshimi ishlar ?")
const result = word.split('')
let counter = 0
result.forEach((item) => {
    if(item == "a" || item == 'A') {
    counter++
    }
})
console.log(counter);
