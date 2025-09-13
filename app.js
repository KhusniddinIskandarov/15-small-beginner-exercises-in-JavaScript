/* 9)  Array ichidagi  [null, 0, "",  false, undefined, NaN] qiymatlarini ajratib oladiga kod yozing.
*/
const checkData = [null,  'false', 0, 99, false, undefined,'', NaN,'0']
let newCheckData = []

checkData.forEach((data)=> {
    if(!data) {
        newCheckData.push(data)
        // console.log("Kutilgan Falsy qiymatlar:",data);
    } else {
        // console.log("Bular esa Truety qiymatlar:",data);
    }
})

console.log(newCheckData);
