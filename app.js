/* 2) Promptdan ism kiritilsa, ismni bosh harfi katta qolganlari kichik     harflarda chiqishi kerak bo'lgan kodni yozing! 

Kegin promptdan  yosh kiritilsa, kiritilgan yosh orqali ushbu malumotlar hisoblanib berilishi kerak:

Yani natijada alert(`Salom ${tayorIsm}! Dasturlashga hush kelibsiz! Va Tuglilgan yil (1995), yashagan oy, hafta, kun, soat, daqiqa, soniya larni chiqazib beradigan kodni yozing`)
*/

let ism = prompt("Ism kiriting!")
const yosh = prompt("Yoshingizni kiriting!")

// Ism qismi
let ismBoshi = ism.charAt().toUpperCase()
let ismDavomi = ism.slice(1).toLowerCase()
let tayorIsm = ismBoshi.concat(ismDavomi)

// yosh qismi
let yil = 2025 - yosh
let oy = yosh * 12
let hafta = ((yosh * 365) / 4).toFixed()
let kun = yosh * 365
let soat = kun * 24
let daqiqa = soat * 60
let soniya = daqiqa * 60

alert(`Salom ${tayorIsm}! Siz ${yil}da Tug'ilgansiz, Va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagansiz 😊 !!!`)

console.log(yil);
