function processOddNumbers(input) {
    return input.filter((el, index) => index % 2 !== 0).map(el => el * 2).reverse().join(' ')
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);