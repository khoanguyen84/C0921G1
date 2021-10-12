let number1 = 6;
let number2 = 10;
let number3 = 9;
// console.log( number1 > number2 ? `max value: ${number1}` : `max value: ${number2}`);
// console.log(`max value: ${number1 > number2 ? number1 : number2}`);

// console.log(`max value: ${(number1 > number2) ?
//     (number1 > number3 ? number1 : number3) :
//     (number2 > number3 ? number2 : number3)
//     }`);
console.log(`max value: ${(number1 > number2 && number1 > number3) ? 
                                            number1 :
                                            (number2 > number3 ? number2 : number3)
    }`);