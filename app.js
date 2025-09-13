/* 7) 👇 Ushbu arraydagi string index larini toping 👇

const myArray = [[false, true], [1, 2], 99, 'yaxshi']
*/

const myArray = [[false, true], [1, 2], 99, 'yaxshi']

myArray.forEach((item,i) => {
    if(typeof item == 'string') {
        console.log("Indexsi:", i);
        console.log("Element:", item);
        console.log(item, i);
    }
})