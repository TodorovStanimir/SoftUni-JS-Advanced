// function orbit(input) {
//     let output = [];
//     let x = input[2];
//     let y = input[3];
//     for (let i = 0; i < input[0]; i++) {
//         let row = [];
//         for (let z = 0; z < input[1]; z++) {
//             row.push(0);
//         }
//         output.push(row);
//     }

//     for (let i = 0; i < output.length; i++) {
//         let differencex = Math.abs(i - x);
//         for (let z = 0; z < output[i].length; z++) {
//             let differencey = Math.abs(z - y);
//             output[i][z] =  Math.max(differencex, differencey) + 1;
//         }
//         console.log(output[i].join(' '));
//     }
// }
function orbit(input) {
    let matrix = [];
    const [rows, columns, x, y] = [...input]

    for (let row = 0; row < rows; row++) {
        let differenceX = Math.abs(row - x);
        let newRow = []
        for (let col = 0; col < columns; col++) {
            let differenceY = Math.abs(col - y);
            newRow.push(Math.max(differenceX, differenceY) + 1)
        }
        matrix.push(newRow);
    }
    return matrix.map(el => el.join(' ')).join('\n')
}
console.log(orbit([4, 4, 0, 0]));
console.log(orbit([5, 5, 2, 2]));
console.log(orbit([3, 3, 2, 2]));