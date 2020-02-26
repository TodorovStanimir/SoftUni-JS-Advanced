function sumFirstLastElement(input) {
    'use strict'
    return Number(input[0]) + Number(input[input.length - 1]);
}
console.log(sumFirstLastElement(['20', '30', '40']))