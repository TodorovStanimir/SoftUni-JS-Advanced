// function sortArray(input) {
//     input.sort((a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()));
//     console.log(input.join('\n'));
// }
function sortArray(input) {
    return input.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n')
}
console.log(sortArray(['alpha', 'beta', 'gamma']));
console.log(sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortArray(['test', 'Deny', 'omen', 'Default']));