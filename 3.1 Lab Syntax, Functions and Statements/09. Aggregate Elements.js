// function aggregateElements(arr) {
//     let sumElem = 0;
//     let sumInversedElem = 0;
//     let concatElem = '';
//     for (let elem of arr) {
//         sumElem += elem;
//         sumInversedElem += 1 / elem;
//         concatElem += String(elem);
//     }
//     console.log(`${sumElem}\n${sumInversedElem}\n${concatElem}`);
// }

aggregateElements = (arr) => {
    const sumElements = arr.reduce((a, b) => { a += b; return a; }, 0);
    const sumInversedElements = arr.reduce((a, b) => { a += 1 / b; return a; }, 0);
    const concatElements = arr.reduce((a, b) => { a += b; return a; }, '');
    return `${sumElements}\n${sumInversedElements}\n${concatElements}`
}
console.log(aggregateElements([1, 2, 3]));
console.log(aggregateElements([2, 4, 8, 16]));