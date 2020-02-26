// function greatestCommonDivisors(num1, num2) {
//     for (let gcd = Math.min(num1, num2); gcd>=1; gcd--) {
//         if (num1 % gcd === 0 && num2 % gcd === 0) {
//             console.log(gcd);
//             break;
//         }
//     }
// }
greatestCommonDivisors = (num1, num2) => {
    let gtc = Math.min(num1, num2);
    while (num1 % gtc !== 0 || num2 % gtc !== 0) { gtc-- }
    return gtc;
}
console.log(greatestCommonDivisors(15, 5));
console.log(greatestCommonDivisors(2154, 458))
