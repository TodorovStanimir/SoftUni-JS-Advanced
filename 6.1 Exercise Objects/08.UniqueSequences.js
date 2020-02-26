// function uniqueSequences(input) {
//     let output = [];
//     input.forEach(element => {
//         let currentArr = JSON.parse(element).sort((a, b) => b - a);
//         let checker = [];
//         for (let arrInOutput of output) {
//             let arrayIsUnique = false;
//             if (arrInOutput.length === currentArr.length) {
//                 for (let i = 0; i < currentArr.length; i++) {
//                     if (arrInOutput[i] !== currentArr[i]) {
//                         arrayIsUnique = true;
//                         break;
//                     }
//                 }
//             } else {
//                 arrayIsUnique = true;
//             }
//             checker.push(arrayIsUnique);
//         }
//         if (!checker.includes(false)) {
//             output.push(currentArr)
//         }
//     });
//     let sortedOutput = output.sort((a, b) => a.length - b.length)
//     sortedOutput.forEach(arr => {
//         console.log(`[${arr.join(', ')}]`)
//     })
// }
function uniqueSequences(input) {
    return [...new Set(input
        .map(JSON.parse)
        .map(el => el.sort((a, b) => b - a))
        .map(JSON.stringify))]
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .map(el => `[${el.join(', ')}]`)
        .join('\n');
}
console.log(uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]))

console.log(uniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
))