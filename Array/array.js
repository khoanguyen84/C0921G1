// let arr = [1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for(let i = 0; i < arr.length; i ++  ){
//     console.log(arr[i]);
// }

// for(let index in arr){
//     console.log(arr[index]);
// }

// for(let item of arr){
//     console.log(item);
// }

// for(let i = 0; i < arr.length; i ++  ){
//     console.log(typeof(arr[i]));
// }

// let products = [1, true, "Kẹo", { }, [ "Đường", "Sữa"]];
// for(let i=0; i < products.length; i++){
//     console.log(typeof(products[i]));
// }

// console.log(products);

let matrix = [
    [2, 3, 4],
    [5, 6, 17, 8],
    [7, 8]
]

// for (let i = 0; i < matrix.length; i++) {
//     let str = "";
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (j < matrix[i].length - 1)
//             str += `${matrix[i][j]} - `;
//         else
//             str += `${matrix[i][j]}`;
//     }
//     console.log(str);
// }
// console.log(matrix);
// console.log(matrix[1][2]);

// for (let i in matrix){
//     let str = '';
//     for (let j in matrix[i]){
//         str += `${matrix[i][j]} `;
//     }
//     console.log(str);
// }
for (let array of matrix){
    let str = '';
    for( let value of array){
        str += `${value} `;
    }
    console.log(str);
}