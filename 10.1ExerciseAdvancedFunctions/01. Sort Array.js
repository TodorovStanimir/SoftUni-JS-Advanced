function sortArray(input, methodSorting) {
    return methodSorting === 'asc'
        ? input.sort((a, b) => a - b)
        : input.sort((a, b) => b - a)
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));