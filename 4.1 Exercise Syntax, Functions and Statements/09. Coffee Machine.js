// function coffeeMachine(input) {
//     let type = {
//         'coffee caffeine': 0.80,
//         'coffee decaf': 0.90,
//         'tea': 0.80,
//         'milk': (price) => Math.ceil(10 * price * 0.10) / 10,
//         'sugar': 0.10
//     }
//     let incomes = 0;
//     for (let line of input) {
//         let price = 0;
//         let tokens = line.split(', ');
//         const coins = Number(tokens.shift());
//         let typeDrink = tokens.shift();
//         if (typeDrink === 'coffee') {
//             const typeCoffe = tokens.shift();
//             price = type[`${typeDrink} ${typeCoffe}`];
//         } else {
//             price = type[typeDrink];
//         }
//         if (tokens[0] === 'milk') {
//             tokens.shift();
//             price += type['milk'](price);
//         }
//         if (Number(tokens[0]) > 0 && Number(tokens[0]) <= 5) {
//             price += type['sugar'];
//         }
//         if (coins >= price) {
//             console.log(`You ordered ${typeDrink}. Price: $${price.toFixed(2)} Change: $${(coins - price).toFixed(2)}`)
//             incomes += price;
//         } else {
//             console.log(`Not enough money for ${typeDrink}. Need $${(price - coins).toFixed(2)} more.`)
//         }
//     }
//     console.log(`Income Report: $${incomes.toFixed(2)}`);
// }

coffeeMachine = (arr) => {
    const prices = {
        totalPrice: 0,
        drink: function (drink, kindCoffee) { return drink === 'tea' ? 0.80 : kindCoffee === 'caffeine' ? 0.80 : 0.90 },
        milk: function (line) { return line.includes('milk') ? 0.10 : 0 },
        sugar: function (line) { return line != 0 ? 0.10 : 0 },
        toPrint: function (coins, price, drink) {
            if (coins >= price) {
                this.totalPrice += price;
                return `You ordered ${drink}. Price: $${price.toFixed(2)} Change: $${(coins - price).toFixed(2)}`;
            } else {
                return `Not enough money for ${drink}. Need $${(price - coins).toFixed(2)} more.`;
            }
        }
    }
    let output = [];
    arr.forEach(line => {
        line = line.split(', ');
        const coins = Number(line[0]);
        const drink = line[1];
        const price = prices.drink(drink, line[2]) + prices.milk(line) + prices.sugar(line[line.length - 1])
        output.push(prices.toPrint(coins, price, drink));
    });
    output.push(`Income Report: $${prices.totalPrice.toFixed(2)}`);
    return output.join('\n');
}
console.log(coffeeMachine(['1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']));
console.log(coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']));