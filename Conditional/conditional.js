//let avg = 10.5;

// if (avg >= 9 && avg <= 10) {
//     console.log('Xuat Sac');
// } else if (avg >= 8 && avg < 9) {
//     console.log('Gioi');
// } else if (avg >= 7 && avg < 8) {
//     console.log('Kha');
// } else if (avg >= 6 && avg < 7) {
//     console.log('TB K');
// } else if (avg >= 5 && avg < 6) {
//     console.log('TB');
// } else if(avg >= 0 && avg < 5){
//     console.log('Yeu');
// }else{
//     console.log('Diem khong hop le');
// }

// if(avg < 0 || avg > 10){
//     console.log('Diem khong hop le');
// }else if (avg >= 9){
//     console.log('Xuat Sac');
// }else if (avg >= 8){
//     console.log('Gioi');
// }

// let avg = 7.8;
// let msg = "diem ko hop le";
// if (avg < 5) {
//     // console.log('yeu');
//     msg = "Yeu";
// }
// if (avg >= 5) {
//     // console.log('tb');
//     msg = "tb";
// }
// if (avg >= 6) {
//     // console.log('tb- kha');
//     msg = "tbk";
// }
// if (avg >= 7) {
//     // console.log('kha');
//     msg = "Kha";
// }
// if (avg >= 8) {
//     // console.log('gioi');
//     msg = "Gioi";
// }
// if (avg >= 9) {
//     // console.log('xuat sac');
//     msg = "XS";
// }
// // if (avg >10 || avg<0){
// //     console.log('diem ko hop le');
// // }
// console.log(msg);


let avgScore = 8.8;
if(avgScore < 0 || avgScore > 10){
    console.log("KHL");
}
else{
    if(avgScore >= 9){
        console.log("XS");
    }
    else{
        if(avgScore >= 8){
            console.log("G");
        }
        else{
            if(avgScore >= 7){
                console.log("K");
            }
            else{
                if(avgScore >= 6){
                    console.log("TBK");
                }
                else{
                    if(avgScore >= 5){
                        console.log("XS");
                    }
                    else{
                        console.log("Y");
                    }
                }
            }
        }
    }
}