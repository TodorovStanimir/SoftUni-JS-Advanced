// function printEveryNElementFromAnArray(input) {
//     let nElement = Number(input.pop());
//     for (let i = 0; i < input.length; i += nElement) {
//         console.log(input[i]);
//     }
// }
function printEveryNElementFromAnArray(input) {
    const nElement = Number(input.pop());
    return input.filter((el, ind) => ind === 0 || ind % nElement === 0).join('\n')
}
console.log(printEveryNElementFromAnArray(['5', '20', '31', '4', '20', '2']));
console.log(printEveryNElementFromAnArray(['dsa', 'asd', 'test', 'tset', '2']));
console.log(printEveryNElementFromAnArray(['1', '2', '3', '4', '5', '6']));