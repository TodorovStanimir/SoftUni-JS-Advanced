class ChristmasDinner {
    //test 1, 2, 3
    _budget
    constructor(_budget) {
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this.budget = _budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error(`The budget cannot be a negative number`);
        }
        this._budget = value;
    }

    get budget() { return this._budget };
    //test 4, 5
    shopping(arr) {
        const [typeProduct, price] = [...arr];

        if (this.budget < price)
            throw new Error('Not enough money to buy this product')

        this.products.push(typeProduct);
        this.budget -= price;

        return `You have successfully bought ${typeProduct}!`
    }
    //test 6, 7
    recipes(recipe) {
        const { recipeName, productsList } = recipe;
        const missingProduct = productsList.filter(product => !this.products.includes(product)).length;

        if (missingProduct)
            throw new Error(`We do not have this product`);

        this.dishes.push(recipe);

        return `${recipeName} has been successfully cooked!`
    }
    //test 8, 9
    inviteGuests(name, dish) {
        const indexDish = this.dishes.findIndex(recipe => recipe.recipeName === dish);

        if (indexDish === -1)
            throw new Error(`We do not have this dish`);

        const indexGuest = Object.keys(this.guests).findIndex(guest => guest === name);

        if (indexGuest !== -1)
            throw new Error(`This guest has already been invited`);

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`
    }
    //test 10
    showAttendance() {
        return Object.entries(this.guests).map(guest => {
            return `${guest[0]} will eat ${guest[1]}, which consists of ${this.dishes.find(recipe => recipe.recipeName === guest[1]).productsList.join(', ')}`
        }).join('\n')
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());