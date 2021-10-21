function generateArray(size, min, max) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return array;
}

function totalArray(arr) {
    // let total = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     total += arr[i];
    // }
    // return total;
    let result = arr.reduce(function (total, value, index) {
        return total += value;
    });
    return result;
}

function powerArray(arr) {
    // let array = [];
    // for (let i = 0; i < arr.length; i++) {
    //     array[i] = arr[i]*arr[i];
    // }
    // return array;

    let result = arr.map(function (value, index) {
        return value * value;
    });
    return result;
}

function findValueInArray(x, arr) {
    // let found = false;
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] == x){
    //         // return true;
    //         found = true;
    //         break;
    //     }
    // }
    // // return false;
    // return found;
    // let result = arr.find(function(value, index){
    //     return value == x;
    // });
    // return result == x;
    return arr.includes(x);
}

function checkInRange(min, max, arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] >= min && arr[i] <= max) {
    //         return true;
    //     }
    // }
    // return false;
    let result = arr.some(function(value, index){
        return value >= min && value <=max;
    });
    return result;
}

function main() {
    let array = generateArray(10, 10, 50);
    console.log(array);
    // console.log(totalArray(array));
    // let array2 = powerArray(array);
    // console.log(array2);
    // console.log(findValueInArray(44, array));
    console.log(checkInRange(1,10, array));
}
main();