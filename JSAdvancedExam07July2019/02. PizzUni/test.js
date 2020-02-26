const { expect } = require('../node_modules/chai');
// const { beforeEach } = require('mocha');
const PizzUni = require('./02.PizzUni.js');

describe("class PizzUni", () => {
    let pizzUni;
    beforeEach(function () {
        pizzUni = new PizzUni();
    });

    //test 1
    describe("check constructor of class", function () {

        it("shoud corectly inisialize ane instance with three properties", function () {
            expect(pizzUni.registeredUsers).to.deep.equal([]);
            expect(pizzUni.availableProducts).to.deep.equal({ pizzas: ["Italian Style", "Barbeque Classic", "Classic Margherita"], drinks: ["Coca-Cola", "Fanta", "Water"] });
            expect(pizzUni.orders).to.deep.equal([]);
        });
    });
    //test 2,3,4,13
    describe("check function registerUser({email})", function () {

        it("shoud register user with givven email and return new registered user", function () {
            let result = pizzUni.registerUser('office@bginvest.bg')
            expect(pizzUni.registeredUsers).to.deep.equal([{ email: 'office@bginvest.bg', orderHistory: [] }]);
            expect(result).to.deep.equal({ email: 'office@bginvest.bg', orderHistory: [] });
        });

        it("shoud throw new Error `This email address (${email}) is already being used!` if the email have been used", function () {
            pizzUni.registerUser('office@bginvest.bg')
            let result = () => pizzUni.registerUser('office@bginvest.bg')
            expect(result).to.throw(`This email address (office@bginvest.bg) is already being used!`);
        });
    });
    //test 5,6,7,8,9,10
    describe("check function makeAnOrder(email, orderedPizza, orderedDrink)", function () {
        it("shoud throw an error if the incoming email is NOT registered in the registeredUsers property", function () {
            let result = () => pizzUni.makeAnOrder('office@bginvest.bg', 'Italian Style', 'Coca-Cola');
            expect(result).to.throw(`You must be registered to make orders!`);
        });
        it("shoud throw an error if the incoming orderedPizza is not one of the pizzas in the availableProducts property.", function () {
            pizzUni.registerUser('office@bginvest.bg')
            let result = () => pizzUni.makeAnOrder('office@bginvest.bg', 'Italian Styles', 'Coca-Cola');
            expect(result).to.throw(`You must order at least 1 Pizza to finish the order.`);
        });
        it("if input data is correct, shoud register user order and return number of order", function () {
            pizzUni.registerUser('office@bginvest.bg')
            let result = pizzUni.makeAnOrder('office@bginvest.bg', 'Italian Style', 'Coca-Cola');
            expect(result).to.equal(0);
            expect(pizzUni.orders).to.deep.equal([{ "email": "office@bginvest.bg", "orderedDrink": "Coca-Cola", "orderedPizza": "Italian Style", "status": "pending" }]);
            expect(pizzUni.registeredUsers).to.deep.equal([{ "email": "office@bginvest.bg", "orderHistory": [{ "orderedDrink": "Coca-Cola", "orderedPizza": "Italian Style" }] }]);
            expect(pizzUni.orders.length).to.be.equal(1);
        });
    });

    describe("check function detailsAboutMyOrder(id)", function () {
        //test 11,12
        describe("check function detailsAboutMyOrder(id)", function () {
            it("shoud return the status of order if id is correct index", function () {
                pizzUni.registerUser('todorov@gmail.com');
                pizzUni.makeAnOrder('todorov@gmail.com', 'Italian Style', 'Coca-Cola');
                pizzUni.makeAnOrder('todorov@gmail.com', 'Barbeque Classic', 'Coca-Cola');
                pizzUni.completeOrder();
                let result = pizzUni.detailsAboutMyOrder(0);
                let result2 = pizzUni.detailsAboutMyOrder(1);
                let result3 = pizzUni.detailsAboutMyOrder(2);
                expect(result).to.equal(`Status of your order: completed`);
                expect(result2).to.equal(`Status of your order: pending`);
                expect(result3).to.equal(undefined)
            });
        });
        //test 14
        it("shoud return status of order if id is a valid", function () {
            pizzUni.registerUser('office@bginvest.bg')
            pizzUni.makeAnOrder('office@bginvest.bg', 'Italian Style', 'Coca-Cola');
            pizzUni.completeOrder()
            let result = pizzUni.detailsAboutMyOrder(0)
            expect(result).to.equal(`Status of your order: completed`);
        });
    });
    //test 15
    describe("check function completeOrder()", function () {
        it("shoud return object with details of order", function () {
            pizzUni.registerUser('office@bginvest.bg')
            pizzUni.makeAnOrder('office@bginvest.bg', 'Italian Style', 'Coca-Cola');
            let result = pizzUni.completeOrder()
            expect(result).to.deep.equal({ "email": "office@bginvest.bg", "orderedDrink": "Coca-Cola", "orderedPizza": "Italian Style", "status": "completed" });
        });
    });
});