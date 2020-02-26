// function magicMatrices(input) {
//     let sumsOfRowsAndColumns = [];
//     let output = true;

//     for (let row of input) { sumsOfRowsAndColumns.push(row.reduce((a, b) => a + b, 0)) }

//     for (let column in input[0]) {
//         let sumColumn = 0;
//         for (let row of input) {
//             sumColumn += row[column];
//         }
//         sumsOfRowsAndColumns.push(sumColumn);
//     }
//     sumsOfRowsAndColumns.forEach((el, index) => {
//         if (index !== 0 && el !== sumsOfRowsAndColumns[index - 1]) {
//             output = false;
//         }
//     });
//     console.log(output)
// }

// function magicMatrices(input) {
//     const calculateSumOfRow = (row) => { return result = row.reduce((a, b) => a + b, 0) };
//     const calculateSumOfColumn = (input, col) => { return result = input.reduce((a, b) => a + b[col], 0) };

//     const arraySums = [];

//     input.forEach(element => { arraySums.push(calculateSumOfRow(element)); });
//     input.forEach((_, ind, arr) => { arraySums.push(calculateSumOfColumn(arr, ind)); });

//     return (arraySums[0] * arraySums.length === arraySums.reduce((a, b) => a + b, 0)) ? true : false
// }

function magicMatrices(input) {
    const sumFirstRow = input[0].reduce((a, b) => a + b, 0);
    const arrayColumns = input.reduce((acc, row, ind, input) => {
        if (!acc[ind]) {
            acc.push(input.map(el => el[ind]))
        }
        return acc
    }, []);
    return [...input, ...arrayColumns]
        .filter(el => (el.reduce((a, b) => (a + b), 0) === sumFirstRow) === false)
        .length === 0 ? true : false
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));
// console.log(magicMatrices([[0, 1, 2], [0, 1, 2], [0, 1, 2]]));
