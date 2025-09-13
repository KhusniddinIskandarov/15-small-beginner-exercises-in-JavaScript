/* 19) funksiyaga berilgan raqamni 0 dan o'sha raqamlargacha bo'lgan sonlarini 3,5 va 15 ga bo'linish holatini tehshiring!

Agar sonlar 3 ga bo'linsa - "fizz" 
Agar sonlar 5 ga bo'linsa "buzz" 
Agar sonlar 15 ga bo'linsa "fizzbuzz" deb nomlansin.
*/
const result = []

const fizzBuzFunc = (number) =>  {
    for (let i = 1; i <= number; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
           result.push("FizzBuzz");
        } else if(i % 5 == 0) {
            result.push('Buzz')
        } else if(i % 3 == 0 ) {
            result.push('Fizz')
        } else {
            result.push(i)
        }
        
    }
}
fizzBuzFunc(30)
console.log(result);
