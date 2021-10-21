function generateMatrix(size, min, max) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let arr = [];
        for (let j = 0; j < size; j++) {
            arr[j] = Math.floor(Math.random() * (max - min + 1) + min);
        }
        matrix[i] = arr;
    }
    return matrix;
}

function totalEvenValueInMatrix(matrix) {
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 2 == 0) {
                total += matrix[i][j];
            }
        }
    }
    return total;
}

function totalValueInPrimary(matrix) {
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        total += matrix[i][i];
    }
    return total;
}

function totalValueInSecondary(matrix) {
    let total = 0;
    let size = matrix.length;
    for (let i = 0; i < size ; i++) {
        total += matrix[i][size - i - 1];
    }
    return total;
}

function totalValueInMatrix(min, max ,matrix){
    let total = 0;
    for (let i = min; i < max; i++) {
        for (let j = min; j < max; j++) {
            total += matrix[i][j];
        }
    }
    return total;
}

function totalValueInBorderMatrix(matrix){
    let total1 = totalValueInMatrix(0, matrix.length, matrix);
    let total2 = totalValueInMatrix(1, matrix.length - 1, matrix);
    return total1 - total2;
}

function printMatrix(matrix){
    let show = "<table >";
    for (let i = 0; i < matrix.length; i++) {
        show += "<tr>";
        for (let j = 0; j < matrix[i].length; j++) {
            show += `<td>${matrix[i][j]}</td>`;
        }
        show += "</tr>";
    }
    show += "</table>"
    return show;
}

function printTriangleDown(matrix){
    let show = "<table >";
    for (let i = 0; i < matrix.length; i++) {
        show += "<tr>";
        for (let j = 0; j < matrix[i].length; j++) {
            // if(i >= j)
            //     show += `<td>${matrix[i][j]}</td>`;
            // else
            //     show += `<td>&nbsp;&nbsp;</td>`;
            show += `<td>${i >= j ? matrix[i][j] : '&nbsp;&nbsp;'}</td>`;
        }
        show += "</tr>";
    }
    show += "</table>"
    return show;
}

function printTriangleUp(matrix){
    let show = "<table >";
    for (let i = 0; i < matrix.length; i++) {
        show += "<tr>";
        for (let j = 0; j < matrix[i].length; j++) {
            show += `<td>${i > j ? '&nbsp;&nbsp;' : matrix[i][j]}</td>`;
        }
        show += "</tr>";
    }
    show += "</table>"
    return show;
}

function findXValueMatrix(matrix, x){
    let show = "<table >";
    for (let i = 0; i < matrix.length; i++) {
        show += "<tr>";
        for (let j = 0; j < matrix[i].length; j++) {
            show += `<td>${matrix[i][j] == x ? matrix[i][j] : "&nbsp;&nbsp;"}</td>`;
        }
        show += "</tr>";
    }
    show += "</table>"
    return show;
}

function main(size, min, max){
    let matrix = generateMatrix(size, min, max);
    document.getElementById('printMatrix').innerHTML = printMatrix(matrix);
    document.getElementById('printXValueMatrix').innerHTML = findXValueMatrix(matrix,40);
    document.getElementById('printTriangleDown').innerHTML = printTriangleDown(matrix);
    document.getElementById('printTriangleUp').innerHTML = printTriangleUp(matrix);
    let printResult = document.getElementById('result');
    printResult.innerHTML = "";
    printResult.innerHTML += `<li>Total even value in matrix is : ${totalEvenValueInMatrix(matrix)}</li>`;
    printResult.innerHTML += `<li>Total value in primary is : ${totalValueInPrimary(matrix)}</li>`;
    printResult.innerHTML += `<li>Total value in secondary is : ${totalValueInSecondary(matrix)}</li>`;
    printResult.innerHTML += `<li>Total value in border of matrix is : ${totalValueInBorderMatrix(matrix)}</li>`;
}

function process(){
    let size = Number(document.getElementById('size').value);
    let min = Number(document.getElementById('min').value);
    let max = Number(document.getElementById('max').value);
    main(size, min, max);
}


