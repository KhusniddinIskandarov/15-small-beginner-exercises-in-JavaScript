// Promptdan ism kiritilsa, ismni bosh harfi katta qolganlari kichik harflarda chiqishi kerak bo'lgan kodni yozing!

let ism = prompt("Ism kiriting!")
let ismBoshi = ism.charAt().toUpperCase()
let ismDavomi = ism.slice(1).toLowerCase()
let natija = ismBoshi.concat(ismDavomi)

alert(`Salom ${natija}! Dasturlashga hush kelibsiz !!!`)



