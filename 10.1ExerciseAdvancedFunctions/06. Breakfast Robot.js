function result() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    const store = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }

    const commands = {
        restock: (ingr, quantity) => {
            store[ingr] += Number(quantity);
            return 'Success';
        },
        prepare: (product, quantity) => {
            const ingredients = Object.keys(recipes[product]);
            let notEnoughtIngr = ingredients
                .filter(key => {
                    return (store[key] < recipes[product][key] * quantity)
                        ? true
                        : false
                })[0];
            if (notEnoughtIngr) {
                return `Error: not enough ${notEnoughtIngr} in stock`;
            } else {
                ingredients.forEach(ingr => { store[ingr] -= recipes[product][ingr] * quantity });
                return 'Success';
            }
        },

        report: () => {
            return Object.entries(store).map(el => `${el[0]}=${el[1]}`).join(' ');
        }
    }

    return function (input) {
        let [command, product, quantity] = input.split(' ');
        quantity = Number(quantity);
        return commands[command](product, quantity);
    }
}
let robot = result();


console.log(robot("restock carbohydrate 10"));
console.log(robot("restock flavour 10"));
console.log(robot("prepare apple 1"));
console.log(robot("restock fat 10"));
console.log(robot("prepare burger 1"));
console.log(robot("report"));
// Result is:
// Success
// Success
// Success
// Success
// Success
// protein=0 carbohydrate=4 fat=3 flavour=5

console.log(robot("prepare turkey 1"));
console.log(robot("restock protein 10"));
console.log(robot("prepare turkey 1"));
console.log(robot("restock carbohydrate 10"));
console.log(robot("prepare turkey 1"));
console.log(robot("restock fat 10"));
console.log(robot("prepare turkey 1"));
console.log(robot("restock flavour 10"));
console.log(robot("prepare turkey 1"));
console.log(robot("report"));
// Result is:
// Error: not enough protein in stock
// Success
// Error: not enough carbohydrate in stock
// Success
// Error: not enough fat in stock
// Success
// Error: not enough flavour in stock
// Success
// Success
// protein=0 carbohydrate=0 fat=0 flavour=0