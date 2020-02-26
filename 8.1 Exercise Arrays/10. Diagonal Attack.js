// function diagonalAttack(arr) {
//     let input = [];
//     let leftDiagonal = 0;
//     let rightDiagonal = 0;

//     for (let row of arr) { input.push(row.split(' ').map(Number)) }

//     for (let i = 0; i < input.length; i++) {
//         for (let y = 0; y < input.length; y++) {
//             if (i + y === input.length - 1) { rightDiagonal += input[i][y] }
//             if (i === y) { leftDiagonal += input[i][y] }
//         }
//     }

//     if (leftDiagonal === rightDiagonal) {
//         for (let i = 0; i < input.length; i++) {
//             for (let y = 0; y < input.length; y++) {
//                 if (i + y !== input.length - 1 && i !== y) {
//                     input[i][y] = leftDiagonal;
//                 }
//             }
//         }
//     }

//     input.forEach(row => console.log(row.join(' ')));
// }
function diagonalAttack(arr) {
    let diag1 = 0;
    let diag2 = 0;
    const isDiagonalsEqual = function (diag1, diag2) { return diag1 === diag2 ? true : false }

    output = arr.map(el => el.split(' ').map(Number));

    for (let index = 0; index < output.length; index++) {
        diag1 += (output[index][index]);
        diag2 += output[index][output.length - 1 - index];
    }

    if (isDiagonalsEqual(diag1, diag2)) {
        output.forEach((row, indR) => {
            row.forEach((col, indC) => {
                if (indR !== indC && (indR + indC) !== row.length - 1)
                    output[indR][indC] = diag1;
            });
        });
    }
    output.forEach(row => console.log(row.join(' ')));
}
diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);