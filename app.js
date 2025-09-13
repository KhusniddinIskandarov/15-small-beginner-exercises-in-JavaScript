/* 4) array ichidagi ismlarning ohiriga  bek qo'shimchasini qo'shing va yangi array hosil qiling. Natija: shu tarzda ko'rinsin👇

const ismlar = ['Davronbek', "Mansurbek", 'Sardorbek', 'Furqatbek'];
*/

const ismlar = ['Davron', "Mansur", 'Sardor', 'Furqat'];
// console.log(ismlar);

const yangiIsmlar = ismlar.map((ism) => {
    return ism.concat('bek')
})
console.log(yangiIsmlar);
