/* 5) prompt dan kiritilgan viloyat nomi orqali, o'sha viloyatda qancha aholi borligini alert ga chiqaring. */

const viloyatNomi = prompt('Viloyat nomini kiriting!')

switch(viloyatNomi) {
    case 'Xorazm':
        alert('Xorazmda 12 milion aholi bor')
        break;
    case 'Buxoro':
        alert("Buxoroda 2,04 milion aholi bor")
        break;
    case 'Samarqand':
        alert('Samarqandda 4.3 milion aholi bor')
        break;
    default: 
    alert(`Siz kiritgan ${viloyatNomi}: Viloyat bazada mavjud emas`)
}
