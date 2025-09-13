/* 8)  Array ichidagi faqat array elementlarini ajratib oling va yangi arrayga joylang 👇

Kutilayotgan natija: [1, 2, 3, 4, 5, 6]
*/

const data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false]

const newData = data.map((item) => {
    if(Array.isArray(item)) {
        return item
    }
})
.filter(Boolean)
.flat()

console.log(newData);
