// function solution(num) {
//     return function add(num1) {
//         return [`The sum of ${num} and ${num1} is ${num + num1}`,
//         `The difference of ${num} and ${num1} is ${num - num1}`,
//         `The multiplication of ${num} and ${num1} is ${num * num1}`,
//         `The division of ${num} and ${num1} is ${num / num1}`].join('\n');
//     }
// }

function solution(num) {
    return function add(num1) {
        return num + num1
    }
}
let add5 = solution(5);
console.log(add5(2))
console.log(add5(3));