const { expect } = require('chai');
// const { beforeEach } = require('mocha');
const BookStore = require('./02.Book Store.js');

describe("class BookStore", () => {
    let store;
    beforeEach(function () {
        store = new BookStore('Store');
    });

    //test 1, 2
    describe("check constructor of class", function () {
        it("shoud corectly inisialize ane instance with three properties", function () {
            expect(store.name).to.be.equal('Store');
            expect(store.books).to.deep.equal([]);
            expect(store.workers).to.deep.equal([]);
            expect(store.workers).to.be.a('Array');
        });
    });

    //test 3, 4
    describe("check function stockBooks([book1, book2, book3, book4])", function () {
        it("shoud add all the books into the book's property", function () {
            let result = store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear'])
            expect(result).to.deep.equals([{ title: 'Inferno', author: 'Dan Braun' }, { title: 'Harry Potter', author: 'J.Rowling' }, { title: 'Uncle Toms Cabin', author: 'Hariet Stow' }, { title: 'The Jungle', author: 'Upton Sinclear' }]);
            expect(store.books.length).to.equal(4);
        });
    });

    //test 5,6,7,8
    describe("check function hire(name, position)", function () {
        it("if the worker is not hired, function have to hire him, and return proper message", function () {
            let result = store.hire('George', 'seller')
            expect(store.workers).to.deep.equals([{ name: 'George', position: 'seller', booksSold: 0 }]);
            expect(result).to.equal('George started work at Store as seller');
        });

        it("shoud throw an Error, if try to register an user for second time", function () {
            store.hire('George', 'seller');
            let result = () => store.hire('George', 'seller')
            expect(result).to.throw('This person is our employee');
        });
    });

    //test 9,10,11
    describe("check function fire(workerName)", function () {
        it("if there is not employee with given name, throw an Error", function () {
            let result = () => store.fire('George');
            expect(result).to.throw(`George doesn't work here`);
        });

        it("if the worker is employee, the function have to fire him, and return proper message", function () {
            store.hire('George', 'seller');
            let result = store.fire('George');
            expect(result).to.equal('George is fired');
            expect(store.workers.length).to.equal(0);
        });
    });

    //test 12,13,14
    describe("check function sellBook(title, workerName)", function () {
        it("if there is not employee with given name, throw an Error", function () {
            store.stockBooks(['Inferno-Dan Braun']);
            let result = () => store.sellBook('Inferno', 'George');
            expect(result).to.throw(`George is not working here`);
        });

        it("if there is not book with the givven title, throw an Error", function () {
            store.hire(['George']);
            let result = () => store.sellBook('Inferno', 'George');
            expect(result).to.throw(`This book is out of stock`);
        });

        it("if the worker is employee, and the book is in store, the book is sold, and the current worker books sold counter is increased by 1", function () {
            store.stockBooks(['Inferno-Dan Braun']);
            store.hire('George', 'seller');
            let result = store.sellBook('Inferno', 'George');
            expect(store.books.length).to.equal(0);
            expect(store.books).to.deep.equal([])
            expect(store.workers.length).to.equal(1);
            expect(store.workers).to.deep.equal([{ name: 'George', position: 'seller', booksSold: 1 }])
        });
    });

    //test 15
    describe("check function printWorkers()", function () {
        it("if there is employers have to print them", function () {
            store.stockBooks(['Inferno-Dan Braun']);
            store.hire('George', 'seller');
            let result = store.printWorkers();
            expect(result).to.equal(`Name:George Position:seller BooksSold:0`);
        });
    });

});

    // //test 3, 4
    // describe("check function stockBooks([book1, book2, book3])", function () {
    //     it("shoud reqister all books in books property", function () {
    //         let result = store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling'])
    //         expect(result).to.deep.equals([{ title: 'Inferno', author: 'Dan Braun' }, { title: 'Harry Potter', author: 'J.Rowling' }]);
    //         expect(store.books.length).to.equal(2);
    //     });
    // });
    // //test 5, 6, 7, 8
    // describe("check function hire(name, position))", function () {

    //     it("shoud reqister an user with given name and positon in workers", function () {
    //         let result = store.hire('George', 'seller');
    //         expect(result).to.equal(`George started work at Store as seller`);
    //         expect(store.workers).to.deep.equal([{ name: 'George', position: 'seller', booksSold: 0 }]);
    //     });

    //     it("shoud throw an Error, if try to register an user for second time", function () {
    //         store.hire('George', 'seller');
    //         let result = () => store.hire('George', 'seller')
    //         expect(result).to.throw('This person is our employee');
    //     });
    // });
    // //test 9, 10, 11
    // describe("check function fire(name)", function () {
    //     it("shoud return an Errow of the emloeyr not work in store", function () {
    //         let result = () => store.fire('George');
    //         expect(result).to.throw(`George doesn't work here`);
    //     });
    //     it("shoud remove employer from store, and return message '{name} is fired'", function () {
    //         store.hire('George', 'seller');
    //         let result = store.fire('George');
    //         expect(result).to.equal('George is fired');
    //         expect(store.workers.length).to.equal(0);
    //         expect(store.workers).to.deep.equal([]);
    //     });
    // });
    // //test 12, 13, 14
    // describe("check function sellBook(title, workerName)", function () {
    //     it("shoud throw an Errow if the argument is wrong emploeyr's name or wrong books's name", function () {
    //         store.hire('George', 'seller');
    //         store.stockBooks(['Inferno-Dan Braun']);
    //         let result = () => store.sellBook('wrongNameBook', 'George');
    //         let result2 = () => store.sellBook('Inferno', 'wrongNameWorker');
    //         expect(result).to.throw('This book is out of stock');
    //         expect(result2).to.throw('wrongNameWorker is not working here');
    //     });
    //     it("if work properly,  have to increaze sold book of employer and remove book, from store.books", function () {
    //         store.hire('George', 'seller');
    //         store.stockBooks(['Inferno-Dan Braun']);
    //         let result = store.sellBook('Inferno', 'George');
    //         expect(store.books.length).to.equal(0);
    //         expect(store.books).to.deep.equal([]);
    //         expect(store.workers[0]).to.deep.equal({ name: 'George', position: 'seller', booksSold: 1 });
    //     });
    // });
    // //test 15
    // describe("check function printWorkers()", function () {
    //     it("shoud return an Errow of the emloeyr not work in store", function () {
    //         store.hire('George', 'seller');
    //         store.stockBooks(['Inferno-Dan Braun']);
    //         store.sellBook('Inferno', 'George');
    //         let result = store.printWorkers();
    //         expect(result).to.equal(`Name:George Position:seller BooksSold:1`);
    //     });
    // });