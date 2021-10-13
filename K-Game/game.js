const number = [1,2,3,4,5,6,7,8,9];
const oparator = ['+', 'x'];
let operands = [];
let results =[];
let game =[];
let number_min = 1;
let number_max = 9;
let oparator_min = 1;
let oparator_max = 2;
function ramdonOperand(){
    let number1 = number[ramdom(number_min, number_max)-1];
    let number2 = number[ramdom(number_min, number_max)-1];
    let operand = oparator[ramdom(oparator_min, oparator_max)-1];
    operands.push(`${number1} ${operand} ${number2}`);
    results.push(cals(number1,number2,operand));
}

function ramdom(min, max){
    return Math.floor(Math.random()*(max - min + 1) + 1);
}

function cals(n1, n2, operand){
    let result = 0;
    switch(operand){
        case oparator[0]:{
            result = n1 + n2;
            break;
        }
        case oparator[1]:{
            result = n1 * n2;
            break;
        }
    }
    return result;
}

function main(){
    ramdonOperand();
    console.log(operands);
    console.log(results);
}
main();