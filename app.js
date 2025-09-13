/* 15) Arrayning berilgan: [1, 2, 3, 4, 5] shu elelmentlariga o'z index(position) raqamini qo'shib yangi array hosil qiling.
Natija: [1, 3, 5, 7, 9] bo'lsin.
*/

const myArray = [1, 2, 3, 4, 5]
const newArray = myArray.map((item, i) => {
    return item += i
})
console.log(newArray);
