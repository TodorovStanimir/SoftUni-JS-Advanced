// function add(num1) {
//     let result = num1;

//     function calc(num2) {
//         result+=num2;
//         return calc;
//     }

//     calc.toString = function () { return result };
//     return calc;
// }
function add(num1) {
    let result = num1;

    function calc(num2) {
        result += num2;
        return calc
    }
    calc.toString = () => { return result }
    return calc;
}
console.log(add(1).toString());
console.log(add(1)(6)(3).toString());