class Kitchen {
    constructor(budget) {
        this.budget = +budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    loadProducts(arrProducts) {
        arrProducts.forEach(product => {
            let [name, quantity, price] = product.split(' ');
            if (this.budget >= +price) {
                this.budget -= +price;
                (this.productsInStock[name]) ? this.productsInStock[name] += +quantity : this.productsInStock[name] = +quantity;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        });
        return this.actionsHistory.join('\n');
    };

    addToMenu(meal, neededProduct, price) {
        if (this.menu[meal])
            return `The ${meal} is already in our menu, try something different.`;
        this.menu[meal] = { products: neededProduct, price: +price };
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        let menu = Object.keys(this.menu);
        return menu.length === 0
            ? `Our menu is not ready yet, please come later...`
            : menu.map(meal => `${meal} - $ ${this.menu[meal].price}`).join('\n') + '\n';
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let neededProducts = {};
        this.menu[meal].products.forEach(product => {
            let [name, quantity] = product.split(' ');
            neededProducts[name] = +quantity;
        })
        let products = Object.keys(neededProducts);
        let availableProducts = Object.keys(this.productsInStock);
        for (let product of products) {
            if (!availableProducts.includes(product) || this.productsInStock[product] < neededProducts[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
        for (let product of products) { this.productsInStock[product] -= neededProducts[product] }
        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.showTheMenu());
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('Pizza'));
console.log(kitchen.makeTheOrder('frozenYogrt'));

// module.exports = {
//     Kitchen: Kitchen,
// }
