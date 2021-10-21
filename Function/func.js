// function total(){
//     console.log(`5 + 7 = 12`);
// }
// function total(number1, number2){
//     console.log(`${number1} + ${number2} = ${number1 + number2}`);
// }
// function total(number1, number2){
//     return number1 + number2;
// }
// let tempo1 = total(15,16);
// let tempo2 = total(tempo1, 17);
// console.log(`15 + 16 + 17 = ${tempo2}`);
// let n1 = 15, n2 = 16, n3 = 17;
// console.log(`${n1} + ${n2} + ${n3} = ${total(total(n1,n2), n3)}`);
// document.getElementsByTagName('h1')[0].innerHTML = `${n1} + ${n2} + ${n3} = ${total(total(n1,n2), n3)}`;
// document.getElementsByTagName('p')[0].innerHTML = total(total(n1,n2), n3);
// document.getElementsByTagName('div')[0].innerHTML = total(total(n1,n2), n3);

let number1 = 5;
let number2 = 7;
console.log(`n1 = ${number1}, n2 = ${number2}`); // 5- 7
function swap(n1, n2){
    let temp = n1;
    n1 = n2;
    n2 = temp;
    console.log(`n1 = ${n1}, n2 = ${n2}`);
}
swap(number1, number2); //7-5
console.log(`n1 = ${number1}, n2 = ${number2}`); 
// swap(20,30);
// //5-7
// //7-5

// function total(number1=5, number2=7){
//     return number1 + number2;
// }

// console.log(total());
// console.log(total(15, 17));

// function join(separetor=','){

// }