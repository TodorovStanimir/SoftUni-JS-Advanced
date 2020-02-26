// function largestNumber(num1, num2, num3) {
//     num1 = Number(num1);
//     num2 = Number(num2);
//     num3 = Number(num3);
//     let largetsNum;
//     if (num1 > num2 && num1 > num3) {
//         largestNum = num1;
//     }
//     if (num2 > num3 && num2 > num1) {
//         largestNum = num2;

//     }
//     if (num3 > num1 && num3 > num2) {
//         largestNum = num3;
//     }
//     console.log(`The largest number is ${largestNum}.`)
// }
function largestNumber() {
    const result =  Object.values(largestNumber.arguments).sort((a, b) => b - a)[0];
    return `The largest number is ${result}.`;
}
console.log(largestNumber(5, -3, 16));
console.log(largestNumber(-3, -5, -22.5));