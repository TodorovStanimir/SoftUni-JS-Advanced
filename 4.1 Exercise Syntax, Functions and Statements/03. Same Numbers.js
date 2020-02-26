// function sameNumbers(num) {
//     let numbersInNumAreTheSame = true;
//     let sumOfDigits = (String(num).split('').map(Number).reduce((a, b) => a + b, 0))
//     let averageSumOfDigits = sumOfDigits/ String(num).length;
//     for (let char of String(num)) {
//         if (Number(char) !== averageSumOfDigits) {
//             numbersInNumAreTheSame = false;
//             break;
//         }
//     }
//     console.log(numbersInNumAreTheSame);
//     console.log(sumOfDigits);
// }
sameNumbers = (num) => {
    const arrNum = String(num).split('').map(Number);
    const sumAllDigits = arrNum.reduce((a, b) => a += b, 0);
    const areSameNumbers = arrNum.filter((el, i, arrNum) => el !== arrNum[0]).length === 0;
    return `${areSameNumbers}\n${sumAllDigits}`;
}
console.log(sameNumbers(2222222));
console.log(sameNumbers(1234))