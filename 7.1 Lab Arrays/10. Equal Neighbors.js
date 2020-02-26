equalsNeighbors = array => {
    let output = 0;
    array.forEach((row, indR) => {
        row.forEach((col, indC) => {
            if (indC !== row.length - 1 && col == row[indC + 1]) {
                output++;
            }
            if (indR !== array.length - 1 && col == array[indR + 1][indC]) {
                output++;
            }
        });
    });
    return output;
}
console.log(equalsNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));
console.log(equalsNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]))
console.log(equalsNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]));