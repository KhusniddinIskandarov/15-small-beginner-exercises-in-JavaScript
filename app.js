/* 20) o'zingiz haqingizda object yarating va unga haqida methodini qo'shing. U menthoddan foydalanilsa, objectdagi malumotlardan foydalanib o'zingiz haqingizda gapirib bering. */

const husniddinObj = {
    name: 'Husniddin',
    lastName: 'Iskandarov', 
    age: 30,
    region: 'Xorazm',
    isMerried: false,
    job: "Programmer",
    haqida: function() {
        return `
        Assalomu Aleykum, Mening ismim ${this.name}, Familyam ${this.lastName}. Yoshim ${this.age}da. ${this.region}da yashayman. ${this.job} bo'lib faoliyat olib boraman. ${
            this.isMerried? "Uylanganman" : "Hali uylanmaganman."
        } `
    }
}
console.log(husniddinObj.haqida());
