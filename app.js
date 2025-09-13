/* 11)  Promptdan kiritilgan istanlgan so'zlarni, misol uchun.
Kiritiladi: "AssALOmu aLAYkum YaxsHIMisIz" 
Natija bu shakilda bo'sin: "aSSALOMU aLAYKUM yAXSHIMISIZ" 
Hohlasangiz birinchi bu shakilda qilib ko'ring! 👇
*/

const salomlashish = prompt("Biron bir 3-ta so'zdan koproq nimadir yozing)) Misol shu kabi👇", "AssALOmu aLAYkum YaxsHIMisIz")

const boshi = salomlashish.charAt().toLowerCase()
const davomi = salomlashish.slice(1).toUpperCase()
const result = " " + boshi.concat(davomi)

console.log(result);

