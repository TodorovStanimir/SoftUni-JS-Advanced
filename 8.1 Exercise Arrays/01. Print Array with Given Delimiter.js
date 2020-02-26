// function printArrayWithGivenDelimiter(input) {
//     let delimiter = input.pop();
// console.log(input.join(`${delimiter}`))
// }
function printArrayWithGivenDelimiter(arr) {
    const delimiter = arr.pop()
    return arr.join(`${delimiter}`)
}
console.log(printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']));
console.log(printArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));