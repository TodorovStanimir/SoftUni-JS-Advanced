const { expect } = require('chai');
// const { beforeEach } = require('mocha');
const PizzUni = require('./02. PizzUni_Ресурси');

describe("class PizzUni", () => {
    let pizzUni;
    beforeEach(function () {
        pizzUni = new PizzUni();
    });

    describe("check constructor of class", function () {
        it("shoud corectly inisialize ane instance with three properties", function () {
            // test 1
            expect(pizzUni.registeredUsers).to.be.a('array');
            expect(pizzUni.registeredUsers).to.deep.equal([]);
            expect(pizzUni.availableProducts).to.be.a('object');
            expect(pizzUni.availableProducts).to.have.property('pizzas');
            expect(pizzUni.availableProducts.pizzas).to.deep.equal(["Italian Style", "Barbeque Classic", "Classic Margherita"]);
            expect(pizzUni.availableProducts).to.have.property('drinks');
            expect(pizzUni.availableProducts.drinks).to.deep.equal(["Coca-Cola", "Fanta", "Water"]);
            expect(pizzUni.orders).to.deep.equal([]);
        });
    });
    //test2, 3, 4, 13
    describe("check function registerUser(email)", function () {
        it("shoud reqister an user with given email in registeredUsers property", function () {
            let result = pizzUni.registerUser('todorov@gmail.com');
            let result1 = () => pizzUni.registerUser('todorov@gmail.com');
            expect(result).to.deep.equals({ email: 'todorov@gmail.com', orderHistory: [] });
            expect(result1).to.throw(`This email address (todorov@gmail.com) is already being used!`);
            expect(pizzUni.registeredUsers).to.deep.equal([{ email: 'todorov@gmail.com', orderHistory: [] }]);
        });
    });
    //test 5, 6, 7, 8, 9, 10
    describe("check function makeAnOrder(email, orderedPizza, orderedDrink)", function () {
        //test 5, 6
        it("shoud throw an Error if email is not register or missing pizza", function () {
            pizzUni.registerUser('todorov@gmail.com');
            let result = () => pizzUni.makeAnOrder('todorov@gmail.com', 'Italiano Style', 'Coca-Cola');
            let result2 = () => pizzUni.makeAnOrder('todorova@gmail.com', 'Italian Style', 'Coca-Cola');
            expect(result).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(result2).to.throw(`You must be registered to make orders!`);
        });
        //test 7, 8, 9, 10
        it("shoud reqister an user with given email in registeredUsers property", function () {
            pizzUni.registerUser('todorov@gmail.com');
            let result = pizzUni.makeAnOrder('todorov@gmail.com', 'Italian Style', 'Coca-Cola');
            expect(pizzUni.orders).to.deep.equal([{ email: 'todorov@gmail.com', "orderedDrink": "Coca-Cola", "orderedPizza": "Italian Style", "status": "pending" }]);
            expect(pizzUni.registeredUsers).to.deep.equal([{ "email": "todorov@gmail.com", "orderHistory": [{ "orderedDrink": "Coca-Cola", "orderedPizza": "Italian Style" }] }])
            expect(result).to.equal(0);
        });

    });
    //test 14, 15
    describe("check function completeOrder()", function () {
        it("shoud change first order with status 'pending' to 'completed'", function () {
            pizzUni.registerUser('todorov@gmail.com');
            pizzUni.makeAnOrder('todorov@gmail.com', 'Italian Style', 'Coca-Cola');
            let result = pizzUni.completeOrder();
            expect(pizzUni.orders).to.deep.equal([{ email: 'todorov@gmail.com', "orderedDrink": "Coca-Cola", "orderedPizza": "Italian Style", "status": "completed" }]);
            expect(result).to.deep.equal({ email: 'todorov@gmail.com', "orderedDrink": "Coca-Cola", "orderedPizza": "Italian Style", "status": "completed" });
        });
    });
    //test 12
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
});


// describe("check function downloadSong(artist, song, lyrics)", function () {
//     it("shoud download song, and add it to allSongs[artist]", function () {
//         let result = pizzUni.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...')
//         //test2
//         expect(pizzUni.allSongs['Eminem']).to.be.a('object');
//         expect(pizzUni.allSongs).to.deep.equals({ Eminem: { rate: 0, votes: 0, songs: ['Venom - Knock, Knock let the devil in...'] } })
//         expect(pizzUni.allSongs['Eminem']['songs'].length).to.equal(1);
//         expect(result).to.deep.equal({ allSongs: { Eminem: { rate: 0, votes: 0, songs: ['Venom - Knock, Knock let the devil in...'] } } })
//     });
// });

// describe("check function playSong(song)", function () {
//     //test 3,4,5,6,7,8,9
//     it("shoud searches all already downloaded songs and returns them", function () {
//         let result = pizzUni.playSong('Venom')
//         //test 2
//         expect(result).to.equal(`You have not downloaded a Venom song yet. Use PizzUni's function downloadSong() to change that!`);
//     });
// });

// describe("check function songsList()", function () {
//     it("shoud return message 'Your song list is empty", function () {
//         let result = pizzUni.songsList
//         //
//         expect(result).to.equal(`Your song list is empty`);
//     });
//     it("shoud get all already downloaded songs and returns them", function () {
//         pizzUni.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
//         pizzUni.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
//         pizzUni.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
//         let result = pizzUni.songsList
//         //
//         expect(result).to.equal('Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. ');
//     });
// });

// describe("check function rateArtist())", function () {
//     it("if artist not exist shoud return message 'The Eminem is not on your artist list.'", function () {
//         let result = pizzUni.rateArtist('Eminem')
//         //test 10
//         expect(result).to.equal(`The Eminem is not on your artist list.`);
//     });
//     it("shoud get all already downloaded songs and returns them", function () {
//         pizzUni.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
//         pizzUni.rateArtist('Eminem', 50)

//         let result = pizzUni.rateArtist('Eminem', 50)
//         //
//         expect(result).to.equal(50);
//     });
// });