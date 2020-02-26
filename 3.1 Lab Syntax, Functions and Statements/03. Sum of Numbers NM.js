// function sumOfNumbersNM(n, m) {
//     n = Number(n);
//     m = Number(m);
//     let result = 0;
//     for (let i = n; i <= m; i++) {
//         result += i;
//     }
//     console.log(result);
// }
sumOfNumbersNM = (n, m) => {
    let result = 0;
    for (let i = Number(n); i <= Number(m); i++) { result += i }
    return result;
}
console.log(sumOfNumbersNM('1', '5'));
console.log(sumOfNumbersNM('-8', '20'))