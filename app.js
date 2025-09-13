/* 10)  Beringan qiymat: "Uzbekistan"
        Kutilayotgan qiymat: "natsikebzU" 
    Hullas berilgan qiymatni tesdkari qilib beradigan kod yozing😉.
*/

const mamlakat = "Uzbekistan"
console.log(mamlakat);

// 1-chi usul
const result = mamlakat.split('').reverse().join("")
console.log("Birinchi usul:" ,result);

// 2-chi usul
let natija = ''
let boshi = mamlakat.split('').reverse()
boshi.forEach((item) => {
    natija += item    
})
console.log("Ikkinchi usul:" ,natija);

