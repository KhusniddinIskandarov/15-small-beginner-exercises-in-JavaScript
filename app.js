/* 18) Funksiyaga array kiritsak, u array ichidagi raqamlarni teskari ishorasiga aylantirib bersin.
// [1, 2, 3, 4, 5] => [-1, -2, -3, -4, -5] 
*/
const numbers = [1, 2, 3, 4, 5] 
console.log(numbers);

let newNambers = []

const myFunc = (arr) => {
    arr.forEach((number) => {
       newNambers.push(number * -1);
    })
}
myFunc(numbers)
console.log(newNambers);
