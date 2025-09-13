/* 13)  Berilgan: [21,1, 'Roziya', "array", ["I am array"], null, true, 214]
    👆Tepadagi arrayni natijasini, 👇Pasdagi arrayni holiga keltiring))
                            Yangi Array hosil qiling!
*/
const myArray = [21.1, "Roziya", "array", ["I am array"], null, true, 214]
let newArray = []
myArray.forEach((item) => {
    newArray.push(typeof item)
})

console.log(newArray);