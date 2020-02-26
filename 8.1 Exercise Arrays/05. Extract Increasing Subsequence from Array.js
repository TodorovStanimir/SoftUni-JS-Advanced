// function extractIncreasingSubsequenceFromArray(input) {
//     let currentMaxNumber = Number.MIN_SAFE_INTEGER;
//     let result = input.filter(elem => {
//         if (currentMaxNumber <= elem) {
//             currentMaxNumber = elem;
//             return true;
//         } else {
//             return false;
//         }
//     });
//     console.log(result.join('\n'))
// }
function extractIncreasingSubsequenceFromArray(input) {
    return input.reduce((result, el) => {
        if (el >= result[result.length - 1] || result.length === 0)
            result.push(el)
        return result;
    }, []).join('\n')
}
console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));