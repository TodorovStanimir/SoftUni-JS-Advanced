function diagonalSums(input) {
    return input.reduce((result, row, i, arr) => {
        result[0] += row[i];
        result[1] += row[arr.length - 1 - i];
        return result;
    }, [0, 0]).join(' ');
}
console.log(diagonalSums([[20, 40], [10, 60]]));
console.log(diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));