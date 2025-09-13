/* 3) ismlar array'i ichida, promptdan so'ralayotgan ism bo'lsa, ha bunday  ism bor, agar bo'lmasa, afsus bunday ism yo'q degan yozuv consolga chiqarilishi kerak. */

const ismlar = ['Husniddin', "Ag'abek", 'Sardor', 'Jaloliddin', 'Siyaush'];
const ism = prompt("Kim kerak: ?")

if(ismlar.includes(ism)) {
    console.log("Ha bunday ism ro'yhatda bor!");
} else {
    console.log("Afsus, Bunday ism ro'yhatda yo'q.");
}