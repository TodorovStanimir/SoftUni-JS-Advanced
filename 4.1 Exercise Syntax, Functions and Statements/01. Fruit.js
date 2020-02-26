// function fruit(type, weight, price) {
// console.log(`I need $${(weight/1000*price).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${type}.`)
// }

function fruit() {
    return `I need $${(fruit.arguments[1] * fruit.arguments[2] / 1000).toFixed(2)} to buy ${(fruit.arguments[1] / 1000).toFixed(2)} kilograms ${fruit.arguments[0]}.`;
}
console.log(fruit('orange', 2500, 1.8))
console.log(fruit('apple', 1563, 2.35))