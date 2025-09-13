/* 6) promptdan belgilar kiritilsa, Avval meyyorda ko'rsatilgan qiymatni, kegin User ning kiritgan qiymati, agar U meyyordan oshsa, qancha oshganini, Agar meyyotdan kam bo'lsa qancha kamligi ko'rsatadigan kod yozing, Va consolga chiqaring */

let meyyor = 20
const belgilar = prompt('belgilar kiriting!')

if(belgilar.length > meyyor) {
    console.log(`Siz ${meyyor}ta belgi kiritishingiz mumkin, Va Siz ${belgilar.length }ta belgi kiritdingiz, Bu meyyordan ${belgilar.length - meyyor }ta ko'p `);
} else {
    console.log(`Siz ${meyyor}ta belgi kiritishingiz mumkin, Va Siz ${belgilar.length }ta belgi kiritdingiz, Bu meyyordan ${meyyor - belgilar.length }ta kam `);
}