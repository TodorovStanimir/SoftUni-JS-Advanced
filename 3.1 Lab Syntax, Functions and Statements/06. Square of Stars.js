// function squareOfStars(input) {
//     if (input !== undefined) {
//         for (let i = 1; i <= Number(input); i++) {
//             console.log(('* '.repeat(Number(input))).trim());
//         }
//     } else {
//         squareOfStars(5)
//     }
// }
squareOfStars = (num) => {
    num = num || 5;
    const result = [];
    for (let row = 1; row <= num; row++) {
        result.push('* '.repeat(num).trim());
    }
    return result.join('\n');
}
console.log(squareOfStars());
console.log(squareOfStars(1));
console.log(squareOfStars(2));
console.log(squareOfStars(5));