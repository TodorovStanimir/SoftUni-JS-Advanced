function maxElement(input) {
    return input.sort((a, b) => b - a)[0]
}
console.log(maxElement([10, 20, 5]))
maxElement([1, 44, 123, 33]);